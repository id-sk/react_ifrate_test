import React from 'react';

export interface GiteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GiteIcon = ({ size, ...props }: GiteIconProps) => {
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
        d="M18.7499 6.77083H9.37492V4.6875H7.29159V6.77083H6.24992L2.08325 10.9375V20.3125H22.9166V10.9375L18.7499 6.77083ZM4.16659 13.0208H14.5833V18.2292H4.16659V13.0208ZM20.8333 18.2292H16.6666V11.8021L18.7499 9.71875L20.8333 11.8021V18.2292Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GiteIcon;
