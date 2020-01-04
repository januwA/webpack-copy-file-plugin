const path = require('path');
const fs = require('fs')

/**
 * i: D:\ajanuw\webpack-scaffold\LICENSE
 * o: D:\ajanuw\webpack-scaffold\dist\LICENSE
 */
class CopyFilePlugin {
	constructor(files, outDir) {
		this.files = files;
		this.outDir = outDir;
	}

	apply(compiler) {
		const self = this;
		compiler.hooks.emit.tapAsync(
			'CopyFilePlugin',
			(webpackContext, next) => {
				const outDir = self.outDir || webpackContext.outputOptions.path;
				if (self.files && Array.isArray(self.files) && outDir) {
					self.files.forEach(file => fs.copyFileSync(file, path.join(outDir, path.basename(file))));
				}
				next();
			}
		);
	}
}

module.exports = CopyFilePlugin;