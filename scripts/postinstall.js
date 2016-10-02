var fs = require('fs'),
    angularComponents = angularPaths([
        "core",
        "common",
        "compiler",
        "platform-browser",
        "platform-browser-dynamic",
        "http",
        "router",
        "forms"]),
    polyfills = [
        './node_modules/rxjs/bundles/Rx.min.js',
        './node_modules/core-js/client/shim.min.js',
        './node_modules/zone.js/dist/zone.js',
        './node_modules/reflect-metadata/Reflect.js'
        ],
    tsCompiler = [
        './node_modules/traceur/bin/traceur.js',
        './node_modules/systemjs/dist/system.src.js',
        './node_modules/typescript/lib/typescript.js'
    ],
    angularInMemoryWebApi = [
        './node_modules/angular-in-memory-web-api/index.js',
        './node_modules/angular-in-memory-web-api/http-status-codes.js',
        './node_modules/angular-in-memory-web-api/in-memory-backend.service.js',
        './node_modules/angular-in-memory-web-api/in-memory-web-api.module.js',
        
    ]
    ;



merge('./lib/angular2.bundle.js',
    polyfills
        .concat(angularComponents)
);

merge('./lib/angular2.bundle.ts.js',
    polyfills
        .concat(tsCompiler)
        //.concat(angularComponents)
);

merge('./lib/angular-in-memory-web-api.js',
    angularInMemoryWebApi
);

function merge(output, files) {
    var data = '', i;
    for (i = 0; i < files.length; i++) {
        data += fs.readFileSync(files[i]) + '\n';
    }
    fs.writeFileSync(output, data);
}

function angularPaths(mods) {
    var result = [];
    for (i = 0; i < mods.length; i++) {
        result.push(
            './node_modules/@angular/' + mods[i] + '/bundles/' + mods[i] + '.umd.min.js'
        );
    }
    return result;
}