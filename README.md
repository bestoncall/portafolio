# Portafolio — Oscar González

Portafolio personal bilingüe (español / inglés) hecho con React + Vite + Tailwind CSS.

## Correrlo en tu PC (PowerShell)

```powershell
cd portafolio
npm install
npm run dev
```

Abre http://localhost:5173

## Editar el contenido

Todo el texto, los proyectos y los links están en **`src/data/content.js`**.
Busca los comentarios `TODO`:

- `linkedin` y `cv` en `profile` (si quedan vacíos, el botón no aparece)
- `repo` y `live` de cada proyecto (si quedan vacíos, los botones no aparecen)
- `stack` de Lingua Path y Matis Pink: confirma las tecnologías que usaste

Las ilustraciones de cada proyecto están en `src/components/ProjectVisuals.jsx`.
Cuando tengas capturas reales, ponlas en `public/` y cámbialas por `<img src="/captura.png" />`.

## Subirlo a GitHub

```powershell
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/bestoncall/portafolio.git
git push -u origin main
```

(Crea antes el repositorio vacío `portafolio` en GitHub.)

## Publicarlo en Vercel (recomendado)

1. Entra a vercel.com e inicia sesión con GitHub.
2. **Add New → Project** → elige el repo `portafolio`.
3. Vercel detecta Vite solo. Dale **Deploy**.
4. Te queda en algo como `https://portafolio-bestoncall.vercel.app`.

Cada `git push` vuelve a publicarlo automáticamente.

### Alternativa: GitHub Pages

En `vite.config.js` cambia `base: '/'` por `base: '/portafolio/'`, luego:

```powershell
npm install -D gh-pages
npx vite build
npx gh-pages -d dist
```

En GitHub: Settings → Pages → rama `gh-pages`.
