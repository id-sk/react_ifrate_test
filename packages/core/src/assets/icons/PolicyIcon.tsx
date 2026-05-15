import React from 'react';

export interface PolicyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PolicyIcon = ({ size, ...props }: PolicyIconProps) => {
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
        d="M21.875 5.20841L12.5 1.04175L3.125 5.20841V11.4584C3.125 17.2397 7.125 22.6459 12.5 23.9584C14.8958 23.3751 17.0104 21.9792 18.625 20.0938L15.375 16.8438C13.3542 18.1876 10.6042 17.9584 8.82292 16.1772C6.79167 14.1459 6.79167 10.8438 8.82292 8.81258C10.8542 6.78133 14.1562 6.78133 16.1875 8.81258C17.9687 10.5938 18.1875 13.3438 16.8542 15.3647L19.875 18.3855C21.1354 16.3438 21.875 13.9376 21.875 11.4584V5.20841Z"
        fill="currentColor"
      />
      <path
        d="M12.5 15.6251C14.2259 15.6251 15.625 14.226 15.625 12.5001C15.625 10.7742 14.2259 9.37508 12.5 9.37508C10.7741 9.37508 9.375 10.7742 9.375 12.5001C9.375 14.226 10.7741 15.6251 12.5 15.6251Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PolicyIcon;
