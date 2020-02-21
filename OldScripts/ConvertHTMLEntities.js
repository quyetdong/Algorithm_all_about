function convertHTML(str) {
  const regEx = /[&<>"']/g;
  // const arr = ["&", "\"",  "<", ">", "'"];
  const obj = {
    '&': '&amp;',
    '"': '&quot;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&apos;',
  };

  if (str) {
    str = str.replace(regEx, (match, p) => obj[match]);
  }

  return str;
}

module.exports = convertHTML;
convertHTML('');
