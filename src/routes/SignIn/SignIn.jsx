import { 
  signInGooglePopup,
  createUserProfileDoc
} from "../../utils/firebase";

const SignIn = () => {
  
  const handleSignIn = async () => {
    try {
      const { user } = await signInGooglePopup();
      const userRef = await createUserProfileDoc(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign In With Google</button>
    </div>
  );
}

export default SignIn;