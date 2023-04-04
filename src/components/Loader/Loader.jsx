import { RotatingLines } from 'react-loader-spinner';

const Loader = () => (
  <RotatingLines
  strokeColor="#102818"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
  // wrapperStyle={{
  //   display: 'flex',
  //   justifyContent: 'center',
  //   marginTop: '15px',
  // }}
/>
);

export default Loader;