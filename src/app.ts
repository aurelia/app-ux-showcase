import { StyleEngine } from '@aurelia-ux/core';
import { autoinject } from 'aurelia-dependency-injection';
import { RouterConfiguration, Router } from 'aurelia-router';
import { routes } from './routes';
import * as themes from './themes.json';


@autoinject
export class App {
  private router: Router;
  private theme = localStorage.getItem('theme');

  constructor(private styleEngine: StyleEngine) {
    this.styleEngine.applyThemeGroup(this.theme == 'dark' ? themes.dark : themes.light);
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;

    config.options.pushState = true;
    config.options.root = '/';

    config.map(routes);
  }

  public toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', this.theme);
    this.styleEngine.applyThemeGroup(this.theme == 'dark' ? themes.dark : themes.light);
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
