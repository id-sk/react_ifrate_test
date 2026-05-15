import React from 'react';

export interface MovingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MovingIcon = ({ size, ...props }: MovingIconProps) => {
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
        d="M20.5312 10.1146L22.9166 12.5V6.25H16.6666L19.052 8.63542L14.7083 12.9792C14.302 13.3854 13.6458 13.3854 13.2395 12.9792L12.0208 11.7604C10.802 10.5417 8.82284 10.5417 7.60409 11.7604L2.08325 17.2812L3.552 18.75L9.06242 13.2396C9.46867 12.8333 10.1249 12.8333 10.5312 13.2396L11.7499 14.4583C12.9687 15.6771 14.9478 15.6771 16.1666 14.4583L20.5312 10.1146Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MovingIcon;
