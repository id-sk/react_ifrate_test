import React from 'react';

export interface TurnSharpLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TurnSharpLeftIcon = ({ size, ...props }: TurnSharpLeftIconProps) => {
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
      
<path d="M7.8125 7.11458L6.15625 8.76042L4.6875 7.29167L8.85417 3.125L13.0208 7.29167L11.5521 8.76042L9.89583 7.11458V13.5417H18.2292C19.375 13.5417 20.3125 14.4792 20.3125 15.625V21.875H18.2292V15.625H9.89583C8.75 15.625 7.8125 14.6875 7.8125 13.5417V7.11458Z" fill="currentColor"/>
    </svg>
  );
};

export default TurnSharpLeftIcon;
