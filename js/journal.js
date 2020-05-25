let callout = document.querySelector(".callout--js");

let calloutContent = `
   <div>
      <img src="/images/eureka.png" alt="icon" class="callout__icon"
      srcset="/images/eureka 2x.png 2x">
   </div>
   <div class="callout__wrapper">
      <h3 class="callout__title">
         Ciekawostka (inserted with JS)
      </h3>
      <p class="callout__description">
      W Chinach powszechne jest liczenie do dziesięciu używając palców jednej dłoni. Chińczycy mają własny system liczenia na palcach, dlatego mogą nas nie zrozumieć, jeżeli będziemy pokazywać cyfry po swojemu. Na przykład, mając na myśli „dwa”, nieświadomie możemy pokazać chińskie „osiem”. Jednak tak jak język chiński różni się w zależności od regionu, tak samo liczenie na dłoni również może wykazywać różnice. Liczba dziesięć pokazywana jest na trzy różne sposoby.
      </p>
    </div>
    <img
  src="/images/china/teahouse/chinese-yellow2.jpg"
  class="callout__image"
  />
`;

callout.innerHTML = calloutContent;

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
