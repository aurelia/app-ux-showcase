export class Checkbox {
    products: string[] = ['Motherboard', 'CPU', 'Memory'];
    productObjects: IProduct[] = [
        { id: 0, name: 'Motherboard' },
        { id: 1, name: 'CPU' },
        { id: 2, name: 'Memory' },
    ];
    selectedProductsWithMatcher: IProduct[] = [
        { id: 1, name: 'CPU' },
        { id: 2, name: 'Memory' }
    ];

    productMatcher = (a, b) => a.id === b.id;

    selectedStringProducts: string[] = [];
    selectedProductObjects: IProduct[] = [];
}

interface IProduct {
    id: number;
    name: string;
}
