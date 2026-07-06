function filterByCategory(products, category) {
  return products.filter((product) => product.category === category);
}
function filterByMaxPrice(products, maxPirce) {
  return products.filter((product) => product.price <= maxPirce);
}
function getInStockProducts(products) {
  return products.filter((product) => product.inStock == true);
}
function findProductById(products, productId) {
  return products.filter((product) => product.id === (productId || undefined));
}
function searchProducts(products, seachText) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(seachText.toLowerCase()),
  );
}
const products = [
  { id: 1, name: "Notebook", category: "stationery", price: 10, inStock: true },
  { id: 2, name: "Desk Lamp", category: "home", price: 35, inStock: false },
  { id: 3, name: "Pen Set", category: "stationery", price: 6, inStock: true },
  {
    id: 4,
    name: "Water Bottle",
    category: "fitness",
    price: 18,
    inStock: true,
  },
];

console.log(
  filterByCategory(products, "stationery").map((product) => product.name),
);
console.log(filterByMaxPrice(products, 20).map((product) => product.name));
console.log(findProductById(products, 3));
console.log(searchProducts(products, "pen").map((product) => product.name));
console.log(getInStockProducts(products).map((product) => product.name));
console.log(findProductById(products, 99));
