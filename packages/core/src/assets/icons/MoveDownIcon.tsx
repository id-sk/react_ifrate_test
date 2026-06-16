import React from 'react';

export interface MoveDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MoveDownIcon = ({ size, ...props }: MoveDownIconProps) => {
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
      
<path d="M3.64583 10.9374C3.64583 13.4895 5.47917 15.5937 7.89583 16.052L6.34375 14.4999L7.8125 13.0208L11.9792 17.1978L7.8125 21.3541L6.34375 19.8853L7.98958 18.2395V18.177C4.375 17.7499 1.5625 14.6666 1.5625 10.9374C1.5625 6.90617 4.82292 3.64575 8.85417 3.64575H11.9792V5.72909H8.85417C5.97917 5.72909 3.64583 8.06242 3.64583 10.9374Z" fill="currentColor"/>
<path d="M23.4375 10.9374V3.64575H14.0625V10.9374H23.4375ZM21.3542 8.85409H16.1458V5.72909H21.3542V8.85409Z" fill="currentColor"/>
<path d="M23.4375 13.0208H14.0625V20.3124H23.4375V13.0208Z" fill="currentColor"/>
    </svg>
  );
};

export default MoveDownIcon;
