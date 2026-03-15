import "./globals.css";
import Script from "next/script";
import Providers from "./providers";

export const metadata = {
  title: "Syntrix Technologies | Agency",
  description: "A product of emergent.sh",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Manrope:wght@500;600;700;800&family=Caveat:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen">
        <div className="fixed inset-0 -z-50 pointer-events-none">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-[0.05] dark:opacity-[0.03] mix-blend-overlay" />
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-accent/15 blur-[100px] rounded-full" />
        </div>

        <Script id="performance-server-timing-fix" strategy="beforeInteractive">
          {`window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);`}
        </Script>

        <Script id="posthog" strategy="afterInteractive">
          {`!(function(t,e){var o,n,p,r;e.__SV||((window.posthog=e),(e._i=[]),(e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&((t=t[o[0]]),(e=o[1])),(t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))});}((p=t.createElement("script")).type="text/javascript"),(p.crossOrigin="anonymous"),(p.async=!0),(p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js"),(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?(u=e[a]=[]):(a="posthog"),u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init me ws ys ps bs capture je Di ks register register_once register_for_session unregister unregister_for_session Ps getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Es $s createPersonProfile Is opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Ss debug xs getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])}),(e.__SV=1))})(document,window.posthog||[]);posthog.init("phc_xAvL2Iq4tFmANRE7kzbKwaSqp1HJjN7x48s3vr0CMjs",{api_host:"https://us.i.posthog.com",person_profiles:"identified_only",session_recording:{recordCrossOriginIframes:!0,capturePerformance:!1}});`}
        </Script>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
