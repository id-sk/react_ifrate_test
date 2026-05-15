import React from 'react';

export interface UpcomingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UpcomingIcon = ({ size, ...props }: UpcomingIconProps) => {
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
        d="M22.0416 7.5625L20.5728 6.09375L16.8645 9.79167L18.3333 11.2604C18.3333 11.2604 21.927 7.59375 22.0416 7.5625Z"
        fill="currentColor"
      />
      <path d="M13.5416 3.125H11.4583V8.33333H13.5416V3.125Z" fill="currentColor" />
      <path
        d="M6.66659 11.2604L8.13534 9.79167L4.43742 6.08333L2.95825 7.5625C3.07284 7.59375 6.66659 11.2604 6.66659 11.2604Z"
        fill="currentColor"
      />
      <path
        d="M20.8333 12.5H15.6249C15.6249 14.2292 14.2291 15.625 12.4999 15.625C10.7708 15.625 9.37492 14.2292 9.37492 12.5H4.16659C3.02075 12.5 2.08325 13.4375 2.08325 14.5833V19.7917C2.08325 20.9375 3.02075 21.875 4.16659 21.875H20.8333C21.9791 21.875 22.9166 20.9375 22.9166 19.7917V14.5833C22.9166 13.4375 21.9791 12.5 20.8333 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UpcomingIcon;
