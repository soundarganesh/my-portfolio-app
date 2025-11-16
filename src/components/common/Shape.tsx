import React from 'react'

type ShapeType = 'circle' | 'square' | 'rectangle' | 'triangle'

interface ShapeProps {
  type: ShapeType
  direction?: number
  color?: string
  size?: number
  x?: number
  y?: number
  classes?: string // NEW prop
}

const Shape: React.FC<ShapeProps> = ({ type, direction = 0, color = 'yellow', size = 100, x, y, classes = '' }) => {
  const enableTransition = x !== undefined || y !== undefined

  const baseStyle: React.CSSProperties = {
    width: type === 'rectangle' ? size * 1.6 : size,
    height: type === 'triangle' ? 0 : size,
    backgroundColor: type !== 'triangle' ? color : 'transparent',
    transform: `rotate(${direction}deg) translate(${x ?? 0}px, ${y ?? 0}px)`,
    transition: enableTransition ? 'transform 2s ease-in-out' : 'none',
  }

  return (
    <div
      className={`flex items-center justify-center select-none ${classes}`}
      style={{
        ...baseStyle,
        ...(type === 'circle' && { borderRadius: '9999px' }),
        ...(type === 'square' && { borderRadius: '0' }),
        ...(type === 'rectangle' && { borderRadius: '0' }),

        ...(type === 'triangle' && {
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
        }),
      }}
    />
  )
}

export default Shape
