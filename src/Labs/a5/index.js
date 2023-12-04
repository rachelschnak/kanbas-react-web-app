import React from "react";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";


const API_BASE = process.env.REACT_APP_API_BASE;
const URL = '${API_BASE}/Labs/a5'

function Assignment5() {
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href='${URL}/welcome' //"http://localhost:4000/a5/welcome"
                   className="list-group-item">
                    Welcome
                </a> </div>
            <EncodingParametersInURLs />
            <WorkingWithObjects />
            <WorkingWithArrays />
        </div>


    );

}
export default Assignment5;

