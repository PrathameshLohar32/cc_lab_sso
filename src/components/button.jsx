import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { user, loginWithRedirect, isAuthenticated,logout } = useAuth0();
  console.log("curr user", user);

  return (
    <>
      {user && <h3>Hello {user.name}</h3>} {/* Render only if user is defined */}
      <div>
        {isAuthenticated ? (<button onClick={(e)=>logout()}>Logout</button>) : (<button onClick={e => loginWithRedirect()}>Login with Redirect</button>)}
      </div>
    </>
  );
}

export default App;
