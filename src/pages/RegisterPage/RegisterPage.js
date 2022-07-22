import React, {useState} from 'react';
import axios from "axios";
const RegisterPage = () => {
    const [state,setState]=useState({
        username: "",
        password: "",
        email:""
    })
    const [successFlag,setSuccessFlag]=useState(false);

        const handleSubmit=(e)=> {
            console.log(state);
            e.preventDefault();
            const registerUser = async () => {
                const response = await axios.post('http://localhost:4000/users/register',
                    {name: state.username, password: state.password, email: state.email});
                console.log(response);
                if(response.data==="success"){
                    setSuccessFlag(true);
                    console.log('successFlag ==>',successFlag);
                }
            }
            registerUser();

        }
    const handleUsername = (e) => {

        setState({...state,username: e.target.value});

    }
    const handlePassword = (e) => {

        setState({...state,password: e.target.value});

    }
    const handleEmail = (e) => {

        setState({...state,email: e.target.value});

    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                User Name:<input type='text' name="username"
                                 onChange={(e) => handleUsername( e)}/>
                Password: <input type="password" name='password' autoComplete="off"
                                 onChange={(e) => handlePassword( e)}/>
                Email: <input type="email" name="email"
                                 onChange={(e) => handleEmail( e)}/>
                <button type="submit"  >Add</button>
            </form>

            {successFlag?
                <h2>Register Successful</h2>
                :<h2>Register Failed</h2>
            }

        </div>
    );
};

export default RegisterPage;
