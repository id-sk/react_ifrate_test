import React from 'react';

export interface BorderColorIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BorderColorIcon = ({ size, ...props }: BorderColorIconProps) => {
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
        d="M22.9166 23.9596H2.08325V19.7929H22.9166V23.9596ZM13.6041 4.3658L17.5103 8.27205L8.07284 17.7096H4.16659V13.8033L13.6041 4.3658ZM18.6249 7.15747L14.7187 3.25122L16.6249 1.34497C17.0312 0.938721 17.6874 0.938721 18.0937 1.34497L20.5312 3.78247C20.9374 4.18872 20.9374 4.84497 20.5312 5.25122L18.6249 7.15747Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BorderColorIcon;
