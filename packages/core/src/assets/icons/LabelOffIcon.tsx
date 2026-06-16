import React from 'react';

export interface LabelOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LabelOffIcon = ({ size, ...props }: LabelOffIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M3.38546 2.99481L21.0938 20.7031L19.7917 22.0052L17.7084 19.9219H5.20837C4.06254 19.9219 3.12504 18.9844 3.12504 17.8386V7.4219C3.12504 6.84898 3.36462 6.32815 3.73962 5.95315L2.08337 4.2969L3.38546 2.99481ZM22.9167 12.6302L18.3646 6.21356C17.9896 5.68231 17.3646 5.33856 16.6667 5.33856H8.33337L19.7917 16.7969L22.9167 12.6302Z" fill="currentColor"/>
    </svg>
  );
};

export default LabelOffIcon;
