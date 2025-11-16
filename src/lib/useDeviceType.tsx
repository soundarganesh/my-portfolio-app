'use client'
import { useEffect, useState } from 'react'

export type DeviceType = 'mobile' | 'tablet' | 'laptop' | 'desktop'

export function getDeviceType(width: number): DeviceType {
  if (width < 640) return 'mobile'
  if (width < 1024) return 'tablet'
  if (width < 1440) return 'laptop'
  return 'desktop'
}

export function useDeviceType(): DeviceType {
  const [device, setDevice] = useState<DeviceType>('desktop')

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth
      setDevice(getDeviceType(width))
    }

    updateDevice() // initial load
    window.addEventListener('resize', updateDevice)

    return () => window.removeEventListener('resize', updateDevice)
  }, [])

  return device
}
