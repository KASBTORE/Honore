import React, { useState, useEffect } from 'react';

function Timer({ initialTime }) {
    const [time, setTime] = useState(initialTime - new Date().getTime() / 1000);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [promMessage, setPromMessage] = useState("Hurry up! Offer ends in");
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        formatTime(time);
        if (time <= 0) {
            setTime(0);
            setPromMessage("Promotion Ended");
        }

    }, [time]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const days = Math.floor((time / 3600) / 24)
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        setDays(days);

        return `${hours}:${minutes}:${seconds}`;
    }


    return (
        <>
            <div class="offer-label mb-15">
                <span>{promMessage}:</span>
            </div>
            <div class="deals-countdown deals-countdown-2 mb-25">
                <div class="countdown-inner" data-countdown="" data-date="Mar 02 2022 20:20:22">
                    <ul>
                        <li><span data-days="">{days.toString().padStart(2, "0")}</span> Days</li>
                        <li><span data-hours="">{hours}</span> Hours</li>
                        <li><span data-minutes="">{minutes}</span> min</li>
                        <li><span data-seconds="">{Math.floor(seconds)}</span> sec</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Timer;
