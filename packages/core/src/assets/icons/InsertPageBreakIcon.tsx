import React from 'react';

export interface InsertPageBreakIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InsertPageBreakIcon = ({ size, ...props }: InsertPageBreakIconProps) => {
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
        d="M4.16675 20.8333C4.16675 21.9791 5.09383 22.9166 6.23966 22.9166H18.7501C19.8959 22.9166 20.8334 21.9791 20.8334 20.8333V17.7083H4.16675V20.8333Z"
        fill="currentColor"
      />
      <path
        d="M20.8334 8.33325L14.5834 2.08325H6.25008C5.10425 2.08325 4.17716 3.02075 4.17716 4.16659V11.4583H20.8334V8.33325ZM13.5417 9.37492V3.64575L19.2709 9.37492H13.5417Z"
        fill="currentColor"
      />
      <path d="M15.6251 13.5416H9.37508V15.6249H15.6251V13.5416Z" fill="currentColor" />
      <path d="M23.9584 13.5416H17.7084V15.6249H23.9584V13.5416Z" fill="currentColor" />
      <path d="M7.29175 13.5416H1.04175V15.6249H7.29175V13.5416Z" fill="currentColor" />
    </svg>
  );
};

export default InsertPageBreakIcon;
