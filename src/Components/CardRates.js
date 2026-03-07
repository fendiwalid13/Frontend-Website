import Rating from '@mui/material/Rating';
import EditRate from './EditRate';
import { useDispatch , useSelector} from 'react-redux'
import {useState} from 'react'

const CardRates = ({el}) => {
     const user =useSelector(state=>state.UserReducer.user)
       const [showEdit, setShowEdit] = useState(false)
     const dispatch=useDispatch()
  return (
    <div>
      {el.owner?._id === user?._id? (
        <>
          <h1 style={{ cursor: "pointer", color: "blue" }} onClick={() => setShowEdit(true)}>
            {el.owner?.name}
          </h1>

          <Rating value={el.rate} readOnly />
          {showEdit && (
            <EditRate el={el} setShowEdit={setShowEdit} />
          )}
        </>
      ) : (
        <>
          <h1>{el.owner?.name}</h1>
          <Rating value={el.rate} readOnly />
        </>
      )}
    </div>
  )
}

export default CardRates
