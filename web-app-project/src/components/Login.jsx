const Login = () => {
    return (
        <div className="login-container" >
            <h1>Login</h1>
            <form>
                <div>
                    <input type="text" placeholder="Enter your username." />
                </div>

                <div>
                    <input type="password" placeholder="Enter your password." />
                </div>

                <button>Login</button>

            </form>
        </div>
    )
}

export default Login;