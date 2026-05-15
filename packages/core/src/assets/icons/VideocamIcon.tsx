import React from 'react';

export interface VideocamIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VideocamIcon = ({ size, ...props }: VideocamIconProps) => {
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
        d="M17.7083 10.9375V7.29167C17.7083 6.71875 17.2396 6.25 16.6667 6.25H4.16667C3.59375 6.25 3.125 6.71875 3.125 7.29167V17.7083C3.125 18.2812 3.59375 18.75 4.16667 18.75H16.6667C17.2396 18.75 17.7083 18.2812 17.7083 17.7083V14.0625L21.875 18.2292V6.77083L17.7083 10.9375Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VideocamIcon;
