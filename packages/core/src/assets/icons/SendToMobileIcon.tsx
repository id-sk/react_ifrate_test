import React from 'react';

export interface SendToMobileIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SendToMobileIcon = ({ size, ...props }: SendToMobileIconProps) => {
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
      
<path d="M16.1458 17.7084H18.2291V21.8751C18.2291 23.0209 17.2916 23.9584 16.1458 23.9584H5.72909C4.58325 23.9584 3.64575 23.0209 3.64575 21.8751V3.12508C3.64575 1.97925 4.58325 1.05216 5.72909 1.05216L16.1458 1.04175C17.2916 1.04175 18.2291 1.97925 18.2291 3.12508V7.29175H16.1458V6.25008H5.72909V18.7501H16.1458V17.7084ZM21.3541 12.5001L17.1874 8.33341V11.4584H11.9791V13.5417H17.1874V16.6667L21.3541 12.5001Z" fill="currentColor"/>
    </svg>
  );
};

export default SendToMobileIcon;
