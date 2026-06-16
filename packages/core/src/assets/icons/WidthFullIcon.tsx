import React from 'react';

export interface WidthFullIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WidthFullIcon = ({ size, ...props }: WidthFullIconProps) => {
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
      
<path d="M20.8333 4.16663H4.16659C3.02075 4.16663 2.08325 5.10413 2.08325 6.24996V18.75C2.08325 19.8958 3.02075 20.8333 4.16659 20.8333H20.8333C21.9791 20.8333 22.9166 19.8958 22.9166 18.75V6.24996C22.9166 5.10413 21.9791 4.16663 20.8333 4.16663ZM4.16659 6.24996H5.20825V18.75H4.16659V6.24996ZM20.8333 18.75H19.7916V6.24996H20.8333V18.75Z" fill="currentColor"/>
    </svg>
  );
};

export default WidthFullIcon;
