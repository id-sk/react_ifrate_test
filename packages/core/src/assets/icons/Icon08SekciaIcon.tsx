import React from 'react';

export interface Icon08SekciaIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon08SekciaIcon = ({ size, ...props }: Icon08SekciaIconProps) => {
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
        d="M19.8707 6.81214L17.6616 9.02277L19.1353 10.4955L21.3444 8.28485L19.8707 6.81214Z"
        fill="currentColor"
      />
      <path d="M22.9166 18.7498H2.08325V20.8332H22.9166V18.7498Z" fill="currentColor" />
      <path d="M13.5416 4.1665H11.4583V7.2915H13.5416V4.1665Z" fill="currentColor" />
      <path
        d="M5.16319 6.78175L3.69006 8.25488L5.89975 10.4646L7.37288 8.99144L5.16319 6.78175Z"
        fill="currentColor"
      />
      <path
        d="M5.20825 16.6665H19.7916C19.7916 12.6353 16.5312 9.37484 12.4999 9.37484C8.46867 9.37484 5.20825 12.6353 5.20825 16.6665Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon08SekciaIcon;
