import React from "react";
import EmojiPicker from "emoji-picker-react";

const EmojiPickerComponent = ({ handleEmojiSelect, onClose }) => {
  return (
    <div style={{ position: "absolute", bottom: "50px", right: "10" }}>
      <EmojiPicker onEmojiClick={handleEmojiSelect} />
    </div>
  );
};

export default EmojiPickerComponent;
