import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const ZigSVG = props => (
  <Svg
    width={13}
    height={23}
    viewBox="0 0 13 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5.28567 21.4232V14.295H0.935801C0.330745 14.295 -0.0780767 13.6063 0.216275 13.0381L6.23413 0.692773C6.61025 -0.116472 7.7713 0.176234 7.7713 1.08879V8.30312H11.9249C12.53 8.30312 12.9225 8.97462 12.6608 9.54281L6.83919 21.802C6.44672 22.6285 5.28567 22.3358 5.28567 21.4232Z"
      fill="url(#paint0_linear_1_1028)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_1028"
        x1={1.69667}
        y1={0.219742}
        x2={18.3244}
        y2={12.9024}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFBF1A" />
        <Stop offset={1} stopColor="#FF4080" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ZigSVG;
