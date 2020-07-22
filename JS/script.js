const button = document.querySelector(".talk");
const content = document.querySelector(".content");


//
const greetings = [
  'Im good you little pices of love;',
  'Doing good homobi',
  'leave me alone'
];
const weather = [
  "Weater is fine",
  "You need a tan"
];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Voice recognition is activated. YOu can speak now.");
};

recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  readOutLoud(transcript);
}

button.addEventListener('click', () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "I can't understand you.";

  if (message.includes('how are you')) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }
  if (message.includes("")) {
    const finalText = "I can't hare anything";
    speech.text = finalText;
  }


  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  content.textContent = speech.text;

}