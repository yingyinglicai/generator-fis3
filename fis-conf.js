fis.hook('commonjs');

fis.match('/comp/**.js', {
    isMod: true
});

fis.match('**/modJS.js', {
    isMod: false
});

// 将 html 文件加入到 RESOURCE_MAP 中
fis.match('*.html', {
    useMap: true
});

fis.match('/static/common/**.js', {
    packTo: '/dist/js/base.js'
});
fis.match('/static/common/**.css', {
    packTo: '/dist/css/base.css'
});

fis.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true,
        allInOne: true
    })
    /* packager: fis.plugin('deps-pack', {
     //提取公共JS部分代码到dist/js/base.js里面
     '/dist/js/base.js': [
     '/static/common/!**.js'
     ],
     //提取公共CS部分代码到dist/js/base.js里面
     '/dist/css/base.css': [
     '/static/common/!**.css'
     ]
     })*/
});







