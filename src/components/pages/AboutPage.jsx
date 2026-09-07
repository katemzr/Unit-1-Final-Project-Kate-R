import Animation from "../Animation";


const AboutPage = () => {
    return (
        <>
            <h1>Contact Us</h1>    
            <p>Have a question, suggestion, or feedback about The Last Piece? We would love to hear from you! Whether you need help using the site, 
                have an idea for a new feature, or just want to share your thoughts, feel free to reach out. 
                Fill out the contact form below, and we will get back to you as soon as we can. 
                Thanks for helping us make The Last Piece an even better place for puzzle lovers!</p>
            
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
        </>
    );
};

export default AboutPage;