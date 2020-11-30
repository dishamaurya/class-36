class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //update the distance and the name of the player in the database
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance

    });
  }
  //to write a function called getPlayerInfo() to get all the information of the player and store them inside the allPlayers variable
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');

    playerInfoRef.on("value",(data) => {
      allPlayers = data.val();
    })

}
} 


