import React from 'react';

export interface CategoryIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CategoryIcon = ({ size, ...props }: CategoryIconProps) => {
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
      
<path d="M11.9792 2.0835L6.25008 11.4585H17.7084L11.9792 2.0835Z" fill="currentColor"/>
<path d="M17.7084 22.9168C20.2972 22.9168 22.3959 20.8182 22.3959 18.2293C22.3959 15.6405 20.2972 13.5418 17.7084 13.5418C15.1196 13.5418 13.0209 15.6405 13.0209 18.2293C13.0209 20.8182 15.1196 22.9168 17.7084 22.9168Z" fill="currentColor"/>
<path d="M2.60425 14.0627H10.9376V22.396H2.60425V14.0627Z" fill="currentColor"/>
    </svg>
  );
};

export default CategoryIcon;
