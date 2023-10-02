import React from 'react';

const PhoneCard = ({ phone }) => {
  const { name, price, } = phone || {}

  console.log(price)
  return (
    <div>
      <p>name : {name} </p>
    </div>
  );
};

export default PhoneCard;