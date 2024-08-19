'use client';

import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from 'react-router-dom';
import store from '@Redux/store';
import SignUpPage from '@Pages/sign-up/page';
import LoginPage from '@Pages/login/page';
import DashboardPage from '@Pages/dashboard/page';

function Home() {
  
  return (
    <Provider store={store}>
      <Router>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/sign-up">
                Sign Up
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Navigate to="/sign-up" replace />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default Home;
