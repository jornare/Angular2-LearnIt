System.config({
    //use typescript for compilation
    transpiler: 'typescript',
    //typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    paths: {
        // paths serve as alias
        'npm:': '../../node_modules/'
    },
    //map tells the System loader where to look for things
    map: {
        app: "./",
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/material': 'npm:@angular/material/material.umd.js',
        // other libraries
        'rxjs': 'npm:rxjs',
        'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
    },
    //packages defines our app package
    packages: {
        app: {
            main: './main.ts',
            defaultExtension: 'ts'
        },
        rxjs: {
            defaultExtension: 'js'
        },
        'angular-in-memory-web-api': {
            main: './index.js',
            defaultExtension: 'js'
        }
    }
});