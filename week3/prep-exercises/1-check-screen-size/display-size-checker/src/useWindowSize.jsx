import { useEffect, useState, useDebugValue }  from 'react';

export default function useWindowDimension() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  if (size.width > 1000) {
    useDebugValue('BIG');
  } else if (size.width > 600) {
    useDebugValue('MEDIUM');
  } else {
    useDebugValue('SMALL');
  }

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