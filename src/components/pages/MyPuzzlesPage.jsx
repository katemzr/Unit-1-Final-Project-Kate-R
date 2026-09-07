import Form from "../Form";
import PuzzleCard from "../PuzzleCard";
import { useState } from "react";

const initialPuzzles = [  //puzzles to appear on My Puzzles page to simulate a user's saved puzzle cards.
    {
        id: "1", 
        title: "My Cup Runneth Over",
        link: '/images/MyCupRunnethOver.jpg',
        alt: "image of My Cup Runneth Over puzzle"

    },{
        id: "2",
        title: "Worship of Trees",
        link: '/images/WorshipOfTrees.jpg',
        alt: "image of Worship of Trees puzzle"

    },{
        id: "3",
        title: "The Exploded Beetle",
        link: '/images/TheExplodedBeetle.jpg',
        alt: "image of the Exploded Beetle puzzle"

    },{
        id: "4",
        title: "Bottle Caps",
        link: '/images/BottleCaps.jpg',
        alt: "image of Bottle Caps puzzle"

    },{
        id: "5",
        title: "Turbo 3000",
        link: '/images/Turbo3000.jpg',
        alt: "image of Turbo 3000 puzzle"

    },{
        id: "6",
        title: "Tree of Life Tapestry",
        link: '/images/TreeOfLifeTapestry.jpg',
        alt: "image of Tree of Life Tapestry puzzle"
    }


];

const MyPuzzlesPage = () => {
  
    const [ puzzles, setPuzzles ] = useState(initialPuzzles);

    const puzzleItems = puzzles.map(puzzle => 
        <PuzzleCard 
            key={puzzle.id} 
            link={puzzle.link} 
            alt={puzzle.alt} 
            title={puzzle.title} 
            puzzlebrand={puzzle.puzzlebrand} 
            puzzleartist={puzzle.puzzleartist} 
            piececount={puzzle.piececount} 
            height={puzzle.height}
            width={puzzle.width}
            location={puzzle.location} 
            purchasedate={puzzle.purchasedate} 
            retailer={puzzle.retailer} 
            startdate={puzzle.startdate} 
            completiondate={puzzle.completiondate}
            notes={puzzle.notes} /> );

    const handleAddPuzzle = (newPuzzle) => {
        
        setPuzzles((prevPuzzles) => [...prevPuzzles, newPuzzle]);
    };

    return (
        <main >
            <h1 className="my-puzzle-h1">My Puzzles Page</h1>

              <div className="card-container"> 
                {puzzleItems}                
              </div> 

            <Form onAddPuzzle={handleAddPuzzle}/>
        </main>
       
    );
};



export default MyPuzzlesPage;

