import React from 'react';

export interface PanToolAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PanToolAltIcon = ({ size, ...props }: PanToolAltIconProps) => {
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
        d="M20.2919 15.4375L19.6357 20.0833C19.4898 21.1146 18.6044 21.875 17.5732 21.875H11.1565C10.6044 21.875 9.81274 21.6562 9.42733 21.2604L4.68774 16.2708L5.55233 15.3958C5.80233 15.1458 6.15649 15.0312 6.51066 15.1042L9.89608 15.875V4.6875C9.89608 3.82292 10.594 3.125 11.4586 3.125C12.3232 3.125 13.0211 3.82292 13.0211 4.6875V10.9375H13.969C14.2919 10.9375 14.6148 11.0104 14.8961 11.1562L19.1565 13.2812C19.9586 13.6875 20.4169 14.5521 20.2919 15.4375Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PanToolAltIcon;
