const AboutPage = () => {
    return (
        <div>
            <h1>About 'The Last Piece'</h1>
            <p>'The Last Piece' web app is my LaunchCode Unit 1 Final Project. The product must include the following:</p>

            <ul>
                <li>Home page with an introduction.</li>
                <li>About page that is separate from the home page.</li>
                <li>Easy-to-follow flow between pages for users, linked using React Router.</li>
                <li>Header component with a title.</li>
                <li>Footer with text or links to additional resources.</li>
                <li>Features where users can add, modify, OR delete content.</li>
                <li>At least one interactive feature.</li>
            </ul>

            <thead>
                <tr>
                    <th>
                        My Favorite Puzzles
                    </th>
                    <th>
                        Why I Like This Puzzle
                    </th>
                </tr>
                <tr>
                    <td>
                        Life, the Greatest Puzzle
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
        </div> 
    );
};

export default AboutPage;