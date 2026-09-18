type PageLoaderProps = {
  /** Fixed overlay (initial load). Default: inline block for route loading. */
  fullscreen?: boolean;
  leaving?: boolean;
};

export default function PageLoader({ fullscreen = false, leaving = false }: PageLoaderProps) {
  return (
    <div
      className={`page-loader${fullscreen ? " page-loader-fullscreen" : ""}${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Načítání stránky"
    >
      <div className="page-loader-inner">
        <span className="page-loader-mark" aria-hidden>
          BV
        </span>
        <span className="page-loader-track" aria-hidden>
          <span className="page-loader-bar" />
        </span>
      </div>
    </div>
  );
}
