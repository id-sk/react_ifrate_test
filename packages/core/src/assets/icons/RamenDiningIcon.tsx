import React from 'react';

export interface RamenDiningIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RamenDiningIcon = ({ size, ...props }: RamenDiningIconProps) => {
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
        d="M9.37492 6.25016H8.33325V4.84391L9.37492 4.71891V6.25016ZM9.37492 12.5002H8.33325V7.29183H9.37492V12.5002ZM6.24992 7.29183H7.29159V12.5002H6.24992V7.29183ZM6.24992 5.0835L7.29159 4.9585V6.25016H6.24992V5.0835ZM22.9166 3.12516V2.0835L5.20825 4.16683V12.5002H2.08325C2.08325 16.3439 4.65617 19.646 8.33325 21.0939V22.9168H16.6666V21.0939C20.3437 19.646 22.9166 16.3439 22.9166 12.5002H10.4166V7.29183H22.9166V6.25016H10.4166V4.59391L22.9166 3.12516Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RamenDiningIcon;
