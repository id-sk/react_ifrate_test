import React from 'react';

export interface FolderCopyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FolderCopyIcon = ({ size, ...props }: FolderCopyIconProps) => {
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
        d="M3.12496 6.77091H1.04163V20.3126C1.04163 21.4584 1.97913 22.3959 3.12496 22.3959H20.8333V20.3126H3.12496V6.77091Z"
        fill="currentColor"
      />
      <path
        d="M21.875 4.68758H14.5833L12.5 2.60425H7.29163C6.14579 2.60425 5.21871 3.54175 5.21871 4.68758L5.20829 16.1459C5.20829 17.2917 6.14579 18.2292 7.29163 18.2292H21.875C23.0208 18.2292 23.9583 17.2917 23.9583 16.1459V6.77091C23.9583 5.62508 23.0208 4.68758 21.875 4.68758Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FolderCopyIcon;
