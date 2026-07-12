import { useState } from "react";



const DeletePuzzle = () => {
    const [ isVisible, setIsVisible ] = useState(true);
        if (!isVisible){ 
            return null;
}
    return (
        <div>
            <button onClick={() => setIsVisible(false)}>Delete</button>
        </div>
    );
}

export default DeletePuzzle;