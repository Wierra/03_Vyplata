const hodinaSazba = Number(prompt("Zadej svou hodinovou sazbu v Kč."))
const doba = 8
const delka = 21

const mzda = hodinaSazba * doba * delka

document.body.innerHTML += "<p>Hrubá mzda uživatele činí " + mzda + " Kč/měsíc.</p>"
