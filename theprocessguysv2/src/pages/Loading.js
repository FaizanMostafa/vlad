import React from 'react';

const Loading = (props) => {
    return (
        <div style={{display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center"}}>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>  
        </div>
    );
}

export default Loading;