/**
 * 基本配置
 */
// 配置按需编译
fis.set('project.files', ['*.html', 'server.conf', '/test/**', '/mock/**']);

// 配置 fis-components 安装目录
fis.set('component.dir', 'fis-components');

// 配置 server.conf 输出目录
fis.match('server.conf', {
	release: '/config/server.conf'
});

// 将 html 文件加入到 RESOURCE_MAP 中
fis.match('*.html', {
	useMap: true
});

// 模拟数据文件名不需要 MD5
fis.match('/mock/**', {
	useHash: false,
	isMod: false,
	skipBrowserify: true
}, true);


// 扩展对『资源定位』的能力
fis.match('**.html', {
	parser: fis.plugin('html-uri')
});

fis.set('project.fileType.text', 'ts,es,es6');



/**
 * 设置忽略的文件
 * 参考：http://fis.baidu.com/fis3/docs/api/config-props.html#project.ignore
 */
fis.set('project.ignore', [
	'index.jsx',
	'package.json',
	'.git/**',
	'.svn/**',
	'.idea/**',
	'output/**',
	'node_modules/**',
	'bower_components/**',
	'psd/**'
]);


/**
 * 样式相关
 * 1. 将 sass、scss、less 文件编译为 css 文件
 * 2. 属性或值自动补全前缀
 * 3. 精简压缩 css 文件
 * 4. 文件名使用 md5
 */

// 1. 将 sass、scss、less 文件编译为 css 文件
// 强烈建议使用 scss 作为 css 的预处理器！！！！
fis.match('{**.sass,**.scss}', {
	parser: fis.plugin('node-sass'),
	rExt: '.css'
});
fis.match('**.less', {
	parser: fis.plugin('less-2.x'),
	rExt: '.css'
});

// 2. 属性或值自动补全前缀
fis.match('{**.scss,**.sass,**.less,**.css}', {
	preprocessor: fis.plugin('cssprefixer')
});

// 3. 精简压缩 css 文件
fis.media('prod').match('**.css', {
	// clean-css 为 fis 内置插件，无需安装
	optimizer: fis.plugin('clean-css')
});




/**
 * 脚本相关
 * 1. 将 es6 转换为 es5
 * 2. 将 jsx 转换为 js
 * 3. 校验 js 文件
 * 4. 压缩混淆 js 文件
 */
// 1. 将 es6, jsx 转换为 es5
fis.match('{**.es6,**.jsx}', {
	parser: fis.plugin('babel-imweb', {
		sourceMaps: true
	}),
	//parser: fis.plugin('es6-babel'),
	rExt: '.js'
});

fis.match('**.map', {
	release: '/sourcemaps/$&'
});

// 2. 校验 js 文件
fis.match('{**.es6,**.jsx,**.js}', {
	lint: fis.plugin('jshint', {
		// 使用汉语提示
		i18n: 'zh-CN'
	})
});

fis.media('prod').match('{**.es6,**.js}', {
	optimizer: fis.plugin('uglify-js', {
		compress: {
			// 保留未被用到的变量或函数
			unused: false,

			// 移除调试信息
			drop_console: true,
			drop_debugger: true
		}
	})
});

// 4. 添加css和image加载支持
fis.match('*.{js,jsx,ts,tsx,es,es6}', {
	preprocessor: [
		fis.plugin('js-require-css'),
		fis.plugin('js-require-file', {
			useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k用base64
		})
	]
});


/**
 * 模块化相关
 * 1. 配置需要模块化的文件
 * 2. 配置模块化配置项
 * 3. 不需要模块化的文件
 */

// 1. 配置需要模块化的文件
fis.match('{**.es6,**.jsx,**.js}', {
	isMod: true
});

// 2. 配置项
fis.hook('commonjs', {
	// 配置路径
	baseUrl: '/',

	// 配置包信息
	packages: [],

	// 配置模块别名
	paths: {
		xAjax: '/core/xAjax',
		xDate: '/util/xDate',
	},

	// 配置 shim
	shim: {},

	extList: ['.es6', '.js', '.jsx', '.es', '.ts', '.tsx']
});


// 3. 不需要模块化的文件
fis.match('**/require.js', {
	isMod: false
});
fis.match('**/modJS.js', {
	isMod: false
});
fis.match('**/mod-store.js', {
	isMod: false
});



/**
 * 输出依赖
 * 1. 分析 fis 的静态资源关系表，输出依赖文件
 * 2. 输出模块化时需要的资源表
 */
fis.match('::packager', {
	postpackager: fis.plugin('loader', {
		// 输出资源表类型
		// 根据你所使用的模块加载器进行配置
		resourceType: 'mod', // 取值[amd | cmd | mod | system]
		useInlineMap: true // config 配置文件内联输出
	}),

	packager: fis.plugin('deps-pack', {
		'/static/libs/antd.css': [
			'antd/dist/antd.css',
			'antd/dist/antd.css:deps',
			'antd/dist/antd.css:asyncs'
		],

		'/static/libs/helper.js': [
			'lodash/lodash.js',
			'lodash/lodash.js:deps',
			'lodash/lodash.js:asyncs',

			'reqwest/reqwest.js',
			'reqwest/reqwest.js:deps',
			'reqwest/reqwest.js:asyncs',

			'js-cookie/src/js.cookie.js',
			'js-cookie/src/js.cookie.js:deps',
			'js-cookie/src/js.cookie.js:asyncs',

			'classnames/index.js',
			'classnames/index.js:deps',
			'classnames/index.js:asyncs',

			'moment/moment.js',
			'moment/moment.js:deps',
			'moment/moment.js:asyncs',
			'moment/locale/zh-cn.js',

			'jsencrypt/bin/jsencrypt.js',

			'util/requestAnimationFrame.es6'
		],

		'/static/libs/react.js': [
			'react/react.js',
			'react/react.js:deps',
			'react/react.js:asyncs',

			'react-dom/index.js',
			'react-dom/index.js:deps',
			'react-dom/index.js:asyncs',

			'react-pure-render/index.js',
			'react-pure-render/index.js:deps',
			'react-pure-render/index.js:asyncs',

			'rc-animate/lib/index.js',
			'rc-animate/lib/index.js:deps',
			'rc-animate/lib/index.js:asyncs'
		],

		'/static/libs/react-router.js': [
			'react-router/lib/index.js',
			'react-router/lib/index.js:deps',
			'react-router/lib/index.js:asyncs',

			'react-router-redux/lib/index.js',
			'react-router-redux/lib/index.js:deps',
			'react-router-redux/lib/index.js:asyncs',

			'history/lib/index.js',
			'history/lib/index.js:deps',
			'history/lib/index.js:asyncs'
		],

		'/static/libs/antd.js': [
			'antd/lib/index.js',
			'antd/lib/index.js:deps',
			'antd/lib/index.js:asyncs',

			// 不清楚为什么下面文件没被打包进去
			'antd/lib/date-picker/locale/zh_CN.js',
			'antd/lib/time-picker/locale/zh_CN.js',
			'rc-calendar/lib/locale/zh_CN.js',
		]
	})
});




fis.match('/node_modules/**.js', {
	isMod: true,
	useSameNameRequire: true
});
fis.unhook('components');
//fis.hook('npm');


fis.hook('node_modules', {
	shimBuffer: false
});



