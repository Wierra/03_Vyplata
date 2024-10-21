const hodinaSazba = Number(prompt("Zadej svou hodinovou sazbu v Kč."))
const doba = Number(prompt("Zadej počet hodin za den", "8"))
const delka = Number(prompt("Zadej počet odpracovaných dní v měsíci." , "21"))

const mzda = hodinaSazba * doba * delka

document.body.innerHTML += "<p>Hrubá mzda uživatele činí " + mzda + " Kč/měsíc.</p>"

document.body.innerHTML += '12' % '5';


//řešení Michal
//const hodinovaSazba = Number(prompt("Jaká je vaše hodinová sazba?"));
//const pocetHodin = Number(prompt("Kolik hodin denně pracujete?"));
//const pocetDni = Number(prompt("Kolik dní měsíčně pracujete?"));
//document.body.innerHTML += "<p>Vaše vyplata činí " + (hodinovaSazba*pocetHodin*pocetDni) + " korun</p>";