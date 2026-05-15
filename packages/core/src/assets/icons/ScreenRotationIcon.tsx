import React from 'react';

export interface ScreenRotationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ScreenRotationIcon = ({ size, ...props }: ScreenRotationIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3235_29968)">
        <path
          d="M17.1666 2.625C20.5728 4.23958 23.0103 7.54167 23.3853 11.4583H24.9478C24.4166 5.04167 19.052 0 12.4999 0L11.8124 0.03125L15.7812 4L17.1666 2.625ZM10.6562 1.82292C10.0416 1.20833 9.052 1.20833 8.44783 1.82292L1.82284 8.44792C1.20825 9.0625 1.20825 10.0521 1.82284 10.6562L14.3437 23.1771C14.9583 23.7917 15.9478 23.7917 16.552 23.1771L23.177 16.5521C23.7916 15.9375 23.7916 14.9479 23.177 14.3438L10.6562 1.82292ZM15.4478 22.0729L2.927 9.55208L9.552 2.92708L22.0728 15.4479L15.4478 22.0729ZM7.83325 22.375C4.427 20.7708 1.9895 17.4583 1.6145 13.5417H0.052002C0.583252 19.9583 5.94784 25 12.4999 25L13.1874 24.9687L9.21867 21L7.83325 22.375Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3235_29968">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ScreenRotationIcon;
