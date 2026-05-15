import React from 'react';

export interface QueuePlayNextIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const QueuePlayNextIcon = ({ size, ...props }: QueuePlayNextIconProps) => {
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
        d="M21.3542 2.34375H2.60421C1.44796 2.34375 0.520874 3.27083 0.520874 4.42708V16.9271C0.520874 18.0729 1.44796 19.0104 2.60421 19.0104H7.81254V21.0938H16.1459V19.0104H18.2292V16.9271H2.60421V4.42708H21.3542V12.7604H23.4375V4.42708C23.4375 3.27083 22.5 2.34375 21.3542 2.34375ZM13.0209 9.63542V6.51042H10.9375V9.63542H7.81254V11.7188H10.9375V14.8438H13.0209V11.7188H16.1459V9.63542H13.0209ZM24.4792 17.9687L19.7917 22.6562L18.2292 21.0938L21.3542 17.9687L18.2292 14.8438L19.7917 13.2812L24.4792 17.9687Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default QueuePlayNextIcon;
