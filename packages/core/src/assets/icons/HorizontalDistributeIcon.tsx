import React from 'react';

export interface HorizontalDistributeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HorizontalDistributeIcon = ({ size, ...props }: HorizontalDistributeIconProps) => {
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
        d="M4.16659 22.9166H2.08325V2.08325H4.16659V22.9166ZM22.9166 2.08325H20.8333V22.9166H22.9166V2.08325ZM14.0624 7.29159H10.9374V17.7083H14.0624V7.29159Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HorizontalDistributeIcon;
