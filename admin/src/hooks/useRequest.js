import { useState } from 'react'

const useRequest = ({ apiCall, defaultData = null }) => {
    const [status, setStatus] = useState({ loading: false, error: false, data: defaultData })

    const send = async (...params) => {
        setStatus(prev => ({ ...prev, loading: true, error: false }))

        try {
            const data = await apiCall(...params)
            setStatus(prev => ({ ...prev, loading: false, error: false, data }))

        } catch (error) {
            setStatus(prev => ({ ...prev, loading: false, error }))
        }
    }

    return [status, send]
}

export default useRequest