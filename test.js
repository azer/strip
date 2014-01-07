var test = require('tap').test;
var strip = require("./");

test('strips html tags', function(t){

  var html = '<p> hello <a href="http://foo.com/?q=123">world</a> </p>';

  t.equal(strip(html), 'hello world');
  t.end();
});

test('html comments do not fail', function(t){
  var html = '<div>this has a <!--comment--> in it</div>';
  t.equal(strip(html), 'this has a <!--comment--> in it');
  t.end();
});

test('html markup inside comments do not fail', function(t){
  var html = '<div>this has markup in a <!--comment <p>markup</p>--> in it</div>';
  t.equal(strip(html), 'this has markup in a <!--comment markup--> in it');
  t.end();
});
