import React from 'react';

export interface NoBackpackIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NoBackpackIcon = ({ size, ...props }: NoBackpackIconProps) => {
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
      
<path d="M22.8125 21.7552L3.66667 2.60937L2.1875 4.07812L5.0625 6.95312C4.96875 7.29688 4.90625 7.64062 4.90625 8.01562V20.5156C4.90625 21.6615 5.84375 22.599 6.98958 22.599H19.4896C19.8438 22.599 20.1667 22.5052 20.4583 22.349L21.3438 23.2344L22.8125 21.7552ZM6.98958 14.2656V12.1823H10.2917L12.375 14.2656H6.98958ZM16.1875 12.1823L8.01042 4.00521C8.02083 4.00521 8.02083 3.99479 8.03125 3.99479V1.76562H11.1562V3.84896H15.3229V1.76562H18.4479V3.99479C20.2396 4.46354 21.5729 6.07812 21.5729 8.01562V17.5677L19.4896 15.4844V12.1823H16.1875Z" fill="currentColor"/>
    </svg>
  );
};

export default NoBackpackIcon;
