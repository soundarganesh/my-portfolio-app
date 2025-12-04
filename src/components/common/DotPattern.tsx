import React from 'react';

interface DotPatternProps {
  type?: 'dot' | 'triangle';
  size?: number;
  row1Color?: string;
  row2Color?: string;
  direction?: number;
  classes?: string;
  count?: number;
}

const DotPattern: React.FC<DotPatternProps> = ({
  type = 'dot',
  size = 10,
  row1Color = '#000',
  row2Color = '#000',
  direction = 0,
  classes = '',
  count = 8,
}) => {
  const createStyle = (color: string): React.CSSProperties => {
    if (type === 'dot') {
      return {
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '999px',
        // transform: `rotate(${direction}deg)`
      };
    }

    // triangle (inverted ▼)
    return {
      width: 0,
      height: 0,
      borderLeft: `${size / 2}px solid transparent`,
      borderRight: `${size / 2}px solid transparent`,
      borderTop: `${size}px solid ${color}`, // inverted
      //   transform: `rotate(${direction}deg)`
    };
  };

  return (
    <div
      className={`flex flex-col gap-[6px] ${classes}`}
      style={{
        transform: `rotate(${direction}deg)`,
      }}
    >
      {/* Row 1 */}
      <div className='flex gap-[6px]'>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} style={createStyle(row1Color)} />
        ))}
      </div>

      {/* Row 2 */}
      <div
        className='flex gap-[6px]'
        style={{
          marginLeft: type === 'triangle' ? `${size / 2}px` : '0px',
        }}
      >
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} style={createStyle(row2Color)} />
        ))}
      </div>
    </div>
  );
};

export default DotPattern;
