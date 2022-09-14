import React from 'react';

const Audio = () => {
    return (
        <div className='audio__main'>
            <p>Test Audio</p>

            <audio title="local audio file" controls loop>
		    <source src="alabama.mp3" type="audio/mp3"/>
		    This browser does not support the audio element.
	        </audio>

            <audio id="gum-local" controls autoplay></audio>

            <div class="outputSelector">
		    <label>Select audio output: </label>
		    <select></select>
	        </div>
        </div>
    );
}

export default Audio;
