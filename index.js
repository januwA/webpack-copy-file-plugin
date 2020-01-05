const path = require('path');
const fs = require('fs-extra')

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
					Array.from(self.files).forEach(from => {
						if (fs.existsSync(from)) {
							const to = path.join(outDir, path.basename(from));
							fs.copySync(from, to);
						}
					});
				}
				next();
			}
		);
	}
}

module.exports = CopyFilePlugin;