import React from 'react';

export interface DataExplorationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DataExplorationIcon = ({ size, ...props }: DataExplorationIconProps) => {
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
      
<path d="M12.4999 2.08331C6.74992 2.08331 2.08325 6.74998 2.08325 12.5C2.08325 13.8854 2.35409 15.2187 2.85409 16.4271L8.33325 10.9375L11.7708 13.8333L15.1874 10.4166H13.5416V8.33331H18.7499V13.5416H16.6666V11.8958L11.8853 16.6666L8.45825 13.7604L3.87492 18.3437C5.74992 21.1041 8.91659 22.9166 12.4999 22.9166H20.8333C21.9791 22.9166 22.9166 21.9791 22.9166 20.8333V12.5C22.9166 6.74998 18.2499 2.08331 12.4999 2.08331ZM20.3124 21.3541C19.7395 21.3541 19.2708 20.8854 19.2708 20.3125C19.2708 19.7396 19.7395 19.2708 20.3124 19.2708C20.8853 19.2708 21.3541 19.7396 21.3541 20.3125C21.3541 20.8854 20.8853 21.3541 20.3124 21.3541Z" fill="currentColor"/>
    </svg>
  );
};

export default DataExplorationIcon;
