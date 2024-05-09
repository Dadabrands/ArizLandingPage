// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Workflow from "./components/Workflow";
// import Footer from "./components/Footer";
// import Faqs from "./components/Faqs";
// import Streamline from "./components/Streamline";
// import Email from "./components/Email";
// // import News from "./components/News";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <div className="max-w-7xl mx-auto pt-20 px-6">
//         <Workflow />
//         <Streamline />
//       </div>
//       <Faqs />
//       <Email />
//       {/* <News /> */}
//       <Footer />
//     </>
//   );
// };

// export default App;


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
import Streamline from "./components/Streamline";
import Email from "./components/Email";
// import News from "./components/News";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/newsletter" component={Email} />
          {/* Add more routes if needed */}
        </Switch>
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Workflow />
          <Streamline />
        </div>
        <Faqs />
        {/* <News /> */}
        <Footer />
      </>
    </Router>
  );
};

export default App;
