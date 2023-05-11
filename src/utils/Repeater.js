export default function Repeater(string1, string2, num) {
  let temp = [];
  for (let i = 0; i < num; i++) {
    if (Math.random() > 0.5) {
      temp.push(string1);
    } else {
      temp.push(string2);
    }
  }

  return temp;
}
