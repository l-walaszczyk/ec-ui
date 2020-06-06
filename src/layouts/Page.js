import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/HomePage";
import About from "../pages/AboutPage";
import ServicesOne from "../pages/ServicesOnePage";
import ServicesTwo from "../pages/ServicesTwoPage";
import ServicesThree from "../pages/ServicesThreePage";
import Scheduler from "../pages/SchedulerPage";
import Error404Page from "../pages/Error404Page";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/services1" exact component={ServicesOne} />
      <Route path="/services2" exact component={ServicesTwo} />
      <Route path="/services3" exact component={ServicesThree} />
      <Route path="/scheduler" exact component={Scheduler} />
      <Route component={Error404Page} />
    </Switch>
  );
};

export default Page;
