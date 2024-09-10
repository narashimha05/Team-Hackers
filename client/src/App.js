import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Signin from './pages/Signin';
import Signup from './pages/signup';
import Mainpage from './pages/Mainpage';
import RegisterSponsor from './pages/RegisterSponsor';
import RegisterCP from './pages/RegisterCP';
import RegisterDesigner from './pages/RegisterDesigner';
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = React.useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/user/signup" />;
};

function App() {
  return (
  
    <>
    
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Mainpage /></ProtectedRoute>} />
          <Route path="/user/signin" element={<Signin />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/registerSponsor" element={<RegisterSponsor />} />
          <Route path="/registerCP" element={<RegisterCP />} />
          <Route path="/registerDesigner" element={<RegisterDesigner />} />
        </Routes>
      </Router>
    </AuthProvider>
    
    </>
  );
}

export default App;
