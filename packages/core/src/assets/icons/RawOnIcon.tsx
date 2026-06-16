import React from 'react';

export interface RawOnIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RawOnIcon = ({ size, ...props }: RawOnIconProps) => {
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
      
<path d="M6.52083 9.375H2.875V15.625H4.4375V13.5417H5.58333L6.52083 15.625H8.08333L7.14583 13.4375C7.66667 13.125 8.08333 12.6042 8.08333 11.9792V10.9375C8.08333 10.1042 7.35417 9.375 6.52083 9.375ZM6.52083 11.9792H4.4375V10.9375H6.52083V11.9792Z" fill="currentColor"/>
<path d="M10.4271 9.375L8.86458 15.625H10.4271L10.8229 14.0625H12.6458L13.0313 15.625H14.5938L13.0313 9.375H10.4271ZM11.2083 12.5L11.4688 11.4583H11.9896L12.25 12.5H11.2083Z" fill="currentColor"/>
<path d="M20.5625 9.375L19.7917 12.5L19.0208 9.375H17.4375L16.6667 12.5L15.8958 9.375H14.3333L15.8958 15.625H17.4375L18.2292 12.4583L19.0208 15.625H20.5625L22.125 9.375H20.5625Z" fill="currentColor"/>
    </svg>
  );
};

export default RawOnIcon;
