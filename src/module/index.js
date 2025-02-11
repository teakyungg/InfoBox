import React from "react";
import './Print.css';

function Print({title , contents})
{
    return <p className="box">
        <h2>{title}</h2>
        <p>{contents}</p>
    </p>
}

export default Print;