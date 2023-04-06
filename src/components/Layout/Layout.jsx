import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header/Header';
import { MainContent, LayoutWrapper, Footer } from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <LayoutWrapper>
      <ToastContainer autoClose={3000} />
      <Header />
      <MainContent>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContent>
      <Footer>
        <p>&#169; 2023 Created by Yuliia Rudenko</p>
      </Footer>
    </LayoutWrapper>
  );
};

export default Layout;
