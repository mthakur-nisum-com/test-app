import { createContext, useEffect, useState } from 'react';
import { serviceCall } from './utils';

export const AppFunctions = createContext();

export const AppFunction = ({ children }) => {

    const updateCurrentkey = (key = '') => updateConfig({
        ...config,
        currentKey: key
    });

    const updateViewType = (key = '') => updateConfig({
        ...config,
        viewType: key
    });

    const [config, updateConfig] = useState({
        currentKey: null,
        updateCurrentkey,
        currentViewType: null,
        updateViewType,
        dataSet: [],
        isLoading: false
    });

    useEffect(() => {
       
        const currentKey = config.currentKey;
        const idx = config.dataSet.findIndex(({ key }) => key === currentKey);
       
        if (idx >= 0) return;
        else {
            if (currentKey) {
                updateConfig({
                    ...config,
                    isLoading: true
                })
                serviceCall(`/getextracts?titlecontains=${currentKey}`, 'get').then((res) => {
                    const dataSet = config.dataSet;
                    dataSet.push({
                        key: currentKey,
                        res
                    })
                    updateConfig({
                        ...config,
                        dataSet,
                        isLoading: false
                    })
                });
            }
        }
    }, [config.currentKey])

    const getDataSet = (currentKey) => {
        const idx = config.dataSet.findIndex(({ key }) => key === currentKey);
        if (idx >= 0) return config?.dataSet[idx];
        else return null;
    }
    return (
        <div className='app'>
            <AppFunctions.Provider value={{
                currentKey: config.currentKey,
                updateCurrentkey,
                isLoading:config.isLoading,
                viewType: config.viewType,
                updateViewType,
                getDataSet
            }}>
                {children}
            </AppFunctions.Provider>
        </div>
    )
}