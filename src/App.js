import { useRoutes } from "hookrouter";
import routes from "routes";

import Navbar from "components/Navbar/Navbar";

import ErrorPage from "pages/ErrorPage";
import Footer from "components/Footer/Footer";

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <Navbar />
      {routeResult || <ErrorPage />}
      <Footer />
    </div>
  );
};

export default App;
