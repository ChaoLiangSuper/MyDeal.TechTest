import React from 'react';
import { Home } from '../../views';

function Body() {
    return (
        <div className="container body-content">
            <Home />
            <hr />
            <footer>
                <p>&copy; {(new Date()).getFullYear()} - MyDeal</p>
            </footer>
        </div>
    );
}

export default Body;