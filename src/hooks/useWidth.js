import { useCallback, useEffect, useState } from 'react';

export default function useWidth() {
   const getWindowWidth = useCallback(() => window.innerWidth, []);
   const [windowWidth, setWindowWidth] = useState(getWindowWidth());

   useEffect(() => {

      function updateWidth() {
         setWindowWidth(getWindowWidth());
      };

      window.addEventListener('resize', resizeSwitch, false);

      let resizeTimeout;
      function resizeSwitch() {
         if (!resizeTimeout) {
            resizeTimeout = setTimeout(() => {
               resizeTimeout = null;
               updateWidth();
            }, 2000);
         }
      };

      return () => window.removeEventListener('resize', updateWidth);
   }, [getWindowWidth]);

   return windowWidth;
};