import React, { useState, useEffect } from 'react';
import { FormCheck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// Importez les fichiers audio
import daySound from './Audio/jour.wav';
import nightSound from './Audio/nuit.wav';

const lightTheme = 'light-theme';
const darkTheme = 'dark-theme';

const Dark = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [dayAudio] = useState(new Audio(daySound));
    const [nightAudio] = useState(new Audio(nightSound));

    useEffect(() => {
        // Appliquer les classes de thème au body
        document.body.classList.toggle(lightTheme, !isDarkMode);
        document.body.classList.toggle(darkTheme, isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // Jouez le son correspondant au mode
        if (isDarkMode) {
            dayAudio.play();
        } else {
            nightAudio.play();
        }
    };

    return (
        <div className="App">
            <FormCheck 
                type="switch"
                id="custom-switch"
                label={
                    <>
                        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="mr-2" />
                        
                    </>
                }
                checked={isDarkMode}
                onChange={toggleDarkMode}
            />
        </div>
    );
};

export default Dark;
