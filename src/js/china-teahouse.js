import chineseCountingImg from "../assets/img/china/chinese-counting.jpg";
import eurekaIcon from "../assets/icons/eureka.png";
import eureka2xIcon from "../assets/icons/eureka-2x.png";

console.log("hello another");
let callout = document.querySelector(".callout--js");

let calloutContent = `
   <div>
      <img src=${eurekaIcon} alt="icon" class="callout__icon"
      srcset="${eureka2xIcon} 2x">
   </div>
   <div class="callout__wrapper">
      <h3 class="callout__title">
         Ciekawostka
      </h3>
      <p class="callout__description">
      W Chinach powszechne jest liczenie do dziesięciu używając palców jednej dłoni. Chińczycy mają własny system liczenia na palcach, dlatego mogą nas nie zrozumieć, jeżeli będziemy pokazywać cyfry po swojemu. Na przykład, mając na myśli „dwa”, nieświadomie możemy pokazać chińskie „osiem”. Jednak tak jak język chiński różni się w zależności od regionu, tak samo liczenie na dłoni również może wykazywać różnice. Liczba dziesięć pokazywana jest na trzy różne sposoby.
      </p>
    </div>
    <img src=${chineseCountingImg} class="callout__image" />
`;

callout.innerHTML = calloutContent;

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
  hamburger.classList.toggle("hamburger--clicked");
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
