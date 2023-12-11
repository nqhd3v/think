import Image from "next/image";
import { IAvatarProps } from "./avatar.types";
import { twMerge } from "tailwind-merge";

const InternalAvatar: React.FC<IAvatarProps> = ({
  path,
  alt,
  className,
  avatarClassName,
  round,
  status,
  wrap,
}) => {
  return (
    <div
      className={twMerge(
        "avatar",
        round && "rounded-full",
        wrap && "avatar__wrapper",
        className
      )}
    >
      <div
        className={twMerge(
          "avatar--image",
          round && "rounded-full",
          avatarClassName
        )}
      >
        <Image src={path} alt={alt || "avatar"} fill />
      </div>
      {status && <div className="avatar--status" data-avatar-status={status} />}
    </div>
  );
};

type TInternalAvatar = typeof InternalAvatar;

const Avatar = InternalAvatar as TInternalAvatar;

export default Avatar;
