const uuid = require('uuid/v4');

const products = [
    {
        id: uuid(),
        name: 'Coca Cola',
        stock: 10,
        value: 12
    },
    {
        id: uuid(),
        name: 'Leche',
        stock: 20,
        value: 60
    },
    {
        id: uuid(),
        name: 'Sabritas',
        stock: 5,
        value: 15
    },
    {
        id: uuid(),
        name: 'Galletas',
        stock: 7,
        value: 13
    },
    {
        id: uuid(),
        name: 'Pan',
        stock: 6,
        value: 22
    }
];

export default products;