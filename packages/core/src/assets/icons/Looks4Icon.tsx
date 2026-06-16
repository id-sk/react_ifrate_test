import React from 'react';

export interface Looks4IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Looks4Icon = ({ size, ...props }: Looks4IconProps) => {
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
      
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM15.625 17.7083H13.5417V13.5417H9.375V7.29167H11.4583V11.4583H13.5417V7.29167H15.625V17.7083Z" fill="currentColor"/>
    </svg>
  );
};

export default Looks4Icon;
