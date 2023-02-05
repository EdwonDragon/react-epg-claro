
export const getEnvVariables = () => {
    /**
       * Importación de las variables de entorno
       */
    // import.meta.env;
    return {
        // ... import.meta.env
        VITE_api_claro: import.meta.env.VITE_api_claro,
        VITE_authpt: import.meta.env.VITE_authpt,
        VITE_region: import.meta.env.VITE_region,
        VITE_hks: import.meta.env.VITE_hks,
        VITE_user_id: import.meta.env.VITE_user_id,
        VITE_quantity: import.meta.env.VITE_quantity,
    }
}
