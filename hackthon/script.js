


const recordButton = document.getElementById('recordButton');
const transcriptionText = document.getElementById('transcriptionText');
const resetButton = document.getElementById('resetButton');
const submitButton = document.getElementById('submitButton');
const statusText = document.getElementById('statusText');

let recognition;
let isRecording = false;

// Check if the Web Speech API is supported
if ('webkitSpeechRecognition' in window) {
    // Create a new SpeechRecognition object
    recognition = new webkitSpeechRecognition();

    // Set properties for continuous and interim results
    recognition.continuous = true; // Keep listening
    recognition.interimResults = true; // Get partial results

    // Define event handlers

    // onstart:  Called when the speech recognition service has begun listening to incoming audio.
    recognition.onstart = () => {
        statusText.textContent = "Recording started...";
    };

    // onresult: Called when the speech recognition service returns a result — a word or phrase that's been recognized.
    recognition.onresult = (event) => {
        let interimTranscript = ''; // Store interim (non-final) results
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                // If it's a final result, append it to the transcriptionText
                transcriptionText.textContent += event.results[i][0].transcript;
            } else {
                // If it's an interim result, append it to the interimTranscript
                interimTranscript += event.results[i][0].transcript;
            }
        }
        transcriptionText.textContent = transcriptionText.textContent + interimTranscript; // Append interim transcript
    };

    // onerror: Called when a speech recognition error occurs.
    recognition.onerror = (event) => {
        statusText.textContent = "Error occurred in recording: " + event.error;
        isRecording = false;
        recordButton.textContent = 'Record';
    };

    // onend: Called when the speech recognition service has disconnected.
    recognition.onend = () => {
        statusText.textContent = "Recording stopped.";
        isRecording = false;
        recordButton.textContent = 'Record';
    };

    // Add event listeners to the buttons

    // recordButton:  Toggles the recording state (start/stop)
    recordButton.addEventListener('click', () => {
        if (!isRecording) {
            // Start recording
            recognition.start();
            isRecording = true;
            recordButton.textContent = 'Stop Recording';
            transcriptionText.textContent = ''; // Clear previous text when starting a new recording
        } else {
            // Stop recording
            recognition.stop();
        }
    });

    // resetButton: Clears the transcription area
    resetButton.addEventListener('click', () => {
        transcriptionText.textContent = '';
    });

    // submitButton: Simulates submitting the data (you'll need to replace this with your backend submission code)
    submitButton.addEventListener('click', () => {
        statusText.textContent = "Sending data for processing...";
        // Here you can add code to send the data to the backend
        setTimeout(() => {
            statusText.textContent = "Data submitted successfully!";
        }, 2000); // 2-second delay
    });

} else {
    // If the browser doesn't support the Web Speech API
    statusText.textContent = "This browser does not support the Web Speech API.";
    recordButton.disabled = true;
    resetButton.disabled = true;
    submitButton.disabled = true;
}



const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/submit', (req, res) => {
    console.log("Received Transcript:", req.body.transcript);
    res.json({ message: "Received successfully!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));


const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode was enabled last time
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀ Light Mode';
}

// Toggle Dark Mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = '☀ Light Mode';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});
