import { Component } from "react";

class Login extends Component{
    render(){
        return (
            <div>
        <form>
            <label>Login</label><br></br>
            <input type="text" name="email"></input><br></br><br></br>
            <label>Password</label><br></br>
            <input type="text" name="password"></input><br></br><br></br>
            <input type="submit" value="Login"></input>
        </form>
        </div>
        );
    }
}

export default Login;