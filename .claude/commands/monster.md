# /monster — Actualizar ilustraciones de monstruos

Procesa las nuevas imágenes de la carpeta `/Users/elitrozzi/Documents/claude/MasterDnD/Imágenes/Monstruos` y actualiza el compendio de MasterDND con los sprites.

## Pasos a seguir

### 1. Detectar imágenes nuevas
- Listar todos los archivos en `/Users/elitrozzi/Documents/claude/MasterDnD/Imágenes/Monstruos`
- Comparar con los archivos ya copiados en `assets/` (buscar `monsters-*.png`)
- Identificar cuáles aún no fueron procesados

### 2. Para cada imagen nueva
- Leer/visualizar la imagen con el tool Read
- Identificar la grilla: contar filas y columnas (normalmente 3×4, a veces 3×3)
- Leer las etiquetas de cada celda (col, row) para mapear nombre → posición
- Copiar el archivo a `assets/monsters-X.png` (siguiente letra disponible: e, f, g…)

### 3. Actualizar `MONSTER_SPRITES` en index.html
- Buscar el bloque `const MONSTER_SPRITES={` en index.html
- Agregar las nuevas entradas con formato:
  ```
  'nombre-api':{f:'monsters-X',c:COL,r:ROW,tc:TOTAL_COLS,tr:TOTAL_ROWS},
  ```
- El nombre de la API es el nombre del monstruo en minúsculas con guiones, por ejemplo:
  - "Adult Black Dragon" → `adult-black-dragon`
  - "Beholder" → `beholder`
  - "Mind Flayer" → `mind-flayer`

### 4. Fórmula de posición del sprite
Los sprites usan CSS `background-size` + `background-position`:
- `background-size: tc*100% tr*100%` (ej. 300% 400% para 3×4)
- `background-position-x: col/(tc-1) * 100%` (0%, 50%, 100% para 3 cols)
- `background-position-y: row/(tr-1) * 100%` (0%, 33.33%, 66.67%, 100% para 4 rows)
- La función `monsterSpriteCss(index)` en index.html aplica esto automáticamente

### 5. Verificar
- Confirmar que el bloque `MONSTER_SPRITES` está cerrado correctamente con `};`
- Confirmar que el archivo assets/ fue copiado

## Notas importantes
- Si un monstruo ya existe en `MONSTER_SPRITES`, NO sobreescribir (a menos que se pida explícitamente)
- Si hay celdas duplicadas en la imagen (mismo monstruo aparece 2 veces), usar solo la primera aparición
- La carpeta de imágenes puede tener nombres con espacios y fechas (como "ChatGPT Image..."), normalizar al copiar
- Archivo de referencia: `/Users/elitrozzi/Documents/claude/MasterDnD/index.html`
- Imágenes destino: `/Users/elitrozzi/Documents/claude/MasterDnD/assets/monsters-X.png`
