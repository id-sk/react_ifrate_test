import React from 'react';

export interface DateRangeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DateRangeIcon = ({ size, ...props }: DateRangeIconProps) => {
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
        d="M9.375 11.4583H7.29167V13.5416H9.375V11.4583ZM13.5417 11.4583H11.4583V13.5416H13.5417V11.4583ZM17.7083 11.4583H15.625V13.5416H17.7083V11.4583ZM19.7917 4.16665H18.75V2.08331H16.6667V4.16665H8.33333V2.08331H6.25V4.16665H5.20833C4.05208 4.16665 3.13542 5.10415 3.13542 6.24998L3.125 20.8333C3.125 21.9791 4.05208 22.9166 5.20833 22.9166H19.7917C20.9375 22.9166 21.875 21.9791 21.875 20.8333V6.24998C21.875 5.10415 20.9375 4.16665 19.7917 4.16665ZM19.7917 20.8333H5.20833V9.37498H19.7917V20.8333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DateRangeIcon;
