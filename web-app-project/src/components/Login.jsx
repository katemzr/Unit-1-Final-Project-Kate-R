

const Login = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
    }
  

    return (
        <div className="login-container" >
            <h1>Login</h1>
            <form action="submit" method="GET">

                <label HTMLfor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username." required />

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password." required />
                

                <button>Login</button>

            </form>
        </div>
    )
}

export default Login;