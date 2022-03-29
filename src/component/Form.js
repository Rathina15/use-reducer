import React, { useReducer } from "react";
import Reducer from './Reducer'


const initialValue = {
    name: "",
    password: "",
    email: "",
    phno: "",
};

const Form = () => {
    const [formState, dispatch] = useReducer(Reducer, initialValue);


    function onChange(e) {
        const action = {
            type: 'Name',
            input: e.target.name,
            value: e.target.value
        }
        dispatch(action)
    }



    return (
        <center>
            <form>

                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter the Name"
                    value={formState.username}
                    onChange={onChange} required /><br></br>

                <label>FirstName:</label>
                <input
                    type="text"
                    name="firstname"
                    placeholder="Enter the First Name"
                    value={formState.firstname}
                    onChange={onChange} required /><br></br>

                <label>LastName:</label>
                <input
                    type="text"
                    name="lastname"
                    placeholder="Enter the Last Name"
                    value={formState.lastname}
                    onChange={onChange} required /><br></br>


                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter the Email"
                    value={formState.useremail}
                    onChange={onChange} /><br></br>


                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter the Password"
                    value={formState.userpassword}
                    onChange={onChange} /><br></br>


                <label>Ph No:</label>
                <input
                    type="number"
                    name="phno"
                    placeholder="Enter the Phone number"
                    value={formState.usernumber}
                    onChange={onChange} /><br></br>

                <button>Submit</button>

            </form>
        </center>
    );
}
export default Form;
