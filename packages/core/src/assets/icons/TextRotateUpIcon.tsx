import React from 'react';

export interface TextRotateUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TextRotateUpIcon = ({ size, ...props }: TextRotateUpIconProps) => {
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
      
<path d="M3.125 12.5V14.0625L14.5833 19.0105V16.823L12.2917 15.8855V10.6771L14.5833 9.73962V7.55212L3.125 12.5ZM10.4167 15.2292L5.1875 13.2813L10.4167 11.3334V15.2292ZM18.75 4.42712L15.625 7.55212H17.7083V20.573H19.7917V7.55212H21.875L18.75 4.42712Z" fill="currentColor"/>
    </svg>
  );
};

export default TextRotateUpIcon;
