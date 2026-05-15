import React from 'react';

export interface ViewQuiltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ViewQuiltIcon = ({ size, ...props }: ViewQuiltIconProps) => {
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
        d="M21.875 5.20837V11.9792H9.71875V5.20837H21.875ZM15.2812 19.7917V13.0209H9.71875V19.7917H15.2812ZM16.3229 13.0209V19.7917H21.875V13.0209H16.3229ZM8.67708 19.7917V5.20837H3.125V19.7917H8.67708Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ViewQuiltIcon;
