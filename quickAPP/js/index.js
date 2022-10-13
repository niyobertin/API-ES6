
function displyHoroscope() {
    const firstName = document.getElementById("fname").value;
    const secondName = document.getElementById("sname").value;
    const birthDay = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const horoscopeSign = document.getElementById("sign");
    const horoscopeAnimaleSign = document.getElementById("animalsign");
    const age = document.getElementById("years");
    const currentYear = new Date().getFullYear();
    const usersYear = currentYear - year;
    console.log(usersYear)
    const hello = document.getElementById("greet");

    if ((birthDay >= 21 && month === 3) || (birthDay <= 19 && month === 4)) {
        hello.innerHTML = `<h3>Hello ${firstName}, here there is your horoscope.</h3>`;
        horoscopeSign.innerHTML = `Sign : <b>ARIES</b>`;
        horoscopeAnimaleSign.innerHTML = `Animale sign : <b>Montain Sheep</b>`
        age.innerHTML = `Age : <b> ${usersYear}`;
    } else if ((birthDay >= 20 && month === 4) || (birthDay <= 20 && month === 5)) {
        hello.innerHTML = `<h3>Hello ${firstName}, here there is your horoscope.</h3>`;
        horoscopeSign.innerHTML = `Sign : <b>TARUS</b>`;
        horoscopeAnimaleSign.innerHTML = `Animale sign : <b>Bull</b>`;
        age.innerHTML = `Age : <b> ${usersYear}`;
    } else if ((birthDay >= 21 && month === 5) || (birthDay <= 21 && month === 6)) {
        hello.innerHTML = `<h3>Hello ${firstName}, here there is your horoscope.</h3>`;
        horoscopeSign.innerHTML = `Sign : <b>GERMINI</b>`;
        horoscopeAnimaleSign.innerHTML = `Animale sign : <b>Deer</b>`
        age.innerHTML = `Age :<b> ${usersYear}`;
    } else if ((birthDay >= 22 && month === 6) || (birthDay <= 22 && month === 7)) {
        hello.innerHTML = `<h3>Hello ${firstName}, here there is your horoscope.</h3>`;
        horoscopeSign.innerHTML = `Sign : <b>CANCER</b>`;
        horoscopeAnimaleSign.innerHTML = `Animale sign : <b>Crab or Elephent OR Rabbit</b>`
        age.innerHTML = `Age : <b> ${usersYear}`;
    } else if ((birthDay >= 23 && month === 7) || (birthDay <= 23 && month === 8)) {

        hello.innerHTML = `<h3>Hello ${firstName}, here there is your horoscope.</h3>`;
        horoscopeSign.innerHTML = `Sign : <b>LEO</b>`;
        horoscopeAnimaleSign.innerHTML = `Animale sign : <b>The Lion</b>`
        age.innerHTML = `Age :<b> ${usersYear}`;
    } else if ((birthDay >= 24 && month === 8) || (birthDay <= 22 && month === 9)) {
        hello.innerHTML = `<h3>Hello ${firstName}, here there is your horoscope.</h3>`;
        horoscopeSign.innerHTML = `Sign : <b>VIRUGO</b>`;
        horoscopeAnimaleSign.innerHTML = `Animale sign : <b>Bees</b>`
        usersYear.innerHTML = `Age : <b> ${usersYear}`;
    } else if ((birthDay >= 24 && month === 89) || (birthDay <= 22 && month === 10)) {
        hello.innerHTML = `<h3>Hello ${firstName}, here there is your horoscope.</h3>`;
        horoscopeSign.innerHTML = `Sign : <b>LOBRA</b>`;
        horoscopeAnimaleSign.innerHTML = `Animale sign : <b>Grey wolfe</b>`
        usersYear.innerHTML = `Age : <b> ${usersYear}`;
    } else if ((birthDay >= 23 && month === 10) || (birthDay <= 21 && month === 11)) {
        hello.innerHTML = `<h3>Hello ${firstName}, here there is your horoscope.</h3>`;
        horoscopeSign.innerHTML = `Sign : <b>SCROPION</b>`;
        horoscopeAnimaleSign.innerHTML = `Animale sign : <b>Scropion</b>`
        age.innerHTML = `Age : <b> ${usersYear}`;
    } else if ((birthDay >= 22 && month === 11) || (birthDay <= 21 && month === 12)) {
        hello.innerHTML = `<h3>Hello ${firstName}, here there is your horoscope.</h3>`;
        horoscopeSign.innerHTML = `Sign : <b>SAGUTTAEIUS</b>`;
        horoscopeAnimaleSign.innerHTML = `Animale sign : <b>Seal</b>`
        age.innerHTML = `Age : <b> ${usersYear}`;
    } else if ((birthDay >= 22 && month === 12) || (birthDay <= 20 && month === 1)) {
        hello.innerHTML = `<h3>Hello ${firstName}, here there is your horoscope.</h3>`;
        horoscopeSign.innerHTML = `Sign : <b>CAPRICORN</b>`;
        horoscopeAnimaleSign.innerHTML = `Animale sign : <b>Goat or Crocodile</b>`
        usersYear.innerHTML = `Age : <b> ${usersYear}`;
    } else if ((birthDay >= 21 && month === 1) || (birthDay <= 19 && month === 2)) {
        hello.innerHTML = `<h3>Hello ${firstName}, here there is your horoscope.</h3>`;
        horoscopeSign.innerHTML = `Sign : <b>AQUARIUS</b>`;
        horoscopeAnimaleSign.innerHTML = `Animale sign : <b>Dolphin and Zebra</b>`
        age.innerHTML = `Age :<b> ${usersYear}`;
    } else if ((birthDay >= 20 && month === 2) || (birthDay <= 20 && month === 3)) {
        hello.innerHTML = `<h3>Hello ${firstName}, here there is your horoscope.</h3>`;
        horoscopeSign.innerHTML = `Sign : <b>PISES</b>`;
        horoscopeAnimaleSign.innerHTML = `Animale sign : <b>Fish and Camereon</b>`
        age.innerHTML = `Age :<b> ${usersYear}`;
    } else {
        horoscopeSign.style.color = "green";
        horoscopeSign.innerHTML = `Incorrect birth date, <i>Try again!</i>`;
    }
}