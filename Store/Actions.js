
export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNOUT_USER = "SIGNOUT_USER";


export const  Sign_User = (user) =>{
    return{
        type: SIGNIN_USER,
        payload: user
    }
}

export const  Signout_User = () =>{
    return{
        type: SIGNOUT_USER,
    }
}