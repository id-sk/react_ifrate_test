import React from 'react';

export interface AirplanemodeInactiveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AirplanemodeInactiveIcon = ({ size, ...props }: AirplanemodeInactiveIconProps) => {
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
        d="M11.2552 7.67188V3.32812C11.2552 2.46354 11.9531 1.76562 12.8177 1.76562C13.6823 1.76562 14.3802 2.46354 14.3802 3.32812V9.05729L23.2344 14.2656V16.349L18.5573 14.974L11.2552 7.67188ZM20.9219 23.2344L22.3906 21.7656L3.24479 2.60937L1.76562 4.07812L8.41146 10.724L2.40104 14.2656V16.349L11.2552 13.7448V19.474L8.65104 21.0365V22.599L12.8177 21.5573L16.9844 22.599V21.0365L14.3802 19.474V16.6927L20.9219 23.2344Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AirplanemodeInactiveIcon;
