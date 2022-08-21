import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'Laptop one', price: 60000 },
        { id: 2, name: 'Laptop two', price: 76000 },
        { id: 3, name: 'Laptop three', price: 120000 },

    ]
    return (
        <div>
            <h2>This is my cards</h2>
            <div className="card-group">
                {
                    products.map(product => <Card product={product} key={product.id}></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;