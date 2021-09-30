import React, {useState, Button} from 'react';

const Count = ({increment}) => {

    return (<>
       <Button onClick={increment}>Count +</Button>
        </>
        )
}

export default Count;