import React from 'react';

export interface BrowserUpdatedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BrowserUpdatedIcon = ({ size, ...props }: BrowserUpdatedIconProps) => {
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
        d="M22.9166 13.5417V16.6667C22.9166 17.8125 21.9791 18.75 20.8333 18.75H17.7083L18.7499 19.7917V21.875H6.24992V19.7917L7.29159 18.75H4.16659C3.02075 18.75 2.08325 17.8125 2.08325 16.6667V5.20833C2.08325 4.0625 3.02075 3.125 4.16659 3.125H12.4999V5.20833H4.16659V16.6667H20.8333V13.5417H22.9166ZM15.6249 15.625L10.4166 10.4167H14.5833V3.125H16.6666V10.4167H20.8333L15.6249 15.625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BrowserUpdatedIcon;
