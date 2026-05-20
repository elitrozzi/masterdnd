const { mapCharacter } = require('./_shared');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'GET') { res.status(405).json({ error: 'Método no permitido' }); return; }

  const { id } = req.query;
  if (!id || !/^\d+$/.test(String(id).trim())) {
    res.status(400).json({ error: 'ID inválido. La URL debe ser: https://www.dndbeyond.com/characters/12345678' });
    return;
  }

  const charId = String(id).trim();
  let response;
  try {
    response = await fetch(
      `https://character-service.dndbeyond.com/character/v5/character/${charId}`,
      {
        headers: {
          'Accept': 'application/json',
          'Referer': 'https://www.dndbeyond.com/',
          'Origin': 'https://www.dndbeyond.com',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
        signal: AbortSignal.timeout(12000),
      }
    );
  } catch (err) {
    const msg = err.name === 'TimeoutError'
      ? 'DnD Beyond tardó demasiado en responder. Intentá de nuevo.'
      : 'Error de conexión con DnD Beyond. Revisá tu internet.';
    res.status(504).json({ error: msg });
    return;
  }

  if (!response.ok) {
    const msg = response.status === 404
      ? 'Personaje no encontrado. Verificá que la URL sea correcta.'
      : response.status === 401 || response.status === 403
        ? 'El personaje es privado. Usá la opción "Pegar JSON" o hacelo público en DnD Beyond → ⚙️ → Privacy → Public.'
        : `Error de DnD Beyond (${response.status}). Intentá de nuevo.`;
    res.status(response.status).json({ error: msg });
    return;
  }

  let json;
  try { json = await response.json(); } catch {
    res.status(422).json({ error: 'Respuesta inválida de DnD Beyond.' });
    return;
  }

  if (!json?.data) {
    res.status(422).json({ error: 'Respuesta inesperada de DnD Beyond.' });
    return;
  }

  try {
    const character = mapCharacter(json.data);
    res.status(200).json({ success: true, character });
  } catch {
    res.status(500).json({ error: 'Error al procesar el personaje.' });
  }
};
