import React from 'react';

export interface AddCardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddCardIcon = ({ size, ...props }: AddCardIconProps) => {
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
      
<path d="M19.7917 3.125H3.12508C1.96883 3.125 1.05216 4.05208 1.05216 5.20833L1.04175 17.7083C1.04175 18.8646 1.96883 19.7917 3.12508 19.7917H13.5417V17.7083H3.12508V11.4583H21.8751V5.20833C21.8751 4.05208 20.948 3.125 19.7917 3.125ZM19.7917 7.29167H3.12508V5.20833H19.7917V7.29167ZM23.9584 16.6667V18.75H20.8334V21.875H18.7501V18.75H15.6251V16.6667H18.7501V13.5417H20.8334V16.6667H23.9584Z" fill="currentColor"/>
    </svg>
  );
};

export default AddCardIcon;
