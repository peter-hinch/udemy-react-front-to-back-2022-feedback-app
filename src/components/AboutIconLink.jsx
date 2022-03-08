import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to='/about'>
      {/* The Link to attribute can also be passed an object. This allows
      passing in parameters such as search query and hash. */}
      {/* <Link
        to={{
          pathname: '/about',
          search: '?sort=name'
          hash: '#hello'
        }}
      > */}
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
