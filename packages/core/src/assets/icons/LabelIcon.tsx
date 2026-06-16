import React from 'react';

export interface LabelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LabelIcon = ({ size, ...props }: LabelIconProps) => {
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
      
<path d="M17.8438 6.08331C17.4688 5.55206 16.8438 5.20831 16.1459 5.20831L4.68758 5.21873C3.54175 5.21873 2.60425 6.14581 2.60425 7.29165V17.7083C2.60425 18.8541 3.54175 19.7812 4.68758 19.7812L16.1459 19.7916C16.8438 19.7916 17.4688 19.4479 17.8438 18.9166L22.3959 12.5L17.8438 6.08331Z" fill="currentColor"/>
    </svg>
  );
};

export default LabelIcon;
