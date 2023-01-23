import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import Featured from "../components/Featured";
import Chart from "../components/Chart";
import styled from "styled-components";
import Card from "../components/card";

const Home = () => {
  return (
    <Div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="justify-between m-4">
          <Card />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  display: flex;
  width: 100%;
  .homeContainer {
    flex: 6;

    .charts {
      display: flex;
      padding: 20px;
      gap: 20px;
    }

    .charts {
      padding: 5px 20px;
    }

    .listContainer {
      -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
      box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
      padding: 20px;
      margin: 20px;

      .listTitle {
        font-weight: 500;
        color: gray;
        margin-bottom: 15px;
      }
    }
  }
`;
