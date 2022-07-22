const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const t = require('@babel/types')
const ejs = require('ejs')

const config = require('../webpack.config')

const EXPORT_DEFAULT_FUN = `
__webpack_require__.d(__webpack_exports__, {
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});\n
`

const ESMODULE_TAG_FUN = `
__webpack_require__.r(__webpack_exports__);\n
`

function parseFile(file) {
  const fileContent = fs.readFileSync(file, 'utf-8')
  const ast = parser.parse(fileContent, { sourceType: 'module' })
  let importFilePath = ''
  let importVarName = ''
  let importCovertVarName = ''
  let hasExport = false
  let dependcies = []
  traverse(ast, {
    ImportDeclaration(p) {
      const importFile = p.node.source.value
      importVarName = p.node.specifiers[0].local.name
      importFilePath = path.join(path.dirname(config.entry), importFile)
      importFilePath = `./${importFilePath}.js`
      importCovertVarName = `__${path.basename(importFile)}__WEBPACK_IMPORTED_MODULE_0__`
      dependcies.push(importFilePath)

      const variableDeclaration = t.variableDeclaration('var', [
        t.variableDeclarator(
          t.identifier(`__${path.basename(importFile)}__WEBPACK_IMPORTED_MODULE_0__`),
          t.callExpression(t.identifier('__webpack_require__'), [t.stringLiteral(importFilePath)])
        ),
      ])
      p.replaceWith(variableDeclaration)
    },
    CallExpression(p) {
      if (p.node.callee.name === importVarName) {
        p.node.callee.name = `(0,${importCovertVarName}.default)`
      }
    },
    Identifier(p) {
      if (p.node.name === importVarName) {
        p.node.name = `${importCovertVarName}.default`
      }
    },
    ExportDefaultDeclaration(p) {
      hasExport = true
      const variableDeclaration = t.variableDeclaration('const', [
        t.variableDeclarator(t.identifier('__WEBPACK_DEFAULT_EXPORT__'), t.identifier(p.node.declaration.name)),
      ])
      p.replaceWith(variableDeclaration)
    },
  })
  let newCode = generate(ast).code
  if (hasExport) {
    newCode = `${EXPORT_DEFAULT_FUN} ${newCode}`
  }
  newCode = `${ESMODULE_TAG_FUN} ${newCode}`

  return {
    file,
    dependcies,
    code: newCode,
  }
}

function parseFiles(entryFile) {
  const entryRes = parseFile(entryFile)
  const results = [entryRes]

  for (const res of results) {
    const dependcies = res.dependcies
    dependcies.map(dependency => {
      if (dependency) {
        const ast = parseFile(dependency)
        results.push(ast)
      }
    })
  }

  return results
}

function generateCode(allAst, entry) {
  const temlateFile = fs.readFileSync(path.join(__dirname, './template.js'), 'utf-8')

  const codes = ejs.render(temlateFile, {
    __TO_REPLACE_WEBPACK_MODULES__: allAst,
    __TO_REPLACE_WEBPACK_ENTRY__: entry,
  })

  return codes
}

const allAst = parseFiles(config.entry)

const codes = generateCode(allAst, config.entry)

fs.writeFileSync(path.join(config.output.path, config.output.filename), codes)
