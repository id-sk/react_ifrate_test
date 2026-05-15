import React from 'react';

export interface KeyboardOptionKeyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardOptionKeyIcon = ({ size, ...props }: KeyboardOptionKeyIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21.875 5.20825H15.625V7.29159H21.875V5.20825Z" fill="currentColor" />
      <path
        d="M9.375 5.20825H3.125V7.29159H8.17708L15.3854 19.7916H21.875V17.7083H16.5938L9.375 5.20825Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KeyboardOptionKeyIcon;
