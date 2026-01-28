import CustomForm from "./CustomForm"
import { SIGN_IN_FORM_CONFIG } from "./formConfig"

const SignIn = () => {
    function onSignInFOrmSubmit(data) {
        console.log("Data from custom form",data);
    }

    return (
        <div>
            <h1>Sign In Form</h1>
            <CustomForm config={SIGN_IN_FORM_CONFIG} onSubmit={onSignInFOrmSubmit}/>
        </div>
    )
}

export default SignIn
