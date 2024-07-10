let clicks = 0;
let clickpower = 1;
let cps = 0;
let cursorprice = 10;
let cursors = 0;
let alltimeclicks = 0;
let clicksthisprestige = 0;
let prestigelvl = 0;
const name = document.getElementById("Name");
alert("It is reccomended that you visit this website in fullscreen! :)")
function add(amount) {
    clicks+= amount;
    checkClickCount();
    alltimeclicks += amount;
    clicksthisprestige += amount;
}
function buycursor() {
    if (clicks > cursorprice - 1) {
        clicks-= cursorprice;
        cursors++;
        cps+= 1;
        updatedisplay();
        cursorprice *= 1.04;
        document.getElementById("cursorprice").innerHTML = parseFloat(cursorprice).toFixed(2);
        checkClickCount();
    }
}
function cpsTick() {
    clicks += cps;
    checkClickCount();
}
setInterval(() => {
cpsTick();
},1000 )
function checkClickCount() {
    if(clicks < 2) {
        if(clicks < 1) {
            document.getElementById("ScoreTxt").innerHTML = Math.round(clicks) + " Clicks";
            document.querySelector(".alltimeclicks").innerHTML = Math.round(alltimeclicks).innerHTML = "Clicks (All Time) " + alltimeclicks;
            document.querySelector(".clicksthisascension").innerHTML = Math.round(clicksthisprestige).innerHTML = "Clicks (This prestige) " + clicksthisprestige;
        }
        else {
        document.getElementById("ScoreTxt").innerHTML = Math.round(clicks) + " Click";
        document.querySelector(".alltimeclicks").innerHTML = Math.round(alltimeclicks).innerHTML = "Clicks (All Time) " + alltimeclicks;
        document.querySelector(".clicksthisascension").innerHTML = Math.round(clicksthisprestige).innerHTML = "Clicks (This prestige) " + clicksthisprestige;
        }
        }
        else {
            document.getElementById("ScoreTxt").innerHTML = Math.round(clicks) + " Clicks";
            document.querySelector(".alltimeclicks").innerHTML = Math.round(alltimeclicks).innerHTML = "Clicks (All Time) " + alltimeclicks;
            document.querySelector(".clicksthisascension").innerHTML = Math.round(clicksthisprestige).innerHTML = "Clicks (This prestige) " + clicksthisprestige;
        }
        if(clicks > 999999) {
            if(clicks > 999999999) {
                if(clicks > 999999999999) {
                
                    document.getElementById("ScoreTxt").innerHTML = Math.round(clicks/1000000000000) + " Trillion Clicks";
                }
                else {
                document.getElementById("ScoreTxt").innerHTML = Math.round(clicks/1000000000) + " Billion Clicks";
                }
            }
            else {
            document.getElementById("ScoreTxt").innerHTML = Math.round(clicks/1000000) + " Million Clicks";
            }
        }
}
function updatedisplay() {
   document.getElementById("cp").innerHTML = clickpower + " Clickpower";
   document.getElementById("cps").innerHTML = cps + " Clicks per second";

}
function save() {
    localStorage.clear();
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('clickpower', clickpower);
    localStorage.setItem('cps', cps);
    localStorage.setItem('cursors', cursors)
    localStorage.setItem('cursorprice', cursorprice)
}
function load() {
    clicks = parseInt(localStorage.getItem('clicks')) || 0;
    clickpower = parseInt(localStorage.getItem('clickpower')) || 1;
    cps = parseInt(localStorage.getItem('cps')) || 0;
    cursors = parseInt(localStorage.getItem('cursors')) || 0;
    cursorprice = parseInt(localStorage.getItem('cursorprice')) || 10;
    checkClickCount();
    updatedisplay();
}
function changeName() {

}
function prestige() {
    if(clicks > 999999999) {
        prestigelvl = clicks /= 999999999;
        clicks = 0;
        clicksthisprestige = 0;
    }
    checkClickCount();
}
