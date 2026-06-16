import React from 'react';

export interface HdrWeakIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HdrWeakIcon = ({ size, ...props }: HdrWeakIconProps) => {
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
      
<path d="M5.20829 8.33333C2.90621 8.33333 1.04163 10.1979 1.04163 12.5C1.04163 14.8021 2.90621 16.6667 5.20829 16.6667C7.51038 16.6667 9.37496 14.8021 9.37496 12.5C9.37496 10.1979 7.51038 8.33333 5.20829 8.33333ZM17.7083 6.25C14.2604 6.25 11.4583 9.05208 11.4583 12.5C11.4583 15.9479 14.2604 18.75 17.7083 18.75C21.1562 18.75 23.9583 15.9479 23.9583 12.5C23.9583 9.05208 21.1562 6.25 17.7083 6.25ZM17.7083 16.6667C15.4062 16.6667 13.5416 14.8021 13.5416 12.5C13.5416 10.1979 15.4062 8.33333 17.7083 8.33333C20.0104 8.33333 21.875 10.1979 21.875 12.5C21.875 14.8021 20.0104 16.6667 17.7083 16.6667Z" fill="currentColor"/>
    </svg>
  );
};

export default HdrWeakIcon;
