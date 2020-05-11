let name = `Anka`;
let city = `Kraków`;

console.log(
  `Witaj na mojej stronie! Nazywam się ${name}. Obecnie mieszkam w mieście: ${city}. Pozdrawiam!`
);

let titbit = document.querySelector(".journal__titbit-wrapper--js");

let titbitContent = `<aside class="journal__titbit">
<h3 class="journal__titbit__title">
Ciekawostka (inserted with JS)
</h3>
<p class="journal__titbit__text">Chińskie pokazywanie cyfr od 1 do 10 na palcach jednej ręki</p>
<img
  src="/images/china/teahouse/chinese-yellow.jpg"
  class="journal__titbit__image"
/>
</aside>`;

titbit.innerHTML = titbitContent;
