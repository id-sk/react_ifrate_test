import React from 'react';

export interface RestorePageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RestorePageIcon = ({ size, ...props }: RestorePageIconProps) => {
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
        d="M14.5834 2.08337H6.25008C5.10425 2.08337 4.17716 3.02087 4.17716 4.16671L4.16675 20.8334C4.16675 21.9792 5.09383 22.9167 6.23966 22.9167H18.7501C19.8959 22.9167 20.8334 21.9792 20.8334 20.8334V8.33337L14.5834 2.08337ZM12.5001 18.75C10.3647 18.75 8.53133 17.4584 7.72925 15.625H9.5105C10.1667 16.5625 11.2605 17.1875 12.5001 17.1875C14.5105 17.1875 16.1459 15.5521 16.1459 13.5417C16.1459 11.5313 14.5105 9.89587 12.5001 9.89587C11.0938 9.89587 9.87508 10.7084 9.27091 11.875L10.9376 13.5417H6.77091V9.37504L8.12508 10.7292C9.05216 9.29171 10.6563 8.33337 12.5001 8.33337C15.3751 8.33337 17.7084 10.6667 17.7084 13.5417C17.7084 16.4167 15.3751 18.75 12.5001 18.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RestorePageIcon;
