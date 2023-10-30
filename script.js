// Bir funksiya yaziriq .
//Kreditə götürdüyümüz pul və aylıq(necə ay ödəməliyəm) parametr verilir. Pul bərabər hissələrə bölünərək hər ay verilməlidir.
// Məs:1000 manat götürülür, 3 ayliq. Ekrana yazdirilmalidir: 1-ci ay 333manat,2-ci ay 333manat,3-cu ay 334 manat;
function findCredit(manats, months) {
  let credit = Math.floor(manats / months);
  let modulo = manats - (months - 1) * credit;
  for (let i = 0; i < months; i++) {
    if (i === months - 1) {
      console.log(`${i + 1} month credit is ${modulo}`);
    } else {
      console.log(`${i + 1} month credit is ${credit}`);
    }
  }
}
console.log(findCredit(1000, 3));
