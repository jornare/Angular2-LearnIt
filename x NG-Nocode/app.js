/* global ng */
var angularVersion = location.search.length ? location.search.substr(1): '2.0.0-alpha.42';

function onLoad(ng, originalHTML) {
    var AppComponent = ng
        .Component({
            selector: '[ng-app]'
        })
        .View({
            template: '<div #container></div>',
            directives: [ng.CORE_DIRECTIVES, ng.FORM_DIRECTIVES]
        })
        .Class({
            constructor: [new ng.Inject(ng.DynamicComponentLoader), new ng.Inject(ng.ElementRef), function(loader, elementRef){
                //var elm = elementRef.nativeElement;
                var directives = [ng.CORE_DIRECTIVES, ng.FORM_DIRECTIVES];
                if(ng.ROUTER_DIRECTIVES){
                    directives.push(ng.ROUTER_DIRECTIVES);
                }
                
                var CompiledComponent = ng.Component({ selector: 'compiled' })
                .View({ template: originalHTML,
                        directives: directives
                        })
                .Class({
                    constructor: function() {
                        var i;
                        if(window.init) { //load global init
                            for(i in window.init) {
                                this[i] = window.init[i];
                            }
                        }
                    }
                    });
                
                loader.loadIntoLocation(CompiledComponent, elementRef, 'container');
            }]
        });
        ng.bootstrap(AppComponent); 
}

document.addEventListener('DOMContentLoaded', function() {
    var originalHTML = document.body.innerHTML,
        angular2 = document.createElement('script');
    document.body.innerHTML = 'Loading...';
    angular2.addEventListener('load', function() {
        onLoad(ng, originalHTML);
    });
    angular2.setAttribute('src', 'https://code.angularjs.org/' + angularVersion + '/angular2.sfx.dev.js');
    document.head.appendChild(angular2);
    document.body.setAttribute('ng-app','');
});
  
  
 //     <script src="https://code.angularjs.org/2.0.0-alpha.42/angular2.sfx.dev.js"></script>