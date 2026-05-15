import React from 'react';

export interface FlashOnIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FlashOnIcon = ({ size, ...props }: FlashOnIconProps) => {
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
        d="M7.29175 2.0835V13.5418H10.4167V22.9168L17.7084 10.4168H13.5417L17.7084 2.0835H7.29175Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FlashOnIcon;
