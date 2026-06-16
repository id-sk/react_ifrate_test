import React from 'react';

export interface LabelImportantIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LabelImportantIcon = ({ size, ...props }: LabelImportantIconProps) => {
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
      
<path d="M3.64575 19.7812L15.1041 19.7916C15.802 19.7916 16.427 19.4479 16.802 18.9166L21.3541 12.5L16.802 6.08331C16.427 5.55206 15.802 5.20831 15.1041 5.20831L3.64575 5.21873L8.68742 12.5L3.64575 19.7812Z" fill="currentColor"/>
    </svg>
  );
};

export default LabelImportantIcon;
