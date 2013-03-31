var strip = require("./");

it('strips html tags', function(){

  var html = '<p> hello <a href="http://foo.com/?q=123">world</a> </p>';

  expect(strip(html)).to.equal('hello world');

});
