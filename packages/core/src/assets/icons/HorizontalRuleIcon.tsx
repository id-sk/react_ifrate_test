import React from 'react';

export interface HorizontalRuleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HorizontalRuleIcon = ({ size, ...props }: HorizontalRuleIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.8334 11.4583H4.16675V13.5416H20.8334V11.4583Z" fill="currentColor" />
    </svg>
  );
};

export default HorizontalRuleIcon;
