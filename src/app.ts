export class App {
  configureRouter(config, router) {
    config.map([
      { route: '', redirect: 'home' },
      { route: 'home', moduleId: './home', name: 'home' },
      { route: 'swatches', moduleId: './core-features/swatches', name: 'swatches' },
      { route: 'theming', moduleId: './core-features/theming', name: 'theming' }
    ]);
  }
}
