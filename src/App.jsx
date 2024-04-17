import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <Navbar />
      {isAuthenticated && (
        <div className="container d-flex justify-content-center mt-4">
          <h3>Hello {user.name} Login Successful</h3>
        </div>
      )}
      <Hero/>
      <Footer/>
    </>
  );
}

export default App;
