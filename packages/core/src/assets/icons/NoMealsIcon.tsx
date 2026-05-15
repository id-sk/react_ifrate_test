import React from 'react';

export interface NoMealsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NoMealsIcon = ({ size, ...props }: NoMealsIconProps) => {
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
        d="M17.401 13.9009V5.56755C17.401 3.73421 19.7344 1.40088 22.6094 1.40088V18.2446L20.526 16.1613V13.9009H17.401ZM22.0781 23.5988L11.1719 12.703C10.8281 12.7967 10.4844 12.8592 10.1094 12.8592V22.2342H8.02604V12.8592C5.72396 12.8592 3.85938 10.9946 3.85938 8.69255V5.39046L1.45312 2.9738L2.92188 1.50505L23.5469 22.13L22.0781 23.5988ZM7.16146 8.69255L5.94271 7.4738V8.69255H7.16146ZM10.1094 1.40088H8.02604V3.6613L10.1094 5.74463V1.40088ZM14.276 8.69255V1.40088H12.1927V7.82796L14.1198 9.75505C14.2135 9.4113 14.276 9.06755 14.276 8.69255Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NoMealsIcon;
