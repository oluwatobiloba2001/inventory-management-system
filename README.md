Inventory Management System

---

## Overview

This project implements a simple inventory management system in JavaScript. The system supports adding, updating, and removing products in an inventory. It handles edge cases such as attempting to remove non-existent products or insufficient quantities, ensuring robust and reliable inventory operations.

---

## Features

1. **Add Products**:

   * Adds a new product to the inventory.
   * If the product already exists, it updates the product's quantity.

2. **Remove Products**:

   * Decreases the quantity of a product in the inventory.
   * Automatically removes a product from the inventory when its quantity becomes zero.
   * Prevents removing more items than are available, displaying appropriate feedback.

3. **Find Product Index**:

   * Locates a product in the inventory based on its name, returning its index.

---

## Getting Started

### Prerequisites

* A JavaScript runtime environment (e.g., Node.js or a browser).

### Installation

1. Clone or download this project.
2. Open the code in your preferred IDE or editor.

### Usage

1. Copy the code into your JavaScript runtime environment.
2. Use the `addProduct` and `removeProduct` functions to manage the inventory.

---

## API Documentation

### `addProduct(product)`

Adds a product to the inventory or updates the quantity of an existing product.

**Parameters**:

* `product` (Object): An object with:

  * `name` (String): The product name (case-insensitive).
  * `quantity` (Number): The quantity to add.

**Example**:

```javascript
addProduct({ name: "FLOUR", quantity: 5 });
// Logs: "flour added to inventory"

addProduct({ name: "FLOUR", quantity: 10 });
// Logs: "flour quantity updated"
```

---

### `removeProduct(productName, quantity)`

Removes a specified quantity of a product from the inventory.

**Parameters**:

* `productName` (String): Name of the product (case-insensitive).
* `quantity` (Number): Quantity to remove.

**Example**:

```javascript
removeProduct("FLOUR", 5);
// Logs: "Remaining flour pieces: 10"

removeProduct("FLOUR", 10);
// Logs: "All flour removed from inventory"

removeProduct("FLOUR", 1);
// Logs: "flour not found"
```

---

### `findProductIndex(product)`

Finds the index of a product in the inventory array by name.

**Parameters**:

* `product` (String): Name of the product (case-insensitive).

**Returns**:

* `Number`: The index of the product in the inventory, or `-1` if not found.

---

## Example Usage

```javascript
addProduct({ name: "FLOUR", quantity: 5 });
// Logs: "flour added to inventory"

addProduct({ name: "FLOUR", quantity: 10 });
// Logs: "flour quantity updated"

removeProduct("FLOUR", 5);
// Logs: "Remaining flour pieces: 10"

removeProduct("FLOUR", 10);
// Logs: "All flour removed from inventory"

removeProduct("FLOUR", 1);
// Logs: "flour not found"
```

---

## Edge Case Handling

1. **Product Not Found**:

   * If a product does not exist in the inventory, the system logs that the product is not found.

2. **Insufficient Quantity**:

   * Prevents reducing the product quantity below zero and logs a message indicating the current available quantity.

3. **Quantity Reduction to Zero**:

   * Automatically removes the product from the inventory when the quantity becomes zero.

---

## Project Structure

This project uses the following functions:

1. `findProductIndex`: Finds the index of a product in the inventory.
2. `addProduct`: Adds a new product or updates an existing one.
3. `removeProduct`: Removes or decreases the quantity of a product.

---

## Author

This script was created as an example of a basic inventory management system in JavaScript. Contributions and suggestions are welcome to improve functionality.

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the license terms.
