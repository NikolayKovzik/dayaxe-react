import React, { useEffect, useState } from "react";
import "./user-bar.scss";
import { UserBarProps } from "./models";

function UserBar({ name, src }: UserBarProps) {
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
      <p className="header__user-name">{name}</p>
    </div>
  );
}

export default UserBar;
