const btn = document.getElementById("startBtn");
const textArea = document.getElementById("textArea");
const paragraph = document.getElementById("randomParagraph");
const time = document.getElementById("time");
const speed = document.getElementById("speed");
const accuracy = document.getElementById("accuracy");
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
  index = 0,
  wrongChar = 0,
  endTime;
document.addEventListener("keyup", function (event) {
  if (!firstKeyPressed) {
    start = performance.now();
    firstKeyPressed = true;
  }
});

textArea.addEventListener("input", function (event) {
  // console.log(event.data);
  // console.log(paraArray);
  // console.log(index);

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
    if (index == para.length) {
      // textArea.setAttribute("readonly", "true");
      textArea.readOnly = true;

      endTime = performance.now();
      const totalTime = Math.ceil((endTime - start) / 1000);
      time.innerText = `${totalTime}s`;

      const acc = Math.ceil(((para.length - wrongChar) * 100) / para.length);
      accuracy.innerText = `${acc}%`;

      const sp = Math.ceil((para.length * 60) / totalTime);
      speed.innerText = `${sp}CPM`;
    }

    paragraph.innerHTML = result;
  } else {
    wrongChar++;
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
