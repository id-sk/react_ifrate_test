import React from 'react';

export interface Brightness3IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Brightness3Icon = ({ size, ...props }: Brightness3IconProps) => {
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
      
<path d="M8.85425 2.0835C7.7605 2.0835 6.71883 2.25016 5.72925 2.56266C9.95842 3.88558 13.0209 7.8335 13.0209 12.5002C13.0209 17.1668 9.95842 21.1147 5.72925 22.4377C6.71883 22.7502 7.7605 22.9168 8.85425 22.9168C14.6042 22.9168 19.2709 18.2502 19.2709 12.5002C19.2709 6.75016 14.6042 2.0835 8.85425 2.0835Z" fill="currentColor"/>
    </svg>
  );
};

export default Brightness3Icon;
