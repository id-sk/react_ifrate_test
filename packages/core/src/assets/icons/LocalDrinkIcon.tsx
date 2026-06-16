import React from 'react';

export interface LocalDrinkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalDrinkIcon = ({ size, ...props }: LocalDrinkIconProps) => {
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
      
<path d="M3.125 2.0835L5.21875 21.0731C5.34375 22.1147 6.21875 22.9168 7.29167 22.9168H17.7083C18.7812 22.9168 19.6562 22.1147 19.7812 21.0731L21.875 2.0835H3.125ZM12.5 19.7918C10.7708 19.7918 9.375 18.396 9.375 16.6668C9.375 14.5835 12.5 11.0418 12.5 11.0418C12.5 11.0418 15.625 14.5835 15.625 16.6668C15.625 18.396 14.2292 19.7918 12.5 19.7918ZM19.0937 8.3335H5.90625L5.44792 4.16683H19.5417L19.0937 8.3335Z" fill="currentColor"/>
    </svg>
  );
};

export default LocalDrinkIcon;
