import config from '../config';

const IndexPage = () => (config.get('development') ? 'Hello, world!' : null);

export default IndexPage;
