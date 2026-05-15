import React from 'react';

export interface PersonPinCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PersonPinCircleIcon = ({ size, ...props }: PersonPinCircleIconProps) => {
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
        d="M12.4999 2.0835C8.47909 2.0835 5.20825 5.35433 5.20825 9.37516C5.20825 14.8439 12.4999 22.9168 12.4999 22.9168C12.4999 22.9168 19.7916 14.8439 19.7916 9.37516C19.7916 5.35433 16.5208 2.0835 12.4999 2.0835ZM12.4999 4.16683C13.6458 4.16683 14.5833 5.10433 14.5833 6.25016C14.5833 7.40641 13.6458 8.3335 12.4999 8.3335C11.3541 8.3335 10.4166 7.40641 10.4166 6.25016C10.4166 5.10433 11.3541 4.16683 12.4999 4.16683ZM12.4999 14.5835C10.7603 14.5835 9.22908 13.6981 8.33325 12.3439C8.35409 10.9689 11.1145 10.2085 12.4999 10.2085C13.8853 10.2085 16.6458 10.9689 16.6666 12.3439C15.7708 13.6981 14.2395 14.5835 12.4999 14.5835Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PersonPinCircleIcon;
