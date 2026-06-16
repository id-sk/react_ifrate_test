import React from 'react';

export interface VolumeOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VolumeOffIcon = ({ size, ...props }: VolumeOffIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M17.1875 12.5C17.1875 10.6562 16.125 9.07292 14.5833 8.30208V10.6042L17.1354 13.1562C17.1667 12.9479 17.1875 12.7292 17.1875 12.5ZM19.7917 12.5C19.7917 13.4792 19.5833 14.3958 19.2292 15.25L20.8021 16.8229C21.4896 15.5312 21.875 14.0625 21.875 12.5C21.875 8.04167 18.7604 4.3125 14.5833 3.36458V5.51042C17.5938 6.40625 19.7917 9.19792 19.7917 12.5ZM4.44792 3.125L3.125 4.44792L8.05208 9.375H3.125V15.625H7.29167L12.5 20.8333V13.8229L16.9271 18.25C16.2292 18.7917 15.4479 19.2188 14.5833 19.4792V21.625C16.0208 21.3021 17.3229 20.6354 18.4271 19.7396L20.5521 21.875L21.875 20.5521L4.44792 3.125ZM12.5 4.16667L10.3229 6.34375L12.5 8.52083V4.16667Z" fill="currentColor"/>
    </svg>
  );
};

export default VolumeOffIcon;
