import { useCallback, useEffect, useState } from 'react';

export default function useWindowWidth() {
   const getWindowWidth = useCallback(() => window.innerWidth, []);
   const [windowWidth, setWindowWidth] = useState(getWindowWidth());

   useEffect(() => {

      function doResize() {
         setWindowWidth(getWindowWidth());
      };

      window.addEventListener('resize', resizeThrottler, false);

      let resizeTimeout;
      function resizeThrottler() {
         if (!resizeTimeout) {
            resizeTimeout = setTimeout(() => {
               resizeTimeout = null;
               doResize();
            }, 2000);
         }
      };

      return () => window.removeEventListener('resize', doResize);
   }, [getWindowWidth]);

   return windowWidth;
};