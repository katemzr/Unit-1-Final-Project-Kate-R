import { useState } from "react";
import DeletePuzzle from "./DeletePuzzle";

const PuzzleCard = ({ 
    id, 
    image, 
    title, 
    link, 
    alt, 
    puzzlebrand, 
    puzzleartist, 
    piececount, 
    height, 
    width, 
    location, 
    purchasedate, 
    retailer, 
    startdate, 
    progresspercent, 
    completiondate, 
    completiontime,
    onloan, 
    notes
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
                <img src={image} alt={alt} width={200} height={300}/>
            </div>
            <div>
                <p><b>{title}</b></p>
            </div>
            <div>
                <p>{id}</p>
                <p>Brand:{puzzlebrand}</p>
                <p>Artist:{puzzleartist}</p>
                <p>Piece Count:{piececount}</p>
                <p>Height:{height}</p>
                <p>Width:{width}</p>
                <p>Location:{location}</p>
                <p>Purchase Date:{purchasedate}</p>
                <p>Retailer:{retailer}</p>
                <p>Start Date:{startdate}</p>
                <p>Progress Percent:{progresspercent}</p>
                <p>Completion Date:{completiondate}</p>
                <p>Completion Time:{completiontime}</p>
                <p>On Loan:{onloan ? "Yes" : "No"}</p>
                <p>Notes:{notes}</p>
            </div>
            <div>
                <DeletePuzzle onDelete={handleDelete} />
            </div>
        </div>
    );
}

export default PuzzleCard;

