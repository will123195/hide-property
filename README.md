hide-property
=============

Hides a property of an object

Install
=======

```
npm install hide-property
```

Example
=======

```js
var hide = require('hide-property')

var obj = {a:10, b:20}

console.log(obj) // { a: 10, b: 20 }

hide(obj, 'a')

console.log(obj) // { b: 20 }

console.log(obj.a) // 10
```
