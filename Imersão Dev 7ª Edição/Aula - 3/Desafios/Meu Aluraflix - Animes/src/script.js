var listaAnimes = [
  "https://m.media-amazon.com/images/I/615UoMEsDEL.jpg",
  "https://m.media-amazon.com/images/I/81dH7-pkjiL.jpg",
  "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2015/06/16/dragon-ball-super.jpg",
  "https://media.fstatic.com/1ukTlWj2T6XQ7HW_Q4qkviTOPaA=/322x478/smart/filters:format(webp)/media/movies/covers/2023/01/132313l.jpg",
  "https://m.media-amazon.com/images/I/914-pZTMQRL.jpg"
];

var nomeAnimes = [
  "Tokyo Ghoul",
  "Attack on Titan",
  "Dragon Ball Super",
  "Tokyo Revengers",
  "Jujutsu Kaisen"
];



for (var i = 0; i < listaAnimes.length; i++) {
  document.write("<div style='display: inline-block; margin-bottom: 20px; margin-right: 20px; text-align: center;'>");
  document.write("<h3 style='background-color: black; color: white; padding: 5px; margin: 0;'>" + nomeAnimes[i] + "</h3>");
  document.write("<img src=" + listaAnimes[i] + ">");
  document.write("</div>");
}
