import React from 'react';

export interface LowPriorityIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LowPriorityIcon = ({ size, ...props }: LowPriorityIconProps) => {
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
        d="M14.5833 4.6875H22.9166V6.77083H14.5833V4.6875ZM14.5833 10.4167H22.9166V12.5H14.5833V10.4167ZM14.5833 16.1458H22.9166V18.2292H14.5833V16.1458ZM2.08325 11.4583C2.08325 15.1875 5.12492 18.2292 8.85409 18.2292H9.37492V20.3125L12.4999 17.1875L9.37492 14.0625V16.1458H8.85409C6.27075 16.1458 4.16659 14.0417 4.16659 11.4583C4.16659 8.875 6.27075 6.77083 8.85409 6.77083H12.4999V4.6875H8.85409C5.12492 4.6875 2.08325 7.72917 2.08325 11.4583Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LowPriorityIcon;
