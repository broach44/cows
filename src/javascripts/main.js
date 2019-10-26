import cowList from './components/cowList/cowList';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  cowList.buildCows();
};

init();
