import React from 'react';

export interface DeviceUnknownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DeviceUnknownIcon = ({ size, ...props }: DeviceUnknownIconProps) => {
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
        d="M17.7083 1.04175H7.29159C6.14575 1.04175 5.20825 1.97925 5.20825 3.12508V21.8751C5.20825 23.0209 6.14575 23.9584 7.29159 23.9584H17.7083C18.8541 23.9584 19.7916 23.0209 19.7916 21.8751V3.12508C19.7916 1.97925 18.8541 1.04175 17.7083 1.04175ZM17.7083 19.7917H7.29159V5.20841H17.7083V19.7917ZM12.4999 7.00008C10.4583 7.00008 8.85409 8.58341 8.85409 10.6147H10.677C10.677 9.64591 11.5312 8.79175 12.4999 8.79175C13.4687 8.79175 14.3228 9.64591 14.3228 10.6147C14.3228 12.4376 11.5833 12.2501 11.5833 15.2501H13.4166C13.4166 13.2084 16.1458 12.9688 16.1458 10.6147C16.1458 8.573 14.5416 7.00008 12.4999 7.00008ZM11.5833 16.1667H13.4166V18.0001H11.5833V16.1667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DeviceUnknownIcon;
