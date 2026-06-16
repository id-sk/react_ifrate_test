import React from 'react';

export interface ToggleOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ToggleOffIcon = ({ size, ...props }: ToggleOffIconProps) => {
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
      
<path d="M17.7083 7.2915H7.29159C4.41659 7.2915 2.08325 9.62484 2.08325 12.4998C2.08325 15.3748 4.41659 17.7082 7.29159 17.7082H17.7083C20.5833 17.7082 22.9166 15.3748 22.9166 12.4998C22.9166 9.62484 20.5833 7.2915 17.7083 7.2915ZM7.29159 15.6248C5.56242 15.6248 4.16659 14.229 4.16659 12.4998C4.16659 10.7707 5.56242 9.37484 7.29159 9.37484C9.02075 9.37484 10.4166 10.7707 10.4166 12.4998C10.4166 14.229 9.02075 15.6248 7.29159 15.6248Z" fill="currentColor"/>
    </svg>
  );
};

export default ToggleOffIcon;
