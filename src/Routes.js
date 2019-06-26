import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./containers/Welcome";
import Instructions from "./containers/Instructions";
import Trial from "./containers/Trial";
import NotFound from "./containers/NotFound";
import Complete from "./containers/Complete";
import TrialQ from "./containers/TrialQ";

export default () =>
  <Switch>
    <Route path="/users/:id"  exact component={Welcome} />
    <Route path="index.html"  exact component={Welcome} />
    <Route path="/" exact component={Welcome} />
    <Route path="/Welcome" exact component={Welcome} />
    <Route path="/Instructions" exact component={Instructions} />
    <Route path="/Trial" exact component={Trial} />
    <Route path="/Complete" exact component={Complete} />
    <Route path="/TrialQ" exact component={TrialQ} />
        { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;