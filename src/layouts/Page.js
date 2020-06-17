import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesOnePage from "../pages/ServicesOnePage";
import ServicesTwoPage from "../pages/ServicesTwoPage";
import ServicesThreePage from "../pages/ServicesThreePage";
import DownloadsPage from "../pages/DownloadsPage";
import SchedulerPage from "../pages/SchedulerPage";
import Error404Page from "../pages/Error404Page";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/services1" exact component={ServicesOnePage} />
      <Route path="/services2" exact component={ServicesTwoPage} />
      <Route path="/services3" exact component={ServicesThreePage} />
      <Route path="/downloads" exact component={DownloadsPage} />
      <Route path="/scheduler" exact component={SchedulerPage} />
      <Route component={Error404Page} />
    </Switch>
  );
};

export default Page;
