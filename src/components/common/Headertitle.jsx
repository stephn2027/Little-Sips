import React from 'react';

export default function HeaderTitle({ text }) {
  return (
    <React.Fragment>
      <div className="xheaderx-title">
        <svg
          height="200"
          width="100%"
          stroke="#DEB887"
          strokeWidth="2"
          className="text-line"
        >
          <text
            fontStyle="font-family: 'Baloo Tamma', georgia, times, serif; font-weight: normal; font-style: normal"
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="none"
          >
            {text}
          </text>
        </svg>
      </div>
    </React.Fragment>
  );
}
