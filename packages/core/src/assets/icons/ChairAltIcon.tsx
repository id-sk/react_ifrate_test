import React from 'react';

export interface ChairAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ChairAltIcon = ({ size, ...props }: ChairAltIconProps) => {
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
      
<path d="M17.7083 10.4167C18.8541 10.4167 19.7916 9.47917 19.7916 8.33333V5.20833C19.7916 4.0625 18.8541 3.125 17.7083 3.125H7.29159C6.14575 3.125 5.20825 4.0625 5.20825 5.20833V8.33333C5.20825 9.47917 6.14575 10.4167 7.29159 10.4167H8.33325V12.5H7.29159C6.14575 12.5 5.20825 13.4375 5.20825 14.5833V21.875H7.29159V18.75H17.7083V21.875H19.7916V14.5833C19.7916 13.4375 18.8541 12.5 17.7083 12.5H16.6666V10.4167H17.7083ZM7.29159 8.33333V5.20833H17.7083V8.33333H7.29159ZM17.7083 16.6667H7.29159V14.5833H17.7083V16.6667ZM14.5833 12.5H10.4166V10.4167H14.5833V12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default ChairAltIcon;
