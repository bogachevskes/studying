new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage,
            })

            if (this.checkWin()) {
                return true;
            }

            this.monsterAttacks();

            this.checkWin();
        },
        specialAttack: function () {
            let damage = this.calculateDamage(10, 20);
            
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage,
            })
            
            this.monsterHealth -= damage;

            if (this.checkWin()) {
                return true;
            }

            this.monsterAttacks();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }

            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10',
            })
            
            return this;
        },
        giveUp: function () {
            this.gameIsRunning = false;

            return this;
        },
        monsterAttacks: function () {
            let damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;

            this.checkWin();

            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage,
            })
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                
                if (confirm("You won! Are you want new game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }

                return true;
            } else if (this.playerHealth <= 0) {
                
                if (confirm("You lost! Are you want new game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }

                return true;
            }

            return false;
        }
    },
});