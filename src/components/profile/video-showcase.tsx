import { PlayCircle, ListVideo } from "lucide-react"

interface VideoShowcaseProps {
    videos: any
}

export function VideoShowcase({ videos }: VideoShowcaseProps) {
    return (
        <div className="space-y-8">
            {/* Featured Videos */}
            <section>
                <div className="flex items-center gap-2 mb-4">
                    <PlayCircle className="h-5 w-5 text-cyan-500" />
                    <h2 className="text-xl font-bold gradient-text">Popular Lessons</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videos.featured.map((video: any) => (
                        <div key={video.id} className="group relative rounded-xl overflow-hidden bg-card/50 dark:bg-slate-800/50 border border-border dark:border-white/5 hover:border-cyan-500/50 transition-all shadow-sm dark:shadow-none">
                            {/* Thumbnail Container */}
                            <div className="aspect-video relative bg-slate-900 block">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                    <PlayCircle className="h-12 w-12 text-white drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
                                </div>
                                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 rounded text-[10px] text-white font-medium">
                                    12:45
                                </div>
                            </div>

                            <div className="p-3">
                                <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-cyan-400 transition-colors">
                                    {video.title}
                                </h3>
                                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                                    <span>{video.views} views</span>
                                    <span>•</span>
                                    <span>2 days ago</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Playlists */}
            <section>
                <div className="flex items-center gap-2 mb-4">
                    <ListVideo className="h-5 w-5 text-purple-500" />
                    <h2 className="text-xl font-bold text-foreground">Top Playlists</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videos.playlists.map((playlist: any, idx: number) => (
                        <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-card/50 dark:bg-slate-800/50 border border-border dark:border-white/5 hover:bg-accent dark:hover:bg-white/5 transition-colors cursor-pointer shadow-sm dark:shadow-none">
                            <div className="h-16 w-24 bg-slate-200 dark:bg-slate-800 rounded-md flex items-center justify-center text-muted-foreground relative overflow-hidden">
                                <ListVideo className="h-6 w-6 z-10" />
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20" />
                            </div>
                            <div>
                                <h4 className="font-medium text-sm text-foreground">{playlist.title}</h4>
                                <p className="text-xs text-muted-foreground mt-1">{playlist.count} Videos</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
