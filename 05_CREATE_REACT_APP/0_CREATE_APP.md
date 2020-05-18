# CREATE REACT APP

## Notions nécessaires
- terminal
- npm >= 5.6
- nodeJS  >= 8.10

## Nouvelles notions
- [ECMA](https://fr.wikipedia.org/wiki/ECMAScript)
- [create-react-app](https://github.com/facebook/create-react-app), [v2](https://fr.reactjs.org/blog/2018/10/01/create-react-app-v2.html)
- package.json
- webpack [https://webpack.js.org/]
- [esLint](https://eslint.org/)
- [browserslist](https://github.com/browserslist/browserslist)

## Codes a tester

### tester la version de npm & nodeJS
```
node -v;npm -v
```
![result](images/npm_node_v.png)
Install npm : [Download link](https://nodejs.org/en/download/)

### installer create-react-app puis créer un initialiser un projet avec npm
```
npm install create-react-app --global
npx create-react-app my-app --use-npm
```

##Aller plus loin

Exclure React du bundle.js pour l'inclure depuis le cdn afin d'optimiser le chargement.

- [Exclude React](https://webpack.js.org/configuration/externals/)

### Webpack
```
externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
}
```
### html
```
<script src="http://cdn.bootcss.com/react/15.4.1/react.js"></script>
<script src="http://cdn.bootcss.com/react/15.4.1/react-dom.js"></script>
<script src="http://cdn.bootcss.com/react-router/2.8.1/ReactRouter.js"></script>
```
### js
```
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
```
