import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Datatable from "../components/Datatable";
import Styled from "styled-components";

const List = () => {
  return (
    <Div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

        <Datatable />
      </div>
    </Div>
  );
};

export default List;

const Div = Styled.div`
  display: flex;
  width: 100%;
  .listContainer {
    flex: 6;
  }
`;
