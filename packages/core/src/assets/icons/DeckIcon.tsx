import React from 'react';

export interface DeckIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DeckIcon = ({ size, ...props }: DeckIconProps) => {
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
        d="M22.9166 9.37516L12.4999 2.0835L2.08325 9.37516H11.4583V22.9168H13.5416V9.37516H22.9166Z"
        fill="currentColor"
      />
      <path
        d="M4.31242 12.5002L2.27075 12.8856L3.12492 17.4377V22.9168H5.20825L5.22909 18.7502H7.29159V22.9168H9.37492V16.6668H5.10409L4.31242 12.5002Z"
        fill="currentColor"
      />
      <path
        d="M19.8958 16.6668H15.6249V22.9168H17.7083V18.7502H19.7708L19.7916 22.9168H21.8749V17.4377L22.7291 12.8856L20.6874 12.5002L19.8958 16.6668Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DeckIcon;
