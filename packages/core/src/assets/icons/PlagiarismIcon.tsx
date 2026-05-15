import React from 'react';

export interface PlagiarismIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlagiarismIcon = ({ size, ...props }: PlagiarismIconProps) => {
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
        d="M14.5834 2.08337H6.25008C5.10425 2.08337 4.16675 3.02087 4.16675 4.16671V20.8334C4.16675 21.9792 5.09383 22.9167 6.23966 22.9167H18.7501C19.8959 22.9167 20.8334 21.9792 20.8334 20.8334V8.33337L14.5834 2.08337ZM15.6667 20.2605L13.7084 18.3021C12.323 19.0417 10.573 18.8542 9.40633 17.6875C7.97925 16.2605 7.97925 13.9584 9.40633 12.5313C10.8334 11.1042 13.1355 11.1042 14.5626 12.5313C15.7292 13.698 15.9272 15.448 15.1772 16.8334L17.1355 18.7917L15.6667 20.2605ZM13.5417 9.37504V3.64587L19.2709 9.37504H13.5417Z"
        fill="currentColor"
      />
      <path
        d="M11.9792 16.6667C12.8422 16.6667 13.5417 15.9672 13.5417 15.1042C13.5417 14.2413 12.8422 13.5417 11.9792 13.5417C11.1163 13.5417 10.4167 14.2413 10.4167 15.1042C10.4167 15.9672 11.1163 16.6667 11.9792 16.6667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlagiarismIcon;
