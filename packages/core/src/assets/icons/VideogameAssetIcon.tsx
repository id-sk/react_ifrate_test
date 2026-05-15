import React from 'react';

export interface VideogameAssetIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VideogameAssetIcon = ({ size, ...props }: VideogameAssetIconProps) => {
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
        d="M21.8751 6.25H3.12508C1.97925 6.25 1.04175 7.1875 1.04175 8.33333V16.6667C1.04175 17.8125 1.97925 18.75 3.12508 18.75H21.8751C23.0209 18.75 23.9584 17.8125 23.9584 16.6667V8.33333C23.9584 7.1875 23.0209 6.25 21.8751 6.25ZM11.4584 13.5417H8.33341V16.6667H6.25008V13.5417H3.12508V11.4583H6.25008V8.33333H8.33341V11.4583H11.4584V13.5417ZM16.1459 15.625C15.2813 15.625 14.5834 14.9271 14.5834 14.0625C14.5834 13.1979 15.2813 12.5 16.1459 12.5C17.0105 12.5 17.7084 13.1979 17.7084 14.0625C17.7084 14.9271 17.0105 15.625 16.1459 15.625ZM20.3126 12.5C19.448 12.5 18.7501 11.8021 18.7501 10.9375C18.7501 10.0729 19.448 9.375 20.3126 9.375C21.1772 9.375 21.8751 10.0729 21.8751 10.9375C21.8751 11.8021 21.1772 12.5 20.3126 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VideogameAssetIcon;
