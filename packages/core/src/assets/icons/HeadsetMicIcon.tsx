import React from 'react';

export interface HeadsetMicIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HeadsetMicIcon = ({ size, ...props }: HeadsetMicIconProps) => {
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
        d="M12.5 1.04175C7.32292 1.04175 3.125 5.23966 3.125 10.4167V17.7084C3.125 19.4376 4.52083 20.8334 6.25 20.8334H9.375V12.5001H5.20833V10.4167C5.20833 6.3855 8.46875 3.12508 12.5 3.12508C16.5312 3.12508 19.7917 6.3855 19.7917 10.4167V12.5001H15.625V20.8334H19.7917V21.8751H12.5V23.9584H18.75C20.4792 23.9584 21.875 22.5626 21.875 20.8334V10.4167C21.875 5.23966 17.6771 1.04175 12.5 1.04175Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HeadsetMicIcon;
