module.exports = strip;

function strip(html){
  html = html || '';
  return html.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, '').trim();
}
