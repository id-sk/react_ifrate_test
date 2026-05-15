import React from 'react';

export interface EmergencyShareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EmergencyShareIcon = ({ size, ...props }: EmergencyShareIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3239_33642)">
        <path
          d="M12.4999 9.375C9.21867 9.375 6.24992 11.8854 6.24992 15.7812C6.24992 18.375 8.33325 21.4479 12.4999 25C16.6666 21.4479 18.7499 18.375 18.7499 15.7812C18.7499 11.8854 15.7812 9.375 12.4999 9.375ZM12.4999 17.1875C11.6353 17.1875 10.9374 16.4896 10.9374 15.625C10.9374 14.7604 11.6353 14.0625 12.4999 14.0625C13.3645 14.0625 14.0624 14.7604 14.0624 15.625C14.0624 16.4896 13.3645 17.1875 12.4999 17.1875ZM12.4999 4.16667C14.5103 4.16667 16.3333 4.97917 17.6562 6.30208L16.1874 7.77083C15.2395 6.83333 13.9374 6.25 12.4999 6.25C11.0624 6.25 9.76034 6.83333 8.81242 7.77083L7.34367 6.30208C8.66659 4.97917 10.4895 4.16667 12.4999 4.16667ZM20.6041 3.36458L19.1353 4.83333C17.4374 3.13542 15.0937 2.08333 12.5103 2.08333C9.927 2.08333 7.57284 3.13542 5.87492 4.82292L4.39575 3.35417C6.47909 1.28125 9.34367 0 12.5103 0C15.677 0 18.5312 1.28125 20.6041 3.36458Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3239_33642">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EmergencyShareIcon;
