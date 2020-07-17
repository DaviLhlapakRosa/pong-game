export default class Player {
    
    constructor(x, y, width, height, color, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;

        this.draw = function(screen){
            screen.fillStyle = this.color;
            screen.fillRect(this.x,this.y,this.width,this.height);
        }

        this.move = function(command){
            const acceptedMoves = {
                ArrowUp() {
                    this.y -= this.speed;
                },
                ArrowDown(){
                    this.y += this.speed;
                }
            }

            const keyPressed = command.keyPressed;
            const moveFunction = acceptedMoves[keyPressed];
           
            if(moveFunction){
                moveFunction();
            }
        }
    }
}
