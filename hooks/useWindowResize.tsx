import { useEffect, useState } from "react";
import * as _ from "lodash";

/**
 * Hook for listen window resize
 */
export const useWindowResize = (waitTime = 100) => {
    const [dimension, setDimension] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    });

    const updateDimension = () => {
        const { innerWidth, innerHeight } = window;
        setDimension({ width: innerWidth, height: innerHeight });
    };

    useEffect(() => {
        const handleResize = _.debounce(() => {
            updateDimension();
        }, waitTime);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [waitTime]);

    useEffect(() => {
        updateDimension();
    }, []);

    return { dimension };
};
