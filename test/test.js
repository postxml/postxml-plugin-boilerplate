var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

   var proccessed = postxml(input, [plugin(opts)]);

   expect(proccessed).to.eql(output);
};

describe('PLUGIN_NAME', function () {
    it('', function () {
        test(
            '',
            '',
            {}
        );
    });
});
