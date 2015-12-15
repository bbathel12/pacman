Ghost = function(canvas,name,color,position,pattern){
    
    this.name     = name || 'blinky'
    this.position = position || [30+(40*5),30+(40*7)]
    this.diameter = 40;
    this.color    = color;
    this.pattern  = pattern || ['up','up','right','up','right','up','right','up','left','right','right','right','up','up','left','left','down','up','left']
    this.draw = function(){
        var x = this.position[0];
        var y = this.position[1];
        canvas.beginPath()
        canvas.strokeStyle = color;
        canvas.fillStyle   = color;
        canvas.arc(x,y,10,0, Math.PI * 2)
        canvas.moveTo(x+10,y)
        canvas.lineTo(x+10,y+10);
        canvas.lineTo(x+5,y+5);
        canvas.lineTo(x+0,y+10);
        canvas.lineTo(x-5,y+5)
        canvas.lineTo(x-10,y+10);
        canvas.lineTo(x-10,y);
        /*canvas.lineTo(x-5x ,y,y+20);
        canvas.lineTo(x-10,y+25);
        canvas.lineTo(x-15,y+20);
        canvas.lineTo(x-20,y+25);
        canvas.lineTo(x-20,y)*/
        canvas.fill();
        
        /*left eye */
        canvas.beginPath();
        canvas.strokeStyle = 'black'
        canvas.fillStyle   = 'white'
        canvas.arc(x - 5, y - 3, 3,0,Math.PI *2)
        canvas.lineWidth = 2
        canvas.stroke()
        canvas.fill()  
        
        /*right eye */
        canvas.beginPath();
        canvas.arc(x + 5, y - 3, 3,0,Math.PI *2)
        canvas.stroke()
        canvas.fill()
        
        /*right Pupil */
        canvas.beginPath();
        canvas.fillStyle="blue";
        canvas.arc(x + 5 , y - 3, 2, 0, Math.PI * 2 )
        canvas.fill();
        
        /*left Pupil */
        canvas.beginPath();
        canvas.arc(x - 5, y - 3, 2, 0, Math.PI * 2 )
        canvas.fill();
    }
    
    
    this.move = function(direction){
        var x = this.position[0];
        var y = this.position[1];
        //console.log('x: ',x,'y: ',y)
        if (direction == 'right' ) {
            x = (x + this.diameter) % 580
            x = x < 30 ? 30 : x;
            this.draw( x ,y );
            this.position[0] = x;
        }
        else if(direction == 'left'){
            if (x - this.diameter < 0) {
                x = 590;
            }
            x -= this.diameter
            this.draw(x ,y);
            this.position[0] = x;
        }
        else if(direction == 'down'){
            y = ( y + this.diameter ) % 580
            y = y < 30 ? 30 : y;
            this.draw( x,y );
            this.position[1] = y
        }
        else if(direction == 'up'){
            if (y - this.diameter < 0) {
                y = 590;
            }
            y -= this.diameter
            this.draw( x, y );
            this.position[1] = y
        }
        
    }
    
}