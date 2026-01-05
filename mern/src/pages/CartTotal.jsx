import React, { useContext, useEffect, useState } from 'react';
import Title from '../context/Title';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
  const { purchasedcount } = useContext(ShopContext);
  const [ans, setAns] = useState(0);
  const shippingCharge = 10;

  useEffect(() => {
    let total = 0;
    for (const x of purchasedcount) {
      total += x.price;
    }
    setAns(total);
  }, [purchasedcount]);

  return (
    <div className="flex flex-col gap-2">
      <Title text1="TOTAL" text2="AMOUNT" />

      <p>The amount of your product is {ans}</p>
      <p>The shipping charge is {shippingCharge}</p>
      <p className="font-semibold">
        The total amount is {ans + shippingCharge}
      </p>
    </div>
  );
};

export default CartTotal;
