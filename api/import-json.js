const { mapCharacter } = require('./_shared');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Método no permitido' }); return; }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch {
      res.status(400).json({ error: 'JSON inválido. Asegurate de pegar el contenido completo del archivo exportado.' });
      return;
    }
  }

  if (!body) {
    res.status(400).json({ error: 'No se recibió contenido.' });
    return;
  }

  // Support both the API-wrapped format {data: {...}} and the raw character object
  const charData = body.data || body;

  if (!charData || typeof charData !== 'object' || !charData.name) {
    res.status(422).json({ error: 'Formato no reconocido. Pegá el JSON completo exportado desde DnD Beyond.' });
    return;
  }

  try {
    const character = mapCharacter(charData);
    res.status(200).json({ success: true, character });
  } catch {
    res.status(500).json({ error: 'Error al procesar el personaje. Verificá que el JSON sea de DnD Beyond.' });
  }
};
