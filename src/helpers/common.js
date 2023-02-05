import { getChannels } from "./getChanels";

export const ArrChannels = async (chanels) => {
  /**
    * Construcción del arreglo de canales con la información unicamente necesaria
    */
  const newChanels = chanels.map(({ id, image, name, provider_metadata_id, number }) => ({
    uuid: id,
    type: "channel",
    title: name,
    provider: provider_metadata_id,
    logo: image,
    number
  }))

  return newChanels;
};

export const ArrEpg = async (chanels) => {
  /**
   * Construcción del arreglo de programas con la información unicamente necesaria
   */
  let ArrEpg = [];
  let obj = {};
  let i = 1;
  chanels.forEach((chanels) => {
    chanels.events.forEach(({ id, channel_id, description, name, date_begin, date_end, image_base_square, parental_rating, ext_country, ext_year, ext_director, ext_language, duration }) => {
      i++;
      obj = {
        id: i + 1,
        description,
        title: name,
        isYesterday: true,
        since: (new Date(date_begin).toISOString()).split(".")[0],
        till: new Date(date_end).toISOString().split(".")[0],
        channelUuid: channel_id,
        image: image_base_square,
        country: ext_country,
        Year: ext_year,
        Director: ext_director,
        Language: ext_language,
        Response: "True",
        rating: parental_rating,
        duration,

      };
      ArrEpg.push(obj);
    });
  });

  return ArrEpg;
};
