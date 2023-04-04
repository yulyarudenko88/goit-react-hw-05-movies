import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => (
  <LoaderWrapper><RotatingLines
  strokeColor="#307848"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/></LoaderWrapper>
);

export default Loader;