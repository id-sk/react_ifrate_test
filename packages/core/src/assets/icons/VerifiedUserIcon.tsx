import React from 'react';

export interface VerifiedUserIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerifiedUserIcon = ({ size, ...props }: VerifiedUserIconProps) => {
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
      
<path d="M12.5 1.04163L3.125 5.20829V11.4583C3.125 17.2395 7.125 22.6458 12.5 23.9583C17.875 22.6458 21.875 17.2395 21.875 11.4583V5.20829L12.5 1.04163ZM10.4167 17.7083L6.25 13.5416L7.71875 12.0729L10.4167 14.7604L17.2812 7.89579L18.75 9.37496L10.4167 17.7083Z" fill="currentColor"/>
    </svg>
  );
};

export default VerifiedUserIcon;
