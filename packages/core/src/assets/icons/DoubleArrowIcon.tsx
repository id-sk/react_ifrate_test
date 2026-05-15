import React from 'react';

export interface DoubleArrowIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoubleArrowIcon = ({ size, ...props }: DoubleArrowIconProps) => {
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
        d="M15.8854 5.2085H11.1979L16.4062 12.5002L11.1979 19.7918H15.8854L21.0938 12.5002L15.8854 5.2085Z"
        fill="currentColor"
      />
      <path
        d="M8.59375 5.2085H3.90625L9.11458 12.5002L3.90625 19.7918H8.59375L13.8021 12.5002L8.59375 5.2085Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DoubleArrowIcon;
