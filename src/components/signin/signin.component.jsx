import "./signin.style.scss"

import { signInWithGooglePopup, creatUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"


const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        creatUserDocumentFromAuth(response)
    }

    return (
        <div className="signin">
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In with google</button>
        </div>
    )
}

export default SignIn