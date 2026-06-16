import React from 'react';

export interface ColorizeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ColorizeIcon = ({ size, ...props }: ColorizeIconProps) => {
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
      
<path d="M21.5722 5.86572L19.1347 3.42822C18.7284 3.02197 18.0722 3.02197 17.6659 3.42822L14.4159 6.67822L12.4055 4.68864L10.9368 6.15739L12.4159 7.63656L3.12427 16.9282V21.8761H8.07218L17.3639 12.5845L18.843 14.0636L20.3118 12.5949L18.3118 10.5949L21.5618 7.34489C21.9784 6.92822 21.9784 6.27197 21.5722 5.86572ZM7.2076 19.7928L5.2076 17.7928L13.6034 9.39697L15.6034 11.397L7.2076 19.7928Z" fill="currentColor"/>
    </svg>
  );
};

export default ColorizeIcon;
