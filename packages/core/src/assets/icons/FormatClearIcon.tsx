import React from 'react';

export interface FormatClearIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatClearIcon = ({ size, ...props }: FormatClearIconProps) => {
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
        d="M4.44792 4.16675L3.125 5.48966L10.3854 12.7501L7.8125 18.7501H10.9375L12.5729 14.9376L18.4687 20.8334L19.7917 19.5105L4.73958 4.448L4.44792 4.16675ZM7.29167 4.16675V4.35425L10.2292 7.29175H12.7292L11.9792 9.04175L14.1667 11.2292L15.8438 7.29175H21.875V4.16675H7.29167Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FormatClearIcon;
