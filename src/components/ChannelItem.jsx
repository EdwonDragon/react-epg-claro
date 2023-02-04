import { ChannelBox, ChannelLogo } from "planby";

export const ChannelItem = ({ channel }) => {
  const { position, logo, number } = channel;
  return (
    <ChannelBox className="itemsChannels" {...position}>
      <h3 className="text-white">{number}</h3>
      <ChannelLogo
        src={logo}
        alt="Logo"
        style={{ maxHeight: 130, maxWidth: 130 }}
      />
    </ChannelBox>
  );
};
