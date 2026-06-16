import React from 'react';

export interface ShortcutIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ShortcutIcon = ({ size, ...props }: ShortcutIconProps) => {
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
      
<path d="M21.875 11.4583L15.625 5.20825V10.4166H8.33333C5.45833 10.4166 3.125 12.7499 3.125 15.6249V19.7916H5.20833V15.6249C5.20833 13.9062 6.61458 12.4999 8.33333 12.4999H15.625V17.7083L21.875 11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default ShortcutIcon;
