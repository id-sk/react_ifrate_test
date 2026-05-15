import React from 'react';

export interface HourglassBottomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HourglassBottomIcon = ({ size, ...props }: HourglassBottomIconProps) => {
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
        d="M18.75 22.9166L18.7396 16.6666L14.5833 12.4999L18.7396 8.32284L18.75 2.08325H6.25V8.33325L10.4167 12.4999L6.25 16.6562V22.9166H18.75ZM8.33333 7.81242V4.16659H16.6667V7.81242L12.5 11.9791L8.33333 7.81242Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HourglassBottomIcon;
