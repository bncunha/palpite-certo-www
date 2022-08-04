import { Helmet } from "react-helmet"
import React from "react";

const Layout = ({children}) => {
  return (
    <>
      <Helmet>
        <title> Palpite Certo </title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div>
        { children }
      </div>
    </>
  )
}

export default Layout;