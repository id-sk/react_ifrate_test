import React from 'react';

export interface CompassCalibrationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CompassCalibrationIcon = ({ size, ...props }: CompassCalibrationIconProps) => {
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
      
<path d="M12.5 21.875C14.8012 21.875 16.6667 20.0095 16.6667 17.7083C16.6667 15.4071 14.8012 13.5417 12.5 13.5417C10.1989 13.5417 8.33337 15.4071 8.33337 17.7083C8.33337 20.0095 10.1989 21.875 12.5 21.875Z" fill="currentColor"/>
<path d="M12.5 10.4896C14.5313 10.4896 16.375 11.3125 17.7084 12.6458L22.9167 7.4375C20.25 4.78125 16.5625 3.125 12.5 3.125C8.43754 3.125 4.75004 4.78125 2.08337 7.44792L7.29171 12.6562C8.62504 11.3229 10.4688 10.4896 12.5 10.4896Z" fill="currentColor"/>
    </svg>
  );
};

export default CompassCalibrationIcon;
