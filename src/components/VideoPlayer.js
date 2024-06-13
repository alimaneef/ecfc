import React, { useState, useRef } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ movie }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [overlayEnabled, setOverlayEnabled] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const videoRef = useRef(null);

    const handlePause = () => {
        if (overlayEnabled) {
            setIsPaused(true);
        }
    };

    const handlePlay = () => {
        setIsPaused(false);
    };

    const handleOverlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPaused(false);
        }
    };

    const toggleOverlay = () => {
        setOverlayEnabled(!overlayEnabled);
    };

    const togglePrimeVision = () => {
        setButtonActive(!buttonActive);
        setOverlayEnabled(!overlayEnabled); // Toggle overlay along with button
    };

    return (
        <div className="video-container">
            <button
                className={`primevision-button ${buttonActive ? 'active' : ''}`}
                onClick={togglePrimeVision}
            >
                PrimeVision
            </button>
            <video
                ref={videoRef}
                src={movie.video}
                controls
                onPause={handlePause}
                onPlay={handlePlay}
                className="video-player"
            />
            {isPaused && overlayEnabled && (
                <div className="pause-overlay" onClick={handleOverlayClick}>
                    <div className="pause-content">
                        <h2>{movie.title}</h2>
                        <p>{movie.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
