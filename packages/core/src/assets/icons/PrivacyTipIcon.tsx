import React from 'react';

export interface PrivacyTipIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PrivacyTipIcon = ({ size, ...props }: PrivacyTipIconProps) => {
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
      
<path d="M12.5 1.04163L3.125 5.20829V11.4583C3.125 17.2395 7.125 22.6458 12.5 23.9583C17.875 22.6458 21.875 17.2395 21.875 11.4583V5.20829L12.5 1.04163ZM11.4583 7.29163H13.5417V9.37496H11.4583V7.29163ZM11.4583 11.4583H13.5417V17.7083H11.4583V11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default PrivacyTipIcon;
