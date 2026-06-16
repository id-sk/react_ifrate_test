import React from 'react';

export interface Crop32IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Crop32Icon = ({ size, ...props }: Crop32IconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M19.7917 6.25H5.20833C4.0625 6.25 3.125 7.1875 3.125 8.33333V16.6667C3.125 17.8125 4.0625 18.75 5.20833 18.75H19.7917C20.9375 18.75 21.875 17.8125 21.875 16.6667V8.33333C21.875 7.1875 20.9375 6.25 19.7917 6.25ZM19.7917 16.6667H5.20833V8.33333H19.7917V16.6667Z" fill="currentColor"/>
    </svg>
  );
};

export default Crop32Icon;
