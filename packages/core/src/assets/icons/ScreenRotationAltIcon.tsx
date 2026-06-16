import React from 'react';

export interface ScreenRotationAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ScreenRotationAltIcon = ({ size, ...props }: ScreenRotationAltIconProps) => {
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
      
<path d="M4.16659 7.90609L9.37492 2.69775C10.1874 1.88525 11.5103 1.88525 12.3228 2.69775L21.0833 11.4582H18.1353L10.8333 4.1665L5.63534 9.37484H8.33325V11.4582H2.08325V5.20817H4.16659V7.90609ZM20.8333 19.7915H22.9166V13.5415H16.6666V15.6248H19.3645L14.1666 20.8332L6.8645 13.5415H3.91659L12.677 22.3019C13.4895 23.1144 14.8124 23.1144 15.6249 22.3019L20.8333 17.0936V19.7915Z" fill="currentColor"/>
    </svg>
  );
};

export default ScreenRotationAltIcon;
