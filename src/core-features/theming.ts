import {AureliaUX} from 'aurelia-ux';
import {inject} from 'aurelia-dependency-injection';

@inject(AureliaUX)
export class Theming {
  constructor(public ux) {}
}
