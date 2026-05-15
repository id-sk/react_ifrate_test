import React from 'react';

export interface SpatialTrackingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SpatialTrackingIcon = ({ size, ...props }: SpatialTrackingIconProps) => {
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
        d="M9.95833 14.5834C12.2595 14.5834 14.125 12.7179 14.125 10.4167C14.125 8.11552 12.2595 6.25004 9.95833 6.25004C7.65715 6.25004 5.79167 8.11552 5.79167 10.4167C5.79167 12.7179 7.65715 14.5834 9.95833 14.5834Z"
        fill="currentColor"
      />
      <path
        d="M16.6146 17.25C14.8646 16.3542 12.5938 15.625 9.95833 15.625C7.32292 15.625 5.05208 16.3542 3.30208 17.25C2.26042 17.7813 1.625 18.8542 1.625 20.0209V22.9167H18.2917V20.0209C18.2917 18.8542 17.6562 17.7813 16.6146 17.25Z"
        fill="currentColor"
      />
      <path
        d="M20.4271 3.55212L18.9583 2.08337C15.3021 5.73962 15.3021 11.6771 18.9583 15.3438L20.4271 13.875C17.5833 11.0209 17.5833 6.39587 20.4271 3.55212Z"
        fill="currentColor"
      />
      <path
        d="M23.375 6.50004L21.9062 5.03129C19.875 7.06254 19.875 10.3646 21.9062 12.3959L23.375 10.9271C22.1562 9.70837 22.1562 7.71879 23.375 6.50004Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SpatialTrackingIcon;
