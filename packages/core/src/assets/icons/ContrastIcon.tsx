import React from 'react';

export interface ContrastIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ContrastIcon = ({ size, ...props }: ContrastIconProps) => {
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
      
<path d="M12.4999 22.9168C18.2499 22.9168 22.9166 18.2502 22.9166 12.5002C22.9166 6.75016 18.2499 2.0835 12.4999 2.0835C6.74992 2.0835 2.08325 6.75016 2.08325 12.5002C2.08325 18.2502 6.74992 22.9168 12.4999 22.9168ZM13.5416 4.23975C17.6458 4.75016 20.8333 8.25016 20.8333 12.5002C20.8333 16.7502 17.6562 20.2502 13.5416 20.7606V4.23975Z" fill="currentColor"/>
    </svg>
  );
};

export default ContrastIcon;
