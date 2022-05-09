// const randomColor = Math.floor(Math.random() * 16777215).toString(16);
// export default randomColor;
export default function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
