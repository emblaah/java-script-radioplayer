// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const channelElement = document.getElementById("channels");

async function getStations() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();
  console.log(data);

  data.channels.forEach((data) => {
    const parentDiv = document.createElement("div");
    const titleAndPlayer = document.createElement("div");
    const channelName = document.createElement("h2");
    const channelImg = document.createElement("img");
    const channelAudio = document.createElement("audio");

    channelName.className = "channelName";
    channelImg.className = "channelImg";
    channelAudio.className = "channelAudio";
    parentDiv.className = "parentDiv";
    titleAndPlayer.className = "titleAndPlayer";
    
    parentDiv.style.backgroundColor = `#${data.color}`;

    channelImg.src = data.image;
    channelName.innerHTML = data.name;
    channelAudio.src = data.liveaudio.url;
    channelAudio.controls = true;
    channelAudio.type = "audio/mpeg";


    channelElement.appendChild(parentDiv);
    parentDiv.appendChild(channelImg);
    parentDiv.appendChild(titleAndPlayer);
    titleAndPlayer.appendChild(channelName);
    titleAndPlayer.appendChild(channelAudio);
  });
}

getStations();
