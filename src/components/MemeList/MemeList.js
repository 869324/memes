import React, { useState } from "react";
import MemeDetail from "../MemeDetail/MemeDetail";

function MemeList({ randomMemes }) {
  const [memeDetailDisplay, setMemeDetailDisplay] = useState(-1);

  /*const sortMemes = memes.sort(function(a, b){return 0.5 - Math.random()})*/

  return randomMemes.map((meme) => (
    <div className="col-4" key={meme.id}>
      <img src={meme.url} alt={meme.name} className="img-fluid" />
      <div
        style={{
          paddingBottom: "15px",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <button
          style={{ padding: "7.5px" }}
          onClick={() => setMemeDetailDisplay(meme.id)}
        >
          Show This Meme's Details
        </button>
      </div>
      <div>
        <button
          style={{ padding: "7.5px", marginLeft: "16px" }}
          onClick={
            memeDetailDisplay === meme.id
              ? () => setMemeDetailDisplay(-1)
              : () => {}
          }
        >
          Hide This Meme's Details
        </button>
      </div>
      {memeDetailDisplay !== meme.id ? null : (
        <MemeDetail key={meme.id} name={meme.name} url={meme.url} />
      )}
    </div>
  ));
}

export default MemeList;
