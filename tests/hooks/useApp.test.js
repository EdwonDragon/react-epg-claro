import { ArrChannels, ArrEpg } from "../../src/helpers";
import { getChannels } from "../../src/helpers/getChanels";

describe('Pruebas en el fetch de los arreglos', () => { 

    test('Debe retornar un arreglo de canales', async() => { 
        const chanels = await getChannels();
        const channels = await ArrChannels(chanels);
        expect(channels.length).toBeGreaterThan(0);
        expect(channels[0]).toEqual({
            uuid: expect.any(String),
            type: expect.any(String),
            title: expect.any(String),
            provider: expect.any(Number),
            logo: expect.any(String),
            number:expect.any(String)
        })
     });

     test('Debe retornar un arreglo de programas', async() => { 
        const chanels = await getChannels();
        const epg = await ArrEpg(chanels);
        expect(epg.length).toBeGreaterThan(0);
        expect(epg[0]).toEqual({
            id: expect.any(Number),
            description:expect.any(String),
            title: expect.any(String),
            isYesterday: expect.any(Boolean),
            since: expect.any(String),
            till: expect.any(String),
            channelUuid: expect.any(String),
            image: expect.any(String),
            country: expect.any(String),
            Year: expect.any(String),
            Director: expect.any(String),
            Language: expect.any(String),
            Response: expect.any(String),
            rating: expect.any(String),
            duration:expect.any(String),
        })
     })
 })