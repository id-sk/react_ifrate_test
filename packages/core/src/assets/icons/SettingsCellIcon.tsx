import React from 'react';

export interface SettingsCellIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsCellIcon = ({ size, ...props }: SettingsCellIconProps) => {
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
      
<g clipPath="url(#clip0_3230_40067)">
<path d="M7.29167 25H9.375V22.9167H7.29167V25ZM11.4583 25H13.5417V22.9167H11.4583V25ZM15.625 25H17.7083V22.9167H15.625V25ZM16.6667 0.0104167L8.33333 0C7.1875 0 6.25 0.9375 6.25 2.08333V18.75C6.25 19.8958 7.1875 20.8333 8.33333 20.8333H16.6667C17.8125 20.8333 18.75 19.8958 18.75 18.75V2.08333C18.75 0.9375 17.8125 0.0104167 16.6667 0.0104167ZM16.6667 16.6667H8.33333V4.16667H16.6667V16.6667Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3230_40067">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default SettingsCellIcon;
