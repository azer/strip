module.exports = strip;

/**
 * Strip tags from html text.
 * You can specify the allowed tag in format 'a', 'p|b' or 'b|i|p'
 *
 *
 * @example
 * var text = strip('<p>My name is <b>Jon</b>.</p>'); // Retrun "My name is Jon."
 * var text = strip('<p>My name is <b>Jon</b>.</p><p>I love <a href="en.wikipedia/wiki/dogs">dogs</a>.</p>'); // Retrun "My name is Jon. I love dogs."
 * var text = strip('<p>My name is <b>Jon</b>.</p><p>I love <a href="en.wikipedia/wiki/dogs">dogs</a>.</p>', 'a'); // Retrun "My name is Jon. I love <a href="en.wikipedia/wiki/dogs">dogs</a>."
 * var text = strip('<p>My name is <b>Jon</b>.</p><p>I love <a href="en.wikipedia/wiki/dogs">dogs</a>.</p>', 'a|b'); // Retrun "My name is <b>Jon</b>. I love <a href="en.wikipedia/wiki/dogs">dogs</a>."
 *
 *
 * @function
 * @param  {String}  html       HTML string to stip tags
 * @param  {String}  [allowed]  Allowed HTML tags
 * @return  {String}
 */

function strip(html, allowed) {
    // Normalize the allowed format. 'a|b|c' -> '|a|b|c|'
    allowed = '|' + (allowed || '').toLowerCase() + '|';

    if (allowed.length === 2) {
        return html.replace(/<[^<]+>/g, '').trim();
    } else {
        return html.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, function(tag_body, tag_name) {
            return (allowed.indexOf('|' + tag_name.toLowerCase() + '|') === -1) ? '' : tag_body;
        }).trim();
    }
}
