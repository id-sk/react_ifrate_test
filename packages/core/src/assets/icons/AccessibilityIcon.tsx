import React from 'react';

export interface AccessibilityIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AccessibilityIcon = ({ size, ...props }: AccessibilityIconProps) => {
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
      
<path d="M12.5 2.08331C13.6458 2.08331 14.5833 3.02081 14.5833 4.16665C14.5833 5.31248 13.6458 6.24998 12.5 6.24998C11.3542 6.24998 10.4167 5.31248 10.4167 4.16665C10.4167 3.02081 11.3542 2.08331 12.5 2.08331ZM21.875 9.37498H15.625V22.9166H13.5417V16.6666H11.4583V22.9166H9.375V9.37498H3.125V7.29165H21.875V9.37498Z" fill="currentColor"/>
    </svg>
  );
};

export default AccessibilityIcon;
