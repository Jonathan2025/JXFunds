import LoginButton from "../components/Authentication/LoginButton";

const Login = (props) => {

return (
  <>
    <section className='loginForm'>
      <div className="loginBackground">
        <img src="https://www.usnews.com/cmsmedia/03/ac/b3b452824463bf8923fade3d630e/gettyimages-1310316502.jpg" alt="Background" />
        <div className="loginContent">
          <h1 className="loginMessage">Sign In to Access JXFunds!</h1>
          <LoginButton className="loginButton" />
        </div>
      </div>
    </section>
  </>
    )
} 
export default Login;