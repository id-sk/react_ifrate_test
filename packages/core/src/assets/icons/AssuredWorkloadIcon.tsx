import React from 'react';

export interface AssuredWorkloadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AssuredWorkloadIcon = ({ size, ...props }: AssuredWorkloadIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3230_40377)">
        <path d="M6.25008 9.89581H4.16675V17.1875H6.25008V9.89581Z" fill="currentColor" />
        <path d="M12.5001 9.89581H10.4167V17.1875H12.5001V9.89581Z" fill="currentColor" />
        <path
          d="M21.8751 5.72915L11.4584 0.520813L1.04175 5.72915V7.81248H21.8751V5.72915Z"
          fill="currentColor"
        />
        <path
          d="M1.04175 19.2708V21.3541H13.9584C13.7397 20.6875 13.6251 19.9896 13.5834 19.2708H1.04175Z"
          fill="currentColor"
        />
        <path d="M18.7501 12.25V9.89581H16.6667V13.2916L18.7501 12.25Z" fill="currentColor" />
        <path
          d="M19.7917 14.0625L15.6251 16.1458V18.8021C15.6251 21.4271 17.4063 23.8854 19.7917 24.4791C22.1772 23.8854 23.9584 21.4271 23.9584 18.8021V16.1458L19.7917 14.0625ZM19.0417 21.3541L16.9272 19.2396L18.0313 18.1354L19.0417 19.1458L21.5522 16.6666L22.6563 17.7708L19.0417 21.3541Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3230_40377">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AssuredWorkloadIcon;
