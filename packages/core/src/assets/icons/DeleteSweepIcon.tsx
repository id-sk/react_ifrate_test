import React from 'react';

export interface DeleteSweepIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DeleteSweepIcon = ({ size, ...props }: DeleteSweepIconProps) => {
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
        d="M15.6249 16.6667H19.7916V18.7501H15.6249V16.6667ZM15.6249 8.33341H22.9166V10.4167H15.6249V8.33341ZM15.6249 12.5001H21.8749V14.5834H15.6249V12.5001ZM3.12492 18.7501C3.12492 19.8959 4.06242 20.8334 5.20825 20.8334H11.4583C12.6041 20.8334 13.5416 19.8959 13.5416 18.7501V8.33341H3.12492V18.7501ZM14.5833 5.20841H11.4583L10.4166 4.16675H6.24992L5.20825 5.20841H2.08325V7.29175H14.5833V5.20841Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DeleteSweepIcon;
