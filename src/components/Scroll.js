import React from 'react';

const Scroll = (props) => {
    return (
        // writing CSS in JSX
        <div style={{ overflowY: 'scroll', border: '5px solid white', borderRadius: '8px', height: '500px' }}>
            {props.children}
        </div>
    )
};

export default Scroll;