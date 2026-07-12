import Form from "../Form";
import PuzzleCard from "../PuzzleCard";
import { useState } from "react";

const puzzles = [
    {
        id: "1", 
        title: "My Cup Runneth Over",
        link: '/images/puzzle1.jpg',
        alt: "image of My Cup Runneth Over puzzle"

    },{
        id:2,
        title: "Worship of Trees",
        link: '/images/puzzle2.jpg',
        alt: "image of Worship of Trees puzzle"

    },{
        id:3,
        title: "The Exploded Beetle",
        link: '/images/puzzle3.jpg',
        alt: "image of the Exploded Beetle puzzle"
    },{
        id:4,
        title: "Bottle Caps",
        link: '/images/puzzle4.jpg',
        alt: "image of Bottle Caps puzzle"
    },{
        id:5,
        title: "Planets",
        link: '/images/puzzle5.jpg',
        alt: "image of Planets puzzle"
    },{
        id:6,
        title: "Tree of Life Tapestry",
        link: '/images/puzzle6.jpg',
        alt: "image of Tree of Life Tapestry puzzle"
    }


];

const puzzleItems = puzzles.map(puzzle => <PuzzleCard key={puzzle.id} title={puzzle.title} link={puzzle.link} alt={puzzle.alt}/> );




const MyPuzzlesPage = () => {
  
    

    return (
        <main>
            <div className="main-content">
                <h1>My Puzzles Page</h1>
                {puzzleItems}                
                
              
        
                <Form />
            </div>
        </main>
       
    );
};



export default MyPuzzlesPage;

