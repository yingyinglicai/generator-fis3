## use-mod.js

- framework `mod.js`
- fis3 plugin
    - fis3-hook-commonjs 本地解析替换路径，为合并做准备
    - fis3-postpackager-loader 解析 fis3 的 {
    "res": {
        "comp/1-0/1-0.js": {
            "uri": "/dist/comp/1-0/1-0.js",
            "type": "js",
            "extras": {
                "moduleId": "comp/1-0/1-0"
            },
            "deps": [
                "comp/cal/cal.js"
            ],
            "aioPkg": "pkg/page/about.html_aio.js"
        },
        "comp/2-0/2-0.js": {
            "uri": "/dist/comp/2-0/2-0.js",
            "type": "js",
            "extras": {
                "moduleId": "comp/2-0/2-0"
            }
        },
        "comp/cal/cal.js": {
            "uri": "/dist/comp/cal/cal.js",
            "type": "js",
            "extras": {
                "moduleId": "comp/cal/cal"
            },
            "deps": [
                "/static/mod.js"
            ],
            "aioPkg": "pkg/page/about.html_aio.js"
        },
        "comp/scrollTop.js": {
            "uri": "/dist/comp/scrollTop.js",
            "type": "js",
            "extras": {
                "moduleId": "comp/scrollTop"
            },
            "deps": [
                "/static/mod.js"
            ],
            "aioPkg": "pkg/index.html_aio_2.js"
        },
        "static/common/bootstrap.min.css": {
            "uri": "/static/common/bootstrap.min.css",
            "type": "css",
            "pkg": "p1"
        },
        "static/common/bootstrap.min.js": {
            "uri": "/static/common/bootstrap.min.js",
            "type": "js",
            "pkg": "p0"
        },
        "static/common/jquery.min.js": {
            "uri": "/static/common/jquery.min.js",
            "type": "js",
            "pkg": "p0"
        },
        "static/common/mod.js": {
            "uri": "/static/common/mod.js",
            "type": "js",
            "pkg": "p0"
        },
        "static/common/tether.min.css": {
            "uri": "/static/common/tether.min.css",
            "type": "css",
            "pkg": "p1"
        },
        "static/common/tether.min.js": {
            "uri": "/static/common/tether.min.js",
            "type": "js",
            "pkg": "p0"
        },
        "static/lib/bower_components/bootstrap/dist/css/bootstrap-flex.css": {
            "uri": "/static/lib/bower_components/bootstrap/dist/css/bootstrap-flex.css",
            "type": "css",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/dist/css/bootstrap-flex.min.css": {
            "uri": "/static/lib/bower_components/bootstrap/dist/css/bootstrap-flex.min.css",
            "type": "css",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/dist/css/bootstrap-grid.css": {
            "uri": "/static/lib/bower_components/bootstrap/dist/css/bootstrap-grid.css",
            "type": "css",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/dist/css/bootstrap-grid.min.css": {
            "uri": "/static/lib/bower_components/bootstrap/dist/css/bootstrap-grid.min.css",
            "type": "css",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/dist/css/bootstrap-reboot.css": {
            "uri": "/static/lib/bower_components/bootstrap/dist/css/bootstrap-reboot.css",
            "type": "css",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/dist/css/bootstrap-reboot.min.css": {
            "uri": "/static/lib/bower_components/bootstrap/dist/css/bootstrap-reboot.min.css",
            "type": "css",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/dist/css/bootstrap.css": {
            "uri": "/static/lib/bower_components/bootstrap/dist/css/bootstrap.css",
            "type": "css",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/dist/css/bootstrap.min.css": {
            "uri": "/static/lib/bower_components/bootstrap/dist/css/bootstrap.min.css",
            "type": "css",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/dist/js/bootstrap.js": {
            "uri": "/static/lib/bower_components/bootstrap/dist/js/bootstrap.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/dist/js/bootstrap.min.js": {
            "uri": "/static/lib/bower_components/bootstrap/dist/js/bootstrap.min.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/grunt/bs-sass-compile/libsass.js": {
            "uri": "/static/lib/bower_components/bootstrap/grunt/bs-sass-compile/libsass.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/grunt/bs-sass-compile/sass.js": {
            "uri": "/static/lib/bower_components/bootstrap/grunt/bs-sass-compile/sass.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/grunt/change-version.js": {
            "uri": "/static/lib/bower_components/bootstrap/grunt/change-version.js",
            "type": "js",
            "deps": [
                "fs",
                "path",
                "shelljs"
            ]
        },
        "static/lib/bower_components/bootstrap/grunt/postcss.js": {
            "uri": "/static/lib/bower_components/bootstrap/grunt/postcss.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/Gruntfile.js": {
            "uri": "/static/lib/bower_components/bootstrap/Gruntfile.js",
            "type": "js",
            "deps": [
                "fs",
                "path",
                "is-travis",
                "load-grunt-tasks",
                "time-grunt",
                "./grunt/bs-sass-compile"
            ]
        },
        "static/lib/bower_components/bootstrap/js/dist/alert.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/dist/alert.js",
            "type": "js",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/js/dist/button.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/dist/button.js",
            "type": "js",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/js/dist/carousel.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/dist/carousel.js",
            "type": "js",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/js/dist/collapse.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/dist/collapse.js",
            "type": "js",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/js/dist/dropdown.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/dist/dropdown.js",
            "type": "js",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/js/dist/modal.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/dist/modal.js",
            "type": "js",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/js/dist/popover.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/dist/popover.js",
            "type": "js",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/js/dist/scrollspy.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/dist/scrollspy.js",
            "type": "js",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/js/dist/tab.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/dist/tab.js",
            "type": "js",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/js/dist/tooltip.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/dist/tooltip.js",
            "type": "js",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/js/dist/util.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/dist/util.js",
            "type": "js",
            "extras": {}
        },
        "static/lib/bower_components/bootstrap/js/src/alert.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/src/alert.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/js/src/button.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/src/button.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/js/src/carousel.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/src/carousel.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/js/src/collapse.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/src/collapse.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/js/src/dropdown.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/src/dropdown.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/js/src/modal.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/src/modal.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/js/src/popover.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/src/popover.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/js/src/scrollspy.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/src/scrollspy.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/js/src/tab.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/src/tab.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/js/src/tooltip.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/src/tooltip.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/js/src/util.js": {
            "uri": "/static/lib/bower_components/bootstrap/js/src/util.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/package.js": {
            "uri": "/static/lib/bower_components/bootstrap/package.js",
            "type": "js"
        },
        "static/lib/bower_components/bootstrap/scss/_alert.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_alert.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_animation.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_animation.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_breadcrumb.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_breadcrumb.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_button-group.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_button-group.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_buttons.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_buttons.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_card.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_card.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_carousel.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_carousel.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_close.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_close.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_code.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_code.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_custom-forms.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_custom-forms.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_custom.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_custom.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_dropdown.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_dropdown.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_forms.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_forms.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_grid.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_grid.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_images.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_images.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_input-group.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_input-group.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_jumbotron.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_jumbotron.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_list-group.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_list-group.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_media.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_media.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_mixins.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_mixins.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_modal.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_modal.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_nav.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_nav.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_navbar.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_navbar.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_normalize.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_normalize.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_pagination.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_pagination.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_popover.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_popover.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_print.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_print.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_progress.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_progress.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_reboot.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_reboot.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_responsive-embed.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_responsive-embed.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_tables.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_tables.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_tags.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_tags.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_tooltip.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_tooltip.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_type.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_type.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_utilities.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_utilities.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/_variables.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/_variables.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/bootstrap-flex.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/bootstrap-flex.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/bootstrap-grid.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/bootstrap-grid.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/bootstrap-reboot.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/bootstrap-reboot.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/bootstrap.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/bootstrap.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_alert.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_alert.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_background-variant.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_background-variant.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_border-radius.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_border-radius.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_breakpoints.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_breakpoints.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_buttons.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_buttons.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_cards.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_cards.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_clearfix.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_clearfix.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_float.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_float.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_forms.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_forms.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_gradients.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_gradients.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_grid-framework.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_grid-framework.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_grid.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_grid.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_hover.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_hover.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_image.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_image.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_list-group.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_list-group.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_lists.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_lists.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_nav-divider.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_nav-divider.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_navbar-align.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_navbar-align.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_pagination.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_pagination.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_progress.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_progress.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_reset-filter.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_reset-filter.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_reset-text.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_reset-text.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_resize.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_resize.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_screen-reader.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_screen-reader.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_size.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_size.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_tab-focus.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_tab-focus.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_table-row.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_table-row.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_tag.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_tag.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_text-emphasis.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_text-emphasis.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_text-hide.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_text-hide.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/mixins/_text-truncate.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/mixins/_text-truncate.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/utilities/_align.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/utilities/_align.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/utilities/_background.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/utilities/_background.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/utilities/_borders.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/utilities/_borders.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/utilities/_clearfix.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/utilities/_clearfix.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/utilities/_display.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/utilities/_display.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/utilities/_flex.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/utilities/_flex.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/utilities/_float.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/utilities/_float.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/utilities/_screenreaders.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/utilities/_screenreaders.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/utilities/_spacing.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/utilities/_spacing.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/utilities/_text.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/utilities/_text.scss",
            "type": "scss"
        },
        "static/lib/bower_components/bootstrap/scss/utilities/_visibility.scss": {
            "uri": "/static/lib/bower_components/bootstrap/scss/utilities/_visibility.scss",
            "type": "scss"
        },
        "static/lib/bower_components/jquery.stellar/grunt.js": {
            "uri": "/static/lib/bower_components/jquery.stellar/grunt.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery.stellar/jquery.stellar.js": {
            "uri": "/static/lib/bower_components/jquery.stellar/jquery.stellar.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery.stellar/jquery.stellar.min.js": {
            "uri": "/static/lib/bower_components/jquery.stellar/jquery.stellar.min.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery.stellar/libs/jquery/jquery-1.4.3.js": {
            "uri": "/static/lib/bower_components/jquery.stellar/libs/jquery/jquery-1.4.3.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery.stellar/libs/jquery/jquery-1.9.1.js": {
            "uri": "/static/lib/bower_components/jquery.stellar/libs/jquery/jquery-1.9.1.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery.stellar/libs/jquery/jquery-2.0.0b2.js": {
            "uri": "/static/lib/bower_components/jquery.stellar/libs/jquery/jquery-2.0.0b2.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery.stellar/libs/qunit/qunit.css": {
            "uri": "/static/lib/bower_components/jquery.stellar/libs/qunit/qunit.css",
            "type": "css",
            "aioPkg": "pkg/static/lib/bower_components/jquery.stellar/test/jquery.stellar.html_aio.css"
        },
        "static/lib/bower_components/jquery.stellar/libs/qunit/qunit.js": {
            "uri": "/static/lib/bower_components/jquery.stellar/libs/qunit/qunit.js",
            "type": "js",
            "aioPkg": "pkg/static/lib/bower_components/jquery.stellar/test/jquery.stellar.html_aio.js"
        },
        "static/lib/bower_components/jquery.stellar/src/jquery.stellar.js": {
            "uri": "/static/lib/bower_components/jquery.stellar/src/jquery.stellar.js",
            "type": "js",
            "aioPkg": "pkg/static/lib/bower_components/jquery.stellar/test/jquery.stellar.html_aio.js"
        },
        "static/lib/bower_components/jquery.stellar/test/jquery-loader.js": {
            "uri": "/static/lib/bower_components/jquery.stellar/test/jquery-loader.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery.stellar/test/jquery.stellar_test.js": {
            "uri": "/static/lib/bower_components/jquery.stellar/test/jquery.stellar_test.js",
            "type": "js",
            "aioPkg": "pkg/static/lib/bower_components/jquery.stellar/test/jquery.stellar.html_aio.js"
        },
        "static/lib/bower_components/jquery.stellar/test/jquery.stellar.css": {
            "uri": "/static/lib/bower_components/jquery.stellar/test/jquery.stellar.css",
            "type": "css",
            "aioPkg": "pkg/static/lib/bower_components/jquery.stellar/test/jquery.stellar.html_aio.css"
        },
        "static/lib/bower_components/jquery/dist/core.js": {
            "uri": "/static/lib/bower_components/jquery/dist/core.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/dist/jquery.js": {
            "uri": "/static/lib/bower_components/jquery/dist/jquery.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/dist/jquery.min.js": {
            "uri": "/static/lib/bower_components/jquery/dist/jquery.min.js",
            "type": "js",
            "aioPkg": "pkg/index.html_aio.js"
        },
        "static/lib/bower_components/jquery/dist/jquery.slim.js": {
            "uri": "/static/lib/bower_components/jquery/dist/jquery.slim.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/dist/jquery.slim.min.js": {
            "uri": "/static/lib/bower_components/jquery/dist/jquery.slim.min.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/external/sizzle/dist/sizzle.js": {
            "uri": "/static/lib/bower_components/jquery/external/sizzle/dist/sizzle.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/external/sizzle/dist/sizzle.min.js": {
            "uri": "/static/lib/bower_components/jquery/external/sizzle/dist/sizzle.min.js",
            "type": "js",
            "extras": {}
        },
        "static/lib/bower_components/jquery/src/ajax.js": {
            "uri": "/static/lib/bower_components/jquery/src/ajax.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/ajax/jsonp.js": {
            "uri": "/static/lib/bower_components/jquery/src/ajax/jsonp.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/ajax/load.js": {
            "uri": "/static/lib/bower_components/jquery/src/ajax/load.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/ajax/parseXML.js": {
            "uri": "/static/lib/bower_components/jquery/src/ajax/parseXML.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/ajax/script.js": {
            "uri": "/static/lib/bower_components/jquery/src/ajax/script.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/ajax/var/location.js": {
            "uri": "/static/lib/bower_components/jquery/src/ajax/var/location.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/ajax/var/nonce.js": {
            "uri": "/static/lib/bower_components/jquery/src/ajax/var/nonce.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/ajax/var/rquery.js": {
            "uri": "/static/lib/bower_components/jquery/src/ajax/var/rquery.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/ajax/xhr.js": {
            "uri": "/static/lib/bower_components/jquery/src/ajax/xhr.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/attributes.js": {
            "uri": "/static/lib/bower_components/jquery/src/attributes.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/attributes/attr.js": {
            "uri": "/static/lib/bower_components/jquery/src/attributes/attr.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/attributes/classes.js": {
            "uri": "/static/lib/bower_components/jquery/src/attributes/classes.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/attributes/prop.js": {
            "uri": "/static/lib/bower_components/jquery/src/attributes/prop.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/attributes/support.js": {
            "uri": "/static/lib/bower_components/jquery/src/attributes/support.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/attributes/val.js": {
            "uri": "/static/lib/bower_components/jquery/src/attributes/val.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/callbacks.js": {
            "uri": "/static/lib/bower_components/jquery/src/callbacks.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/core.js": {
            "uri": "/static/lib/bower_components/jquery/src/core.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/core/access.js": {
            "uri": "/static/lib/bower_components/jquery/src/core/access.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/core/DOMEval.js": {
            "uri": "/static/lib/bower_components/jquery/src/core/DOMEval.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/core/init.js": {
            "uri": "/static/lib/bower_components/jquery/src/core/init.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/core/parseHTML.js": {
            "uri": "/static/lib/bower_components/jquery/src/core/parseHTML.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/core/ready-no-deferred.js": {
            "uri": "/static/lib/bower_components/jquery/src/core/ready-no-deferred.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/core/ready.js": {
            "uri": "/static/lib/bower_components/jquery/src/core/ready.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/core/readyException.js": {
            "uri": "/static/lib/bower_components/jquery/src/core/readyException.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/core/stripAndCollapse.js": {
            "uri": "/static/lib/bower_components/jquery/src/core/stripAndCollapse.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/core/support.js": {
            "uri": "/static/lib/bower_components/jquery/src/core/support.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/core/var/rsingleTag.js": {
            "uri": "/static/lib/bower_components/jquery/src/core/var/rsingleTag.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css.js": {
            "uri": "/static/lib/bower_components/jquery/src/css.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css/addGetHookIf.js": {
            "uri": "/static/lib/bower_components/jquery/src/css/addGetHookIf.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css/adjustCSS.js": {
            "uri": "/static/lib/bower_components/jquery/src/css/adjustCSS.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css/curCSS.js": {
            "uri": "/static/lib/bower_components/jquery/src/css/curCSS.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css/hiddenVisibleSelectors.js": {
            "uri": "/static/lib/bower_components/jquery/src/css/hiddenVisibleSelectors.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css/showHide.js": {
            "uri": "/static/lib/bower_components/jquery/src/css/showHide.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css/support.js": {
            "uri": "/static/lib/bower_components/jquery/src/css/support.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css/var/cssExpand.js": {
            "uri": "/static/lib/bower_components/jquery/src/css/var/cssExpand.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css/var/getStyles.js": {
            "uri": "/static/lib/bower_components/jquery/src/css/var/getStyles.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css/var/isHiddenWithinTree.js": {
            "uri": "/static/lib/bower_components/jquery/src/css/var/isHiddenWithinTree.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css/var/rmargin.js": {
            "uri": "/static/lib/bower_components/jquery/src/css/var/rmargin.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css/var/rnumnonpx.js": {
            "uri": "/static/lib/bower_components/jquery/src/css/var/rnumnonpx.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/css/var/swap.js": {
            "uri": "/static/lib/bower_components/jquery/src/css/var/swap.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/data.js": {
            "uri": "/static/lib/bower_components/jquery/src/data.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/data/Data.js": {
            "uri": "/static/lib/bower_components/jquery/src/data/Data.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/data/var/acceptData.js": {
            "uri": "/static/lib/bower_components/jquery/src/data/var/acceptData.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/data/var/dataPriv.js": {
            "uri": "/static/lib/bower_components/jquery/src/data/var/dataPriv.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/data/var/dataUser.js": {
            "uri": "/static/lib/bower_components/jquery/src/data/var/dataUser.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/deferred.js": {
            "uri": "/static/lib/bower_components/jquery/src/deferred.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/deferred/exceptionHook.js": {
            "uri": "/static/lib/bower_components/jquery/src/deferred/exceptionHook.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/deprecated.js": {
            "uri": "/static/lib/bower_components/jquery/src/deprecated.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/dimensions.js": {
            "uri": "/static/lib/bower_components/jquery/src/dimensions.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/effects.js": {
            "uri": "/static/lib/bower_components/jquery/src/effects.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/effects/animatedSelector.js": {
            "uri": "/static/lib/bower_components/jquery/src/effects/animatedSelector.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/effects/Tween.js": {
            "uri": "/static/lib/bower_components/jquery/src/effects/Tween.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/event.js": {
            "uri": "/static/lib/bower_components/jquery/src/event.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/event/ajax.js": {
            "uri": "/static/lib/bower_components/jquery/src/event/ajax.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/event/alias.js": {
            "uri": "/static/lib/bower_components/jquery/src/event/alias.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/event/focusin.js": {
            "uri": "/static/lib/bower_components/jquery/src/event/focusin.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/event/support.js": {
            "uri": "/static/lib/bower_components/jquery/src/event/support.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/event/trigger.js": {
            "uri": "/static/lib/bower_components/jquery/src/event/trigger.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/exports/amd.js": {
            "uri": "/static/lib/bower_components/jquery/src/exports/amd.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/exports/global.js": {
            "uri": "/static/lib/bower_components/jquery/src/exports/global.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/jquery.js": {
            "uri": "/static/lib/bower_components/jquery/src/jquery.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/manipulation.js": {
            "uri": "/static/lib/bower_components/jquery/src/manipulation.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/manipulation/_evalUrl.js": {
            "uri": "/static/lib/bower_components/jquery/src/manipulation/_evalUrl.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/manipulation/buildFragment.js": {
            "uri": "/static/lib/bower_components/jquery/src/manipulation/buildFragment.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/manipulation/getAll.js": {
            "uri": "/static/lib/bower_components/jquery/src/manipulation/getAll.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/manipulation/setGlobalEval.js": {
            "uri": "/static/lib/bower_components/jquery/src/manipulation/setGlobalEval.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/manipulation/support.js": {
            "uri": "/static/lib/bower_components/jquery/src/manipulation/support.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/manipulation/var/rcheckableType.js": {
            "uri": "/static/lib/bower_components/jquery/src/manipulation/var/rcheckableType.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/manipulation/var/rscriptType.js": {
            "uri": "/static/lib/bower_components/jquery/src/manipulation/var/rscriptType.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/manipulation/var/rtagName.js": {
            "uri": "/static/lib/bower_components/jquery/src/manipulation/var/rtagName.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/manipulation/wrapMap.js": {
            "uri": "/static/lib/bower_components/jquery/src/manipulation/wrapMap.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/offset.js": {
            "uri": "/static/lib/bower_components/jquery/src/offset.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/queue.js": {
            "uri": "/static/lib/bower_components/jquery/src/queue.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/queue/delay.js": {
            "uri": "/static/lib/bower_components/jquery/src/queue/delay.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/selector-native.js": {
            "uri": "/static/lib/bower_components/jquery/src/selector-native.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/selector-sizzle.js": {
            "uri": "/static/lib/bower_components/jquery/src/selector-sizzle.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/selector.js": {
            "uri": "/static/lib/bower_components/jquery/src/selector.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/serialize.js": {
            "uri": "/static/lib/bower_components/jquery/src/serialize.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/traversing.js": {
            "uri": "/static/lib/bower_components/jquery/src/traversing.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/traversing/findFilter.js": {
            "uri": "/static/lib/bower_components/jquery/src/traversing/findFilter.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/traversing/var/dir.js": {
            "uri": "/static/lib/bower_components/jquery/src/traversing/var/dir.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/traversing/var/rneedsContext.js": {
            "uri": "/static/lib/bower_components/jquery/src/traversing/var/rneedsContext.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/traversing/var/siblings.js": {
            "uri": "/static/lib/bower_components/jquery/src/traversing/var/siblings.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/arr.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/arr.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/class2type.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/class2type.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/concat.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/concat.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/document.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/document.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/documentElement.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/documentElement.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/fnToString.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/fnToString.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/getProto.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/getProto.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/hasOwn.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/hasOwn.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/indexOf.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/indexOf.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/ObjectFunctionString.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/ObjectFunctionString.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/pnum.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/pnum.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/push.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/push.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/rcssNum.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/rcssNum.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/rnothtmlwhite.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/rnothtmlwhite.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/slice.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/slice.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/support.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/support.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/var/toString.js": {
            "uri": "/static/lib/bower_components/jquery/src/var/toString.js",
            "type": "js"
        },
        "static/lib/bower_components/jquery/src/wrap.js": {
            "uri": "/static/lib/bower_components/jquery/src/wrap.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/dist/css/tether-theme-arrows-dark.css": {
            "uri": "/static/lib/bower_components/tether/dist/css/tether-theme-arrows-dark.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/dist/css/tether-theme-arrows-dark.min.css": {
            "uri": "/static/lib/bower_components/tether/dist/css/tether-theme-arrows-dark.min.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/dist/css/tether-theme-arrows.css": {
            "uri": "/static/lib/bower_components/tether/dist/css/tether-theme-arrows.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/dist/css/tether-theme-arrows.min.css": {
            "uri": "/static/lib/bower_components/tether/dist/css/tether-theme-arrows.min.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/dist/css/tether-theme-basic.css": {
            "uri": "/static/lib/bower_components/tether/dist/css/tether-theme-basic.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/dist/css/tether-theme-basic.min.css": {
            "uri": "/static/lib/bower_components/tether/dist/css/tether-theme-basic.min.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/dist/css/tether.css": {
            "uri": "/static/lib/bower_components/tether/dist/css/tether.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/dist/css/tether.min.css": {
            "uri": "/static/lib/bower_components/tether/dist/css/tether.min.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/dist/js/tether.js": {
            "uri": "/static/lib/bower_components/tether/dist/js/tether.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/dist/js/tether.min.js": {
            "uri": "/static/lib/bower_components/tether/dist/js/tether.min.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/docs/coffee/intro.coffee": {
            "uri": "/static/lib/bower_components/tether/docs/coffee/intro.coffee",
            "type": "coffee"
        },
        "static/lib/bower_components/tether/docs/css/intro.css": {
            "uri": "/static/lib/bower_components/tether/docs/css/intro.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/docs/js/intro.js": {
            "uri": "/static/lib/bower_components/tether/docs/js/intro.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/docs/js/markAttachment.js": {
            "uri": "/static/lib/bower_components/tether/docs/js/markAttachment.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/docs/sass/intro.sass": {
            "uri": "/static/lib/bower_components/tether/docs/sass/intro.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/docs/welcome/coffee/welcome.coffee": {
            "uri": "/static/lib/bower_components/tether/docs/welcome/coffee/welcome.coffee",
            "type": "coffee"
        },
        "static/lib/bower_components/tether/docs/welcome/css/browser-demo.css": {
            "uri": "/static/lib/bower_components/tether/docs/welcome/css/browser-demo.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/docs/welcome/css/prism.css": {
            "uri": "/static/lib/bower_components/tether/docs/welcome/css/prism.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/docs/welcome/css/welcome.css": {
            "uri": "/static/lib/bower_components/tether/docs/welcome/css/welcome.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/docs/welcome/js/drop.js": {
            "uri": "/static/lib/bower_components/tether/docs/welcome/js/drop.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/docs/welcome/js/jquery.js": {
            "uri": "/static/lib/bower_components/tether/docs/welcome/js/jquery.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/docs/welcome/js/log.js": {
            "uri": "/static/lib/bower_components/tether/docs/welcome/js/log.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/docs/welcome/js/tether-v0.1.3.js": {
            "uri": "/static/lib/bower_components/tether/docs/welcome/js/tether-v0.1.3.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/docs/welcome/js/welcome.js": {
            "uri": "/static/lib/bower_components/tether/docs/welcome/js/welcome.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/docs/welcome/sass/_inline-block.sass": {
            "uri": "/static/lib/bower_components/tether/docs/welcome/sass/_inline-block.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/docs/welcome/sass/browser-demo.sass": {
            "uri": "/static/lib/bower_components/tether/docs/welcome/sass/browser-demo.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/docs/welcome/sass/welcome.sass": {
            "uri": "/static/lib/bower_components/tether/docs/welcome/sass/welcome.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/examples/chosen/chosen.css": {
            "uri": "/static/lib/bower_components/tether/examples/chosen/chosen.css",
            "type": "css",
            "aioPkg": "pkg/static/lib/bower_components/tether/examples/chosen/index.html_aio.css"
        },
        "static/lib/bower_components/tether/examples/chosen/chosen.js": {
            "uri": "/static/lib/bower_components/tether/examples/chosen/chosen.js",
            "type": "js",
            "aioPkg": "pkg/static/lib/bower_components/tether/examples/chosen/index.html_aio.js"
        },
        "static/lib/bower_components/tether/examples/common/css/style.css": {
            "uri": "/static/lib/bower_components/tether/examples/common/css/style.css",
            "type": "css",
            "aioPkg": "pkg/static/lib/bower_components/tether/examples/testbed/index.html_aio.css"
        },
        "static/lib/bower_components/tether/examples/dolls/dolls.css": {
            "uri": "/static/lib/bower_components/tether/examples/dolls/dolls.css",
            "type": "css"
        },
        "static/lib/bower_components/tether/examples/dolls/dolls.js": {
            "uri": "/static/lib/bower_components/tether/examples/dolls/dolls.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/examples/facebook/facebook.css": {
            "uri": "/static/lib/bower_components/tether/examples/facebook/facebook.css",
            "type": "css",
            "aioPkg": "pkg/static/lib/bower_components/tether/examples/facebook/index.html_aio.css"
        },
        "static/lib/bower_components/tether/examples/resources/css/base.css": {
            "uri": "/static/lib/bower_components/tether/examples/resources/css/base.css",
            "type": "css",
            "aioPkg": "pkg/static/lib/bower_components/tether/examples/viewport/index.html_aio.css"
        },
        "static/lib/bower_components/tether/examples/resources/js/jquery.js": {
            "uri": "/static/lib/bower_components/tether/examples/resources/js/jquery.js",
            "type": "js",
            "aioPkg": "pkg/static/lib/bower_components/tether/examples/tooltip/index.html_aio.js"
        },
        "static/lib/bower_components/tether/examples/resources/js/log.js": {
            "uri": "/static/lib/bower_components/tether/examples/resources/js/log.js",
            "type": "js",
            "aioPkg": "pkg/static/lib/bower_components/tether/examples/tooltip/index.html_aio.js"
        },
        "static/lib/bower_components/tether/examples/viewport/colors.css": {
            "uri": "/static/lib/bower_components/tether/examples/viewport/colors.css",
            "type": "css",
            "aioPkg": "pkg/static/lib/bower_components/tether/examples/viewport/index.html_aio.css"
        },
        "static/lib/bower_components/tether/gulpfile.js": {
            "uri": "/static/lib/bower_components/tether/gulpfile.js",
            "type": "js",
            "deps": [
                "del",
                "gulp",
                "gulp-babel",
                "gulp-bump",
                "gulp-concat",
                "gulp-header",
                "gulp-minify-css",
                "gulp-plumber",
                "gulp-autoprefixer",
                "gulp-rename",
                "gulp-uglify",
                "gulp-sass",
                "gulp-wrap-umd",
                "static/lib/bower_components/tether/package.json"
            ]
        },
        "static/lib/bower_components/tether/src/css/helpers/_tether-theme-arrows.sass": {
            "uri": "/static/lib/bower_components/tether/src/css/helpers/_tether-theme-arrows.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/src/css/helpers/_tether-theme-basic.sass": {
            "uri": "/static/lib/bower_components/tether/src/css/helpers/_tether-theme-basic.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/src/css/helpers/_tether.sass": {
            "uri": "/static/lib/bower_components/tether/src/css/helpers/_tether.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/src/css/mixins/_inline-block.sass": {
            "uri": "/static/lib/bower_components/tether/src/css/mixins/_inline-block.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/src/css/mixins/_pie-clearfix.sass": {
            "uri": "/static/lib/bower_components/tether/src/css/mixins/_pie-clearfix.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/src/css/tether-theme-arrows-dark.sass": {
            "uri": "/static/lib/bower_components/tether/src/css/tether-theme-arrows-dark.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/src/css/tether-theme-arrows.sass": {
            "uri": "/static/lib/bower_components/tether/src/css/tether-theme-arrows.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/src/css/tether-theme-basic.sass": {
            "uri": "/static/lib/bower_components/tether/src/css/tether-theme-basic.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/src/css/tether.sass": {
            "uri": "/static/lib/bower_components/tether/src/css/tether.sass",
            "type": "sass"
        },
        "static/lib/bower_components/tether/src/js/abutment.js": {
            "uri": "/static/lib/bower_components/tether/src/js/abutment.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/src/js/constraint.js": {
            "uri": "/static/lib/bower_components/tether/src/js/constraint.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/src/js/markAttachment.js": {
            "uri": "/static/lib/bower_components/tether/src/js/markAttachment.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/src/js/shift.js": {
            "uri": "/static/lib/bower_components/tether/src/js/shift.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/src/js/tether.js": {
            "uri": "/static/lib/bower_components/tether/src/js/tether.js",
            "type": "js"
        },
        "static/lib/bower_components/tether/src/js/utils.js": {
            "uri": "/static/lib/bower_components/tether/src/js/utils.js",
            "type": "js"
        },
        "static/lib/mod.js": {
            "uri": "/static/lib/mod.js",
            "type": "js"
        },
        "static/script/index.js": {
            "uri": "/static/script/index.js",
            "type": "js",
            "deps": [
                "comp/scrollTop.js"
            ],
            "aioPkg": "pkg/index.html_aio_2.js"
        }
    },
    "pkg": {
        "p0": {
            "uri": "/dist/common/base.js",
            "type": "js",
            "has": [
                "static/common/bootstrap.min.js",
                "static/common/jquery.min.js",
                "static/common/mod.js",
                "static/common/tether.min.js"
            ]
        },
        "p1": {
            "uri": "/dist/common/base.css",
            "type": "css",
            "has": [
                "static/common/bootstrap.min.css",
                "static/common/tether.min.css"
            ]
        },
        "pkg/index.html_aio.js": {
            "type": "js",
            "uri": "/pkg/index.html_aio.js",
            "has": [
                "comp/cal/cal.js",
                "comp/1-0/1-0.js",
                "static/lib/bower_components/jquery/dist/jquery.min.js"
            ]
        },
        "pkg/index.html_aio_2.js": {
            "type": "js",
            "uri": "/pkg/index.html_aio_2.js",
            "has": [
                "comp/scrollTop.js",
                "static/script/index.js"
            ]
        },
        "pkg/page/about.html_aio.js": {
            "type": "js",
            "uri": "/pkg/page/about.html_aio.js",
            "has": [
                "comp/cal/cal.js",
                "comp/1-0/1-0.js"
            ]
        },
        "pkg/static/lib/bower_components/jquery.stellar/test/jquery.stellar.html_aio.js": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/jquery.stellar/test/jquery.stellar.html_aio.js",
            "has": [
                "static/lib/bower_components/jquery.stellar/libs/qunit/qunit.js",
                "static/lib/bower_components/jquery.stellar/src/jquery.stellar.js",
                "static/lib/bower_components/jquery.stellar/test/jquery.stellar_test.js"
            ]
        },
        "pkg/static/lib/bower_components/jquery.stellar/test/jquery.stellar.html_aio.css": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/jquery.stellar/test/jquery.stellar.html_aio.css",
            "has": [
                "static/lib/bower_components/jquery.stellar/libs/qunit/qunit.css",
                "static/lib/bower_components/jquery.stellar/test/jquery.stellar.css"
            ]
        },
        "pkg/static/lib/bower_components/tether/examples/chosen/index.html_aio.js": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/tether/examples/chosen/index.html_aio.js",
            "has": [
                "static/lib/bower_components/tether/examples/resources/js/log.js",
                "static/lib/bower_components/tether/examples/resources/js/jquery.js",
                "static/lib/bower_components/tether/examples/chosen/chosen.js"
            ]
        },
        "pkg/static/lib/bower_components/tether/examples/chosen/index.html_aio.css": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/tether/examples/chosen/index.html_aio.css",
            "has": [
                "static/lib/bower_components/tether/examples/resources/css/base.css",
                "static/lib/bower_components/tether/examples/chosen/chosen.css"
            ]
        },
        "pkg/static/lib/bower_components/tether/examples/enable-disable/index.html_aio.css": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/tether/examples/enable-disable/index.html_aio.css",
            "has": [
                "static/lib/bower_components/tether/examples/resources/css/base.css",
                "static/lib/bower_components/tether/examples/common/css/style.css"
            ]
        },
        "pkg/static/lib/bower_components/tether/examples/facebook/index.html_aio.js": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/tether/examples/facebook/index.html_aio.js",
            "has": [
                "static/lib/bower_components/tether/examples/resources/js/log.js",
                "static/lib/bower_components/tether/examples/resources/js/jquery.js"
            ]
        },
        "pkg/static/lib/bower_components/tether/examples/facebook/index.html_aio.css": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/tether/examples/facebook/index.html_aio.css",
            "has": [
                "static/lib/bower_components/tether/examples/resources/css/base.css",
                "static/lib/bower_components/tether/examples/facebook/facebook.css"
            ]
        },
        "pkg/static/lib/bower_components/tether/examples/out-of-bounds/index.html_aio.css": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/tether/examples/out-of-bounds/index.html_aio.css",
            "has": [
                "static/lib/bower_components/tether/examples/resources/css/base.css",
                "static/lib/bower_components/tether/examples/common/css/style.css"
            ]
        },
        "pkg/static/lib/bower_components/tether/examples/pin/index.html_aio.css": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/tether/examples/pin/index.html_aio.css",
            "has": [
                "static/lib/bower_components/tether/examples/resources/css/base.css",
                "static/lib/bower_components/tether/examples/common/css/style.css"
            ]
        },
        "pkg/static/lib/bower_components/tether/examples/scroll/index.html_aio.css": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/tether/examples/scroll/index.html_aio.css",
            "has": [
                "static/lib/bower_components/tether/examples/resources/css/base.css",
                "static/lib/bower_components/tether/examples/common/css/style.css"
            ]
        },
        "pkg/static/lib/bower_components/tether/examples/simple/index.html_aio.css": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/tether/examples/simple/index.html_aio.css",
            "has": [
                "static/lib/bower_components/tether/examples/resources/css/base.css",
                "static/lib/bower_components/tether/examples/common/css/style.css"
            ]
        },
        "pkg/static/lib/bower_components/tether/examples/testbed/index.html_aio.css": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/tether/examples/testbed/index.html_aio.css",
            "has": [
                "static/lib/bower_components/tether/examples/resources/css/base.css",
                "static/lib/bower_components/tether/examples/common/css/style.css"
            ]
        },
        "pkg/static/lib/bower_components/tether/examples/tooltip/index.html_aio.js": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/tether/examples/tooltip/index.html_aio.js",
            "has": [
                "static/lib/bower_components/tether/examples/resources/js/log.js",
                "static/lib/bower_components/tether/examples/resources/js/jquery.js"
            ]
        },
        "pkg/static/lib/bower_components/tether/examples/viewport/index.html_aio.css": {
            "type": "js",
            "uri": "/pkg/static/lib/bower_components/tether/examples/viewport/index.html_aio.css",
            "has": [
                "static/lib/bower_components/tether/examples/resources/css/base.css",
                "static/lib/bower_components/tether/examples/viewport/colors.css"
            ]
        }
    }
} 来加载 js 组件
- command
    - fis3 release  组件分散预览
    - fis3 release prod 资源或者组件进行了合并处理
