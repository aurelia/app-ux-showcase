import {AureliaUX} from 'aurelia-ux';
import {inject} from 'aurelia-dependency-injection';
import {routes} from './routes';

@inject(AureliaUX)
export class App {
  router;

  constructor(ux) {
    ux.design.primary = '#704794';
    ux.design.accent = '#e62787';
  }

  configureRouter(config, router) {
    this.router = router;
    config.map(routes);
  }
}

export class CategoriesValueConverter {
  toView(navModels) {
    let categories = new Map();

    for(let model of navModels) {
      let routes = categories.get(model.settings.category);

      if (!routes) {
        categories.set(model.settings.category, routes = []);
      }

      routes.push(model);
    }

    return categories;
  }
}
