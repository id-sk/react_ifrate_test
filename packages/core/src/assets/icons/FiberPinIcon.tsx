import React from 'react';

export interface FiberPinIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FiberPinIcon = ({ size, ...props }: FiberPinIconProps) => {
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
        d="M5.72909 10.9375H7.81242V11.9791H5.72909V10.9375ZM20.8333 4.16663H4.16659C3.01034 4.16663 2.09367 5.09371 2.09367 6.24996L2.08325 18.75C2.08325 19.9062 3.01034 20.8333 4.16659 20.8333H20.8333C21.9895 20.8333 22.9166 19.9062 22.9166 18.75V6.24996C22.9166 5.09371 21.9895 4.16663 20.8333 4.16663ZM9.37492 11.9791C9.37492 12.8645 8.69784 13.5416 7.81242 13.5416H5.72909V15.625H4.16659V9.37496H7.81242C8.69784 9.37496 9.37492 10.052 9.37492 10.9375V11.9791ZM13.0208 15.625H11.4583V9.37496H13.0208V15.625ZM20.8333 15.625H19.5833L16.927 11.9791V15.625H15.6249V9.37496H16.927L19.5312 13.0208V9.37496H20.8333V15.625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FiberPinIcon;
