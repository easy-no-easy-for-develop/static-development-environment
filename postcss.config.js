module.exports = (ctx) => ({
    map: ctx.options.map,
    plugins: [
        require('postcss-import'),
        require('postcss-mixins'),
        require('postcss-simple-vars')({ silent: true }),
        require('postcss-nested'),
        require('autoprefixer'),
        require('cssnano')
    ]
});
