import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
        const products = [
          { id: 1, name: "laptop apple", price: 125000 },
          { id: 2, name: "laptop walton", price: 30000 },
          { id: 3, name: "laptop dell", price: 30400 },
          { id: 4, name: "laptop hp", price: 948343 },
        ];
    
    return (
      <div>
        <CardGroup>
          {products.map((product) => (
            <Card2 key={product.id} product={product}></Card2>
          ))}
        </CardGroup>
      </div>
    );
};

export default CardGroup2;