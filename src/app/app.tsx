import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../designSystem/templates/mainLayout/mainLayout';
import { ErrorPage } from '../designSystem/organisms/errorPage/errorPage';
import { ReactQueryProvider } from './providers/reactQueryProvider/reactQueryProvider';
import { ThemeProviderWrapper } from './providers/themeProvider/ThemeContext';
import { GlobalStyles } from '../designSystem/styles/globalstyles';

const Backdrop = lazy(() => import('../designSystem/atoms/backdrop/backdrop').then(m => ({ default: m.Backdrop })));
const ListingPage = lazy(() => import('./pages/listingPage/listingPage').then(module => ({ default: module.ListingPage })));
const DetailsPage = lazy(() => import('./pages/detailsPage/detailsPage').then(module => ({ default: module.DetailsPage })));

const App: React.FC = () => {
  return (
    <ReactQueryProvider>
      <ThemeProviderWrapper>
        <GlobalStyles />
        <BrowserRouter>
          <Suspense fallback={<Backdrop />}>
            <MainLayout title="Rick & Morty">
              <Routes>
                <Route path="/" element={<ListingPage />} />
                <Route path="/details/:id" element={<DetailsPage />} />
                <Route path="*" element={<ErrorPage message="Page not found" />} />
              </Routes>
            </MainLayout>
          </Suspense>
        </BrowserRouter>
      </ThemeProviderWrapper>
    </ReactQueryProvider>
  );
};

export default App;

