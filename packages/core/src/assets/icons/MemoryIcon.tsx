import React from 'react';

export interface MemoryIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MemoryIcon = ({ size, ...props }: MemoryIconProps) => {
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
      
<path d="M15.625 9.375H9.375V15.625H15.625V9.375ZM13.5417 13.5417H11.4583V11.4583H13.5417V13.5417ZM21.875 11.4583V9.375H19.7917V7.29167C19.7917 6.14583 18.8542 5.20833 17.7083 5.20833H15.625V3.125H13.5417V5.20833H11.4583V3.125H9.375V5.20833H7.29167C6.14583 5.20833 5.20833 6.14583 5.20833 7.29167V9.375H3.125V11.4583H5.20833V13.5417H3.125V15.625H5.20833V17.7083C5.20833 18.8542 6.14583 19.7917 7.29167 19.7917H9.375V21.875H11.4583V19.7917H13.5417V21.875H15.625V19.7917H17.7083C18.8542 19.7917 19.7917 18.8542 19.7917 17.7083V15.625H21.875V13.5417H19.7917V11.4583H21.875ZM17.7083 17.7083H7.29167V7.29167H17.7083V17.7083Z" fill="currentColor"/>
    </svg>
  );
};

export default MemoryIcon;
