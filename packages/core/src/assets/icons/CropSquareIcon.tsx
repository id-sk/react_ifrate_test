import React from 'react';

export interface CropSquareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CropSquareIcon = ({ size, ...props }: CropSquareIconProps) => {
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
      
<path d="M18.75 4.1665H6.24996C5.10413 4.1665 4.16663 5.104 4.16663 6.24984V18.7498C4.16663 19.8957 5.10413 20.8332 6.24996 20.8332H18.75C19.8958 20.8332 20.8333 19.8957 20.8333 18.7498V6.24984C20.8333 5.104 19.8958 4.1665 18.75 4.1665ZM18.75 18.7498H6.24996V6.24984H18.75V18.7498Z" fill="currentColor"/>
    </svg>
  );
};

export default CropSquareIcon;
