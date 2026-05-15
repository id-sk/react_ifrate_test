import React from 'react';

export interface SubdirectoryArrowLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SubdirectoryArrowLeftIcon = ({ size, ...props }: SubdirectoryArrowLeftIconProps) => {
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
        d="M10.9375 8.85433L12.4167 10.3335L8.67708 14.0627H18.2292V3.646H20.3125V16.146H8.67708L12.4167 19.8752L10.9375 21.3543L4.6875 15.1043L10.9375 8.85433Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SubdirectoryArrowLeftIcon;
