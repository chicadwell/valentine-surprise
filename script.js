document.addEventListener("DOMContentLoaded", function() {
    let phrases = [
        "I love your eyes, Ariana ❤️",
        "I love your smile, Ariana 😊",
        "You make me happy every day 💖",
        "You're my everything, Ariana 💕",
        "Chika loves you more than anything in the world 🌎",
        "You're the best thing that ever happened to me 🌟",
        "I can't stop thinking about you 💭",
        "Forever and always, Ariana ❤️",
        "You're my dream come true ✨",
        "You are the love of my life 💘",
        "Every moment with you is special 💑",
        "I love you more than words can say 💓"
    ];
    let background = document.querySelector(".background-text");
    for (let i = 0; i < 20; i++) {
        let text = document.createElement("div");
        text.classList.add("love-text");
        text.innerText = phrases[Math.floor(Math.random() * phrases.length)];
        text.style.left = Math.random() * 100 + "vw";
        text.style.top = Math.random() * 100 + "vh";
        text.style.animationDuration = (8 + Math.random() * 5) + "s";
        background.appendChild(text);
    }
});
function showLove() {
    alert("Yay! I love you too ❤️");
}
function showSad() {
    alert("Oh no! But I still love you 💔");
}