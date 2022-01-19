import "./App.css";
import Page1 from "./components/Page1";
import React, { useState, Suspense } from "react";
// import asyncComponent from "./components/AsyncComponent";
const Page2Lazy = React.lazy(() => import("./components/Page2"));
const Page3Lazy = React.lazy(() => import("./components/Page3"));

function App() {
  const [routing, setRouting] = useState({ route: "page1", component: null });

  const onRouteChange = (route) => {
    // No Code Splitting
    setRouting({ route: route });

    // With Code Splitting
    // if (route === "page1") {
    //   setRouting({ route: "page1", component: "" });
    // } else if (route === "page2") {
    //   import("./components/Page2").then((Page2) => {
    //     setRouting({ route, component: Page2.default });
    //   });
    // } else if (route === "page3") {
    //   import("./components/Page3").then((Page3) => {
    //     setRouting({ route, component: Page3.default });
    //   });
    // }
  };

  // Async component splitting
  // if (routing.route === "page1") {
  //   return <Page1 onRouteChange={onRouteChange} />;
  // } else if (routing.route === "page2") {
  //   const AsyncPage2 = asyncComponent(() => import("./components/Page2"));
  //   return <AsyncPage2 onRouteChange={onRouteChange} />;
  // } else if (routing.route === "page3") {
  //   const AsyncPage3 = asyncComponent(() => import("./components/Page3"));
  //   return <AsyncPage3 onRouteChange={onRouteChange} />;
  // }

  // if (routing.route === "page1") {
  //   return <Page1 onRouteChange={onRouteChange} />;
  // } else {
  //   return <routing.component onRouteChange={onRouteChange} />;
  // }

  // React lazy splitting
  if (routing.route === "page1") {
    return <Page1 onRouteChange={onRouteChange} />;
  } else if (routing.route === "page2") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Page2Lazy onRouteChange={onRouteChange} />
      </Suspense>
    );
  } else if (routing.route === "page3") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Page3Lazy onRouteChange={onRouteChange} />
      </Suspense>
    );
  }
}

export default App;
