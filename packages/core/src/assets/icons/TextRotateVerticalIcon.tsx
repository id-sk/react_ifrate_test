import React from 'react';

export interface TextRotateVerticalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TextRotateVerticalIcon = ({ size, ...props }: TextRotateVerticalIconProps) => {
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
      
<path d="M16.6667 5.20837H15.1042L10.1563 16.6667H12.3438L13.2813 14.375H18.4897L19.4272 16.6667H21.6147L16.6667 5.20837ZM13.9376 12.5L15.8855 7.27087L17.8334 12.5H13.9376ZM6.5105 20.573L9.6355 17.448H7.55216V4.42712H5.46883V17.448H3.3855L6.5105 20.573Z" fill="currentColor"/>
    </svg>
  );
};

export default TextRotateVerticalIcon;
