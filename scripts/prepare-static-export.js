const fs = require('fs');

fs.copyFileSync('out/404/index.html', 'out/404.html');
fs.writeFileSync('out/.nojekyll', '');
