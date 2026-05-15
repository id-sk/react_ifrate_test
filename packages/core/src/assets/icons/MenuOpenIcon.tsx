import React from 'react';

export interface MenuOpenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MenuOpenIcon = ({ size, ...props }: MenuOpenIconProps) => {
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
        d="M3.125 18.75H16.6667V16.6667H3.125V18.75ZM3.125 13.5417H13.5417V11.4583H3.125V13.5417ZM3.125 6.25V8.33333H16.6667V6.25H3.125ZM21.875 16.2396L18.1458 12.5L21.875 8.76042L20.4062 7.29167L15.1979 12.5L20.4062 17.7083L21.875 16.2396Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MenuOpenIcon;
