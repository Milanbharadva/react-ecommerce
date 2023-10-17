import { useState } from "react";
import User from "../../data/User";
const Register = () => {
  let userdata = {};
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function validate(e) {
    e.preventDefault();
    userdata = {
      name: name,
      password: password,
      email: email,
    };
    console.log(userdata);
    User.push(userdata)
    console.log(User)
  }

  return (
    <div>
      <form onSubmit={validate} method="post">
        NAME :{" "}
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border border-black"
        />
        <br />
        <br />
        EMAIL :
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
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
        <br />
        <input type="submit" value="Register" className="border border-black" />
      </form>
    </div>
  );
};

export default Register;
