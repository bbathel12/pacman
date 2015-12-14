Ghost = function(canvas,name,color,position){
    
    this.name     = name || 'blinky'
    this.position = position || [250,250]
    
    
    
    this.draw = function(){
        var x = this.position[0]+20;
        var y = this.position[1]-20;
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
        /*canvas.lineTo(x-5,y+20);
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
    
}