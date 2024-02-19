import Aos from "aos";
import "aos/dist/aos.css";

import Navigation from "./navigations";

const App = () => {
  Aos.init();

  return <Navigation />;
};

export default App;
