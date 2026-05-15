import React from 'react';

export interface NorthWestIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NorthWestIcon = ({ size, ...props }: NorthWestIconProps) => {
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
        d="M4.6875 15.1042H6.77083V8.23958L18.8438 20.3125L20.3125 18.8438L8.23958 6.77083H15.1042V4.6875H4.6875V15.1042Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NorthWestIcon;
