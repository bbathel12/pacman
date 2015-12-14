
var PacMan = function(name, lives,canvas){
    this.lives    = lives || 3;
    this.name     = name  || 'PacMan';
    this.diameter = 40;
    this.position = [30,30]
    this.mouthOpen = 1;
    
    this.draw = function(){
        this.mouthOpen = (this.mouthOpen + 1) % 2
        /*draws the yellow circle*/
        canvas.beginPath();
        canvas.strokeStyle = 'yellow'
        canvas.fillStyle   = 'yellow';
        canvas.lineWidth   = '1'
        canvas.arc(this.position[0],this.position[1],this.diameter/2,0, Math.PI * 2)
        canvas.stroke();
         canvas.fill();
        /* draws the open mouth */
        if (this.mouthOpen === 1) {
            canvas.beginPath()
            canvas.fillStyle   = "black"
            canvas.strokeStyle = "black"
            canvas.moveTo(this.position[0],this.position[1])
            canvas.lineTo(this.position[0]+(this.diameter/2),this.position[1])
            canvas.arc(this.position[0],this.position[1],(this.diameter + 2)/2,0, Math.PI * 2/6)
            canvas.moveTo(this.position[0],this.position[1]);
            canvas.fill();
            canvas.stroke();
        }
        /* draws the eyes */
        canvas.beginPath();
        canvas.strokeStyle = 'black';
        canvas.fillStyle   = 'black';
        canvas.arc(this.position[0]+(this.diameter/3),this.position[1]-(this.diameter/5),2,0,Math.PI * 2)
        canvas.stroke()
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