<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        
    </head>
    <body>
        <canvas id="canvas" width="580" height="580" style=""></canvas>
        <div id='score'>Score:<span></span></div>
        
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
        <script>
            var game = new PacManGame(c);
            /*var p = new PacMan();
            p.draw(c);*/
            $(document).keyup(function(event){game.moveHandler(event)})
            var chomp = document.getElementById('chomp'); 
            var frames = setInterval(
                function(){
                    game.drawLevel(0);
                    chomp.play();
                    game.onADot();
                    game.showScore();
                    game.isOver();
                }
            ,100)
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