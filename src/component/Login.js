import React from 'react'

const Login = () => {
    return (
        <div>
            <form>
                <center>
                    <label>UserName:</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter the User Name" /><br></br>

                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter the Password" /><br></br>


                </center>
            </form>
        </div>
    )
}

export default Login;
