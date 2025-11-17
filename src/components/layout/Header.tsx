import React from 'react'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className='fixed z-100 w-full'>
      <section className='align-center container flex justify-center'>{/* Header */}</section>
    </header>
  )
}

export default Header
