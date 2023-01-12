import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const GoBackButton = () => {
  
  return (
    <Link to='/'>
      <FontAwesomeIcon 
            icon={faArrowLeft}
            size='2x'
            color='white'
            className='arrow__positioned'
       />
    </Link>
  );
}

export default GoBackButton;