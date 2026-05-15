import React from 'react';

export interface RemoveRoadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RemoveRoadIcon = ({ size, ...props }: RemoveRoadIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.5312 3.125H17.4478V12.5H19.5312V3.125Z" fill="currentColor" />
      <path d="M4.94784 3.125H2.8645V19.7917H4.94784V3.125Z" fill="currentColor" />
      <path d="M12.2395 3.125H10.1562V7.29167H12.2395V3.125Z" fill="currentColor" />
      <path d="M12.2395 9.375H10.1562V13.5417H12.2395V9.375Z" fill="currentColor" />
      <path d="M12.2395 15.625H10.1562V19.7917H12.2395V15.625Z" fill="currentColor" />
      <path
        d="M22.1353 16.0521L20.6666 14.5833L18.4895 16.7604L16.3124 14.5833L14.8437 16.0521L17.0208 18.2292L14.8437 20.4062L16.3124 21.875L18.4895 19.6979L20.6666 21.875L22.1353 20.4062L19.9583 18.2292L22.1353 16.0521Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RemoveRoadIcon;
