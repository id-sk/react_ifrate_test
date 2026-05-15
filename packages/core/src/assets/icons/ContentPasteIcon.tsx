import React from 'react';

export interface ContentPasteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ContentPasteIcon = ({ size, ...props }: ContentPasteIconProps) => {
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
        d="M19.7917 3.12508H15.4375C15 1.91675 13.8542 1.04175 12.5 1.04175C11.1458 1.04175 10 1.91675 9.5625 3.12508H5.20833C4.0625 3.12508 3.125 4.06258 3.125 5.20841V21.8751C3.125 23.0209 4.0625 23.9584 5.20833 23.9584H19.7917C20.9375 23.9584 21.875 23.0209 21.875 21.8751V5.20841C21.875 4.06258 20.9375 3.12508 19.7917 3.12508ZM12.5 3.12508C13.0729 3.12508 13.5417 3.59383 13.5417 4.16675C13.5417 4.73966 13.0729 5.20841 12.5 5.20841C11.9271 5.20841 11.4583 4.73966 11.4583 4.16675C11.4583 3.59383 11.9271 3.12508 12.5 3.12508ZM19.7917 21.8751H5.20833V5.20841H7.29167V8.33341H17.7083V5.20841H19.7917V21.8751Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ContentPasteIcon;
