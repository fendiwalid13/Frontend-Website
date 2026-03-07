import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../Redux/Actions/UserActions"
import CardUser from "./CardUser"
import "./ListUsers.css"

const ListUsers = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  const users = useSelector(state => state.UserReducer.users)

  return (
    <div className="users-container">

      {users && users.length === 0 ? (
        <div className="no-users">
          <h2>No Users Found</h2>
        </div>
      ) : (
        users && users.map((el) => (
          <CardUser key={el._id} el={el} />
        ))
      )}

    </div>
  )
}

export default ListUsers