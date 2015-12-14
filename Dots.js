var Dot = function(canvas,x,y,power){
    
    this.position = [x,y]
    this.power    = power || false;
    
    this.draw = function(){
        if (!this.eaten) {
            var x = this.position[0];
            var y = this.position[1];
            canvas.beginPath();
            if (this.power) {
                canvas.strokeStyle = 'white'
                canvas.fillStyle   = 'white'
                canvas.arc(x,y,8,0,Math.PI * 2)
            }else{
                canvas.strokeStyle = 'yellow'
                canvas.fillStyle   = 'yellow'
                canvas.arc(x,y,5,0,Math.PI * 2)
            }
            
            canvas.fill();
            canvas.stroke();
        }
        
    }
}