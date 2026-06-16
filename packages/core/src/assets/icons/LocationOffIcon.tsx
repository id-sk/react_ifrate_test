import React from 'react';

export interface LocationOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocationOffIcon = ({ size, ...props }: LocationOffIconProps) => {
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
      
<path d="M13.5417 6.77075C14.9792 6.77075 16.1458 7.93742 16.1458 9.37492C16.1458 10.1458 15.8021 10.8228 15.2812 11.302L19.0625 15.0833C20.0833 13.1458 20.8333 11.1249 20.8333 9.37492C20.8333 5.34367 17.5729 2.08325 13.5417 2.08325C11.4792 2.08325 9.625 2.94784 8.29167 4.32284L11.6146 7.64575C12.0937 7.10409 12.7708 6.77075 13.5417 6.77075ZM4.44792 3.12492L3.125 4.44784L6.4375 7.76034C6.32292 8.28117 6.25 8.82284 6.25 9.37492C6.25 14.8437 13.5417 22.9166 13.5417 22.9166C13.5417 22.9166 15.2812 20.9895 17.0625 18.3853L20.5521 21.8749L21.875 20.552L4.44792 3.12492Z" fill="currentColor"/>
    </svg>
  );
};

export default LocationOffIcon;
