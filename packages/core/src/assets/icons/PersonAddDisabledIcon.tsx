import React from 'react';

export interface PersonAddDisabledIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PersonAddDisabledIcon = ({ size, ...props }: PersonAddDisabledIconProps) => {
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
        d="M16.1458 11.5625C18.4469 11.5625 20.3124 9.69702 20.3124 7.39583C20.3124 5.09465 18.4469 3.22917 16.1458 3.22917C13.8446 3.22917 11.9791 5.09465 11.9791 7.39583C11.9791 9.69702 13.8446 11.5625 16.1458 11.5625Z"
        fill="currentColor"
      />
      <path
        d="M24.4791 19.8958V17.8125C24.4791 15.4167 20.2083 13.9583 17.2916 13.75L23.5416 19.8958H24.4791ZM12.3958 14.1667C10.1041 14.7917 7.81242 16.0417 7.81242 17.8125V19.8958H18.1249L22.2916 24.0625L23.6458 22.7083L1.77075 0.9375L0.520752 2.29167L4.68742 6.45833V9.47917H1.56242V11.5625H4.68742V14.6875H6.77075V11.5625H9.79159L12.3958 14.1667ZM6.77075 9.47917V8.54167L7.70825 9.47917H6.77075Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PersonAddDisabledIcon;
