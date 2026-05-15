import React from 'react';

export interface ViewColumnIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ViewColumnIcon = ({ size, ...props }: ViewColumnIconProps) => {
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
        d="M15.2812 5.20837V19.7917H9.71875V5.20837H15.2812ZM16.3229 19.7917H21.875V5.20837H16.3229V19.7917ZM8.67708 19.7917V5.20837H3.125V19.7917H8.67708Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ViewColumnIcon;
