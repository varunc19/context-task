import { useNavigate } from "react-router-dom";
function Update() {
  const navigate = useNavigate()
  const gotoLogin = () => {navigate('/login')}
  const goToAddItem =() => {navigate('/add-item')}
  return (
    <>
      <button onClick={gotoLogin} >Login</button>
      <button onClick={goToAddItem} >Add Item</button>
      <h1>Update Profile Here</h1>
    </>
  );
}

export default Update;
