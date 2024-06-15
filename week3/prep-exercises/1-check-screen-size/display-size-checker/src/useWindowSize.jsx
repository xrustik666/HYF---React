import { useEffect, useState, useDebugValue }  from 'react';

export default function useWindowDimension() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useDebugValue(size.width > 1000 ? 'BIG' : size.width > 600 ? 'MEDIUM' : 'SMALL');

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize ({
        width: window.innerWidth,
        height: window.innerHeight
      })
    })
  })

  return size;
}