import React from 'react';

export interface DevicesFoldIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DevicesFoldIcon = ({ size, ...props }: DevicesFoldIconProps) => {
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
        d="M20.8333 4.16715H17.7083C17.7083 2.67756 16.177 1.66715 14.802 2.25048L11.677 3.59423C10.9166 3.91715 10.4166 4.67756 10.4166 5.5109V20.8338C10.4166 21.9797 11.3541 22.9172 12.4999 22.9172H20.8333C21.9791 22.9172 22.9166 21.9797 22.9166 20.8338V6.25048C22.9166 5.10465 21.9791 4.16715 20.8333 4.16715ZM20.8333 20.8338H15.2812L16.4478 20.3338C17.2083 20.0005 17.7083 19.2505 17.7083 18.4171V6.25048H20.8333V20.8338Z"
        fill="currentColor"
      />
      <path d="M4.16659 4.16715H2.08325V6.25048H4.16659V4.16715Z" fill="currentColor" />
      <path d="M4.16659 20.8338H2.08325V22.9172H4.16659V20.8338Z" fill="currentColor" />
      <path d="M4.16659 16.6671H2.08325V18.7505H4.16659V16.6671Z" fill="currentColor" />
      <path d="M4.16659 12.5005H2.08325V14.5838H4.16659V12.5005Z" fill="currentColor" />
      <path d="M4.16659 8.33381H2.08325V10.4171H4.16659V8.33381Z" fill="currentColor" />
      <path d="M8.33325 4.16715H6.24992V6.25048H8.33325V4.16715Z" fill="currentColor" />
      <path d="M8.33325 20.8338H6.24992V22.9172H8.33325V20.8338Z" fill="currentColor" />
    </svg>
  );
};

export default DevicesFoldIcon;
