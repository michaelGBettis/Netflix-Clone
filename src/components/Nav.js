import React, { useEffect, useState } from "react";
import { FaBell, FaSearch, FaGift } from "react-icons/fa";
import { useHistory } from "react-router";
import "./Nav.css";

function Nav() {
  const [show, handelShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handelShow(true);
    } else {
      handelShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix logo"
        />

        <img
          onClick={() => history.push("./profile")}
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="profile avatar"
        />

        <div className="nav_buttons">
          <div className="nav_logo_buttons">
            <button>Home</button>
            <button>TV Shows</button>
            <button>Movies</button>
            <button>New &amp; Popular</button>
            <button>My List</button>
          </div>
          <div className="nav_avatar_buttons">
            <button>
              <FaSearch size="1.25em" title="Search" />
            </button>
            <button>KIDS</button>
            <button>DVD</button>
            <button>
              <FaGift size="1.25em" title="Referrals" />
            </button>
            <button>
              <FaBell size="1.25em" title="Notifications" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
