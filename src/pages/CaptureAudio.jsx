import { Delete } from "@mui/icons-material";
import React, { useState } from "react";
import { VoiceRecorder } from "react-voice-recorder-player";

const styles = {
  mainContainerStyle: {
    backgroundColor: "gray",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
  },
  controllerContainerStyle: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  controllerStyle: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px",
  },
  waveContainerStyle: {
    height: "100px",
    marginTop: "10px",
    width: "100%",
  },
};

const CaptureAudio = ({ hide }) => {
  const [audioFile, setAudioFile] = useState(null);

  const handleStopRecording = (audioData) => {
    const audioBlob = new Blob([audioData], { type: "audio/wav" });
    setAudioFile(audioBlob);
    console.log("audioBlob", audioBlob);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "50%",
        height: "20%",
        marginLeft: "210px",
        marginBottom: "50px",
      }}
    >
      <Delete onClick={hide} />
      <VoiceRecorder
        onStop={handleStopRecording}
        controllerContainerStyle={styles.controllerContainerStyle}
        controllerStyle={styles.controllerStyle}
        waveContainerStyle={styles.waveContainerStyle}
      />
      {audioFile && (
        <audio controls>
          <source src={URL.createObjectURL(audioFile)} type="audio/wav" />
        </audio>
      )}
    </div>
  );
};

export default CaptureAudio;
