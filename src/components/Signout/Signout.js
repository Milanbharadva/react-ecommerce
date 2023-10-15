import { useContext } from "react";
import noteContext from "../../Context/noteContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Signout = () => {
  const a = useContext(noteContext);
  const navigate=useNavigate();
  useEffect(()=>{
      a.update();
      navigate("/")
  },[])
  return <>{
    
  }</>;
};

export default Signout;
