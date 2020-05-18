# TP1 partie 2


## STRUCTURE
```
FORM
  WRAPPER
    H1
    EMAIL
  WRAPPER
    Q1
      INPUT
  WRAPPER
    Q2
      INPUT
  WRAPPER
    Q3
      INPUT
RESULTAT
```


## DATAS
```
const questions = {
    'symfony' : {
        title : "Symfony design pattern",
        choices : ['MMV', 'MVC', 'MMVV'],
        response : 1,
        type : "select",
        name : "symfony",
        feedback : 'Symfony est basé sur le pattern MVC'
    },
    'react' : {
        title : "React est-il un framework ?",
        choices : ['yes', 'no'],
        response : 1,
        type : "radio",
        name : "react",
        feedback : "React est une librairie"
    },
    'jsx' : {
        title : "JSX c'est quoi ?",
        choices : ['JSX est un langage compilé', 'JSX est un sur-ensemble développé par Facebook'],
        response : 1,
        type: "radio" ,
        name : "jsx",
        feedback : 'JSX est un sur ensemble à JS'
    }
}
```
