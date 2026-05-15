import React from 'react';

export interface AddIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddIcon = ({ size, ...props }: AddIconProps) => {
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
        d="M19.7916 13.5416H13.5416V19.7916H11.4583V13.5416H5.20825V11.4583H11.4583V5.20825H13.5416V11.4583H19.7916V13.5416Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AddIcon;
