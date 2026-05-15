import React from 'react';

export interface FormatColorFillIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatColorFillIcon = ({ size, ...props }: FormatColorFillIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3239_31473)">
        <path
          d="M17.2499 9.3125L7.93742 0L6.46867 1.46875L8.94784 3.94792L3.58325 9.3125C2.96867 9.92708 2.96867 10.9167 3.58325 11.5208L9.31242 17.25C9.6145 17.5521 10.0208 17.7083 10.4166 17.7083C10.8124 17.7083 11.2187 17.5521 11.5208 17.25L17.2499 11.5208C17.8645 10.9167 17.8645 9.92708 17.2499 9.3125ZM5.427 10.4167L10.4166 5.42708L15.4062 10.4167H5.427ZM19.7916 11.9792C19.7916 11.9792 17.7083 14.2396 17.7083 15.625C17.7083 16.7708 18.6458 17.7083 19.7916 17.7083C20.9374 17.7083 21.8749 16.7708 21.8749 15.625C21.8749 14.2396 19.7916 11.9792 19.7916 11.9792ZM2.08325 20.8333H22.9166V25H2.08325V20.8333Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3239_31473">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FormatColorFillIcon;
