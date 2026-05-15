import React from 'react';

export interface CallMergeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CallMergeIcon = ({ size, ...props }: CallMergeIconProps) => {
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
        d="M17.7084 21.3072L19.1772 19.8385L15.6251 16.2864L14.1563 17.7551L17.7084 21.3072ZM7.81258 8.38013H11.4584V14.203L5.823 19.8385L7.29175 21.3072L13.5417 15.0572V8.38013H17.1876L12.5001 3.69263L7.81258 8.38013Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CallMergeIcon;
