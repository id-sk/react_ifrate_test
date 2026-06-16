import React from 'react';

export interface LtePlusMobiledataIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LtePlusMobiledataIcon = ({ size, ...props }: LtePlusMobiledataIconProps) => {
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
      
<path d="M2.60409 14.5833H5.72909V16.6666H0.520752V8.33325H2.60409V14.5833ZM4.68742 10.4166H6.77075V16.6666H8.85409V10.4166H10.9374V8.33325H4.68742V10.4166ZM11.9791 16.6666H17.1874V14.5833H14.0624V13.5416H17.1874V11.4583H14.0624V10.4166H17.1874V8.33325H11.9791V16.6666ZM24.4791 11.4583H22.3958V9.37492H20.3124V11.4583H18.2291V13.5416H20.3124V15.6249H22.3958V13.5416H24.4791V11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default LtePlusMobiledataIcon;
