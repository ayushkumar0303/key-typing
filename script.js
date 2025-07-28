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

paragraph.innerText = arr[randInd];
