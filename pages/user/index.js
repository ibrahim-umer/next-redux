import { useState } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../Store/Actions'

const user = (props)=>{
    console.log(props)
    const [get,setUser] = useState({
        email: "",
        displayName: "not set",
        pictureURL: "",
        loggedinStatus: false
        });
    console.log(get)
    
    const inputsetter = (event) => {
        console.log(event);
        setUser({
            email: "",
            displayName: event.target.value,
            pictureURL: "",
            loggedinStatus: false
    })}
    
    return(
        <>
            <h1>Please input data </h1>
            <input type='text' onChange = {inputsetter} />
            <button onClick={()=>props.login(get)}>change state</button>

        </>
    );
}


const mapStatetoProps = state => {
    return{
        user: state.loggedinUser
    }
}

const dispatchActions = dispatch =>{
    return {
        login: user => dispatch(Actions.Sign_User(user))
    }  
}

export default connect(mapStatetoProps, dispatchActions)(user);