import React, { useContext, useEffect, useState } from "react";
import "./user-bar.scss";
import { UserBarProps } from "./models";
import { ThemeContext } from "../../../../context/ThemeProvider";

function UserBar({ name, src }: UserBarProps) {
  const themeContext = useContext(ThemeContext);
  const [img, setImg] = useState();
  useEffect(() => {
    const fetchImage = async () => {
      const response = await import(`./assets/images/${src}`);
      setImg(response.default);
    };
    fetchImage();
  }, [src]);
  return (
    <div className="header__user-info">
      <img className="header__user-avatar" src={img} alt="user-avatar" />
      <p
        className={`header__user-name header__user-name--${themeContext?.theme}`}
      >
        {name}
      </p>
    </div>
  );
}

export default UserBar;
