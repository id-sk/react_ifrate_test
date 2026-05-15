import React from 'react';

export interface UnfoldMoreIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UnfoldMoreIcon = ({ size, ...props }: UnfoldMoreIconProps) => {
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
        d="M12.5 6.07292L15.8021 9.375L17.2708 7.90625L12.5 3.125L7.71875 7.90625L9.19792 9.375L12.5 6.07292ZM12.5 18.9271L9.19792 15.625L7.72917 17.0937L12.5 21.875L17.2812 17.0937L15.8021 15.625L12.5 18.9271Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UnfoldMoreIcon;
