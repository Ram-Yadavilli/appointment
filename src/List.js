import { AiOutlineStar, AiFillStar, AiFillDelete } from "react-icons/ai";

import "./List.css";

const List = (props) => {
  const { detail, btn, btn1 } = props;
  const { id, name, date, isClicked } = detail;

  const bu = () => {
    btn(id);
  };

  const bu1 = () => {
    btn1(id);
  };
  const ic = () => {
    if (isClicked) {
      return (
        <AiFillStar
          onClick={bu1}
          style={{ color: "yellow", marginTop: "20px" }}
        />
      );
    } else {
      return <AiOutlineStar onClick={bu1} style={{ marginTop: "20px" }} />;
    }
  };

  return (
    <li>
      <div className="nC">
        <p>Name:{name}</p>
        {ic()}
      </div>
      <div className="nC">
        <p>DATE:{date}</p>
        <AiFillDelete onClick={bu} style={{ marginTop: "20px" }} />
      </div>
    </li>
  );
};

export default List;
