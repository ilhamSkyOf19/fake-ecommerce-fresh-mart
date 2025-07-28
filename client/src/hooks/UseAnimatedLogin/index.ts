import { useEffect, useState } from 'react';

export function useLoginAnimation(login: boolean | null, delay = 500, reverse: boolean = false) {
  const [showLogin, setShowLogin] = useState<boolean | null>(login);
  const [animateClass, setAnimateClass] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(login);
    }, delay);

    return () => clearTimeout(timer);
  }, [login, delay]);

  useEffect(() => {
    if (login === null) return;
    reverse ? setAnimateClass(!login ? 'animate-fadeInImg' : 'animate-fadeOutImg') :
      setAnimateClass(!login ? 'animate-fadeInContent' : 'animate-fadeOutContent');
  }, [login]);

  return { showLogin, animateClass };
}
