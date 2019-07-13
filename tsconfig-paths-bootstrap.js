/* eslint-disable @typescript-eslint/no-var-requires */
const tsConfigPaths = require('tsconfig-paths')
const tsConfig = require('./tsconfig.prod.json')

const baseUrl = './'
tsConfigPaths.register({
	baseUrl,
	paths: tsConfig.compilerOptions.paths,
})
