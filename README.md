## webpack插件，将指定文件拷贝到打包目录下

## install
```
$ npm i webpack-copy-file-plugin -D
```

## Example
```js
const CopyFilePlugin = require('webpack-copy-file-plugin');

{
	// ...
	plugins: [
		// ... other plugins
		new CopyFilePlugin(['./README.md', './LICENSE', './package.json', './.gitignore']), // 放在其它插件的后面
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),// 需要设置打包目录
	},
}
```