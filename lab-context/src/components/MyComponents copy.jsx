import React from 'react';
import InnerComp from './InnerComp';

function MyComp1(props) {
    return (
        <div>
            <h1>My Component 1</h1>
            <MyComp2 data={props.data} />
        </div>
    );
}

function MyComp2(props) {
    return (
        <>
            <h2>My Component 2</h2>
            <InnerComp data={props.data} />
        </>
    );
}

export default MyComp1;