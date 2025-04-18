import React from "react";
import {Left} from '../left/left';
import {Right} from '../right/right';
var Content = ()=>{
    return(
        <div id="content">
            <Left></Left>
            <Right></Right>
            <div style={{clear: 'both'}} />
        </div>
    );
}
export {Content};