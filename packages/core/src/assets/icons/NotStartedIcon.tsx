import React from 'react';

export interface NotStartedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NotStartedIcon = ({ size, ...props }: NotStartedIconProps) => {
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
        d="M12.5 2.08337C6.75004 2.08337 2.08337 6.75004 2.08337 12.5C2.08337 18.25 6.75004 22.9167 12.5 22.9167C18.25 22.9167 22.9167 18.25 22.9167 12.5C22.9167 6.75004 18.25 2.08337 12.5 2.08337ZM11.4584 16.6667H9.37504V8.33337H11.4584V16.6667ZM12.5 16.6667V8.33337L17.7084 12.5L12.5 16.6667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NotStartedIcon;
