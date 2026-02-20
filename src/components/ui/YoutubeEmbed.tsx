"use client";

export interface YoutubeEmbedProps {
  /** YouTube video ID (e.g. from watch?v=VIDEO_ID) */
  videoId: string;
  /** Optional start time in seconds */
  start?: number;
  /** Optional title for iframe (accessibility) */
  title?: string;
  className?: string;
}

/**
 * Responsive 16:9 YouTube embed.
 */
export function YoutubeEmbed({
  videoId,
  start,
  title = "YouTube video",
  className = "",
}: YoutubeEmbedProps) {
  const params = new URLSearchParams();
  if (start != null && start > 0) params.set("start", String(start));
  const query = params.toString();
  const src = `https://www.youtube.com/embed/${videoId}${query ? `?${query}` : ""}`;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg bg-black/5 aspect-video ${className}`.trim()}
    >
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full rounded-lg"
      />
    </div>
  );
}
