import React from 'react';

export interface LibraryBooksIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LibraryBooksIcon = ({ size, ...props }: LibraryBooksIconProps) => {
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
        d="M4.16671 6.25004H2.08337V20.8334C2.08337 21.9792 3.02087 22.9167 4.16671 22.9167H18.75V20.8334H4.16671V6.25004ZM20.8334 2.08337H8.33337C7.18754 2.08337 6.25004 3.02087 6.25004 4.16671V16.6667C6.25004 17.8125 7.18754 18.75 8.33337 18.75H20.8334C21.9792 18.75 22.9167 17.8125 22.9167 16.6667V4.16671C22.9167 3.02087 21.9792 2.08337 20.8334 2.08337ZM19.7917 11.4584H9.37504V9.37504H19.7917V11.4584ZM15.625 15.625H9.37504V13.5417H15.625V15.625ZM19.7917 7.29171H9.37504V5.20837H19.7917V7.29171Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LibraryBooksIcon;
