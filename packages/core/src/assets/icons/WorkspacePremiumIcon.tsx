import React from 'react';

export interface WorkspacePremiumIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WorkspacePremiumIcon = ({ size, ...props }: WorkspacePremiumIconProps) => {
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
      
<path d="M10.0834 13.7396L12.5001 11.9062L14.9063 13.7396L13.9897 10.7708L16.4063 8.85417H13.448L12.5001 5.92708L11.5522 8.85417H8.59383L11.0001 10.7708L10.0834 13.7396ZM20.8334 9.89583C20.8334 5.29167 17.1042 1.5625 12.5001 1.5625C7.89591 1.5625 4.16675 5.29167 4.16675 9.89583C4.16675 12.0104 4.95841 13.9271 6.25008 15.3958V23.4375L12.5001 21.3542L18.7501 23.4375V15.3958C20.0417 13.9271 20.8334 12.0104 20.8334 9.89583ZM12.5001 3.64583C15.948 3.64583 18.7501 6.44792 18.7501 9.89583C18.7501 13.3437 15.948 16.1458 12.5001 16.1458C9.05216 16.1458 6.25008 13.3437 6.25008 9.89583C6.25008 6.44792 9.05216 3.64583 12.5001 3.64583Z" fill="currentColor"/>
    </svg>
  );
};

export default WorkspacePremiumIcon;
