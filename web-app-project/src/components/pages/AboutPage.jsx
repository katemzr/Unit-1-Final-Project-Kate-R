import Animation from "../Animation";


const AboutPage = () => {
    return (
        <>
            <h1>About 'The Last Piece'</h1>    
            <p><b>'The Last Piece' web app is my LaunchCode Unit 1 Final Project. The product must include the following:</b></p>
        
            <ul className="list">
                <li>Home page with an introduction.</li>
                <li>About page that is separate from the home page.</li>
                <li>Easy-to-follow flow between pages for users, linked using React Router.</li>
                <li>Header component with a title.</li>
                <li>Footer with text or links to additional resources.</li>
                <li>Features where users can add, modify, OR delete content.</li>
                <li>At least one interactive feature.</li>
                <li>Simple animation(s) - perhaps an orange square that spins around.</li>
            </ul>
            <table>
                <thead className="table">
                    <tr>
                        <th>
                            <b>My Favorite Puzzles</b>
                        </th>
                        <th>
                            Why I Like This Puzzle
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Life
                        </td>
                        <td>
                            The reason I love this puzzle is because at the time I bought it, it was the world's largest puzzle - measuring 14 feet by 5 feet.
                        </td>
                    </tr>
                    <tr>
                        <td>Farmers Market</td>
                        <td>This one is just cute - cute as heck!</td>
                    </tr>
                    <tr>
                        <td>Turbo 3000</td>
                        <td>This one was a gift - as part of a set - for Christmas, from my boyfriend.</td>
                    </tr>
                </thead>
            </table>
            <div>
                <Animation />
            </div>

        </>
    );
};

export default AboutPage;