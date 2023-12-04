import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    name: 'package',
    declaration: 'compatible',
    entries: ['./src/package/index'],
    outDir: 'dist',
    sourcemap: true,
    rollup: {
      emitCJS: true
    }
  },
  {
    name: 'app',
    entries: ['./src/app/index'],
    outDir: 'dist',
    sourcemap: true,
    rollup: {
      esbuild: {
        // minify: true,
        target: 'node20'
      }
    }
  }
])
