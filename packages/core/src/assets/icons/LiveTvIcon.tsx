import React from 'react';

export interface LiveTvIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LiveTvIcon = ({ size, ...props }: LiveTvIconProps) => {
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
        d="M21.8751 6.25016H13.9688L17.3959 2.82308L16.6667 2.0835L12.5001 6.25016L8.33341 2.0835L7.59383 2.82308L11.0313 6.25016H3.12508C1.97925 6.25016 1.04175 7.17725 1.04175 8.3335V20.8335C1.04175 21.9793 1.97925 22.9168 3.12508 22.9168H21.8751C23.0209 22.9168 23.9584 21.9793 23.9584 20.8335V8.3335C23.9584 7.17725 23.0209 6.25016 21.8751 6.25016ZM21.8751 20.8335H3.12508V8.3335H21.8751V20.8335ZM9.37508 10.4168V18.7502L16.6667 14.5835L9.37508 10.4168Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LiveTvIcon;
