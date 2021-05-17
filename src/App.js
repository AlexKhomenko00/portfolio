import { Suspense } from "react";

import { useRoutes } from "hookrouter";
import routes from "routes";

import Navbar from "components/Navbar/Navbar";
import ErrorPage from "pages/ErrorPage";
import Footer from "components/Footer/Footer";
import Loader from "components/Loader/Loader";

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Navbar />
        {routeResult || <ErrorPage />}
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
