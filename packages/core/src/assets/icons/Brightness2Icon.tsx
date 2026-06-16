import React from 'react';

export interface Brightness2IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Brightness2Icon = ({ size, ...props }: Brightness2IconProps) => {
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
      
<path d="M9.89583 2.0835C8 2.0835 6.21875 2.60433 4.6875 3.48975C7.80208 5.29183 9.89583 8.646 9.89583 12.5002C9.89583 16.3543 7.80208 19.7085 4.6875 21.5106C6.21875 22.396 8 22.9168 9.89583 22.9168C15.6458 22.9168 20.3125 18.2502 20.3125 12.5002C20.3125 6.75016 15.6458 2.0835 9.89583 2.0835Z" fill="currentColor"/>
    </svg>
  );
};

export default Brightness2Icon;
