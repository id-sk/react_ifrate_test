import React from 'react';

export interface TroubleshootIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TroubleshootIcon = ({ size, ...props }: TroubleshootIconProps) => {
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
        d="M23.4375 20.927L18.5521 16.0416C19.6562 14.6354 20.3125 12.8645 20.3125 10.9375C20.3125 6.33329 16.5833 2.60413 11.9792 2.60413C7.72917 2.60413 4.22917 5.78121 3.71875 9.89579H5.82292C6.32292 6.94788 8.88542 4.68746 11.9792 4.68746C15.4271 4.68746 18.2292 7.48954 18.2292 10.9375C18.2292 14.3854 15.4271 17.1875 11.9792 17.1875C9.45833 17.1875 7.29167 15.6875 6.30208 13.5416H4.0625C5.15625 16.8645 8.29167 19.2708 11.9792 19.2708C13.9062 19.2708 15.6771 18.6145 17.0833 17.5104L21.9688 22.3958L23.4375 20.927Z"
        fill="currentColor"
      />
      <path
        d="M9.30208 9.57288L10.5729 15.1041H12.2812L13.5938 11.1666L14.5833 13.5416H16.6667V11.9791H15.625L14.3229 8.85413H12.7188L11.5521 12.3645L10.2604 6.77079H8.54167L7.23958 10.9375H1.5625V12.5H8.38542L9.30208 9.57288Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TroubleshootIcon;
