module.exports = strip;

function strip(html){
  return html.replace(/<[^<]+>/g, '').trim();
}
