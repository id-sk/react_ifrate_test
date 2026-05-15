import React from 'react';

export interface NorthEastIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NorthEastIcon = ({ size, ...props }: NorthEastIconProps) => {
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
        d="M9.89583 4.6875V6.77083H16.7604L4.6875 18.8438L6.15625 20.3125L18.2292 8.23958V15.1042H20.3125V4.6875H9.89583Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NorthEastIcon;
