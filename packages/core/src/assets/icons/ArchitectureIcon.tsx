import React from 'react';

export interface ArchitectureIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArchitectureIcon = ({ size, ...props }: ArchitectureIconProps) => {
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
        d="M6.61987 19.5625L6.88029 21.875L8.56779 20.2708L11.4532 12.3542C10.7449 12.1771 10.1199 11.8229 9.60946 11.3333L6.61987 19.5625Z"
        fill="currentColor"
      />
      <path
        d="M15.3803 11.3333C14.8699 11.8229 14.2345 12.1771 13.5365 12.3542L16.422 20.2708L18.1095 21.875L18.3803 19.5625L15.3803 11.3333Z"
        fill="currentColor"
      />
      <path
        d="M15.6199 8.33333C15.6199 6.97917 14.7449 5.83333 13.5365 5.39583V3.125H11.4532V5.39583C10.2449 5.83333 9.36987 6.97917 9.36987 8.33333C9.36987 10.0625 10.7657 11.4583 12.4949 11.4583C14.224 11.4583 15.6199 10.0625 15.6199 8.33333ZM12.4949 9.375C11.922 9.375 11.4532 8.90625 11.4532 8.33333C11.4532 7.76042 11.922 7.29167 12.4949 7.29167C13.0678 7.29167 13.5365 7.76042 13.5365 8.33333C13.5365 8.90625 13.0678 9.375 12.4949 9.375Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArchitectureIcon;
