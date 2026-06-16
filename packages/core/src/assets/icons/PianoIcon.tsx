import React from 'react';

export interface PianoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PianoIcon = ({ size, ...props }: PianoIconProps) => {
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
      
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM14.5833 15.1042H14.8438V19.7917H10.1562V15.1042H10.4167C10.9896 15.1042 11.4583 14.6354 11.4583 14.0625V5.20833H13.5417V14.0625C13.5417 14.6354 14.0104 15.1042 14.5833 15.1042ZM5.20833 5.20833H7.29167V14.0625C7.29167 14.6354 7.76042 15.1042 8.33333 15.1042H8.59375V19.7917H5.20833V5.20833ZM19.7917 19.7917H16.4062V15.1042H16.6667C17.2396 15.1042 17.7083 14.6354 17.7083 14.0625V5.20833H19.7917V19.7917Z" fill="currentColor"/>
    </svg>
  );
};

export default PianoIcon;
