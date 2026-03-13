import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { socialVideos, ease } from "@/lib/profile-data";
import { useState } from "react";

interface SocialVideoBarProps {
  delay?: number;
}

const VideoCard = ({ video, index }: { video: typeof socialVideos[0]; index: number }) => {
  const [playing, setPlaying] = useState(true);

  const togglePlay = (e: React.MouseEvent<HTMLDivElement>) => {
    const vid = e.currentTarget.querySelector("video");
    if (vid) {
      if (vid.paused) { vid.play(); setPlaying(true); }
      else { vid.pause(); setPlaying(false); }
    }
  };

  return (
    <div className="flex-shrink-0 w-32 group">
      <div
        className="relative aspect-[3/4] rounded-xl overflow-hidden bg-glass cursor-pointer"
        onClick={togglePlay}
      >
        <video
          src={video.video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster=""
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/40">
            <Play className="w-8 h-8 text-foreground fill-foreground" />
          </div>
        )}
      </div>
      <div className="mt-2">
        <p className="text-xs font-medium text-foreground truncate">{video.title}</p>
        <a
          href={video.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground flex items-center gap-1 hover:text-primary transition-colors"
        >
          {video.platform}
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

const SocialVideoBar = ({ delay = 0 }: SocialVideoBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease }}
      className="w-full"
    >
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Featured Videos</h3>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {socialVideos.map((video, i) => (
          <VideoCard key={i} video={video} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default SocialVideoBar;
