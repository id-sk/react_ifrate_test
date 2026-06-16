import React from 'react';

export interface MonitorIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MonitorIcon = ({ size, ...props }: MonitorIconProps) => {
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
      
<path d="M20.8333 3.125H4.16659C3.02075 3.125 2.08325 4.0625 2.08325 5.20833V16.6667C2.08325 17.8125 3.02075 18.75 4.16659 18.75H7.29159L6.24992 19.7917V21.875H18.7499V19.7917L17.7083 18.75H20.8333C21.9791 18.75 22.9166 17.8125 22.9166 16.6667V5.20833C22.9166 4.0625 21.9791 3.125 20.8333 3.125ZM20.8333 16.6667H4.16659V5.20833H20.8333V16.6667Z" fill="currentColor"/>
    </svg>
  );
};

export default MonitorIcon;
