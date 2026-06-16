import React from 'react';

export interface NightlifeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NightlifeIcon = ({ size, ...props }: NightlifeIconProps) => {
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
      
<path d="M1.5625 4.6875H16.1458L9.89583 14.0625V18.2292H11.9792V20.3125H5.72917V18.2292H7.8125V14.0625L1.5625 4.6875ZM11.0417 8.85417L12.5 6.77083H5.19792L6.65625 8.85417H11.0417ZM18.2292 4.6875H23.4375V7.8125H20.3125V17.1875C20.3125 18.9167 18.9167 20.3125 17.1875 20.3125C15.4583 20.3125 14.0625 18.9167 14.0625 17.1875C14.0625 15.4583 15.4583 14.0625 17.1875 14.0625C17.5521 14.0625 17.9062 14.125 18.2292 14.2396V4.6875Z" fill="currentColor"/>
    </svg>
  );
};

export default NightlifeIcon;
