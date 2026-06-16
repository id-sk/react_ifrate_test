import React from 'react';

export interface WatchIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WatchIcon = ({ size, ...props }: WatchIconProps) => {
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
      
<g clipPath="url(#clip0_3239_31765)">
<path d="M20.8334 12.5C20.8334 9.85417 19.5938 7.48958 17.6667 5.96875L16.6667 0H8.33341L7.34383 5.96875C5.40633 7.48958 4.16675 9.84375 4.16675 12.5C4.16675 15.1562 5.40633 17.5104 7.34383 19.0312L8.33341 25H16.6667L17.6667 19.0312C19.5938 17.5104 20.8334 15.1458 20.8334 12.5ZM6.25008 12.5C6.25008 9.05208 9.05216 6.25 12.5001 6.25C15.948 6.25 18.7501 9.05208 18.7501 12.5C18.7501 15.9479 15.948 18.75 12.5001 18.75C9.05216 18.75 6.25008 15.9479 6.25008 12.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3239_31765">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default WatchIcon;
