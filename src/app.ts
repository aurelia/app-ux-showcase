import { AureliaUX } from '@aurelia-ux/core';
import { autoinject } from 'aurelia-dependency-injection';
import { RouterConfiguration, Router } from 'aurelia-router';
import { routes } from './routes';

@autoinject
export class App {
  private router: Router;

  constructor(ux: AureliaUX) {
    ux.design.primary = '#704794';
    ux.design.accent = '#e62787';
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;

    config.options.pushState = true;
    config.options.root = '/';

    config.map(routes);
  }
}

export class CategoriesValueConverter {
  toView(navModels) {
    let categories = new Map();

    for (let model of navModels) {
      let routes = categories.get(model.settings.category);

      if (!routes) {
        categories.set(model.settings.category, routes = []);
      }

      routes.push(model);
    }

    return categories;
  }
}
