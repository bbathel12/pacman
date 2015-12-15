<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        
    </head>
    <body>
        <canvas id="canvas" width="580" height="580" style=""></canvas>
        <div id='score'>Score: <span></span></div>
        <div id='lives'>Lives: <span></span></div>
        <audio  id="chomp">
            <source src="assets/pacman_chomp.wav" type="audio/wav"></source>
        </audio>
        
        
        <script type='text/javascript'>
            var canvas = document.getElementById('canvas');

            
            /********************************************************************/
            var c = canvas.getContext('2d');
  
            
        </script>
        <script type="text/javascript" src="PacMan.js"></script>
        <script type="text/javascript" src="PacManGame.js"></script>
        <script type="text/javascript" src="Level.js"></script>
        <script type="text/javascript" src="Dots.js"></script>
        <script type="text/javascript" src="Ghost.js"></script>
        <script>
            var game = new PacManGame(c);
            /*var p = new PacMan();
            p.draw(c);*/
            $(document).keydown(function(event){game.moveHandler(event)})
            var chomp = document.getElementById('chomp');
            var moves1 = 0;
            var moves2 = 0;
            var moves3 = 0;
            var frames = setInterval(
                function(){
                    game.drawLevel(0);
                    chomp.play();
                    game.showScore();
                    game.showLives();
                    game.isOver();
                    
                }
            ,100)
            var ghostMoves = setInterval(
                
                function () {
                    if (game) {
                        moves1 = (moves1 + 1 )% game.ghosts[0].pattern.length
                        moves2 = (moves2 + 1 )% game.ghosts[1].pattern.length
                        moves3 = (moves3 + 1 )% game.ghosts[2].pattern.length
                        game.ghostMove(game.ghosts[0],moves1/*,[game.ghosts[1],game.ghosts[2]]*/);
                        game.onAPacman(game.ghosts[0]);
                        game.ghostMove(game.ghosts[1],moves1/*,[game.ghosts[0],game.ghosts[2]]*/);
                        game.onAPacman(game.ghosts[1]);
                        game.ghostMove(game.ghosts[2],moves1/*,[game.ghosts[1],game.ghosts[0]]*/);
                        game.onAPacman(game.ghosts[2]);
                        if (moves1 >= 4) {
                            game.levels[0].walls.push([10+(40*7),10+(40*7),'h'])
                        }
                    }
                }
                ,500
            )
            
        </script>
        
        <script>
            
        </script>
    </body>
    <style>
        #canvas{
           /*
            margin:auto;
            display:block;
            */
            border:solid blue 5px;
        
            box-sizing:border-box;
        }
        
    </style>
    
</html>