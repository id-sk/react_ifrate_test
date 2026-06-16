import React from 'react';

export interface MedicationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MedicationIcon = ({ size, ...props }: MedicationIconProps) => {
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
      
<path d="M18.7499 3.125H6.24992V5.20833H18.7499V3.125Z" fill="currentColor"/>
<path d="M17.7083 6.25H7.29159C6.14575 6.25 5.20825 7.1875 5.20825 8.33333V19.7917C5.20825 20.9375 6.14575 21.875 7.29159 21.875H17.7083C18.8541 21.875 19.7916 20.9375 19.7916 19.7917V8.33333C19.7916 7.1875 18.8541 6.25 17.7083 6.25ZM16.6666 15.625H14.0624V18.2292H10.9374V15.625H8.33325V12.5H10.9374V9.89583H14.0624V12.5H16.6666V15.625Z" fill="currentColor"/>
    </svg>
  );
};

export default MedicationIcon;
