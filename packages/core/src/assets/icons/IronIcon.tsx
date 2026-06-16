import React from 'react';

export interface IronIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const IronIcon = ({ size, ...props }: IronIconProps) => {
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
      
<path d="M21.8749 6.25C20.1458 6.25 18.7499 7.64583 18.7499 9.375V13.5417C18.7499 14.1146 18.2812 14.5833 17.7083 14.5833V10.4167C17.7083 8.6875 16.3124 7.29167 14.5833 7.29167H10.4166C8.68742 7.29167 7.29159 8.6875 7.29159 10.4167H9.37492C9.37492 9.84375 9.84367 9.375 10.4166 9.375H14.5833C15.1562 9.375 15.6249 9.84375 15.6249 10.4167V11.4583H6.24992C3.94784 11.4583 2.08325 13.3229 2.08325 15.625V18.75H17.7083V16.6667C19.4374 16.6667 20.8333 15.2708 20.8333 13.5417V9.375C20.8333 8.80208 21.302 8.33333 21.8749 8.33333H22.9166V6.25H21.8749Z" fill="currentColor"/>
    </svg>
  );
};

export default IronIcon;
