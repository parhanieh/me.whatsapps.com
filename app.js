let callAccepted = localStorage.getItem("callAccepted") === "true";
const adLink = "https://www.effectivecpmrate.com/s7hqmurbjq?key=fcc86c5f98b44a01fa708a49a10b1723";

const startScreen = document.getElementById("start-screen");
const incomingCall = document.getElementById("incoming-call");
const videoCall = document.getElementById("video-call");
const startCallBtn = document.getElementById("startCallBtn");
const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");
const endCallBtn = document.getElementById("endCallBtn");

let ringtone;

// Cek apakah sudah pernah accept -> langsung redirect
if (callAccepted) {
  window.location.href = adLink;
}

startCallBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  incomingCall.classList.remove("hidden");

  // Play ringtone
  ringtone = new Audio("https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg");
  ringtone.loop = true;
  ringtone.play().catch(err => console.log("Autoplay blocked:", err));
});

acceptBtn.addEventListener("click", () => {
  if (ringtone) ringtone.pause();
  incomingCall.classList.add("hidden");
  videoCall.classList.remove("hidden");
  localStorage.setItem("callAccepted", "true");
});

declineBtn.addEventListener("click", () => {
  if (ringtone) ringtone.pause();
  incomingCall.classList.add("hidden");
  startScreen.classList.remove("hidden");
});

endCallBtn.addEventListener("click", () => {
  videoCall.classList.add("hidden");
  window.location.href = adLink;
});
