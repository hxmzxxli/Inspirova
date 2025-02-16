import { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      follower.style.left = `${clientX}px`;
      follower.style.top = `${clientY}px`;
    };

    const addHoverEffect = () => {
      follower.classList.add('hovered');
      cursor.classList.add('hovered');
    };

    const removeHoverEffect = () => {
      follower.classList.remove('hovered');
      cursor.classList.remove('hovered');
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  );
};

export default Cursor;
