"use client";

import Image from "next/image";

import googleIcon from "@@@/social_media_icons/google.svg";
import telegramIcon from "@@@/social_media_icons/telegram.svg";
import vkIcon from "@@@/social_media_icons/vk.svg";
import facebookIcon from "@@@/social_media_icons/facebook.svg";
import discordIcon from "@@@/social_media_icons/discord.svg";
import redditIcon from "@@@/social_media_icons/reddit.svg";
import gitHubIcon from "@@@/social_media_icons/gitHub.svg";

const socialMediaIcons = [
  { name: "Google Icon", src: googleIcon },
  { name: "Telegram Icon", src: telegramIcon },
  { name: "Vk Icon", src: vkIcon },
  { name: "Facebook Icon", src: facebookIcon },
  { name: "Discord Icon", src: discordIcon },
  { name: "Reddit Icon", src: redditIcon },
  { name: "GitHub Icon", src: gitHubIcon },
];

function SocialMediaLinksBlock() {
  return (
    <div className="flex w-[305px] flex-wrap items-center justify-center gap-4">
      {socialMediaIcons.map((icon, i) => (
        <span key={i + 1} className="inline-block h-12 w-12 cursor-pointer">
          <Image src={icon.src} alt={icon.name} width={100} height={100} />
        </span>
      ))}
    </div>
  );
}

export default SocialMediaLinksBlock;
