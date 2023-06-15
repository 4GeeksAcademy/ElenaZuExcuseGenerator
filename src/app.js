let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomNumber2 = Math.floor(Math.random() * 3);
  var randomNumber3 = Math.floor(Math.random() * 4);
  var randomNumber4 = Math.floor(Math.random() * 4);

  let excuse =
    who[randomNumber] +
    " " +
    action[randomNumber3] +
    " " +
    what[randomNumber2] +
    " " +
    when[randomNumber4];
  let answer = document.getElementById("excuse");
  answer.innerText = excuse;
};
