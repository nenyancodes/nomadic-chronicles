
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

// const greetUser = () => {
//   const userName = prompt(`Hi! What's your name?`);

//   if (userName == "X Æ A-12") {
//     alert(
//       `Nice to see you, ${userName}! You've got the weirdest name on Earth! Now... be so kind and SEND ME A TESLA!!`
//     );
//   } else if (userName) {
//     alert(`Nice to see you, ${userName}!`);
//   } else {
//     alert(`Nice to see you, nameless/lazy human!`);
//   }
// };

// greetUser();
