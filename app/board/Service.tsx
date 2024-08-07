import React from "react";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import {
  TiHeartFullOutline,
  TiHeartHalfOutline,
  TiHeartOutline,
} from "react-icons/ti";

interface StarsProps {
  service: number;
}

export default function Stars({ service }: StarsProps) {
  return (
    <div className="justify-end p-4 flex items-center">
      <h3 className="text-sm mr-2 font-bold text-gray-500">
        서비스&친철도는 어떠셨나요?
      </h3>
      <div className="flex items-center">
        <Rate
          value={service}
          character={({ index }) => {
            const style = { fontSize: "13px", margin: "0", padding: "0" };
            if (index + 1 <= service) {
              return <TiHeartFullOutline className="text-orange-400" />;
            } else if (index + 0.5 === service) {
              return <TiHeartHalfOutline className="text-orange-400" />;
            } else {
              return <TiHeartOutline className="text-orange-400" />;
            }
          }}
          count={5}
          allowHalf
          readOnly
          style={{
            display: "flex",
            gap: "0px",
            margin: "0",
            padding: "0",
            pointerEvents: "none",
          }}
        />
      </div>
      <p className="text-gray-500 font-bold">{service}</p>
    </div>
  );
}
