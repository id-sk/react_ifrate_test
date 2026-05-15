import React from 'react';

export interface AllOutIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AllOutIcon = ({ size, ...props }: AllOutIconProps) => {
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
        d="M16.6667 4.16669L20.8334 8.33335V4.16669H16.6667ZM20.8334 16.6667L16.6667 20.8334H20.8334V16.6667ZM8.33342 20.8334L4.16675 16.6667V20.8334H8.33342ZM4.16675 8.33335L8.33342 4.16669H4.16675V8.33335ZM17.6563 7.34377C14.8126 4.50002 10.1876 4.50002 7.34383 7.34377C4.50008 10.1875 4.50008 14.8125 7.34383 17.6563C10.1876 20.5 14.8126 20.5 17.6563 17.6563C20.5001 14.8125 20.5001 10.1979 17.6563 7.34377ZM16.5105 16.5104C14.2917 18.7292 10.7084 18.7292 8.48966 16.5104C6.27091 14.2917 6.27091 10.7084 8.48966 8.4896C10.7084 6.27085 14.2917 6.27085 16.5105 8.4896C18.7292 10.7084 18.7292 14.2917 16.5105 16.5104Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AllOutIcon;
