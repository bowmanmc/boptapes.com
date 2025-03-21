import { useQuery } from '@tanstack/react-query'


const getMixById = async (mixId) => {
    let response = await fetch(`/api/mix/${mixId}`);
    return await response.json();
};

export function useMix(mixId) {
    return useQuery({
        queryKey: ['mix', mixId],
        queryFn: () => getMixById(mixId),
        enabled: !!mixId,
    });
};
