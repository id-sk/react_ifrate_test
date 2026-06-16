import React from 'react';

export interface HomeMiniIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HomeMiniIcon = ({ size, ...props }: HomeMiniIconProps) => {
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
      
<path d="M12.5 5.20825C4.36462 5.20825 2.08337 9.87492 2.08337 12.4999C2.08337 16.5208 5.34379 19.7916 9.36462 19.7916H15.6355C18.4375 19.7916 22.9167 17.6249 22.9167 12.4999C22.9167 12.4999 22.9167 5.20825 12.5 5.20825ZM12.5 7.29159C20.4584 7.29159 20.823 11.9895 20.8334 12.4999H4.16671C4.16671 12.2916 4.26046 7.29159 12.5 7.29159ZM15.4792 17.7083H9.52087C7.33337 17.7083 5.43754 16.4166 4.61462 14.5833H20.3959C19.5625 16.4166 17.6667 17.7083 15.4792 17.7083Z" fill="currentColor"/>
    </svg>
  );
};

export default HomeMiniIcon;
