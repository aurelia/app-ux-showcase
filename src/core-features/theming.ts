import { AureliaUX } from 'aurelia-ux';
import { inject } from 'aurelia-dependency-injection';

@inject(AureliaUX)
export class Theming {
  public currentProperty = 'primary';

  constructor(public ux: AureliaUX) { }
}
