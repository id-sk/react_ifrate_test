import React from 'react';

export interface ApprovalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ApprovalIcon = ({ size, ...props }: ApprovalIconProps) => {
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
        d="M4.16675 16.6666V22.9166H20.8334V16.6666C20.8334 15.5208 19.8959 14.5833 18.7501 14.5833H6.25008C5.10425 14.5833 4.16675 15.5208 4.16675 16.6666ZM18.7501 18.7499H6.25008V16.6666H18.7501V18.7499ZM12.5001 2.08325C9.62508 2.08325 7.29175 4.41659 7.29175 7.29159L12.5001 14.5833L17.7084 7.29159C17.7084 4.41659 15.3751 2.08325 12.5001 2.08325ZM12.5001 11.4583L9.37508 7.29159C9.37508 5.56242 10.7709 4.16659 12.5001 4.16659C14.2292 4.16659 15.6251 5.56242 15.6251 7.29159L12.5001 11.4583Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ApprovalIcon;
