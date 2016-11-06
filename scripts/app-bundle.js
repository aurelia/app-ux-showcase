var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", 'aurelia-ux', 'aurelia-dependency-injection'], function (require, exports, aurelia_ux_1, aurelia_dependency_injection_1) {
    "use strict";
    var App = (function () {
        function App(ux) {
            ux.design.primary = '#704794';
            ux.design.accent = '#e62787';
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.map([
                { route: '', redirect: 'introduction' },
                { route: 'introduction', moduleId: './home', name: 'introduction', title: 'Introduction' },
                { route: 'swatches', moduleId: './core-features/swatches', name: 'swatches', title: 'Swatches', nav: true },
                { route: 'theming', moduleId: './core-features/theming', name: 'theming', title: 'Theming', nav: true },
                { route: 'buttons', moduleId: './components/buttons', name: 'buttons', title: 'Buttons', nav: true }
            ]);
        };
        App = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_ux_1.AureliaUX), 
            __metadata('design:paramtypes', [Object])
        ], App);
        return App;
    }());
    exports.App = App;
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
    var Home = (function () {
        function Home() {
        }
        return Home;
    }());
    exports.Home = Home;
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
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
    var Buttons = (function () {
        function Buttons() {
        }
        return Buttons;
    }());
    exports.Buttons = Buttons;
});

define('core-features/swatches',["require", "exports", 'aurelia-ux'], function (require, exports, aurelia_ux_1) {
    "use strict";
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
define('core-features/theming',["require", "exports", 'aurelia-ux', 'aurelia-dependency-injection'], function (require, exports, aurelia_ux_1, aurelia_dependency_injection_1) {
    "use strict";
    var Theming = (function () {
        function Theming(ux) {
            this.ux = ux;
        }
        Theming = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_ux_1.AureliaUX), 
            __metadata('design:paramtypes', [Object])
        ], Theming);
        return Theming;
    }());
    exports.Theming = Theming;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
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
define('aurelia-ux/aurelia-ux',["require", "exports", 'aurelia-dependency-injection', './hosts/cordova', './hosts/web', './hosts/electron', './ux-configuration'], function (require, exports, aurelia_dependency_injection_1, cordova_1, web_1, electron_1, ux_configuration_1) {
    "use strict";
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
        AureliaUX = __decorate([
            aurelia_dependency_injection_1.inject(ux_configuration_1.UXConfiguration, aurelia_dependency_injection_1.Container)
        ], AureliaUX);
        return AureliaUX;
    }());
    exports.AureliaUX = AureliaUX;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/hosts/cordova',["require", "exports", 'aurelia-dependency-injection', 'aurelia-pal', '../platforms/ios', '../platforms/android'], function (require, exports, aurelia_dependency_injection_1, aurelia_pal_1, ios_1, android_1) {
    "use strict";
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
        Cordova = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dependency_injection_1.Container)
        ], Cordova);
        return Cordova;
    }());
    exports.Cordova = Cordova;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/platforms/ios',["require", "exports", 'aurelia-dependency-injection', '../designs/ios-design'], function (require, exports, aurelia_dependency_injection_1, ios_design_1) {
    "use strict";
    var IOS = (function () {
        function IOS(design) {
            this.design = design;
            this.type = 'ios';
        }
        IOS = __decorate([
            aurelia_dependency_injection_1.inject(ios_design_1.IOSDesign)
        ], IOS);
        return IOS;
    }());
    exports.IOS = IOS;
});

define('aurelia-ux/designs/ios-design',["require", "exports", '../colors/swatches'], function (require, exports, swatches_1) {
    "use strict";
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
        }
        return IOSDesign;
    }());
    exports.IOSDesign = IOSDesign;
});

define('aurelia-ux/colors/swatches',["require", "exports"], function (require, exports) {
    "use strict";
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
        lgithBlue: {
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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/platforms/android',["require", "exports", 'aurelia-dependency-injection', '../designs/material-design'], function (require, exports, aurelia_dependency_injection_1, material_design_1) {
    "use strict";
    var Android = (function () {
        function Android(design) {
            this.design = design;
            this.type = 'android';
        }
        Android = __decorate([
            aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
        ], Android);
        return Android;
    }());
    exports.Android = Android;
});

define('aurelia-ux/designs/material-design',["require", "exports", '../colors/swatches'], function (require, exports, swatches_1) {
    "use strict";
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
define('aurelia-ux/hosts/web',["require", "exports", 'aurelia-dependency-injection', '../designs/material-design'], function (require, exports, aurelia_dependency_injection_1, material_design_1) {
    "use strict";
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
        Web = __decorate([
            aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
        ], Web);
        return Web;
    }());
    exports.Web = Web;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/hosts/electron',["require", "exports", 'aurelia-dependency-injection', '../designs/material-design', './web', 'aurelia-pal'], function (require, exports, aurelia_dependency_injection_1, material_design_1, web_1, aurelia_pal_1) {
    "use strict";
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
        Electron = __decorate([
            aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
        ], Electron);
        return Electron;
    }());
    exports.Electron = Electron;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/ux-configuration',["require", "exports", 'aurelia-dependency-injection', 'aurelia-loader', 'aurelia-templating', './styles/dynamic-styles', 'aurelia-templating-binding'], function (require, exports, aurelia_dependency_injection_1, aurelia_loader_1, aurelia_templating_1, dynamic_styles_1, aurelia_templating_binding_1) {
    "use strict";
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
        UXConfiguration = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_loader_1.Loader, aurelia_templating_1.ViewEngine)
        ], UXConfiguration);
        return UXConfiguration;
    }());
    exports.UXConfiguration = UXConfiguration;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/styles/dynamic-styles',["require", "exports", './decorators'], function (require, exports, decorators_1) {
    "use strict";
    var nextThemeId = 0;
    function getNextDynamicThemeId() {
        return 'DynamicTheme' + (++nextThemeId);
    }
    function createDynamicStyleModule(styleUrl) {
        var DynamicTheme = (function () {
            function DynamicTheme() {
            }
            DynamicTheme = __decorate([
                decorators_1.styles(),
                decorators_1.useStyles(styleUrl)
            ], DynamicTheme);
            return DynamicTheme;
        }());
        return (_a = {},
            _a[getNextDynamicThemeId()] = DynamicTheme,
            _a
        );
        var _a;
    }
    exports.createDynamicStyleModule = createDynamicStyleModule;
});

define('aurelia-ux/styles/decorators',["require", "exports", './style-resource', 'aurelia-templating', './style-strategy', 'aurelia-metadata', './style-locator'], function (require, exports, style_resource_1, aurelia_templating_1, style_strategy_1, aurelia_metadata_1, style_locator_1) {
    "use strict";
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

define('aurelia-ux/styles/style-resource',["require", "exports", 'aurelia-metadata', './style-locator', './style-engine'], function (require, exports, aurelia_metadata_1, style_locator_1, style_engine_1) {
    "use strict";
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
                return styleFactory;
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
            this.engine.getOrCreateStlyeController(view, this.factory).bind(view);
        };
        StyleViewEngineHooks.prototype.beforeUnbind = function (view) {
            this.engine.getOrCreateStlyeController(view, this.factory).unbind();
        };
        return StyleViewEngineHooks;
    }());
});

define('aurelia-ux/styles/style-locator',["require", "exports", 'aurelia-metadata', './style-strategy'], function (require, exports, aurelia_metadata_1, style_strategy_1) {
    "use strict";
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
        /**
         * The metadata key for storing/finding style strategies associated with an class/object.
         */
        StyleLocator.styleStrategyMetadataKey = 'aurelia:style-strategy';
        return StyleLocator;
    }());
    exports.StyleLocator = StyleLocator;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/styles/style-strategy',["require", "exports", 'aurelia-metadata', 'aurelia-pal', './style-locator', 'aurelia-path', './style-compiler', 'aurelia-loader', '../aurelia-ux'], function (require, exports, aurelia_metadata_1, aurelia_pal_1, style_locator_1, aurelia_path_1, style_compiler_1, aurelia_loader_1, aurelia_ux_1) {
    "use strict";
    /**
     * Decorator: Indicates that the decorated class/object is a style strategy.
     */
    exports.styleStrategy = aurelia_metadata_1.protocol.create('aurelia:style-strategy', {
        validate: function (target) {
            if (!(typeof target.loadStyleFactory === 'function')) {
                return 'Style strategies must implement: loadStyleStrateg(): Promise<StyleFactory>';
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
        RelativeStyleStrategy = __decorate([
            exports.styleStrategy()
        ], RelativeStyleStrategy);
        return RelativeStyleStrategy;
    }());
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
        ConventionalStyleStrategy = __decorate([
            exports.styleStrategy()
        ], ConventionalStyleStrategy);
        return ConventionalStyleStrategy;
    }());
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
        InlineStyleStrategy = __decorate([
            exports.styleStrategy()
        ], InlineStyleStrategy);
        return InlineStyleStrategy;
    }());
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
define('aurelia-ux/styles/style-compiler',["require", "exports", 'aurelia-templating', 'aurelia-dependency-injection', './style-factory'], function (require, exports, aurelia_templating_1, aurelia_dependency_injection_1, style_factory_1) {
    "use strict";
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
        StyleCompiler = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_templating_1.BindingLanguage, aurelia_templating_1.ViewResources)
        ], StyleCompiler);
        return StyleCompiler;
    }());
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
define('aurelia-ux/styles/style-factory',["require", "exports", './style-controller', '../aurelia-ux', 'aurelia-binding', 'aurelia-metadata', '../colors/swatches'], function (require, exports, style_controller_1, aurelia_ux_1, aurelia_binding_1, aurelia_metadata_1, swatches_1) {
    "use strict";
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
        return key + '_aurelia_ux_' + nextNumber();
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
        __decorate([
            aurelia_binding_1.computedFrom('$ux.platform')
        ], StyleOverrideContext.prototype, "$platform", null);
        __decorate([
            aurelia_binding_1.computedFrom('$ux.design')
        ], StyleOverrideContext.prototype, "$design", null);
        return StyleOverrideContext;
    }());
});

define('aurelia-ux/styles/style-controller',["require", "exports", 'aurelia-pal'], function (require, exports, aurelia_pal_1) {
    "use strict";
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
define('aurelia-ux/styles/style-engine',["require", "exports", 'aurelia-metadata', 'aurelia-dependency-injection', 'aurelia-pal', 'aurelia-binding'], function (require, exports, aurelia_metadata_1, aurelia_dependency_injection_1, aurelia_pal_1, aurelia_binding_1) {
    "use strict";
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
        StyleEngine.prototype.getOrCreateStlyeController = function (view, factory) {
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
        StyleEngine = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_dependency_injection_1.Container)
        ], StyleEngine);
        return StyleEngine;
    }());
    exports.StyleEngine = StyleEngine;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/button/ux-button-theme',["require", "exports", '../styles/decorators'], function (require, exports, decorators_1) {
    "use strict";
    var UxButtonTheme = (function () {
        function UxButtonTheme() {
            this.type = 'raised'; // flat, raised or fab
            this.size = 'medium'; // small, medium or large
        }
        UxButtonTheme = __decorate([
            decorators_1.styles()
        ], UxButtonTheme);
        return UxButtonTheme;
    }());
    exports.UxButtonTheme = UxButtonTheme;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./reset.css\"></require>\n  <require from=\"./app.css#ux\"></require>\n\n  <nav styles.nav>\n    <a href=\"#/introduction\">\n      <img styles.logo src=\"../images/aurelia-icon-128x128.png\">\n    </a>\n\n    <span styles.product-name>Aurelia UX</span>\n\n    <ul styles.nav-list>\n      <li styles.nav-item repeat.for=\"nav of router.navigation\" class=\"${nav.isActive ? 'active' : ''}\">\n        <a href.bind=\"nav.href\">${nav.title}</a>\n      </li>\n    </ul>\n  </nav>\n\n  <section styles.main>\n    <header styles.header>\n      <h1>${router.currentInstruction.config.navModel.title}</h1>\n    </header>\n\n    <router-view styles.page></router-view>\n  </section>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "* {\n  box-sizing: border-box;\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: row;\n}\n\ncode {\n  font-family: 'Source Code Pro', monospace;\n}\n\nem {\n  font-style: italic;\n}\n\nstyles.main {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\nstyles.header {\n  background: ${$design.primary};\n  color: ${$design.primaryForeground};\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\n  padding: 16px;\n  font-size: 24px;\n  line-height: 32px;\n  height: 64px;\n}\n\nstyles.nav {\n  width: 275px;\n  background: ${$swatches.grey.p200};\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nstyles.nav-list {\n  align-self: stretch;\n  margin-top: 20px;\n\n  display: flex;\n  flex-direction: column;\n}\n\nstyles.nav-item {\n  padding: 12px 0 12px 24px;\n  transition: all 300ms;\n}\n\nstyles.nav-item:hover {\n  background: ${$swatches.grey.p300};\n}\n\nstyles.nav-item > a {\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 16px;\n  color: ${$design.primary};\n  display: block;\n  transition: all 300ms;\n\n  border-left: 2px solid transparent;\n  padding-left: 8px;\n}\n\nstyles.nav-item.active > a {\n  color: ${$design.accent};\n  border-color: ${$design.accent};\n}\n\nstyles.logo {\n  margin: 16px 0;\n}\n\nstyles.product-name {\n  font-size: 28px;\n}\n\nstyles.page {\n  overflow-y: scroll;\n  flex: 1;\n}\n"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\n  <require from='./common.css#ux'></require>\n  <require from=\"./home.css#ux\"></require>\n\n  <main styles.main>\n\n    <h2 styles.header>What is Aurelia UX?</h2>\n\n    <p styles.description>\n      Aurelia UX is a companion framework to Aurelia. While Aurelia focuses on being\n      a <em>front-end framework</em> by providing core capabilities you need to build apps, such as templating, binding and routing,\n      Aurelia UX focuses on being a <em>user experience framework</em> by providing\n      higher-level capabilities such as design languages, theming and components.\n    </p>\n\n    <p styles.description>\n      Aurelia UX is still in a very early stage but we'd love for you to play with it\n      and consider contributing. We'll keep this app updated as we add new features\n      so it's easy for you to track our progress.\n    </p>\n\n    <nav styles.toc>\n      <div styles.toc-category>\n        <h3 styles.toc-header>Core Features</h3>\n        <ul>\n          <li styles.item><a route-href=\"route: swatches\" styles.link>Swatches</a></li>\n          <li styles.item><a route-href=\"route: theming\" styles.link>Theming</a></li>\n        </ul>\n      </div>\n\n      <div styles.toc-category>\n        <h3 styles.toc-header>Components</h3>\n        <ul>\n          <li styles.item><a route-href=\"route: buttons\" styles.link>Buttons</a></li>\n        </ul>\n      </div>\n    </nav>\n\n  </main>\n</template>\n"; });
define('text!common.css', ['module'], function(module) { module.exports = "styles.main {\n  padding: 40px 40px 40px;\n}\n\nstyles.header {\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 32px;\n  margin-bottom: 30px;\n  color: ${$design.primary};\n}\n\nstyles.description {\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 32px;\n  max-width: 940px;\n  color: ${$swatches.black};\n  margin-bottom: 40px;\n}\n"; });
define('text!components/buttons.html', ['module'], function(module) { module.exports = "<template>\n  <require from='../common.css#ux'></require>\n  <require from=\"./buttons.css#ux\"></require>\n\n  <main styles.main>\n    <h1 styles.header>\n      &lt;ux-button&gt;&lt;/ux-button&gt;\n    </h1>\n\n    <p styles.description>\n      The <code>ux-button<code> element is used to indicate that a user can take an action.\n      It comes in three types: <em>flat</em>, <em>raised</em> (default) and <em>fab</em> which can be configured either on the button instance or on the theme object, using the <em>type</em> property.\n    </p>\n\n    <section styles.feature>\n      <figure styles.figure>\n        <ux-button type=\"flat\">Button</ux-button>\n\n        <code>\n          type=\"flat\"\n        </code>\n      </figure>\n\n      <figure styles.figure>\n        <ux-button>Button</ux-button>\n\n        <code>\n          type=\"raised\"\n        </code>\n      </figure>\n\n      <figure styles.figure>\n        <ux-button type=\"fab\">\n          <span style=\"font-size: 26px\">+</span>\n        </ux-button>\n\n        <code>\n          type=\"fab\"\n        </code>\n      </figure>\n    </section>\n\n    <p styles.description>\n      Buttons also come in three sizes: <em>small</em>, <em>medium</em> (default) and <em>large</em> which can be configured either on the button instance or on the theme object, using the <em>size</em> property.\n    </p>\n\n    <section styles.feature>\n      <figure styles.figure>\n        <ux-button size=\"small\" type=\"flat\">Button</ux-button>\n        <ux-button size=\"small\">Button</ux-button>\n        <ux-button size=\"small\" type=\"fab\">\n          <span style=\"font-size: 26px\">+</span>\n        </ux-button>\n\n        <code>\n          size=\"small\"\n        </code>\n      </figure>\n\n      <figure styles.figure>\n        <ux-button type=\"flat\">Button</ux-button>\n        <ux-button>Button</ux-button>\n        <ux-button type=\"fab\">\n          <span style=\"font-size: 26px\">+</span>\n        </ux-button>\n\n        <code>\n          size=\"medium\"\n        </code>\n      </figure>\n\n      <figure styles.figure>\n        <ux-button size=\"large\" type=\"flat\">Button</ux-button>\n        <ux-button size=\"large\">Button</ux-button>\n        <ux-button size=\"large\" type=\"fab\">\n          <span style=\"font-size: 26px\">+</span>\n        </ux-button>\n\n        <code>\n          size=\"large\"\n        </code>\n      </figure>\n    </section>\n  </main>\n</template>\n"; });
define('text!home.css', ['module'], function(module) { module.exports = "styles.toc {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-top: 60px;\n}\n\nstyles.toc-category {\n  border-left: 5px solid;\n  padding-left: 20px;\n  margin-right: 120px;\n  border-left-color: ${$design.primary}\n}\n\nstyles.toc-header {\n  line-height: 40px;\n}\n\nstyles.item {\n  font-size: 20px;\n  line-height: 40px;\n}\n\nstyles.link {\n  text-decoration: none;\n  color: ${$design.primary}\n}\n"; });
define('text!core-features/swatches.html', ['module'], function(module) { module.exports = "<template>\n  <require from='../common.css#ux'></require>\n  <require from=\"./swatches.css#ux\"></require>\n\n  <main styles.main>\n    <p styles.description>\n      Swatches provide sets of colors, both primaries and accents, based on the\n      color theory behind Material Design. It is recommended that you select one\n      primary and one accent color for your app, each with a normal, light and dark shade.\n    </p>\n\n    <section styles.swatches>\n      <div repeat.for=\"swatch of swatches\" styles.swatch>\n        <ul>\n          <li css=\"background: ${swatch.p500}\">\n            <div styles.swatch-name>\n              ${swatch.name}\n            </div>\n\n            <div styles.color-row>\n              <div>p500</div>\n              <div>${swatch.p500}</div>\n            </div>\n          </li>\n\n          <li repeat.for=\"color of swatch.colors\" styles.color-row css=\"background: ${color.value}\">\n            <div>${color.name}</div>\n            <div>${color.value}</div>\n          </li>\n        </ul>\n      </div>\n    </section>\n  </main>\n\n</template>\n"; });
define('text!reset.css', ['module'], function(module) { module.exports = "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"; });
define('text!core-features/theming.html', ['module'], function(module) { module.exports = "<template>\n  <require from='../common.css#ux'></require>\n  <require from=\"./theming.css#ux\"></require>\n\n  <main styles.main>\n    <p styles.description>\n      All UX styles can include binding expressions. They can be bound against your\n      custom style models, and/or against generally available properties such as\n      platform and design language.\n    </p>\n\n    <section styles.properties>\n      <div styles.property-row>\n        <label styles.label>Design Primary</label>\n        <input type=\"color\" value.bind=\"ux.design.primary\">\n      </div>\n\n      <div styles.property-row>\n        <label styles.label>Design Primary Foreground</label>\n        <input type=\"color\" value.bind=\"ux.design.primaryForeground\">\n      </div>\n\n      <div styles.property-row>\n        <label styles.label>Design Primary Dark</label>\n        <input type=\"color\" value.bind=\"ux.design.primaryDark\">\n      </div>\n\n      <div styles.property-row>\n        <label styles.label>Design Primary Dark Foreground</label>\n        <input type=\"color\" value.bind=\"ux.design.primaryDarkForeground\">\n      </div>\n\n      <div styles.property-row>\n        <label styles.label>Design Primary Light</label>\n        <input type=\"color\" value.bind=\"ux.design.primaryLight\">\n      </div>\n\n      <div styles.property-row>\n        <label styles.label>Design Primary Light Foreground</label>\n        <input type=\"color\" value.bind=\"ux.design.primaryLightForeground\">\n      </div>\n\n      <div styles.property-row>\n        <label styles.label>Design Accent</label>\n        <input type=\"color\" value.bind=\"ux.design.accent\">\n      </div>\n\n      <div styles.property-row>\n        <label styles.label>Design Accent Foreground</label>\n        <input type=\"color\" value.bind=\"ux.design.accentForeground\">\n      </div>\n\n      <div styles.property-row>\n        <label styles.label>Design Accent Dark</label>\n        <input type=\"color\" value.bind=\"ux.design.accentDark\">\n      </div>\n\n      <div styles.property-row>\n        <label styles.label>Design Accent Dark Foreground</label>\n        <input type=\"color\" value.bind=\"ux.design.accentDarkForeground\">\n      </div>\n\n      <div styles.property-row>\n        <label styles.label>Design Accent Light</label>\n        <input type=\"color\" value.bind=\"ux.design.accentLight\">\n      </div>\n\n      <div styles.property-row>\n        <label styles.label>Design Accent Light Foreground</label>\n        <input type=\"color\" value.bind=\"ux.design.accentLightForeground\">\n      </div>\n    </section>\n  </main>\n</template>\n"; });
define('text!components/buttons.css', ['module'], function(module) { module.exports = "styles.feature {\n  margin: 40px 0 40px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n}\n\nstyles.figure {\n  background: ${$swatches.grey.p200};\n  display: flex;\n  width: 320px;\n  height: 320px;\n  position:relative;\n  margin-bottom: 20px;\n}\n\nstyles.figure > ux-button {\n  margin: auto;\n}\n\nstyles.figure > code {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n}\n"; });
define('text!core-features/swatches.css', ['module'], function(module) { module.exports = "styles.swatches {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-top: 40px;\n}\n\nstyles.swatch {\n  width: 320px;\n  margin-bottom: 40px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\n}\n\nstyles.swatch-name {\n  padding: 10px 15px 11px;\n  font-size: 13px;\n  line-height: 24px;\n  margin-bottom: 53px;\n}\n\nstyles.color-row {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  padding: 10px 15px 11px;\n  font-size: 13px;\n  line-height: 24px;\n}\n"; });
define('text!core-features/theming.css', ['module'], function(module) { module.exports = "styles.properties {\n  margin-top: 40px;\n}\n\nstyles.property-row {\n  margin: 24px 0;\n}\n\nstyles.label {\n  display: block;\n  margin-bottom: 16px;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map