import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const EvySvg = props => (
  <Svg
    width="30"
    height="30"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G id="Shape" fill="#000000" transform="translate(42.666667, 85.333333)">
        <Path d="M213.333333,1.42108547e-14 C64,1.42108547e-14 7.10542736e-15,170.666667 7.10542736e-15,170.666667 C7.10542736e-15,170.666667 64,341.333333 213.333333,341.333333 C362.666667,341.333333 426.666667,170.666667 426.666667,170.666667 C426.666667,170.666667 362.666667,1.42108547e-14 213.333333,1.42108547e-14 Z M213.333333,298.666667 C119.071573,298.666667 64.7370667,207.3632 46.7136,170.67328 C64.7850667,133.88928 119.114667,42.6666667 213.333333,42.6666667 C307.595093,42.6666667 361.9296,133.970133 379.954347,170.658773 C361.8816,207.444053 307.552,298.666667 213.333333,298.666667 Z M213.333333,96 C172.096427,96 138.666667,129.42976 138.666667,170.666667 C138.666667,211.903573 172.096427,245.333333 213.333333,245.333333 C254.57024,245.333333 288,211.903573 288,170.666667 C288,129.42976 254.57024,96 213.333333,96 Z M213.333333,202.666667 C195.688747,202.666667 181.333333,188.311253 181.333333,170.666667 C181.333333,153.02208 195.688747,138.666667 213.333333,138.666667 C230.97792,138.666667 245.333333,153.02208 245.333333,170.666667 C245.333333,188.311253 230.97792,202.666667 213.333333,202.666667 Z" />
      </G>
    </G>
  </Svg>
);
export default EvySvg;
