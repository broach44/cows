import cowList from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  cowList.buildCows();
  farmerList.buildFarmers();
};

init();
