import React from 'react';

export interface MapsUgcIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MapsUgcIcon = ({ size, ...props }: MapsUgcIconProps) => {
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
      
<path fillRule="evenodd" clipRule="evenodd" d="M13.0208 1.5625C7.27083 1.5625 2.60417 6.22917 2.60417 11.9792C2.60417 13.5833 2.97917 15.0833 3.61458 16.4479L1.5625 23.4375L8.55208 21.3854C9.91667 22.0208 11.4167 22.3958 13.0208 22.3958C18.7708 22.3958 23.4375 17.7292 23.4375 11.9792C23.4375 6.22917 18.7708 1.5625 13.0208 1.5625ZM17.1875 13.0208H14.0625V16.1458H11.9792V13.0208H8.85417V10.9375H11.9792V7.8125H14.0625V10.9375H17.1875V13.0208Z" fill="currentColor"/>
    </svg>
  );
};

export default MapsUgcIcon;
