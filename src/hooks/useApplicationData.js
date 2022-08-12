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


    const changeProjectVisible = (projectKey) => {
        const result = state.projects.map((element)=>{
            if (element.projectRecID === projectKey){
                element.projectInfoVisible = !element.projectInfoVisible                
            }
            return element
        })
        setState(prev => ({
            ...prev,
            projects: result,
        }));
        console.log('state changed: ', result)
    };

    return {
        state, changeProjectVisible
    };
}

