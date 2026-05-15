import React from 'react';

export interface ResetTvIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ResetTvIcon = ({ size, ...props }: ResetTvIconProps) => {
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
        d="M21.8751 10.4167H13.5313V7.29167L9.37508 11.4583L13.5313 15.625V12.5H21.8751V17.7083H3.12508V5.20833H21.8751V8.33333H23.9584V5.20833C23.9584 4.0625 23.0209 3.125 21.8751 3.125H3.12508C1.97925 3.125 1.04175 4.0625 1.04175 5.20833V17.7083C1.04175 18.8542 1.97925 19.7917 3.12508 19.7917H8.33341V21.875H16.6667V19.7917H21.8751C23.0209 19.7917 23.948 18.8542 23.948 17.7083V12.5H23.9584C23.9584 11.3542 23.0209 10.4167 21.8751 10.4167Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ResetTvIcon;
