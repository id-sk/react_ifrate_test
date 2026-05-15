import React from 'react';

export interface InfoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InfoIcon = ({ size, ...props }: InfoIconProps) => {
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
        d="M12.4167 1.84991C6.66667 1.84991 2 6.51658 2 12.2666C2 18.0166 6.66667 22.6833 12.4167 22.6833C18.1667 22.6833 22.8333 18.0166 22.8333 12.2666C22.8333 6.51658 18.1667 1.84991 12.4167 1.84991ZM13.4583 17.4749H11.375V11.2249H13.4583V17.4749ZM13.4583 9.14158H11.375V7.05825H13.4583V9.14158Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default InfoIcon;
