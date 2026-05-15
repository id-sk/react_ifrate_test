import React from 'react';

export interface AddModeratorIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddModeratorIcon = ({ size, ...props }: AddModeratorIconProps) => {
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
        d="M13.2501 23.5519C12.8334 23.7082 12.4167 23.854 11.9792 23.9582C6.60425 22.6457 2.60425 17.2394 2.60425 11.4582V5.20817L11.9792 1.0415L21.3542 5.20817V11.4582C21.3542 12.3957 21.2397 13.3123 21.0417 14.2186C20.198 13.7915 19.2397 13.5415 18.2292 13.5415C14.7813 13.5415 11.9792 16.3436 11.9792 19.7915C11.9792 21.2082 12.4584 22.5103 13.2501 23.5519ZM19.2709 20.8332V23.9478C19.2709 23.9478 17.198 23.9582 17.1876 23.9478V20.8332H14.0626V18.7498H17.1876V15.6248H19.2709V18.7498H22.3959V20.8332H19.2709Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AddModeratorIcon;
