import { useState } from "react";


const Form = ({onAddPuzzle}) => {
    const [puzzleTitle,  setPuzzleTitle] = useState("");
    const [puzzleBrand, setPuzzleBrand] = useState("");
    const [puzzleArtist, setPuzzleArtist] = useState("");
    const [pieceCount, setPieceCount] = useState("");
    const [dimensions, setDimensions] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [retailer, setRetailer] = useState("");
    const [startDate, setStartDate] = useState("");
    const [completionDate, setCompletionDate] = useState("");
    const [notes, setNotes] = useState("");
    const [location, setLocation] = useState("");



    const handleCheckboxChange = (e) => {
        setIsOnLoan(e.target.checked)
    };

    const handleReset = () => {
        setPuzzleTitle("");
        setPuzzleBrand("");
        setPuzzleArtist("");
        setPieceCount("");
        setDimensions("");
        setPurchaseDate("");
        setRetailer("");
        setStartDate("");
        setCompletionDate("");
        setLocation("");
        setNotes("Enter Notes about your Puzzle");
    };

    const handleAddCard = (e) => {
        e.preventDefault();
        const newCard = {
            title: puzzleTitle,
            puzzlebrand: puzzleBrand,
            puzzleartist: puzzleArtist,
            piececount: pieceCount,
            dimensions: dimensions,
            location: location,
            purchasedate: purchaseDate,
            retailer: retailer,
            startdate: startDate,
            completiondate: completionDate,
            notes: notes
        };

       onAddPuzzle(newCard);
       handleReset(); 
    };

    return (
        <div className="form">
            <h1>Add a New Puzzle</h1>
            <fieldset>
                <form onSubmit={handleAddCard} action="#" method="GET">
                    <label htmlFor="puzzletitle">Puzzle Title:</label>
                    <input 
                        type="text" 
                        name="puzzletitle" 
                        id="puzzletitle" 
                        value={puzzleTitle}
                        onChange={ (e) =>
                            setPuzzleTitle(e.target.value)
                        }
                        placeholder="Enter Puzzle Title"
                    />

                    <label htmlFor="puzzlebrand">Puzzle Brand:</label>
                    <input 
                        type="text" 
                        name="puzzlebrand" 
                        id="puzzlebrand" 
                        value={puzzleBrand}
                        onChange={ (e) =>
                            setPuzzleBrand(e.target.value)
                        }
                        placeholder="Enter Puzzle Brand"
                    />

                    <label htmlFor="puzzleartist">Puzzle Artist:</label>
                    <input 
                        type="text" 
                        name="puzzleartist" 
                        id="puzzleartist" 
                        value={puzzleArtist}
                        onChange={ (e) =>
                            setPuzzleArtist(e.target.value)
                        }
                        placeholder="Enter Puzzle Artist"
                    /> 

                    <label htmlFor="piececount">Piece Count:</label>
                    <input 
                        type="text" 
                        name="piececount" 
                        id="piececount" 
                        value={pieceCount}
                        onChange={ (e) =>
                            setPieceCount(e.target.value)
                        }
                        placeholder="Enter Piece Count"
                    />

                    <label htmlFor="dimensions">Dimensions:</label>
                    <input 
                        type="text" 
                        name="dimensions" 
                        id="dimensions" 
                        value={dimensions}
                        onChange={ (e) =>
                            setDimensions(e.target.value)
                        }
                        placeholder="Enter Puzzle Dimensions"
                    /> 

                    <label htmlFor="location">Location:</label>
                    <input 
                        type="text" 
                        name="location" 
                        id="location" 
                        value={location}
                        onChange={ (e) =>
                            setLocation(e.target.value)
                        }
                        placeholder="Enter Puzzle's Storage Location'"
                    />   

                    <label htmlFor="purchasedate">Purchase Date:</label>
                    <input 
                        type="text" 
                        name="purchasedate" 
                        id="purchasedate" 
                        value={purchaseDate}
                        onChange={ (e) =>
                            setPurchaseDate(e.target.value)
                        }
                        placeholder="Enter Purchase Date"
                    />

                    <label htmlFor="retailer">Retailer:</label>
                    <input 
                        type="text" 
                        name="retailer" 
                        id="retailer" 
                        value={retailer}
                        onChange={ (e) =>
                            setRetailer(e.target.value)
                        }
                        placeholder="Enter Name of Retailer"
                    />

                    <label htmlFor="startdate">Start Date:</label>
                    <input 
                        type="text" 
                        name="startdate" 
                        id="startdate" 
                        value={startDate}
                        onChange={ (e) =>
                            setStartDate(e.target.value)
                        }
                        placeholder="Enter Puzzle Start Date"
                    />

                    <label htmlFor="completiondate">Completion Date:</label>
                    <input 
                        type="text" 
                        name="completiondate" 
                        id="completiondate" 
                        value={completionDate}
                        onChange={ (e) =>
                            setCompletionDate(e.target.value)
                        }
                        placeholder="Enter Puzzle Completion Date"
                    /> 
                   
                    <label htmlFor="notes">Notes:</label>
                    <textarea
                        value={notes}
                        name="notes"
                        id="notes"
                        cols="30"
                        rows="5"
                        onChange={ (e) =>
                            setNotes(e.target.value)
                        }
                        placeholder="Enter Notes about your Puzzle">
                    </textarea>

                    <button className="buttons"
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                        >Reset
                    </button>

                    <button className="buttons"
                        type="submit"
                        //onClick={handleAddCard}
                        >Add
                    </button>

                    

                </form>
            </fieldset>

        </div>

    );
}  

export default Form;
