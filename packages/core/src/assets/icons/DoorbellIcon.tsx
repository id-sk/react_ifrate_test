import React from 'react';

export interface DoorbellIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoorbellIcon = ({ size, ...props }: DoorbellIconProps) => {
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
        d="M12.5001 3.125L4.16675 9.375V21.875H20.8334V9.375L12.5001 3.125ZM12.5001 18.2292C11.9272 18.2292 11.4584 17.7604 11.4584 17.1875H13.5417C13.5417 17.7604 13.073 18.2292 12.5001 18.2292ZM16.6667 16.6667H8.33341V15.625H9.37508V13.1875C9.37508 11.5833 10.2292 10.25 11.7188 9.89583V9.63542C11.7188 9.20833 12.073 8.85417 12.5001 8.85417C12.9272 8.85417 13.2813 9.20833 13.2813 9.63542V9.89583C14.7813 10.25 15.6251 11.5833 15.6251 13.1875V15.625H16.6667V16.6667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DoorbellIcon;
