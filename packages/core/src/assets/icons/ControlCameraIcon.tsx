import React from 'react';

export interface ControlCameraIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ControlCameraIcon = ({ size, ...props }: ControlCameraIconProps) => {
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
      
<path d="M16.1874 5.77087L14.3437 7.60421L12.4999 5.77087L10.6562 7.60421L8.81242 5.77087L12.4999 2.08337L16.1874 5.77087ZM19.2291 16.1875L17.3958 14.3438L19.2291 12.5L17.3958 10.6563L19.2291 8.81254L22.9166 12.5L19.2291 16.1875ZM8.81242 19.2292L10.6562 17.3959L12.4999 19.2292L14.3437 17.3959L16.1874 19.2292L12.4999 22.9167L8.81242 19.2292ZM5.77075 8.81254L7.60409 10.6563L5.77075 12.5L7.60409 14.3438L5.77075 16.1875L2.08325 12.5L5.77075 8.81254Z" fill="currentColor"/>
<path d="M12.4999 15.625C14.2258 15.625 15.6249 14.2259 15.6249 12.5C15.6249 10.7742 14.2258 9.37504 12.4999 9.37504C10.774 9.37504 9.37492 10.7742 9.37492 12.5C9.37492 14.2259 10.774 15.625 12.4999 15.625Z" fill="currentColor"/>
    </svg>
  );
};

export default ControlCameraIcon;
