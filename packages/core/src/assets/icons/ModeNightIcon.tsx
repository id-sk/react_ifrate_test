import React from 'react';

export interface ModeNightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ModeNightIcon = ({ size, ...props }: ModeNightIconProps) => {
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
        d="M9.89583 2.08325C8 2.08325 6.21875 2.60409 4.6875 3.4895C7.80208 5.29159 9.89583 8.64575 9.89583 12.4999C9.89583 16.3541 7.80208 19.7083 4.6875 21.5103C6.21875 22.3958 8 22.9166 9.89583 22.9166C15.6458 22.9166 20.3125 18.2499 20.3125 12.4999C20.3125 6.74992 15.6458 2.08325 9.89583 2.08325Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ModeNightIcon;
