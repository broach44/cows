import smash from '../../helpers/data/smash';

import './cowList.scss';

const buildCows = () => {
  smash.getCompleteCows()
    .then((response) => {
      console.log('cow array from cowList', response);
      // call a domstringBuilder function and pass in response (or cows)
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
