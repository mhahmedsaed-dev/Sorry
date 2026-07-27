// =========================
// TYPEWRITER
// =========================

const message = `Dear Hibi...

Agar aap ye website dekh rahi hain...

To sab se pehle shukriya.

Main sirf itni guzarish karta hun...

Please is website ko end tak zaroor dekhiyega.

Ye sirf meri dil ki baat hai... ❤️`;

let index = 0;

function typeWriter() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    if (index < message.length) {

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }

}

window.onload = () => {

    typeWriter();

}


// =========================
// STARS
// =========================

const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);

}



// =========================
// HEARTS
// =========================

const hearts = document.getElementById("hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}, 300);



// =========================
// PETALS
// =========================

const petals = document.getElementById("petals");

setInterval(() => {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 12000);

}, 600);



// =========================
// MOUSE HEART TRAIL
// =========================

document.addEventListener("mousemove", function (e) {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = e.clientX + "px";

    heart.style.top = e.clientY + "px";

    heart.style.pointerEvents = "none";

    heart.style.fontSize = "18px";

    heart.style.opacity = "1";

    heart.style.transition = "1s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = "translateY(-40px) scale(1.5)";

        heart.style.opacity = "0";

    }, 10);

    setTimeout(() => {

        heart.remove();

    }, 1000);

});



// =========================
// TITLE GLOW EFFECT
// =========================

setInterval(() => {

    const title = document.getElementById("title");

    if (!title) return;

    title.style.transform = "scale(1.02)";

    setTimeout(() => {

        title.style.transform = "scale(1)";

    }, 500);

}, 1200);




// =========================
// RANDOM SPARKLES
// =========================

setInterval(() => {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.fontSize = (10 + Math.random() * 20) + "px";

    sparkle.style.opacity = "1";

    sparkle.style.transition = "2s";

    sparkle.style.pointerEvents = "none";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.style.opacity = "0";

        sparkle.style.transform = "scale(2)";

    }, 100);

    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}, 500);
// Envelope Animation
