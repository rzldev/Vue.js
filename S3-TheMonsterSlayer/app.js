new Vue({
  el: '#app',
  data: {
    humanHealthBar: 100,
    monsterHealthBar: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.monsterHealthBar = 100;
      this.humanHealthBar = 100;
      this.turns = [];
    },
    attack: function() {
      const monsterDamage = this.calculateDamage(3, 15);
      this.monsterHealthBar -= monsterDamage;

      this.turns.unshift({
        isPlayer: true,
        text: 'Monster takes ' + monsterDamage + ' damages'
      });

      if (this.checkWin()) {
        return;
      }

      this.monsterAttack();
    },
    specialAttack: function() {
      const monsterDamage = this.calculateDamage(15, 25);
      this.monsterHealthBar -= monsterDamage;

      this.turns.unshift({
        isPlayer: true,
        text: 'Monster takes ' + monsterDamage + ' damages'
      });

      if (this.checkWin()) {
        return;
      }

      this.monsterAttack();
    },
    heal: function() {
      const humanHeal = this.calculateDamage(30, 40);
      this.humanHealthBar += humanHeal;

      this.turns.unshift({
        isPlayer: true,
        text: 'Humans takes ' + humanHeal + ' heals'
      });

      if (this.humanHealthBar >= 100) {
        this.humanHealthBar = 100;
      }

      if (this.checkWin()) {
        return;
      }

      this.monsterAttack();
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    monsterAttack: function() {
      const humanDamage = this.calculateDamage(10, 30);
      this.humanHealthBar -= humanDamage;

      this.turns.unshift({
        isPlayer: false,
        text: 'Human takes ' + humanDamage + ' damages'
      });

      this.checkWin();

    },
    calculateDamage: function(minAttack, maxAttack) {
      return Math.max(Math.floor(Math.random() * maxAttack) + 1, minAttack);
    },
    checkWin: function() {
      if (this.monsterHealthBar <= 0) {
        if (confirm('You won! want to play again?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;

      } else if(this.humanHealthBar <= 0) {
        if (confirm('You lost! want to play again?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }

      return false;
    }
  }
});
