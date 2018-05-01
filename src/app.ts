import { AureliaUX } from '@aurelia-ux/core';
import { autoinject } from 'aurelia-dependency-injection';
import { RouterConfiguration, Router } from 'aurelia-router';
import { routes } from './routes';

@autoinject
export class App {
  private router: Router;
  private theme = 'light';

  constructor(private ux: AureliaUX) {
    this.ux.design.primary = '#9C27B0';
    this.ux.design.controlBackground = '#ffffff';
    this.ux.design.controlForeground = '#212121';
    this.ux.design.appBackground = '#fafafa';
    this.ux.design.appForeground = '#212121';
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;

    config.options.pushState = true;
    config.options.root = '/';

    config.map(routes);
  }

  public toggleTheme() {
    this.theme = this.theme == 'light' ? 'dark' : 'light';

    if (this.theme == 'light') {
      this.ux.design.controlBackground = '#fff';
      this.ux.design.controlForeground = '#212121';
      this.ux.design.appBackground = '#fafafa';
      this.ux.design.appForeground = '#212121';
    } else {
      this.ux.design.controlBackground = '#424242';
      this.ux.design.controlForeground = '#fff';
      this.ux.design.appBackground = '#303030';
      this.ux.design.appForeground = '#fff';
    }
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
