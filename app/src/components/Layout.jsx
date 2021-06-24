import React from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";

function Layout(props) {

  return (
    <React.Fragment>
      <Topbar />
      {props.children}
      <Footer owner='🌋' date='2020' />
    </React.Fragment>
  );
}

export default Layout;
