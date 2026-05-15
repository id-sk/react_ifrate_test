import React from 'react';

export interface TornadoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TornadoIcon = ({ size, ...props }: TornadoIconProps) => {
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
        d="M20.9479 7.81234L23.9583 2.604H1.04163L4.05204 7.81234H20.9479Z"
        fill="currentColor"
      />
      <path d="M8.28121 15.104L12.5 22.3957L16.7187 15.104H8.28121Z" fill="currentColor" />
      <path
        d="M19.7395 9.89567H5.26038L7.07288 13.0207H17.927L19.7395 9.89567Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TornadoIcon;
