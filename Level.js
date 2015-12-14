var level = function(canvas){
    this.dots       = [
        new Dot(canvas,30,30),
        new Dot(canvas,70,30),
        new Dot(canvas,110,30),
        new Dot(canvas,150,30),
        new Dot(canvas,190,30),
        new Dot(canvas,230,30),
        new Dot(canvas,270,30),
        new Dot(canvas,310,30),
        new Dot(canvas,350,30),
        new Dot(canvas,390,30),
        new Dot(canvas,430,30),
        new Dot(canvas,470,30),
        new Dot(canvas,510,30),
        new Dot(canvas,550,30),
        new Dot(canvas,30, 70),
        //new Dot(canvas,70 ,70),
        new Dot(canvas,110,70),
        //new Dot(canvas,150,70),
        //new Dot(canvas,190,70),
        new Dot(canvas,230,70),
        new Dot(canvas,270,70),
        //new Dot(canvas,310,70),
        new Dot(canvas,350,70),
        new Dot(canvas,390,70),
        new Dot(canvas,430,70),
        new Dot(canvas,470,70),
        new Dot(canvas,510,70),
        new Dot(canvas,550,70),
        new Dot(canvas,30 ,110),
        new Dot(canvas,70 ,110),
        new Dot(canvas,110,110),
        new Dot(canvas,150,110),
        new Dot(canvas,190,110),
        new Dot(canvas,230,110),
        new Dot(canvas,270,110),
        //new Dot(canvas,310,110),
        new Dot(canvas,350,110),
        new Dot(canvas,390,110),
        new Dot(canvas,430,110),
        new Dot(canvas,470,110),
        new Dot(canvas,510,110),
        new Dot(canvas,550,110),
        new Dot(canvas,30, 150),
        new Dot(canvas,70, 150),
        new Dot(canvas,110,150),
        new Dot(canvas,150,150),
        new Dot(canvas,190,150),
        new Dot(canvas,230,150),
        //new Dot(canvas,270,150),
        //new Dot(canvas,310,150),
        //new Dot(canvas,350,150),
        new Dot(canvas,390,150),
        new Dot(canvas,430,150),
        new Dot(canvas,470,150),
        new Dot(canvas,510,150),
        new Dot(canvas,550,150),

        
    ];
    this.wallLength = 40;
    this.walls=[
        /*top wall*/
        [5,    5,  'h'],
        [45,   5,  'h'],
        [85,   5,  'h'],
        [125,  5,  'h'],
        [165,  5,  'h'],
        [205,  5,  'h'],
        [245,  5,  'h'],
        [285,  5,  'h'],
        [325,  5,  'h'],
        [365,  5,  'h'],
        [405,  5,  'h'],
        [445,  5,  'h'],
        [485,  5,  'h'],
        [525,  5,  'h'],
        [535,  5,  'h'],
        
        /*bottom wall */
        [5,    575,  'h'],
        [45,   575,  'h'],
        [85,   575,  'h'],
        [125,  575,  'h'],
        [165,  575,  'h'],
        [205,  575,  'h'],
        [245,  575,  'h'],
        [285,  575,  'h'],
        [325,  575,  'h'],
        [365,  575,  'h'],
        [405,  575,  'h'],
        [445,  575,  'h'],
        [485,  575,  'h'],
        [525,  575,  'h'],
        [535,  575,  'h'],
        /*left wall */
        [5,   10,  'v'],
        [5  , 50,  'v'],
        [5  , 90,  'v'],
        [5  ,130,  'v'],
        [5  ,170,  'v'],
        [5  ,210,  'v'],
        [5  ,250,  'v'],
        //[5  ,290,  'v'],
        [5  ,330,  'v'],
        [5  ,370,  'v'],
        [5  ,410,  'v'],
        [5  ,450,  'v'],
        [5  ,490,  'v'],
        [5  ,530,  'v'],
        
        /* right wall */
        [575,   10,  'v'],
        [575  , 50,  'v'],
        [575  , 90,  'v'],
        [575  ,130,  'v'],
        [575  ,170,  'v'],
        [575  ,210,  'v'],
        [575  ,250,  'v'],
        [535  ,287.5,  'h'],
        [535  ,332.5,  'h'],
        //[575  ,290,  'v'],
        [575  ,330,  'v'],
        [575  ,370,  'v'],
        [575  ,410,  'v'],
        [575  ,450,  'v'],
        [575  ,490,  'v'],
        [575  ,530,  'v'],
        
    
    
    /* need a box generator */
    
        [50,50,'h'],
        [50,50,'v'],
        [90,50,'v'],
        [50,90,'h'],
        
        [130,50,'h'],
        [130,90,'h'],
        [170,50,'h'],
        [170,90,'h'],
        [130,50,'v'],
        [210,50,'v'],
        
        
        
        [10+(40*7),10+(40*1),'h'],
        [10+(40*7),10+(40*1),'v'],
        [10+(40*7),10+(40*2),'v'],
        [10+(40*6),10+(40*3),'h'],
        [10+(40*6),10+(40*3),'v'],
        [10+(40*6),10+(40*4),'h'],
        [10+(40*7),10+(40*4),'v'],
        [10+(40*7),10+(40*5),'h'],
        [10+(40*8),10+(40*4),'v'],
        [10+(40*8),10+(40*4),'h'],
        [10+(40*9),10+(40*3),'v'],
        [10+(40*8),10+(40*3),'h'],
        [10+(40*8),10+(40*1),'v'],
        [10+(40*8),10+(40*2),'v'],
    ]
    
    
    this.draw = function(){
        canvas.fillStyle = canvas.strokeStyle = 'blue';
        canvas.lineWidth = 5;
        var section;
        for (var i = 0; i < this.walls.length; i++) {
            section = this.walls[i]
            canvas.beginPath()
            if (section[2] === 'v') {
                canvas.moveTo(section[0],section[1]);
                canvas.lineTo(section[0] , section[1] + this.wallLength);
            }
            else if (section[2] === 'h') {
                canvas.moveTo( section[0], section[1]);
                canvas.lineTo( section[0]+ this.wallLength,section[1]  );
            }

            canvas.stroke();
        }
        canvas.lineWidth = 1;
    }
    
    this.drawDots = function(){
        for(var i = 0 ; i < this.dots.length; i++){
            this.dots[i].draw();
        }
    }
    
}