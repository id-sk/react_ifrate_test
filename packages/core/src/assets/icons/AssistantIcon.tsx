import React from 'react';

export interface AssistantIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AssistantIcon = ({ size, ...props }: AssistantIconProps) => {
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
        d="M19.7917 1.5625H5.20833C4.0625 1.5625 3.125 2.5 3.125 3.64583V18.2292C3.125 19.375 4.0625 20.3125 5.20833 20.3125H9.375L12.5 23.4375L15.625 20.3125H19.7917C20.9375 20.3125 21.875 19.375 21.875 18.2292V3.64583C21.875 2.5 20.9375 1.5625 19.7917 1.5625ZM14.4583 12.8958L12.5 17.1875L10.5417 12.8958L6.25 10.9375L10.5417 8.97917L12.5 4.6875L14.4583 8.97917L18.75 10.9375L14.4583 12.8958Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AssistantIcon;
