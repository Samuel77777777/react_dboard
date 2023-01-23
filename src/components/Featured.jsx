import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import styled from "styled-components";

const Featured = () => {
  return (
    <Div className="featured">
      <div className="top">
        <h1 className="title">Total Registration today</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"60%"} strokeWidth={5} />
        </div>
        <p className="title"> student Hired Today</p>
        <p className="amount">6</p>
        <p className="desc">
          Previous registration processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">45</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">15</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">12.4</div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Featured;

const Div = styled.div`
  flex: 2;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  padding: 10px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: gray;

    .title {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .bottom {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    .featuredChart {
      width: 100px;
      height: 100px;
    }

    .title {
      font-weight: 500;
      color: gray;
    }

    .amount {
      font-size: 30px;
    }

    .desc {
      font-weight: 300;
      font-size: 12px;
      color: gray;
      text-align: center;
    }

    .summary {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item {
        text-align: center;

        .itemTitle {
          font-size: 14px;
          color: gray;
        }

        .itemResult {
          display: flex;
          align-items: center;
          margin-top: 10px;
          font-size: 14px;

          &.positive {
            color: green;
          }

          &.negative {
            color: red;
          }
        }
      }
    }
  }
`;
