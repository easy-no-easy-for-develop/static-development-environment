const browserSync = require('browser-sync');
const rewrite = require('connect-modrewrite');

module.exports = {
    middleware: [
        rewrite ([
            '^/store/list.*$ /store/list/index.sp.html [L]'
        ])
    ],
    notify: true
}