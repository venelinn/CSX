import React from "react"
import classes from "./Footer.module.scss";

const Footer = () => (
  <footer className={classes.footer}>
      <div className={classes.copyright}>© {new Date().getFullYear()} CSX Corporation</div>
      <a href="//csx.com" target="_blank" rel="noopener noreferrer">Return to csx.com</a>
  </footer>
)

export default Footer

