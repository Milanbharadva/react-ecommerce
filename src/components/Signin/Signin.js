import { useState } from "react";
import User from "../../data/User";
import { useContext } from "react";
import noteContext from "../../Context/noteContext";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const a = useContext(noteContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const validate = (e) => {
    e.preventDefault();
    User.filter(
      (userdata) => userdata.email === email && userdata.password === password
    ).map((user) => {
      setStatus(true);
      console.log(user);
      a.update();
      navigate("/");
    });
  };

  return (
    <div>
      <form onSubmit={validate} method="post">
        EMAIL :
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          className="border border-black"
        />
        <br />
        <br />
        PASSWORD :
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="border border-black"
        />
        <br />
        <input
          type="submit"
          value="SIGNIN"
          className="cursor-pointer border border-black"
        />
      </form>
    </div>
  );
};

export default Signin;
