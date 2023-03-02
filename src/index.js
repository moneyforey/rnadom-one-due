import axios from "axios";
import navbar from "./Navbar";
import "./styles.css";

document.getElementById("app").innerHTML = navbar();
document.getElementById("container");
const getData = () => {
  axios
    .get("https://reqres.in//api/users?page=2")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
getData();
