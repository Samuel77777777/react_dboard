import React from "react";
import styled from "styled-components";
import GroupIcon from "@mui/icons-material/Group";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";

const Card = () => {
  const data = [
    {
      icon: (
        <GroupIcon
          className="icon"
          style={{
            color: "white",
            backgroundColor: "green",
          }}
        />
      ),
      number: 200,
      text: "number of users",
      link: <Link to="/List"> see all</Link>,
    },
    {
      icon: (
        <PersonOutlinedIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      ),
      number: 150,
      text: "Employed students",
      link: <Link to="/employed"> see all</Link>,
    },
    {
      icon: (
        <GroupIcon
          className="icon"
          style={{
            color: "green",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      ),
      number: 40,
      text: "Unemployed students",
      link: <Link to="/unemployed"> see all</Link>,
    },
    {
      icon: (
        <GroupIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      ),
      number: 100,
      text: "Registerer Companies",
      link: <Link to="/companies">see all</Link>,
    },
  ];

  return (
    <Div>
      {data.map((data) => {
        return (
          <div className="box">
            <div className="">
              <br />
              {data.icon}
            </div>
            <br />
            <div className="ntext">
              <h1 className="font-bold text-3xl m-2">{data.number}</h1>

              <p className="m-2 text-gray-400">{data.text}</p>
            </div>
            <br />
            <div className="text-orange underline m-2 rounded">{data.link}</div>
          </div>
        );
      })}
    </Div>
  );
};

export default Card;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  .box {
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 188px;
    width: 200px;
    transition: 0.5s ease-in-out;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      background-color: white;
    }
    .icon {
      font-size: 30px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      background-color: green;
      border-radius: 10px;
      margin: 0 10px;
      color: white;
      transition: 0.5s ease-in-out;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }
    }
  }
`;
