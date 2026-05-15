import React from 'react';

export interface GMobiledataIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GMobiledataIcon = ({ size, ...props }: GMobiledataIconProps) => {
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
        d="M13.0208 11.4584V13.5417H15.1042V15.6251H9.89583V9.37508H17.1875C17.1875 8.22925 16.25 7.29175 15.1042 7.29175H9.89583C8.75 7.29175 7.8125 8.22925 7.8125 9.37508V15.6251C7.8125 16.7709 8.75 17.7084 9.89583 17.7084H15.1042C16.25 17.7084 17.1875 16.7709 17.1875 15.6251V11.4584H13.0208Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GMobiledataIcon;
