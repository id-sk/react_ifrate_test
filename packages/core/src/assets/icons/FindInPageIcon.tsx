import React from 'react';

export interface FindInPageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FindInPageIcon = ({ size, ...props }: FindInPageIconProps) => {
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
        d="M20.8333 20.4062V8.33331L14.5833 2.08331H6.24996C5.10413 2.08331 4.17704 3.02081 4.17704 4.16665L4.16663 20.8333C4.16663 21.9791 5.09371 22.9166 6.23954 22.9166H18.75C19.2187 22.9166 19.6354 22.7604 19.9895 22.5L15.375 17.8854C14.5416 18.4271 13.5625 18.75 12.5 18.75C9.62496 18.75 7.29163 16.4166 7.29163 13.5416C7.29163 10.6666 9.62496 8.33331 12.5 8.33331C15.375 8.33331 17.7083 10.6666 17.7083 13.5416C17.7083 14.6041 17.3854 15.5833 16.8437 16.4062L20.8333 20.4062ZM9.37496 13.5416C9.37496 15.2708 10.7708 16.6666 12.5 16.6666C14.2291 16.6666 15.625 15.2708 15.625 13.5416C15.625 11.8125 14.2291 10.4166 12.5 10.4166C10.7708 10.4166 9.37496 11.8125 9.37496 13.5416Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FindInPageIcon;
