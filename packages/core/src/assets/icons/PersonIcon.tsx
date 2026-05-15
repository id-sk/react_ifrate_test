import React from 'react';

export interface PersonIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PersonIcon = ({ size, ...props }: PersonIconProps) => {
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
        d="M12.5001 12.4998C14.8022 12.4998 16.6667 10.6353 16.6667 8.33317C16.6667 6.03109 14.8022 4.1665 12.5001 4.1665C10.198 4.1665 8.33341 6.03109 8.33341 8.33317C8.33341 10.6353 10.198 12.4998 12.5001 12.4998ZM12.5001 14.5832C9.71883 14.5832 4.16675 15.979 4.16675 18.7498V20.8332H20.8334V18.7498C20.8334 15.979 15.2813 14.5832 12.5001 14.5832Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PersonIcon;
