import React from 'react';

export interface CallSplitIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CallSplitIcon = ({ size, ...props }: CallSplitIconProps) => {
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
        d="M14.5834 4.16675L16.9688 6.55216L13.9688 9.55216L15.448 11.0313L18.448 8.03133L20.8334 10.4167V4.16675H14.5834ZM10.4167 4.16675H4.16675V10.4167L6.55216 8.03133L11.4584 12.9272V20.8334H13.5417V12.073L8.03133 6.55216L10.4167 4.16675Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CallSplitIcon;
