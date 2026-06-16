import React from 'react';

export interface FlashlightOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FlashlightOffIcon = ({ size, ...props }: FlashlightOffIconProps) => {
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
      
<path d="M19.4896 4.89062V1.76562H6.98958V2.98438L8.89583 4.89062H19.4896Z" fill="currentColor"/>
<path d="M17.4063 11.1406L19.4896 8.01562V6.97396H10.9792L17.4063 13.401V11.1406Z" fill="currentColor"/>
<path d="M3.66667 2.60937L2.1875 4.07812L9.07292 10.9635V22.599H17.4063V19.2969L21.3438 23.2344L22.8125 21.7656L3.66667 2.60937Z" fill="currentColor"/>
    </svg>
  );
};

export default FlashlightOffIcon;
