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

export function TodoItem ( { title, description, end_date, completed } ){

    const [isCompleted, setIsCompleted] = useState(completed);
    const [isVisible, setIsVisible] = useState(false);
    const [timeRemainingText, setTimeRemainingText] = useState(timeRemaining(end_date));
    const contentRef = useRef(null);

    const toggleCompleted = () => {
        setIsCompleted(!isCompleted);
    }
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemainingText(timeRemaining(end_date));
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };

    }, [end_date]);

    return (    
        <div className="td-item" onClick={toggleCompleted}>
            <div className='td-item-toogle'>
                <h3 className='td-item-title' onClick={toggleVisibility} >
                    {isVisible ? '▲' : '▼'} {title}
                </h3>
                <p className='td-item-tr'>T-R: {timeRemainingText}</p>
            </div>
            <div className='td-item-content'
                style ={{
                    maxHeight: isVisible ? `${contentRef.current.scrollHeight}px` : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in-out',
                }} ref={contentRef}>
                <p className='td-item-description'>{description}</p>
            </div>
            
        </div>
    );
}