import React, { useState } from "react";
import MemeDetail from "../MemeDetail/MemeDetail";

function RandomMeme({ onNextMeme, currentMeme }) {
  const [memeDetailDisplay, setMemeDetailDisplay] = useState(-1);

  return (
    <center>
      {currentMeme && (
        <div>
          <img
            src={currentMeme.url}
            alt={currentMeme.name}
            className="img-fluid"
            style={{ height: 580, width: 900, padding: "15px" }}
          />
          <button
            onClick={() => {
              setMemeDetailDisplay(-1);
              onNextMeme();
            }}
            style={{ padding: "7.5px" }}
          >
            Next Meme
          </button>
          {"\n"}
          <div style={{ padding: "15px" }}>
            <div
              style={{
                paddingBottom: "15px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <button
                style={{ padding: "7.5px" }}
                onClick={() => setMemeDetailDisplay(currentMeme.id)}
              >
                Show Meme Details
              </button>
            </div>
            <div>
              <button
                style={{ padding: "7.5px" }}
                onClick={() => setMemeDetailDisplay(-1)}
              >
                Hide Meme Details
              </button>
            </div>
          </div>
        </div>
      )}
      {memeDetailDisplay !== currentMeme.id ? null : (
        <MemeDetail
          key={currentMeme.id}
          name={currentMeme.name}
          url={currentMeme.url}
        />
      )}
    </center>
  );
}

export default RandomMeme;
