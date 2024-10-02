
# JavaScript Array Methods Practice: `forEach` and `filter`

## Assignment 1: Practicing `forEach` and `filter` with Student Data

### Objective:
The goal of this assignment is to help you understand how to use the `forEach` and `filter` array methods in JavaScript. By the end of this assignment, you should be able to:
- Iterate over arrays using `forEach`.
- Filter arrays based on specific conditions using `filter`.

### Instructions:

### Part 1: Practice with `forEach`
You will be working with an array of student objects. Each object will contain information about a student's name, age, and grade. Your task is to use `forEach` to:

1. **Log each student’s name and grade**.

```javascript
const students = [
  { name: 'Alice', age: 20, grade: 85 },
  { name: 'Bob', age: 22, grade: 90 },
  { name: 'Charlie', age: 21, grade: 78 },
  { name: 'Diana', age: 23, grade: 95 },
];

// 1. Log each student’s name and grade

```

### Part 2: Practice with `filter`
Using the same `students` array, use `filter` to:

1. **Filter students with grades above 80**.

```javascript
const topStudents = 
console.log(topStudents)
```

2. **Filter students who are 21 or younger**.

```javascript
const youngStudents =
```

### Part 3: Combined `forEach` and `filter`

1. **Log the names of students who scored above 80**.

```javascript

```

2. **Log the names of students 21 or younger**.

```javascript

```

---

## Assignment 2: Practicing `forEach` and `filter` with Product Data

### Array of Products:

```javascript
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
  { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
  { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
  { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
  { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
  { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
  { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
];
```

### Part 1: Practice with `forEach`

1. **Display Product Details**: Log the name and price of each product.

```javascript

```

2. **Increase Price**: Increase the price of each product by 10% and log the updated products.

```javascript

```

3. **Summarize Categories**: Use `forEach` to create a list of all unique categories in the products array.

```javascript
const categories = [];
products.forEach(product => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log('Unique Categories:', categories);
```

### Part 2: Practice with `filter`

1. **Filter by Category**: Create a new array that only includes products from the 'Electronics' category.

```javascript
const electronics = products.filter(product => product.category === 'Electronics');
console.log('Electronics:', electronics);
```

2. **Filter by Price**: Filter products that cost more than $300 and store them in a new array.

```javascript
const expensiveProducts = products.filter(product => product.price > 300);
console.log('Expensive Products:', expensiveProducts);
```

3. **Highly Rated Products**: Filter products with a rating of 4.5 or above.

```javascript

```

### Part 3: Combined `forEach` and `filter`

1. **Log Highly Rated Product Names**: Use `filter` to get the highly rated products (rating >= 4.5) and then use `forEach` to log only their names.

```javascript

```

2. **Affordable Electronics**: Use `filter` to find all the products in the 'Electronics' category that are priced below $1000. After filtering, use `forEach` to log their details.

```javascript

```

---

