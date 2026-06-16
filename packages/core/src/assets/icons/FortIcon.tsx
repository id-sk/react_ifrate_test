import React from 'react';

export interface FortIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FortIcon = ({ size, ...props }: FortIconProps) => {
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
      
<path d="M21.8751 3.125V5.20833H19.7917V3.125H17.7084V5.20833H15.6251V3.125H13.5417V7.29167L15.6251 9.375V10.4167H9.37508V9.375L11.4584 7.29167V3.125H9.37508V5.20833H7.29175V3.125H5.20841V5.20833H3.12508V3.125H1.04175V7.29167L3.12508 9.375V15.625L1.04175 17.7083V21.875H10.4167V18.75C10.4167 17.6042 11.3542 16.6667 12.5001 16.6667C13.6459 16.6667 14.5834 17.6042 14.5834 18.75V21.875H23.9584V17.7083L21.8751 15.625V9.375L23.9584 7.29167V3.125H21.8751Z" fill="currentColor"/>
    </svg>
  );
};

export default FortIcon;
