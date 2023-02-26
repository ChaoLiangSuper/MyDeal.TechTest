import React, { useEffect, useState } from 'react';

function Home() {
    const [user, setUser]= useState(null);

    useEffect(() => {
        document.title = 'Home Page - My ASP.NET Application';
    }, []);

    async function getSettings() {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/Settings`);
            const data = await response.json();
            setUser(data.user);
            window.alert(data.message);
        } catch (e) {
            console.error(e);
            window.alert('Error!');
        }
    }
    
    return (
        <div className="jumbotron">
            <h1>Test App</h1>
            <p className="lead">Click this button to call your API:</p>
            <input type="submit" value="Call API" className="btn btn-default" id="btnSubmit" onClick={getSettings} />
            <h2>User Details</h2>
            <div id="user-details">
                { 
                    user && (
                        <>
                            <li>First name: {user.first_name}</li>
                            <li>Last name: {user.last_name}</li>
                            <li>Email: {user.email}</li>
                        </>
                    )
                }

            </div>
        </div>
    );
}

export default Home;