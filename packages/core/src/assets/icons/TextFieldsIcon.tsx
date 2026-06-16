import React from 'react';

export interface TextFieldsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TextFieldsIcon = ({ size, ...props }: TextFieldsIconProps) => {
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
      
<path d="M2.60413 4.6875V7.8125H7.81246V20.3125H10.9375V7.8125H16.1458V4.6875H2.60413ZM22.3958 9.89583H13.0208V13.0208H16.1458V20.3125H19.2708V13.0208H22.3958V9.89583Z" fill="currentColor"/>
    </svg>
  );
};

export default TextFieldsIcon;
