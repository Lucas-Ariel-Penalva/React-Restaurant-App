import { Link } from "react-router-dom"

const Profile = ({logOut}) => {
  return (
    <div>
      My Orders page, where all the shopping cart of the account is shown
      <Link to="/menu">Go to the menu</Link>
    <button onClick={logOut}>Log Out</button>

    <button>Delete account</button>
    </div>
  )
}

export default Profile