import { useState } from "react";
import DeletePuzzle from "./DeletePuzzle";

const PuzzleCard = ({ id, title, link, alt }) => {
const [ isVisible, setIsVisible ] = useState(true);
if (!isVisible){ 
    return null;
}
    

    return (
        <div>
            <div>
                <img src={link} alt={alt} width={200} height={300}/>
            </div>
            <div>
                <p>{title}</p>
            </div>
            <DeletePuzzle />


            
            <br></br>
        </div>
    );
}

export default PuzzleCard;

/*
<div>
                <button onClick={() => setIsVisible(false)}>Delete</button>
            </div>
            <div>
                    <input type="text" value={myTitle} placeholder="Change my title." onChange={(e) => setTitle(e.target.value)}></input>
                    <button onClick={() => setMyTitle("I changed my title.")}>Edit</button>
                </div>
            */