import React from 'react';

export interface ExposureNeg1IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ExposureNeg1Icon = ({ size, ...props }: ExposureNeg1IconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.6875 11.979V14.0623H13.0208V11.979H4.6875ZM20.3125 19.2707H18.2292V8.20817L15.1042 9.27067V7.49984L20 5.729H20.3125V19.2707Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ExposureNeg1Icon;
