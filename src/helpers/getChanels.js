import { getEnvVariables } from "./getEnvVariables";

export const getChannels = async () => {

    const { VITE_api_claro,
        VITE_authpt,
        VITE_region,
        VITE_hks,
        VITE_user_id,
        VITE_quantity } = getEnvVariables();

    const hoy = new Date();
    const fechaHoy = (hoy.toISOString().split('T')[0]).replace("-", "").replace("-", "")
    hoy.setDate(hoy.getDate() - 1);
    const ayer = hoy;
    const fechaInicio = ayer.toISOString().split('T')[0].replace("-", "").replace("-", "")
    const date_from = `${fechaInicio}200256`;
    const date_to = `${fechaHoy}200256`;

    const url = `${VITE_api_claro}&authpt=${VITE_authpt}&api_version=v5.93&region=${VITE_region}&HKS=${VITE_hks}&user_id=${VITE_user_id}&date_from=${date_from}&date_to=${date_to}&quantity=${VITE_quantity}`;

    const resp = await fetch(url);
    const { response } = await resp.json();

    return response.channels;

}