import React from 'react';

export interface LinkOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LinkOffIcon = ({ size, ...props }: LinkOffIconProps) => {
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
        d="M17.7083 7.29167H13.5416V9.27083H17.7083C19.4895 9.27083 20.9374 10.7187 20.9374 12.5C20.9374 13.9896 19.9166 15.2396 18.5312 15.6042L20.052 17.125C21.7499 16.2604 22.9166 14.5312 22.9166 12.5C22.9166 9.625 20.5833 7.29167 17.7083 7.29167ZM16.6666 11.4583H14.3853L16.4687 13.5417H16.6666V11.4583ZM2.08325 4.44792L5.32284 7.6875C3.427 8.45833 2.08325 10.3229 2.08325 12.5C2.08325 15.375 4.41659 17.7083 7.29159 17.7083H11.4583V15.7292H7.29159C5.51034 15.7292 4.06242 14.2812 4.06242 12.5C4.06242 10.8437 5.32284 9.47917 6.93742 9.30208L9.09367 11.4583H8.33325V13.5417H11.177L13.5416 15.9062V17.7083H15.3437L19.5208 21.875L20.8333 20.5625L3.40617 3.125L2.08325 4.44792Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LinkOffIcon;
