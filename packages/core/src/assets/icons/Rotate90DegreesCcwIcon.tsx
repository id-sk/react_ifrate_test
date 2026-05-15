import React from 'react';

export interface Rotate90DegreesCcwIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Rotate90DegreesCcwIcon = ({ size, ...props }: Rotate90DegreesCcwIconProps) => {
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
        d="M8.2395 7.32292L1.4895 14.0833L8.24992 20.8333L15.0103 14.0833L8.2395 7.32292ZM4.43742 14.0833L8.24992 10.2708L12.052 14.0833L8.2395 17.8958L4.43742 14.0833ZM20.7603 7.5625C18.9374 5.72917 16.5312 4.8125 14.1353 4.8125V1.4375L9.71867 5.85417L14.1353 10.2708V6.89583C15.9999 6.89583 17.8645 7.60417 19.2916 9.03125C22.1353 11.875 22.1353 16.5 19.2916 19.3438C17.8645 20.7708 15.9999 21.4792 14.1353 21.4792C13.1249 21.4792 12.1145 21.2604 11.177 20.8437L9.62492 22.3958C11.0312 23.1667 12.5833 23.5625 14.1353 23.5625C16.5312 23.5625 18.9374 22.6458 20.7603 20.8125C24.427 17.1562 24.427 11.2188 20.7603 7.5625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Rotate90DegreesCcwIcon;
