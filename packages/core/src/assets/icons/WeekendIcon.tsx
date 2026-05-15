import React from 'react';

export interface WeekendIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WeekendIcon = ({ size, ...props }: WeekendIconProps) => {
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
        d="M21.8751 10.4166C20.7292 10.4166 19.7917 11.3541 19.7917 12.4999V15.6249H5.20841V12.4999C5.20841 11.3541 4.28133 10.4166 3.12508 10.4166C1.96883 10.4166 1.04175 11.3541 1.04175 12.4999V17.7083C1.04175 18.8541 1.97925 19.7916 3.12508 19.7916H21.8751C23.0209 19.7916 23.9584 18.8541 23.9584 17.7083V12.4999C23.9584 11.3541 23.0209 10.4166 21.8751 10.4166ZM18.7501 5.20825H6.25008C5.10425 5.20825 4.16675 6.14575 4.16675 7.29159V9.53117C5.37508 9.95825 6.25008 11.1145 6.25008 12.4583V14.5833H18.7501V12.4687C18.7501 11.1145 19.6251 9.96867 20.8334 9.54158V7.29159C20.8334 6.14575 19.8959 5.20825 18.7501 5.20825Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WeekendIcon;
