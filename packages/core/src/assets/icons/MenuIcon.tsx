import React from 'react';

export interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MenuIcon = ({ size, ...props }: MenuIconProps) => {
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
        d="M3.125 18.75H21.875V16.6667H3.125V18.75ZM3.125 13.5417H21.875V11.4583H3.125V13.5417ZM3.125 6.25V8.33333H21.875V6.25H3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MenuIcon;
