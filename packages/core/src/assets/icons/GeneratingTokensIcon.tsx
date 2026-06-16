import React from 'react';

export interface GeneratingTokensIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GeneratingTokensIcon = ({ size, ...props }: GeneratingTokensIconProps) => {
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
      
<path d="M9.37508 4.16669C4.77091 4.16669 1.04175 7.89585 1.04175 12.5C1.04175 17.1042 4.77091 20.8334 9.37508 20.8334C13.9792 20.8334 17.7084 17.1042 17.7084 12.5C17.7084 7.89585 13.9792 4.16669 9.37508 4.16669ZM12.5001 10.9375H10.4167V16.1459H8.33341V10.9375H6.25008V9.37502H12.5001V10.9375ZM21.0938 3.90627L23.9584 5.20835L21.0938 6.51044L19.7917 9.37502L18.4897 6.51044L15.6251 5.20835L18.4897 3.90627L19.7917 1.04169L21.0938 3.90627ZM21.0938 18.4896L23.9584 19.7917L21.0938 21.0938L19.7917 23.9584L18.4897 21.0938L15.6251 19.7917L18.4897 18.4896L19.7917 15.625L21.0938 18.4896Z" fill="currentColor"/>
    </svg>
  );
};

export default GeneratingTokensIcon;
