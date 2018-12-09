// w tym pliku powinny być te require do webpacka, ale nie wyszlo, poki co calosc kodu po prostu
// w osobnych plikach jest juz dobrze poporcjowane ;) czyli część kodu się powtarza
document.addEventListener("DOMContentLoaded", function (event) {

    function Ball() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }

    function Madcat() {
        this.x = 0;
        this.y = 0;
        this.direction = "right";
    }



    function Game() {
        this.board = document.querySelectorAll("#board div");
        this.madcat = new Madcat();
        this.ball = new Ball();
        this.score = 0;
        this.index = function (x, y) {
            return x + (y * 10);
        };
        this.isOver = false;

        this.showMadcat = function () {
            this.board[this.index(this.madcat.x, this.madcat.y)].classList.add('madcat');
        };
        this.showBall = function () {
            this.board[this.index(this.ball.x, this.ball.y)].classList.add('ball');
        };
        this.startGame = function () {
            var self = this;
            this.showMadcat();
            this.showBall();
            this.idSetInterval = setInterval(function () {
                self.moveMadcat();
            }, 250);

        };
        this.moveMadcat = function () {
            this.hideVisibleMadcat();
            if (this.madcat.direction === "right") {
                this.madcat.x = this.madcat.x + 1;
            } else if (this.madcat.direction === "left") {
                this.madcat.x = this.madcat.x - 1;
            } else if (this.madcat.direction === "up") {
                this.madcat.y = this.madcat.y - 1;
            } else if (this.madcat.direction === "down") {
                this.madcat.y = this.madcat.y + 1;
            }
            this.checkBallCollision();
            this.gameOver();
            if (!this.isOver) {
                this.showMadcat();
            } else {
                document.querySelector("div").classList.add("invisible");
                document.querySelector("#board").innerHTML = "<h1>GAME OVER!</h1><h3>your score: </h3><h2></h2>";
                document.querySelector("#board > h2").innerHTML = this.score + " points";
            }
        };
        this.hideVisibleMadcat = function () {
            document.querySelector(".madcat").classList.remove("madcat");
        };
        this.turnMadcat = function (e) {
            switch (e.which) {
                case 37:
                    this.madcat.direction = "left";
                    break;
                case 38:
                    this.madcat.direction = "up";
                    break;
                case 39:
                    this.madcat.direction = "right";
                    break;
                case 40:
                    this.madcat.direction = "down";
                    break;
            }

        };
        this.checkBallCollision = function () {
            if (this.madcat.x === this.ball.x && this.madcat.y === this.ball.y) {
                document.querySelector(".ball").classList.remove("ball");
                this.ball = new Ball();
                this.showBall();
                this.score += 1;
                document.querySelector("#score div strong").innerHTML = this.score;
            }
        };
        this.gameOver = () => {
            if (this.madcat.x < 0 || this.madcat.y < 0 || this.madcat.x > 9 || this.madcat.y > 9) {
                clearInterval(this.idSetInterval);
                this.isOver = true;
            }
        };
    };


    document.addEventListener("keydown", function (event) {
        game.turnMadcat(event);
    });


    var game = new Game();
    game.startGame();
});