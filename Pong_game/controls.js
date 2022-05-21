class Controls{
    constructor(){
        this.forward1=false;
        this.backward1=false;

        this.forward2=false;
        this.backward2=false;
        

        this.#KeybordListener();
    }
    #KeybordListener(){
        document.onkeydown=(event)=>{
            switch(event.key){
                
                case "ArrowUp":
                    this.forward1=true;
                    this.forward2=true;
                    break;
                case "ArrowDown":
                    this.backward1=true;
                    this.backward2=true;
                    break;

            }
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowUp":
                    this.forward1=false;
                    this.forward2=false;
                    break;
                case "ArrowDown":
                    this.backward1=false;
                    this.backward2=false;
                    break;
            }
        }
    }
}