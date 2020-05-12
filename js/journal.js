let callout = document.querySelector(".callout--js");

let calloutContent = `
   <div>
      <img src="/images/eureka.png" alt="icon" class="callout__icon"
      srcset="/images/eureka-2x.png 2x">
   </div>
   <div class="callout__wrapper">
      <h3 class="callout__title">
Ciekawostka (inserted with JS)
</h3>
      <p class="callout__description">
      W Chinach powszechne jest liczenie do dziesięciu używając palców jednej dłoni. Chińczycy mają własny system liczenia na palcach, dlatego mogą nas nie zrozumieć, jeżeli będziemy pokazywać cyfry po swojemu. Na przykład, mając na myśli „dwa”, nieświadomie możemy pokazać chińskie „osiem”.
      </p>
    </div>
<img
  src="/images/china/teahouse/chinese-yellow2.jpg"
  class="callout__image"
/>
`;

callout.innerHTML = calloutContent;

titbit.innerHTML = titbitContent;
