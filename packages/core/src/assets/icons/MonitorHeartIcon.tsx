import React from 'react';

export interface MonitorHeartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MonitorHeartIcon = ({ size, ...props }: MonitorHeartIconProps) => {
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
        d="M15.7395 12.9688L14.5833 10.6667L11.3437 17.1355C11.177 17.4897 10.8124 17.7084 10.4166 17.7084C10.0208 17.7084 9.65617 17.4897 9.4895 17.1355L7.68742 13.5417H2.08325V18.7501C2.08325 19.8959 3.02075 20.8334 4.16659 20.8334H20.8333C21.9791 20.8334 22.9166 19.8959 22.9166 18.7501V13.5417H16.6666C16.2708 13.5417 15.9062 13.323 15.7395 12.9688Z"
        fill="currentColor"
      />
      <path
        d="M20.8333 4.16675H4.16659C3.02075 4.16675 2.08325 5.10425 2.08325 6.25008V11.4584H8.33325C8.72909 11.4584 9.09367 11.6772 9.26034 12.0313L10.4166 14.3334L13.6562 7.86466C14.0103 7.15633 15.1666 7.15633 15.5208 7.86466L17.3124 11.4584H22.9166V6.25008C22.9166 5.10425 21.9791 4.16675 20.8333 4.16675Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MonitorHeartIcon;
