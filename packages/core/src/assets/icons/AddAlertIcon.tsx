import React from 'react';

export interface AddAlertIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddAlertIcon = ({ size, ...props }: AddAlertIconProps) => {
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
      
<path d="M10.4271 21.3646C10.4271 22.5104 11.3542 23.4375 12.5 23.4375C13.6458 23.4375 14.5729 22.5104 14.5729 21.3646H10.4271ZM19.6667 17V10.9375C19.6667 7.55208 17.3229 4.71875 14.1562 3.96875V3.21875C14.1562 2.30208 13.4167 1.5625 12.5 1.5625C11.5833 1.5625 10.8437 2.30208 10.8437 3.21875V3.96875C7.67708 4.71875 5.33333 7.55208 5.33333 10.9375V17L3.125 19.2083V20.3125H21.875V19.2083L19.6667 17ZM16.6667 13.0312H13.5417V16.1562H11.4583V13.0312H8.33333V10.9375H11.4583V7.8125H13.5417V10.9375H16.6667V13.0312Z" fill="currentColor"/>
    </svg>
  );
};

export default AddAlertIcon;
