function acceptPledge() {
    let btn = document.querySelector('.accept-btn');
    let msg = document.getElementById('confirmation-msg');

    btn.innerText = "✔️ Pledged!";
    btn.style.background = "#d4af37"; // Gold after clicking
    msg.classList.remove("hidden");
}