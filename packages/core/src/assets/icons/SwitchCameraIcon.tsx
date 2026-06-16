import React from 'react';

export interface SwitchCameraIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwitchCameraIcon = ({ size, ...props }: SwitchCameraIconProps) => {
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
      
<path d="M20.8333 5.20833H17.5312L15.6249 3.125H9.37492L7.46867 5.20833H4.16659C3.02075 5.20833 2.08325 6.14583 2.08325 7.29167V19.7917C2.08325 20.9375 3.02075 21.875 4.16659 21.875H20.8333C21.9791 21.875 22.9166 20.9375 22.9166 19.7917V7.29167C22.9166 6.14583 21.9791 5.20833 20.8333 5.20833ZM15.6249 17.1875V14.5833H9.37492V17.1875L5.72909 13.5417L9.37492 9.89583V12.5H15.6249V9.89583L19.2708 13.5417L15.6249 17.1875Z" fill="currentColor"/>
    </svg>
  );
};

export default SwitchCameraIcon;
