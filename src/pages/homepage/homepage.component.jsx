import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = prop => (
  <div className="homepage">
    <Directory />
    {console.log(prop)}
  </div>
);

export default HomePage;
