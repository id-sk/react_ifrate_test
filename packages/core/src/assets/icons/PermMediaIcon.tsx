import React from 'react';

export interface PermMediaIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PermMediaIcon = ({ size, ...props }: PermMediaIconProps) => {
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
      
<path d="M2.08333 6.25004H0V11.4584H0.0104167L0 20.8334C0 21.9792 0.9375 22.9167 2.08333 22.9167H20.8333V20.8334H2.08333V6.25004ZM22.9167 4.16671H14.5833L12.5 2.08337H6.25C5.10417 2.08337 4.17708 3.02087 4.17708 4.16671L4.16667 16.6667C4.16667 17.8125 5.10417 18.75 6.25 18.75H22.9167C24.0625 18.75 25 17.8125 25 16.6667V6.25004C25 5.10421 24.0625 4.16671 22.9167 4.16671ZM7.29167 15.625L11.9792 9.37504L15.625 14.073L18.2292 10.9375L21.875 15.625H7.29167Z" fill="currentColor"/>
    </svg>
  );
};

export default PermMediaIcon;
