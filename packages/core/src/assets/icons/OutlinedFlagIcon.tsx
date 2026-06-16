import React from 'react';

export interface OutlinedFlagIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const OutlinedFlagIcon = ({ size, ...props }: OutlinedFlagIconProps) => {
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
      
<path d="M14.0625 5.72909L13.0208 3.64575H4.6875V21.3541H6.77083V14.0624H11.9792L13.0208 16.1458H20.3125V5.72909H14.0625ZM18.2292 14.0624H14.0625L13.0208 11.9791H6.77083V5.72909H11.9792L13.0208 7.81242H18.2292V14.0624Z" fill="currentColor"/>
    </svg>
  );
};

export default OutlinedFlagIcon;
