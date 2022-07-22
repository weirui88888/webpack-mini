import helloWorld from './helloWorld'

const helloWorldStr = helloWorld()

function component() {
  const element = document.createElement('h3')

  element.innerHTML = `${helloWorldStr} 简易webpack实现esm规范语法转es5语法`

  return element
}

document.body.appendChild(component())
