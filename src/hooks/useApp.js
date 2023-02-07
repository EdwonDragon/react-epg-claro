import React from "react";
import { ArrChannels, ArrEpg } from "../helpers";
import { useEpg } from "planby";

// Import theme
import { theme } from "../helpers/theme";
import { getChannels } from "../helpers/getChanels";

export function useApp() {
  const [channels, setChannels] = React.useState([]);

  const [epg, setEpg] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const channelsData = React.useMemo(() => channels, [channels]);
  const epgData = React.useMemo(() => epg, [epg]);

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
    dayWidth: 7200,
    sidebarWidth: 250,
    itemHeight: 80,
    isSidebar: true,
    isTimeline: true,
    isLine: true,
    isBaseTimeFormat: true,
    
    theme
  });

  //
  const handleFetchResources = React.useCallback(async () => {
    const chanels = await getChannels();
    const epg = await ArrEpg(chanels);
    const channels = await ArrChannels(chanels);
    setEpg(epg);
    setChannels(channels);
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, isLoading };
}
