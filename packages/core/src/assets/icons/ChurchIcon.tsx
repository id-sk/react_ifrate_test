import React from 'react';

export interface ChurchIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ChurchIcon = ({ size, ...props }: ChurchIconProps) => {
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
        d="M18.7499 13.25V9.89583L13.5416 7.29167V5.72917H15.6249V3.64583H13.5416V1.5625H11.4583V3.64583H9.37492V5.72917H11.4583V7.29167L6.24992 9.89583V13.25L2.08325 15.1042V23.4375H10.4166V20.3125C10.4166 19.1667 11.3541 18.2292 12.4999 18.2292C13.6458 18.2292 14.5833 19.1667 14.5833 20.3125V23.4375H22.9166V15.1042L18.7499 13.25ZM12.4999 14.5833C11.6353 14.5833 10.9374 13.8854 10.9374 13.0208C10.9374 12.1562 11.6353 11.4583 12.4999 11.4583C13.3645 11.4583 14.0624 12.1562 14.0624 13.0208C14.0624 13.8854 13.3645 14.5833 12.4999 14.5833Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChurchIcon;
