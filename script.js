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
  "The quick brown fox jumps over a lazy dog near the zigzagging riverbank, astonishing everyone with its grace and speed.",
  "Pack my box with five dozen liquor jugs and gently place them next to the whimsical zebra painting hung above the fireplace.",
  "How vexingly quick daft zebras jump across the lush valley while jolly kids dance to buzzing music in the plaza.",
  "Sphinx of black quartz, judge my vow while the wizard brews a magical potion beside the flickering torchlight in the dim cave.",
  "Jackdaws love my big sphinx of quartz that guards the enchanted temple surrounded by whispering pine trees and glowing fireflies.",
  "Waltz, bad nymph, for quick jigs vex the stoic king who ponders quietly near the glimmering waterfall on a foggy night.",
  "The five boxing wizards jump quickly through flaming hoops to amaze the royal guests seated under the starry sky in silence.",
  "Jived fox nymph grabs quick waltz as a dazzling display of lightning arcs above the cliff near the frozen lake in winter.",
  "Quick zephyrs blow, vexing daft Jim as he navigates the maze of neon signs flashing wildly across the midnight carnival square.",
  "Two driven jocks help fax my big quiz answers to the quirky professor who sips herbal tea while balancing books on his head.",
  "Grumpy wizards make toxic brew for the jovial queen while juggling flaming torches and taming a zebra wearing a velvet crown.",
  "Big Fuji waves mock Zach the expert juggler who balances quartz spheres atop a bamboo stick on a windy mountaintop plateau.",
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
let t = 0,
  intervalId;
document.addEventListener("keyup", function (event) {
  if (!firstKeyPressed) {
    start = performance.now();
    // console.log(start);
    firstKeyPressed = true;
    intervalId = setInterval(() => {
      t++;
      // console.log("ieie");
      time.innerText = t;
    }, 1000);
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

      clearInterval(intervalId);
    }

    paragraph.innerHTML = result;
  } else {
    wrongChar++;
    const result = paraArray
      .map((char, idx) => {
        if (index == idx) {
          return `<span style="background-color:salmon;">${char}</span>`;
        } else {
          return `<span>${char}</span>`;
        }
      })
      .join("");

    paragraph.innerHTML = result;
  }
});

btn.addEventListener("click", () => {
  location.reload();
});
