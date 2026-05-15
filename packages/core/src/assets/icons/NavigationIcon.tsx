import React from 'react';

export interface NavigationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NavigationIcon = ({ size, ...props }: NavigationIconProps) => {
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
        d="M12.5 2.604L4.6875 21.6561L5.42708 22.3957L12.5 19.2707L19.5729 22.3957L20.3125 21.6561L12.5 2.604Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NavigationIcon;
