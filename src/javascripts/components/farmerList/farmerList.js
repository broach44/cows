import farmerData from '../../helpers/data/farmerData';

import './farmerList.scss';

const buildFarmers = () => {
  farmerData.getFarmers()
    .then((response) => {
      console.log('farmer array from farmerList', response);
      // call a domstringBuilder function and pass in response (or farmers)
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildFarmers };
