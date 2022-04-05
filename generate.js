// const generateElement = function (tagName, attributes, ...childs) {
//   const element = document.createElement(tagName);
//   if (attributes) {
//     Object.keys(attributes).forEach((key) => {
//       element.setAttribute(key, attributes[key]);
//     });
//   }
//   if (childs) {
//     childs.forEach((child) => {
//       if ("string" === typeof child) {
//         element.appendChild(document.createTextNode(child));
//       } else {
//         element.appendChild(child);
//       }
//     });
//   }
//   return element;
// };
// export default generateElement;
