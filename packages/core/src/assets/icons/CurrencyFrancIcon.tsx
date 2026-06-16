import React from 'react';

export interface CurrencyFrancIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CurrencyFrancIcon = ({ size, ...props }: CurrencyFrancIconProps) => {
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
      
<path d="M19.2709 5.20833V3.125H7.81258V16.6667H5.72925V18.75H7.81258V21.875H9.89592V18.75H14.0626V16.6667H9.89592V13.5417H18.2292V11.4583H9.89592V5.20833H19.2709Z" fill="currentColor"/>
    </svg>
  );
};

export default CurrencyFrancIcon;
