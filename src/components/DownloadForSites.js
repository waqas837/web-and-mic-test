import Link from "next/link";
import React from "react";

const DownloadFromSites = () => {
  const sites = [
    { name: "YT", src: "YT.png", link: "https://www.youtube.com" },
    { name: "Voot", src: "voot.png", link: "https://www.voot.com" },
    { name: "Vimeo", src: "vimeo.png", link: "https://www.vimeo.com" },
    { name: "Twitter", src: "twitter.png", link: "https://www.twitter.com" },
    { name: "Tumblr", src: "tumblr.png", link: "https://www.tumblr.com" },
    { name: "TikTok", src: "tiktok.png", link: "https://www.tiktok.com" },
    { name: "TamilGun", src: "tamilgun.png", link: "https://www.tamilgun.com" },
    {
      name: "TamilDbox",
      src: "tamildbox.png",
      link: "https://www.tamildbox.com",
    },
    { name: "SpaceMov", src: "spacemov.png", link: "https://www.spacemov.to" },
    { name: "Ozee", src: "ozee.png", link: "https://www.zee5.com" },
    { name: "MetaCafe", src: "metacafe.png", link: "https://www.metacafe.com" },
    { name: "LoadTop", src: "loadtop.png", link: "https://www.loadtop.com" },
    { name: "LiveLeak", src: "liveleak.png", link: "https://www.liveleak.com" },
    {
      name: "Instagram",
      src: "instagram.png",
      link: "https://www.instagram.com",
    },
    {
      name: "FunnyOrDie",
      src: "funnyordie.png",
      link: "https://www.funnyordie.com",
    },
    {
      name: "FreeMovieDownloads",
      src: "freemoviedownloads6.png",
      link: "https://www.freemoviedownloads.com",
    },
    {
      name: "DailyMotion",
      src: "dailymotion.png",
      link: "https://www.dailymotion.com",
    },
    {
      name: "123Movies",
      src: "123movies.png",
      link: "https://www.123movies.com",
    },
  ];

  return (
    <div className="my-40">
      <h1 className="my-20 text-center text-4xl font-bold">
        Download Video/Music/Image from more sites
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-10 w-10/12 m-auto">
        {sites.map((val, index) => (
          <div key={index}>
            <Link href={val.link}>
              <div
                key={index}
                className="flex items-center justify-between flex-col space-y-5"
              >
                <img width={70} height={70} src={val.src} alt={val.name} />
                <span>{val.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadFromSites;
