import React from 'react';

export interface LineWeightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LineWeightIcon = ({ size, ...props }: LineWeightIconProps) => {
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
        d="M3.125 17.7083H21.875V15.625H3.125V17.7083ZM3.125 20.8333H21.875V19.7916H3.125V20.8333ZM3.125 13.5416H21.875V10.4166H3.125V13.5416ZM3.125 4.16663V8.33329H21.875V4.16663H3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LineWeightIcon;
