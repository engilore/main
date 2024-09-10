import { useEffect } from 'react'


const useScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked && window.innerWidth <= 1024) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLocked]);
};

export default useScrollLock;
