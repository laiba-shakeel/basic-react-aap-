import { AppBar } from "@mui/material";
import React from "react";
import { Logo, SearchBar, SearchMenu, ParentSearch, ParentSearchMenu, SellButton, LoginButton } from "./SearchElements";

const Search = () => {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "rgb(0 0 0 / 0%)",
          position: "relative",
          display: "flex",
          justifyContent: "start",
          textAlign: "start",
          zIndex: "0",
          marginTop: "2px",
        }}>
        <Logo className="container d-flex mt-2">
          <img
            src="https://www.logosvgpng.com/wp-content/uploads/2020/10/olx-logo-vector.png"
            alt=""
            width="70px"
            height="50px"
            sx={{
              verticalAlign: "none",
            }}
          />
          <ParentSearch
            sx={{
              width: "100%",
            }}>
            <SearchBar className="ms-3" placeholder="Pakistan"></SearchBar>
          </ParentSearch>
          <ParentSearchMenu>
          <SearchMenu className="ms-1" placeholder="Food,Car,MobilePhones & More..."></SearchMenu>
          </ParentSearchMenu>
          <LoginButton>Login</LoginButton>
          <SellButton><i class="fa fa-plus"></i> Sell </SellButton>
        </Logo>
      </AppBar>
    </>
  );
};

export default Search;
