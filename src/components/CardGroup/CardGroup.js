import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
    const products = [
        {id:1, name: 'laptop apple', price: 125000},
        {id:2, name: 'laptop walton', price: 30000},
        {id:3, name: 'laptop dell', price: 30400},
        {id:4, name: 'laptop hp', price: 948343}
    ]
  return (
    <div>
      <h2>This is my cards</h2>
          <div className="card-group">
              {
                  products.map(product => <Card key={product.id} product={product}></Card>)
              }
              
      </div>
    </div>
  );
};

export default CardGroup;
