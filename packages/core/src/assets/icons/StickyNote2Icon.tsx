import React from 'react';

export interface StickyNote2IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StickyNote2Icon = ({ size, ...props }: StickyNote2IconProps) => {
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
      
<path d="M19.7917 3.125H5.19792C4.05208 3.125 3.125 4.0625 3.125 5.20833L3.13542 19.7917C3.13542 20.9375 4.0625 21.875 5.20833 21.875H15.625L21.875 15.625V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM7.29167 8.33333H17.7083V10.4167H7.29167V8.33333ZM12.5 14.5833H7.29167V12.5H12.5V14.5833ZM14.5833 20.3125V14.5833H20.3125L14.5833 20.3125Z" fill="currentColor"/>
    </svg>
  );
};

export default StickyNote2Icon;
