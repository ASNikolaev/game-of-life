import React from 'react';
import './command.css';

const Command = ({random, cleanField, stopGame, startGame}) => {

    return (
        <div className="command">
            <div className="button_set">
                <input type="button" value={"clean"} onClick={cleanField}/>
                <input type="button" value={"random"} onClick={random}/>
                <input type="button" value={"stop"} onClick={stopGame}/>
                <input type="button" value={"start"} onClick={startGame}/>
            </div>
        </div>
    )
};

export default Command