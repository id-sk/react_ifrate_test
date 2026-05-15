import React from 'react';

export interface NetworkLockedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NetworkLockedIcon = ({ size, ...props }: NetworkLockedIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.3126 10.9375C20.4897 10.9375 20.6563 10.9688 20.8334 10.9896V1.5625L1.04175 21.3542H14.5834V18.2292C14.5834 17.3021 14.9897 16.4792 15.6251 15.9062V15.625C15.6251 13.0417 17.7292 10.9375 20.3126 10.9375ZM22.9167 17.1875V15.625C22.9167 14.1875 21.7501 13.0208 20.3126 13.0208C18.8751 13.0208 17.7084 14.1875 17.7084 15.625V17.1875C17.1355 17.1875 16.6667 17.6562 16.6667 18.2292V22.3958C16.6667 22.9688 17.1355 23.4375 17.7084 23.4375H22.9167C23.4897 23.4375 23.9584 22.9688 23.9584 22.3958V18.2292C23.9584 17.6562 23.4897 17.1875 22.9167 17.1875ZM21.8751 17.1875H18.7501V15.625C18.7501 14.7604 19.448 14.0625 20.3126 14.0625C21.1772 14.0625 21.8751 14.7604 21.8751 15.625V17.1875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NetworkLockedIcon;
