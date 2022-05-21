class Game{
    constructor(){
        this.bats = new Bat();
        this.ball = new Ball();

        this.background = new Image();
        this.background.src = "pic.jpg";
        this.score = 0;

        /* range are canvas.height - 90 to 10*/


        this.GameOver = false ;
    }

    Text(){
        ctx.font = "30px Arial";
        ctx.fillText("PONG GAME",canvas.width/2 -85,80);

        ctx.font ="15px Arial";
        ctx.fillText(`Score : ${this.score}`,canvas.width/2 - 15,canvas.height - 20);
        
    }

    Init(){
        this.Bg();
        this.ball.Move();
        this.Collision();
        this.Text();
        this.Score();
        this.bats.Movements();


        //if(this.Collision(this.ball.x,this.ball.y,this.bats.bat1X,this.bats.bat1Y) == 0){
        for(let i = 0 ;i <80;i++){
            if(this.Collision(this.ball.x,this.ball.y,this.bats.bat1X,this.bats.bat1Y+i) < 5 + 2.5){
                this.ball.velocity.y = (Math.random() * 2-1) * 4;
                this.ball.velocity.x = -this.ball.velocity.x;
                this.score = this.score + 1;
            }
            if(this.Collision(this.ball.x,this.ball.y,this.bats.bat2X,this.bats.bat2Y+i) < 5 + 2.5){
                this.ball.velocity.x = -this.ball.velocity.x;
                this.score = this.score + 1;
            }
        }
        
    }

    Bg(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        
        ctx.beginPath();
        ctx.drawImage(this.background,0,0,canvas.width,canvas.height);
        ctx.fill();


    }

    Score(){
        if(this.ball.x>canvas.width){
            this.score = 0;
            
        }
        
        if(this.ball.x<0){
            this.score = 0;
            
        }
        
    }
    Collision(Ball_X , Ball_Y, Bat_X , Bat_Y){
        var DisY = Bat_X - Ball_X;
        var DisX = Bat_Y - Ball_Y  ;
        return Math.sqrt(Math.pow(DisX ,2) + Math.pow(DisY,2));

    }



}