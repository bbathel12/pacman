var level = function(canvas){
    this.dots       = [
        
        new Dot(canvas,70,30),
        new Dot(canvas,110,30),
        new Dot(canvas,150,30),
        new Dot(canvas,190,30),
        new Dot(canvas,230,30),
        new Dot(canvas,270,30),
        new Dot(canvas,310,30),
        new Dot(canvas,350,30),
        new Dot(canvas,390,30),
        new Dot(canvas,430,30,true),
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
        new Dot(canvas,30 ,110,true),
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
        new Dot(canvas,190,150,true),
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
        [10,   10,  'h'],
        [50,   10,  'h'],
        [90,   10,  'h'],
        [130,  10,  'h'],
        [170,  10,  'h'],
        [210,  10,  'h'],
        [250,  10,  'h'],
        [290,  10,  'h'],
        [330,  10,  'h'],
        [370,  10,  'h'],
        [410,  10,  'h'],
        [450,  10,  'h'],
        [490,  10,  'h'],
        [530,  10,  'h'],
        [530,  10,  'h'],
        
        /*bottom wall */
        [10,   570,  'h'],
        [50,   570,  'h'],
        [90,   570,  'h'],
        [130,  570,  'h'],
        [170,  570,  'h'],
        [210,  570,  'h'],
        [250,  570,  'h'],
        [290,  570,  'h'],
        [330,  570,  'h'],
        [370,  570,  'h'],
        [410,  570,  'h'],
        [450,  570,  'h'],
        [490,  570,  'h'],
        [530,  570,  'h'],
        [530,  570,  'h'],
        /*left wall */
        [10,   10, 'v'],
        [10  , 50, 'v'],
        [10  , 90, 'v'],
        [10  ,130, 'v'],
        [10 ,170,  'v'],
        [10 ,210,  'v'],
        [10 ,250,  'v'],
        [10 ,290,  'h'],
        //[5  ,290,  'v'],
        [10 ,330,  'h'],
        [10  ,330, 'v'],
        [10 ,370,  'v'],
        [10 ,410,  'v'],
        [10  ,450, 'v'],
        [10 ,490,  'v'],
        [10 ,530,  'v'],
        
        /* right wall */
        [570,   10,  'v'],
        [570  , 50,  'v'],
        [570  , 90,  'v'],
        [570  ,130,  'v'],
        [570  ,170,  'v'],
        [570  ,210,  'v'],
        [570  ,250,  'v'],
        [530  ,290,  'h'],
        [530  ,330,  'h'],
        //[570  ,290,  'v'],
        [570  ,330,  'v'],
        [570  ,370,  'v'],
        [570  ,410,  'v'],
        [570  ,450,  'v'],
        [570  ,490,  'v'],
        [570  ,530,  'v'],
        
    
    
    /* need a box generator */
        
        /* top left box */
        [50,50,'h'],
        [50,50,'v'],
        [90,50,'v'],
        [50,90,'h'],
        
        /* top middle box */
        [130,50,'h'],
        [130,90,'h'],
        [170,50,'h'],
        [170,90,'h'],
        [130,50,'v'],
        [210,50,'v'],
        
        
        /* right cross thing */
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
        
        /* bottom right weird cross */
        [10+(40*11),10+(40*8),'h'],
        [10+(40*12),10+(40*8),'v'],
        [10+(40*11),10+(40*10),'v'],
        [10+(40*10),10+(40*9),'h'],
        [10+(40*12),10+(40*9),'v'],
        [10+(40*10),10+(40*10),'h'],
        [10+(40*11),10+(40*11),'v'],
        [10+(40*11),10+(40*12),'h'],
        [10+(40*12),10+(40*11),'v'],
        [10+(40*12),10+(40*11),'h'],
        [10+(40*13),10+(40*10),'v'],
        [10+(40*12),10+(40*10),'h'],
        [10+(40*11),10+(40*8),'v'],
        [10+(40*10),10+(40*9),'v'],
        
        
        
        /* Center Box */
        /* top bar of the center box */
        [10+(40*5),10+(40*7),'h'],
        [10+(40*6),10+(40*7),'h'],
        //[10+(40*7),10+(40*7),'h'],
        [10+(40*8),10+(40*7),'h'],
        [10+(40*9),10+(40*7),'h'],
        
        /* horizontal bars of the center box */
        [10+(40*5),10+(40*7),'v'],
        [10+(40*10),10+(40*7),'v'],
        
        
        /* bottom bar of the center box */
        [10+(40*5),10+(40*8),'h'],
        [10+(40*6),10+(40*8),'h'],
        [10+(40*7),10+(40*8),'h'],
        [10+(40*8),10+(40*8),'h'],
        [10+(40*9),10+(40*8),'h'],
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