import React from 'react';
import Create from './Create';
import Read from './Read';
import { BrowserRouter as Router} from 'react-router-dom'


const Crud = () => {
    return (
        <Router>
        <div>
            
                <Create />
                <Read />
                
            
        </div>
        </Router>
    )
}

export default Crud