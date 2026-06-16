import React from 'react';

export interface FolderOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FolderOffIcon = ({ size, ...props }: FolderOffIconProps) => {
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
      
<path d="M21.5157 5.51563H13.1824L11.099 3.43229H7.79696L23.349 18.9844C23.5053 18.6927 23.599 18.3698 23.599 18.0156V7.59896C23.599 6.45313 22.6615 5.51563 21.5157 5.51563Z" fill="currentColor"/>
<path d="M2.86987 1.45312L1.40112 2.92188L3.02612 4.54688C2.86987 4.83854 2.77612 5.16146 2.77612 5.51563L2.76571 18.0156C2.76571 19.1615 3.70321 20.099 4.84904 20.099H18.5678L22.0157 23.5469L23.4845 22.0781L2.86987 1.45312Z" fill="currentColor"/>
    </svg>
  );
};

export default FolderOffIcon;
