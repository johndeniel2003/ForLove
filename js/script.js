

const messages = {
  msg1: "Hi love! how's your day?",
  msg2: "Are you doing alright?",
  msg3: "If yes, it's good to know that",
  msg4: "If it's not, I want you to have this",
  msg5 : "Feeling good? now i want you to click the button"
};
const msgContainer = document.querySelector('#messages');
const cat = document.querySelector('#cat');
const sCat = document.querySelector('.cat');
const clickMe = document.querySelector('#clickMe');
const overLayMsg = document.querySelector('.overlaymsg');
let audio = document.getElementById("audio");
        

let counter = 0;

async function showMessages() {
  const messageList = [messages.msg1, messages.msg2, messages.msg3, messages.msg4];
  const delay = 1000; // Delay in milliseconds

  for (const message of messageList) {
    await typing(message, delay);
    msgContainer.textContent = ''; // Assuming you want to clear the container after each message
  }
  cat.style.display = 'block';

  // Assuming there's a delay for showing the cat image
  await new Promise((resolve) => setTimeout(resolve, 3500));

  // Show the fifth message
  await typing(messages.msg5, 1000);


}

function typing(msg,delay) {
  return new Promise((resolve) => {
    let length = msg.length;

    function typeCharacter(index) {
      if (index < length) {
        msgContainer.textContent += msg.charAt(index);
        setTimeout(() => typeCharacter(index + 1), 230);
      } else {
        setTimeout(resolve,delay) // Resolve the promise when typing is complete
      }
    }

    typeCharacter(0); // Start typing
  });
}

showMessages()
  .then(() => {
    msgContainer.innerHTML = '';
    cat.style.display = 'none';
    sCat.style.display = 'block';
    clickMe.style.display = 'block';
  })
  .catch((err) => {
    console.error("An error occurred:", err);
  });

clickMe.addEventListener('click',()=>{
  sCat.style.display = 'none';
  clickMe.style.display = 'none';
  audio.play();

    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 400);

    const text = setTimeout(()=>{
      overLayMsg.style.display = 'block';
      clearTimeout(text);
    },5000)
});

