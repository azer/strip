## strip

Strips HTML tags.

### Install

```bash
$ npm install strip
```

### Usage

```js
strip('<p> hello <a href="http://foo.com/?q=123">world</a> </p>');
// => Hello World

strip('<p>My name is <b>Jon</b>.</p>');
// => Retrun "My name is Jon."

strip('<p>My name is <b>Jon</b>.</p><p>I love <a href="en.wikipedia/wiki/dogs">dogs</a>.</p>');
// => Retrun "My name is Jon. I love dogs."

strip('<p>My name is <b>Jon</b>.</p><p>I love <a href="en.wikipedia/wiki/dogs">dogs</a>.</p>', 'a');
// => "My name is Jon. I love <a href="en.wikipedia/wiki/dogs">dogs</a>."

strip('<p>My name is <b>Jon</b>.</p><p>I love <a href="en.wikipedia/wiki/dogs">dogs</a>.</p>', 'a|b');
// => "My name is <b>Jon</b>. I love <a href="en.wikipedia/wiki/dogs">dogs</a>."
```

![](https://dl.dropbox.com/s/9q2p5mrqnajys22/npmel.jpg?token_hash=AAHqttN9DiGl63ma8KRw-G0cdalaiMzrvrOPGnOfDslDjw)
