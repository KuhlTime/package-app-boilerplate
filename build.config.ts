import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'

const alias = {
  '@': resolve(__dirname, './src/app'),
  '@app': resolve(__dirname, './src/app'),
  '@package': resolve(__dirname, './src/package'),
  '@shared': resolve(__dirname, './src/shared')
}

export default defineBuildConfig([
  {
    name: 'package',
    entries: ['./src/package/index'],
    sourcemap: true,
    alias,
    rollup: {
      emitCJS: true,
      inlineDependencies: true
    },
    declaration: 'compatible'
  },
  {
    name: 'app',
    entries: ['./src/app/index'],
    sourcemap: true,
    alias,
    rollup: {
      esbuild: {
        // minify: true,
        target: 'node20'
      }
    }
  }
])
