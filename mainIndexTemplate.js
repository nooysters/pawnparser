
// const toConstantCase = (s) =>
// s.replace(/([A-Z])/g, ($1) => "_"+$1).toUpperCase().replace("_", "")

const toPascal = (s) =>
s.replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});

const mainIndex = (categories, name) => (`
import React from 'react'

${categories.map(category =>
    `import ${toPascal(category)} from './${category}'`
  ).join('\n')
}

class ${name} extends React.Component {
  constructor(props) {
    super(props)

    this.svgRef = React.createRef();
  }

  render() {
    return (
      <svg
        version="1.1"
        ref={this.svgRef}
        x="0px" y="0px"
        viewBox="0 0 114 152.8"
      >
      ${categories.map(category =>
          `<${toPascal(category)} />`
        ).join('\n')
      }
      </svg>
    )
  }
}

export default ${name}
`)

module.exports = mainIndex