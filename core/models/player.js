export default class Player {
    
    constructor(x, y, width, height, color, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;

        function draw(screen){
            screen.fillStyle = this.color;
            screen.fillRect(this.x,this.y,this.width,this.height);
        }

        function move(command){

            const acceptedMoves = {
                ArrowUp(player) {
                    player.y -= player.speed;
                },
                ArrowDown(player){
                    player.y += player.speed;
                }
            }

            const keyPressed = command.keyPressed;
            const moveFunction = acceptedMoves[keyPressed];
           
            if(moveFunction){
                moveFunction(this);
            }
        }
    }
}
