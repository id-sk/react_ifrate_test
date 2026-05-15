import React from 'react';

export interface HardwareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HardwareIcon = ({ size, ...props }: HardwareIconProps) => {
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
        d="M18.7501 3.125L15.6251 6.25V3.125H9.37508C6.50008 3.125 4.16675 5.45833 4.16675 8.33333H9.37508V11.4583H15.6251V8.33333L18.7501 11.4583H20.8334V3.125H18.7501Z"
        fill="currentColor"
      />
      <path
        d="M9.37508 13.5417V20.8333C9.37508 21.4062 9.84383 21.875 10.4167 21.875H14.5834C15.1563 21.875 15.6251 21.4062 15.6251 20.8333V13.5417H9.37508Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HardwareIcon;
