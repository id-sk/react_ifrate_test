import React from 'react';

export interface QuickreplyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const QuickreplyIcon = ({ size, ...props }: QuickreplyIconProps) => {
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
      
<path d="M22.6563 3.64583C22.6563 2.5 21.7188 1.5625 20.573 1.5625H3.90633C2.7605 1.5625 1.83341 2.5 1.83341 3.64583L1.823 22.3958L5.98966 18.2292H15.3647V9.89583H22.6563V3.64583Z" fill="currentColor"/>
<path d="M23.1772 16.1458H20.8855L22.6563 11.9792H17.448V18.2292H19.5313V23.4375L23.1772 16.1458Z" fill="currentColor"/>
    </svg>
  );
};

export default QuickreplyIcon;
