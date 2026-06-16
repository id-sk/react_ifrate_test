import React from 'react';

export interface LooksIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LooksIcon = ({ size, ...props }: LooksIconProps) => {
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
      
<path d="M12.5001 10.9377C8.47925 10.9377 5.20841 14.2085 5.20841 18.2293H7.29175C7.29175 15.3543 9.62508 13.021 12.5001 13.021C15.3751 13.021 17.7084 15.3543 17.7084 18.2293H19.7917C19.7917 14.2085 16.5209 10.9377 12.5001 10.9377ZM12.5001 6.771C6.17716 6.771 1.04175 11.9064 1.04175 18.2293H3.12508C3.12508 13.0627 7.33341 8.85433 12.5001 8.85433C17.6667 8.85433 21.8751 13.0627 21.8751 18.2293H23.9584C23.9584 11.9064 18.823 6.771 12.5001 6.771Z" fill="currentColor"/>
    </svg>
  );
};

export default LooksIcon;
