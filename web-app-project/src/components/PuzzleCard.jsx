import { useState } from "react";
import DeletePuzzle from "./DeletePuzzle";

const PuzzleCard = ({ id, title, link, alt, puzzlebrand, puzzleartist, piececount, dimensions, location, purchasedate, retailer, startdate, completiondate, notes
 }) => {
    
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
                <p><b>{title}</b></p>
            </div>
            <div>
                <p>{id}</p>
                <p>{puzzlebrand}</p>
                <p>{puzzleartist}</p>
                <p>{piececount}</p>
                <p>{dimensions}</p>
                <p>{location}</p>
                <p>{purchasedate}</p>
                <p>{retailer}</p>
                <p>{startdate}</p>
                <p>{completiondate}</p>
                <p>{notes}</p>
            </div>
            <div>
                <DeletePuzzle onDelete={handleDelete} />
            </div>
        </div>
    );
}

export default PuzzleCard;

