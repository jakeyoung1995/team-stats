/* The purpose of this project is to show object creation and manipulation in javaScript */


// Start "team" object
const team = {

  // _players array to contain the current roster
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 17
    },
    {
      firstName: 'Ryan',
      lastName: 'Getzlaf',
      age: 30
    },
    {
      firstName: 'Speedy',
      lastName: 'Gonzalez',
      age: 25
    }
  ],

  // _games array containing game record
  _games: [
    {
      opponent: 'Coyotes',
      teamPoints: 4,
      opponentPoints: 2
    },
    {
      opponent: 'Red Wings',
      teamPoints: 3,
      opponentPoints: 2
    },
    {
      opponent: 'Kings',
      teamPoints: 6,
      opponentPoints: 0
    },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

// Method used to add a player to the _player array
  addPlayer (firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player);
  },

// Method used to add a game to the _games array
  addGame (opponentName, teamPoints, opponentPoints) {
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this.games.push(game);
  }
}; // End team object

// Testing addPlayer method
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Adam', 'Sandler', 40);
team.addPlayer('Wayne', 'Gretzky', 55);
// Testing addGame method
team.addGame('Hurricanes', 5, 6);
team.addGame('Bruins', 4, 1);
team.addGame('Sharks', 1, 0);

// Testing addPlayer method
console.log(team._players);
// Testing addGame method
console.log(team._games);
