import React from "react";

function InnerComp(props) {
    return (
        <ul>
            {props.data.map(item => <li key={item.id}>{item.val}</li>)}
        </ul>
    );
}

export default InnerComp;