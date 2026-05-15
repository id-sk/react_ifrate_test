import React from 'react';

export interface CelebrationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CelebrationIcon = ({ size, ...props }: CelebrationIconProps) => {
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
        d="M1.28125 23.1981L15.8646 17.9897L6.48958 8.61475L1.28125 23.1981Z"
        fill="currentColor"
      />
      <path
        d="M14.3333 13.3335L20.1562 7.51058C20.6667 7.00016 21.4896 7.00016 22 7.51058L22.6146 8.12516L23.7188 7.021L23.1042 6.40641C21.9896 5.29183 20.1667 5.29183 19.0521 6.40641L13.2292 12.2293L14.3333 13.3335Z"
        fill="currentColor"
      />
      <path
        d="M9.67708 7.44808L9.0625 8.06266L10.1667 9.16683L10.7812 8.55225C11.8958 7.43766 11.8958 5.61475 10.7812 4.50016L10.1667 3.88558L9.0625 5.00016L9.67708 5.61475C10.1771 6.11475 10.1771 6.94808 9.67708 7.44808Z"
        fill="currentColor"
      />
      <path
        d="M16.9687 12.6564L15.3125 14.3127L16.4167 15.4168L18.0729 13.7606C18.5833 13.2502 19.4062 13.2502 19.9167 13.7606L21.5938 15.4377L22.6979 14.3335L21.0208 12.6564C19.8958 11.5418 18.0833 11.5418 16.9687 12.6564Z"
        fill="currentColor"
      />
      <path
        d="M14.8854 6.40641L11.1458 10.146L12.25 11.2502L15.9896 7.51058C17.1042 6.396 17.1042 4.57308 15.9896 3.4585L14.3333 1.80225L13.2292 2.90641L14.8854 4.56266C15.3854 5.07308 15.3854 5.90641 14.8854 6.40641Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CelebrationIcon;
