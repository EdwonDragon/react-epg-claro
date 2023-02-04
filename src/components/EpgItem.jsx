import React, { useState } from "react";
import "../styles.css";
import { Epg, Layout } from "planby";

// Import hooks
import { useApp } from "../hooks/useApp";

// Import components
import { Timeline, ChannelItem, ProgramItem } from "../components";
import { Info } from "./InfoItem";


export function EpgItem() {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();
  const [Data, setData] = useState({
    image: "",
    init: "¡El entretenimiento que esperabas llegó a tu televisor!",
    title: "Guía de Canales",
    sinceTime: "",
    tillTime: "",
    hora: "",
    min: "",
    description:
      "Encuentra toda la programación de manera rápida y sencilla. Los números del canal varían dependiendo la region donde se encuentra.",
  });

  return (
    <div>
      <Info data={Data} />

      <div style={{ height: "55vh", width: "100%" }}>
        <Epg isLoading={isLoading} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderTimeline={(props) => <Timeline {...props} />}
            renderProgram={({ program, ...rest }) => (
              <ProgramItem
                setData={setData}
                key={program.data.id}
                program={program}
                {...rest}
              />
            )}
            renderChannel={({ channel }) => (
              <ChannelItem key={channel.uuid} channel={channel} />
            )}
          />
        </Epg>
      </div>
    </div>
  );
}
