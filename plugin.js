var fs = require('fs');
var plugin = require('./plugin.json');

var vars = [
	{
		name: 'PLUGIN_NAME',
		value: plugin.name
	},
	{
		name: 'GITHUB_NAME',
		value: plugin.github
	}
];
var files = ['package.json', 'README', 'test/test.js'];

var counter = 0;

fs.unlinkSync('README.md')

for (var index in files){

	var fileName = files[index],
	file = String( fs.readFileSync( fileName ) );

	for(var i in vars){
		var variable = vars[i];
		file = file.replace(new RegExp(variable.name, 'g'), variable.value);
	}

	if(fileName === 'package.json'){
		var json = JSON.parse(file);
		json.description = plugin.description;
		json.keywords = plugin.keywords;
		json.author = plugin.author;
		var file = JSON.stringify(json, null, '\t')
	}

	if(fileName === 'README'){
		fileName += '.md';
		fs.unlinkSync('README');
	}

	fs.writeFileSync(fileName, file);
}

fs.unlinkSync('plugin.json');
fs.unlinkSync('plugin.js');
