import React from 'react';

export interface ScienceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ScienceIcon = ({ size, ...props }: ScienceIconProps) => {
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
      
<path d="M20.625 19.1665L14.5833 11.1144V6.77067L15.9896 5.01025C16.2604 4.6665 16.0208 4.1665 15.5833 4.1665H9.41665C8.97915 4.1665 8.73956 4.6665 9.0104 5.01025L10.4166 6.77067V11.1144L4.37498 19.1665C3.86456 19.854 4.35415 20.8332 5.20831 20.8332H19.7916C20.6458 20.8332 21.1354 19.854 20.625 19.1665Z" fill="currentColor"/>
    </svg>
  );
};

export default ScienceIcon;
