import React, { useState, useRef, useEffect } from 'react';

function timeRemaining(end_date){
    const now = new Date();
    const end = new Date(end_date);
    const diff = end - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(diff / (1000 * 60) % 60);
    const seconds = Math.floor(diff / 1000 % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export function TodoItem ( props ){

    const [isVisible, setIsVisible] = useState(false);
    const [timeRemainingText, setTimeRemainingText] = useState(timeRemaining(props.end_date));
    const contentRef = useRef(null);

    const toggleVisibility = (e) => {
        e.stopPropagation();
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemainingText(timeRemaining(props.end_date));
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };

    }, [props.end_date]);

    return (    
        <div className="td-item">

            <div className='td-item-toogle'>
                <input 
                    type="checkbox" 
                    id={`checkbox-${props.id}`}
                    className='hidden-checkbox' 
                    checked={props.completed} 
                    onChange={() => {
                        props.onComplete();
                        }  
                    }
                />
                <label 
                    htmlFor={`checkbox-${props.id}`}
                    className={`td-item-check ${props.completed && "td-item-check-complete"}`} 
                ></label>
                <h3 className={`td-item-title ${props.completed && "td-item-title-complete"}`} onClick={toggleVisibility} >
                    {isVisible ? '▲' : '▼'} {props.title}
                </h3>
                <p className='td-item-tr'>T-R: {timeRemainingText}</p>
            </div>

            <span 
                className='td-delete-icon'
                onClick={ () => {
                    props.onDelete();
                }}
            >X</span>

            <div className='td-item-content'
                style ={{
                    maxHeight: isVisible ? `${contentRef.current.scrollHeight}px` : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in-out',
                }} ref={contentRef}>
                <p className='td-item-description'>{props.description}</p>
            </div>
            
        </div>
    );
}