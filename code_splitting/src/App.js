import "./App.css";
import Page1 from "./components/Page1";
import { useState } from "react";

function App() {
  const [routing, setRouting] = useState({ route: "page1", component: "" });

  const onRouteChange = (route) => {
    // No Code Splitting
    // setRoute(route);

    // With Code Splitting
    if (route === "page1") {
      setRouting({ route: "page1", component: "" });
    } else if (route === "page2") {
      import("./components/Page2").then((Page2) => {
        setRouting({ route, component: Page2.default });
      });
    } else if (route === "page3") {
      import("./components/Page3").then((Page3) => {
        setRouting({ route, component: Page3.default });
      });
    }
  };

  if (routing.route === "page1") {
    return <Page1 onRouteChange={onRouteChange} />;
  } else {
    return <routing.component onRouteChange={onRouteChange} />;
  }
}

export default App;
