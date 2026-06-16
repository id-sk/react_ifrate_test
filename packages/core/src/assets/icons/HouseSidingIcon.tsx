import React from 'react';

export interface HouseSidingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HouseSidingIcon = ({ size, ...props }: HouseSidingIconProps) => {
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
      
<path d="M19.7916 13.021H22.9166L12.4999 3.646L2.08325 13.021H5.20825V21.3543H7.29159V19.271H17.7083V21.3543H19.7916V13.021ZM7.51034 10.9377H17.4895L17.7083 11.1356V13.021H7.29159V11.1356L7.51034 10.9377ZM15.177 8.85433H9.82284L12.4999 6.44808L15.177 8.85433ZM7.29159 17.1877V15.1043H17.7083V17.1877H7.29159Z" fill="currentColor"/>
    </svg>
  );
};

export default HouseSidingIcon;
