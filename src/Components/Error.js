import './Error.css'
import { useSelector } from "react-redux"
import Alert from 'react-bootstrap/Alert';

const Error = () => {
    const error = useSelector(state => state.ErrorReducer);

    return (
      <div className="error-container">
        {error.map((el) => (
          <Alert key={el.id} variant="danger">
            {el.msg}
          </Alert>
        ))}
      </div>
    );
}

export default Error;


