import React from 'react';
import img from '../pictures/TPG_icon.webp';

const HomePage = () => {

    return(
        <React.Fragment>
            <img src={img} loading="lazy" style={{ marginLeft: "200px", marginBottom: "-300px", marginTop: " -300px"}}/>
            <br></br>
           <h1 className="text-center"> <b>Welcome to The Process Guys</b></h1>
            <br></br>
            <br></br>
            <h3 className="text-center">Here are The Process Guys, we are workers who help serve people in need. 
                <br></br><b>Don't want to do it yourself? </b>
                <br></br><b><i>Feel free to hire one of our workers and have them do it for you.</i></b>
                <br></br>
                <br></br><span style={{ color: "white" }}><b><u>What we do:</u></b></span>
            <br></br><b>1.</b> We will help serve people with documentation from our clients.
            <br></br><b>2.</b> Commute to destination for serve.
            <br></br><b>3.</b> As government representatives, we work dilligently and professionally.
            <br></br><b>4.</b> Will complete all tasks within given time ( unless there are complications )
            <br></br>
            <br></br>Any questions, feel free to use the "Contact Us" at the top of the website and we will get back to you as soon as we can.
            <br></br>And thank you for stopping by and taking a look at The Proces Guys! 
            <br></br>Enjoy the rest of your day!
            </h3    >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </React.Fragment>
    )
}

export default HomePage;