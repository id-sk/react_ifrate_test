import React from 'react';

export interface ArrowCircleRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowCircleRightIcon = ({ size, ...props }: ArrowCircleRightIconProps) => {
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
      
<path d="M22.9166 12.5C22.9166 6.74998 18.2499 2.08331 12.4999 2.08331C6.74992 2.08331 2.08325 6.74998 2.08325 12.5C2.08325 18.25 6.74992 22.9166 12.4999 22.9166C18.2499 22.9166 22.9166 18.25 22.9166 12.5ZM12.4999 13.5416H8.33325V11.4583H12.4999V8.33331L16.6666 12.5L12.4999 16.6666V13.5416Z" fill="currentColor"/>
    </svg>
  );
};

export default ArrowCircleRightIcon;
