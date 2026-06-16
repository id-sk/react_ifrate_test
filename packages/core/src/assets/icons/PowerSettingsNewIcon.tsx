import React from 'react';

export interface PowerSettingsNewIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PowerSettingsNewIcon = ({ size, ...props }: PowerSettingsNewIconProps) => {
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
      
<path d="M13.5417 3.125H11.4583V13.5417H13.5417V3.125ZM18.5729 5.38542L17.0937 6.86458C18.7396 8.1875 19.7917 10.2187 19.7917 12.5C19.7917 16.5312 16.5312 19.7917 12.5 19.7917C8.46875 19.7917 5.20833 16.5312 5.20833 12.5C5.20833 10.2187 6.26042 8.1875 7.89583 6.85417L6.42708 5.38542C4.40625 7.10417 3.125 9.64583 3.125 12.5C3.125 17.6771 7.32292 21.875 12.5 21.875C17.6771 21.875 21.875 17.6771 21.875 12.5C21.875 9.64583 20.5938 7.10417 18.5729 5.38542Z" fill="currentColor"/>
    </svg>
  );
};

export default PowerSettingsNewIcon;
