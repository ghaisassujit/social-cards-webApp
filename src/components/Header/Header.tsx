import React from "react";
import { HeaderText, HeaderActions, StyledHeader } from "./Header.styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderText>UNFOLD</HeaderText>
      <HeaderActions>
        <Link to="/addNew/">
          <button className="btn btn-primary mb-2 mr-2">Share Your Story</button>
        </Link>
        <Link to="/">
          <button className="btn btn-primary mb-2 mr-2">Back To Reading Stories</button>
        </Link>
      </HeaderActions>
    </StyledHeader>
  );
};
