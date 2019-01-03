import autoprefixer from 'autoprefixer'
import babel from 'rollup-plugin-babel'
import common from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

export default [{
  input: 'demo-block/index.js',
  output: {
    file: 'plugin/demo-block/index.js',
    format: 'cjs'
  },
  external: ['path'],
  plugins: [babel({
    runtimeHelpers: true
  }), common(), resolve()]
},
{
  input: 'demo-block/clientRootMixin.js',
  output: {
    file: 'plugin/demo-block/clientRootMixin.js',
    format: 'esm'
  },
  plugins: [
    postcss({
      plugins: [autoprefixer]
    }),
    babel({
      runtimeHelpers: true
    }),
    common(),
    resolve()
  ]
}]
