# Drawer Pattern — MasterDnD

## Regla de diseño
- **Drawer** → todo contenido configurable/formulario (crear campaña, unirse, vincular personaje, nueva sesión, nuevo marcador, entregar item, etc.)
- **Modal centrado** → SOLO confirmaciones destructivas: "¿Deseás eliminar X? [Cancelar] [Eliminar]"

## Sistema CSS (ya existe en index.html como `.drawer-*`)

El drawer se desliza desde la derecha. Estructura HTML:

```html
<div class="drawer-backdrop" id="myDrawerBackdrop" onclick="closeMyDrawer()"></div>
<div class="drawer" id="myDrawer">
  <div class="drawer-header">
    <span class="drawer-title">Título</span>
    <button class="drawer-close" onclick="closeMyDrawer()">✕</button>
  </div>
  <div class="drawer-body">
    <!-- contenido scrollable -->
  </div>
  <div class="drawer-footer">
    <button class="camp-modal-submit" onclick="doAction()">Acción principal</button>
  </div>
</div>
```

Para abrir: `openDrawer('myDrawer','myDrawerBackdrop')`
Para cerrar: `closeDrawer('myDrawer','myDrawerBackdrop')`

## Funciones globales (ya existen en index.html)
- `openDrawer(drawerId, backdropId)` — agrega clase `open`, muestra backdrop
- `closeDrawer(drawerId, backdropId)` — quita clase `open`

## Notas de implementación
- El drawer reutiliza `campModal`/`campModalContent` internamente — no crear elementos nuevos por cada form, inyectar en `drawerBody`
- z-index drawer: 800; backdrop: 799
- Width drawer: 440px desktop / 100vw mobile
- El backdrop tiene `pointer-events:none` cuando drawer está cerrado
