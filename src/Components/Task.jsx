import React, {useState}  from "react";

export default function Task({task}) {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="task-box">
            <input 
            className="checkbox"
            type="checkbox" 
            onClick={() => {
                setIsActive (!isActive)
            }}
            
            />
            <div className={`className=task ${isActive && 'checked'}`}>{task}</div>
        </div>
    )    
        
}

