import Form from "../Form";
import PuzzleCard from "../PuzzleCard";


const MyPuzzlesPage = () => {
    return (
        <main>
            <div className="main-content">
                <h1>My Puzzles Page</h1>
                <PuzzleCard />

                <Form />
            </div>
        </main>
       
    );
};



export default MyPuzzlesPage;