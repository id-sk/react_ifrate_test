import React from 'react';

export interface CurrencyPoundIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CurrencyPoundIcon = ({ size, ...props }: CurrencyPoundIconProps) => {
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
        d="M14.5833 22.1356C16.5938 22.1356 18.3542 20.9168 18.75 19.0106L16.9271 18.0939C16.6667 19.2293 15.9688 20.0522 14.5833 20.0522H9.47917C10.3438 19.0106 11.0417 17.6147 11.0417 15.8856C11.0417 15.521 11.0104 15.1668 10.9583 14.8439H14.5833V12.7606H10.2292C9.375 11.1147 8.33333 10.2606 8.33333 8.59391C8.33333 6.5835 9.96875 4.94808 11.9792 4.94808C13.5417 4.94808 14.8854 5.93766 15.3958 7.32308L17.3229 6.51058C16.4896 4.37516 14.4167 2.86475 11.9792 2.86475C8.8125 2.86475 6.25 5.42725 6.25 8.59391C6.25 10.4481 7.07292 11.6147 7.80208 12.7606H6.25V14.8439H8.82292C8.90625 15.1668 8.95833 15.5106 8.95833 15.8856C8.95833 18.6981 6.25 20.0522 6.25 20.0522V22.1356H14.5833Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CurrencyPoundIcon;
