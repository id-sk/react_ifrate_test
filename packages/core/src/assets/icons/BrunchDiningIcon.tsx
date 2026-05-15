import React from 'react';

export interface BrunchDiningIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BrunchDiningIcon = ({ size, ...props }: BrunchDiningIconProps) => {
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
        d="M18.7499 8.3335H20.8333V4.16683H18.7499V8.3335ZM16.1562 22.9168H2.59367C2.31242 22.9168 2.08325 22.6877 2.08325 22.396V20.8335H16.6666V22.396C16.6666 22.6877 16.4374 22.9168 16.1562 22.9168ZM18.7499 16.5522L18.3333 16.1147C17.2708 14.9897 16.6666 13.4897 16.6666 11.9481V2.0835H22.9166V11.9897C22.9166 13.5106 22.3541 14.9793 21.3228 16.0939L20.8333 16.6356V20.8335H22.9166V22.9168H18.7499V16.5522ZM7.29159 16.6668V14.5835H11.4583V16.6668H16.1458C16.4374 16.6668 16.6666 16.896 16.6666 17.1877V18.2293C16.6666 18.521 16.4374 18.7502 16.1458 18.7502H2.60409C2.31242 18.7502 2.08325 18.521 2.08325 18.2293V17.1877C2.08325 16.896 2.31242 16.6668 2.60409 16.6668H7.29159Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BrunchDiningIcon;
