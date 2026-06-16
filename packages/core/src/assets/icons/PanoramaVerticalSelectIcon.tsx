import React from 'react';

export interface PanoramaVerticalSelectIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PanoramaVerticalSelectIcon = ({ size, ...props }: PanoramaVerticalSelectIconProps) => {
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
      
<path d="M20.7655 22.0002C19.6197 18.9377 19.0572 15.7189 19.0572 12.5002C19.0572 9.28141 19.6301 6.06266 20.7655 3.00016C20.8176 2.88558 20.8385 2.771 20.8385 2.67725C20.8385 2.32308 20.5885 2.0835 20.1718 2.0835H4.81763C4.40096 2.0835 4.16138 2.32308 4.16138 2.67725C4.16138 2.78141 4.18221 2.88558 4.22388 3.00016C5.38013 6.06266 5.94263 9.28141 5.94263 12.5002C5.94263 15.7189 5.36971 18.9377 4.23429 22.0002C4.18221 22.1147 4.16138 22.2293 4.16138 22.3231C4.16138 22.6668 4.40096 22.9168 4.81763 22.9168H20.1822C20.5885 22.9168 20.8385 22.6668 20.8385 22.3231C20.8385 22.2189 20.8176 22.1147 20.7655 22.0002Z" fill="currentColor"/>
    </svg>
  );
};

export default PanoramaVerticalSelectIcon;
