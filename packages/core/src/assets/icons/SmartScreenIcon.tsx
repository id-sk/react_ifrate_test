import React from 'react';

export interface SmartScreenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SmartScreenIcon = ({ size, ...props }: SmartScreenIconProps) => {
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
        d="M21.8751 5.20825H3.12508C1.97925 5.20825 1.04175 6.14575 1.04175 7.29159V17.7083C1.04175 18.8541 1.97925 19.7916 3.12508 19.7916H21.8751C23.0209 19.7916 23.9584 18.8541 23.9584 17.7083V7.29159C23.9584 6.14575 23.0209 5.20825 21.8751 5.20825ZM18.7501 17.7083H6.25008V7.29159H18.7501V17.7083Z"
        fill="currentColor"
      />
      <path d="M17.1876 11.7187H15.6251V13.2812H17.1876V11.7187Z" fill="currentColor" />
      <path d="M14.5834 11.7187H13.0209V13.2812H14.5834V11.7187Z" fill="currentColor" />
      <path d="M11.9792 11.7187H10.4167V13.2812H11.9792V11.7187Z" fill="currentColor" />
      <path d="M9.37508 11.7187H7.81258V13.2812H9.37508V11.7187Z" fill="currentColor" />
    </svg>
  );
};

export default SmartScreenIcon;
