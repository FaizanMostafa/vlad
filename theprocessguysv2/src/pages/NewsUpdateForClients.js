import React, { useState } from 'react';

function NewsUpdateForClients() {

    const [todaysNewsUpdate, setTodaysNewsUpdate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let data = {
            todaysNewsUpdate
        }

        localStorage.setItem('newsUpdateForClients', JSON.stringify(data))
    }

    return(
        <div className="text-center">
            <h1>Today's News</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>   
            <textarea
                value={todaysNewsUpdate}
                onChange={(e) => setTodaysNewsUpdate(e.target.value)}
                style={{ width:"1000px", height:"230px", border:"solid", color:"black" }}
            />
            <br></br>
            <br></br>
            <br></br>
                <h3>This is what it will look like for the Client:</h3>
            <br></br>
                {todaysNewsUpdate}
            <br></br>
            <br></br>
            <br></br>
        <button className="btn btn-primary mt-1 mb-1" onClick={handleSubmit}>Update Current News</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        
    )
}

export default NewsUpdateForClients;