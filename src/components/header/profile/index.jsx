import React from "react";
import {BsBell} from 'react-icons/bs';
import { IconContext } from "react-icons";

export default function Profile() {
    
    return(
        <div className="profile">
            <span></span>
            <span className="click">
            <IconContext.Provider value={{ color: "grey", size: "20px"}}>
                <div>
                    <BsBell/>
                </div>
            </IconContext.Provider>
            </span>
            <span className="click">Ann Hand</span>
            <span className="click">
                <img
                  className="rounded-circle"
                  alt={"users here"}
                  src={`https://source.unsplash.com/random/1`}
                  height={60}
                  width={60}
                />
            </span>
        </div>
    );
}