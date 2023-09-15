import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <div className='w-100' style={{ maxWidth: '400px'}}>
        <AuthProvider>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route
              path="/"
              element={(
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              )}
            />
            <Route
              path="/update-profile"
              element={(
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              )}
            />
            <Route
            path="/login"
            element={(
              <PublicRoute>
                <Login />
              </PublicRoute>
              )}
            />
          </Routes>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
