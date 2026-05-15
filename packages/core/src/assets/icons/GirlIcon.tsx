import React from 'react';

export interface GirlIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GirlIcon = ({ size, ...props }: GirlIconProps) => {
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
        d="M12.4999 7.81234C13.5103 7.81234 14.3228 6.99984 14.3228 5.98942C14.3228 4.979 13.5103 4.1665 12.4999 4.1665C11.4895 4.1665 10.677 4.979 10.677 5.98942C10.677 6.99984 11.4895 7.81234 12.4999 7.81234ZM14.5833 16.6665V20.8332H10.4166V16.6665H8.33325L10.8124 10.0207C11.0728 9.32275 11.7499 8.854 12.4999 8.854C13.2499 8.854 13.927 9.32275 14.1874 10.0207L16.6666 16.6665H14.5833Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GirlIcon;
