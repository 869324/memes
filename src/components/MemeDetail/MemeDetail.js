import React from "react";

function MemeDetail({ name, url}) {
    return (
        <React.Fragment>
            <div>
                Name: {name}
            </div>
            <div>
                Image Url: <a href={url} target="_blank" rel="noreferrer">{url}</a>
            </div>
        </React.Fragment>
    )
}

export default MemeDetail