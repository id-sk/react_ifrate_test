import React from 'react';

export interface AddToPhotosIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddToPhotosIcon = ({ size, ...props }: AddToPhotosIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M4.16671 6.25016H2.08337V20.8335C2.08337 21.9793 3.02087 22.9168 4.16671 22.9168H18.75V20.8335H4.16671V6.25016ZM20.8334 2.0835H8.33337C7.18754 2.0835 6.25004 3.021 6.25004 4.16683V16.6668C6.25004 17.8127 7.18754 18.7502 8.33337 18.7502H20.8334C21.9792 18.7502 22.9167 17.8127 22.9167 16.6668V4.16683C22.9167 3.021 21.9792 2.0835 20.8334 2.0835ZM19.7917 11.4585H15.625V15.6252H13.5417V11.4585H9.37504V9.37516H13.5417V5.2085H15.625V9.37516H19.7917V11.4585Z" fill="currentColor"/>
    </svg>
  );
};

export default AddToPhotosIcon;
