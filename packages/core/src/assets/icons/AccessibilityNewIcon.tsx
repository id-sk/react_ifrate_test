import React from 'react';

export interface AccessibilityNewIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AccessibilityNewIcon = ({ size, ...props }: AccessibilityNewIconProps) => {
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
      
<path d="M21.3542 6.24998C18.6354 6.97915 15.4479 7.29165 12.5 7.29165C9.55208 7.29165 6.36458 6.97915 3.64583 6.24998L3.125 8.33331C5.0625 8.85415 7.29167 9.1979 9.375 9.37498V22.9166H11.4583V16.6666H13.5417V22.9166H15.625V9.37498C17.7083 9.1979 19.9375 8.85415 21.875 8.33331L21.3542 6.24998ZM12.5 6.24998C13.6458 6.24998 14.5833 5.31248 14.5833 4.16665C14.5833 3.02081 13.6458 2.08331 12.5 2.08331C11.3542 2.08331 10.4167 3.02081 10.4167 4.16665C10.4167 5.31248 11.3542 6.24998 12.5 6.24998Z" fill="currentColor"/>
    </svg>
  );
};

export default AccessibilityNewIcon;
