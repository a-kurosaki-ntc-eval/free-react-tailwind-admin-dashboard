import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/Utils/PageTitle';
import Terms from './pages/Terms';
import Usage from './pages/Usage';
import Usecase from './pages/Usecase/index';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <DefaultLayout>
              <PageTitle title="使い方 | KiiteMi管理ポータル" />
              <Usage />
            </DefaultLayout>
          }
        />
        <Route
          path="/usecase"
          element={
            <DefaultLayout>
              <PageTitle title="ユースケース | KiiteMi管理ポータル" />
              <Usecase />
            </DefaultLayout>
          }
        />
        <Route
          path="/terms"
          element={
            <DefaultLayout>
              <PageTitle title="利用規約 | KiiteMi管理ポータル" />
              <Terms />
            </DefaultLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
