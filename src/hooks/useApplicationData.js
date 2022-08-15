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


    const changeProjectVisible = (projectKey, type) => {
        let result = [];
        result = state.projects.map((element) => {
            if (element.projectRecID === projectKey) {
                if (type === 'click') {
                    element.projectInfoHide = !element.projectInfoHide;
                }
            }
            return element;
        })

        console.log('state changed =', state)
        setState(prev => ({
            ...prev,
            projects: result,
        }));
    };

    return {
        state, changeProjectVisible
    };

    
}

