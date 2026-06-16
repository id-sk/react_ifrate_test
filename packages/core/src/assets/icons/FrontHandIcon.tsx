import React from 'react';

export interface FrontHandIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FrontHandIcon = ({ size, ...props }: FrontHandIconProps) => {
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
      
<g clipPath="url(#clip0_3239_35486)">
<path d="M19.7917 8.33333C19.0729 8.33333 18.4896 8.91667 18.4896 9.63542V15.625H17.9687C16.25 15.625 14.8438 17.0312 14.8438 18.75H13.8021C13.8021 16.625 15.3958 14.875 17.4479 14.6146V3.38542C17.4479 2.66667 16.8646 2.08333 16.1458 2.08333C15.4271 2.08333 14.8438 2.66667 14.8438 3.38542V11.4583H13.8021V1.30208C13.8021 0.583333 13.2188 0 12.5 0C11.7812 0 11.1979 0.583333 11.1979 1.30208V11.4583H10.1562V2.86458C10.1562 2.14583 9.57292 1.5625 8.85417 1.5625C8.13542 1.5625 7.55208 2.14583 7.55208 2.86458V12.5H6.51042V5.98958C6.51042 5.27083 5.92708 4.6875 5.20833 4.6875C4.48958 4.6875 3.90625 5.27083 3.90625 5.98958V16.4062C3.90625 21.1562 7.75 25 12.5 25C17.25 25 21.0938 21.1562 21.0938 16.4062V9.63542C21.0938 8.91667 20.5104 8.33333 19.7917 8.33333Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3239_35486">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default FrontHandIcon;
