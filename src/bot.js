const ssBot = document.createElement('div');
ssBot.id = "socialsparsh-bot"; ssBot.style.position = "fixed"; ssBot.style.bottom = "70px"; ssBot.style.right = "70px"; ssBot.style.display = "flex"; ssBot.style.flexDirection = "column-reverse"; ssBot.style.alignItems = "flex-end"
const ssbFrame = document.createElement("iframe");
ssbFrame.id = "ssb-frame"; ssbFrame.height = "500px"; ssbFrame.width = "300px"; ssbFrame.style.border = "0px"; ssbFrame.style.borderRadius = "10px"; ssbFrame.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px"; ssbFrame.style.display = "none";
ssBot.append(ssbFrame);
const button = document.createElement('button');
button.innerHTML = "open Bot";
ssBot.append(button);
let isOpen = false;
button.onclick = () => {
    ssbFrame.style.display = isOpen ? "none" : "block"
    isOpen = !isOpen;
}
ssbFrame.src = 'http://localhost:5174/'
document.body.append(ssBot);
ssBot.append(ssbFrame);