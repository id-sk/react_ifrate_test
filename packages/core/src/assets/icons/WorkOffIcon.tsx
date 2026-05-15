import React from 'react';

export interface WorkOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WorkOffIcon = ({ size, ...props }: WorkOffIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.4428 22.1302L2.86987 1.55725L1.55737 2.86975L4.36987 5.68225H3.70321C2.54696 5.68225 1.63029 6.60933 1.63029 7.76558L1.61987 19.2239C1.61987 20.3802 2.54696 21.3073 3.70321 21.3073H19.9949L22.1303 23.4427L23.4428 22.1302ZM22.4011 7.76558C22.4532 6.60933 21.5261 5.68225 20.3699 5.73433H16.2032V3.59892C16.2032 2.44267 15.2761 1.51558 14.1199 1.56767H9.95321C8.79696 1.51558 7.86987 2.44267 7.86987 3.59892V3.93225L22.4011 18.5156V7.76558ZM14.1199 5.73433H9.90112V3.59892H14.1199V5.73433Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WorkOffIcon;
