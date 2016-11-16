fis.hook('commonjs');

fis.match('/comp/**.js', {
    isMod: true
});

fis.match('**/modJS.js', {
    isMod: false
});

fis.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true
    }),
    packager: fis.plugin('deps-pack', {
        //提取公共JS部分代码到dist/js/base.js里面
        '/dist/js/base.js': [
            '/static/common/**.js'
        ],
        //提取公共CS部分代码到dist/js/base.js里面
        '/dist/css/base.css': [
            '/static/common/**.css'
        ]
    })
});







