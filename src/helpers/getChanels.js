import { getEnvVariables } from "./getEnvVariables";

export const getChannels = async () => {

    /**
     * Variables de entorno para la llamada a la API
     */
    const { VITE_api_claro,
        VITE_authpt,
        VITE_region,
        VITE_hks,
        VITE_user_id,
        VITE_quantity } = getEnvVariables();

    /**
    * Formateo de fehcas para la llamada, se establecen la fecha actual y la fecha de ayer 
    */
    const hoy = new Date();
    const fechaHoy = hoy.toLocaleDateString('en-GB').split('/').reverse().join('');
    hoy.setDate(hoy.getDate() - 1);
    const fechaInicio = hoy.toLocaleDateString('en-GB').split('/').reverse().join('');

    const date_from = `${fechaInicio}200256`;
    const date_to = `${fechaHoy}200256`;

    /**
    * Construcción de la url para el fetch
    */
    const url = `${VITE_api_claro}&authpt=${VITE_authpt}&api_version=v5.93&region=${VITE_region}&HKS=${VITE_hks}&user_id=${VITE_user_id}&date_from=${date_from}&date_to=${date_to}&quantity=${VITE_quantity}`;

    /**
       * Fetch al API
       */
    const resp = await fetch(url);
    const { response } = await resp.json();
    return response.channels;

}