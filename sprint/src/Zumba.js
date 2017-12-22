import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

function ZumbaOG() {
  return <h1>The Original Zumba Dance Party!</h1>;
}

function ZumbaToning() {
  return <h1>Zumba with weights</h1>;
}
function AquaZumba() {
  return <h1>Zumba in the Pool</h1>;
}
function ZumbaGold() {
  return <h1>Zumba for Seniors</h1>;
}
function ZumbaKids() {
  return <h1>Zumba for kids!</h1>;
}

function Header() {
  return (
    <div className="card centered">
      <h1>Zumba Classes</h1>
    </div>
  );
}

export const Zumba = {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/zumba" component={ZumbaOG} />
          <Route path="/zumba-toning" component={ZumbaToning} />
          <Route path="/aqua-zumba" component={AquaZumba} />
          <Route path="/zumba-gold" component={ZumbaGold} />
          <Route path="/zumba-kids" component={ZumbaKids} />
        </BrowserRouter>
      </div>
    );
  }
};

export default Zumba;
