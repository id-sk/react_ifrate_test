import React from 'react';

export interface ModeFanOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ModeFanOffIcon = ({ size, ...props }: ModeFanOffIconProps) => {
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
      
<path d="M17.3385 8.39062L14.9531 9.24479C14.7656 9.10938 14.5573 8.98438 14.349 8.89062C14.526 8.02604 15.0052 7.24479 15.7656 6.74479C17.8698 5.34896 17.1719 1.76562 14.2656 1.76562C11.0573 1.76562 9.16146 3.29688 8.74479 5.16146L19.8281 16.2448C21.3906 16.651 23.2344 15.7135 23.2344 13.6302C23.2344 9.05729 20.099 7.14062 17.3385 8.39062Z" fill="currentColor"/>
<path d="M3.24479 2.60937L1.76562 4.07812L5.80729 8.11979C4.24479 7.70312 2.40104 8.65104 2.40104 10.7344C2.40104 15.3177 5.53646 17.2344 8.29687 15.974L10.6823 15.1198C10.8698 15.2552 11.0781 15.3802 11.2865 15.474C11.1094 16.3385 10.6302 17.1198 9.86979 17.6198C7.76562 19.0156 8.46354 22.599 11.3698 22.599C14.5781 22.599 16.474 21.0677 16.8906 19.2031L20.9219 23.2344L22.3906 21.7656L3.24479 2.60937Z" fill="currentColor"/>
    </svg>
  );
};

export default ModeFanOffIcon;
