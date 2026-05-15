import React from 'react';

export interface HeadphonesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HeadphonesIcon = ({ size, ...props }: HeadphonesIconProps) => {
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
        d="M12.5 3.125C7.32292 3.125 3.125 7.32292 3.125 12.5V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H9.375V13.5417H5.20833V12.5C5.20833 8.46875 8.46875 5.20833 12.5 5.20833C16.5312 5.20833 19.7917 8.46875 19.7917 12.5V13.5417H15.625V21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V12.5C21.875 7.32292 17.6771 3.125 12.5 3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HeadphonesIcon;
