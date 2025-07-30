const btn = document.getElementById("startBtn");
const textArea = document.getElementById("textArea");
const paragraph = document.getElementById("randomParagraph");
// console.dir(btn);
// console.log(textArea);
// console.log(paragraph);

const arr = [
  "The quick brown fox jumps over a lazy dog.",
  "Pack my box with five dozen liquor jugs.",
  "How vexingly quick daft zebras jump!",
  "Sphinx of black quartz, judge my vow.",
  "Jackdaws love my big sphinx of quartz.",
  "Waltz, bad nymph, for quick jigs vex.",
  "The five boxing wizards jump quickly.",
  "Jived fox nymph grabs quick waltz.",
  "Quick zephyrs blow, vexing daft Jim.",
  "Two driven jocks help fax my big quiz.",
  "Grumpy wizards make toxic brew for the jovial queen.",
  "Big Fuji waves mock Zach the expert juggler.",
];

const randInd = Math.round(Math.random() * 11);
// console.log(randInd);
const para = arr[randInd];
paragraph.innerText = para;

const paraArray = [...para];

let firstKeyPressed = false,
  start,
  index = 0;
document.addEventListener("keyup", function (event) {
  if (!firstKeyPressed) {
    start = performance.now();
    firstKeyPressed = true;
  }
});

textArea.addEventListener("input", function (event) {
  console.log(event.data);
  console.log(paraArray);
  console.log(index);

  if (paraArray[index] == event.data) {
    const result = paraArray
      .map((char, idx) => {
        if (index == idx) {
          return `<span style="background-color:lightgreen;">${char}</span>`;
        } else {
          return `<span>${char}</span>`;
        }
      })
      .join("");
    index++;

    paragraph.innerHTML = result;
  } else {
    const result = paraArray
      .map((char, idx) => {
        if (index == idx) {
          return `<span style="background-color:red;">${char}</span>`;
        } else {
          return `<span>${char}</span>`;
        }
      })
      .join("");

    paragraph.innerHTML = result;
  }
});
