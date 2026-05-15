import React from 'react';

export interface LocationOnIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocationOnIcon = ({ size, ...props }: LocationOnIconProps) => {
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
        d="M12.4999 2.08325C8.46867 2.08325 5.20825 5.34367 5.20825 9.37492C5.20825 14.8437 12.4999 22.9166 12.4999 22.9166C12.4999 22.9166 19.7916 14.8437 19.7916 9.37492C19.7916 5.34367 16.5312 2.08325 12.4999 2.08325ZM12.4999 11.9791C11.0624 11.9791 9.89575 10.8124 9.89575 9.37492C9.89575 7.93742 11.0624 6.77075 12.4999 6.77075C13.9374 6.77075 15.1041 7.93742 15.1041 9.37492C15.1041 10.8124 13.9374 11.9791 12.4999 11.9791Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LocationOnIcon;
