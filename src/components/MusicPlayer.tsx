import React, { useState, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function MusicPlayer({ playlist, initialIsPlaying }) {
    const [isPlaying, setIsPlaying] = useState(initialIsPlaying);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioPlayerRef = useRef(null);

    const handleTogglePlay = () => {
        if (audioPlayerRef.current) {
            if (isPlaying) {
                audioPlayerRef.current.audio.current.pause();
            } else {
                audioPlayerRef.current.audio.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleNextSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    };

    const handlePrevSong = () => {
        setCurrentSongIndex((prevIndex) => 
            prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
        );
    };

    const handleRestartSong = () => {
        if (audioPlayerRef.current) {
            audioPlayerRef.current.audio.current.currentTime = 0;
            audioPlayerRef.current.audio.current.play();
        }
    };

    return (
        <div>
            <AudioPlayer
                ref={audioPlayerRef}
                autoPlay={isPlaying}
                src={playlist[currentSongIndex]}
                loop
                showSkipControls={false}
                showFilledProgress={true}
                showJumpControls={false}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                style={{ display: 'none' }}  // Hide the AudioPlayer
                onEnded={handleNextSong}  // Automatically go to the next song when the current song ends
            />
            <button onClick={handleTogglePlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <button onClick={handlePrevSong}>Previous</button>
            <button onClick={handleRestartSong}>Restart</button>
            <button onClick={handleNextSong}>Next</button>
        </div>
    );
}

export default MusicPlayer;
