import React from 'react';

export interface ExpandLessIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ExpandLessIcon = ({ size, ...props }: ExpandLessIconProps) => {
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
        d="M12.5 8.64062L6.25 14.8906L7.71875 16.3594L12.5 11.5885L17.2812 16.3594L18.75 14.8906L12.5 8.64062Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ExpandLessIcon;
