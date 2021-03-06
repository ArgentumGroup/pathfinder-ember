import ActiveModelAdapter from 'active-model-adapter';
import config from '../config/environment';

export default ActiveModelAdapter.extend({
  authorizer: 'authorizer:application',
  host: config.apiHost
});
