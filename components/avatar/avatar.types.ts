export interface IAvatarProps {
  path: string;
  alt?: string;
  className?: string;
  avatarClassName?: string;
  status?: TAvatarStatus;
  round?: boolean;
  wrap?: boolean;
}

export type TAvatarStatus = "online" | "offline" | "busy";
