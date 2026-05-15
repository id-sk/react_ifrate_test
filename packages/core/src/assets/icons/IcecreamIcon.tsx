import React from 'react';

export interface IcecreamIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const IcecreamIcon = ({ size, ...props }: IcecreamIconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.15621 12.3958L12.552 18.875L15.8541 12.4062C15.7395 12.3229 15.6354 12.2396 15.5416 12.1458C14.6666 12.6979 13.6145 13.0208 12.5 13.0208C11.3854 13.0208 10.3333 12.6979 9.45829 12.1458C9.36454 12.2396 9.26038 12.3229 9.15621 12.3958ZM7.11454 13.0104C5.46871 12.9167 4.16663 11.5625 4.16663 9.89583C4.16663 8.34375 5.30204 7.05208 6.79163 6.8125C7.03121 3.875 9.49996 1.5625 12.5 1.5625C15.5 1.5625 17.9687 3.875 18.2083 6.8125C19.6979 7.05208 20.8333 8.34375 20.8333 9.89583C20.8333 11.5521 19.5416 12.9167 17.9062 13.0104L12.5729 23.4375L7.11454 13.0104Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IcecreamIcon;
