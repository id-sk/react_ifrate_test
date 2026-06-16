import React from 'react';

export interface AccountBoxIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AccountBoxIcon = ({ size, ...props }: AccountBoxIconProps) => {
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
      
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM12.5 6.25C14.5104 6.25 16.1458 7.88542 16.1458 9.89583C16.1458 11.9062 14.5104 13.5417 12.5 13.5417C10.4896 13.5417 8.85417 11.9062 8.85417 9.89583C8.85417 7.88542 10.4896 6.25 12.5 6.25ZM19.7917 19.7917H5.20833V19.5521C5.20833 18.9062 5.5 18.3021 6 17.9062C7.78125 16.4792 10.0417 15.625 12.5 15.625C14.9583 15.625 17.2187 16.4792 19 17.9062C19.5 18.3021 19.7917 18.9167 19.7917 19.5521V19.7917Z" fill="currentColor"/>
    </svg>
  );
};

export default AccountBoxIcon;
