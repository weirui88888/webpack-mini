const depModule = require('./module')
const introduce = document.createElement('h3')
introduce.innerText = '简易webpack实现commonjs规范语法转es5语法'
document.body.appendChild(introduce)
console.log(depModule, 'dep')
console.log('This is entry 1 !')
