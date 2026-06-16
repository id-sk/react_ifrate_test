import React from 'react';

export interface DragHandleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DragHandleIcon = ({ size, ...props }: DragHandleIconProps) => {
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
      
<path d="M20.8334 9.375H4.16675V11.4583H20.8334V9.375ZM4.16675 15.625H20.8334V13.5417H4.16675V15.625Z" fill="currentColor"/>
    </svg>
  );
};

export default DragHandleIcon;
