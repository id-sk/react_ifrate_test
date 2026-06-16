import React from 'react';

export interface StraightenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StraightenIcon = ({ size, ...props }: StraightenIconProps) => {
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
      
<path d="M21.8751 6.25H3.12508C1.97925 6.25 1.04175 7.1875 1.04175 8.33333V16.6667C1.04175 17.8125 1.97925 18.75 3.12508 18.75H21.8751C23.0209 18.75 23.9584 17.8125 23.9584 16.6667V8.33333C23.9584 7.1875 23.0209 6.25 21.8751 6.25ZM21.8751 16.6667H3.12508V8.33333H5.20841V12.5H7.29175V8.33333H9.37508V12.5H11.4584V8.33333H13.5417V12.5H15.6251V8.33333H17.7084V12.5H19.7917V8.33333H21.8751V16.6667Z" fill="currentColor"/>
    </svg>
  );
};

export default StraightenIcon;
