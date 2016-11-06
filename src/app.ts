import {AureliaUX} from 'aurelia-ux';
import {inject} from 'aurelia-dependency-injection';

@inject(AureliaUX)
export class App {
  router;

  constructor(ux) {
    ux.design.primary = '#704794';
    ux.design.accent = '#e62787';
  }

  configureRouter(config, router) {
    this.router = router;
    config.map([
      { route: '', redirect: 'introduction' },
      { route: 'introduction', moduleId: './home', name: 'introduction', title: 'Introduction' },

      { route: 'swatches', moduleId: './core-features/swatches', name: 'swatches', title: 'Swatches', nav: true },
      { route: 'theming', moduleId: './core-features/theming', name: 'theming', title: 'Theming', nav: true },

      { route: 'buttons', moduleId: './components/buttons', name: 'buttons', title: 'Buttons', nav: true }
    ]);
  }
}
