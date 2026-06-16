import React from 'react';

export interface DiscountIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DiscountIcon = ({ size, ...props }: DiscountIconProps) => {
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
      
<g clipPath="url(#clip0_3235_30040)">
<path d="M13.3204 22.3984L3.12244 12.2005V14.2839C3.12244 14.8359 3.34119 15.3672 3.73702 15.7526L11.8516 23.8672C12.6641 24.6797 13.987 24.6797 14.7995 23.8672L21.2683 17.3984C22.0808 16.5859 22.0808 15.263 21.2683 14.4505L13.3204 22.3984Z" fill="currentColor"/>
<path d="M11.8516 18.6589C12.6641 19.4714 13.987 19.4714 14.7995 18.6589L21.2683 12.1901C22.0808 11.3776 22.0808 10.0547 21.2683 9.24219L13.1537 1.1276C12.7579 0.742187 12.2266 0.523438 11.6745 0.523438H5.20577C4.05994 0.523438 3.12244 1.46094 3.12244 2.60677V9.07552C3.12244 9.6276 3.34119 10.1589 3.73702 10.5443L11.8516 18.6589ZM7.54952 3.64844C8.26827 3.64844 8.8516 4.23177 8.8516 4.95052C8.8516 5.66927 8.26827 6.2526 7.54952 6.2526C6.83077 6.2526 6.24744 5.66927 6.24744 4.95052C6.24744 4.23177 6.83077 3.64844 7.54952 3.64844Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3235_30040">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default DiscountIcon;
