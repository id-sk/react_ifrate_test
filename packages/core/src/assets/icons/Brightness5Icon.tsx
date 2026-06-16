import React from 'react';

export interface Brightness5IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Brightness5Icon = ({ size, ...props }: Brightness5IconProps) => {
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
      
<path d="M20.8333 15.9479L24.2812 12.5L20.8333 9.05208V4.16667H15.9479L12.5 0.71875L9.05208 4.16667H4.16667V9.05208L0.71875 12.5L4.16667 15.9479V20.8333H9.05208L12.5 24.2812L15.9479 20.8333H20.8333V15.9479ZM12.5 18.75C9.05208 18.75 6.25 15.9479 6.25 12.5C6.25 9.05208 9.05208 6.25 12.5 6.25C15.9479 6.25 18.75 9.05208 18.75 12.5C18.75 15.9479 15.9479 18.75 12.5 18.75Z" fill="currentColor"/>
    </svg>
  );
};

export default Brightness5Icon;
