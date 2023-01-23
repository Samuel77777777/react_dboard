import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Link } from "react-router-dom";
import download from "../assets/download.jpg";
import styled from "styled-components";
import { Popup, Button } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Div className="navbar">
      <div className="wrapper">
        <div></div>
        <div className="search">
          <input type="search" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <Link to="/notification">
              <NotificationsNoneOutlinedIcon className="icon" />
              <div className="counter">1</div>
            </Link>
          </div>

          <Popup
            hoverable
            trigger={
              <div className="item">
                <Link to="/notification">
                  <ChatBubbleOutlineOutlinedIcon className="icon" />
                  <div className="counter">2</div>
                </Link>
              </div>
            }
          >
            <h1 className="font-bold text-2xl m-3">Recents</h1>

            <div className="flex m-2">
              <img src={download} alt="" className="w-2/12" />
              <p>Nasa just asked for a developed</p>
            </div>
            <div className="flex m-2">
              <img src={download} alt="" className="w-2/12" />
              <p>Nasa just asked for a developed</p>
            </div>
            <div className="flex m-2">
              <img src={download} alt="" className="w-2/12" />
              <a href="">Nasa just asked for a frontend developer </a>
            </div>
            <br />
            <div className="justify-center flex bg-blue-500 hover:bg-blue-700  p-3 rounded-xl">
              <a href="" className="text-white">
                See all
              </a>
            </div>
          </Popup>

          <Popup
            trigger={
              <div className="item">
                <img src={download} alt="" className="avatar" />
              </div>
            }
            hoverable
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Etb
              voluptatem, ipsa impedit perferendis repellendus obcaecati in non?
              Deserunt, eligendi perferendis aut atque voluptas voluptatem
              aliquid debitis alias totam ratione quasi.
            </p>

            <a href="" className="underline">
              view more
            </a>
          </Popup>
        </div>
      </div>
    </Div>
  );
};

export default Navbar;

const Div = styled.div`
  height: 60px;
  border-bottom: 0.5px solid rgb(231, 228, 228);
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .wrapper {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search {
      display: flex;
      align-items: center;
      border: 1.5px solid lightgray;
      padding: 10px;
      border-radius: 20px;

      input {
        border: none;
        outline: none;
        background: transparent;

        &::placeholder {
          font-size: 12px;
        }
      }
    }

    .items {
      display: flex;
      align-items: center;

      .item {
        display: flex;
        align-items: center;
        margin-right: 20px;
        position: relative;

        .icon {
          font-size: 25px;
          &:hover {
            color: orange;
          }
        }

        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .counter {
          width: 15px;
          height: 15px;
          background-color: red;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          position: absolute;
          top: -5px;
          right: -5px;
        }
      }
    }
  }
`;
