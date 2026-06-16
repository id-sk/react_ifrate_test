import React from 'react';

export interface Inventory2IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Inventory2Icon = ({ size, ...props }: Inventory2IconProps) => {
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
      
<path d="M20.8333 2.08325H4.16659C3.12492 2.08325 2.08325 3.02075 2.08325 4.16659V7.302C2.08325 8.052 2.53117 8.69784 3.12492 9.06242V20.8333C3.12492 21.9791 4.27075 22.9166 5.20825 22.9166H19.7916C20.7291 22.9166 21.8749 21.9791 21.8749 20.8333V9.06242C22.4687 8.69784 22.9166 8.052 22.9166 7.302V4.16659C22.9166 3.02075 21.8749 2.08325 20.8333 2.08325ZM15.6249 14.5833H9.37492V12.4999H15.6249V14.5833ZM20.8333 7.29159H4.16659V4.16659H20.8333V7.29159Z" fill="currentColor"/>
    </svg>
  );
};

export default Inventory2Icon;
