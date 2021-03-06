import React from 'react';
import "./form.css"

const ImageLinkForm = ({onInputChange,onImageSubmit}) => {
    return(
        <div>
            <div>
                <p className="f3 center">
                    {`This magic will detect faces`}
                </p>
            </div>
            <div className = "center form pa4 br3 shadow-5">
                <input 
                    className = "f4 p2 w-70 center" 
                    type="text"
                    onChange ={onInputChange}
                    placeholder="Enter image url"
                    >
                </input>
                <button onClick={onImageSubmit} className = "w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
            </div>
        </div>

    )
}

export default ImageLinkForm