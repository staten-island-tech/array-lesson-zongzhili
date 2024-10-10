// const students = [
//   { name: "Alice", age: 20, grade: 85 },
//   { name: "Bob", age: 22, grade: 90 },
//   { name: "Charlie", age: 21, grade: 78 },
//   { name: "Diana", age: 23, grade: 95 },
// ];

// const topStudents = students.filter(
//   (student) => student.age <= 21 && student.grade > 80
// );

// topStudents.forEach((student) => console.log(student));
//pt 3

//assignment 2
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];
const updatedProducts = products.map((product) => ({
  ...product,
  price: (product.price * 1.1).toFixed(2),
}));
updatedProducts.forEach((product) => console.log(product.name, product.price));

const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);

const expensiveProducts = products.filter(
  (product) =>
    product.price > 300 &&
    product.rating >= 4.5 &&
    product.category === "Electronics" &&
    product.price < 1000
);
console.log("Expensive and Highly Rated Electronics:", expensiveProducts);