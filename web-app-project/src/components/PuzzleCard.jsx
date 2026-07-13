import { useState } from "react";
import DeletePuzzle from "./DeletePuzzle";

const PuzzleCard = ({ id, title, link, alt }) => {
    
    const [ isVisible, setIsVisible ] = useState(true);
    
    const handleDelete = () => {
        setIsVisible(false);
    }
    
    if (!isVisible){ 
        return null;
    }
    

    return (
        <div className="card">
            <div>
                <img src={link} alt={alt} width={200} height={300}/>
            </div>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <DeletePuzzle onDelete={handleDelete} />
            </div>
        </div>
    );
}

export default PuzzleCard;

