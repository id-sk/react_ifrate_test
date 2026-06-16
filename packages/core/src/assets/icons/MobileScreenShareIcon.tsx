import React from 'react';

export interface MobileScreenShareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MobileScreenShareIcon = ({ size, ...props }: MobileScreenShareIconProps) => {
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
      
<path d="M17.7032 1.05216L7.28654 1.04175C6.14071 1.04175 5.21362 1.97925 5.21362 3.12508V21.8751C5.21362 23.0209 6.14071 23.9584 7.28654 23.9584H17.7032C18.849 23.9584 19.7865 23.0209 19.7865 21.8751V3.12508C19.7865 1.97925 18.849 1.05216 17.7032 1.05216ZM17.7032 19.7917H7.28654V5.20841H17.7032V19.7917ZM13.3282 13.7709V15.5938L16.6615 12.4792L13.3282 9.37508V11.1459C10.0886 11.5938 8.79696 13.8126 8.32821 16.0417C9.48446 14.4792 11.0157 13.7709 13.3282 13.7709Z" fill="currentColor"/>
    </svg>
  );
};

export default MobileScreenShareIcon;
