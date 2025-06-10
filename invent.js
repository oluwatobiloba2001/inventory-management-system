const inventory = [];

const findProductIndex = product => {
  for(let i = 0; i < inventory.length; i++){
    if(inventory[i].name === product.toLowerCase()){
      return i;
    }
  }
  return -1;
};


function addProduct(product){
  const productIndex = findProductIndex(product.name.toLowerCase());
  if(productIndex === -1){
    inventory.push({name: product.name.toLowerCase(), quantity: product.quantity});
    console.log(`${product.name.toLowerCase()} added to inventory`);
  }
  else{
    inventory[productIndex].quantity += product.quantity;
    console.log(`${product.name.toLowerCase()} quantity updated`);
  }
};

addProduct({ name: "FLOUR", quantity: 5 });
addProduct({ name: "FLOUR", quantity: 10 });

const removeProduct = (productName, quantity) =>{
    const productIndex = findProductIndex(productName.toLowerCase());
    if(productIndex === -1){
        console.log(`${productName.toLowerCase()} not found`);
    }else{
        let remainingQuantity = inventory[productIndex].quantity -= quantity;
        if(remainingQuantity === 0){
            inventory.splice(productIndex, 1);
            ;
        }else if(remainingQuantity < 0){
          inventory[productIndex].quantity += quantity;
          console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[productIndex].quantity}`)
        }
        else if(remainingQuantity > 0){
          console.log(`Remaining ${productName.toLowerCase()} pieces: ${inventory[productIndex].quantity}`)
        }
    }
};