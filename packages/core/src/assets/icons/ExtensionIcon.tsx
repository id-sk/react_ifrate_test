import React from 'react';

export interface ExtensionIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ExtensionIcon = ({ size, ...props }: ExtensionIconProps) => {
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
        d="M20.8333 11.9792H19.2708V7.8125C19.2708 6.66667 18.3333 5.72917 17.1875 5.72917H13.0208V4.16667C13.0208 2.72917 11.8542 1.5625 10.4167 1.5625C8.97917 1.5625 7.8125 2.72917 7.8125 4.16667V5.72917H3.64583C2.5 5.72917 1.57292 6.66667 1.57292 7.8125V11.7708H3.125C4.67708 11.7708 5.9375 13.0312 5.9375 14.5833C5.9375 16.1354 4.67708 17.3958 3.125 17.3958H1.5625V21.3542C1.5625 22.5 2.5 23.4375 3.64583 23.4375H7.60417V21.875C7.60417 20.3229 8.86458 19.0625 10.4167 19.0625C11.9688 19.0625 13.2292 20.3229 13.2292 21.875V23.4375H17.1875C18.3333 23.4375 19.2708 22.5 19.2708 21.3542V17.1875H20.8333C22.2708 17.1875 23.4375 16.0208 23.4375 14.5833C23.4375 13.1458 22.2708 11.9792 20.8333 11.9792Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ExtensionIcon;
