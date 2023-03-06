import ReactDOM from "react-dom/client";
import saibabaImage from "./images.jpeg";
import userIcon from "./user.png";
const Header = () => {
  return (
    <div className="headerContainer">
      <img width="50px" height="40px" src={saibabaImage}></img>
      <input type="text" />
      <img width="50px" height="40px" src={userIcon}></img>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
