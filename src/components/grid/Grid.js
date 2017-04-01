import React from 'react';
import './grid.css'



const Grid = (s) => {

    let trs = s.state.rows.map((row) => {
       let tds = s.state.columns.map((column) => {
           let id = `${row}.${(column < 10) ? `0${column}` : column}`;
           return <td onClick={s.revive} id={id} key={id} className={(s.bying.includes(id)) ? "active" : ""}/>
       });
       return <tr key={row}>{tds}</tr>

    });

    return (
        <div className="grid">
            <table>
                <tbody>
                {trs}
                </tbody>
            </table>
        </div>
    )
};


export  default  Grid