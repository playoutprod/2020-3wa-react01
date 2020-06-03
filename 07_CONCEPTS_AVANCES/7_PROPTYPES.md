# PROPTYPES

## Notions nécessaires
- props

## Nouvelles notions
- proptypes



## Codes a tester

### [Prop-types module](https://www.npmjs.com/package/prop-types)
```
npm install --save prop-types
```

```
const Post = (props) =>{
  return (
    <div className="post__content">
      <h1>{props.title}</h1>
    </div>
  );
}

Post.propTypes = {
  title : PropTypes.string.isRequired
}

ReactDOM.render(<Post title="React" />, document.getElementById('root'));
```



|Type|PropType|valid exemple|
|-|-|-|
|Any| PropTypes.any|
|Required| PropTypes.any.isRequired|
|Array| PropTypes.array|["a","b"]|
|Boolean|PropTypes.bool|true|
|Function|PropTypes.func|() =>{}|
|Number|PropTypes.number|25|
|Object|PropTypes.object|{key:"value"}|
|String|PropTypes.string|"value"|
|Symbol|PropTypes.symbol|Symbol()|
|Anything that can be rendered|PropTypes.node|\<div/>|
|React element|PropTypes.element|\<App/>|
|React element type|PropTypes.elementType|App|
|Instance of class|PropTypes.instanceOf(`class name`)|new ClassName|
|Restricted values|PropTypes.oneOf(['News', 'Photos'])|"News"|
|Restricted types|PropTypes.oneOfType(`Array of proptypes`)|
|Array of one type|PropTypes.arrayOf(PropTypes.number)|[20,10]
|Object with only one type|PropTypes.objectOf(PropTypes.number)|{first:1,last:2}|
|At least object structure|PropTypes.shape({<br/>prop1: PropTypes.string,<br/>prop2: PropTypes.number.isRequired})|{prop1:"value1",prop2:153}|
|Strict object structure|PropTypes.exact({<br/>prop1: PropTypes.string,<br/>prop2: PropTypes.number.isRequired})|{prop1:"value1",prop2:153}|

### custom validator
```

  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
```

### custom validator in `arrayOf` and `objectOf`

```
customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
  if (!/matchme/.test(propValue[key])) {
    return new Error(
      'Invalid prop `' + propFullName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
})
};

```
### control proptypes with object
```
const attr = {
  value :null,
  id : 0
}
return <Square {...attr}/>

/*
equivalent to

return <Square value={null} id=0 value={null} />

In Square component props.value is defined so not using defaultProps
props = {
  value : null
}
props.value = null;
*/


const attr = { id : 0 }
if(value){attr.value:value}

return <Square {...attr}/>


/*
In Square component, vlaue props is passed if exists, otherwise it takes default value in defautProps.
props = {id:0}
props.value = defaultProps.value
props.id : 0
*/
```
