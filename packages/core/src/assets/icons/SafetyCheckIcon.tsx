import React from 'react';

export interface SafetyCheckIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SafetyCheckIcon = ({ size, ...props }: SafetyCheckIconProps) => {
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
      
<path d="M12.5001 2.0835L4.16675 5.2085V11.5522C4.16675 16.8127 7.71883 21.7189 12.5001 22.9168C17.2813 21.7189 20.8334 16.8127 20.8334 11.5522V5.2085L12.5001 2.0835ZM12.5001 17.7085C9.62508 17.7085 7.29175 15.3752 7.29175 12.5002C7.29175 9.62516 9.62508 7.29183 12.5001 7.29183C15.3751 7.29183 17.7084 9.62516 17.7084 12.5002C17.7084 15.3752 15.3751 17.7085 12.5001 17.7085ZM14.2188 14.9481L11.9792 12.7085V9.37516H13.0209V12.2814L14.948 14.2085L14.2188 14.9481Z" fill="currentColor"/>
    </svg>
  );
};

export default SafetyCheckIcon;
