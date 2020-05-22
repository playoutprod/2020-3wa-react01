# GESTION DES ASSETS

## Notions nécessaires
- [statics](https://create-react-app.dev/docs/adding-images-fonts-and-files)

## Nouvelles notions
- build
- [ENV](https://create-react-app.dev/docs/advanced-configuration)
- [public folder](https://create-react-app.dev/docs/using-the-public-folder)

```
npm run build
```

Lance la création de l'export pour la mise en staging ou production

L'ensemble de l'export est envoyé dans un dossier "build" à la racine du projet.
Si le dossier contient déja un build il est effacé puis recrée, si le dossier n'existe pas, il est ajouté.

Lors d'un build, Webpack va compiler le code contenu dans "src" pour le rendre dans un dossier build.
Tous les fichiers et la structure du dossier public sont copiés.
