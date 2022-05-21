class Bat{
    constructor(){
        this.bat1X = 50;
        this.bat1Y = canvas.height/2;

        this.bat2X = canvas.width - 60;
        this.bat2Y = canvas.height/2;

        this.controls = new Controls();

        this.speed = 6;
    }

    Draw(){
        ctx.fillStyle = "white";
      
        ctx.beginPath();
        ctx.rect(this.bat1X,this.bat1Y,10,80);
        ctx.fill();
        ctx.stroke();

        
        
        ctx.beginPath();
        ctx.rect(this.bat2X,this.bat2Y,10,80);
        ctx.fill();
        ctx.stroke()
    
    }

    Movements(){
        
        if(this.controls.forward1 == true){
            
            if(this.bat1Y > 10){
                this.bat1Y = this.bat1Y -this.speed;
            }
        }
        
        if(this.controls.backward1 == true){
            if(this.bat1Y < canvas.height - 90){
                this.bat1Y = this.bat1Y + this.speed;
            }
        }

        if(this.controls.forward2 == true){
            if(this.bat2Y > 10){
                this.bat2Y = this.bat2Y -this.speed;
            }
        }
        
        if(this.controls.backward2 == true){
            if(this.bat2Y < canvas.height - 90){
                this.bat2Y = this.bat2Y + this.speed;
            }
        }
        //ctx.clearRect(0,0,canvas.width,canvas.height);
        this.Draw();
    }

    
    

}
