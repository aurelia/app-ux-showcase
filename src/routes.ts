let coreFeatures = {
  title: 'Core Features'
};

let components = {
  title: 'Components'
};

export let routes = [
  { route: '', redirect: 'introduction' },
  { route: 'introduction', moduleId: './home', name: 'introduction', title: 'Introduction' },

  { settings: { category: coreFeatures }, route: 'swatches', moduleId: './core-features/swatches', name: 'swatches', title: 'Swatches', nav: true },
  { settings: { category: coreFeatures }, route: 'theming', moduleId: './core-features/theming', name: 'theming', title: 'Theming', nav: true },

  { settings: { category: components }, route: 'buttons', moduleId: './components/buttons', name: 'buttons', title: 'Buttons', nav: true },
  { settings: { category: components }, route: 'forms', moduleId: './components/forms', name: 'forms', title: 'Forms', nav: true },
  { settings: { category: components }, route: 'inputs', moduleId: './components/inputs', name: 'inputs', title: 'Inputs', nav: true },
  { settings: { category: components }, route: 'textarea', moduleId: './components/textarea', name: 'textarea', title: 'Textarea', nav: true },
  { settings: { category: components }, route: 'chips', moduleId: './components/chips', name: 'chips', title: 'Chips', nav: true }

]
