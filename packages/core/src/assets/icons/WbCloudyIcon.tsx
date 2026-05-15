import React from 'react';

export interface WbCloudyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WbCloudyIcon = ({ size, ...props }: WbCloudyIconProps) => {
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
        d="M20.1667 10.4582C19.4479 6.86442 16.2917 4.1665 12.5 4.1665C9.48958 4.1665 6.875 5.87484 5.57292 8.37484C2.4375 8.70817 0 11.3644 0 14.5832C0 18.0311 2.80208 20.8332 6.25 20.8332H19.7917C22.6667 20.8332 25 18.4998 25 15.6248C25 12.8748 22.8646 10.6457 20.1667 10.4582Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WbCloudyIcon;
