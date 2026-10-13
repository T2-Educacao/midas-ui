"use client";

import {
  IconBadgeCc,
  IconMaximize,
  IconMinimize,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconRewindBackward10,
  IconRewindForward10,
  IconSettings,
  IconVolume,
  IconVolumeOff,
  IconX,
} from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export type VideoPlayerState =
  | "playing"
  | "paused"
  | "controls-hidden"
  | "buffering"
  | "settings"
  | "ended";

export type VideoPlayerRatio = "21:9" | "16:9" | "4:3" | "1:1" | "4:5" | "3:4" | "9:16";

export const videoPlayerVariants = cva(
  "group/video relative isolate flex w-full flex-col justify-end overflow-hidden rounded-container bg-material-on-media-bg-content text-material-on-media-content outline-none focus-visible:focus-ring-neutral",
  {
    variants: {
      ratio: {
        "21:9": "aspect-[21/9]",
        "16:9": "aspect-video",
        "4:3": "aspect-[4/3]",
        "1:1": "aspect-square",
        "4:5": "aspect-[4/5]",
        "3:4": "aspect-[3/4]",
        "9:16": "aspect-[9/16]",
      },
      device: {
        desktop: "",
        mobile: "max-w-sm",
      },
    },
    defaultVariants: { ratio: "16:9", device: "desktop" },
  },
);

const immersiveRatios: VideoPlayerRatio[] = ["1:1", "4:5", "3:4", "9:16"];

export function formatVideoTime(seconds: number): string {
  const safe = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const rest = safe % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = String(rest).padStart(2, "0");
  return hours > 0 ? `${hours}:${mm}:${ss}` : `${mm}:${ss}`;
}

export interface VideoChapter {
  time: number;
  label: string;
}

export interface VideoCaptionTrack {
  src: string;
  srcLang: string;
  label: string;
}

export interface VideoNextLesson {
  title: string;
  meta?: string;
  seconds?: number;
}

export interface VideoPlayerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "onPlay" | "onPause" | "onEnded">,
    Pick<VariantProps<typeof videoPlayerVariants>, "ratio" | "device"> {
  src?: string;
  poster?: string;
  title: string;
  eyebrow?: string;
  tone?: "brand" | "neutral";
  chapters?: VideoChapter[];
  captions?: VideoCaptionTrack;
  speeds?: number[];
  nextLesson?: VideoNextLesson;
  actions?: React.ReactNode;
  state?: VideoPlayerState;
  autoPlay?: boolean;
  hideDelay?: number;
  onPlayingChange?: (playing: boolean) => void;
  onTimeChange?: (seconds: number) => void;
  onNext?: () => void;
  onNextCancel?: () => void;
  onEnded?: () => void;
  durationHint?: number;
}

const controlButton =
  "inline-flex size-control-lg shrink-0 items-center justify-center rounded-pill text-material-on-media-content outline-none transition-colors hover:bg-material-glass-bg focus-visible:focus-ring-neutral motion-reduce:transition-none [&_svg]:size-icon-md";

const focusable = { tabIndex: 0 };

export const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(
  (
    {
      className,
      src,
      poster,
      title,
      eyebrow,
      ratio = "16:9",
      device = "desktop",
      tone = "brand",
      chapters = [],
      captions,
      speeds = [0.75, 1, 1.25, 1.5, 2],
      nextLesson,
      actions,
      state: stateProp,
      autoPlay = false,
      hideDelay = 3000,
      durationHint = 0,
      onPlayingChange,
      onTimeChange,
      onNext,
      onNextCancel,
      onEnded,
      onKeyDown,
      onPointerMove,
      ...props
    },
    forwardedRef,
  ) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const videoRef = React.useRef<HTMLVideoElement | null>(null);
    const hideTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const [playing, setPlaying] = React.useState(false);
    const [buffering, setBuffering] = React.useState(false);
    const [ended, setEnded] = React.useState(false);
    const [time, setTime] = React.useState(0);
    const [duration, setDuration] = React.useState(durationHint);
    const [muted, setMuted] = React.useState(false);
    const [speed, setSpeed] = React.useState(1);
    const [captionsOn, setCaptionsOn] = React.useState(false);
    const [settingsOpen, setSettingsOpen] = React.useState(false);
    const [fullscreen, setFullscreen] = React.useState(false);
    const [controlsVisible, setControlsVisible] = React.useState(true);
    const [countdown, setCountdown] = React.useState<number | null>(null);
    const [nextCancelled, setNextCancelled] = React.useState(false);

    const setRefs = React.useCallback(
      (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      },
      [forwardedRef],
    );

    const isEnded = stateProp ? stateProp === "ended" : ended;
    const isBuffering = stateProp ? stateProp === "buffering" : buffering;
    const isPlaying = stateProp ? stateProp === "playing" || stateProp === "buffering" : playing;
    const isSettings = stateProp ? stateProp === "settings" : settingsOpen;
    const showControls = stateProp ? stateProp !== "controls-hidden" : controlsVisible;
    const immersive = immersiveRatios.includes(ratio as VideoPlayerRatio);

    const revealControls = React.useCallback(() => {
      setControlsVisible(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (playing && !settingsOpen) {
        hideTimer.current = setTimeout(() => setControlsVisible(false), hideDelay);
      }
    }, [playing, settingsOpen, hideDelay]);

    React.useEffect(() => {
      revealControls();
      return () => {
        if (hideTimer.current) clearTimeout(hideTimer.current);
      };
    }, [revealControls]);

    React.useEffect(() => {
      const handler = () => setFullscreen(document.fullscreenElement === containerRef.current);
      document.addEventListener("fullscreenchange", handler);
      return () => document.removeEventListener("fullscreenchange", handler);
    }, []);

    React.useEffect(() => {
      if (!isEnded || !nextLesson || nextCancelled) {
        setCountdown(null);
        return;
      }
      setCountdown(nextLesson.seconds ?? 5);
    }, [isEnded, nextLesson, nextCancelled]);

    React.useEffect(() => {
      if (countdown === null || stateProp) return;
      if (countdown <= 0) {
        onNext?.();
        return;
      }
      const id = setTimeout(
        () => setCountdown((value) => (value === null ? value : value - 1)),
        1000,
      );
      return () => clearTimeout(id);
    }, [countdown, onNext, stateProp]);

    const togglePlay = React.useCallback(() => {
      const video = videoRef.current;
      if (!video) return;
      if (video.paused || video.ended) {
        const result = video.play();
        if (result && typeof result.catch === "function") result.catch(() => undefined);
      } else {
        video.pause();
      }
    }, []);

    const seekTo = React.useCallback(
      (seconds: number) => {
        const video = videoRef.current;
        const next = Math.min(Math.max(seconds, 0), duration || seconds);
        if (video) video.currentTime = next;
        setTime(next);
        onTimeChange?.(next);
      },
      [duration, onTimeChange],
    );

    const toggleMute = () => {
      const video = videoRef.current;
      if (video) video.muted = !video.muted;
      setMuted((value) => !value);
    };

    const toggleFullscreen = () => {
      const el = containerRef.current;
      if (!el) return;
      if (document.fullscreenElement) {
        void document.exitFullscreen?.();
      } else {
        void el.requestFullscreen?.();
      }
    };

    const applySpeed = (value: number) => {
      setSpeed(value);
      if (videoRef.current) videoRef.current.playbackRate = value;
    };

    const toggleCaptions = () => {
      const next = !captionsOn;
      setCaptionsOn(next);
      const track = videoRef.current?.textTracks?.[0];
      if (track) track.mode = next ? "showing" : "hidden";
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);
      revealControls();
      if (event.defaultPrevented) return;
      const onContainer = event.target === event.currentTarget;
      if ((event.key === " " || event.key === "k") && onContainer) {
        event.preventDefault();
        togglePlay();
      } else if (event.key === "ArrowLeft" && onContainer) {
        event.preventDefault();
        seekTo(time - 10);
      } else if (event.key === "ArrowRight" && onContainer) {
        event.preventDefault();
        seekTo(time + 10);
      } else if (event.key === "m" || event.key === "M") {
        toggleMute();
      } else if (event.key === "f" || event.key === "F") {
        toggleFullscreen();
      } else if ((event.key === "c" || event.key === "C") && captions) {
        toggleCaptions();
      } else if (event.key === "Escape" && settingsOpen) {
        setSettingsOpen(false);
      }
    };

    const currentChapter = [...chapters].reverse().find((chapter) => time >= chapter.time);
    const progressAccent =
      tone === "brand"
        ? "accent-(--midas-action-accent-bg)"
        : "accent-(--midas-material-on-media-content)";
    const controlsClass = cn(
      "transition-opacity duration-200 motion-reduce:transition-none",
      showControls ? "opacity-100" : "pointer-events-none opacity-0",
    );

    return (
      <div
        ref={setRefs}
        role="group"
        aria-label={title}
        {...focusable}
        data-slot="video-player"
        data-state={stateProp ?? (isEnded ? "ended" : isPlaying ? "playing" : "paused")}
        data-device={device}
        data-fullscreen={fullscreen ? "true" : undefined}
        className={cn(videoPlayerVariants({ ratio, device }), className)}
        onKeyDown={handleKeyDown}
        onPointerMove={(event) => {
          onPointerMove?.(event);
          revealControls();
        }}
        {...props}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          playsInline
          className="absolute inset-0 -z-10 size-full object-cover"
          onClick={togglePlay}
          onPlay={() => {
            setPlaying(true);
            setEnded(false);
            setNextCancelled(false);
            onPlayingChange?.(true);
          }}
          onPause={() => {
            setPlaying(false);
            onPlayingChange?.(false);
          }}
          onWaiting={() => setBuffering(true)}
          onPlaying={() => setBuffering(false)}
          onEnded={() => {
            onEnded?.();
            setEnded(true);
            setPlaying(false);
            onPlayingChange?.(false);
          }}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || durationHint)}
          onDurationChange={(event) => setDuration(event.currentTarget.duration || durationHint)}
          onTimeUpdate={(event) => {
            setTime(event.currentTarget.currentTime);
            onTimeChange?.(event.currentTarget.currentTime);
          }}
        >
          <track
            kind="captions"
            src={captions?.src}
            srcLang={captions?.srcLang}
            label={captions?.label}
          />
        </video>

        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-material-scrim-bg via-transparent to-material-scrim-bg",
            controlsClass,
          )}
        />

        <div
          className={cn(
            "absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-4",
            controlsClass,
          )}
        >
          <div className="flex min-w-0 flex-col">
            {eyebrow ? <span className="text-mono-overline opacity-80">{eyebrow}</span> : null}
            <span
              className={cn("truncate", device === "mobile" ? "text-label-lg" : "text-heading-sm")}
            >
              {title}
            </span>
            {currentChapter ? (
              <span className="text-caption opacity-80">{currentChapter.label}</span>
            ) : null}
          </div>
        </div>

        {isBuffering && !isEnded ? (
          <div
            role="status"
            aria-label="Carregando"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="size-10 animate-spin rounded-pill border-2 border-material-glass-border border-t-material-on-media-content motion-reduce:animate-none" />
          </div>
        ) : null}

        {!isPlaying && !isEnded && !isBuffering ? (
          <button
            type="button"
            aria-label="Reproduzir"
            onClick={togglePlay}
            className={cn(
              controlButton,
              "material-glass absolute inset-0 m-auto size-control-3xl border border-material-glass-border [&_svg]:size-icon-xl",
            )}
          >
            <IconPlayerPlayFilled aria-hidden />
          </button>
        ) : null}

        {immersive && actions ? (
          <div
            className={cn(
              "absolute end-3 bottom-24 flex flex-col items-center gap-3",
              controlsClass,
            )}
          >
            {actions}
          </div>
        ) : null}

        {isEnded && nextLesson ? (
          <div
            data-slot="video-player-next"
            className="material-frosted-strong absolute inset-0 flex flex-col items-center justify-center gap-3 bg-material-scrim-bg p-6 text-center"
          >
            <span className="text-mono-overline opacity-80">
              {countdown !== null ? `Próxima aula em ${countdown}s` : "Próxima aula"}
            </span>
            <span className="text-heading-md">{nextLesson.title}</span>
            {nextLesson.meta ? (
              <span className="text-caption opacity-80">{nextLesson.meta}</span>
            ) : null}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onNext?.()}
                className="inline-flex h-control-lg items-center rounded-control bg-material-on-media-bg px-4 text-label-md text-material-on-media-bg-content outline-none focus-visible:focus-ring-neutral"
              >
                Assistir agora
              </button>
              <button
                type="button"
                onClick={() => {
                  setNextCancelled(true);
                  onNextCancel?.();
                }}
                className="inline-flex h-control-lg items-center rounded-control border border-material-scrim-border px-4 text-label-md text-material-on-media-content outline-none hover:bg-material-glass-bg focus-visible:focus-ring-neutral"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : null}

        {isSettings ? (
          <div
            data-slot="video-player-settings"
            role="dialog"
            aria-label="Configurações do vídeo"
            className="material-frosted-strong absolute end-3 bottom-20 z-10 flex min-w-48 flex-col gap-2 rounded-overlay border border-material-scrim-border bg-material-scrim-bg p-3"
          >
            <span className="text-label-sm opacity-80">Velocidade</span>
            <div className="flex flex-wrap gap-1">
              {speeds.map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={speed === value}
                  onClick={() => applySpeed(value)}
                  className={cn(
                    "inline-flex h-control-sm items-center rounded-control px-2 text-label-sm outline-none focus-visible:focus-ring-neutral",
                    speed === value
                      ? "bg-material-on-media-bg text-material-on-media-bg-content"
                      : "hover:bg-material-glass-bg",
                  )}
                >
                  {`${String(value).replace(".", ",")}x`}
                </button>
              ))}
            </div>
            {captions ? (
              <button
                type="button"
                role="switch"
                aria-checked={captionsOn}
                onClick={toggleCaptions}
                className="flex items-center justify-between gap-4 rounded-control px-1 py-1 text-label-md outline-none hover:bg-material-glass-bg focus-visible:focus-ring-neutral"
              >
                <span>Legendas</span>
                <span className="text-caption opacity-80">
                  {captionsOn ? captions.label : "Desativadas"}
                </span>
              </button>
            ) : null}
          </div>
        ) : null}

        <div
          data-slot="video-player-controls"
          className={cn("flex flex-col gap-1 px-3 pt-2 pb-3", controlsClass)}
        >
          <div className="relative flex h-4 items-center">
            <input
              type="range"
              aria-label="Linha do tempo"
              aria-valuetext={`${formatVideoTime(time)} de ${formatVideoTime(duration)}`}
              min={0}
              max={duration || 1}
              step={0.1}
              value={Math.min(time, duration || 1)}
              onChange={(event) => seekTo(Number(event.target.value))}
              className={cn(
                "h-1 w-full cursor-pointer outline-none focus-visible:focus-ring-neutral",
                progressAccent,
              )}
            />
            {duration > 0
              ? chapters
                  .filter((chapter) => chapter.time > 0)
                  .map((chapter) => (
                    <span
                      key={chapter.time}
                      aria-hidden
                      title={chapter.label}
                      className="pointer-events-none absolute top-1/2 h-2 w-0.5 -translate-y-1/2 bg-material-on-media-content/60"
                      style={{ insetInlineStart: `${(chapter.time / duration) * 100}%` }}
                    />
                  ))
              : null}
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
              onClick={togglePlay}
              className={controlButton}
            >
              {isPlaying ? (
                <IconPlayerPauseFilled aria-hidden />
              ) : (
                <IconPlayerPlayFilled aria-hidden />
              )}
            </button>
            {device === "desktop" && !immersive ? (
              <>
                <button
                  type="button"
                  aria-label="Voltar 10 segundos"
                  onClick={() => seekTo(time - 10)}
                  className={controlButton}
                >
                  <IconRewindBackward10 aria-hidden className="rtl:-scale-x-100" />
                </button>
                <button
                  type="button"
                  aria-label="Avançar 10 segundos"
                  onClick={() => seekTo(time + 10)}
                  className={controlButton}
                >
                  <IconRewindForward10 aria-hidden className="rtl:-scale-x-100" />
                </button>
                <button
                  type="button"
                  aria-label={muted ? "Ativar som" : "Silenciar"}
                  aria-pressed={muted}
                  onClick={toggleMute}
                  className={controlButton}
                >
                  {muted ? <IconVolumeOff aria-hidden /> : <IconVolume aria-hidden />}
                </button>
              </>
            ) : null}
            <span className="ms-1 text-mono-sm tabular-nums">
              {formatVideoTime(time)} / {formatVideoTime(duration)}
            </span>
            <span className="ms-auto flex items-center gap-1">
              {speed !== 1 ? (
                <span className="text-mono-sm tabular-nums">{`${String(speed).replace(".", ",")}x`}</span>
              ) : null}
              {captions ? (
                <button
                  type="button"
                  aria-label="Legendas"
                  aria-pressed={captionsOn}
                  onClick={toggleCaptions}
                  className={controlButton}
                >
                  <IconBadgeCc aria-hidden />
                </button>
              ) : null}
              <button
                type="button"
                aria-label="Configurações"
                aria-expanded={isSettings}
                onClick={() => setSettingsOpen((value) => !value)}
                className={controlButton}
              >
                <IconSettings aria-hidden />
              </button>
              <button
                type="button"
                aria-label={fullscreen ? "Sair da tela cheia" : "Tela cheia"}
                onClick={toggleFullscreen}
                className={controlButton}
              >
                {fullscreen ? <IconMinimize aria-hidden /> : <IconMaximize aria-hidden />}
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  },
);
VideoPlayer.displayName = "VideoPlayer";

export interface MiniPlayerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof miniPlayerVariants> {
  title: string;
  playing?: boolean;
  currentTime?: number;
  duration?: number;
  onTogglePlay?: () => void;
  onClose?: () => void;
  onExpand?: () => void;
}

export const miniPlayerVariants = cva(
  "material-frosted-strong flex w-80 max-w-full items-center gap-2 rounded-container border border-material-scrim-border bg-material-scrim-bg p-2 text-material-on-media-content shadow-elevation-overlay",
  {
    variants: {
      tone: {
        brand: "[--mini-player-accent:var(--midas-action-accent-bg)]",
        neutral: "[--mini-player-accent:var(--midas-material-on-media-content)]",
      },
    },
    defaultVariants: { tone: "brand" },
  },
);

export const MiniPlayer = React.forwardRef<HTMLDivElement, MiniPlayerProps>(
  (
    {
      className,
      tone,
      title,
      playing = false,
      currentTime = 0,
      duration = 0,
      onTogglePlay,
      onClose,
      onExpand,
      ...props
    },
    ref,
  ) => {
    const percent = duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;
    return (
      <div
        ref={ref}
        role="group"
        aria-label={`Mini player: ${title}`}
        data-slot="mini-player"
        data-state={playing ? "playing" : "paused"}
        className={cn(miniPlayerVariants({ tone }), className)}
        {...props}
      >
        <button
          type="button"
          aria-label={playing ? "Pausar" : "Reproduzir"}
          onClick={onTogglePlay}
          className={controlButton}
        >
          {playing ? <IconPlayerPauseFilled aria-hidden /> : <IconPlayerPlayFilled aria-hidden />}
        </button>
        <button
          type="button"
          onClick={onExpand}
          className="flex min-w-0 flex-1 flex-col gap-1 rounded-control text-start outline-none focus-visible:focus-ring-neutral"
        >
          <span className="truncate text-label-md">{title}</span>
          <span
            role="progressbar"
            aria-label="Progresso"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(percent)}
            className="block h-1 w-full overflow-hidden rounded-pill bg-material-glass-bg"
          >
            <span
              className="block h-full rounded-pill bg-(--mini-player-accent)"
              style={{ width: `${percent}%` }}
            />
          </span>
          <span className="text-mono-sm tabular-nums opacity-80">
            {formatVideoTime(currentTime)} / {formatVideoTime(duration)}
          </span>
        </button>
        {onClose ? (
          <button type="button" aria-label="Fechar" onClick={onClose} className={controlButton}>
            <IconX aria-hidden />
          </button>
        ) : null}
      </div>
    );
  },
);
MiniPlayer.displayName = "MiniPlayer";
