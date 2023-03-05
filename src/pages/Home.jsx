import { Link } from 'react-router-dom';
import Shops from '../components/Shops';

const Home = () => {
  return (
    <div>
      <h1>Select from the list of shops below to se more information!</h1>

      <Shops />
    </div>
  );
};

export default Home;
