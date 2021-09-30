import React, { Button} from 'react';

const Age = ({increment}) => {

    return (<>
       <Button onClick={increment}>Increment +</Button>
        </>
        )
}

export default Age;