import React from 'react';

export interface RequestPageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RequestPageIcon = ({ size, ...props }: RequestPageIconProps) => {
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
      
<path d="M14.5834 2.08337H6.25008C5.10425 2.08337 4.16675 3.02087 4.16675 4.16671V20.8334C4.16675 21.9792 5.10425 22.9167 6.25008 22.9167H18.7501C19.8959 22.9167 20.8334 21.9792 20.8334 20.8334V8.33337L14.5834 2.08337ZM15.6251 11.4584H11.4584V12.5H14.5834C15.1563 12.5 15.6251 12.9688 15.6251 13.5417V16.6667C15.6251 17.2396 15.1563 17.7084 14.5834 17.7084H13.5417V18.75H11.4584V17.7084H9.37508V15.625H13.5417V14.5834H10.4167C9.84383 14.5834 9.37508 14.1146 9.37508 13.5417V10.4167C9.37508 9.84379 9.84383 9.37504 10.4167 9.37504H11.4584V8.33337H13.5417V9.37504H15.6251V11.4584Z" fill="currentColor"/>
    </svg>
  );
};

export default RequestPageIcon;
