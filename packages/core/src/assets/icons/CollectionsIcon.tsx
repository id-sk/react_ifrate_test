import React from 'react';

export interface CollectionsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CollectionsIcon = ({ size, ...props }: CollectionsIconProps) => {
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
        d="M22.9166 16.6668V4.16683C22.9166 3.021 21.9791 2.0835 20.8333 2.0835H8.33325C7.18742 2.0835 6.24992 3.021 6.24992 4.16683V16.6668C6.24992 17.8127 7.18742 18.7502 8.33325 18.7502H20.8333C21.9791 18.7502 22.9166 17.8127 22.9166 16.6668ZM11.4583 12.5002L13.5728 15.3231L16.6666 11.4585L20.8333 16.6668H8.33325L11.4583 12.5002ZM2.08325 6.25016V20.8335C2.08325 21.9793 3.02075 22.9168 4.16659 22.9168H18.7499V20.8335H4.16659V6.25016H2.08325Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CollectionsIcon;
