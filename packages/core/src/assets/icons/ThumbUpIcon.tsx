import React from 'react';

export interface ThumbUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ThumbUpIcon = ({ size, ...props }: ThumbUpIconProps) => {
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
        d="M1.04175 22.9167H5.20841V10.4167H1.04175V22.9167ZM23.9584 11.4584C23.9584 10.3125 23.0209 9.37504 21.8751 9.37504H15.3022L16.2917 4.61462L16.323 4.28129C16.323 3.85421 16.1459 3.45837 15.8647 3.17712L14.7605 2.08337L7.90633 8.94796C7.52091 9.32296 7.29175 9.84379 7.29175 10.4167V20.8334C7.29175 21.9792 8.22925 22.9167 9.37508 22.9167H18.7501C19.6147 22.9167 20.3542 22.3959 20.6667 21.6459L23.8126 14.3021C23.9063 14.0625 23.9584 13.8125 23.9584 13.5417V11.4584Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ThumbUpIcon;
