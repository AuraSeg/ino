import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function View404() {
    const navigate= useNavigate();
    useEffect(() => {
        navigate('/dashboard')
      }, []);

    return (
        <div >
        
        </div>
    );
};