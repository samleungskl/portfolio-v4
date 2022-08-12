import { useState, useEffect } from "react";

export default function useApplicationData() {
    const [state, setState] = useState({
        projects: [],
    });

    const loadData = async () => {
        try {
            const res = await fetch('/.netlify/functions/data')
            const result = await res.json()
            console.log('result = ', result)
            setState(prev => ({
                ...prev,
                projects: result.projects[0],
            }));
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        loadData();
    }, []);


    const changeProjectVisible = (projectKey, currentVisibleStatus) => {
        const result = !currentVisibleStatus
        // setState(prev => ({
        //     ...prev,
        //     [key]: result,
        // }));
    };

    return {
        state, changeProjectVisible
    };
}

