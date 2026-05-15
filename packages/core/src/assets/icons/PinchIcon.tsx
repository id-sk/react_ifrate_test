import React from 'react';

export interface PinchIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PinchIcon = ({ size, ...props }: PinchIconProps) => {
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
        d="M6.25033 2.60413V1.04163H11.4587V6.24996H9.89616V3.70829L3.70866 9.89579H6.25033V11.4583H1.04199V6.24996H2.60449V8.79163L8.79199 2.60413H6.25033ZM23.9378 17.5208L23.2816 22.1666C23.1357 23.1979 22.2503 23.9583 21.2191 23.9583H14.8024C14.2503 23.9583 13.4587 23.7395 13.0732 23.3437L8.33366 18.3541L9.19824 17.4791C9.44824 17.2291 9.80241 17.1145 10.1566 17.1875L13.542 17.9583V6.77079C13.542 5.90621 14.2399 5.20829 15.1045 5.20829C15.9691 5.20829 16.667 5.90621 16.667 6.77079V13.0208H17.6149C17.9378 13.0208 18.2607 13.0937 18.542 13.2395L22.8024 15.3645C23.6045 15.7708 24.0628 16.6354 23.9378 17.5208Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PinchIcon;
