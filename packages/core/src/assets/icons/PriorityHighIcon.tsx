import React from 'react';

export interface PriorityHighIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PriorityHighIcon = ({ size, ...props }: PriorityHighIconProps) => {
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
        d="M12.5001 21.875C13.6507 21.875 14.5834 20.9423 14.5834 19.7917C14.5834 18.6411 13.6507 17.7083 12.5001 17.7083C11.3495 17.7083 10.4167 18.6411 10.4167 19.7917C10.4167 20.9423 11.3495 21.875 12.5001 21.875Z"
        fill="currentColor"
      />
      <path d="M10.4167 3.125H14.5834V15.625H10.4167V3.125Z" fill="currentColor" />
    </svg>
  );
};

export default PriorityHighIcon;
