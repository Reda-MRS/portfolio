# Portfolio — Mohammed Reda Saadi

Portfolio statique bilingue, sans dépendances npm.

## Aperçu local

Avec Node.js 22 ou plus récent :

```sh
npm run dev
```

Ouvrir `http://127.0.0.1:4173/fr/` (ou `/en/`). Le serveur écoute uniquement sur la machine locale.

## Vérification

```sh
npm test
```

Les textes et projets se modifient dans `content/fr.mjs` et `content/en.mjs`. Les captures et le CV utilisés par le site se trouvent dans `src/assets/`. La construction crée `dist/` ; ne pas modifier ce dossier directement. Pour Vercel, utiliser la commande `npm run build` et le dossier de sortie `dist`.
