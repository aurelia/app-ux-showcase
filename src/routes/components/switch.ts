export class Switch {
  public products = ['Motherboard', 'CPU', 'Memory'];
  public productObjects: IProduct[] = [
      { id: 0, name: 'Motherboard' },
      { id: 1, name: 'CPU' },
      { id: 2, name: 'Memory' },
  ];
  public selectedProductsWithMatcher: IProduct[] = [
      { id: 1, name: 'CPU' },
      { id: 2, name: 'Memory' }
  ];

  productMatcher = (a, b) => a.id === b.id;

  selectedStringProducts: string[] = [];
  selectedProductObjects: IProduct[] = [];

  public alerter(type: string) {
      alert('event from ' + type);
  }
}

interface IProduct {
  id: number;
  name: string;
}
