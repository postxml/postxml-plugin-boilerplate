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
var files = ['_package.json', '_README.md', '_test/test.js'];

var counter = 0;

for (var index in files){

   var file = String( fs.readFileSync( files[index] ) );

   for(var i in vars){
      var variable = vars[i];
      file = file.replace(new RegExp(variable.name, 'g'), variable.value);
   }

   if(files[index] === 'package.json'){
      var json = JSON.parse(file);
      json.description = plugin.description;
      json.keywords = plugin.keywords;
      json.author = plugin.author;
      var file = JSON.stringify(json, null, '\t')
   }

   fs.writeFileSync(files[index], file);
}

// fs.unlinkSync('plugin.json');
// fs.unlinkSync('plugin.js');
