import Player from './models/player.js';
import KeyboardListener from './listeners/keyboard-listener.js';

export default function createGame(screen){

    const keyboard = KeyboardListener(document);

    var state = {
        runnig: false,
        player: new Player(5,5,5,10,"#FFF", 10)
    };


    function start(){
        state.runnig = true;
        
        keyboard.subscribe(state.player.move);

        runnig();
    }

    function runnig(){

        screen.clearRect(0,0,200,100);

        state.player.draw(screen);

        requestAnimationFrame(runnig);
    }

    
    return {
        state,
        start,
    }
}