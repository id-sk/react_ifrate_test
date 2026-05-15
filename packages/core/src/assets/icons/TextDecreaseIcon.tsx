import React from 'react';

export interface TextDecreaseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TextDecreaseIcon = ({ size, ...props }: TextDecreaseIconProps) => {
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
        d="M1.0365 19.7916H3.55733L4.88025 16.0624H10.7657L12.0782 19.7916H14.599L9.11983 5.20825H6.51567L1.0365 19.7916ZM5.64067 13.9478L7.75525 7.91658H7.88025L9.99483 13.9478H5.64067ZM23.9636 11.4583V13.5416H15.6302V11.4583H23.9636Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TextDecreaseIcon;
