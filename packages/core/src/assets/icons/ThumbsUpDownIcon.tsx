import React from 'react';

export interface ThumbsUpDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ThumbsUpDownIcon = ({ size, ...props }: ThumbsUpDownIconProps) => {
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
      
<g clipPath="url(#clip0_3230_40139)">
<path d="M12.5 6.25C12.5 5.67708 12.0312 5.20833 11.4583 5.20833H6.0625L6.75 1.89583L6.77083 1.65625C6.77083 1.33333 6.63542 1.04167 6.42708 0.822917L5.60417 0L0.458333 5.14583C0.177083 5.42708 0 5.82292 0 6.25V13.0208C0 13.8854 0.697917 14.5833 1.5625 14.5833H8.59375C9.23958 14.5833 9.79167 14.1875 10.0312 13.6354L12.3854 8.125C12.4583 7.94792 12.5 7.75 12.5 7.55208V6.25ZM23.4375 10.4167H16.4062C15.7604 10.4167 15.2083 10.8125 14.9687 11.3646L12.6146 16.875C12.5417 17.0521 12.5 17.25 12.5 17.4479V18.75C12.5 19.3229 12.9687 19.7917 13.5417 19.7917H18.9375L18.25 23.1042L18.2292 23.3542C18.2292 23.6771 18.3646 23.9687 18.5729 24.1875L19.3958 25L24.5417 19.8542C24.8229 19.5729 25 19.1771 25 18.75V11.9792C25 11.1146 24.3021 10.4167 23.4375 10.4167Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3230_40139">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default ThumbsUpDownIcon;
