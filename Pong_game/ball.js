class Ball{
    constructor(){
        this.x = 200;
        this.y = canvas.height/2;
        
        this.velocity = {x:10,y:0};
    }

    Draw(){
        //ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "white";
        ctx.beginPath()
        ctx.arc(this.x,this.y , 5,0,Math.PI * 2,false);
        ctx.stroke();
        ctx.fill();
    }

    Move(){

        
        if(this.y<10){
            this.velocity.y = 3;
        }
        
        if(this.y>canvas.height - 10){
            
            this.velocity.y = -this.velocity.y + 2;
        }
        if(this.x>canvas.width){
            
            this.x = 200;
            this.y = Math.random() * canvas.height/2;
           
                
            
        }
        
        if(this.x<0){
            
            
            this.x = 200;
            this.y = canvas.height /2;
    
                          
            
            
        }
        
        this.x = this.x+this.velocity.x;
        this.y = this.y + this.velocity.y;
        //ctx.clearRect(0,0,canvas.width,canvas.height);
        this.Draw();
    }
}