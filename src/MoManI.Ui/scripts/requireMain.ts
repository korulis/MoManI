﻿declare var require: any;

require.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': 'lib/jquery',
        'angular': 'lib/angular',
        'angular-route': 'lib/angular-route',
        'angular-resource': 'lib/angular-resource',
        'angular-ui-bootstrap': 'lib/ui-bootstrap-tpls',
        'angular-strap-navbar': 'lib/angular-strap-navbar',
        'angular-confirm': 'lib/angular-confirm',
        'checklist-model': 'lib/checklist-model',
        'treeGrid': 'lib/tree-grid-directive',
        'handsontable': 'lib/handsontable.full',
        'ngHandsontable': 'lib/ngHandsontable',
        'node-uuid': 'lib/uuid',
        'lodash': 'lib/lodash',
        'jszip': 'lib/jszip',
        'fileSaver': 'lib/FileSaver',
        'd3': 'lib/d3',
        'nvd3': 'lib/nv.d3',
        'angular-nvd3': 'lib/angular-nvd3',
    },
    shim: {
        'jquery': { exports: 'jquery' },
        'jszip': { exports: 'jszip', deps: ['fileSaver'] },
        'angular': { exports: 'angular', deps: ['jquery'] },
        'angular-route': { exports: 'angular-route', deps: ['angular'] },
        'angular-resource': { exports: 'angular-resource', deps: ['angular'] },
        'angular-ui-bootstrap': { exports: 'angular-ui-bootstrap', deps: ['angular'] },
        'angular-strap-navbar': { exports: 'angular-strap-navbar', deps: ['angular'] },
        'checklist-model': { exports: 'checklist-model', deps: ['angular'] },
        'ngHandsontable': { exports: 'ngHandsontable', deps: ['angular', 'handsontable'] },
        'nvd3': { exports: 'nvd3', deps: ['d3'] },
        'angular-nvd3': { exports: 'angular-nvd3', deps: ['angular', 'd3', 'nvd3'] },
        'angular-confirm': { exports: 'angular-confirm', deps: ['angular', 'angular-ui-bootstrap'] },
        'treeGrid': { exports: 'treeGrid', deps: ['angular']},
    },
});

declare module 'angular-resource' {
}
declare module 'angular-ui-bootstrap' {
}
declare module 'angular-strap-navbar' {
}
declare module 'checklist-model' {
}
declare module 'ngHandsontable' {
}
declare module 'angular-nvd3' {
}
declare module 'angular-confirm' {
}
declare module 'treeGrid' {
}

require(['jquery', 'angular', 'angular-route', 'angular-resource', 'angular-ui-bootstrap', 'angular-strap-navbar', 'angular-nvd3', 'angular-confirm', 'checklist-model', 'treeGrid', 'ngHandsontable', 'application', 'routes'],
    ($, angular, angularRoute, angularResource, angularUiBootstrap, angularStrapNavbar, angularNvd3, angularConfirm, checklistModel, treeGrid, ngHandsontable, application, routes) => {
        $(() => { angular.bootstrap(document, ['application']); });
    });