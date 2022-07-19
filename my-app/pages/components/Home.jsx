import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <div className={styles.nav_links}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
            <li>
              <Link to="/numbers">Numbers</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Welcome to Plusheaven</h1>
      </div>
    </div>   
  );
};

export default Home;