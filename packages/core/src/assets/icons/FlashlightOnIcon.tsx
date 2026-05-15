import React from 'react';

export interface FlashlightOnIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FlashlightOnIcon = ({ size, ...props }: FlashlightOnIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.75 2.08325H6.25V5.20825H18.75V2.08325Z" fill="currentColor" />
      <path
        d="M6.25 7.29159V8.33325L8.33333 11.4583V22.9166H16.6667V11.4583L18.75 8.33325V7.29159H6.25ZM12.5 16.1458C11.6354 16.1458 10.9375 15.4478 10.9375 14.5833C10.9375 13.7187 11.6354 13.0208 12.5 13.0208C13.3646 13.0208 14.0625 13.7187 14.0625 14.5833C14.0625 15.4478 13.3646 16.1458 12.5 16.1458Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FlashlightOnIcon;
