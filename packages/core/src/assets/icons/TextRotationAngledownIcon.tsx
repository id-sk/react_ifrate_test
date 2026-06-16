import React from 'react';

export interface TextRotationAngledownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TextRotationAngledownIcon = ({ size, ...props }: TextRotationAngledownIconProps) => {
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
      
<path d="M21.25 4.67192L20.1458 3.56775L8.54167 8.17192L10.0833 9.71358L12.3646 8.75525L16.0521 12.4427L15.0938 14.724L16.6354 16.2657L21.25 4.67192ZM14.1563 7.90108L19.2292 5.57817L16.9062 10.6511L14.1563 7.90108ZM15.9063 21.4323V17.0157L14.4375 18.4844L5.22917 9.27608L3.75 10.7552L12.9583 19.9636L11.4896 21.4323H15.9063Z" fill="currentColor"/>
    </svg>
  );
};

export default TextRotationAngledownIcon;
