const browserSync = require('browser-sync');
const rewrite = require('connect-modrewrite');

module.exports = {
    middleware: [
        rewrite ([
            '^/store/list.*$ /store/list/index.pc.html [L]'
        ])
    ],
    notify: true
}