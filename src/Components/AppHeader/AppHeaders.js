import React from 'react';
import "./AppHeaders.css";



const AppHeaders = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Dilshod Soatqulov</h1>
            <h2>{allPosts} posts, like {liked}</h2>
        </div>
    );
};



export default AppHeaders;