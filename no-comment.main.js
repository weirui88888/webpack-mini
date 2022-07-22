;(() => {
  'use strict'
  var __webpack_modules__ = {
    './src/hello.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__)
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__
      })
      const hello = 'hello'
      const __WEBPACK_DEFAULT_EXPORT__ = hello
    },

    './src/helloWorld.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__)
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__
      })
      var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/hello.js')
      const world = 'world'
      const helloWorld = () => `${_hello__WEBPACK_IMPORTED_MODULE_0__.default} ${world}`
      const __WEBPACK_DEFAULT_EXPORT__ = helloWorld
    },
    './src/index.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__)
      var _helloWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/helloWorld.js')
      const helloWorldStr = (0, _helloWorld__WEBPACK_IMPORTED_MODULE_0__.default)()
      function component() {
        const element = document.createElement('div')
        element.innerHTML = helloWorldStr
        return element
      }
      document.body.appendChild(component())
    }
  }
  var __webpack_module_cache__ = {}
  function __webpack_require__(moduleId) {
    if (__webpack_module_cache__[moduleId]) {
      return __webpack_module_cache__[moduleId].exports
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {}
    })

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
    return module.exports
  }

  ;(() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          })
        }
      }
    }
  })()
  ;(() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
  })()
  ;(() => {
    __webpack_require__.r = exports => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        })
      }
      Object.defineProperty(exports, '__esModule', { value: true })
    }
  })()

  __webpack_require__('./src/index.js')
})()
