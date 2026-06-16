import React from 'react';

export interface ThumbDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ThumbDownIcon = ({ size, ...props }: ThumbDownIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M15.6251 2.08337H6.25008C5.3855 2.08337 4.64591 2.60421 4.33341 3.35421L1.18758 10.698C1.09383 10.9375 1.04175 11.1875 1.04175 11.4584V13.5417C1.04175 14.6875 1.97925 15.625 3.12508 15.625H9.698L8.70841 20.3855L8.67716 20.7188C8.67716 21.1459 8.85425 21.5417 9.1355 21.823L10.2397 22.9167L17.1042 16.0521C17.4792 15.6771 17.7084 15.1563 17.7084 14.5834V4.16671C17.7084 3.02087 16.7709 2.08337 15.6251 2.08337ZM19.7917 2.08337V14.5834H23.9584V2.08337H19.7917Z" fill="currentColor"/>
    </svg>
  );
};

export default ThumbDownIcon;
