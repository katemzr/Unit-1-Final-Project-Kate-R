import { useState } from "react";

const PuzzleCard = ({ id, title, link, alt }) => {

    const [ isVisible, setIsVisible ] = useState(true);
    if (!isVisible) return null;

    const [myTitle, setMyTitle] = useState(title);

    return (
        <div>
            <div>
                <img src={link} alt={alt} width={200} height={300}/>
            </div>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <input type="text" value={myTitle} placeholder="Change my title." onChange={(e) => setTitle(e.target.value)}></input>
                <button onClick={() => setMyTitle("I changed my title.")}>Edit</button>
            </div>
            <div>
                <button onClick={() => setIsVisible(false)}>Delete</button>
            </div>
            <br></br>
        </div>
    );
}

export default PuzzleCard;