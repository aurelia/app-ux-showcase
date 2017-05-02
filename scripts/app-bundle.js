define('routes',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var coreFeatures = {
        title: 'Core Features'
    };
    var components = {
        title: 'Components'
    };
    exports.routes = [
        { route: '', redirect: 'introduction' },
        { route: 'introduction', moduleId: './home', name: 'introduction', title: 'Introduction' },
        { settings: { category: coreFeatures }, route: 'swatches', moduleId: './core-features/swatches', name: 'swatches', title: 'Swatches', nav: true },
        { settings: { category: coreFeatures }, route: 'theming', moduleId: './core-features/theming', name: 'theming', title: 'Theming', nav: true },
        { settings: { category: components }, route: 'buttons', moduleId: './components/buttons', name: 'buttons', title: 'Buttons', nav: true },
        { settings: { category: components }, route: 'checkbox', moduleId: './components/checkbox', name: 'checkbox', title: 'Checkbox', nav: true },
        { settings: { category: components }, route: 'forms', moduleId: './components/forms', name: 'forms', title: 'Forms', nav: true },
        { settings: { category: components }, route: 'inputs', moduleId: './components/inputs', name: 'inputs', title: 'Inputs', nav: true },
        { settings: { category: components }, route: 'textarea', moduleId: './components/textarea', name: 'textarea', title: 'Textarea', nav: true },
        { settings: { category: components }, route: 'chips', moduleId: './components/chips', name: 'chips', title: 'Chips', nav: true },
        { settings: { category: components }, route: 'icons', moduleId: './components/icons', name: 'icons', title: 'Icons', nav: true }
    ];
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-ux", "aurelia-dependency-injection", "./routes"], function (require, exports, aurelia_ux_1, aurelia_dependency_injection_1, routes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(ux) {
            ux.design.primary = '#704794';
            ux.design.accent = '#e62787';
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.map(routes_1.routes);
        };
        return App;
    }());
    App = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_ux_1.AureliaUX),
        __metadata("design:paramtypes", [Object])
    ], App);
    exports.App = App;
    var CategoriesValueConverter = (function () {
        function CategoriesValueConverter() {
        }
        CategoriesValueConverter.prototype.toView = function (navModels) {
            var categories = new Map();
            for (var _i = 0, navModels_1 = navModels; _i < navModels_1.length; _i++) {
                var model = navModels_1[_i];
                var routes_2 = categories.get(model.settings.category);
                if (!routes_2) {
                    categories.set(model.settings.category, routes_2 = []);
                }
                routes_2.push(model);
            }
            return categories;
        };
        return CategoriesValueConverter;
    }());
    exports.CategoriesValueConverter = CategoriesValueConverter;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
        }
        return Home;
    }());
    exports.Home = Home;
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-validation')
            .plugin('aurelia-ux');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('components/buttons',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Buttons = (function () {
        function Buttons() {
        }
        return Buttons;
    }());
    exports.Buttons = Buttons;
});

define('components/checkbox',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Checkbox = (function () {
        function Checkbox() {
            this.products = ['Motherboard', 'CPU', 'Memory'];
            this.productObjects = [
                { id: 0, name: 'Motherboard' },
                { id: 1, name: 'CPU' },
                { id: 2, name: 'Memory' },
            ];
            this.selectedProductsWithMatcher = [
                { id: 1, name: 'CPU' },
                { id: 2, name: 'Memory' }
            ];
            this.productMatcher = function (a, b) { return a.id === b.id; };
            this.selectedStringProducts = [];
            this.selectedProductObjects = [];
        }
        return Checkbox;
    }());
    exports.Checkbox = Checkbox;
});

define('components/chips',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Chips = (function () {
        function Chips() {
        }
        return Chips;
    }());
    exports.Chips = Chips;
});

define('components/forms-form-renderer',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AureliaUXFormRenderer = (function () {
        function AureliaUXFormRenderer() {
        }
        AureliaUXFormRenderer.prototype.render = function (instruction) {
            for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
                var _b = _a[_i], result = _b.result, elements = _b.elements;
                for (var _c = 0, elements_1 = elements; _c < elements_1.length; _c++) {
                    var element_1 = elements_1[_c];
                    this.remove(element_1, result);
                }
            }
            for (var _d = 0, _e = instruction.render; _d < _e.length; _d++) {
                var _f = _e[_d], result = _f.result, elements = _f.elements;
                for (var _g = 0, elements_2 = elements; _g < elements_2.length; _g++) {
                    var element_2 = elements_2[_g];
                    this.add(element_2, result);
                }
            }
        };
        AureliaUXFormRenderer.prototype.add = function (element, result) {
            if (result.valid) {
                return;
            }
            element.classList.add('has-error');
            var uxField = element.closest('ux-field');
            if (!uxField) {
                return;
            }
            var inputInfoHintText = uxField.querySelector('ux-input-info');
            if (!inputInfoHintText) {
                return;
            }
            var message = document.createElement('span');
            message.className = 'error-text';
            message.textContent = result.message;
            message.id = "validation-message-" + result.id;
            inputInfoHintText.insertBefore(message, inputInfoHintText.firstChild);
        };
        AureliaUXFormRenderer.prototype.remove = function (element, result) {
            if (result.valid) {
                return;
            }
            element.classList.remove('has-error');
            var uxField = element.closest('ux-field');
            if (!uxField) {
                return;
            }
            var inputInfoHintText = uxField.querySelector('ux-input-info');
            if (!inputInfoHintText) {
                return;
            }
            var message = inputInfoHintText.querySelector("#validation-message-" + result.id);
            if (message) {
                inputInfoHintText.removeChild(message);
                if (inputInfoHintText.querySelectorAll('.help-block.validation-message').length === 0) {
                    inputInfoHintText.classList.remove('has-error');
                }
            }
        };
        return AureliaUXFormRenderer;
    }());
    exports.AureliaUXFormRenderer = AureliaUXFormRenderer;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/forms',["require", "exports", "aurelia-validation", "aurelia-dependency-injection", "./forms-form-renderer"], function (require, exports, aurelia_validation_1, aurelia_dependency_injection_1, forms_form_renderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Forms = (function () {
        function Forms(controllerFactory) {
            this.controllerFactory = controllerFactory;
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.controller = null;
            this.controller = controllerFactory.createForCurrentScope();
            this.controller.addRenderer(new forms_form_renderer_1.AureliaUXFormRenderer());
        }
        Forms.prototype.submit = function () {
            this.controller.validate().then(function (value) {
                if (value.valid) {
                    alert('Form submitted!');
                }
                else {
                }
            });
        };
        return Forms;
    }());
    Forms = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_validation_1.ValidationControllerFactory),
        __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory])
    ], Forms);
    exports.Forms = Forms;
    aurelia_validation_1.ValidationRules
        .ensure('firstName').required().minLength(2)
        .ensure('lastName').required().minLength(2)
        .ensure('email').required().email()
        .on(Forms);
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/inputs',["require", "exports", "aurelia-validation", "aurelia-dependency-injection"], function (require, exports, aurelia_validation_1, aurelia_dependency_injection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Inputs = (function () {
        function Inputs(controllerFactory) {
            this.controllerFactory = controllerFactory;
            this.firstName = '';
            this.email = '';
            this.controller = null;
            this.controller = controllerFactory.createForCurrentScope();
        }
        Inputs.prototype.submit = function () {
            this.controller.validate();
        };
        return Inputs;
    }());
    Inputs = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_validation_1.ValidationControllerFactory),
        __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory])
    ], Inputs);
    exports.Inputs = Inputs;
    aurelia_validation_1.ValidationRules
        .ensure('firstName').required()
        .ensure('email').required().email()
        .on(Inputs);
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/textarea',["require", "exports", "aurelia-validation", "aurelia-dependency-injection"], function (require, exports, aurelia_validation_1, aurelia_dependency_injection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextArea = (function () {
        function TextArea(controllerFactory) {
            this.controllerFactory = controllerFactory;
            this.firstName = '';
            this.description = '';
            this.controller = null;
            this.controller = controllerFactory.createForCurrentScope();
        }
        TextArea.prototype.submit = function () {
            this.controller.validate();
        };
        return TextArea;
    }());
    TextArea = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_validation_1.ValidationControllerFactory),
        __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory])
    ], TextArea);
    exports.TextArea = TextArea;
    aurelia_validation_1.ValidationRules
        .ensure('firstName')
        .required()
        .ensure('description')
        .required()
        .minLength(20)
        .maxLength(500)
        .on(TextArea);
});

define('core-features/swatches',["require", "exports", "aurelia-ux"], function (require, exports, aurelia_ux_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Swatches = (function () {
        function Swatches() {
            this.swatches = makeSwatches();
        }
        return Swatches;
    }());
    exports.Swatches = Swatches;
    function makeSwatches() {
        return Object.keys(aurelia_ux_1.swatches).map(function (key) {
            var value = aurelia_ux_1.swatches[key];
            if (typeof value === 'string') {
                return null;
            }
            else {
                return {
                    name: key,
                    colors: makeSwatch(value),
                    p500: value.p500
                };
            }
        }).filter(function (x) { return x !== null; });
    }
    function makeSwatch(swatch) {
        return Object.keys(swatch).map(function (key) {
            return {
                name: key,
                value: swatch[key]
            };
        }).sort(sortColors);
    }
    function sortColors(a, b) {
        if (a.name.startsWith('p')) {
            if (b.name.startsWith('p')) {
                var aNum = parseInt(a.name.substring(1));
                var bNum = parseInt(b.name.substring(1));
                return aNum > bNum ? 1 : -1;
            }
            else {
                return -1;
            }
        }
        else {
            if (b.name.startsWith('p')) {
                return 1;
            }
            else {
                var aNum = parseInt(a.name.substring(1));
                var bNum = parseInt(b.name.substring(1));
                return aNum > bNum ? 1 : -1;
            }
        }
    }
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('core-features/theming',["require", "exports", "aurelia-ux", "aurelia-dependency-injection"], function (require, exports, aurelia_ux_1, aurelia_dependency_injection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Theming = (function () {
        function Theming(ux) {
            this.ux = ux;
            this.currentProperty = 'primary';
        }
        return Theming;
    }());
    Theming = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_ux_1.AureliaUX),
        __metadata("design:paramtypes", [aurelia_ux_1.AureliaUX])
    ], Theming);
    exports.Theming = Theming;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/aurelia-ux',["require", "exports", "aurelia-dependency-injection", "./hosts/cordova", "./hosts/web", "./hosts/electron", "./ux-configuration"], function (require, exports, aurelia_dependency_injection_1, cordova_1, web_1, electron_1, ux_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AureliaUX = (function () {
        function AureliaUX(use, container) {
            this.use = use;
            this.availableHosts = [
                container.get(cordova_1.Cordova),
                container.get(electron_1.Electron),
                container.get(web_1.Web)
            ];
        }
        AureliaUX.prototype.start = function (config) {
            var _this = this;
            var found = this.availableHosts.find(function (x) { return x.isAvailable; });
            if (found === undefined) {
                throw new Error('Could not determine host environment');
            }
            this.host = found;
            return this.host.start(config).then(function (platform) {
                _this.platform = platform;
                _this.design = platform.design;
            });
        };
        return AureliaUX;
    }());
    AureliaUX = __decorate([
        aurelia_dependency_injection_1.inject(ux_configuration_1.UXConfiguration, aurelia_dependency_injection_1.Container)
    ], AureliaUX);
    exports.AureliaUX = AureliaUX;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/hosts/cordova',["require", "exports", "aurelia-dependency-injection", "aurelia-pal", "../platforms/ios", "../platforms/android"], function (require, exports, aurelia_dependency_injection_1, aurelia_pal_1, ios_1, android_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cordova = (function () {
        function Cordova(container) {
            this.container = container;
            this.type = 'cordova';
        }
        Object.defineProperty(Cordova.prototype, "isAvailable", {
            get: function () {
                return !!aurelia_pal_1.PLATFORM.global.cordova;
            },
            enumerable: true,
            configurable: true
        });
        Cordova.prototype.start = function () {
            var _this = this;
            return new Promise(function (resolve) {
                aurelia_pal_1.DOM.addEventListener('deviceready', function () {
                    switch (_this.getPlatformType()) {
                        case 'ios':
                            resolve(_this.container.get(ios_1.IOS));
                            break;
                        default:
                            resolve(_this.container.get(android_1.Android));
                            break;
                    }
                }, false);
            });
        };
        Cordova.prototype.getPlatformType = function () {
            var device = aurelia_pal_1.PLATFORM.global.device || { platform: 'android' };
            return device.platform.toLowerCase();
        };
        return Cordova;
    }());
    Cordova = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_dependency_injection_1.Container)
    ], Cordova);
    exports.Cordova = Cordova;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/platforms/ios',["require", "exports", "aurelia-dependency-injection", "../designs/ios-design"], function (require, exports, aurelia_dependency_injection_1, ios_design_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IOS = (function () {
        function IOS(design) {
            this.design = design;
            this.type = 'ios';
        }
        return IOS;
    }());
    IOS = __decorate([
        aurelia_dependency_injection_1.inject(ios_design_1.IOSDesign)
    ], IOS);
    exports.IOS = IOS;
});

define('aurelia-ux/designs/ios-design',["require", "exports", "../colors/swatches", "../colors/shadows"], function (require, exports, swatches_1, shadows_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IOSDesign = (function () {
        function IOSDesign() {
            this.type = 'ios';
            this.primary = swatches_1.swatches.indigo.p500;
            this.primaryForeground = swatches_1.swatches.white;
            this.primaryLight = swatches_1.swatches.indigo.p100;
            this.primaryLightForeground = swatches_1.swatches.grey.p500;
            this.primaryDark = swatches_1.swatches.indigo.p700;
            this.primaryDarkForeground = swatches_1.swatches.white;
            this.accent = swatches_1.swatches.pink.a200;
            this.accentForeground = swatches_1.swatches.white;
            this.accentLight = swatches_1.swatches.pink.a100;
            this.accentLightForeground = swatches_1.swatches.white;
            this.accentDark = swatches_1.swatches.pink.a400;
            this.accentDarkForeground = swatches_1.swatches.white;
            this.elevationNone = shadows_1.shadows.depth_0;
            this.elevation2dp = shadows_1.shadows.depth_2dp;
            this.elevation3dp = shadows_1.shadows.depth_3dp;
            this.elevation4dp = shadows_1.shadows.depth_4dp;
            this.elevation6dp = shadows_1.shadows.depth_6dp;
            this.elevation8dp = shadows_1.shadows.depth_8dp;
            this.elevation16dp = shadows_1.shadows.depth_16dp;
            this.elevation24dp = shadows_1.shadows.depth_24dp;
            this.elevationFocus = shadows_1.shadows.depth_focus;
        }
        return IOSDesign;
    }());
    exports.IOSDesign = IOSDesign;
});

define('aurelia-ux/colors/swatches',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.swatches = {
        red: {
            p50: '#FFEBEE',
            p100: '#FFCDD2',
            p200: '#EF9A9A',
            p300: '#E57373',
            p400: '#EF5350',
            p500: '#F44336',
            p600: '#E53935',
            p700: '#D32F2F',
            p800: '#C62828',
            p900: '#B71C1C',
            a100: '#FF8A80',
            a200: '#FF5252',
            a400: '#FF1744',
            a700: '#D50000'
        },
        pink: {
            p50: '#FCE4EC',
            p100: '#F8BBD0',
            p200: '#F48FB1',
            p300: '#F06292',
            p400: '#EC407A',
            p500: '#E91E63',
            p600: '#D81B60',
            p700: '#C2185B',
            p800: '#AD1457',
            p900: '#880E4F',
            a100: '#FF80AB',
            a200: '#FF4081',
            a400: '#F50057',
            a700: '#C51162'
        },
        purple: {
            p50: '#F3E5F5',
            p100: '#E1BEE7',
            p200: '#CE93D8',
            p300: '#BA68C8',
            p400: '#AB47BC',
            p500: '#9C27B0',
            p600: '#8E24AA',
            p700: '#7B1FA2',
            p800: '#6A1B9A',
            p900: '#4A148C',
            a100: '#EA80FC',
            a200: '#E040FB',
            a400: '#D500F9',
            a700: '#AA00FF'
        },
        deepPurple: {
            p50: '#EDE7F6',
            p100: '#D1C4E9',
            p200: '#B39DDB',
            p300: '#9575CD',
            p400: '#7E57C2',
            p500: '#673AB7',
            p600: '#5E35B1',
            p700: '#512DA8',
            p800: '#4527A0',
            p900: '#311B92',
            a100: '#B388FF',
            a200: '#7C4DFF',
            a400: '#651FFF',
            a700: '#6200EA'
        },
        indigo: {
            p50: '#E8EAF6',
            p100: '#C5CAE9',
            p200: '#9FA8DA',
            p300: '#7986CB',
            p400: '#5C6BC0',
            p500: '#3F51B5',
            p600: '#3949AB',
            p700: '#303F9F',
            p800: '#283593',
            p900: '#1A237E',
            a100: '#8C9EFF',
            a200: '#536DFE',
            a400: '#3D5AFE',
            a700: '#304FFE'
        },
        blue: {
            p50: '#E3F2FD',
            p100: '#BBDEFB',
            p200: '#90CAF9',
            p300: '#64B5F6',
            p400: '#42A5F5',
            p500: '#2196F3',
            p600: '#1E88E5',
            p700: '#1976D2',
            p800: '#1565C0',
            p900: '#0D47A1',
            a100: '#82B1FF',
            a200: '#448AFF',
            a400: '#2979FF',
            a700: '#2962FF'
        },
        lightBlue: {
            p50: '#E1F5FE',
            p100: '#B3E5FC',
            p200: '#81D4FA',
            p300: '#4FC3F7',
            p400: '#29B6F6',
            p500: '#03A9F4',
            p600: '#039BE5',
            p700: '#0288D1',
            p800: '#0277BD',
            p900: '#01579B',
            a100: '#80D8FF',
            a200: '#40C4FF',
            a400: '#00B0FF',
            a700: '#0091EA'
        },
        cyan: {
            p50: '#E0F7FA',
            p100: '#B2EBF2',
            p200: '#80DEEA',
            p300: '#4DD0E1',
            p400: '#26C6DA',
            p500: '#00BCD4',
            p600: '#00ACC1',
            p700: '#0097A7',
            p800: '#00838F',
            p900: '#006064',
            a100: '#84FFFF',
            a200: '#18FFFF',
            a400: '#00E5FF',
            a700: '#00B8D4'
        },
        teal: {
            p50: '#E0F2F1',
            p100: '#B2DFDB',
            p200: '#80CBC4',
            p300: '#4DB6AC',
            p400: '#26A69A',
            p500: '#009688',
            p600: '#00897B',
            p700: '#00796B',
            p800: '#00695C',
            p900: '#004D40',
            a100: '#A7FFEB',
            a200: '#64FFDA',
            a400: '#1DE9B6',
            a700: '#00BFA5'
        },
        green: {
            p50: '#E8F5E9',
            p100: '#C8E6C9',
            p200: '#A5D6A7',
            p300: '#81C784',
            p400: '#66BB6A',
            p500: '#4CAF50',
            p600: '#43A047',
            p700: '#388E3C',
            p800: '#2E7D32',
            p900: '#1B5E20',
            a100: '#B9F6CA',
            a200: '#69F0AE',
            a400: '#00E676',
            a700: '#00C853'
        },
        lightGreen: {
            p50: '#F1F8E9',
            p100: '#DCEDC8',
            p200: '#C5E1A5',
            p300: '#AED581',
            p400: '#9CCC65',
            p500: '#8BC34A',
            p600: '#7CB342',
            p700: '#689F38',
            p800: '#558B2F',
            p900: '#33691E',
            a100: '#CCFF90',
            a200: '#B2FF59',
            a400: '#76FF03',
            a700: '#64DD17'
        },
        lime: {
            p50: '#F9FBE7',
            p100: '#F0F4C3',
            p200: '#E6EE9C',
            p300: '#DCE775',
            p400: '#D4E157',
            p500: '#CDDC39',
            p600: '#C0CA33',
            p700: '#AFB42B',
            p800: '#9E9D24',
            p900: '#827717',
            a100: '#F4FF81',
            a200: '#EEFF41',
            a400: '#C6FF00',
            a700: '#AEEA00'
        },
        yellow: {
            p50: '#FFFDE7',
            p100: '#FFF9C4',
            p200: '#FFF59D',
            p300: '#FFF176',
            p400: '#FFEE58',
            p500: '#FFEB3B',
            p600: '#FDD835',
            p700: '#FBC02D',
            p800: '#F9A825',
            p900: '#F57F17',
            a100: '#FFFF8D',
            a200: '#FFFF00',
            a400: '#FFEA00',
            a700: '#FFD600'
        },
        amber: {
            p50: '#FFF8E1',
            p100: '#FFECB3',
            p200: '#FFE082',
            p300: '#FFD54F',
            p400: '#FFCA28',
            p500: '#FFC107',
            p600: '#FFB300',
            p700: '#FFA000',
            p800: '#FF8F00',
            p900: '#FF6F00',
            a100: '#FFE57F',
            a200: '#FFD740',
            a400: '#FFC400',
            a700: '#FFAB00'
        },
        orange: {
            p50: '#FFF3E0',
            p100: '#FFE0B2',
            p200: '#FFCC80',
            p300: '#FFB74D',
            p400: '#FFA726',
            p500: '#FF9800',
            p600: '#FB8C00',
            p700: '#F57C00',
            p800: '#EF6C00',
            p900: '#E65100',
            a100: '#FFD180',
            a200: '#FFAB40',
            a400: '#FF9100',
            a700: '#FF6D00'
        },
        deepOrange: {
            p50: '#FBE9E7',
            p100: '#FFCCBC',
            p200: '#FFAB91',
            p300: '#FF8A65',
            p400: '#FF7043',
            p500: '#FF5722',
            p600: '#F4511E',
            p700: '#E64A19',
            p800: '#D84315',
            p900: '#BF360C',
            a100: '#FF9E80',
            a200: '#FF6E40',
            a400: '#FF3D00',
            a700: '#DD2C00'
        },
        brown: {
            p50: '#EFEBE9',
            p100: '#D7CCC8',
            p200: '#BCAAA4',
            p300: '#A1887F',
            p400: '#8D6E63',
            p500: '#795548',
            p600: '#6D4C41',
            p700: '#5D4037',
            p800: '#4E342E',
            p900: '#3E2723'
        },
        grey: {
            p50: '#FAFAFA',
            p100: '#F5F5F5',
            p200: '#EEEEEE',
            p300: '#E0E0E0',
            p400: '#BDBDBD',
            p500: '#9E9E9E',
            p600: '#757575',
            p700: '#616161',
            p800: '#424242',
            p900: '#212121'
        },
        blueGrey: {
            p50: '#ECEFF1',
            p100: '#CFD8DC',
            p200: '#B0BEC5',
            p300: '#90A4AE',
            p400: '#78909C',
            p500: '#607D8B',
            p600: '#546E7A',
            p700: '#455A64',
            p800: '#37474F',
            p900: '#263238'
        },
        black: '#000000',
        white: '#FFFFFF'
    };
});

define('aurelia-ux/colors/shadows',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shadows = {
        depth_0: 'none',
        depth_2dp: '0 2px 2px 0 rgba(0, 0, 0, 0.14),' +
            '0 3px 1px -2px rgba(0, 0, 0, 0.2),' +
            '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        depth_3dp: '0 3px 4px 0 rgba(0, 0, 0, 0.14),' +
            '0 3px 3px -2px rgba(0, 0, 0, 0.2),' +
            '0 1px 8px 0 rgba(0, 0, 0, 0.12)',
        depth_4dp: '0 4px 5px 0 rgba(0, 0, 0, 0.14),' +
            '0 1px 10px 0 rgba(0, 0, 0, 0.12),' +
            '0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        depth_6dp: '0 6px 10px 0 rgba(0, 0, 0, 0.14),' +
            '0 1px 18px 0 rgba(0, 0, 0, 0.12),' +
            '0 3px 5px -1px rgba(0, 0, 0, 0.2)',
        depth_8dp: '0 8px 10px 1px rgba(0, 0, 0, 0.14),' +
            '0 3px 14px 2px rgba(0, 0, 0, 0.12),' +
            '0 5px 5px -3px rgba(0, 0, 0, 0.2)',
        depth_16dp: '0 16px 24px 2px rgba(0, 0, 0, 0.14),' +
            '0 6px 30px 5px rgba(0, 0, 0, 0.12),' +
            '0 8px 10px -5px rgba(0, 0, 0, 0.2)',
        depth_24dp: '0 9px 46px  8px rgba(0, 0, 0, 0.14),' +
            '0 11px 15px -7px rgba(0, 0, 0, 0.12),' +
            '0 24px 38px  3px rgba(0, 0, 0, 0.2)',
        depth_focus: '0 0 8px rgba(0,0,0,.18),' +
            '0 8px 16px rgba(0,0,0,.36)'
    };
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/platforms/android',["require", "exports", "aurelia-dependency-injection", "../designs/material-design"], function (require, exports, aurelia_dependency_injection_1, material_design_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Android = (function () {
        function Android(design) {
            this.design = design;
            this.type = 'android';
        }
        return Android;
    }());
    Android = __decorate([
        aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
    ], Android);
    exports.Android = Android;
});

define('aurelia-ux/designs/material-design',["require", "exports", "../colors/swatches", "../colors/shadows"], function (require, exports, swatches_1, shadows_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MaterialDesign = (function () {
        function MaterialDesign() {
            this.type = 'material';
            this.primary = swatches_1.swatches.indigo.p500;
            this.primaryForeground = swatches_1.swatches.white;
            this.primaryLight = swatches_1.swatches.indigo.p100;
            this.primaryLightForeground = swatches_1.swatches.grey.p500;
            this.primaryDark = swatches_1.swatches.indigo.p700;
            this.primaryDarkForeground = swatches_1.swatches.white;
            this.accent = swatches_1.swatches.pink.a200;
            this.accentForeground = swatches_1.swatches.white;
            this.accentLight = swatches_1.swatches.pink.a100;
            this.accentLightForeground = swatches_1.swatches.white;
            this.accentDark = swatches_1.swatches.pink.a400;
            this.accentDarkForeground = swatches_1.swatches.white;
            this.elevationNone = shadows_1.shadows.depth_0;
            this.elevation2dp = shadows_1.shadows.depth_2dp;
            this.elevation3dp = shadows_1.shadows.depth_3dp;
            this.elevation4dp = shadows_1.shadows.depth_4dp;
            this.elevation6dp = shadows_1.shadows.depth_6dp;
            this.elevation8dp = shadows_1.shadows.depth_8dp;
            this.elevation16dp = shadows_1.shadows.depth_16dp;
            this.elevation24dp = shadows_1.shadows.depth_24dp;
            this.elevationFocus = shadows_1.shadows.depth_focus;
        }
        return MaterialDesign;
    }());
    exports.MaterialDesign = MaterialDesign;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/hosts/web',["require", "exports", "aurelia-dependency-injection", "../designs/material-design"], function (require, exports, aurelia_dependency_injection_1, material_design_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Web = (function () {
        function Web(design) {
            this.design = design;
            this.type = 'web';
            this.isAvailable = true;
        }
        Web.prototype.start = function () {
            var _this = this;
            return Promise.resolve().then(function () { return _this; });
        };
        return Web;
    }());
    Web = __decorate([
        aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
    ], Web);
    exports.Web = Web;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/hosts/electron',["require", "exports", "aurelia-dependency-injection", "../designs/material-design", "./web", "aurelia-pal"], function (require, exports, aurelia_dependency_injection_1, material_design_1, web_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Electron = (function () {
        function Electron() {
            this.type = 'electron';
        }
        Object.defineProperty(Electron.prototype, "isAvailable", {
            get: function () {
                var p = aurelia_pal_1.PLATFORM.global.process;
                return p && p.versions && p.versions.electron;
            },
            enumerable: true,
            configurable: true
        });
        Electron.prototype.start = function (config) {
            return Promise.resolve().then(function () { return config.container.get(web_1.Web); });
        };
        return Electron;
    }());
    Electron = __decorate([
        aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
    ], Electron);
    exports.Electron = Electron;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/ux-configuration',["require", "exports", "aurelia-dependency-injection", "aurelia-loader", "aurelia-templating", "./styles/dynamic-styles", "aurelia-templating-binding"], function (require, exports, aurelia_dependency_injection_1, aurelia_loader_1, aurelia_templating_1, dynamic_styles_1, aurelia_templating_binding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UXConfiguration = (function () {
        function UXConfiguration(loader, viewEngine) {
            this.loader = loader;
            this.viewEngine = viewEngine;
        }
        UXConfiguration.prototype.defaultConfiguration = function () {
            this.styleLoaderPlugin();
            this.commandHandler();
            return this;
        };
        UXConfiguration.prototype.styleLoaderPlugin = function () {
            this.viewEngine.addResourcePlugin('.css#ux', {
                fetch: function (address) {
                    return Promise.resolve(dynamic_styles_1.createDynamicStyleModule(address.replace('.css#ux', '.css')));
                }
            });
            this.loader.addPlugin('ux-styles', {
                fetch: function (address) {
                    return Promise.resolve(dynamic_styles_1.createDynamicStyleModule(address + '.css'));
                }
            });
            return this;
        };
        UXConfiguration.prototype.commandHandler = function () {
            var proto = aurelia_templating_binding_1.SyntaxInterpreter.prototype;
            var original = proto.handleUnknownCommand;
            /* tslint:disable:only-arrow-functions */
            proto.handleUnknownCommand = function (r, e, i, ei, c) {
                if (i.attrName === 'styles') {
                    i.attrName = 'class';
                    i.attrValue = '$styles.' + i.command.replace(/\-/g, '_');
                    return this['one-way'](r, e, i, ei, c);
                }
                else {
                    return original.call(this, r, e, i, ei, c);
                }
            };
            /* tslint:enable:only-arrow-functions */
            return this;
        };
        return UXConfiguration;
    }());
    UXConfiguration = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_loader_1.Loader, aurelia_templating_1.ViewEngine)
    ], UXConfiguration);
    exports.UXConfiguration = UXConfiguration;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/styles/dynamic-styles',["require", "exports", "./decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nextThemeId = 0;
    function getNextDynamicThemeId() {
        return 'DynamicTheme' + (++nextThemeId);
    }
    function createDynamicStyleModule(styleUrl) {
        var DynamicTheme = (function () {
            function DynamicTheme() {
            }
            return DynamicTheme;
        }());
        DynamicTheme = __decorate([
            decorators_1.styles(),
            decorators_1.useStyles(styleUrl)
        ], DynamicTheme);
        return _a = {},
            _a[getNextDynamicThemeId()] = DynamicTheme,
            _a;
        var _a;
    }
    exports.createDynamicStyleModule = createDynamicStyleModule;
});

define('aurelia-ux/styles/decorators',["require", "exports", "./style-resource", "aurelia-templating", "./style-strategy", "aurelia-metadata", "./style-locator"], function (require, exports, style_resource_1, aurelia_templating_1, style_strategy_1, aurelia_metadata_1, style_locator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Decorator: Indicates that the target is a styles class.
     */
    function styles() {
        return aurelia_templating_1.resource(new style_resource_1.StyleResource());
    }
    exports.styles = styles;
    /**
     * Decorator: Associates a custom style strategy.
     * @param strategy The style strategy instance.
     */
    function useStyleStrategy(strategy) {
        return function (target) {
            aurelia_metadata_1.metadata.define(style_locator_1.StyleLocator.styleStrategyMetadataKey, strategy, target);
        };
    }
    exports.useStyleStrategy = useStyleStrategy;
    /**
     * Decorator: Provides a relative path to styles.
     * @param pathOrDesignMap The path to the styles or an object with keys for different
     * designs and values containing the paths to the styles.
     */
    function useStyles(pathOrDesignMap) {
        return useStyleStrategy(new style_strategy_1.RelativeStyleStrategy(pathOrDesignMap));
    }
    exports.useStyles = useStyles;
    /**
     * Decorator: Provides a style template, directly inline.
     * @param cssOrDesignmap The css or an object with keys for different designs
     * and values containing the css for each design.
     */
    function inlineStyles(cssOrDesignmap) {
        return useStyleStrategy(new style_strategy_1.InlineStyleStrategy(cssOrDesignmap));
    }
    exports.inlineStyles = inlineStyles;
});

define('aurelia-ux/styles/style-resource',["require", "exports", "aurelia-metadata", "./style-locator", "./style-engine"], function (require, exports, aurelia_metadata_1, style_locator_1, style_engine_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StyleResource = (function () {
        function StyleResource() {
        }
        StyleResource.prototype.initialize = function (container, target) {
            this.styleObjectType = target;
            this.container = container;
            this.hooks = new StyleViewEngineHooks(container.get(style_engine_1.StyleEngine));
        };
        StyleResource.prototype.register = function (registry) {
            registry.registerViewEngineHooks(this.hooks);
        };
        StyleResource.prototype.load = function (container) {
            var _this = this;
            var styleStrategy = container.get(style_locator_1.StyleLocator)
                .getStyleStrategy(this.styleObjectType);
            if (!styleStrategy.moduleId) {
                styleStrategy.moduleId = aurelia_metadata_1.Origin.get(this.styleObjectType).moduleId;
            }
            return styleStrategy.loadStyleFactory(container, this.styleObjectType).then(function (styleFactory) {
                _this.factory = styleFactory;
                _this.hooks.factory = _this.factory;
                return _this;
            });
        };
        return StyleResource;
    }());
    exports.StyleResource = StyleResource;
    var StyleViewEngineHooks = (function () {
        function StyleViewEngineHooks(engine) {
            this.engine = engine;
        }
        StyleViewEngineHooks.prototype.beforeBind = function (view) {
            this.engine.getOrCreateStyleController(view, this.factory).bind(view);
        };
        StyleViewEngineHooks.prototype.beforeUnbind = function (view) {
            this.engine.getOrCreateStyleController(view, this.factory).unbind();
        };
        return StyleViewEngineHooks;
    }());
});

define('aurelia-ux/styles/style-locator',["require", "exports", "aurelia-metadata", "./style-strategy"], function (require, exports, aurelia_metadata_1, style_strategy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Locates a style for an object.
     */
    var StyleLocator = (function () {
        function StyleLocator() {
        }
        /**
         * Gets the style strategy for the value.
         * @param value The value to locate the style strategy for.
         * @return The located StyleStrategy instance.
         */
        StyleLocator.prototype.getStyleStrategy = function (value) {
            if (typeof value === 'object' && 'getStyleStrategy' in value) {
                var origin_1 = aurelia_metadata_1.Origin.get(value.constructor);
                value = value.getStyleStrategy();
                if (typeof value === 'string') {
                    value = new style_strategy_1.RelativeStyleStrategy(value);
                }
                style_strategy_1.styleStrategy.assert(value);
                if (origin_1.moduleId) {
                    value.makeRelativeTo(origin_1.moduleId);
                }
                return value;
            }
            if (typeof value === 'string') {
                value = new style_strategy_1.RelativeStyleStrategy(value);
            }
            if (style_strategy_1.styleStrategy.validate(value)) {
                return value;
            }
            if (typeof value !== 'function') {
                value = value.constructor;
            }
            var origin = aurelia_metadata_1.Origin.get(value);
            var strategy = aurelia_metadata_1.metadata.get(StyleLocator.styleStrategyMetadataKey, value);
            if (!strategy) {
                if (!origin.moduleId) {
                    throw new Error('Cannot determine default style strategy for object.');
                }
                strategy = this.createFallbackStyleStrategy(origin);
            }
            else if (origin.moduleId) {
                strategy.moduleId = origin.moduleId;
            }
            return strategy;
        };
        /**
         * Creates a fallback Style Strategy. Used when unable to locate a configured strategy.
         * The default implementation returns and instance of ConventionalStyleStrategy.
         * @param origin The origin of the view model to return the strategy for.
         * @return The fallback StyleStrategy.
         */
        StyleLocator.prototype.createFallbackStyleStrategy = function (origin) {
            return new style_strategy_1.ConventionalStyleStrategy(this, origin);
        };
        /**
         * Conventionally converts a view model origin to a style url.
         * Used by the ConventionalStyleStrategy.
         * @param origin The origin of the view model to convert.
         * @return The view url.
         */
        StyleLocator.prototype.convertOriginToStyleUrl = function (origin) {
            var moduleId = origin.moduleId;
            var id = (moduleId.endsWith('.js') || moduleId.endsWith('.ts'))
                ? moduleId.substring(0, moduleId.length - 3)
                : moduleId;
            return id + '.css';
        };
        return StyleLocator;
    }());
    /**
     * The metadata key for storing/finding style strategies associated with an class/object.
     */
    StyleLocator.styleStrategyMetadataKey = 'aurelia:style-strategy';
    exports.StyleLocator = StyleLocator;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/styles/style-strategy',["require", "exports", "aurelia-metadata", "aurelia-pal", "./style-locator", "aurelia-path", "./style-compiler", "aurelia-loader", "../aurelia-ux"], function (require, exports, aurelia_metadata_1, aurelia_pal_1, style_locator_1, aurelia_path_1, style_compiler_1, aurelia_loader_1, aurelia_ux_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Decorator: Indicates that the decorated class/object is a style strategy.
     */
    exports.styleStrategy = aurelia_metadata_1.protocol.create('aurelia:style-strategy', {
        validate: function (target) {
            if (!(typeof target.loadStyleFactory === 'function')) {
                return 'Style strategies must implement: loadStyleFactory(): Promise<StyleFactory>';
            }
            return true;
        },
        compose: function (target) {
            if (!(typeof target.makeRelativeTo === 'function')) {
                target.makeRelativeTo = aurelia_pal_1.PLATFORM.noop;
            }
        }
    });
    var cssUrlMatcher = /url\((?!['"]data)([^)]+)\)/gi;
    function fixupCSSUrls(address, css) {
        if (typeof css !== 'string') {
            throw new Error("Failed loading required CSS file: " + address);
        }
        return css.replace(cssUrlMatcher, function (_, p1) {
            var quote = p1.charAt(0);
            if (quote === '\'' || quote === '"') {
                p1 = p1.substr(1, p1.length - 2);
            }
            return 'url(\'' + aurelia_path_1.relativeToFile(p1, address) + '\')';
        });
    }
    /**
     * A style strategy that loads a style relative to its associated view-model.
     */
    var RelativeStyleStrategy = (function () {
        /**
         * Creates an instance of RelativeStyleStrategy.
         * @param path The relative path to the styles.
         */
        function RelativeStyleStrategy(pathOrDesignMap) {
            this.pathOrDesignMap = pathOrDesignMap;
            this.absolutePath = null;
        }
        /**
         * Loads a style factory.
         */
        RelativeStyleStrategy.prototype.loadStyleFactory = function (container, styleObjectType) {
            var _this = this;
            if (this.absolutePath === null && this.moduleId) {
                var path = resolveForDesign(this.pathOrDesignMap, container);
                if (!path) {
                    this.absolutePath = container.get(style_locator_1.StyleLocator)
                        .convertOriginToStyleUrl(new aurelia_metadata_1.Origin(this.moduleId, 'default'));
                }
                else {
                    this.absolutePath = aurelia_path_1.relativeToFile(path, this.moduleId);
                }
            }
            var styleUrl = this.absolutePath || resolveForDesign(this.pathOrDesignMap, container);
            return container.get(aurelia_loader_1.Loader)
                .loadText(styleUrl)
                .catch(function () { return null; })
                .then(function (text) {
                text = fixupCSSUrls(styleUrl, text);
                _this.css = text;
                var compiler = container.get(style_compiler_1.StyleCompiler);
                return compiler.compile(styleObjectType, _this.css);
            });
        };
        /**
         * Makes the view loaded by this strategy relative to the provided file path.
         * @param file The path to load the view relative to.
         */
        RelativeStyleStrategy.prototype.makeRelativeTo = function (file) {
            if (this.absolutePath === null) {
                this.absolutePath = aurelia_path_1.relativeToFile(this.path, file);
            }
        };
        return RelativeStyleStrategy;
    }());
    RelativeStyleStrategy = __decorate([
        exports.styleStrategy()
    ], RelativeStyleStrategy);
    exports.RelativeStyleStrategy = RelativeStyleStrategy;
    /**
     * A styles strategy based on naming conventions.
     */
    var ConventionalStyleStrategy = (function () {
        /**
         * Creates an instance of ConventionalStyleStrategy.
         * @param viewLocator The view locator service for conventionally locating the view.
         * @param origin The origin of the view model to conventionally load the view for.
         */
        function ConventionalStyleStrategy(styleLocator, origin) {
            this.moduleId = origin.moduleId;
            this.styleUrl = styleLocator.convertOriginToStyleUrl(origin);
        }
        /**
         * Loads a style factory.
         */
        ConventionalStyleStrategy.prototype.loadStyleFactory = function (container, styleObjectType) {
            var _this = this;
            return container.get(aurelia_loader_1.Loader)
                .loadText(this.styleUrl)
                .catch(function () { return null; })
                .then(function (text) {
                text = fixupCSSUrls(_this.styleUrl, text);
                _this.css = text;
                var compiler = container.get(style_compiler_1.StyleCompiler);
                return compiler.compile(styleObjectType, _this.css);
            });
        };
        return ConventionalStyleStrategy;
    }());
    ConventionalStyleStrategy = __decorate([
        exports.styleStrategy()
    ], ConventionalStyleStrategy);
    exports.ConventionalStyleStrategy = ConventionalStyleStrategy;
    /**
     * A styles strategy that allows the component author to inline css.
     */
    var InlineStyleStrategy = (function () {
        /**
         * Creates an instance of InlineStyleStrategy.
         */
        function InlineStyleStrategy(cssOrDesignMap) {
            this.cssOrDesignMap = cssOrDesignMap;
        }
        /**
         * Loads a style factory.
         */
        InlineStyleStrategy.prototype.loadStyleFactory = function (container, styleObjectType) {
            var css = resolveForDesign(this.cssOrDesignMap, container);
            this.transformedCSS = fixupCSSUrls(this.moduleId, css);
            var compiler = container.get(style_compiler_1.StyleCompiler);
            return Promise.resolve(compiler.compile(styleObjectType, this.transformedCSS));
        };
        return InlineStyleStrategy;
    }());
    InlineStyleStrategy = __decorate([
        exports.styleStrategy()
    ], InlineStyleStrategy);
    exports.InlineStyleStrategy = InlineStyleStrategy;
    function resolveForDesign(valueOrDesignMap, container) {
        if (typeof valueOrDesignMap === 'string') {
            return valueOrDesignMap;
        }
        else {
            var designType = container.get(aurelia_ux_1.AureliaUX).design.type;
            return valueOrDesignMap[designType];
        }
    }
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/styles/style-compiler',["require", "exports", "aurelia-templating", "aurelia-dependency-injection", "./style-factory"], function (require, exports, aurelia_templating_1, aurelia_dependency_injection_1, style_factory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var classMatcher = /styles.([A-Za-z1-9\-_]+)/g;
    var StyleCompiler = (function () {
        function StyleCompiler(bindingLanguage, viewResources) {
            this.bindingLanguage = bindingLanguage;
            this.viewResources = viewResources;
        }
        StyleCompiler.prototype.compile = function (styleObjectType, css) {
            var styles = Object.create(null);
            var transformed = css.replace(classMatcher, function (_, capture) {
                var name = capture.replace(/\-/g, '_');
                styles[name] = true;
                return '.${$styles.' + name + ' & oneTime}';
            });
            var expression = this.bindingLanguage.inspectTextContent(this.viewResources, transformed);
            if (expression === null) {
                expression = new PlainCSSBindingExpression(transformed);
            }
            else {
                expression['targetProperty'] = 'innerHTML';
            }
            return new style_factory_1.StyleFactory(styleObjectType, styles, expression);
        };
        return StyleCompiler;
    }());
    StyleCompiler = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_templating_1.BindingLanguage, aurelia_templating_1.ViewResources)
    ], StyleCompiler);
    exports.StyleCompiler = StyleCompiler;
    var PlainCSSBindingExpression = (function () {
        function PlainCSSBindingExpression(css) {
            this.css = css;
        }
        PlainCSSBindingExpression.prototype.createBinding = function (styleElement) {
            return new CSSBinding(this.css, styleElement);
        };
        return PlainCSSBindingExpression;
    }());
    var CSSBinding = (function () {
        function CSSBinding(css, styleElement) {
            this.css = css;
            this.styleElement = styleElement;
        }
        CSSBinding.prototype.bind = function () {
            this.styleElement.innerHTML = this.css;
        };
        CSSBinding.prototype.unbind = function () {
            this.styleElement.innerHTML = '';
        };
        return CSSBinding;
    }());
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/styles/style-factory',["require", "exports", "./style-controller", "../aurelia-ux", "aurelia-binding", "aurelia-metadata", "../colors/swatches", "../colors/shadows"], function (require, exports, style_controller_1, aurelia_ux_1, aurelia_binding_1, aurelia_metadata_1, swatches_1, shadows_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StyleFactory = (function () {
        function StyleFactory(styleObjectType, styles, expression) {
            this.styleObjectType = styleObjectType;
            this.styles = styles;
            this.expression = expression;
            this.themeKey = aurelia_binding_1.camelCase(aurelia_metadata_1.Origin.get(styleObjectType).moduleMember);
        }
        StyleFactory.prototype.getOrCreateDefault = function (container) {
            if (this.defaultController === undefined) {
                this.defaultController = this.create(container);
                this.defaultController.isDefault = true;
            }
            return this.defaultController;
        };
        StyleFactory.prototype.create = function (container, destination, bindingContext) {
            var $styles = {};
            var ux = container.get(aurelia_ux_1.AureliaUX);
            if (bindingContext) {
                var baseStyles = this.getOrCreateDefault(container).bindingContext;
                Object.setPrototypeOf(bindingContext, baseStyles);
            }
            else {
                bindingContext = container.get(this.styleObjectType);
            }
            Object.keys(this.styles).forEach(function (key) {
                $styles[key] = generateRandomClass(key);
            });
            return new style_controller_1.StyleController(this, bindingContext, new StyleOverrideContext(ux, $styles, bindingContext), this.expression, destination);
        };
        return StyleFactory;
    }());
    exports.StyleFactory = StyleFactory;
    var currentNumber = 0;
    function generateRandomClass(key) {
        return key + '_au_ux_' + nextNumber();
    }
    function nextNumber() {
        return ++currentNumber;
    }
    var StyleOverrideContext = (function () {
        function StyleOverrideContext($ux, $styles, bindingContext) {
            this.$ux = $ux;
            this.$styles = $styles;
            this.bindingContext = bindingContext;
            this.$on = '(min-width: 0)';
            this.$off = '(max-width: 0)';
            this.$swatches = swatches_1.swatches;
            this.$shadows = shadows_1.shadows;
        }
        Object.defineProperty(StyleOverrideContext.prototype, "$platform", {
            get: function () {
                return this.$ux.platform;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StyleOverrideContext.prototype, "$design", {
            get: function () {
                return this.$ux.design;
            },
            enumerable: true,
            configurable: true
        });
        return StyleOverrideContext;
    }());
    __decorate([
        aurelia_binding_1.computedFrom('$ux.platform')
    ], StyleOverrideContext.prototype, "$platform", null);
    __decorate([
        aurelia_binding_1.computedFrom('$ux.design')
    ], StyleOverrideContext.prototype, "$design", null);
});

define('aurelia-ux/styles/style-controller',["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StyleController = (function () {
        function StyleController(factory, bindingContext, overrideContext, expression, destination) {
            this.factory = factory;
            this.bindingContext = bindingContext;
            this.overrideContext = overrideContext;
            this.expression = expression;
            this.destination = destination;
            this.isDefault = false;
            this.bindingInstance = null;
            this.count = 0;
            this.onRemove = aurelia_pal_1.PLATFORM.noop;
        }
        StyleController.prototype.bind = function (view) {
            var overrideContext = view.overrideContext;
            var $styles = overrideContext['$styles'] || {};
            overrideContext['$' + this.factory.themeKey] = this.bindingContext;
            overrideContext['$design'] = this.overrideContext.$design;
            overrideContext['$styles'] = Object.assign($styles, this.overrideContext.$styles);
            if (this.count === 0) {
                this.ensureStyleElementIsAddedToDocument();
                this.count = 1;
                this.bindingInstance.bind(this);
            }
            else {
                this.count++;
            }
        };
        StyleController.prototype.unbind = function () {
            this.count--;
            if (this.count === 0) {
                this.removeStyleElement();
                this.bindingInstance.unbind();
            }
        };
        StyleController.prototype.ensureStyleElementIsAddedToDocument = function () {
            if (this.styleElement === undefined) {
                this.styleElement = aurelia_pal_1.DOM.injectStyles('', this.destination);
                this.bindingInstance = this.expression.createBinding(this.styleElement);
            }
            else if (!this.styleElement.parentNode) {
                this.styleElementParent.appendChild(this.styleElement);
            }
        };
        StyleController.prototype.removeStyleElement = function () {
            this.styleElementParent = this.styleElement.parentNode;
            aurelia_pal_1.DOM.removeNode(this.styleElement);
            this.onRemove();
        };
        return StyleController;
    }());
    exports.StyleController = StyleController;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/styles/style-engine',["require", "exports", "aurelia-metadata", "aurelia-dependency-injection", "aurelia-pal", "aurelia-binding"], function (require, exports, aurelia_metadata_1, aurelia_dependency_injection_1, aurelia_pal_1, aurelia_binding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StyleEngine = (function () {
        function StyleEngine(container) {
            this.container = container;
            this.controllers = new Map();
        }
        StyleEngine.prototype.getThemeKeyForComponent = function (obj) {
            return aurelia_binding_1.camelCase(aurelia_metadata_1.Origin.get(obj.constructor).moduleMember + 'Theme');
        };
        StyleEngine.prototype.applyTheme = function (themable, theme) {
            var _this = this;
            var themeKey = this.getThemeKeyForComponent(themable);
            var currentController = themable.view[themeKey];
            var bindingContext;
            var newController;
            if (!theme) {
                if (currentController !== currentController.factory.defaultController) {
                    currentController.unbind();
                    newController = currentController.factory.defaultController;
                    themable.view[themeKey] = newController;
                    newController.bind(themable.view);
                }
                return;
            }
            if (typeof theme === 'string') {
                bindingContext = themable.resources.getValue(theme) || themable.view.container.get(theme);
            }
            else {
                bindingContext = theme;
            }
            if (this.getShadowDOMRoot(themable.view) !== null) {
                currentController.unbind();
                currentController.bindingContext = bindingContext;
                currentController.bind(themable.view);
            }
            else {
                newController = this.controllers.get(bindingContext);
                if (!newController) {
                    newController = currentController.factory.create(this.container, null, bindingContext);
                }
                currentController.unbind();
                themable.view[themeKey] = newController;
                newController.bind(themable.view);
                this.controllers.set(bindingContext, newController);
                newController.onRemove = function () {
                    _this.controllers.delete(bindingContext);
                };
            }
        };
        StyleEngine.prototype.getOrCreateStyleController = function (view, factory) {
            var controller = view[factory.themeKey];
            if (controller === undefined) {
                var shadowDOMRoot = this.getShadowDOMRoot(view);
                if (shadowDOMRoot === null) {
                    view[factory.themeKey] = controller = factory.getOrCreateDefault(this.container);
                }
                else {
                    view[factory.themeKey] = controller = factory.create(view.container, shadowDOMRoot);
                }
            }
            return controller;
        };
        StyleEngine.prototype.getShadowDOMRoot = function (view) {
            var root = view.container.get(aurelia_pal_1.DOM.boundary);
            if (root && root.host instanceof Element) {
                return root;
            }
            return null;
        };
        return StyleEngine;
    }());
    StyleEngine = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_dependency_injection_1.Container)
    ], StyleEngine);
    exports.StyleEngine = StyleEngine;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/button/ux-button-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxButtonTheme = (function () {
        function UxButtonTheme() {
            this.type = 'raised'; // flat, raised or fab
            this.size = 'medium'; // small, medium or large
            this.effect = 'ripple'; // ripple or none
        }
        return UxButtonTheme;
    }());
    UxButtonTheme = __decorate([
        decorators_1.styles()
    ], UxButtonTheme);
    exports.UxButtonTheme = UxButtonTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/input/ux-input-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxInputTheme = (function () {
        function UxInputTheme() {
            this.background = 'transparent';
        }
        return UxInputTheme;
    }());
    UxInputTheme = __decorate([
        decorators_1.styles()
    ], UxInputTheme);
    exports.UxInputTheme = UxInputTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/input-info/ux-input-info-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxInputInfoTheme = (function () {
        function UxInputInfoTheme() {
        }
        return UxInputInfoTheme;
    }());
    UxInputInfoTheme = __decorate([
        decorators_1.styles()
    ], UxInputInfoTheme);
    exports.UxInputInfoTheme = UxInputInfoTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/textarea/ux-textarea-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxTextareaTheme = (function () {
        function UxTextareaTheme() {
            this.background = 'transparent';
        }
        return UxTextareaTheme;
    }());
    UxTextareaTheme = __decorate([
        decorators_1.styles()
    ], UxTextareaTheme);
    exports.UxTextareaTheme = UxTextareaTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/form/ux-form-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxFormTheme = (function () {
        function UxFormTheme() {
            this.background = 'transparent';
        }
        return UxFormTheme;
    }());
    UxFormTheme = __decorate([
        decorators_1.styles()
    ], UxFormTheme);
    exports.UxFormTheme = UxFormTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/form/ux-field-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxFieldTheme = (function () {
        function UxFieldTheme() {
            this.labelColor = '#444';
            this.labelFontSize = '12px';
        }
        return UxFieldTheme;
    }());
    UxFieldTheme = __decorate([
        decorators_1.styles()
    ], UxFieldTheme);
    exports.UxFieldTheme = UxFieldTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/chip-input/ux-chip-input-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxChipInputTheme = (function () {
        function UxChipInputTheme() {
            this.background = 'transparent';
        }
        return UxChipInputTheme;
    }());
    UxChipInputTheme = __decorate([
        decorators_1.styles()
    ], UxChipInputTheme);
    exports.UxChipInputTheme = UxChipInputTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/chip-input/ux-tag-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxTagTheme = (function () {
        function UxTagTheme() {
        }
        return UxTagTheme;
    }());
    UxTagTheme = __decorate([
        decorators_1.styles()
    ], UxTagTheme);
    exports.UxTagTheme = UxTagTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/chip-input/ux-chip-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxChipTheme = (function () {
        function UxChipTheme() {
            this.background = '#e0e0e0';
            this.foreground = '#757575';
        }
        return UxChipTheme;
    }());
    UxChipTheme = __decorate([
        decorators_1.styles()
    ], UxChipTheme);
    exports.UxChipTheme = UxChipTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/checkbox/ux-checkbox-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxCheckboxTheme = (function () {
        function UxCheckboxTheme() {
            this.effect = 'ripple'; // ripple or none
        }
        return UxCheckboxTheme;
    }());
    UxCheckboxTheme = __decorate([
        decorators_1.styles()
    ], UxCheckboxTheme);
    exports.UxCheckboxTheme = UxCheckboxTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/icons/ux-icon-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxIconTheme = (function () {
        function UxIconTheme() {
            this.size = '24px';
        }
        return UxIconTheme;
    }());
    UxIconTheme = __decorate([
        decorators_1.styles()
    ], UxIconTheme);
    exports.UxIconTheme = UxIconTheme;
});

define('aurelia-validation/get-target-dom-element',["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Gets the DOM element associated with the data-binding. Most of the time it's
     * the binding.target but sometimes binding.target is an aurelia custom element,
     * or custom attribute which is a javascript "class" instance, so we need to use
     * the controller's container to retrieve the actual DOM element.
     */
    function getTargetDOMElement(binding, view) {
        var target = binding.target;
        // DOM element
        if (target instanceof Element) {
            return target;
        }
        // custom element or custom attribute
        // tslint:disable-next-line:prefer-const
        for (var i = 0, ii = view.controllers.length; i < ii; i++) {
            var controller = view.controllers[i];
            if (controller.viewModel === target) {
                var element = controller.container.get(aurelia_pal_1.DOM.Element);
                if (element) {
                    return element;
                }
                throw new Error("Unable to locate target element for \"" + binding.sourceExpression + "\".");
            }
        }
        throw new Error("Unable to locate target element for \"" + binding.sourceExpression + "\".");
    }
    exports.getTargetDOMElement = getTargetDOMElement;
});

define('aurelia-validation/property-info',["require", "exports", "aurelia-binding"], function (require, exports, aurelia_binding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getObject(expression, objectExpression, source) {
        var value = objectExpression.evaluate(source, null);
        if (value === null || value === undefined || value instanceof Object) {
            return value;
        }
        // tslint:disable-next-line:max-line-length
        throw new Error("The '" + objectExpression + "' part of '" + expression + "' evaluates to " + value + " instead of an object, null or undefined.");
    }
    /**
     * Retrieves the object and property name for the specified expression.
     * @param expression The expression
     * @param source The scope
     */
    function getPropertyInfo(expression, source) {
        var originalExpression = expression;
        while (expression instanceof aurelia_binding_1.BindingBehavior || expression instanceof aurelia_binding_1.ValueConverter) {
            expression = expression.expression;
        }
        var object;
        var propertyName;
        if (expression instanceof aurelia_binding_1.AccessScope) {
            object = source.bindingContext;
            propertyName = expression.name;
        }
        else if (expression instanceof aurelia_binding_1.AccessMember) {
            object = getObject(originalExpression, expression.object, source);
            propertyName = expression.name;
        }
        else if (expression instanceof aurelia_binding_1.AccessKeyed) {
            object = getObject(originalExpression, expression.object, source);
            propertyName = expression.key.evaluate(source);
        }
        else {
            throw new Error("Expression '" + originalExpression + "' is not compatible with the validate binding-behavior.");
        }
        if (object === null || object === undefined) {
            return null;
        }
        return { object: object, propertyName: propertyName };
    }
    exports.getPropertyInfo = getPropertyInfo;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('aurelia-validation/validate-binding-behavior',["require", "exports", "aurelia-task-queue", "./validate-trigger", "./validate-binding-behavior-base"], function (require, exports, aurelia_task_queue_1, validate_trigger_1, validate_binding_behavior_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the validate trigger specified by the associated controller's
     * validateTrigger property occurs.
     */
    var ValidateBindingBehavior = (function (_super) {
        __extends(ValidateBindingBehavior, _super);
        function ValidateBindingBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidateBindingBehavior.prototype.getValidateTrigger = function (controller) {
            return controller.validateTrigger;
        };
        return ValidateBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    ValidateBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
    exports.ValidateBindingBehavior = ValidateBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property will be validated
     * manually, by calling controller.validate(). No automatic validation
     * triggered by data-entry or blur will occur.
     */
    var ValidateManuallyBindingBehavior = (function (_super) {
        __extends(ValidateManuallyBindingBehavior, _super);
        function ValidateManuallyBindingBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidateManuallyBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.manual;
        };
        return ValidateManuallyBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    ValidateManuallyBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
    exports.ValidateManuallyBindingBehavior = ValidateManuallyBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the associated element blurs.
     */
    var ValidateOnBlurBindingBehavior = (function (_super) {
        __extends(ValidateOnBlurBindingBehavior, _super);
        function ValidateOnBlurBindingBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidateOnBlurBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.blur;
        };
        return ValidateOnBlurBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    ValidateOnBlurBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
    exports.ValidateOnBlurBindingBehavior = ValidateOnBlurBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the associated element is changed by the user, causing a change
     * to the model.
     */
    var ValidateOnChangeBindingBehavior = (function (_super) {
        __extends(ValidateOnChangeBindingBehavior, _super);
        function ValidateOnChangeBindingBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidateOnChangeBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.change;
        };
        return ValidateOnChangeBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    ValidateOnChangeBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
    exports.ValidateOnChangeBindingBehavior = ValidateOnChangeBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the associated element blurs or is changed by the user, causing
     * a change to the model.
     */
    var ValidateOnChangeOrBlurBindingBehavior = (function (_super) {
        __extends(ValidateOnChangeOrBlurBindingBehavior, _super);
        function ValidateOnChangeOrBlurBindingBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidateOnChangeOrBlurBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.changeOrBlur;
        };
        return ValidateOnChangeOrBlurBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    ValidateOnChangeOrBlurBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
    exports.ValidateOnChangeOrBlurBindingBehavior = ValidateOnChangeOrBlurBindingBehavior;
});

define('aurelia-validation/validate-trigger',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Validation triggers.
     */
    var validateTrigger;
    (function (validateTrigger) {
        /**
         * Manual validation.  Use the controller's `validate()` and  `reset()` methods
         * to validate all bindings.
         */
        validateTrigger[validateTrigger["manual"] = 0] = "manual";
        /**
         * Validate the binding when the binding's target element fires a DOM "blur" event.
         */
        validateTrigger[validateTrigger["blur"] = 1] = "blur";
        /**
         * Validate the binding when it updates the model due to a change in the view.
         */
        validateTrigger[validateTrigger["change"] = 2] = "change";
        /**
         * Validate the binding when the binding's target element fires a DOM "blur" event and
         * when it updates the model due to a change in the view.
         */
        validateTrigger[validateTrigger["changeOrBlur"] = 3] = "changeOrBlur";
    })(validateTrigger = exports.validateTrigger || (exports.validateTrigger = {}));
    ;
});

define('aurelia-validation/validate-binding-behavior-base',["require", "exports", "aurelia-dependency-injection", "./validation-controller", "./validate-trigger", "./get-target-dom-element"], function (require, exports, aurelia_dependency_injection_1, validation_controller_1, validate_trigger_1, get_target_dom_element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Binding behavior. Indicates the bound property should be validated.
     */
    var ValidateBindingBehaviorBase = (function () {
        function ValidateBindingBehaviorBase(taskQueue) {
            this.taskQueue = taskQueue;
        }
        ValidateBindingBehaviorBase.prototype.bind = function (binding, source, rulesOrController, rules) {
            var _this = this;
            // identify the target element.
            var target = get_target_dom_element_1.getTargetDOMElement(binding, source);
            // locate the controller.
            var controller;
            if (rulesOrController instanceof validation_controller_1.ValidationController) {
                controller = rulesOrController;
            }
            else {
                controller = source.container.get(aurelia_dependency_injection_1.Optional.of(validation_controller_1.ValidationController));
                rules = rulesOrController;
            }
            if (controller === null) {
                throw new Error("A ValidationController has not been registered.");
            }
            controller.registerBinding(binding, target, rules);
            binding.validationController = controller;
            var trigger = this.getValidateTrigger(controller);
            // tslint:disable-next-line:no-bitwise
            if (trigger & validate_trigger_1.validateTrigger.change) {
                binding.standardUpdateSource = binding.updateSource;
                // tslint:disable-next-line:only-arrow-functions
                binding.updateSource = function (value) {
                    this.standardUpdateSource(value);
                    this.validationController.validateBinding(this);
                };
            }
            // tslint:disable-next-line:no-bitwise
            if (trigger & validate_trigger_1.validateTrigger.blur) {
                binding.validateBlurHandler = function () {
                    _this.taskQueue.queueMicroTask(function () { return controller.validateBinding(binding); });
                };
                binding.validateTarget = target;
                target.addEventListener('blur', binding.validateBlurHandler);
            }
            if (trigger !== validate_trigger_1.validateTrigger.manual) {
                binding.standardUpdateTarget = binding.updateTarget;
                // tslint:disable-next-line:only-arrow-functions
                binding.updateTarget = function (value) {
                    this.standardUpdateTarget(value);
                    this.validationController.resetBinding(this);
                };
            }
        };
        ValidateBindingBehaviorBase.prototype.unbind = function (binding) {
            // reset the binding to it's original state.
            if (binding.standardUpdateSource) {
                binding.updateSource = binding.standardUpdateSource;
                binding.standardUpdateSource = null;
            }
            if (binding.standardUpdateTarget) {
                binding.updateTarget = binding.standardUpdateTarget;
                binding.standardUpdateTarget = null;
            }
            if (binding.validateBlurHandler) {
                binding.validateTarget.removeEventListener('blur', binding.validateBlurHandler);
                binding.validateBlurHandler = null;
                binding.validateTarget = null;
            }
            binding.validationController.unregisterBinding(binding);
            binding.validationController = null;
        };
        return ValidateBindingBehaviorBase;
    }());
    exports.ValidateBindingBehaviorBase = ValidateBindingBehaviorBase;
});

define('aurelia-validation/validation-controller',["require", "exports", "./validator", "./validate-trigger", "./property-info", "./validate-result"], function (require, exports, validator_1, validate_trigger_1, property_info_1, validate_result_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Orchestrates validation.
     * Manages a set of bindings, renderers and objects.
     * Exposes the current list of validation results for binding purposes.
     */
    var ValidationController = (function () {
        function ValidationController(validator) {
            this.validator = validator;
            // Registered bindings (via the validate binding behavior)
            this.bindings = new Map();
            // Renderers that have been added to the controller instance.
            this.renderers = [];
            /**
             * Validation results that have been rendered by the controller.
             */
            this.results = [];
            /**
             * Validation errors that have been rendered by the controller.
             */
            this.errors = [];
            /**
             *  Whether the controller is currently validating.
             */
            this.validating = false;
            // Elements related to validation results that have been rendered.
            this.elements = new Map();
            // Objects that have been added to the controller instance (entity-style validation).
            this.objects = new Map();
            /**
             * The trigger that will invoke automatic validation of a property used in a binding.
             */
            this.validateTrigger = validate_trigger_1.validateTrigger.blur;
            // Promise that resolves when validation has completed.
            this.finishValidating = Promise.resolve();
        }
        /**
         * Adds an object to the set of objects that should be validated when validate is called.
         * @param object The object.
         * @param rules Optional. The rules. If rules aren't supplied the Validator implementation will lookup the rules.
         */
        ValidationController.prototype.addObject = function (object, rules) {
            this.objects.set(object, rules);
        };
        /**
         * Removes an object from the set of objects that should be validated when validate is called.
         * @param object The object.
         */
        ValidationController.prototype.removeObject = function (object) {
            this.objects.delete(object);
            this.processResultDelta('reset', this.results.filter(function (result) { return result.object === object; }), []);
        };
        /**
         * Adds and renders an error.
         */
        ValidationController.prototype.addError = function (message, object, propertyName) {
            if (propertyName === void 0) { propertyName = null; }
            var result = new validate_result_1.ValidateResult({}, object, propertyName, false, message);
            this.processResultDelta('validate', [], [result]);
            return result;
        };
        /**
         * Removes and unrenders an error.
         */
        ValidationController.prototype.removeError = function (result) {
            if (this.results.indexOf(result) !== -1) {
                this.processResultDelta('reset', [result], []);
            }
        };
        /**
         * Adds a renderer.
         * @param renderer The renderer.
         */
        ValidationController.prototype.addRenderer = function (renderer) {
            var _this = this;
            this.renderers.push(renderer);
            renderer.render({
                kind: 'validate',
                render: this.results.map(function (result) { return ({ result: result, elements: _this.elements.get(result) }); }),
                unrender: []
            });
        };
        /**
         * Removes a renderer.
         * @param renderer The renderer.
         */
        ValidationController.prototype.removeRenderer = function (renderer) {
            var _this = this;
            this.renderers.splice(this.renderers.indexOf(renderer), 1);
            renderer.render({
                kind: 'reset',
                render: [],
                unrender: this.results.map(function (result) { return ({ result: result, elements: _this.elements.get(result) }); })
            });
        };
        /**
         * Registers a binding with the controller.
         * @param binding The binding instance.
         * @param target The DOM element.
         * @param rules (optional) rules associated with the binding. Validator implementation specific.
         */
        ValidationController.prototype.registerBinding = function (binding, target, rules) {
            this.bindings.set(binding, { target: target, rules: rules, propertyInfo: null });
        };
        /**
         * Unregisters a binding with the controller.
         * @param binding The binding instance.
         */
        ValidationController.prototype.unregisterBinding = function (binding) {
            this.resetBinding(binding);
            this.bindings.delete(binding);
        };
        /**
         * Interprets the instruction and returns a predicate that will identify
         * relevant results in the list of rendered validation results.
         */
        ValidationController.prototype.getInstructionPredicate = function (instruction) {
            var _this = this;
            if (instruction) {
                var object_1 = instruction.object, propertyName_1 = instruction.propertyName, rules_1 = instruction.rules;
                var predicate_1;
                if (instruction.propertyName) {
                    predicate_1 = function (x) { return x.object === object_1 && x.propertyName === propertyName_1; };
                }
                else {
                    predicate_1 = function (x) { return x.object === object_1; };
                }
                if (rules_1) {
                    return function (x) { return predicate_1(x) && _this.validator.ruleExists(rules_1, x.rule); };
                }
                return predicate_1;
            }
            else {
                return function () { return true; };
            }
        };
        /**
         * Validates and renders results.
         * @param instruction Optional. Instructions on what to validate. If undefined, all
         * objects and bindings will be validated.
         */
        ValidationController.prototype.validate = function (instruction) {
            var _this = this;
            // Get a function that will process the validation instruction.
            var execute;
            if (instruction) {
                // tslint:disable-next-line:prefer-const
                var object_2 = instruction.object, propertyName_2 = instruction.propertyName, rules_2 = instruction.rules;
                // if rules were not specified, check the object map.
                rules_2 = rules_2 || this.objects.get(object_2);
                // property specified?
                if (instruction.propertyName === undefined) {
                    // validate the specified object.
                    execute = function () { return _this.validator.validateObject(object_2, rules_2); };
                }
                else {
                    // validate the specified property.
                    execute = function () { return _this.validator.validateProperty(object_2, propertyName_2, rules_2); };
                }
            }
            else {
                // validate all objects and bindings.
                execute = function () {
                    var promises = [];
                    for (var _i = 0, _a = Array.from(_this.objects); _i < _a.length; _i++) {
                        var _b = _a[_i], object = _b[0], rules = _b[1];
                        promises.push(_this.validator.validateObject(object, rules));
                    }
                    for (var _c = 0, _d = Array.from(_this.bindings); _c < _d.length; _c++) {
                        var _e = _d[_c], binding = _e[0], rules = _e[1].rules;
                        var propertyInfo = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source);
                        if (!propertyInfo || _this.objects.has(propertyInfo.object)) {
                            continue;
                        }
                        promises.push(_this.validator.validateProperty(propertyInfo.object, propertyInfo.propertyName, rules));
                    }
                    return Promise.all(promises).then(function (resultSets) { return resultSets.reduce(function (a, b) { return a.concat(b); }, []); });
                };
            }
            // Wait for any existing validation to finish, execute the instruction, render the results.
            this.validating = true;
            var returnPromise = this.finishValidating
                .then(execute)
                .then(function (newResults) {
                var predicate = _this.getInstructionPredicate(instruction);
                var oldResults = _this.results.filter(predicate);
                _this.processResultDelta('validate', oldResults, newResults);
                if (returnPromise === _this.finishValidating) {
                    _this.validating = false;
                }
                var result = {
                    instruction: instruction,
                    valid: newResults.find(function (x) { return !x.valid; }) === undefined,
                    results: newResults
                };
                return result;
            })
                .catch(function (exception) {
                // recover, to enable subsequent calls to validate()
                _this.validating = false;
                _this.finishValidating = Promise.resolve();
                return Promise.reject(exception);
            });
            this.finishValidating = returnPromise;
            return returnPromise;
        };
        /**
         * Resets any rendered validation results (unrenders).
         * @param instruction Optional. Instructions on what to reset. If unspecified all rendered results
         * will be unrendered.
         */
        ValidationController.prototype.reset = function (instruction) {
            var predicate = this.getInstructionPredicate(instruction);
            var oldResults = this.results.filter(predicate);
            this.processResultDelta('reset', oldResults, []);
        };
        /**
         * Gets the elements associated with an object and propertyName (if any).
         */
        ValidationController.prototype.getAssociatedElements = function (_a) {
            var object = _a.object, propertyName = _a.propertyName;
            var elements = [];
            for (var _i = 0, _b = Array.from(this.bindings); _i < _b.length; _i++) {
                var _c = _b[_i], binding = _c[0], target = _c[1].target;
                var propertyInfo = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source);
                if (propertyInfo && propertyInfo.object === object && propertyInfo.propertyName === propertyName) {
                    elements.push(target);
                }
            }
            return elements;
        };
        ValidationController.prototype.processResultDelta = function (kind, oldResults, newResults) {
            // prepare the instruction.
            var instruction = {
                kind: kind,
                render: [],
                unrender: []
            };
            // create a shallow copy of newResults so we can mutate it without causing side-effects.
            newResults = newResults.slice(0);
            var _loop_1 = function (oldResult) {
                // get the elements associated with the old result.
                var elements = this_1.elements.get(oldResult);
                // remove the old result from the element map.
                this_1.elements.delete(oldResult);
                // create the unrender instruction.
                instruction.unrender.push({ result: oldResult, elements: elements });
                // determine if there's a corresponding new result for the old result we are unrendering.
                var newResultIndex = newResults.findIndex(function (x) { return x.rule === oldResult.rule && x.object === oldResult.object && x.propertyName === oldResult.propertyName; });
                if (newResultIndex === -1) {
                    // no corresponding new result... simple remove.
                    this_1.results.splice(this_1.results.indexOf(oldResult), 1);
                    if (!oldResult.valid) {
                        this_1.errors.splice(this_1.errors.indexOf(oldResult), 1);
                    }
                }
                else {
                    // there is a corresponding new result...
                    var newResult = newResults.splice(newResultIndex, 1)[0];
                    // get the elements that are associated with the new result.
                    var elements_1 = this_1.getAssociatedElements(newResult);
                    this_1.elements.set(newResult, elements_1);
                    // create a render instruction for the new result.
                    instruction.render.push({ result: newResult, elements: elements_1 });
                    // do an in-place replacement of the old result with the new result.
                    // this ensures any repeats bound to this.results will not thrash.
                    this_1.results.splice(this_1.results.indexOf(oldResult), 1, newResult);
                    if (!oldResult.valid && newResult.valid) {
                        this_1.errors.splice(this_1.errors.indexOf(oldResult), 1);
                    }
                    else if (!oldResult.valid && !newResult.valid) {
                        this_1.errors.splice(this_1.errors.indexOf(oldResult), 1, newResult);
                    }
                    else if (!newResult.valid) {
                        this_1.errors.push(newResult);
                    }
                }
            };
            var this_1 = this;
            // create unrender instructions from the old results.
            for (var _i = 0, oldResults_1 = oldResults; _i < oldResults_1.length; _i++) {
                var oldResult = oldResults_1[_i];
                _loop_1(oldResult);
            }
            // create render instructions from the remaining new results.
            for (var _a = 0, newResults_1 = newResults; _a < newResults_1.length; _a++) {
                var result = newResults_1[_a];
                var elements = this.getAssociatedElements(result);
                instruction.render.push({ result: result, elements: elements });
                this.elements.set(result, elements);
                this.results.push(result);
                if (!result.valid) {
                    this.errors.push(result);
                }
            }
            // render.
            for (var _b = 0, _c = this.renderers; _b < _c.length; _b++) {
                var renderer = _c[_b];
                renderer.render(instruction);
            }
        };
        /**
         * Validates the property associated with a binding.
         */
        ValidationController.prototype.validateBinding = function (binding) {
            if (!binding.isBound) {
                return;
            }
            var propertyInfo = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source);
            var rules;
            var registeredBinding = this.bindings.get(binding);
            if (registeredBinding) {
                rules = registeredBinding.rules;
                registeredBinding.propertyInfo = propertyInfo;
            }
            if (!propertyInfo) {
                return;
            }
            var object = propertyInfo.object, propertyName = propertyInfo.propertyName;
            this.validate({ object: object, propertyName: propertyName, rules: rules });
        };
        /**
         * Resets the results for a property associated with a binding.
         */
        ValidationController.prototype.resetBinding = function (binding) {
            var registeredBinding = this.bindings.get(binding);
            var propertyInfo = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source);
            if (!propertyInfo && registeredBinding) {
                propertyInfo = registeredBinding.propertyInfo;
            }
            if (registeredBinding) {
                registeredBinding.propertyInfo = null;
            }
            if (!propertyInfo) {
                return;
            }
            var object = propertyInfo.object, propertyName = propertyInfo.propertyName;
            this.reset({ object: object, propertyName: propertyName });
        };
        return ValidationController;
    }());
    ValidationController.inject = [validator_1.Validator];
    exports.ValidationController = ValidationController;
});

define('aurelia-validation/validator',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Validates objects and properties.
     */
    var Validator = (function () {
        function Validator() {
        }
        return Validator;
    }());
    exports.Validator = Validator;
});

define('aurelia-validation/validate-result',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The result of validating an individual validation rule.
     */
    var ValidateResult = (function () {
        /**
         * @param rule The rule associated with the result. Validator implementation specific.
         * @param object The object that was validated.
         * @param propertyName The name of the property that was validated.
         * @param error The error, if the result is a validation error.
         */
        function ValidateResult(rule, object, propertyName, valid, message) {
            if (message === void 0) { message = null; }
            this.rule = rule;
            this.object = object;
            this.propertyName = propertyName;
            this.valid = valid;
            this.message = message;
            this.id = ValidateResult.nextId++;
        }
        ValidateResult.prototype.toString = function () {
            return this.valid ? 'Valid.' : this.message;
        };
        return ValidateResult;
    }());
    ValidateResult.nextId = 0;
    exports.ValidateResult = ValidateResult;
});

define('aurelia-validation/validation-controller-factory',["require", "exports", "./validation-controller", "./validator"], function (require, exports, validation_controller_1, validator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Creates ValidationController instances.
     */
    var ValidationControllerFactory = (function () {
        function ValidationControllerFactory(container) {
            this.container = container;
        }
        ValidationControllerFactory.get = function (container) {
            return new ValidationControllerFactory(container);
        };
        /**
         * Creates a new controller instance.
         */
        ValidationControllerFactory.prototype.create = function (validator) {
            if (!validator) {
                validator = this.container.get(validator_1.Validator);
            }
            return new validation_controller_1.ValidationController(validator);
        };
        /**
         * Creates a new controller and registers it in the current element's container so that it's
         * available to the validate binding behavior and renderers.
         */
        ValidationControllerFactory.prototype.createForCurrentScope = function (validator) {
            var controller = this.create(validator);
            this.container.registerInstance(validation_controller_1.ValidationController, controller);
            return controller;
        };
        return ValidationControllerFactory;
    }());
    exports.ValidationControllerFactory = ValidationControllerFactory;
    ValidationControllerFactory['protocol:aurelia:resolver'] = true;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-validation/validation-errors-custom-attribute',["require", "exports", "aurelia-binding", "aurelia-dependency-injection", "aurelia-templating", "./validation-controller", "aurelia-pal"], function (require, exports, aurelia_binding_1, aurelia_dependency_injection_1, aurelia_templating_1, validation_controller_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationErrorsCustomAttribute = (function () {
        function ValidationErrorsCustomAttribute(boundaryElement, controllerAccessor) {
            this.boundaryElement = boundaryElement;
            this.controllerAccessor = controllerAccessor;
            this.controller = null;
            this.errors = [];
            this.errorsInternal = [];
        }
        ValidationErrorsCustomAttribute.prototype.sort = function () {
            this.errorsInternal.sort(function (a, b) {
                if (a.targets[0] === b.targets[0]) {
                    return 0;
                }
                // tslint:disable-next-line:no-bitwise
                return a.targets[0].compareDocumentPosition(b.targets[0]) & 2 ? 1 : -1;
            });
        };
        ValidationErrorsCustomAttribute.prototype.interestingElements = function (elements) {
            var _this = this;
            return elements.filter(function (e) { return _this.boundaryElement.contains(e); });
        };
        ValidationErrorsCustomAttribute.prototype.render = function (instruction) {
            var _loop_1 = function (result) {
                var index = this_1.errorsInternal.findIndex(function (x) { return x.error === result; });
                if (index !== -1) {
                    this_1.errorsInternal.splice(index, 1);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
                var result = _a[_i].result;
                _loop_1(result);
            }
            for (var _b = 0, _c = instruction.render; _b < _c.length; _b++) {
                var _d = _c[_b], result = _d.result, elements = _d.elements;
                if (result.valid) {
                    continue;
                }
                var targets = this.interestingElements(elements);
                if (targets.length) {
                    this.errorsInternal.push({ error: result, targets: targets });
                }
            }
            this.sort();
            this.errors = this.errorsInternal;
        };
        ValidationErrorsCustomAttribute.prototype.bind = function () {
            if (!this.controller) {
                this.controller = this.controllerAccessor();
            }
            // this will call render() with the side-effect of updating this.errors
            this.controller.addRenderer(this);
        };
        ValidationErrorsCustomAttribute.prototype.unbind = function () {
            if (this.controller) {
                this.controller.removeRenderer(this);
            }
        };
        return ValidationErrorsCustomAttribute;
    }());
    ValidationErrorsCustomAttribute.inject = [aurelia_pal_1.DOM.Element, aurelia_dependency_injection_1.Lazy.of(validation_controller_1.ValidationController)];
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay })
    ], ValidationErrorsCustomAttribute.prototype, "controller", void 0);
    __decorate([
        aurelia_templating_1.bindable({ primaryProperty: true, defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
    ], ValidationErrorsCustomAttribute.prototype, "errors", void 0);
    ValidationErrorsCustomAttribute = __decorate([
        aurelia_templating_1.customAttribute('validation-errors')
    ], ValidationErrorsCustomAttribute);
    exports.ValidationErrorsCustomAttribute = ValidationErrorsCustomAttribute;
});

define('aurelia-validation/validation-renderer-custom-attribute',["require", "exports", "./validation-controller"], function (require, exports, validation_controller_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationRendererCustomAttribute = (function () {
        function ValidationRendererCustomAttribute() {
        }
        ValidationRendererCustomAttribute.prototype.created = function (view) {
            this.container = view.container;
        };
        ValidationRendererCustomAttribute.prototype.bind = function () {
            this.controller = this.container.get(validation_controller_1.ValidationController);
            this.renderer = this.container.get(this.value);
            this.controller.addRenderer(this.renderer);
        };
        ValidationRendererCustomAttribute.prototype.unbind = function () {
            this.controller.removeRenderer(this.renderer);
            this.controller = null;
            this.renderer = null;
        };
        return ValidationRendererCustomAttribute;
    }());
    exports.ValidationRendererCustomAttribute = ValidationRendererCustomAttribute;
});

define('aurelia-validation/implementation/rules',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Sets, unsets and retrieves rules on an object or constructor function.
     */
    var Rules = (function () {
        function Rules() {
        }
        /**
         * Applies the rules to a target.
         */
        Rules.set = function (target, rules) {
            if (target instanceof Function) {
                target = target.prototype;
            }
            Object.defineProperty(target, Rules.key, { enumerable: false, configurable: false, writable: true, value: rules });
        };
        /**
         * Removes rules from a target.
         */
        Rules.unset = function (target) {
            if (target instanceof Function) {
                target = target.prototype;
            }
            target[Rules.key] = null;
        };
        /**
         * Retrieves the target's rules.
         */
        Rules.get = function (target) {
            return target[Rules.key] || null;
        };
        return Rules;
    }());
    /**
     * The name of the property that stores the rules.
     */
    Rules.key = '__rules__';
    exports.Rules = Rules;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('aurelia-validation/implementation/standard-validator',["require", "exports", "aurelia-templating", "../validator", "../validate-result", "./rules", "./validation-messages"], function (require, exports, aurelia_templating_1, validator_1, validate_result_1, rules_1, validation_messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Validates.
     * Responsible for validating objects and properties.
     */
    var StandardValidator = (function (_super) {
        __extends(StandardValidator, _super);
        function StandardValidator(messageProvider, resources) {
            var _this = _super.call(this) || this;
            _this.messageProvider = messageProvider;
            _this.lookupFunctions = resources.lookupFunctions;
            _this.getDisplayName = messageProvider.getDisplayName.bind(messageProvider);
            return _this;
        }
        /**
         * Validates the specified property.
         * @param object The object to validate.
         * @param propertyName The name of the property to validate.
         * @param rules Optional. If unspecified, the rules will be looked up using the metadata
         * for the object created by ValidationRules....on(class/object)
         */
        StandardValidator.prototype.validateProperty = function (object, propertyName, rules) {
            return this.validate(object, propertyName, rules || null);
        };
        /**
         * Validates all rules for specified object and it's properties.
         * @param object The object to validate.
         * @param rules Optional. If unspecified, the rules will be looked up using the metadata
         * for the object created by ValidationRules....on(class/object)
         */
        StandardValidator.prototype.validateObject = function (object, rules) {
            return this.validate(object, null, rules || null);
        };
        /**
         * Determines whether a rule exists in a set of rules.
         * @param rules The rules to search.
         * @parem rule The rule to find.
         */
        StandardValidator.prototype.ruleExists = function (rules, rule) {
            var i = rules.length;
            while (i--) {
                if (rules[i].indexOf(rule) !== -1) {
                    return true;
                }
            }
            return false;
        };
        StandardValidator.prototype.getMessage = function (rule, object, value) {
            var expression = rule.message || this.messageProvider.getMessage(rule.messageKey);
            // tslint:disable-next-line:prefer-const
            var _a = rule.property, propertyName = _a.name, displayName = _a.displayName;
            if (propertyName !== null) {
                displayName = this.messageProvider.getDisplayName(propertyName, displayName);
            }
            var overrideContext = {
                $displayName: displayName,
                $propertyName: propertyName,
                $value: value,
                $object: object,
                $config: rule.config,
                // returns the name of a given property, given just the property name (irrespective of the property's displayName)
                // split on capital letters, first letter ensured to be capitalized
                $getDisplayName: this.getDisplayName
            };
            return expression.evaluate({ bindingContext: object, overrideContext: overrideContext }, this.lookupFunctions);
        };
        StandardValidator.prototype.validateRuleSequence = function (object, propertyName, ruleSequence, sequence, results) {
            var _this = this;
            // are we validating all properties or a single property?
            var validateAllProperties = propertyName === null || propertyName === undefined;
            var rules = ruleSequence[sequence];
            var allValid = true;
            // validate each rule.
            var promises = [];
            var _loop_1 = function (i) {
                var rule = rules[i];
                // is the rule related to the property we're validating.
                if (!validateAllProperties && rule.property.name !== propertyName) {
                    return "continue";
                }
                // is this a conditional rule? is the condition met?
                if (rule.when && !rule.when(object)) {
                    return "continue";
                }
                // validate.
                var value = rule.property.name === null ? object : object[rule.property.name];
                var promiseOrBoolean = rule.condition(value, object);
                if (!(promiseOrBoolean instanceof Promise)) {
                    promiseOrBoolean = Promise.resolve(promiseOrBoolean);
                }
                promises.push(promiseOrBoolean.then(function (valid) {
                    var message = valid ? null : _this.getMessage(rule, object, value);
                    results.push(new validate_result_1.ValidateResult(rule, object, rule.property.name, valid, message));
                    allValid = allValid && valid;
                    return valid;
                }));
            };
            for (var i = 0; i < rules.length; i++) {
                _loop_1(i);
            }
            return Promise.all(promises)
                .then(function () {
                sequence++;
                if (allValid && sequence < ruleSequence.length) {
                    return _this.validateRuleSequence(object, propertyName, ruleSequence, sequence, results);
                }
                return results;
            });
        };
        StandardValidator.prototype.validate = function (object, propertyName, rules) {
            // rules specified?
            if (!rules) {
                // no. attempt to locate the rules.
                rules = rules_1.Rules.get(object);
            }
            // any rules?
            if (!rules) {
                return Promise.resolve([]);
            }
            return this.validateRuleSequence(object, propertyName, rules, 0, []);
        };
        return StandardValidator;
    }(validator_1.Validator));
    StandardValidator.inject = [validation_messages_1.ValidationMessageProvider, aurelia_templating_1.ViewResources];
    exports.StandardValidator = StandardValidator;
});

define('aurelia-validation/implementation/validation-messages',["require", "exports", "./validation-parser"], function (require, exports, validation_parser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Dictionary of validation messages. [messageKey]: messageExpression
     */
    exports.validationMessages = {
        /**
         * The default validation message. Used with rules that have no standard message.
         */
        default: "${$displayName} is invalid.",
        required: "${$displayName} is required.",
        matches: "${$displayName} is not correctly formatted.",
        email: "${$displayName} is not a valid email.",
        minLength: "${$displayName} must be at least ${$config.length} character${$config.length === 1 ? '' : 's'}.",
        maxLength: "${$displayName} cannot be longer than ${$config.length} character${$config.length === 1 ? '' : 's'}.",
        minItems: "${$displayName} must contain at least ${$config.count} item${$config.count === 1 ? '' : 's'}.",
        maxItems: "${$displayName} cannot contain more than ${$config.count} item${$config.count === 1 ? '' : 's'}.",
        equals: "${$displayName} must be ${$config.expectedValue}.",
    };
    /**
     * Retrieves validation messages and property display names.
     */
    var ValidationMessageProvider = (function () {
        function ValidationMessageProvider(parser) {
            this.parser = parser;
        }
        /**
         * Returns a message binding expression that corresponds to the key.
         * @param key The message key.
         */
        ValidationMessageProvider.prototype.getMessage = function (key) {
            var message;
            if (key in exports.validationMessages) {
                message = exports.validationMessages[key];
            }
            else {
                message = exports.validationMessages['default'];
            }
            return this.parser.parseMessage(message);
        };
        /**
         * Formulates a property display name using the property name and the configured
         * displayName (if provided).
         * Override this with your own custom logic.
         * @param propertyName The property name.
         */
        ValidationMessageProvider.prototype.getDisplayName = function (propertyName, displayName) {
            if (displayName !== null && displayName !== undefined) {
                return (displayName instanceof Function) ? displayName() : displayName;
            }
            // split on upper-case letters.
            var words = propertyName.split(/(?=[A-Z])/).join(' ');
            // capitalize first letter.
            return words.charAt(0).toUpperCase() + words.slice(1);
        };
        return ValidationMessageProvider;
    }());
    ValidationMessageProvider.inject = [validation_parser_1.ValidationParser];
    exports.ValidationMessageProvider = ValidationMessageProvider;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('aurelia-validation/implementation/validation-parser',["require", "exports", "aurelia-binding", "aurelia-templating", "./util", "aurelia-logging"], function (require, exports, aurelia_binding_1, aurelia_templating_1, util_1, LogManager) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationParser = (function () {
        function ValidationParser(parser, bindinqLanguage) {
            this.parser = parser;
            this.bindinqLanguage = bindinqLanguage;
            this.emptyStringExpression = new aurelia_binding_1.LiteralString('');
            this.nullExpression = new aurelia_binding_1.LiteralPrimitive(null);
            this.undefinedExpression = new aurelia_binding_1.LiteralPrimitive(undefined);
            this.cache = {};
        }
        ValidationParser.prototype.parseMessage = function (message) {
            if (this.cache[message] !== undefined) {
                return this.cache[message];
            }
            var parts = this.bindinqLanguage.parseInterpolation(null, message);
            if (parts === null) {
                return new aurelia_binding_1.LiteralString(message);
            }
            var expression = new aurelia_binding_1.LiteralString(parts[0]);
            for (var i = 1; i < parts.length; i += 2) {
                expression = new aurelia_binding_1.Binary('+', expression, new aurelia_binding_1.Binary('+', this.coalesce(parts[i]), new aurelia_binding_1.LiteralString(parts[i + 1])));
            }
            MessageExpressionValidator.validate(expression, message);
            this.cache[message] = expression;
            return expression;
        };
        ValidationParser.prototype.parseProperty = function (property) {
            if (util_1.isString(property)) {
                return { name: property, displayName: null };
            }
            var accessor = this.getAccessorExpression(property.toString());
            if (accessor instanceof aurelia_binding_1.AccessScope
                || accessor instanceof aurelia_binding_1.AccessMember && accessor.object instanceof aurelia_binding_1.AccessScope) {
                return {
                    name: accessor.name,
                    displayName: null
                };
            }
            throw new Error("Invalid subject: \"" + accessor + "\"");
        };
        ValidationParser.prototype.coalesce = function (part) {
            // part === null || part === undefined ? '' : part
            return new aurelia_binding_1.Conditional(new aurelia_binding_1.Binary('||', new aurelia_binding_1.Binary('===', part, this.nullExpression), new aurelia_binding_1.Binary('===', part, this.undefinedExpression)), this.emptyStringExpression, new aurelia_binding_1.CallMember(part, 'toString', []));
        };
        ValidationParser.prototype.getAccessorExpression = function (fn) {
            /* tslint:disable:max-line-length */
            var classic = /^function\s*\([$_\w\d]+\)\s*\{(?:\s*"use strict";)?\s*(?:[$_\w\d.['"\]+;]+)?\s*return\s+[$_\w\d]+\.([$_\w\d]+)\s*;?\s*\}$/;
            /* tslint:enable:max-line-length */
            var arrow = /^\(?[$_\w\d]+\)?\s*=>\s*[$_\w\d]+\.([$_\w\d]+)$/;
            var match = classic.exec(fn) || arrow.exec(fn);
            if (match === null) {
                throw new Error("Unable to parse accessor function:\n" + fn);
            }
            return this.parser.parse(match[1]);
        };
        return ValidationParser;
    }());
    ValidationParser.inject = [aurelia_binding_1.Parser, aurelia_templating_1.BindingLanguage];
    exports.ValidationParser = ValidationParser;
    var MessageExpressionValidator = (function (_super) {
        __extends(MessageExpressionValidator, _super);
        function MessageExpressionValidator(originalMessage) {
            var _this = _super.call(this, []) || this;
            _this.originalMessage = originalMessage;
            return _this;
        }
        MessageExpressionValidator.validate = function (expression, originalMessage) {
            var visitor = new MessageExpressionValidator(originalMessage);
            expression.accept(visitor);
        };
        MessageExpressionValidator.prototype.visitAccessScope = function (access) {
            if (access.ancestor !== 0) {
                throw new Error('$parent is not permitted in validation message expressions.');
            }
            if (['displayName', 'propertyName', 'value', 'object', 'config', 'getDisplayName'].indexOf(access.name) !== -1) {
                LogManager.getLogger('aurelia-validation')
                    .warn("Did you mean to use \"$" + access.name + "\" instead of \"" + access.name + "\" in this validation message template: \"" + this.originalMessage + "\"?");
            }
        };
        return MessageExpressionValidator;
    }(aurelia_binding_1.Unparser));
    exports.MessageExpressionValidator = MessageExpressionValidator;
});

define('aurelia-validation/implementation/util',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isString(value) {
        return Object.prototype.toString.call(value) === '[object String]';
    }
    exports.isString = isString;
});

define('aurelia-validation/implementation/validation-rules',["require", "exports", "./util", "./rules", "./validation-messages"], function (require, exports, util_1, rules_1, validation_messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Part of the fluent rule API. Enables customizing property rules.
     */
    var FluentRuleCustomizer = (function () {
        function FluentRuleCustomizer(property, condition, config, fluentEnsure, fluentRules, parser) {
            if (config === void 0) { config = {}; }
            this.fluentEnsure = fluentEnsure;
            this.fluentRules = fluentRules;
            this.parser = parser;
            this.rule = {
                property: property,
                condition: condition,
                config: config,
                when: null,
                messageKey: 'default',
                message: null,
                sequence: fluentRules.sequence
            };
            this.fluentEnsure._addRule(this.rule);
        }
        /**
         * Validate subsequent rules after previously declared rules have
         * been validated successfully. Use to postpone validation of costly
         * rules until less expensive rules pass validation.
         */
        FluentRuleCustomizer.prototype.then = function () {
            this.fluentRules.sequence++;
            return this;
        };
        /**
         * Specifies the key to use when looking up the rule's validation message.
         */
        FluentRuleCustomizer.prototype.withMessageKey = function (key) {
            this.rule.messageKey = key;
            this.rule.message = null;
            return this;
        };
        /**
         * Specifies rule's validation message.
         */
        FluentRuleCustomizer.prototype.withMessage = function (message) {
            this.rule.messageKey = 'custom';
            this.rule.message = this.parser.parseMessage(message);
            return this;
        };
        /**
         * Specifies a condition that must be met before attempting to validate the rule.
         * @param condition A function that accepts the object as a parameter and returns true
         * or false whether the rule should be evaluated.
         */
        FluentRuleCustomizer.prototype.when = function (condition) {
            this.rule.when = condition;
            return this;
        };
        /**
         * Tags the rule instance, enabling the rule to be found easily
         * using ValidationRules.taggedRules(rules, tag)
         */
        FluentRuleCustomizer.prototype.tag = function (tag) {
            this.rule.tag = tag;
            return this;
        };
        ///// FluentEnsure APIs /////
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor function.
         */
        FluentRuleCustomizer.prototype.ensure = function (subject) {
            return this.fluentEnsure.ensure(subject);
        };
        /**
         * Targets an object with validation rules.
         */
        FluentRuleCustomizer.prototype.ensureObject = function () {
            return this.fluentEnsure.ensureObject();
        };
        Object.defineProperty(FluentRuleCustomizer.prototype, "rules", {
            /**
             * Rules that have been defined using the fluent API.
             */
            get: function () {
                return this.fluentEnsure.rules;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Applies the rules to a class or object, making them discoverable by the StandardValidator.
         * @param target A class or object.
         */
        FluentRuleCustomizer.prototype.on = function (target) {
            return this.fluentEnsure.on(target);
        };
        ///////// FluentRules APIs /////////
        /**
         * Applies an ad-hoc rule function to the ensured property or object.
         * @param condition The function to validate the rule.
         * Will be called with two arguments, the property value and the object.
         * Should return a boolean or a Promise that resolves to a boolean.
         */
        FluentRuleCustomizer.prototype.satisfies = function (condition, config) {
            return this.fluentRules.satisfies(condition, config);
        };
        /**
         * Applies a rule by name.
         * @param name The name of the custom or standard rule.
         * @param args The rule's arguments.
         */
        FluentRuleCustomizer.prototype.satisfiesRule = function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return (_a = this.fluentRules).satisfiesRule.apply(_a, [name].concat(args));
            var _a;
        };
        /**
         * Applies the "required" rule to the property.
         * The value cannot be null, undefined or whitespace.
         */
        FluentRuleCustomizer.prototype.required = function () {
            return this.fluentRules.required();
        };
        /**
         * Applies the "matches" rule to the property.
         * Value must match the specified regular expression.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.matches = function (regex) {
            return this.fluentRules.matches(regex);
        };
        /**
         * Applies the "email" rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.email = function () {
            return this.fluentRules.email();
        };
        /**
         * Applies the "minLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.minLength = function (length) {
            return this.fluentRules.minLength(length);
        };
        /**
         * Applies the "maxLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.maxLength = function (length) {
            return this.fluentRules.maxLength(length);
        };
        /**
         * Applies the "minItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRuleCustomizer.prototype.minItems = function (count) {
            return this.fluentRules.minItems(count);
        };
        /**
         * Applies the "maxItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRuleCustomizer.prototype.maxItems = function (count) {
            return this.fluentRules.maxItems(count);
        };
        /**
         * Applies the "equals" validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.equals = function (expectedValue) {
            return this.fluentRules.equals(expectedValue);
        };
        return FluentRuleCustomizer;
    }());
    exports.FluentRuleCustomizer = FluentRuleCustomizer;
    /**
     * Part of the fluent rule API. Enables applying rules to properties and objects.
     */
    var FluentRules = (function () {
        function FluentRules(fluentEnsure, parser, property) {
            this.fluentEnsure = fluentEnsure;
            this.parser = parser;
            this.property = property;
            /**
             * Current rule sequence number. Used to postpone evaluation of rules until rules
             * with lower sequence number have successfully validated. The "then" fluent API method
             * manages this property, there's usually no need to set it directly.
             */
            this.sequence = 0;
        }
        /**
         * Sets the display name of the ensured property.
         */
        FluentRules.prototype.displayName = function (name) {
            this.property.displayName = name;
            return this;
        };
        /**
         * Applies an ad-hoc rule function to the ensured property or object.
         * @param condition The function to validate the rule.
         * Will be called with two arguments, the property value and the object.
         * Should return a boolean or a Promise that resolves to a boolean.
         */
        FluentRules.prototype.satisfies = function (condition, config) {
            return new FluentRuleCustomizer(this.property, condition, config, this.fluentEnsure, this, this.parser);
        };
        /**
         * Applies a rule by name.
         * @param name The name of the custom or standard rule.
         * @param args The rule's arguments.
         */
        FluentRules.prototype.satisfiesRule = function (name) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var rule = FluentRules.customRules[name];
            if (!rule) {
                // standard rule?
                rule = this[name];
                if (rule instanceof Function) {
                    return rule.call.apply(rule, [this].concat(args));
                }
                throw new Error("Rule with name \"" + name + "\" does not exist.");
            }
            var config = rule.argsToConfig ? rule.argsToConfig.apply(rule, args) : undefined;
            return this.satisfies(function (value, obj) {
                return (_a = rule.condition).call.apply(_a, [_this, value, obj].concat(args));
                var _a;
            }, config)
                .withMessageKey(name);
        };
        /**
         * Applies the "required" rule to the property.
         * The value cannot be null, undefined or whitespace.
         */
        FluentRules.prototype.required = function () {
            return this.satisfies(function (value) {
                return value !== null
                    && value !== undefined
                    && !(util_1.isString(value) && !/\S/.test(value));
            }).withMessageKey('required');
        };
        /**
         * Applies the "matches" rule to the property.
         * Value must match the specified regular expression.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.matches = function (regex) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || regex.test(value); })
                .withMessageKey('matches');
        };
        /**
         * Applies the "email" rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.email = function () {
            // regex from https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
            /* tslint:disable:max-line-length */
            return this.matches(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
                .withMessageKey('email');
        };
        /**
         * Applies the "minLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.minLength = function (length) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || value.length >= length; }, { length: length })
                .withMessageKey('minLength');
        };
        /**
         * Applies the "maxLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.maxLength = function (length) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || value.length <= length; }, { length: length })
                .withMessageKey('maxLength');
        };
        /**
         * Applies the "minItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRules.prototype.minItems = function (count) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length >= count; }, { count: count })
                .withMessageKey('minItems');
        };
        /**
         * Applies the "maxItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRules.prototype.maxItems = function (count) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length <= count; }, { count: count })
                .withMessageKey('maxItems');
        };
        /**
         * Applies the "equals" validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRules.prototype.equals = function (expectedValue) {
            return this.satisfies(function (value) { return value === null || value === undefined || value === '' || value === expectedValue; }, { expectedValue: expectedValue })
                .withMessageKey('equals');
        };
        return FluentRules;
    }());
    FluentRules.customRules = {};
    exports.FluentRules = FluentRules;
    /**
     * Part of the fluent rule API. Enables targeting properties and objects with rules.
     */
    var FluentEnsure = (function () {
        function FluentEnsure(parser) {
            this.parser = parser;
            /**
             * Rules that have been defined using the fluent API.
             */
            this.rules = [];
        }
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor
         * function.
         */
        FluentEnsure.prototype.ensure = function (property) {
            this.assertInitialized();
            return new FluentRules(this, this.parser, this.parser.parseProperty(property));
        };
        /**
         * Targets an object with validation rules.
         */
        FluentEnsure.prototype.ensureObject = function () {
            this.assertInitialized();
            return new FluentRules(this, this.parser, { name: null, displayName: null });
        };
        /**
         * Applies the rules to a class or object, making them discoverable by the StandardValidator.
         * @param target A class or object.
         */
        FluentEnsure.prototype.on = function (target) {
            rules_1.Rules.set(target, this.rules);
            return this;
        };
        /**
         * Adds a rule definition to the sequenced ruleset.
         * @internal
         */
        FluentEnsure.prototype._addRule = function (rule) {
            while (this.rules.length < rule.sequence + 1) {
                this.rules.push([]);
            }
            this.rules[rule.sequence].push(rule);
        };
        FluentEnsure.prototype.assertInitialized = function () {
            if (this.parser) {
                return;
            }
            throw new Error("Did you forget to add \".plugin('aurelia-validation')\" to your main.js?");
        };
        return FluentEnsure;
    }());
    exports.FluentEnsure = FluentEnsure;
    /**
     * Fluent rule definition API.
     */
    var ValidationRules = (function () {
        function ValidationRules() {
        }
        ValidationRules.initialize = function (parser) {
            ValidationRules.parser = parser;
        };
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor function.
         */
        ValidationRules.ensure = function (property) {
            return new FluentEnsure(ValidationRules.parser).ensure(property);
        };
        /**
         * Targets an object with validation rules.
         */
        ValidationRules.ensureObject = function () {
            return new FluentEnsure(ValidationRules.parser).ensureObject();
        };
        /**
         * Defines a custom rule.
         * @param name The name of the custom rule. Also serves as the message key.
         * @param condition The rule function.
         * @param message The message expression
         * @param argsToConfig A function that maps the rule's arguments to a "config"
         * object that can be used when evaluating the message expression.
         */
        ValidationRules.customRule = function (name, condition, message, argsToConfig) {
            validation_messages_1.validationMessages[name] = message;
            FluentRules.customRules[name] = { condition: condition, argsToConfig: argsToConfig };
        };
        /**
         * Returns rules with the matching tag.
         * @param rules The rules to search.
         * @param tag The tag to search for.
         */
        ValidationRules.taggedRules = function (rules, tag) {
            return rules.map(function (x) { return x.filter(function (r) { return r.tag === tag; }); });
        };
        /**
         * Removes the rules from a class or object.
         * @param target A class or object.
         */
        ValidationRules.off = function (target) {
            rules_1.Rules.unset(target);
        };
        return ValidationRules;
    }());
    exports.ValidationRules = ValidationRules;
});

define('components/icons',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Icons = (function () {
        function Icons() {
        }
        return Icons;
    }());
    exports.Icons = Icons;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./reset.css\"></require>\r\n  <require from=\"./app.css#ux\"></require>\r\n\r\n  <nav styles.nav>\r\n    <a href=\"#/introduction\">\r\n      <img styles.logo src=\"../images/aurelia-icon-128x128.png\">\r\n    </a>\r\n\r\n    <span styles.product-name>Aurelia UX</span>\r\n\r\n    <ul styles.nav-list>\r\n      <template repeat.for=\"[category, routes] of router.navigation | categories\">\r\n        <li styles.nav-category>\r\n          <span>${category.title}</span>\r\n        </li>\r\n\r\n        <li styles.nav-item repeat.for=\"nav of routes\" class=\"${nav.isActive ? 'active' : ''}\">\r\n          <a href.bind=\"nav.href\">${nav.title}</a>\r\n        </li>\r\n      </template>\r\n    </ul>\r\n  </nav>\r\n\r\n  <section styles.main>\r\n    <header styles.header>\r\n      <h1>${router.currentInstruction.config.navModel.title}</h1>\r\n    </header>\r\n\r\n    <router-view styles.page></router-view>\r\n  </section>\r\n</template>\r\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml, body {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\ncode {\r\n  font-family: 'Source Code Pro', monospace;\r\n}\r\n\r\nem {\r\n  font-style: italic;\r\n}\r\n\r\nstyles.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\nstyles.header {\r\n  background: ${$design.primary};\r\n  color: ${$design.primaryForeground};\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\r\n  padding: 16px;\r\n  font-size: 24px;\r\n  line-height: 32px;\r\n  height: 64px;\r\n}\r\n\r\nstyles.nav {\r\n  width: 275px;\r\n  background: ${$swatches.grey.p200};\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nstyles.nav-list {\r\n  align-self: stretch;\r\n  margin-top: 24px;\r\n  padding-top: 16px;\r\n  border-top: 1px solid ${$swatches.grey.p300};\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nstyles.nav-category {\r\n  padding: 12px 0 12px 24px;\r\n}\r\n\r\nstyles.nav-item {\r\n  transition: all 300ms;\r\n}\r\n\r\nstyles.nav-item:hover {\r\n  background: ${$swatches.grey.p300};\r\n}\r\n\r\nstyles.nav-item > a {\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-size: 16px;\r\n  color: ${$design.primary};\r\n  display: block;\r\n  transition: all 300ms;\r\n  padding: 12px 0;\r\n  margin-left: 24px;\r\n}\r\n\r\nstyles.nav-item > a:before {\r\n  content: '.';\r\n  display: inline-block;\r\n  color: transparent;\r\n  width: 2px;\r\n  margin-right: 8px;\r\n}\r\n\r\nstyles.nav-item.active > a {\r\n  color: ${$design.accent};\r\n}\r\n\r\nstyles.nav-item.active > a:before {\r\n  background-color: ${$design.accent};\r\n}\r\n\r\nstyles.logo {\r\n  margin: 16px 0;\r\n}\r\n\r\nstyles.product-name {\r\n  font-size: 28px;\r\n}\r\n\r\nstyles.page {\r\n  overflow-y: scroll;\r\n  flex: 1;\r\n}\r\n"; });
define('text!common.css', ['module'], function(module) { module.exports = "styles.main {\r\n  padding: 40px 40px 40px;\r\n}\r\n\r\nstyles.header {\r\n  font-size: 34px;\r\n  font-weight: 400;\r\n  line-height: 32px;\r\n  margin-bottom: 30px;\r\n  color: ${$design.primary};\r\n}\r\n\r\nstyles.description {\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n  line-height: 32px;\r\n  max-width: 940px;\r\n  color: ${$swatches.black};\r\n  margin-bottom: 40px;\r\n}\r\n"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='./common.css#ux'></require>\r\n\r\n  <main styles.main>\r\n\r\n    <h2 styles.header>What is Aurelia UX?</h2>\r\n\r\n    <p styles.description>\r\n      Aurelia UX is a companion framework to Aurelia. While Aurelia focuses on being\r\n      a <em>front-end framework</em> by providing core capabilities you need to build apps, such as templating, binding and routing,\r\n      Aurelia UX focuses on being a <em>user experience framework</em> by providing\r\n      higher-level capabilities such as design languages, theming and components.\r\n    </p>\r\n\r\n    <p styles.description>\r\n      Aurelia UX is still in a very early stage but we'd love for you to play with it\r\n      and consider contributing. We'll keep this app updated as we add new features\r\n      so it's easy for you to track our progress.\r\n    </p>\r\n\r\n  </main>\r\n</template>\r\n"; });
define('text!core-features/swatches.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./swatches.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <p styles.description>\r\n      Swatches provide sets of colors, both primaries and accents, based on the\r\n      color theory behind Material Design. It is recommended that you select one\r\n      primary and one accent color for your app, each with a normal, light and dark shade.\r\n    </p>\r\n\r\n    <section styles.swatches>\r\n      <div repeat.for=\"swatch of swatches\" styles.swatch>\r\n        <ul>\r\n          <li css=\"background: ${swatch.p500}\">\r\n            <div styles.swatch-name>\r\n              ${swatch.name}\r\n            </div>\r\n\r\n            <div styles.color-row>\r\n              <div>p500</div>\r\n              <div>${swatch.p500}</div>\r\n            </div>\r\n          </li>\r\n\r\n          <li repeat.for=\"color of swatch.colors\" styles.color-row css=\"background: ${color.value}\">\r\n            <div>${color.name}</div>\r\n            <div>${color.value}</div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </section>\r\n  </main>\r\n\r\n</template>\r\n"; });
define('text!reset.css', ['module'], function(module) { module.exports = "/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Correct the line height in all browsers.\r\n * 3. Prevent adjustments of font size after orientation changes in\r\n *    IE on Windows Phone and in iOS.\r\n */\r\n\r\nhtml {\r\n  font-family: sans-serif; /* 1 */\r\n  line-height: 1.15; /* 2 */\r\n  -ms-text-size-adjust: 100%; /* 3 */\r\n  -webkit-text-size-adjust: 100%; /* 3 */\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: sans-serif; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *    controls in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\nhtml [type=\"button\"], /* 1 */\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Change the border, margin, and padding in all browsers (opinionated).\r\n */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * 1. Add the correct display in IE 9-.\r\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  display: inline-block; /* 1 */\r\n  vertical-align: baseline; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-cancel-button,\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n"; });
define('text!core-features/theming.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./theming.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <p styles.description>\r\n      All UX styles can include binding expressions. They can be bound against your custom style models, and/or against generally\r\n      available properties such as platform and design language.\r\n    </p>\r\n\r\n    <section styles.themegroup>\r\n      <div styles.themecard>\r\n        <div styles.groupprimary css=\"background: ${ux.design.primary}; color: ${ux.design.primaryForeground};\" click.trigger=\"currentProperty = 'primary'\">\r\n          <span click.delegate=\"currentProperty = 'primaryForeground'\">\r\n            Primary\r\n          </span>\r\n        </div>\r\n\r\n        <div styles.groupsecondary style=\"display:flex;\">\r\n          <div css=\"background: ${ux.design.primaryLight}; color: ${ux.design.primaryLightForeground};\" click.trigger=\"currentProperty = 'primaryLight'\">\r\n            <span click.delegate=\"currentProperty = 'primaryLightForeground'\">\r\n              Primary Light\r\n            </span>\r\n          </div>\r\n          <div css=\"background: ${ux.design.primaryDark}; color: ${ux.design.primaryDarkForeground};\" click.trigger=\"currentProperty = 'primaryDark'\">\r\n            <span click.delegate=\"currentProperty = 'primaryDarkForeground'\">\r\n              Primary Dark\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div styles.themecard>\r\n        <div styles.groupprimary css=\"background: ${ux.design.accent}; color: ${ux.design.accentForeground};\" click.trigger=\"currentProperty = 'accent'\">\r\n          <span click.delegate=\"currentProperty = 'accentForeground'\">\r\n            Accent\r\n          </span>\r\n        </div>\r\n\r\n        <div styles.groupsecondary style=\"display:flex;\">\r\n          <div css=\"background: ${ux.design.accentLight}; color: ${ux.design.accentLightForeground};\" click.trigger=\"currentProperty = 'accentLight'\">\r\n            <span click.delegate=\"currentProperty = 'accentLightForeground'\">\r\n            Accent Light\r\n            </span>\r\n          </div>\r\n          <div css=\"background: ${ux.design.accentDark}; color: ${ux.design.accentDarkForeground};\" click.trigger=\"currentProperty = 'accentDark'\">\r\n            <span click.delegate=\"currentProperty = 'accentDarkForeground'\">\r\n            Accent Dark\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section styles.properties>\r\n\r\n      <p styles.description>\r\n        Click a section(for background) or title(for foreground) to select a property if you wish to change the color with the picker below.\r\n      </p>\r\n\r\n      <div styles.property-row>\r\n        <code>design.${currentProperty}</code> <br> <br>\r\n        <input type=\"color\" value.bind=\"ux.design[currentProperty]\">\r\n        ${ux.design[currentProperty]}\r\n      </div>\r\n    </section>\r\n  </main>\r\n</template>"; });
define('text!components/buttons.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./buttons.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <h1 styles.header>\r\n      &lt;ux-button&gt;&lt;/ux-button&gt;\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-button</code> element is used to indicate that a user can take an action.\r\n      It comes in three types: <em>flat</em>, <em>raised</em> (default) and <em>fab</em> which can be configured either on the button instance or on the theme object, using the <em>type</em> property.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-button type=\"flat\">Button</ux-button>\r\n\r\n        <code>\r\n          type=\"flat\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button>Button</ux-button>\r\n\r\n        <code>\r\n          type=\"raised\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button type=\"fab\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          type=\"fab\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button type=\"icon\">\r\n          <ux-icon icon=\"add\"></ux-icon>\r\n        </ux-button>\r\n\r\n        <code>\r\n          type=\"icon\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <p styles.description>\r\n      Buttons also come in three sizes: <em>small</em>, <em>medium</em> (default) and <em>large</em> which can be configured either on the button instance or on the theme object, using the <em>size</em> property.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-button size=\"small\" type=\"flat\">Button</ux-button>\r\n        <ux-button size=\"small\">Button</ux-button>\r\n        <ux-button size=\"small\" type=\"fab\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          size=\"small\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button type=\"flat\">Button</ux-button>\r\n        <ux-button>Button</ux-button>\r\n        <ux-button type=\"fab\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          size=\"medium\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button size=\"large\" type=\"flat\">Button</ux-button>\r\n        <ux-button size=\"large\">Button</ux-button>\r\n        <ux-button size=\"large\" type=\"fab\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          size=\"large\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <p styles.description>\r\n      Material buttons have a ripple effect by default, however that can be turned off using the <code>effect</code> property.\r\n      As with all properties, this can be specified per design language, using the design language prefix.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-button type=\"flat\" effect=\"none\">Button</ux-button>\r\n        <ux-button effect=\"none\">Button</ux-button>\r\n        <ux-button type=\"fab\" effect=\"none\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          effect=\"none\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button type=\"flat\" effect=\"ripple\">Button</ux-button>\r\n        <ux-button effect=\"ripple\">Button</ux-button>\r\n        <ux-button type=\"fab\" effect=\"ripple\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          effect=\"ripple\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button type=\"flat\" material-effect=\"ripple\">Button</ux-button>\r\n        <ux-button material-effect=\"ripple\">Button</ux-button>\r\n        <ux-button type=\"fab\" material-effect=\"ripple\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          material-effect=\"ripple\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n  </main>\r\n</template>\r\n"; });
define('text!core-features/swatches.css', ['module'], function(module) { module.exports = "styles.swatches {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  margin-top: 40px;\r\n}\r\n\r\nstyles.swatch {\r\n  width: 320px;\r\n  margin-bottom: 40px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\nstyles.swatch-name {\r\n  padding: 10px 15px 11px;\r\n  font-size: 13px;\r\n  line-height: 24px;\r\n  margin-bottom: 53px;\r\n}\r\n\r\nstyles.color-row {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n  padding: 10px 15px 11px;\r\n  font-size: 13px;\r\n  line-height: 24px;\r\n}\r\n"; });
define('text!core-features/theming.css', ['module'], function(module) { module.exports = "styles.properties {\r\n  margin-top: 40px;\r\n}\r\n\r\nstyles.property-row {\r\n  margin: 24px 0;\r\n}\r\n\r\nstyles.label {\r\n  display: block;\r\n  margin-bottom: 16px;\r\n}\r\n\r\nstyles.themegroup {\r\n  display: flex;\r\n}\r\n\r\nstyles.themecard {\r\n  width: 320px;\r\n  margin-right: 16px;\r\n  margin-bottom: 40px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\r\n  cursor: pointer;\r\n}\r\n\r\nstyles.groupprimary {\r\n  padding: 16px;\r\n  height: 150px;\r\n}\r\n\r\nstyles.groupsecondary {\r\n  display: flex;\r\n  height: 60px;\r\n}\r\n\r\nstyles.groupsecondary > div {\r\n   flex-grow: 1;\r\n   padding: 16px;\r\n}\r\n"; });
define('text!components/checkbox.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./checkbox.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <h1 styles.header>\r\n      &lt;ux-checkbox&gt;&lt;/ux-checkbox&gt;\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-checkbox</code> element is an element that can be bound to a property.\r\n      <code>checked.bind</code> is used to bind to the output of the checkbox and <code>value.bind</code> represents the\r\n      output of the checkbox. The defaul value is just a boolean representing the state of the checkbox.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-checkbox></ux-checkbox>\r\n        <code>\r\n          checked=\"false\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-checkbox checked=\"true\"></ux-checkbox>\r\n        <code>\r\n          checked=\"true\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-checkbox disabled></ux-checkbox>\r\n        <code>\r\n          disabled\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-checkbox disabled checked=\"true\"></ux-checkbox>\r\n        <code>\r\n          disabled checked=\"true\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The Material ripple effect can be turned off using the effect property.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-checkbox effect=\"none\"></ux-checkbox>\r\n        <code>\r\n          effect=\"none\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <p styles.description>\r\n      Labels can be added to a checkbox in one of two ways.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-checkbox label=\"label\"></ux-checkbox>\r\n        <code>\r\n          label=\"label\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-checkbox>label</ux-checkbox>\r\n        <code>\r\n          &lt;ux-checkbox&gt;label&lt;/ux-checkbox&gt;\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n\r\n    <h1 styles.header>\r\n      Binding Demos\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-checkbox</code> control can be bound just like any other checkbox in Aurelia. The following is an implimentation\r\n      of the binding demos from the <a href=\"http://aurelia.io/hub.html#/doc/article/aurelia/binding/latest/binding-checkboxes\">developer hub</a>.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-form>\r\n\r\n          <template repeat.for=\"product of productObjects\">\r\n            <div class=\"form-row\">\r\n              <ux-field>\r\n                <ux-checkbox value.bind=\"product\" checked.bind=\"selectedProductObjects\">${product.id} - ${product.name}</ux-checkbox>\r\n              </ux-field>\r\n            </div>\r\n          </template>\r\n\r\n        </ux-form>\r\n        <code>\r\n          Bound to object array\r\n          <br>\r\n          Selected Products:\r\n            <ul>\r\n              <li repeat.for=\"product of selectedProductObjects\">${product.id} - ${product.name}</li>\r\n            </ul>\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-form>\r\n\r\n          <template repeat.for=\"product of products\">\r\n            <div class=\"form-row\">\r\n              <ux-field>\r\n                <ux-checkbox value.bind=\"product\" checked.bind=\"selectedStringProducts\">${product}</ux-checkbox>\r\n              </ux-field>\r\n            </div>\r\n          </template>\r\n\r\n        </ux-form>\r\n        <code>\r\n          Bound to string array\r\n          <br>\r\n          Selected Products: ${selectedStringProducts}\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-form>\r\n\r\n          <div class=\"form-row\">\r\n            <ux-field>\r\n              <ux-checkbox type=\"checkbox\" model.bind=\"{ id: 0, name: 'Motherboard' }\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductsWithMatcher\">\r\n                Motherboard\r\n              </ux-checkbox>\r\n            </ux-field>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <ux-field>\r\n              <ux-checkbox type=\"checkbox\" model.bind=\"{ id: 1, name: 'CPU' }\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductsWithMatcher\">\r\n                CPU\r\n              </ux-checkbox>\r\n            </ux-field>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <ux-field>\r\n              <ux-checkbox type=\"checkbox\" model.bind=\"{ id: 2, name: 'Memory' }\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductsWithMatcher\">\r\n                Memory\r\n              </ux-checkbox>\r\n            </ux-field>\r\n          </div>\r\n\r\n        </ux-form>\r\n        <code>\r\n          Bound with matcher\r\n          <br>\r\n          Selected Products:\r\n          <ul>\r\n            <li repeat.for=\"product of selectedProductsWithMatcher\">${product.id} - ${product.name}</li>\r\n          </ul>\r\n        </code>\r\n      </figure>\r\n    </section>\r\n  </main>\r\n</template>\r\n"; });
define('text!components/buttons.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.grey.p200};\r\n  display: flex;\r\n  width: 320px;\r\n  height: 320px;\r\n  position:relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  position: absolute;\r\n  bottom: 16px;\r\n  left: 16px;\r\n}\r\n"; });
define('text!components/chips.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./chips.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <h1 styles.header>\r\n      &lt;ux-chip&gt;&lt;/ux-chip&gt;\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-chip</code> element is used to display content in a compact area.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure>\r\n        <ux-chip>\r\n          Text Content\r\n        </ux-chip>\r\n\r\n        <code>\r\n          &lt;ux-chip&gt;&lt;/ux-chip&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-tag>\r\n          Text Content\r\n        </ux-tag>\r\n\r\n        <code>\r\n          &lt;ux-tag&gt;&lt;/ux-tag&gt;\r\n        </code>\r\n      </figure>\r\n      \r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-chip</code> and <code>ux-tag</code> elements both have a <code>deletable</code> attribute that\r\n      can be added to show an X to the right of the chip. Clicking this X fires off a <code>close</code> event\r\n      that can be used with close.trigger.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure>\r\n        <ux-chip deletable>\r\n          Text Content\r\n        </ux-chip>\r\n\r\n        <code>\r\n          &lt;ux-chip&gt;&lt;/ux-chip&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-tag deletable>\r\n          Text Content\r\n        </ux-tag>\r\n\r\n        <code>\r\n          &lt;ux-tag&gt;&lt;/ux-tag&gt;\r\n        </code>\r\n      </figure>\r\n      \r\n    </section>\r\n    \r\n    <h1 styles.header>\r\n      &lt;ux-chip-input&gt;&lt;/ux-chip-input&gt;\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-chip-input</code> element is an easy to use editor to edit an array of\r\n      chips or tags. This element can be used by binding to its value to get a comma delimited\r\n      list, or by binding to the chips attribute, which exposes an array of chips. Loosing focus\r\n      or pressing the enter key causes the input to add the current text to the chip list. \r\n      Pressing the left arrow key will let the user edit the last chip input. Double clicking\r\n      a chip will let the user edit that specific chip.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure>\r\n        <ux-chip-input type=\"chip\"></ux-chip-input>\r\n\r\n        <code>\r\n          type=\"chip\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-chip-input type=\"tag\"></ux-chip-input>\r\n\r\n        <code>\r\n          type=\"tag\"\r\n        </code>\r\n      </figure>\r\n      \r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-chip-input</code> element has a separator attribute that allows the standard\r\n      seperator used to be changed. The default seperator is ', '.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure>\r\n        <ux-chip-input type=\"chip\" separator=\"/$\" value.bind=\"separatorInput\"></ux-chip-input>\r\n        \r\n        <code>\r\n          separator=\"/$\"<br/>\r\n          value=\"${separatorInput}\"\r\n        </code>\r\n      </figure>\r\n      \r\n    </section>\r\n\r\n  </main>\r\n</template>\r\n"; });
define('text!components/checkbox.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.grey.p200};\r\n  display: flex;\r\n  width: 320px;\r\n  height: 320px;\r\n  position:relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  position: absolute;\r\n  bottom: 16px;\r\n  left: 16px;\r\n}\r\n"; });
define('text!components/chips.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.grey.p200};\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n  width: 320px;\r\n  height: 320px;\r\n  position:relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  position: absolute;\r\n  bottom: 16px;\r\n  left: 16px;\r\n}\r\n"; });
define('text!components/forms.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./forms.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <h1 styles.header>\r\n      &lt;ux-form&gt;&lt;/ux-form&gt;\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-form</code> element is used to quickly create and lay out forms.\r\n    </p>\r\n\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-form>\r\n            <div class=\"form-row\">\r\n              <ux-input placeholder=\"Name\"></ux-input>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n              <ux-input type=\"email\" placeholder=\"Email Address\"></ux-input>\r\n            </div>\r\n\r\n            <ux-button type=\"raised\">Button</ux-button>\r\n          </ux-form>\r\n        </div>\r\n        <code>\r\n          Basic Usage\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-form>\r\n\r\n          <ux-input class=\"full-width\" placeholder=\"Title\"></ux-input>\r\n\r\n          <ux-textarea auto-resize class=\"full-width\" placeholder=\"Description\"></ux-textarea>\r\n\r\n          <ux-button type=\"raised\">Button</ux-button>\r\n        </ux-form>\r\n        <code>\r\n          Basic Usage\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n\r\n    <p styles.description>\r\n      The <code>ux-form</code> includes the <code>.form-row</code> class to help with laying out a form and including multiple\r\n      controls on one line.\r\n    </p>\r\n\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n\r\n\r\n          <ux-form>\r\n            <div class=\"form-row\">\r\n              <ux-input maxlength=\"10\" placeholder=\"First Name\"></ux-input>\r\n              <ux-input maxlength=\"10\" placeholder=\"Last Name\"></ux-input>\r\n            </div>\r\n\r\n          </ux-form>\r\n\r\n        </div>\r\n        <code>\r\n          class=\"form-row\"\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n\r\n    <p styles.description>\r\n      The <code>ux-field</code> component is part of the form development and takes care of stylng labels with inputs and\r\n      other controls.\r\n    </p>\r\n\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n\r\n\r\n          <ux-form>\r\n\r\n            <ux-field label=\"First Name\">\r\n              <ux-input maxlength=\"10\"></ux-input>\r\n              <ux-input-info ux-input-counter>John</ux-input-info>\r\n            </ux-field>\r\n\r\n          </ux-form>\r\n\r\n        </div>\r\n        <code>\r\n        <pre>\r\n&lt;ux-field label=\"First Name\"&gt;\r\n&lt;/ux-field&gt;\r\n        </pre>\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n\r\n\r\n    <p styles.description>\r\n      Bringing all of these together allows the creation of forms quickly.\r\n    </p>\r\n\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n\r\n\r\n          <ux-form>\r\n\r\n            <div class=\"form-row\">\r\n\r\n              <ux-field label=\"First Name\">\r\n                <ux-input maxlength=\"10\" value.bind=\"firstName & validate\"></ux-input>\r\n                <ux-input-info ux-input-counter>John</ux-input-info>\r\n              </ux-field>\r\n\r\n              <ux-field label=\"Last Name\">\r\n                <ux-input maxlength=\"10\" value.bind=\"lastName & validate\"></ux-input>\r\n                <ux-input-info ux-input-counter>Doe</ux-input-info>\r\n              </ux-field>\r\n\r\n            </div>\r\n\r\n            <ux-field label=\"Email Address\">\r\n              <ux-input type=\"email\" value.bind=\"email & validate\"></ux-input>\r\n              <ux-input-info>email@example.com</ux-input-info>\r\n            </ux-field>\r\n\r\n            <ux-field label=\"Biography\">\r\n              <ux-textarea auto-resize></ux-textarea>\r\n            </ux-field>\r\n\r\n            <ux-button click.delegate=\"submit()\">Submit</ux-button>\r\n\r\n          </ux-form>\r\n\r\n\r\n  </main>\r\n</template>"; });
define('text!components/forms.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.grey.p300};\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 320px;\r\n  height: 320px;\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > div.add-padding {\r\n  padding: 8px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  padding:16px;\r\n  background: ${$swatches.grey.p200};\r\n}\r\n"; });
define('text!components/inputs.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.grey.p300};\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 320px;\r\n  height: 320px;\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > div.add-padding {\r\n  padding: 8px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  padding:16px;\r\n  background: ${$swatches.grey.p200};\r\n}\r\n"; });
define('text!components/inputs.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./inputs.css#ux\"></require>\r\n  <main styles.main>\r\n\r\n    <h1 styles.header>\r\n      &lt;ux-input&gt;&lt;/ux-input&gt;\r\n    </h1>\r\n    <p styles.description>\r\n      The <code>ux-input</code> element allows users to input data.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input value.bind=\"uxInputSingleLine\"></ux-input>\r\n        </div>\r\n\r\n        <div class=\"add-padding\">\r\n          value: ${uxInputSingleLine}\r\n        </div>\r\n\r\n        <code>\r\n          default\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-input</code> extends many native functions of the standard input control.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input disabled value=\"Disabled Input\"></ux-input>\r\n        </div>\r\n\r\n        <ux-input class=\"full-width\" disabled value=\"Disabled Input\"></ux-input>\r\n\r\n        <code>\r\n          disabled\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input readonly value=\"Read Only Input\"></ux-input>\r\n        </div>\r\n\r\n        <ux-input class=\"full-width\" readonly value=\"Read Only Input\"></ux-input>\r\n\r\n        <code>\r\n          readonly\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input placeholder=\"Text goes in this field\"></ux-input>\r\n        </div>\r\n\r\n        <code>\r\n          placeholder=\"Value Here\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input value=\"Password\" type=\"password\"></ux-input>\r\n        </div>\r\n\r\n        <ux-input class=\"full-width\" value=\"Password\" type=\"password\"></ux-input>\r\n\r\n        <code>\r\n           type=\"password\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input type=\"number\" step=\"5\"></ux-input>\r\n        </div>\r\n\r\n        <code>\r\n          type=\"number\" step=\"5\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input type=\"number\" min=\"5\"></ux-input>\r\n        </div>\r\n\r\n        <code>\r\n          type=\"number\" min=\"5\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input type=\"number\" max=\"10\"></ux-input>\r\n        </div>\r\n\r\n        <code>\r\n          type=\"number\" max=\"10\"\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-input</code> has a few classes to help with styling.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input class=\"has-error\" value=\"Error!\"></ux-input>\r\n        </div>\r\n\r\n        <ux-input class=\"full-width has-error\" value=\"Error!\"></ux-input>\r\n\r\n        <code>\r\n          class=\"has-error\"\r\n        </code>\r\n      </figure>\r\n      \r\n      <figure styles.figure>\r\n        <ux-input class=\"full-width\" value.bind=\"uxInputFullWidth\"></ux-input>\r\n\r\n        <div class=\"add-padding\">\r\n          value: ${uxInputFullWidth}\r\n        </div>\r\n\r\n        <code>\r\n          class=\"full-width\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <h2 styles.header>Aurelia Validation</h2>\r\n    <p styles.description>\r\n      The <code>ux-input</code> has native support for the Aurelia Validation plugin.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n\r\n        <div class=\"add-padding\">\r\n          <form submit.delegate=\"submit()\">\r\n            \r\n            <ux-input class=\"form-control\" \r\n                      validation-errors.bind=\"firstNameErrors\"\r\n                      class.bind=\"firstNameErrors.length ? 'has-error' : ''\"\r\n                      view-model.ref=\"errorDemo1\"\r\n                      placeholder=\"First Name\" \r\n                      value.bind=\"firstName & validate\"></ux-input>\r\n            <ux-input-info target.bind=\"errorDemo1\">\r\n              <span if.bind=\"firstNameErrors.length\">${firstNameErrors[0].error.message}</span>\r\n            </ux-input-info>\r\n\r\n            <ux-input type=\"email\"\r\n                      validation-errors.bind=\"emailErrors\"\r\n                      class.bind=\"emailErrors.length ? 'has-error' : ''\" \r\n                      view-model.ref=\"errorDemo2\"\r\n                      class=\"form-control\" \r\n                      placeholder=\"Email\" \r\n                      value.bind=\"email & validate\"></ux-input>\r\n            <ux-input-info target.bind=\"errorDemo2\">\r\n                <span if.bind=\"emailErrors.length\">${emailErrors[0].error.message}</span>\r\n                <span if.bind=\"!emailErrors.length\">john@example.com</span>\r\n            </ux-input-info>\r\n\r\n\r\n            <ux-button type=\"raised\" size=\"small\" class=\"btn btn-primary\">Submit</ux-button>\r\n          </form>\r\n\r\n        </div>\r\n        <code>\r\n          \r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n\r\n    <h2 styles.header>Input Info Box & Input Counter</h2>\r\n    <p styles.description>\r\n      The <code>ux-input</code> has a sibling element that will display the current character count or current characters remaining. If a max attribute is present on the <code>ux-input</code> element then the counter will display the total characters remaining, otherwise it will default to displaying the total characters. This element can also display hint text or error text as well.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input view-model.ref=\"ibicDemo1\"></ux-input>\r\n          <ux-input-info ux-input-counter target.bind=\"ibicDemo1\"></ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          &lt;ux-input-info input-counter /&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-input view-model.ref=\"ibicDemo2\" maxlength=\"10\"></ux-input>\r\n          <ux-input-info ux-input-counter target.bind=\"ibicDemo2\"></ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          &lt;ux-input-info input-counter maxlength=\"10\" /&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-input view-model.ref=\"ibicDemo3\"></ux-input>\r\n          <ux-input-info target.bind=\"ibicDemo3\">I am a message</ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          &lt;ux-input-info&gt;message&lt;/ux-input-info&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-input view-model.ref=\"ibicDemo3\" maxlength=\"10\"></ux-input>\r\n          <ux-input-info ux-input-counter target.bind=\"ibicDemo3\">I am a message</ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          Combined\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n  </main>\r\n</template>\r\n"; });
define('text!components/textarea.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.grey.p300};\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 320px;\r\n  height: 320px;\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > div.add-padding {\r\n  padding: 8px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  padding:16px;\r\n  background: ${$swatches.grey.p200};\r\n}\r\n"; });
define('text!components/textarea.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./textarea.css#ux\"></require>\r\n  <main styles.main>\r\n\r\n    <h1 styles.header>\r\n      &lt;ux-textarea&gt;&lt;/ux-textarea&gt;\r\n    </h1>\r\n    <p styles.description>\r\n      The <code>ux-textarea</code> element allows users to input data.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea value.bind=\"uxInputSingleLine\"></ux-textarea>\r\n        </div>\r\n\r\n        <div class=\"add-padding\">\r\n          value: ${uxInputSingleLine}\r\n        </div>\r\n\r\n        <code>\r\n          default\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-textarea</code> extends many native functions of the standard textarea control.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea disabled value=\"Disabled Input\"></ux-textarea>\r\n        </div>\r\n\r\n        <ux-textarea class=\"full-width\" disabled value=\"Disabled Input\"></ux-textarea>\r\n\r\n        <code>\r\n          disabled\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea readonly value=\"Read Only Input\"></ux-textarea>\r\n        </div>\r\n\r\n        <ux-textarea class=\"full-width\" readonly value=\"Read Only Input\"></ux-textarea>\r\n\r\n        <code>\r\n          readonly\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea placeholder=\"Text goes in this field\"></ux-textarea>\r\n        </div>\r\n\r\n        <code>\r\n          placeholder=\"Value Here\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea rows=\"5\" placeholder=\"Text goes in this field\"></ux-textarea>\r\n        </div>\r\n        <code>\r\n          rows=\"number\"\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-textarea</code> has a few classes to help with styling.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea class=\"has-error\" value=\"Error!\"></ux-textarea>\r\n        </div>\r\n\r\n        <ux-textarea class=\"full-width has-error\" value=\"Error!\"></ux-textarea>\r\n\r\n        <code>\r\n          class=\"has-error\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-textarea class=\"full-width\" value.bind=\"uxInputFullWidth\"></ux-textarea>\r\n\r\n        <div class=\"add-padding\">\r\n          value: ${uxInputFullWidth}\r\n        </div>\r\n\r\n        <code>\r\n          class=\"full-width\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-textarea class=\"show-grip\"></ux-textarea>\r\n        </div>\r\n\r\n        <code>\r\n          class=\"show-grip\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <h2 styles.header>Aurelia Validation</h2>\r\n    <p styles.description>\r\n      The <code>ux-textarea</code> has native support for the Aurelia Validation plugin.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n\r\n        <div class=\"add-padding\">\r\n          <form submit.delegate=\"submit()\">\r\n\r\n            <ux-input class=\"form-control\" validation-errors.bind=\"firstNameErrors\" class.bind=\"firstNameErrors.length ? 'has-error' : ''\" view-model.ref=\"errorDemo1\" placeholder=\"First Name\" value.bind=\"firstName & validate\"></ux-input>\r\n            <ux-input-info target.bind=\"errorDemo1\">\r\n              <span if.bind=\"firstNameErrors.length\">${firstNameErrors[0].error.message}</span>\r\n            </ux-input-info>\r\n\r\n            <ux-textarea validation-errors.bind=\"descriptionErrors\" class.bind=\"descriptionErrors.length ? 'has-error' : ''\" view-model.ref=\"errorDemo2\" class=\"form-control\" placeholder=\"Description\" maxlength=\"500\" value.bind=\"description & validate\"></ux-textarea>\r\n            <ux-input-info ux-input-counter target.bind=\"errorDemo2\">\r\n              <span if.bind=\"descriptionErrors.length\">${descriptionErrors[0].error.message}</span>\r\n              <span if.bind=\"!descriptionErrors.length\">john@example.com</span>\r\n            </ux-input-info>\r\n\r\n\r\n            <ux-button type=\"raised\" size=\"small\" class=\"btn btn-primary\">Submit</ux-button>\r\n          </form>\r\n\r\n        </div>\r\n        <code>\r\n          \r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <h2 styles.header>auto-resize</h2>\r\n    <p styles.description>\r\n      The <code>ux-textarea</code> has an auto-resize attribute to allow the textarea to grow in height as needed to accomodate the input.\r\n    </p>\r\n\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea auto-resize></ux-textarea>\r\n        </div>\r\n\r\n        <code>\r\n          auto-resize\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n\r\n    <h2 styles.header>Input Info Box & Input Counter</h2>\r\n    <p styles.description>\r\n      The <code>ux-textarea</code> has a sibling element that will display the current character count or current characters remaining. If a max attribute is present on the <code>ux-textarea</code> element then the counter will display the total characters remaining, otherwise it will default to displaying the total characters. This element can also display hint text or error text as well.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea view-model.ref=\"ibicDemo1\"></ux-textarea>\r\n          <ux-input-info ux-input-counter target.bind=\"ibicDemo1\"></ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          &lt;ux-input-info input-counter /&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-textarea view-model.ref=\"ibicDemo2\" maxlength=\"10\"></ux-textarea>\r\n          <ux-input-info ux-input-counter target.bind=\"ibicDemo2\"></ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          &lt;ux-input-info input-counter maxlength=\"10\" /&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-textarea view-model.ref=\"ibicDemo3\"></ux-textarea>\r\n          <ux-input-info target.bind=\"ibicDemo3\">I am a message</ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          &lt;ux-input-info&gt;message&lt;/ux-input-info&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-textarea view-model.ref=\"ibicDemo3\" maxlength=\"10\"></ux-textarea>\r\n          <ux-input-info ux-input-counter target.bind=\"ibicDemo3\">I am a message</ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          Combined\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n  </main>\r\n</template>\r\n"; });
define('text!components/icons.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./icons.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <h1 styles.header>\r\n      &lt;ux-icon&gt;&lt;/ux-icon&gt;\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-icon</code> element is used to display icons that are adaptive and can switch\r\n      to match the current environment. Currently only Material Icons are supported.\r\n    </p>\r\n\r\n    <p styles.description>\r\n      <code>\r\n        &lt;ux-icon icon=\"icon_name\"&gt;&lt;/ux-icon&gt;\r\n      </code>\r\n    </p>\r\n\r\n  <section styles.feature>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"3d_rotation\"></ux-icon>\r\n      <footer>3d_rotation</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"accessibility\"></ux-icon>\r\n      <footer>accessibility</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"accessible\"></ux-icon>\r\n      <footer>accessible</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"account_balance\"></ux-icon>\r\n      <footer>account_balance</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"account_balance_wallet\"></ux-icon>\r\n      <footer>account_balance_wallet</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"account_box\"></ux-icon>\r\n      <footer>account_box</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"account_circle\"></ux-icon>\r\n      <footer>account_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_shopping_cart\"></ux-icon>\r\n      <footer>add_shopping_cart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"alarm\"></ux-icon>\r\n      <footer>alarm</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"alarm_add\"></ux-icon>\r\n      <footer>alarm_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"alarm_off\"></ux-icon>\r\n      <footer>alarm_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"alarm_on\"></ux-icon>\r\n      <footer>alarm_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"all_out\"></ux-icon>\r\n      <footer>all_out</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"android\"></ux-icon>\r\n      <footer>android</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"announcement\"></ux-icon>\r\n      <footer>announcement</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"aspect_ratio\"></ux-icon>\r\n      <footer>aspect_ratio</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assessment\"></ux-icon>\r\n      <footer>assessment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assignment\"></ux-icon>\r\n      <footer>assignment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assignment_ind\"></ux-icon>\r\n      <footer>assignment_ind</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assignment_late\"></ux-icon>\r\n      <footer>assignment_late</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assignment_return\"></ux-icon>\r\n      <footer>assignment_return</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assignment_returned\"></ux-icon>\r\n      <footer>assignment_returned</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assignment_turned_in\"></ux-icon>\r\n      <footer>assignment_turned_in</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"autorenew\"></ux-icon>\r\n      <footer>autorenew</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"backup\"></ux-icon>\r\n      <footer>backup</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"book\"></ux-icon>\r\n      <footer>book</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bookmark\"></ux-icon>\r\n      <footer>bookmark</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bookmark_border\"></ux-icon>\r\n      <footer>bookmark_border</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bug_report\"></ux-icon>\r\n      <footer>bug_report</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"build\"></ux-icon>\r\n      <footer>build</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cached\"></ux-icon>\r\n      <footer>cached</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"camera_enhance\"></ux-icon>\r\n      <footer>camera_enhance</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"card_giftcard\"></ux-icon>\r\n      <footer>card_giftcard</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"card_membership\"></ux-icon>\r\n      <footer>card_membership</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"card_travel\"></ux-icon>\r\n      <footer>card_travel</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"change_history\"></ux-icon>\r\n      <footer>change_history</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"check_circle\"></ux-icon>\r\n      <footer>check_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"chrome_reader_mode\"></ux-icon>\r\n      <footer>chrome_reader_mode</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"class\"></ux-icon>\r\n      <footer>class</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"code\"></ux-icon>\r\n      <footer>code</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"compare_arrows\"></ux-icon>\r\n      <footer>compare_arrows</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"copyright\"></ux-icon>\r\n      <footer>copyright</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"credit_card\"></ux-icon>\r\n      <footer>credit_card</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dashboard\"></ux-icon>\r\n      <footer>dashboard</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"date_range\"></ux-icon>\r\n      <footer>date_range</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"delete\"></ux-icon>\r\n      <footer>delete</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"delete_forever\"></ux-icon>\r\n      <footer>delete_forever</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"description\"></ux-icon>\r\n      <footer>description</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dns\"></ux-icon>\r\n      <footer>dns</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"done\"></ux-icon>\r\n      <footer>done</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"done_all\"></ux-icon>\r\n      <footer>done_all</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"donut_large\"></ux-icon>\r\n      <footer>donut_large</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"donut_small\"></ux-icon>\r\n      <footer>donut_small</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"eject\"></ux-icon>\r\n      <footer>eject</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"euro_symbol\"></ux-icon>\r\n      <footer>euro_symbol</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"event\"></ux-icon>\r\n      <footer>event</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"event_seat\"></ux-icon>\r\n      <footer>event_seat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exit_to_app\"></ux-icon>\r\n      <footer>exit_to_app</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"explore\"></ux-icon>\r\n      <footer>explore</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"extension\"></ux-icon>\r\n      <footer>extension</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"face\"></ux-icon>\r\n      <footer>face</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"favorite\"></ux-icon>\r\n      <footer>favorite</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"favorite_border\"></ux-icon>\r\n      <footer>favorite_border</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"feedback\"></ux-icon>\r\n      <footer>feedback</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"find_in_page\"></ux-icon>\r\n      <footer>find_in_page</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"find_replace\"></ux-icon>\r\n      <footer>find_replace</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fingerprint\"></ux-icon>\r\n      <footer>fingerprint</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flight_land\"></ux-icon>\r\n      <footer>flight_land</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flight_takeoff\"></ux-icon>\r\n      <footer>flight_takeoff</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flip_to_back\"></ux-icon>\r\n      <footer>flip_to_back</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flip_to_front\"></ux-icon>\r\n      <footer>flip_to_front</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"g_translate\"></ux-icon>\r\n      <footer>g_translate</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gavel\"></ux-icon>\r\n      <footer>gavel</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"get_app\"></ux-icon>\r\n      <footer>get_app</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gif\"></ux-icon>\r\n      <footer>gif</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"grade\"></ux-icon>\r\n      <footer>grade</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"group_work\"></ux-icon>\r\n      <footer>group_work</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"help\"></ux-icon>\r\n      <footer>help</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"help_outline\"></ux-icon>\r\n      <footer>help_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"highlight_off\"></ux-icon>\r\n      <footer>highlight_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"history\"></ux-icon>\r\n      <footer>history</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"home\"></ux-icon>\r\n      <footer>home</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hourglass_empty\"></ux-icon>\r\n      <footer>hourglass_empty</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hourglass_full\"></ux-icon>\r\n      <footer>hourglass_full</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"http\"></ux-icon>\r\n      <footer>http</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"https\"></ux-icon>\r\n      <footer>https</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"important_devices\"></ux-icon>\r\n      <footer>important_devices</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"info\"></ux-icon>\r\n      <footer>info</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"info_outline\"></ux-icon>\r\n      <footer>info_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"input\"></ux-icon>\r\n      <footer>input</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"invert_colors\"></ux-icon>\r\n      <footer>invert_colors</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"label\"></ux-icon>\r\n      <footer>label</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"label_outline\"></ux-icon>\r\n      <footer>label_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"language\"></ux-icon>\r\n      <footer>language</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"launch\"></ux-icon>\r\n      <footer>launch</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"lightbulb_outline\"></ux-icon>\r\n      <footer>lightbulb_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"line_style\"></ux-icon>\r\n      <footer>line_style</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"line_weight\"></ux-icon>\r\n      <footer>line_weight</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"list\"></ux-icon>\r\n      <footer>list</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"lock\"></ux-icon>\r\n      <footer>lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"lock_open\"></ux-icon>\r\n      <footer>lock_open</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"lock_outline\"></ux-icon>\r\n      <footer>lock_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"loyalty\"></ux-icon>\r\n      <footer>loyalty</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"markunread_mailbox\"></ux-icon>\r\n      <footer>markunread_mailbox</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"motorcycle\"></ux-icon>\r\n      <footer>motorcycle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"note_add\"></ux-icon>\r\n      <footer>note_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"offline_pin\"></ux-icon>\r\n      <footer>offline_pin</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"opacity\"></ux-icon>\r\n      <footer>opacity</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"open_in_browser\"></ux-icon>\r\n      <footer>open_in_browser</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"open_in_new\"></ux-icon>\r\n      <footer>open_in_new</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"open_with\"></ux-icon>\r\n      <footer>open_with</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pageview\"></ux-icon>\r\n      <footer>pageview</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pan_tool\"></ux-icon>\r\n      <footer>pan_tool</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"payment\"></ux-icon>\r\n      <footer>payment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_camera_mic\"></ux-icon>\r\n      <footer>perm_camera_mic</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_contact_calendar\"></ux-icon>\r\n      <footer>perm_contact_calendar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_data_setting\"></ux-icon>\r\n      <footer>perm_data_setting</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_device_information\"></ux-icon>\r\n      <footer>perm_device_information</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_identity\"></ux-icon>\r\n      <footer>perm_identity</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_media\"></ux-icon>\r\n      <footer>perm_media</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_phone_msg\"></ux-icon>\r\n      <footer>perm_phone_msg</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_scan_wifi\"></ux-icon>\r\n      <footer>perm_scan_wifi</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pets\"></ux-icon>\r\n      <footer>pets</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"picture_in_picture\"></ux-icon>\r\n      <footer>picture_in_picture</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"picture_in_picture_alt\"></ux-icon>\r\n      <footer>picture_in_picture_alt</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"play_for_work\"></ux-icon>\r\n      <footer>play_for_work</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"polymer\"></ux-icon>\r\n      <footer>polymer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"power_settings_new\"></ux-icon>\r\n      <footer>power_settings_new</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pregnant_woman\"></ux-icon>\r\n      <footer>pregnant_woman</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"print\"></ux-icon>\r\n      <footer>print</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"query_builder\"></ux-icon>\r\n      <footer>query_builder</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"question_answer\"></ux-icon>\r\n      <footer>question_answer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"receipt\"></ux-icon>\r\n      <footer>receipt</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"record_voice_over\"></ux-icon>\r\n      <footer>record_voice_over</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"redeem\"></ux-icon>\r\n      <footer>redeem</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"remove_shopping_cart\"></ux-icon>\r\n      <footer>remove_shopping_cart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"reorder\"></ux-icon>\r\n      <footer>reorder</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"report_problem\"></ux-icon>\r\n      <footer>report_problem</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"restore\"></ux-icon>\r\n      <footer>restore</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"restore_page\"></ux-icon>\r\n      <footer>restore_page</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"room\"></ux-icon>\r\n      <footer>room</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rounded_corner\"></ux-icon>\r\n      <footer>rounded_corner</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rowing\"></ux-icon>\r\n      <footer>rowing</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"schedule\"></ux-icon>\r\n      <footer>schedule</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"search\"></ux-icon>\r\n      <footer>search</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings\"></ux-icon>\r\n      <footer>settings</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_applications\"></ux-icon>\r\n      <footer>settings_applications</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_backup_restore\"></ux-icon>\r\n      <footer>settings_backup_restore</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_bluetooth\"></ux-icon>\r\n      <footer>settings_bluetooth</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_brightness\"></ux-icon>\r\n      <footer>settings_brightness</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_cell\"></ux-icon>\r\n      <footer>settings_cell</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_ethernet\"></ux-icon>\r\n      <footer>settings_ethernet</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_input_antenna\"></ux-icon>\r\n      <footer>settings_input_antenna</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_input_component\"></ux-icon>\r\n      <footer>settings_input_component</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_input_composite\"></ux-icon>\r\n      <footer>settings_input_composite</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_input_hdmi\"></ux-icon>\r\n      <footer>settings_input_hdmi</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_input_svideo\"></ux-icon>\r\n      <footer>settings_input_svideo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_overscan\"></ux-icon>\r\n      <footer>settings_overscan</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_phone\"></ux-icon>\r\n      <footer>settings_phone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_power\"></ux-icon>\r\n      <footer>settings_power</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_remote\"></ux-icon>\r\n      <footer>settings_remote</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_voice\"></ux-icon>\r\n      <footer>settings_voice</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"shop\"></ux-icon>\r\n      <footer>shop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"shop_two\"></ux-icon>\r\n      <footer>shop_two</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"shopping_basket\"></ux-icon>\r\n      <footer>shopping_basket</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"shopping_cart\"></ux-icon>\r\n      <footer>shopping_cart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"speaker_notes\"></ux-icon>\r\n      <footer>speaker_notes</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"speaker_notes_off\"></ux-icon>\r\n      <footer>speaker_notes_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"spellcheck\"></ux-icon>\r\n      <footer>spellcheck</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stars\"></ux-icon>\r\n      <footer>stars</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"store\"></ux-icon>\r\n      <footer>store</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"subject\"></ux-icon>\r\n      <footer>subject</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"supervisor_account\"></ux-icon>\r\n      <footer>supervisor_account</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"swap_horiz\"></ux-icon>\r\n      <footer>swap_horiz</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"swap_vert\"></ux-icon>\r\n      <footer>swap_vert</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"swap_vertical_circle\"></ux-icon>\r\n      <footer>swap_vertical_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"system_update_alt\"></ux-icon>\r\n      <footer>system_update_alt</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tab\"></ux-icon>\r\n      <footer>tab</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tab_unselected\"></ux-icon>\r\n      <footer>tab_unselected</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"theaters\"></ux-icon>\r\n      <footer>theaters</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"thumb_down\"></ux-icon>\r\n      <footer>thumb_down</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"thumb_up\"></ux-icon>\r\n      <footer>thumb_up</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"thumbs_up_down\"></ux-icon>\r\n      <footer>thumbs_up_down</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"timeline\"></ux-icon>\r\n      <footer>timeline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"toc\"></ux-icon>\r\n      <footer>toc</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"today\"></ux-icon>\r\n      <footer>today</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"toll\"></ux-icon>\r\n      <footer>toll</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"touch_app\"></ux-icon>\r\n      <footer>touch_app</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"track_changes\"></ux-icon>\r\n      <footer>track_changes</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"translate\"></ux-icon>\r\n      <footer>translate</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"trending_down\"></ux-icon>\r\n      <footer>trending_down</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"trending_flat\"></ux-icon>\r\n      <footer>trending_flat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"trending_up\"></ux-icon>\r\n      <footer>trending_up</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"turned_in\"></ux-icon>\r\n      <footer>turned_in</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"turned_in_not\"></ux-icon>\r\n      <footer>turned_in_not</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"update\"></ux-icon>\r\n      <footer>update</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"verified_user\"></ux-icon>\r\n      <footer>verified_user</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_agenda\"></ux-icon>\r\n      <footer>view_agenda</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_array\"></ux-icon>\r\n      <footer>view_array</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_carousel\"></ux-icon>\r\n      <footer>view_carousel</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_column\"></ux-icon>\r\n      <footer>view_column</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_day\"></ux-icon>\r\n      <footer>view_day</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_headline\"></ux-icon>\r\n      <footer>view_headline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_list\"></ux-icon>\r\n      <footer>view_list</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_module\"></ux-icon>\r\n      <footer>view_module</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_quilt\"></ux-icon>\r\n      <footer>view_quilt</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_stream\"></ux-icon>\r\n      <footer>view_stream</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_week\"></ux-icon>\r\n      <footer>view_week</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"visibility\"></ux-icon>\r\n      <footer>visibility</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"visibility_off\"></ux-icon>\r\n      <footer>visibility_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"watch_later\"></ux-icon>\r\n      <footer>watch_later</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"work\"></ux-icon>\r\n      <footer>work</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"youtube_searched_for\"></ux-icon>\r\n      <footer>youtube_searched_for</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"zoom_in\"></ux-icon>\r\n      <footer>zoom_in</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"zoom_out\"></ux-icon>\r\n      <footer>zoom_out</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_alert\"></ux-icon>\r\n      <footer>add_alert</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"error\"></ux-icon>\r\n      <footer>error</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"error_outline\"></ux-icon>\r\n      <footer>error_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"warning\"></ux-icon>\r\n      <footer>warning</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_to_queue\"></ux-icon>\r\n      <footer>add_to_queue</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airplay\"></ux-icon>\r\n      <footer>airplay</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"album\"></ux-icon>\r\n      <footer>album</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"art_track\"></ux-icon>\r\n      <footer>art_track</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"av_timer\"></ux-icon>\r\n      <footer>av_timer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"branding_watermark\"></ux-icon>\r\n      <footer>branding_watermark</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_to_action\"></ux-icon>\r\n      <footer>call_to_action</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"closed_caption\"></ux-icon>\r\n      <footer>closed_caption</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"equalizer\"></ux-icon>\r\n      <footer>equalizer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"explicit\"></ux-icon>\r\n      <footer>explicit</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fast_forward\"></ux-icon>\r\n      <footer>fast_forward</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fast_rewind\"></ux-icon>\r\n      <footer>fast_rewind</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"featured_play_list\"></ux-icon>\r\n      <footer>featured_play_list</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"featured_video\"></ux-icon>\r\n      <footer>featured_video</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fiber_dvr\"></ux-icon>\r\n      <footer>fiber_dvr</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fiber_manual_record\"></ux-icon>\r\n      <footer>fiber_manual_record</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fiber_new\"></ux-icon>\r\n      <footer>fiber_new</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fiber_pin\"></ux-icon>\r\n      <footer>fiber_pin</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fiber_smart_record\"></ux-icon>\r\n      <footer>fiber_smart_record</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"forward_10\"></ux-icon>\r\n      <footer>forward_10</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"forward_30\"></ux-icon>\r\n      <footer>forward_30</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"forward_5\"></ux-icon>\r\n      <footer>forward_5</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"games\"></ux-icon>\r\n      <footer>games</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hd\"></ux-icon>\r\n      <footer>hd</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hearing\"></ux-icon>\r\n      <footer>hearing</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"high_quality\"></ux-icon>\r\n      <footer>high_quality</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"library_add\"></ux-icon>\r\n      <footer>library_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"library_books\"></ux-icon>\r\n      <footer>library_books</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"library_music\"></ux-icon>\r\n      <footer>library_music</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"loop\"></ux-icon>\r\n      <footer>loop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mic\"></ux-icon>\r\n      <footer>mic</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mic_none\"></ux-icon>\r\n      <footer>mic_none</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mic_off\"></ux-icon>\r\n      <footer>mic_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"movie\"></ux-icon>\r\n      <footer>movie</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"music_video\"></ux-icon>\r\n      <footer>music_video</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"new_releases\"></ux-icon>\r\n      <footer>new_releases</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"not_interested\"></ux-icon>\r\n      <footer>not_interested</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"note\"></ux-icon>\r\n      <footer>note</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pause\"></ux-icon>\r\n      <footer>pause</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pause_circle_filled\"></ux-icon>\r\n      <footer>pause_circle_filled</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pause_circle_outline\"></ux-icon>\r\n      <footer>pause_circle_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"play_arrow\"></ux-icon>\r\n      <footer>play_arrow</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"play_circle_filled\"></ux-icon>\r\n      <footer>play_circle_filled</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"play_circle_outline\"></ux-icon>\r\n      <footer>play_circle_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"playlist_add\"></ux-icon>\r\n      <footer>playlist_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"playlist_add_check\"></ux-icon>\r\n      <footer>playlist_add_check</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"playlist_play\"></ux-icon>\r\n      <footer>playlist_play</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"queue\"></ux-icon>\r\n      <footer>queue</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"queue_music\"></ux-icon>\r\n      <footer>queue_music</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"queue_play_next\"></ux-icon>\r\n      <footer>queue_play_next</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"radio\"></ux-icon>\r\n      <footer>radio</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"recent_actors\"></ux-icon>\r\n      <footer>recent_actors</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"remove_from_queue\"></ux-icon>\r\n      <footer>remove_from_queue</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"repeat\"></ux-icon>\r\n      <footer>repeat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"repeat_one\"></ux-icon>\r\n      <footer>repeat_one</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"replay_10\"></ux-icon>\r\n      <footer>replay_10</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"replay\"></ux-icon>\r\n      <footer>replay</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"replay_30\"></ux-icon>\r\n      <footer>replay_30</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"replay_5\"></ux-icon>\r\n      <footer>replay_5</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"shuffle\"></ux-icon>\r\n      <footer>shuffle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"skip_next\"></ux-icon>\r\n      <footer>skip_next</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"skip_previous\"></ux-icon>\r\n      <footer>skip_previous</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"slow_motion_video\"></ux-icon>\r\n      <footer>slow_motion_video</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"snooze\"></ux-icon>\r\n      <footer>snooze</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sort_by_alpha\"></ux-icon>\r\n      <footer>sort_by_alpha</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stop\"></ux-icon>\r\n      <footer>stop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"subscriptions\"></ux-icon>\r\n      <footer>subscriptions</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"subtitles\"></ux-icon>\r\n      <footer>subtitles</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"surround_sound\"></ux-icon>\r\n      <footer>surround_sound</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"video_call\"></ux-icon>\r\n      <footer>video_call</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"video_label\"></ux-icon>\r\n      <footer>video_label</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"video_library\"></ux-icon>\r\n      <footer>video_library</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"videocam\"></ux-icon>\r\n      <footer>videocam</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"videocam_off\"></ux-icon>\r\n      <footer>videocam_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"volume_down\"></ux-icon>\r\n      <footer>volume_down</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"volume_mute\"></ux-icon>\r\n      <footer>volume_mute</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"volume_off\"></ux-icon>\r\n      <footer>volume_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"volume_up\"></ux-icon>\r\n      <footer>volume_up</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"web\"></ux-icon>\r\n      <footer>web</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"web_asset\"></ux-icon>\r\n      <footer>web_asset</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"business\"></ux-icon>\r\n      <footer>business</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call\"></ux-icon>\r\n      <footer>call</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_end\"></ux-icon>\r\n      <footer>call_end</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_made\"></ux-icon>\r\n      <footer>call_made</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_merge\"></ux-icon>\r\n      <footer>call_merge</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_missed\"></ux-icon>\r\n      <footer>call_missed</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_missed_outgoing\"></ux-icon>\r\n      <footer>call_missed_outgoing</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_received\"></ux-icon>\r\n      <footer>call_received</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_split\"></ux-icon>\r\n      <footer>call_split</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"chat\"></ux-icon>\r\n      <footer>chat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"chat_bubble\"></ux-icon>\r\n      <footer>chat_bubble</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"chat_bubble_outline\"></ux-icon>\r\n      <footer>chat_bubble_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"clear_all\"></ux-icon>\r\n      <footer>clear_all</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"comment\"></ux-icon>\r\n      <footer>comment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"contact_mail\"></ux-icon>\r\n      <footer>contact_mail</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"contact_phone\"></ux-icon>\r\n      <footer>contact_phone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"contacts\"></ux-icon>\r\n      <footer>contacts</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dialer_sip\"></ux-icon>\r\n      <footer>dialer_sip</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dialpad\"></ux-icon>\r\n      <footer>dialpad</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"email\"></ux-icon>\r\n      <footer>email</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"forum\"></ux-icon>\r\n      <footer>forum</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"import_contacts\"></ux-icon>\r\n      <footer>import_contacts</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"import_export\"></ux-icon>\r\n      <footer>import_export</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"invert_colors_off\"></ux-icon>\r\n      <footer>invert_colors_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"live_help\"></ux-icon>\r\n      <footer>live_help</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"location_off\"></ux-icon>\r\n      <footer>location_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"location_on\"></ux-icon>\r\n      <footer>location_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mail_outline\"></ux-icon>\r\n      <footer>mail_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"message\"></ux-icon>\r\n      <footer>message</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"no_sim\"></ux-icon>\r\n      <footer>no_sim</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone\"></ux-icon>\r\n      <footer>phone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phonelink_erase\"></ux-icon>\r\n      <footer>phonelink_erase</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phonelink_lock\"></ux-icon>\r\n      <footer>phonelink_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phonelink_ring\"></ux-icon>\r\n      <footer>phonelink_ring</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phonelink_setup\"></ux-icon>\r\n      <footer>phonelink_setup</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"portable_wifi_off\"></ux-icon>\r\n      <footer>portable_wifi_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"present_to_all\"></ux-icon>\r\n      <footer>present_to_all</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"ring_volume\"></ux-icon>\r\n      <footer>ring_volume</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rss_feed\"></ux-icon>\r\n      <footer>rss_feed</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"screen_share\"></ux-icon>\r\n      <footer>screen_share</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"speaker_phone\"></ux-icon>\r\n      <footer>speaker_phone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stay_current_landscape\"></ux-icon>\r\n      <footer>stay_current_landscape</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stay_current_portrait\"></ux-icon>\r\n      <footer>stay_current_portrait</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stay_primary_landscape\"></ux-icon>\r\n      <footer>stay_primary_landscape</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stay_primary_portrait\"></ux-icon>\r\n      <footer>stay_primary_portrait</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stop_screen_share\"></ux-icon>\r\n      <footer>stop_screen_share</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"swap_calls\"></ux-icon>\r\n      <footer>swap_calls</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"textsms\"></ux-icon>\r\n      <footer>textsms</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"voicemail\"></ux-icon>\r\n      <footer>voicemail</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vpn_key\"></ux-icon>\r\n      <footer>vpn_key</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add\"></ux-icon>\r\n      <footer>add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_box\"></ux-icon>\r\n      <footer>add_box</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_circle\"></ux-icon>\r\n      <footer>add_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_circle_outline\"></ux-icon>\r\n      <footer>add_circle_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"archive\"></ux-icon>\r\n      <footer>archive</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"backspace\"></ux-icon>\r\n      <footer>backspace</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"block\"></ux-icon>\r\n      <footer>block</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"clear\"></ux-icon>\r\n      <footer>clear</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"content_copy\"></ux-icon>\r\n      <footer>content_copy</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"content_cut\"></ux-icon>\r\n      <footer>content_cut</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"content_paste\"></ux-icon>\r\n      <footer>content_paste</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"create\"></ux-icon>\r\n      <footer>create</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"delete_sweep\"></ux-icon>\r\n      <footer>delete_sweep</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"drafts\"></ux-icon>\r\n      <footer>drafts</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_list\"></ux-icon>\r\n      <footer>filter_list</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flag\"></ux-icon>\r\n      <footer>flag</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"font_download\"></ux-icon>\r\n      <footer>font_download</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"forward\"></ux-icon>\r\n      <footer>forward</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gesture\"></ux-icon>\r\n      <footer>gesture</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"inbox\"></ux-icon>\r\n      <footer>inbox</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"link\"></ux-icon>\r\n      <footer>link</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"low_priority\"></ux-icon>\r\n      <footer>low_priority</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mail\"></ux-icon>\r\n      <footer>mail</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"markunread\"></ux-icon>\r\n      <footer>markunread</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"move_to_inbox\"></ux-icon>\r\n      <footer>move_to_inbox</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"next_week\"></ux-icon>\r\n      <footer>next_week</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"redo\"></ux-icon>\r\n      <footer>redo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"remove\"></ux-icon>\r\n      <footer>remove</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"remove_circle\"></ux-icon>\r\n      <footer>remove_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"remove_circle_outline\"></ux-icon>\r\n      <footer>remove_circle_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"reply\"></ux-icon>\r\n      <footer>reply</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"reply_all\"></ux-icon>\r\n      <footer>reply_all</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"report\"></ux-icon>\r\n      <footer>report</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"save\"></ux-icon>\r\n      <footer>save</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"select_all\"></ux-icon>\r\n      <footer>select_all</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"send\"></ux-icon>\r\n      <footer>send</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sort\"></ux-icon>\r\n      <footer>sort</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"text_format\"></ux-icon>\r\n      <footer>text_format</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"unarchive\"></ux-icon>\r\n      <footer>unarchive</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"undo\"></ux-icon>\r\n      <footer>undo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"weekend\"></ux-icon>\r\n      <footer>weekend</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"access_alarm\"></ux-icon>\r\n      <footer>access_alarm</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"access_alarms\"></ux-icon>\r\n      <footer>access_alarms</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"access_time\"></ux-icon>\r\n      <footer>access_time</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_alarm\"></ux-icon>\r\n      <footer>add_alarm</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airplanemode_active\"></ux-icon>\r\n      <footer>airplanemode_active</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airplanemode_inactive\"></ux-icon>\r\n      <footer>airplanemode_inactive</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_20\"></ux-icon>\r\n      <footer>battery_20</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_30\"></ux-icon>\r\n      <footer>battery_30</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_50\"></ux-icon>\r\n      <footer>battery_50</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_60\"></ux-icon>\r\n      <footer>battery_60</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_80\"></ux-icon>\r\n      <footer>battery_80</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_90\"></ux-icon>\r\n      <footer>battery_90</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_alert\"></ux-icon>\r\n      <footer>battery_alert</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_20\"></ux-icon>\r\n      <footer>battery_charging_20</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_30\"></ux-icon>\r\n      <footer>battery_charging_30</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_50\"></ux-icon>\r\n      <footer>battery_charging_50</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_60\"></ux-icon>\r\n      <footer>battery_charging_60</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_80\"></ux-icon>\r\n      <footer>battery_charging_80</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_90\"></ux-icon>\r\n      <footer>battery_charging_90</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_full\"></ux-icon>\r\n      <footer>battery_charging_full</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_full\"></ux-icon>\r\n      <footer>battery_full</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_std\"></ux-icon>\r\n      <footer>battery_std</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_unknown\"></ux-icon>\r\n      <footer>battery_unknown</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bluetooth\"></ux-icon>\r\n      <footer>bluetooth</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bluetooth_connected\"></ux-icon>\r\n      <footer>bluetooth_connected</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bluetooth_disabled\"></ux-icon>\r\n      <footer>bluetooth_disabled</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bluetooth_searching\"></ux-icon>\r\n      <footer>bluetooth_searching</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_auto\"></ux-icon>\r\n      <footer>brightness_auto</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_high\"></ux-icon>\r\n      <footer>brightness_high</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_low\"></ux-icon>\r\n      <footer>brightness_low</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_medium\"></ux-icon>\r\n      <footer>brightness_medium</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"data_usage\"></ux-icon>\r\n      <footer>data_usage</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"developer_mode\"></ux-icon>\r\n      <footer>developer_mode</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"devices\"></ux-icon>\r\n      <footer>devices</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dvr\"></ux-icon>\r\n      <footer>dvr</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gps_fixed\"></ux-icon>\r\n      <footer>gps_fixed</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gps_not_fixed\"></ux-icon>\r\n      <footer>gps_not_fixed</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gps_off\"></ux-icon>\r\n      <footer>gps_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"graphic_eq\"></ux-icon>\r\n      <footer>graphic_eq</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"location_disabled\"></ux-icon>\r\n      <footer>location_disabled</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"location_searching\"></ux-icon>\r\n      <footer>location_searching</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"network_cell\"></ux-icon>\r\n      <footer>network_cell</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"network_wifi\"></ux-icon>\r\n      <footer>network_wifi</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"nfc\"></ux-icon>\r\n      <footer>nfc</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"screen_lock_landscape\"></ux-icon>\r\n      <footer>screen_lock_landscape</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"screen_lock_portrait\"></ux-icon>\r\n      <footer>screen_lock_portrait</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"screen_lock_rotation\"></ux-icon>\r\n      <footer>screen_lock_rotation</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"screen_rotation\"></ux-icon>\r\n      <footer>screen_rotation</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sd_storage\"></ux-icon>\r\n      <footer>sd_storage</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_system_daydream\"></ux-icon>\r\n      <footer>settings_system_daydream</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_0_bar\"></ux-icon>\r\n      <footer>signal_cellular_0_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_1_bar\"></ux-icon>\r\n      <footer>signal_cellular_1_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_2_bar\"></ux-icon>\r\n      <footer>signal_cellular_2_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_3_bar\"></ux-icon>\r\n      <footer>signal_cellular_3_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_4_bar\"></ux-icon>\r\n      <footer>signal_cellular_4_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_connected_no_internet_0_bar\"></ux-icon>\r\n      <footer>signal_cellular_connected_no_internet_0_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_connected_no_internet_1_bar\"></ux-icon>\r\n      <footer>signal_cellular_connected_no_internet_1_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_connected_no_internet_2_bar\"></ux-icon>\r\n      <footer>signal_cellular_connected_no_internet_2_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_connected_no_internet_3_bar\"></ux-icon>\r\n      <footer>signal_cellular_connected_no_internet_3_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_connected_no_internet_4_bar\"></ux-icon>\r\n      <footer>signal_cellular_connected_no_internet_4_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_no_sim\"></ux-icon>\r\n      <footer>signal_cellular_no_sim</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_null\"></ux-icon>\r\n      <footer>signal_cellular_null</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_off\"></ux-icon>\r\n      <footer>signal_cellular_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_0_bar\"></ux-icon>\r\n      <footer>signal_wifi_0_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_1_bar\"></ux-icon>\r\n      <footer>signal_wifi_1_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_1_bar_lock\"></ux-icon>\r\n      <footer>signal_wifi_1_bar_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_2_bar\"></ux-icon>\r\n      <footer>signal_wifi_2_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_2_bar_lock\"></ux-icon>\r\n      <footer>signal_wifi_2_bar_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_3_bar\"></ux-icon>\r\n      <footer>signal_wifi_3_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_3_bar_lock\"></ux-icon>\r\n      <footer>signal_wifi_3_bar_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_4_bar\"></ux-icon>\r\n      <footer>signal_wifi_4_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_4_bar_lock\"></ux-icon>\r\n      <footer>signal_wifi_4_bar_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_off\"></ux-icon>\r\n      <footer>signal_wifi_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"storage\"></ux-icon>\r\n      <footer>storage</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"usb\"></ux-icon>\r\n      <footer>usb</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wallpaper\"></ux-icon>\r\n      <footer>wallpaper</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"widgets\"></ux-icon>\r\n      <footer>widgets</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wifi_lock\"></ux-icon>\r\n      <footer>wifi_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wifi_tethering\"></ux-icon>\r\n      <footer>wifi_tethering</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"attach_file\"></ux-icon>\r\n      <footer>attach_file</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"attach_money\"></ux-icon>\r\n      <footer>attach_money</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_all\"></ux-icon>\r\n      <footer>border_all</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_bottom\"></ux-icon>\r\n      <footer>border_bottom</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_clear\"></ux-icon>\r\n      <footer>border_clear</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_color\"></ux-icon>\r\n      <footer>border_color</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_horizontal\"></ux-icon>\r\n      <footer>border_horizontal</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_inner\"></ux-icon>\r\n      <footer>border_inner</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_left\"></ux-icon>\r\n      <footer>border_left</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_outer\"></ux-icon>\r\n      <footer>border_outer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_right\"></ux-icon>\r\n      <footer>border_right</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_style\"></ux-icon>\r\n      <footer>border_style</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_top\"></ux-icon>\r\n      <footer>border_top</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_vertical\"></ux-icon>\r\n      <footer>border_vertical</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bubble_chart\"></ux-icon>\r\n      <footer>bubble_chart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"drag_handle\"></ux-icon>\r\n      <footer>drag_handle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_align_center\"></ux-icon>\r\n      <footer>format_align_center</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_align_justify\"></ux-icon>\r\n      <footer>format_align_justify</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_align_left\"></ux-icon>\r\n      <footer>format_align_left</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_align_right\"></ux-icon>\r\n      <footer>format_align_right</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_bold\"></ux-icon>\r\n      <footer>format_bold</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_clear\"></ux-icon>\r\n      <footer>format_clear</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_color_fill\"></ux-icon>\r\n      <footer>format_color_fill</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_color_reset\"></ux-icon>\r\n      <footer>format_color_reset</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_color_text\"></ux-icon>\r\n      <footer>format_color_text</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_indent_decrease\"></ux-icon>\r\n      <footer>format_indent_decrease</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_indent_increase\"></ux-icon>\r\n      <footer>format_indent_increase</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_italic\"></ux-icon>\r\n      <footer>format_italic</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_line_spacing\"></ux-icon>\r\n      <footer>format_line_spacing</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_list_bulleted\"></ux-icon>\r\n      <footer>format_list_bulleted</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_list_numbered\"></ux-icon>\r\n      <footer>format_list_numbered</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_paint\"></ux-icon>\r\n      <footer>format_paint</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_quote\"></ux-icon>\r\n      <footer>format_quote</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_shapes\"></ux-icon>\r\n      <footer>format_shapes</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_size\"></ux-icon>\r\n      <footer>format_size</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_strikethrough\"></ux-icon>\r\n      <footer>format_strikethrough</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_textdirection_l_to_r\"></ux-icon>\r\n      <footer>format_textdirection_l_to_r</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_textdirection_r_to_l\"></ux-icon>\r\n      <footer>format_textdirection_r_to_l</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_underlined\"></ux-icon>\r\n      <footer>format_underlined</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"functions\"></ux-icon>\r\n      <footer>functions</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"highlight\"></ux-icon>\r\n      <footer>highlight</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_chart\"></ux-icon>\r\n      <footer>insert_chart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_comment\"></ux-icon>\r\n      <footer>insert_comment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_drive_file\"></ux-icon>\r\n      <footer>insert_drive_file</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_emoticon\"></ux-icon>\r\n      <footer>insert_emoticon</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_invitation\"></ux-icon>\r\n      <footer>insert_invitation</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_link\"></ux-icon>\r\n      <footer>insert_link</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_photo\"></ux-icon>\r\n      <footer>insert_photo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"linear_scale\"></ux-icon>\r\n      <footer>linear_scale</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"merge_type\"></ux-icon>\r\n      <footer>merge_type</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mode_comment\"></ux-icon>\r\n      <footer>mode_comment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mode_edit\"></ux-icon>\r\n      <footer>mode_edit</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"monetization_on\"></ux-icon>\r\n      <footer>monetization_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"money_off\"></ux-icon>\r\n      <footer>money_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"multiline_chart\"></ux-icon>\r\n      <footer>multiline_chart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pie_chart\"></ux-icon>\r\n      <footer>pie_chart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pie_chart_outlined\"></ux-icon>\r\n      <footer>pie_chart_outlined</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"publish\"></ux-icon>\r\n      <footer>publish</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"short_text\"></ux-icon>\r\n      <footer>short_text</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"show_chart\"></ux-icon>\r\n      <footer>show_chart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"space_bar\"></ux-icon>\r\n      <footer>space_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"strikethrough_s\"></ux-icon>\r\n      <footer>strikethrough_s</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"text_fields\"></ux-icon>\r\n      <footer>text_fields</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"title\"></ux-icon>\r\n      <footer>title</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vertical_align_bottom\"></ux-icon>\r\n      <footer>vertical_align_bottom</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vertical_align_center\"></ux-icon>\r\n      <footer>vertical_align_center</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vertical_align_top\"></ux-icon>\r\n      <footer>vertical_align_top</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wrap_text\"></ux-icon>\r\n      <footer>wrap_text</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"attachment\"></ux-icon>\r\n      <footer>attachment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud\"></ux-icon>\r\n      <footer>cloud</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud_circle\"></ux-icon>\r\n      <footer>cloud_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud_done\"></ux-icon>\r\n      <footer>cloud_done</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud_download\"></ux-icon>\r\n      <footer>cloud_download</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud_off\"></ux-icon>\r\n      <footer>cloud_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud_queue\"></ux-icon>\r\n      <footer>cloud_queue</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud_upload\"></ux-icon>\r\n      <footer>cloud_upload</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"create_new_folder\"></ux-icon>\r\n      <footer>create_new_folder</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"file_download\"></ux-icon>\r\n      <footer>file_download</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"file_upload\"></ux-icon>\r\n      <footer>file_upload</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"folder\"></ux-icon>\r\n      <footer>folder</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"folder_open\"></ux-icon>\r\n      <footer>folder_open</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"folder_shared\"></ux-icon>\r\n      <footer>folder_shared</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cast\"></ux-icon>\r\n      <footer>cast</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cast_connected\"></ux-icon>\r\n      <footer>cast_connected</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"computer\"></ux-icon>\r\n      <footer>computer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"desktop_mac\"></ux-icon>\r\n      <footer>desktop_mac</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"desktop_windows\"></ux-icon>\r\n      <footer>desktop_windows</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"developer_board\"></ux-icon>\r\n      <footer>developer_board</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"device_hub\"></ux-icon>\r\n      <footer>device_hub</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"devices_other\"></ux-icon>\r\n      <footer>devices_other</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dock\"></ux-icon>\r\n      <footer>dock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gamepad\"></ux-icon>\r\n      <footer>gamepad</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"headset\"></ux-icon>\r\n      <footer>headset</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"headset_mic\"></ux-icon>\r\n      <footer>headset_mic</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard\"></ux-icon>\r\n      <footer>keyboard</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_arrow_down\"></ux-icon>\r\n      <footer>keyboard_arrow_down</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_arrow_left\"></ux-icon>\r\n      <footer>keyboard_arrow_left</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_arrow_right\"></ux-icon>\r\n      <footer>keyboard_arrow_right</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_arrow_up\"></ux-icon>\r\n      <footer>keyboard_arrow_up</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_backspace\"></ux-icon>\r\n      <footer>keyboard_backspace</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_capslock\"></ux-icon>\r\n      <footer>keyboard_capslock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_hide\"></ux-icon>\r\n      <footer>keyboard_hide</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_return\"></ux-icon>\r\n      <footer>keyboard_return</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_tab\"></ux-icon>\r\n      <footer>keyboard_tab</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_voice\"></ux-icon>\r\n      <footer>keyboard_voice</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"laptop\"></ux-icon>\r\n      <footer>laptop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"laptop_chromebook\"></ux-icon>\r\n      <footer>laptop_chromebook</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"laptop_mac\"></ux-icon>\r\n      <footer>laptop_mac</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"laptop_windows\"></ux-icon>\r\n      <footer>laptop_windows</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"memory\"></ux-icon>\r\n      <footer>memory</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mouse\"></ux-icon>\r\n      <footer>mouse</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_android\"></ux-icon>\r\n      <footer>phone_android</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_iphone\"></ux-icon>\r\n      <footer>phone_iphone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phonelink\"></ux-icon>\r\n      <footer>phonelink</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phonelink_off\"></ux-icon>\r\n      <footer>phonelink_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"power_input\"></ux-icon>\r\n      <footer>power_input</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"router\"></ux-icon>\r\n      <footer>router</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"scanner\"></ux-icon>\r\n      <footer>scanner</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"security\"></ux-icon>\r\n      <footer>security</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sim_card\"></ux-icon>\r\n      <footer>sim_card</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"smartphone\"></ux-icon>\r\n      <footer>smartphone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"speaker\"></ux-icon>\r\n      <footer>speaker</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"speaker_group\"></ux-icon>\r\n      <footer>speaker_group</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tablet\"></ux-icon>\r\n      <footer>tablet</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tablet_android\"></ux-icon>\r\n      <footer>tablet_android</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tablet_mac\"></ux-icon>\r\n      <footer>tablet_mac</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"toys\"></ux-icon>\r\n      <footer>toys</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tv\"></ux-icon>\r\n      <footer>tv</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"videogame_asset\"></ux-icon>\r\n      <footer>videogame_asset</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"watch\"></ux-icon>\r\n      <footer>watch</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_a_photo\"></ux-icon>\r\n      <footer>add_a_photo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_to_photos\"></ux-icon>\r\n      <footer>add_to_photos</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"adjust\"></ux-icon>\r\n      <footer>adjust</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assistant\"></ux-icon>\r\n      <footer>assistant</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assistant_photo\"></ux-icon>\r\n      <footer>assistant_photo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"audiotrack\"></ux-icon>\r\n      <footer>audiotrack</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"blur_circular\"></ux-icon>\r\n      <footer>blur_circular</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"blur_linear\"></ux-icon>\r\n      <footer>blur_linear</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"blur_off\"></ux-icon>\r\n      <footer>blur_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"blur_on\"></ux-icon>\r\n      <footer>blur_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_1\"></ux-icon>\r\n      <footer>brightness_1</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_2\"></ux-icon>\r\n      <footer>brightness_2</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_3\"></ux-icon>\r\n      <footer>brightness_3</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_4\"></ux-icon>\r\n      <footer>brightness_4</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_5\"></ux-icon>\r\n      <footer>brightness_5</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_6\"></ux-icon>\r\n      <footer>brightness_6</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_7\"></ux-icon>\r\n      <footer>brightness_7</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"broken_image\"></ux-icon>\r\n      <footer>broken_image</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brush\"></ux-icon>\r\n      <footer>brush</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"burst_mode\"></ux-icon>\r\n      <footer>burst_mode</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"camera\"></ux-icon>\r\n      <footer>camera</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"camera_alt\"></ux-icon>\r\n      <footer>camera_alt</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"camera_front\"></ux-icon>\r\n      <footer>camera_front</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"camera_rear\"></ux-icon>\r\n      <footer>camera_rear</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"camera_roll\"></ux-icon>\r\n      <footer>camera_roll</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"center_focus_strong\"></ux-icon>\r\n      <footer>center_focus_strong</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"center_focus_weak\"></ux-icon>\r\n      <footer>center_focus_weak</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"collections\"></ux-icon>\r\n      <footer>collections</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"collections_bookmark\"></ux-icon>\r\n      <footer>collections_bookmark</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"color_lens\"></ux-icon>\r\n      <footer>color_lens</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"colorize\"></ux-icon>\r\n      <footer>colorize</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"compare\"></ux-icon>\r\n      <footer>compare</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"control_point\"></ux-icon>\r\n      <footer>control_point</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"control_point_duplicate\"></ux-icon>\r\n      <footer>control_point_duplicate</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_16_9\"></ux-icon>\r\n      <footer>crop_16_9</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop\"></ux-icon>\r\n      <footer>crop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_3_2\"></ux-icon>\r\n      <footer>crop_3_2</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_5_4\"></ux-icon>\r\n      <footer>crop_5_4</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_7_5\"></ux-icon>\r\n      <footer>crop_7_5</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_din\"></ux-icon>\r\n      <footer>crop_din</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_free\"></ux-icon>\r\n      <footer>crop_free</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_landscape\"></ux-icon>\r\n      <footer>crop_landscape</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_original\"></ux-icon>\r\n      <footer>crop_original</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_portrait\"></ux-icon>\r\n      <footer>crop_portrait</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_rotate\"></ux-icon>\r\n      <footer>crop_rotate</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_square\"></ux-icon>\r\n      <footer>crop_square</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dehaze\"></ux-icon>\r\n      <footer>dehaze</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"details\"></ux-icon>\r\n      <footer>details</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"edit\"></ux-icon>\r\n      <footer>edit</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exposure\"></ux-icon>\r\n      <footer>exposure</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exposure_neg_1\"></ux-icon>\r\n      <footer>exposure_neg_1</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exposure_neg_2\"></ux-icon>\r\n      <footer>exposure_neg_2</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exposure_plus_1\"></ux-icon>\r\n      <footer>exposure_plus_1</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exposure_plus_2\"></ux-icon>\r\n      <footer>exposure_plus_2</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exposure_zero\"></ux-icon>\r\n      <footer>exposure_zero</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_1\"></ux-icon>\r\n      <footer>filter_1</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter\"></ux-icon>\r\n      <footer>filter</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_2\"></ux-icon>\r\n      <footer>filter_2</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_3\"></ux-icon>\r\n      <footer>filter_3</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_4\"></ux-icon>\r\n      <footer>filter_4</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_5\"></ux-icon>\r\n      <footer>filter_5</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_6\"></ux-icon>\r\n      <footer>filter_6</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_7\"></ux-icon>\r\n      <footer>filter_7</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_8\"></ux-icon>\r\n      <footer>filter_8</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_9\"></ux-icon>\r\n      <footer>filter_9</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_9_plus\"></ux-icon>\r\n      <footer>filter_9_plus</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_b_and_w\"></ux-icon>\r\n      <footer>filter_b_and_w</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_center_focus\"></ux-icon>\r\n      <footer>filter_center_focus</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_drama\"></ux-icon>\r\n      <footer>filter_drama</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_frames\"></ux-icon>\r\n      <footer>filter_frames</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_hdr\"></ux-icon>\r\n      <footer>filter_hdr</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_none\"></ux-icon>\r\n      <footer>filter_none</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_tilt_shift\"></ux-icon>\r\n      <footer>filter_tilt_shift</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_vintage\"></ux-icon>\r\n      <footer>filter_vintage</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flare\"></ux-icon>\r\n      <footer>flare</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flash_auto\"></ux-icon>\r\n      <footer>flash_auto</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flash_off\"></ux-icon>\r\n      <footer>flash_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flash_on\"></ux-icon>\r\n      <footer>flash_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flip\"></ux-icon>\r\n      <footer>flip</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gradient\"></ux-icon>\r\n      <footer>gradient</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"grain\"></ux-icon>\r\n      <footer>grain</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"grid_off\"></ux-icon>\r\n      <footer>grid_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"grid_on\"></ux-icon>\r\n      <footer>grid_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hdr_off\"></ux-icon>\r\n      <footer>hdr_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hdr_on\"></ux-icon>\r\n      <footer>hdr_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hdr_strong\"></ux-icon>\r\n      <footer>hdr_strong</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hdr_weak\"></ux-icon>\r\n      <footer>hdr_weak</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"healing\"></ux-icon>\r\n      <footer>healing</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"image\"></ux-icon>\r\n      <footer>image</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"image_aspect_ratio\"></ux-icon>\r\n      <footer>image_aspect_ratio</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"iso\"></ux-icon>\r\n      <footer>iso</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"landscape\"></ux-icon>\r\n      <footer>landscape</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"leak_add\"></ux-icon>\r\n      <footer>leak_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"leak_remove\"></ux-icon>\r\n      <footer>leak_remove</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"lens\"></ux-icon>\r\n      <footer>lens</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"linked_camera\"></ux-icon>\r\n      <footer>linked_camera</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks\"></ux-icon>\r\n      <footer>looks</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks_3\"></ux-icon>\r\n      <footer>looks_3</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks_4\"></ux-icon>\r\n      <footer>looks_4</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks_5\"></ux-icon>\r\n      <footer>looks_5</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks_6\"></ux-icon>\r\n      <footer>looks_6</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks_one\"></ux-icon>\r\n      <footer>looks_one</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks_two\"></ux-icon>\r\n      <footer>looks_two</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"loupe\"></ux-icon>\r\n      <footer>loupe</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"monochrome_photos\"></ux-icon>\r\n      <footer>monochrome_photos</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"movie_creation\"></ux-icon>\r\n      <footer>movie_creation</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"movie_filter\"></ux-icon>\r\n      <footer>movie_filter</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"music_note\"></ux-icon>\r\n      <footer>music_note</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"nature\"></ux-icon>\r\n      <footer>nature</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"nature_people\"></ux-icon>\r\n      <footer>nature_people</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"navigate_before\"></ux-icon>\r\n      <footer>navigate_before</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"navigate_next\"></ux-icon>\r\n      <footer>navigate_next</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"palette\"></ux-icon>\r\n      <footer>palette</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"panorama\"></ux-icon>\r\n      <footer>panorama</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"panorama_fish_eye\"></ux-icon>\r\n      <footer>panorama_fish_eye</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"panorama_horizontal\"></ux-icon>\r\n      <footer>panorama_horizontal</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"panorama_vertical\"></ux-icon>\r\n      <footer>panorama_vertical</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"panorama_wide_angle\"></ux-icon>\r\n      <footer>panorama_wide_angle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo\"></ux-icon>\r\n      <footer>photo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_album\"></ux-icon>\r\n      <footer>photo_album</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_camera\"></ux-icon>\r\n      <footer>photo_camera</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_filter\"></ux-icon>\r\n      <footer>photo_filter</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_library\"></ux-icon>\r\n      <footer>photo_library</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_size_select_actual\"></ux-icon>\r\n      <footer>photo_size_select_actual</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_size_select_large\"></ux-icon>\r\n      <footer>photo_size_select_large</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_size_select_small\"></ux-icon>\r\n      <footer>photo_size_select_small</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"picture_as_pdf\"></ux-icon>\r\n      <footer>picture_as_pdf</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"portrait\"></ux-icon>\r\n      <footer>portrait</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"remove_red_eye\"></ux-icon>\r\n      <footer>remove_red_eye</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rotate_90_degrees_ccw\"></ux-icon>\r\n      <footer>rotate_90_degrees_ccw</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rotate_left\"></ux-icon>\r\n      <footer>rotate_left</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rotate_right\"></ux-icon>\r\n      <footer>rotate_right</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"slideshow\"></ux-icon>\r\n      <footer>slideshow</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"straighten\"></ux-icon>\r\n      <footer>straighten</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"style\"></ux-icon>\r\n      <footer>style</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"switch_camera\"></ux-icon>\r\n      <footer>switch_camera</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"switch_video\"></ux-icon>\r\n      <footer>switch_video</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tag_faces\"></ux-icon>\r\n      <footer>tag_faces</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"texture\"></ux-icon>\r\n      <footer>texture</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"timelapse\"></ux-icon>\r\n      <footer>timelapse</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"timer_10\"></ux-icon>\r\n      <footer>timer_10</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"timer\"></ux-icon>\r\n      <footer>timer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"timer_3\"></ux-icon>\r\n      <footer>timer_3</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"timer_off\"></ux-icon>\r\n      <footer>timer_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tonality\"></ux-icon>\r\n      <footer>tonality</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"transform\"></ux-icon>\r\n      <footer>transform</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tune\"></ux-icon>\r\n      <footer>tune</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_comfy\"></ux-icon>\r\n      <footer>view_comfy</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_compact\"></ux-icon>\r\n      <footer>view_compact</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vignette\"></ux-icon>\r\n      <footer>vignette</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wb_auto\"></ux-icon>\r\n      <footer>wb_auto</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wb_cloudy\"></ux-icon>\r\n      <footer>wb_cloudy</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wb_incandescent\"></ux-icon>\r\n      <footer>wb_incandescent</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wb_iridescent\"></ux-icon>\r\n      <footer>wb_iridescent</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wb_sunny\"></ux-icon>\r\n      <footer>wb_sunny</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_location\"></ux-icon>\r\n      <footer>add_location</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"beenhere\"></ux-icon>\r\n      <footer>beenhere</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions\"></ux-icon>\r\n      <footer>directions</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_bike\"></ux-icon>\r\n      <footer>directions_bike</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_boat\"></ux-icon>\r\n      <footer>directions_boat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_bus\"></ux-icon>\r\n      <footer>directions_bus</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_car\"></ux-icon>\r\n      <footer>directions_car</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_railway\"></ux-icon>\r\n      <footer>directions_railway</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_run\"></ux-icon>\r\n      <footer>directions_run</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_subway\"></ux-icon>\r\n      <footer>directions_subway</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_transit\"></ux-icon>\r\n      <footer>directions_transit</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_walk\"></ux-icon>\r\n      <footer>directions_walk</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"edit_location\"></ux-icon>\r\n      <footer>edit_location</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"ev_station\"></ux-icon>\r\n      <footer>ev_station</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flight\"></ux-icon>\r\n      <footer>flight</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hotel\"></ux-icon>\r\n      <footer>hotel</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"layers\"></ux-icon>\r\n      <footer>layers</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"layers_clear\"></ux-icon>\r\n      <footer>layers_clear</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_activity\"></ux-icon>\r\n      <footer>local_activity</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_airport\"></ux-icon>\r\n      <footer>local_airport</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_atm\"></ux-icon>\r\n      <footer>local_atm</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_bar\"></ux-icon>\r\n      <footer>local_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_cafe\"></ux-icon>\r\n      <footer>local_cafe</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_car_wash\"></ux-icon>\r\n      <footer>local_car_wash</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_convenience_store\"></ux-icon>\r\n      <footer>local_convenience_store</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_dining\"></ux-icon>\r\n      <footer>local_dining</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_drink\"></ux-icon>\r\n      <footer>local_drink</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_florist\"></ux-icon>\r\n      <footer>local_florist</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_gas_station\"></ux-icon>\r\n      <footer>local_gas_station</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_grocery_store\"></ux-icon>\r\n      <footer>local_grocery_store</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_hospital\"></ux-icon>\r\n      <footer>local_hospital</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_hotel\"></ux-icon>\r\n      <footer>local_hotel</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_laundry_service\"></ux-icon>\r\n      <footer>local_laundry_service</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_library\"></ux-icon>\r\n      <footer>local_library</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_mall\"></ux-icon>\r\n      <footer>local_mall</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_movies\"></ux-icon>\r\n      <footer>local_movies</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_offer\"></ux-icon>\r\n      <footer>local_offer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_parking\"></ux-icon>\r\n      <footer>local_parking</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_pharmacy\"></ux-icon>\r\n      <footer>local_pharmacy</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_phone\"></ux-icon>\r\n      <footer>local_phone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_pizza\"></ux-icon>\r\n      <footer>local_pizza</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_play\"></ux-icon>\r\n      <footer>local_play</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_post_office\"></ux-icon>\r\n      <footer>local_post_office</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_printshop\"></ux-icon>\r\n      <footer>local_printshop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_see\"></ux-icon>\r\n      <footer>local_see</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_shipping\"></ux-icon>\r\n      <footer>local_shipping</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_taxi\"></ux-icon>\r\n      <footer>local_taxi</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"map\"></ux-icon>\r\n      <footer>map</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"my_location\"></ux-icon>\r\n      <footer>my_location</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"navigation\"></ux-icon>\r\n      <footer>navigation</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"near_me\"></ux-icon>\r\n      <footer>near_me</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"person_pin\"></ux-icon>\r\n      <footer>person_pin</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"person_pin_circle\"></ux-icon>\r\n      <footer>person_pin_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pin_drop\"></ux-icon>\r\n      <footer>pin_drop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"place\"></ux-icon>\r\n      <footer>place</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rate_review\"></ux-icon>\r\n      <footer>rate_review</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"restaurant\"></ux-icon>\r\n      <footer>restaurant</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"restaurant_menu\"></ux-icon>\r\n      <footer>restaurant_menu</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"satellite\"></ux-icon>\r\n      <footer>satellite</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"store_mall_directory\"></ux-icon>\r\n      <footer>store_mall_directory</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"streetview\"></ux-icon>\r\n      <footer>streetview</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"subway\"></ux-icon>\r\n      <footer>subway</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"terrain\"></ux-icon>\r\n      <footer>terrain</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"traffic\"></ux-icon>\r\n      <footer>traffic</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"train\"></ux-icon>\r\n      <footer>train</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tram\"></ux-icon>\r\n      <footer>tram</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"transfer_within_a_station\"></ux-icon>\r\n      <footer>transfer_within_a_station</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"zoom_out_map\"></ux-icon>\r\n      <footer>zoom_out_map</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"apps\"></ux-icon>\r\n      <footer>apps</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_back\"></ux-icon>\r\n      <footer>arrow_back</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_downward\"></ux-icon>\r\n      <footer>arrow_downward</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_drop_down\"></ux-icon>\r\n      <footer>arrow_drop_down</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_drop_down_circle\"></ux-icon>\r\n      <footer>arrow_drop_down_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_drop_up\"></ux-icon>\r\n      <footer>arrow_drop_up</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_forward\"></ux-icon>\r\n      <footer>arrow_forward</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_upward\"></ux-icon>\r\n      <footer>arrow_upward</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cancel\"></ux-icon>\r\n      <footer>cancel</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"check\"></ux-icon>\r\n      <footer>check</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"chevron_left\"></ux-icon>\r\n      <footer>chevron_left</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"chevron_right\"></ux-icon>\r\n      <footer>chevron_right</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"close\"></ux-icon>\r\n      <footer>close</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"expand_less\"></ux-icon>\r\n      <footer>expand_less</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"expand_more\"></ux-icon>\r\n      <footer>expand_more</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"first_page\"></ux-icon>\r\n      <footer>first_page</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fullscreen\"></ux-icon>\r\n      <footer>fullscreen</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fullscreen_exit\"></ux-icon>\r\n      <footer>fullscreen_exit</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"last_page\"></ux-icon>\r\n      <footer>last_page</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"menu\"></ux-icon>\r\n      <footer>menu</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"more_horiz\"></ux-icon>\r\n      <footer>more_horiz</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"more_vert\"></ux-icon>\r\n      <footer>more_vert</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"refresh\"></ux-icon>\r\n      <footer>refresh</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"subdirectory_arrow_left\"></ux-icon>\r\n      <footer>subdirectory_arrow_left</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"subdirectory_arrow_right\"></ux-icon>\r\n      <footer>subdirectory_arrow_right</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"unfold_less\"></ux-icon>\r\n      <footer>unfold_less</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"unfold_more\"></ux-icon>\r\n      <footer>unfold_more</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"adb\"></ux-icon>\r\n      <footer>adb</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_flat\"></ux-icon>\r\n      <footer>airline_seat_flat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_flat_angled\"></ux-icon>\r\n      <footer>airline_seat_flat_angled</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_individual_suite\"></ux-icon>\r\n      <footer>airline_seat_individual_suite</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_legroom_extra\"></ux-icon>\r\n      <footer>airline_seat_legroom_extra</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_legroom_normal\"></ux-icon>\r\n      <footer>airline_seat_legroom_normal</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_legroom_reduced\"></ux-icon>\r\n      <footer>airline_seat_legroom_reduced</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_recline_extra\"></ux-icon>\r\n      <footer>airline_seat_recline_extra</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_recline_normal\"></ux-icon>\r\n      <footer>airline_seat_recline_normal</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bluetooth_audio\"></ux-icon>\r\n      <footer>bluetooth_audio</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"confirmation_number\"></ux-icon>\r\n      <footer>confirmation_number</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"disc_full\"></ux-icon>\r\n      <footer>disc_full</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"do_not_disturb\"></ux-icon>\r\n      <footer>do_not_disturb</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"do_not_disturb_alt\"></ux-icon>\r\n      <footer>do_not_disturb_alt</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"do_not_disturb_off\"></ux-icon>\r\n      <footer>do_not_disturb_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"do_not_disturb_on\"></ux-icon>\r\n      <footer>do_not_disturb_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"drive_eta\"></ux-icon>\r\n      <footer>drive_eta</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"enhanced_encryption\"></ux-icon>\r\n      <footer>enhanced_encryption</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"event_available\"></ux-icon>\r\n      <footer>event_available</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"event_busy\"></ux-icon>\r\n      <footer>event_busy</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"event_note\"></ux-icon>\r\n      <footer>event_note</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"folder_special\"></ux-icon>\r\n      <footer>folder_special</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"live_tv\"></ux-icon>\r\n      <footer>live_tv</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mms\"></ux-icon>\r\n      <footer>mms</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"more\"></ux-icon>\r\n      <footer>more</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"network_check\"></ux-icon>\r\n      <footer>network_check</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"network_locked\"></ux-icon>\r\n      <footer>network_locked</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"no_encryption\"></ux-icon>\r\n      <footer>no_encryption</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"ondemand_video\"></ux-icon>\r\n      <footer>ondemand_video</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"personal_video\"></ux-icon>\r\n      <footer>personal_video</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_bluetooth_speaker\"></ux-icon>\r\n      <footer>phone_bluetooth_speaker</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_forwarded\"></ux-icon>\r\n      <footer>phone_forwarded</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_in_talk\"></ux-icon>\r\n      <footer>phone_in_talk</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_locked\"></ux-icon>\r\n      <footer>phone_locked</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_missed\"></ux-icon>\r\n      <footer>phone_missed</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_paused\"></ux-icon>\r\n      <footer>phone_paused</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"power\"></ux-icon>\r\n      <footer>power</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"priority_high\"></ux-icon>\r\n      <footer>priority_high</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rv_hookup\"></ux-icon>\r\n      <footer>rv_hookup</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sd_card\"></ux-icon>\r\n      <footer>sd_card</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sim_card_alert\"></ux-icon>\r\n      <footer>sim_card_alert</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sms\"></ux-icon>\r\n      <footer>sms</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sms_failed\"></ux-icon>\r\n      <footer>sms_failed</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sync\"></ux-icon>\r\n      <footer>sync</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sync_disabled\"></ux-icon>\r\n      <footer>sync_disabled</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sync_problem\"></ux-icon>\r\n      <footer>sync_problem</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"system_update\"></ux-icon>\r\n      <footer>system_update</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tap_and_play\"></ux-icon>\r\n      <footer>tap_and_play</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"time_to_leave\"></ux-icon>\r\n      <footer>time_to_leave</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vibration\"></ux-icon>\r\n      <footer>vibration</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"voice_chat\"></ux-icon>\r\n      <footer>voice_chat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vpn_lock\"></ux-icon>\r\n      <footer>vpn_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wc\"></ux-icon>\r\n      <footer>wc</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wifi\"></ux-icon>\r\n      <footer>wifi</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"ac_unit\"></ux-icon>\r\n      <footer>ac_unit</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airport_shuttle\"></ux-icon>\r\n      <footer>airport_shuttle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"all_inclusive\"></ux-icon>\r\n      <footer>all_inclusive</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"beach_access\"></ux-icon>\r\n      <footer>beach_access</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"business_center\"></ux-icon>\r\n      <footer>business_center</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"casino\"></ux-icon>\r\n      <footer>casino</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"child_care\"></ux-icon>\r\n      <footer>child_care</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"child_friendly\"></ux-icon>\r\n      <footer>child_friendly</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fitness_center\"></ux-icon>\r\n      <footer>fitness_center</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"free_breakfast\"></ux-icon>\r\n      <footer>free_breakfast</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"golf_course\"></ux-icon>\r\n      <footer>golf_course</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hot_tub\"></ux-icon>\r\n      <footer>hot_tub</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"kitchen\"></ux-icon>\r\n      <footer>kitchen</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pool\"></ux-icon>\r\n      <footer>pool</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"room_service\"></ux-icon>\r\n      <footer>room_service</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rv_hookup\"></ux-icon>\r\n      <footer>rv_hookup</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"smoke_free\"></ux-icon>\r\n      <footer>smoke_free</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"smoking_rooms\"></ux-icon>\r\n      <footer>smoking_rooms</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"spa\"></ux-icon>\r\n      <footer>spa</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cake\"></ux-icon>\r\n      <footer>cake</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"domain\"></ux-icon>\r\n      <footer>domain</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"group\"></ux-icon>\r\n      <footer>group</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"group_add\"></ux-icon>\r\n      <footer>group_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"location_city\"></ux-icon>\r\n      <footer>location_city</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mood\"></ux-icon>\r\n      <footer>mood</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mood_bad\"></ux-icon>\r\n      <footer>mood_bad</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"notifications\"></ux-icon>\r\n      <footer>notifications</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"notifications_active\"></ux-icon>\r\n      <footer>notifications_active</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"notifications_none\"></ux-icon>\r\n      <footer>notifications_none</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"notifications_off\"></ux-icon>\r\n      <footer>notifications_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"notifications_paused\"></ux-icon>\r\n      <footer>notifications_paused</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pages\"></ux-icon>\r\n      <footer>pages</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"party_mode\"></ux-icon>\r\n      <footer>party_mode</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"people\"></ux-icon>\r\n      <footer>people</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"people_outline\"></ux-icon>\r\n      <footer>people_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"person\"></ux-icon>\r\n      <footer>person</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"person_add\"></ux-icon>\r\n      <footer>person_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"person_outline\"></ux-icon>\r\n      <footer>person_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"plus_one\"></ux-icon>\r\n      <footer>plus_one</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"poll\"></ux-icon>\r\n      <footer>poll</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"public\"></ux-icon>\r\n      <footer>public</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"school\"></ux-icon>\r\n      <footer>school</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sentiment_dissatisfied\"></ux-icon>\r\n      <footer>sentiment_dissatisfied</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sentiment_neutral\"></ux-icon>\r\n      <footer>sentiment_neutral</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sentiment_satisfied\"></ux-icon>\r\n      <footer>sentiment_satisfied</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sentiment_very_dissatisfied\"></ux-icon>\r\n      <footer>sentiment_very_dissatisfied</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sentiment_very_satisfied\"></ux-icon>\r\n      <footer>sentiment_very_satisfied</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"share\"></ux-icon>\r\n      <footer>share</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"whatshot\"></ux-icon>\r\n      <footer>whatshot</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"check_box\"></ux-icon>\r\n      <footer>check_box</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"check_box_outline_blank\"></ux-icon>\r\n      <footer>check_box_outline_blank</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"indeterminate_check_box\"></ux-icon>\r\n      <footer>indeterminate_check_box</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"radio_button_checked\"></ux-icon>\r\n      <footer>radio_button_checked</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"radio_button_unchecked\"></ux-icon>\r\n      <footer>radio_button_unchecked</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"star\"></ux-icon>\r\n      <footer>star</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"star_border\"></ux-icon>\r\n      <footer>star_border</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"star_half\"></ux-icon>\r\n      <footer>star_half</footer>\r\n    </figure>\r\n    <!--anchor-->\r\n  </section>\r\n  </main>\r\n</template>\r\n"; });
define('text!components/icons.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  margin: 16px;\r\n  width: 250px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 16px;\r\n}\r\n\r\nstyles.figure ux-icon {\r\n  width: 48px;\r\n  height: 48px;\r\n}\r\n\r\nstyles.figure ux-icon>svg {\r\n  fill: #757575;\r\n  width: 48px;\r\n  height: 48px;\r\n}\r\n\r\nstyles.figure>footer {\r\n  padding-top: 16px;\r\n  font-size: 12px;\r\n}\r\n"; });
//# sourceMappingURL=app-bundle.js.map