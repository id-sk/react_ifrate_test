import React from 'react';

export interface RiceBowlIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RiceBowlIcon = ({ size, ...props }: RiceBowlIconProps) => {
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
      
<path d="M22.9166 12.5002C22.9166 6.75016 18.2499 2.0835 12.4999 2.0835C6.74992 2.0835 2.08325 6.75016 2.08325 12.5002C2.08325 16.3439 4.65617 19.646 8.33325 21.0939V22.9168H16.6666V21.0939C20.3437 19.646 22.9166 16.3439 22.9166 12.5002ZM20.8333 12.5002H16.6666V5.29183C19.1562 6.73975 20.8333 9.42725 20.8333 12.5002ZM14.5833 4.43766V12.5002H10.4166V4.43766C11.0833 4.271 11.7812 4.16683 12.4999 4.16683C13.2187 4.16683 13.9166 4.271 14.5833 4.43766ZM4.16659 12.5002C4.16659 9.42725 5.84367 6.73975 8.33325 5.29183V12.5002H4.16659Z" fill="currentColor"/>
    </svg>
  );
};

export default RiceBowlIcon;
