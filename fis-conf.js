fis.match('*.scss', {
    rExt: '.css',
    preprocessor : fis.plugin("autoprefixer",{
        "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
        "cascade": true
    }),
    parser: fis.plugin('node-sass', {

    })
});


fis.match('*.html', {
    useMap: true
});



//项目发布编译配置文件






