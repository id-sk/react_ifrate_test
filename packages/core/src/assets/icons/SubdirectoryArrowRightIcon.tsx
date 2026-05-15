import React from 'react';

export interface SubdirectoryArrowRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SubdirectoryArrowRightIcon = ({ size, ...props }: SubdirectoryArrowRightIconProps) => {
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
        d="M20.3125 15.1043L14.0625 21.3543L12.5833 19.8752L16.3229 16.146H4.6875V3.646H6.77083V14.0627H16.3229L12.5833 10.3335L14.0625 8.85433L20.3125 15.1043Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SubdirectoryArrowRightIcon;
