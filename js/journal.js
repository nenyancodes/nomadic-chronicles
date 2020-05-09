let name = `Anka`;
let city = `Kraków`;

console.log(
  `Witaj na mojej stronie! Nazywam się ${name}. Obecnie mieszkam w mieście: ${city}. Pozdrawiam!`
);

let titbit = document.querySelector(".journal-post__titbit-wrapper");

let titbitContent = `<aside class="journal-post__titbit">
<h3 class="journal-post__titbit-title">
Ciekawostka
</h3>
<p class="journal-post__titbit-text">Chińskie pokazywanie cyfr od 1 do 10 na palcach jednej ręki</p>
<img
  src="/images/china/teahouse/chinese-yellow.jpg"
  class="journal-post__titbit-image"
/>
</aside>`;

titbit.innerHTML = titbitContent;
