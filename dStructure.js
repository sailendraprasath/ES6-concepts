// D structure

const id = 1;
const productName = "Apple watch";
const rating = 5;

const products = {
  id,
  productName,
  rating,
};

console.log(products);

const Data = { ...products };

Data.productName = "Soney TV";
Data.id = 2;

console.log(Data);

// in Array

const Array = [1, 2, 3];

const getArray = Array.length;

console.log(getArray);

const [first, secound] = Array;
console.log(`${first},${secound}`);
