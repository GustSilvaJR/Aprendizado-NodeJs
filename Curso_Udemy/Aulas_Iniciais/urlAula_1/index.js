const url = require('url');

const address = "https://chrome.google.com/webstore/category/extensions?hl=pt-BR";
const anlyzeUrl = url.parse(address);

console.log(anlyzeUrl.pathname, anlyzeUrl.query, anlyzeUrl.search, anlyzeUrl.path, anlyzeUrl.hostname, anlyzeUrl.hash);