# focntions fléchées

## 1 seul parametre :

 function(params){
  return(1);
 }

 params => {
  return(1);
 }

 params => 1;

## plusieurs parametres + affectation dans une constante

 const mafunction = (param1,param2) => {
   return(1)
 }

---

# Fonction ternaires

if(cond){
  return(A)
}else{
  return(B)
}

Si cond === true -> Affiche le composant A
Si cond === false -> Affiche el composant B

cond ? <A/> : <B/>;

(this.props.choice === true) ? <A/> : <B/>;

Idem si on teste une valeur, `"dragon"` par exemple

(this.props.choice === "dragon") ? <A/> : <B/>;

## Short-circuit evaluation

if(cond){
  return(A)
}

if(cond1 && cond2){
  return(A)
}

Si cond === true alors renvoie <A/>

return(cond && <A/>);

## Spread

### copie d'un tableau

```
const a1 = [1,2,3,4];
const a2 = [...a1];
```

```
const a3 = [4,6,...a1]
const a4 = [...a1,4,5,6]
```

```
const o1 = {
  "k1":"v",
  "k2":"v"
}
const o2 = {...o1}
const o3 = {...o1,"k2":"v2"}
```

## Destructuration & décomposition

```
const a1 = [1,2,3,4]
const [a,b,c,d] = a1;
```
a = 1
b = 2
c = 3
d = 4

```
const o1 = {
  "k1":"v1",
  "k2":"v2"
}
const {k1} = o1;
```

k1 = v1


<Comp name="hello"/>

=> this.props.name = "hello"

```
const [name] = this.props;

```
name = "hello"
