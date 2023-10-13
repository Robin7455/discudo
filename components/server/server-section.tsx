import { ServerWithMembersWithProfiles } from "@/types";
import { ChannelType, MemberRole } from "@prisma/client";
import React from "react";

interface ServerSectionProps {
  label: string;
  role?: MemberRole;
  sectionType: "members" | "channels";
  channelType?: ChannelType;
  server?: ServerWithMembersWithProfiles;
}

const ServerSection = ({
  label,
  role,
  channelType,
  sectionType,
  server,
}: ServerSectionProps) => {
  return <div>ServerSection</div>;
};

export default ServerSection;
