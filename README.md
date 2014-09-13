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

var obj = {a:1, b:2}

console.log(obj) // { a: 1, b: 2 }

hide(obj, 'a')

console.log(obj) // { b: 2 }
```
