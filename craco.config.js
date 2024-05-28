const path = require("path")
const { create } = require("sass-alias")
const CracoAlias = require("craco-alias")
module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: "tsconfig",
				baseUrl: "./src",
				tsConfigPath: "./tsconfig.json",
			},
		},
	],
	module: {
		rules: [
			{
				test: /^.*.(sass|scss)$/,
				use: [
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								importer: create({
									"@/shared": path.join(__dirname, "shared"),
								}),
							},
						},
					},
				],
			},
		]
	},
}
