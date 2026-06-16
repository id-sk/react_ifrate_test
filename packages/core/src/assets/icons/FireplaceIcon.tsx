import React from 'react';

export interface FireplaceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FireplaceIcon = ({ size, ...props }: FireplaceIconProps) => {
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
      
<path d="M2.08325 2.0835V22.9168H22.9166V2.0835H2.08325ZM12.3541 17.6668C13.1458 17.4168 13.8124 16.5835 13.9478 15.9689C14.0833 15.3856 13.8437 14.8752 13.7395 14.3022C13.6562 13.8231 13.6666 13.4168 13.8228 12.9689C14.3853 14.2293 16.0624 14.6772 15.8853 16.2814C15.6874 18.0522 13.6874 18.7606 12.3541 17.6668ZM20.8333 20.8335H18.7499V18.7502H16.6458C17.302 17.8752 17.7083 16.8022 17.7083 15.6252C17.7083 13.6564 16.5728 12.6564 15.7812 12.1147C12.7083 10.0106 13.5416 7.29183 13.5416 7.29183C6.53117 11.0106 7.27075 15.0731 7.29159 15.6252C7.32284 16.6252 7.802 17.7814 8.57284 18.7502H6.24992V20.8335H4.16659V4.16683H20.8333V20.8335Z" fill="currentColor"/>
    </svg>
  );
};

export default FireplaceIcon;
