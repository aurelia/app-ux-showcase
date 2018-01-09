import { PLATFORM } from "aurelia-pal";

let coreFeatures = {
  title: 'Core Features'
};

let formComponents = {
  title: 'Form Components'
};

let layoutComponents = {
  title: 'Layout Components'
};

export let routes = [
  { route: '', redirect: 'getting-started' },

  { settings: { category: coreFeatures, icon: 'settings' }, route: 'getting-started', moduleId: PLATFORM.moduleName('routes/getting-started'), name: 'gettingstarted', title: 'Getting Started', nav: true },
  { settings: { category: coreFeatures, icon: 'format_paint' }, route: 'theming', moduleId: PLATFORM.moduleName('routes/theming/theming'), name: 'theming', title: 'Theming', nav: true },

  { settings: { category: layoutComponents }, route: 'grid', moduleId: PLATFORM.moduleName('routes/components/grid'), name: 'grid', title: 'Grid', nav: true },

  { settings: { category: formComponents }, route: 'buttons', moduleId: PLATFORM.moduleName('routes/components/buttons'), name: 'buttons', title: 'Buttons', nav: true },
  { settings: { category: formComponents }, route: 'checkbox', moduleId: PLATFORM.moduleName('routes/components/checkbox'), name: 'checkbox', title: 'Checkbox', nav: true },
  { settings: { category: formComponents }, route: 'radio', moduleId: PLATFORM.moduleName('routes/components/radio'), name: 'radio', title: 'Radio', nav: true },
  { settings: { category: formComponents }, route: 'switch', moduleId: PLATFORM.moduleName('routes/components/switch'), name: 'switch', title: 'Switch', nav: true },
  { settings: { category: formComponents }, route: 'forms', moduleId: PLATFORM.moduleName('routes/components/forms'), name: 'forms', title: 'Forms', nav: true },
  { settings: { category: formComponents }, route: 'inputs', moduleId: PLATFORM.moduleName('routes/components/inputs'), name: 'inputs', title: 'Inputs', nav: true },
  { settings: { category: formComponents }, route: 'textarea', moduleId: PLATFORM.moduleName('routes/components/textarea'), name: 'textarea', title: 'Textarea', nav: true },
  { settings: { category: formComponents }, route: 'chips', moduleId: PLATFORM.moduleName('routes/components/chips'), name: 'chips', title: 'Chips', nav: true },
  { settings: { category: formComponents }, route: 'icons', moduleId: PLATFORM.moduleName('routes/components/icons'), name: 'icons', title: 'Icons', nav: true },
  { settings: { category: formComponents }, route: 'list', moduleId: PLATFORM.moduleName('routes/components/list'), name: 'list', title: 'List', nav: true }

];
