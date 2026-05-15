import React from 'react';

export interface OfflineShareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const OfflineShareIcon = ({ size, ...props }: OfflineShareIconProps) => {
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
        d="M15.2084 10.6873V12.0519L17.7084 9.71859L15.2084 7.39567V8.729C12.7813 9.06234 11.8126 10.729 11.4584 12.3957C12.323 11.2186 13.4688 10.6873 15.2084 10.6873ZM16.6667 23.9582H6.25008C5.10425 23.9582 4.16675 23.0207 4.16675 21.8748V5.20817H6.25008V21.8748H16.6667V23.9582ZM18.7501 1.0415H10.4167C9.27091 1.0415 8.33341 1.979 8.33341 3.12484V17.7082C8.33341 18.854 9.27091 19.7915 10.4167 19.7915H18.7501C19.8959 19.7915 20.8334 18.854 20.8334 17.7082V3.12484C20.8334 1.979 19.8959 1.0415 18.7501 1.0415ZM18.7501 16.6665H10.4167V4.1665H18.7501V16.6665Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default OfflineShareIcon;
