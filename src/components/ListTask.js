import React from 'react';

const ListTask = (props) => {
    return(
        <div className="ui error message">
            <p>{props.message}</p>
        </div>
    );
}

export default ListTask;
