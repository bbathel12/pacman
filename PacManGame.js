var PacManGame = function(canvas){
    
    this.levels = [];
    this.pacman = new PacMan('brice',3,canvas);
    this.levels[0] = new level(canvas);
    this.score  = 0;
    
    
    /* draws a black background */
    this.drawBackground = function(){
        canvas.fillStyle = "rgba(0,0,0,.45)";
        canvas.fillRect(0, 0, 600, 600);
    }
    
    /* draws the level calling the draw background
     * and the draw level functions
     */
    this.drawLevel = function(level){
        this.drawBackground();
        this.levels[level].draw();
        this.levels[level].drawDots();
        this.pacman.draw(0);
    }
    
    /*
     * this is the pac man movement handler that will
     * be attached to a keydown event
     */
    this.moveHandler =
    function(event){
            var left  = 37 ;
            var right = 39 ;
            var down  = 40 ;
            var up    = 38 ;
                ////console.log(event.keyCode)
                if (event.keyCode == left) {
                    if (this.validMove('left')) {
                        game.drawLevel(0);
                        game.pacman.move('left')
                        game.onADot();
                    }
                }
                else if (event.keyCode == right) {
                    if(this.validMove('right')){
                        game.drawLevel(0);
                        game.pacman.move('right')
                        game.onADot();
                    }
                }
                else if (event.keyCode == down) {
                    if(this.validMove('down')){
                        game.drawLevel(0);
                        game.pacman.move('down')
                        game.onADot();
                    }
                }
                else if (event.keyCode == up) {
                    if(this.validMove('up')){
                        game.drawLevel(0);
                        game.pacman.move('up')
                        game.onADot();
                    }
                }
                
            }
    
    
    this.onADot = function(){
        for (var i = 0; i < this.levels[0].dots.length ; i++){
            if (
                (this.pacman.position[0] === this.levels[0].dots[i].position[0])
                &&
                (this.pacman.position[1] === this.levels[0].dots[i].position[1])
                ) {
                    var secondHalf = this.levels[0].dots.splice(i+1,this.levels[0].dots.length)
                    var firstHalf  = this.levels[0].dots.splice(0,i)
                    this.levels[0].dots = firstHalf.concat(secondHalf);
                    game.score += 30;
                    break;
            }
        }
    }
    this.validMove = function(direction){
        var pacX,pacY,wallX,wallY
        for(var i = 0 ; i< this.levels[0].walls.length; i++){
            pacX = this.pacman.position[0];
            pacY = this.pacman.position[1];
            wallX= this.levels[0].walls[i][0];
            wallY= this.levels[0].walls[i][1];
            wallDirection = this.levels[0].walls[i][2]
            if (direction === 'down') {
                if (
                        (wallY -20 === pacY)
                        &&
                        ((wallX+1) <= pacX && pacX <= (wallX + 39))
                        &&
                        (wallDirection === 'h')
                    ) {
                    //console.log("y's ",pacY + 20," ",wallY);
                    //console.log("x's ",pacX - 20," ",wallX);
                    return false;
                }
            }
            else if (direction === 'up') {
                if (
                        (wallY < pacY && pacY < wallY + 40 )
                        &&
                        (pacX-20 === wallX)
                        &&
                        (wallDirection === 'h')
                    ) {
                    //console.log("y's ",pacY ," ",wallY);
                    //console.log("x's ",pacX ," ",wallX);
                    return false;
                }
            }
            else if (direction === 'left') {
                if (
                        (wallY < pacY && pacY < (wallY + 40))
                        &&
                        (pacX-20 === wallX)
                        &&
                        (wallDirection === 'v')
                    ) {
                    //console.log("y's ",pacY - 20," ",wallY);
                    //console.log("x's ",pacX - 20," ",wallX);
                    return false;
                }
            }
            else if (direction === 'right') {
                if (
                        (wallY < pacY && pacY < (wallY + 40))
                        &&
                        (pacX+20 === wallX)
                        &&
                        (wallDirection === 'v')
                    ) {
                    //console.log("y's ",pacY - 20," ",wallY+20);
                    //console.log("x's ",pacX + 20," ",wallX);
                    return false;
                }
            }
        }return true;
    }
    
    this.showScore = function(){
        $('#score span').text(this.score)
    }
    this.showLives = function(){
        $('#lives span').text(this.pacman.lives)
    }
    
    this.isOver = function(){
        if (this.levels[0].dots.length <= 0 ) {
            $(document).off('keydown');
            canvas.fillStyle  ="orange";
            canvas.strokeStyle="red";
            canvas.font="75px Courier New"
            canvas.fillText('You Win !!!!!',50,250)
        }
    }
    
    this.drawLevel(0);
    this.pacman.draw(canvas);
    


    
}




