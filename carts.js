import generateElement from "./generate";
const container = generateElement("div", { class: "container" });
function generateCart(name, age) {
  const cart = generateElement(
    "div",
    { class: "cart" },
    generateElement("p", null, `Name : ${name} `),
    generateElement("p", null, `Age : ${age} `)
  );
  return cart;
}
const users = [
  {
    name: "Moslem ❤️",
    age: "22 😊",
  },
  {
    name: "Ali 💀",
    age: "28 ✨",
  },
  {
    name: "Mohammad 💀",
    age: "31 ✨",
  },
];

users.forEach((data) => {
  container.appendChild(generateCart(data.name, data.age));
});
export default container;
