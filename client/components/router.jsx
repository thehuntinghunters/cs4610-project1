import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './home/_home';
import { AuthContext } from '../utils/auth_context';
import { SignIn } from './sign_in/_sign_in';
import { SignUp } from './sign_up/_sign_up';
import { Admin } from './admin/_admin';
import { ProjectPage } from './project/_project_page';

export const Router = () => {
  const [authToken] = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={authToken ? <Home /> : <Navigate replace to="signin" />} />
      <Route path="admin" element={<Admin />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="projects">
        <Route path=":id" element={<ProjectPage />} />
      </Route>
    </Routes>
  );
};
