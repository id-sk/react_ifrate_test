import React from 'react';

export interface AddToQueueIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddToQueueIcon = ({ size, ...props }: AddToQueueIconProps) => {
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
      
<path d="M21.8751 3.125H3.12508C1.96883 3.125 1.04175 4.05208 1.04175 5.20833V17.7083C1.04175 18.8542 1.96883 19.7917 3.12508 19.7917H8.33341V21.875H16.6667V19.7917H21.8751C23.0209 19.7917 23.948 18.8542 23.948 17.7083L23.9584 5.20833C23.9584 4.05208 23.0209 3.125 21.8751 3.125ZM21.8751 17.7083H3.12508V5.20833H21.8751V17.7083ZM16.6667 10.4167V12.5H13.5417V15.625H11.4584V12.5H8.33341V10.4167H11.4584V7.29167H13.5417V10.4167H16.6667Z" fill="currentColor"/>
    </svg>
  );
};

export default AddToQueueIcon;
