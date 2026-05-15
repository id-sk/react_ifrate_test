import React from 'react';

export interface BuildCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BuildCircleIcon = ({ size, ...props }: BuildCircleIconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4999 2.08331C6.74992 2.08331 2.08325 6.74998 2.08325 12.5C2.08325 18.25 6.74992 22.9166 12.4999 22.9166C18.2499 22.9166 22.9166 18.25 22.9166 12.5C22.9166 6.74998 18.2499 2.08331 12.4999 2.08331ZM17.6041 16.1354L16.1458 17.5937C15.9374 17.8021 15.6145 17.8021 15.4062 17.5937L11.8541 14.0416C10.5833 14.4896 9.10409 14.2187 8.08325 13.1979C6.927 12.0416 6.72909 10.2916 7.46867 8.92706L9.91659 11.375L11.3853 9.90623L8.93742 7.46873C10.3124 6.72915 12.052 6.92706 13.2083 8.08331C14.2291 9.10415 14.4999 10.5833 14.052 11.8541L17.6041 15.4062C17.802 15.6041 17.802 15.9375 17.6041 16.1354Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BuildCircleIcon;
