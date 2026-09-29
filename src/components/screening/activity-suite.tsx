"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Gauge, Play, RefreshCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhotoCard } from "@/components/common/photo-card";
import { motorActivities } from "@/lib/data/motor-activities";
import { ScreeningProgress } from "@/components/screening/screening-progress";

const STORAGE_KEY = "dyspra-care-activities";
const pathTargets = [
  { name: "A", x: 16, y: 22 },
  { name: "B", x: 37, y: 44 },
  { name: "C", x: 52, y: 26 },
  { name: "D", x: 72, y: 58 },
  { name: "E", x: 58, y: 77 },
  { name: "F", x: 26, y: 76 },
];

function readStoredScores() {
  if (typeof window === "undefined") {
    return { trace: 0, tap: 0, rhythm: 0 };
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return { trace: 0, tap: 0, rhythm: 0 };
    }

    const parsed = JSON.parse(saved) as Partial<Record<"trace" | "tap" | "rhythm", number>>;
    return {
      trace: Number.isFinite(parsed.trace) ? Math.max(0, Math.min(100, Number(parsed.trace))) : 0,
      tap: Number.isFinite(parsed.tap) ? Math.max(0, Math.min(100, Number(parsed.tap))) : 0,
      rhythm: Number.isFinite(parsed.rhythm) ? Math.max(0, Math.min(100, Number(parsed.rhythm))) : 0,
    };
  } catch {
    return { trace: 0, tap: 0, rhythm: 0 };
  }
}

function PathTraceGame({ onScore, initialScore = 0 }: { onScore: (score: number) => void; initialScore?: number }) {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(() => {
    const startingIndex = Math.round((initialScore / 100) * pathTargets.length);
    return Math.max(0, Math.min(pathTargets.length, startingIndex));
  });

  const score = Math.min(100, Math.round((currentIndex / pathTargets.length) * 100));

  useEffect(() => {
    onScore(score);
  }, [onScore, score]);

  const handleSelect = (index: number) => {
    if (!started || currentIndex >= pathTargets.length) {
      return;
    }

    if (index === currentIndex) {
      setCurrentIndex((value) => {
        const nextValue = Math.min(value + 1, pathTargets.length);
        if (nextValue >= pathTargets.length) {
          setStarted(false);
        }

        return nextValue;
      });
    }
  };

  const resetGame = () => {
    setStarted(false);
    setCurrentIndex(0);
    onScore(0);
  };

  return (
    <div className="activity-card">
      <div className="activity-header">
        <div>
          <p className="eyebrow">Activity 1</p>
          <h3>{motorActivities[0].title}</h3>
        </div>
        <span className="activity-score">{score}%</span>
      </div>
      <PhotoCard src={motorActivities[0].photoUrl} alt="Child tracing a path with a toy" title="Precision tracing" description={motorActivities[0].instructions} className="activity-photo" />
      <div className="trace-board" aria-label="Path tracing game area">
        <svg viewBox="0 0 100 100" className="trace-svg" aria-hidden="true">
          <path d="M 16 22 C 30 8, 40 38, 52 26 S 72 58, 58 77 S 18 82, 26 76" />
        </svg>
        {pathTargets.map((target, index) => (
          <button
            key={target.name}
            type="button"
            className={`trace-target ${index < currentIndex ? "complete" : ""} ${index === currentIndex && started ? "active" : ""}`}
            style={{ left: `${target.x}%`, top: `${target.y}%` }}
            onClick={() => handleSelect(index)}
            aria-label={`Target ${target.name}`}
          >
            {target.name}
          </button>
        ))}
      </div>
      <p className="activity-feedback" aria-live="polite">
        {currentIndex >= pathTargets.length
          ? "Path complete. Your progress has been saved."
          : started
            ? `Find target ${pathTargets[currentIndex]?.name} to continue.`
            : "Start when you are ready. Select each target in order."}
      </p>
      <div className="activity-actions">
        <Button variant={started ? "secondary" : "default"} onClick={() => setStarted(true)} disabled={currentIndex >= pathTargets.length}>
          <Play aria-hidden="true" className="size-4" />
          {started ? "Keep going" : "Start tracing"}
        </Button>
        <Button variant="quiet" onClick={resetGame} type="button">
          <RefreshCcw aria-hidden="true" className="size-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}

function TargetTapGame({ onScore, initialScore = 0 }: { onScore: (score: number) => void; initialScore?: number }) {
  const [timeLeft, setTimeLeft] = useState(12);
  const [hits, setHits] = useState(() => Math.min(10, Math.round((initialScore / 100) * 10)));
  const [position, setPosition] = useState({ x: 30, y: 35 });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    if (timeLeft <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setTimeLeft((value) => {
        if (value <= 1) {
          setIsRunning(false);
          return 0;
        }

        return value - 1;
      });
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    const score = Math.min(100, Math.round((hits / 10) * 100));
    onScore(score);
  }, [hits, onScore]);

  const handleTargetClick = () => {
    if (!isRunning || timeLeft <= 0) {
      return;
    }

    setHits((value) => value + 1);
    setPosition({
      x: 18 + Math.random() * 64,
      y: 18 + Math.random() * 58,
    });
  };

  const resetGame = () => {
    setTimeLeft(12);
    setHits(0);
    setPosition({ x: 30, y: 35 });
    setIsRunning(true);
    onScore(0);
  };

  const liveScore = Math.min(100, Math.round((hits / 10) * 100));

  return (
    <div className="activity-card">
      <div className="activity-header">
        <div>
          <p className="eyebrow">Activity 2</p>
          <h3>{motorActivities[1].title}</h3>
        </div>
        <span className="activity-score">{liveScore}%</span>
      </div>
      <PhotoCard src={motorActivities[1].photoUrl} alt="Child tapping moving targets" title="Target tapping" description={motorActivities[1].instructions} className="activity-photo" />
      <div className="tap-board" aria-label="Target tapping game area">
        <div className="tap-timer">{timeLeft}s</div>
        {timeLeft > 0 ? (
          <button
            type="button"
            className="tap-target"
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
            onClick={handleTargetClick}
            aria-label="Tap target"
          >
            +1
          </button>
        ) : null}
      </div>
      <div className="activity-meta">
        <span>Hits: {hits}</span>
        <span>Timer: {timeLeft}s</span>
      </div>
      <p className="activity-feedback" aria-live="polite">
        {timeLeft === 0 ? `Activity complete. You tapped ${hits} ${hits === 1 ? "target" : "targets"}.` : "Tap the target as it moves. You can retry whenever you are ready."}
      </p>
      <div className="activity-actions">
        <Button variant="secondary" onClick={resetGame} type="button">
          <RefreshCcw aria-hidden="true" className="size-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}

function RhythmSyncGame({ onScore, initialScore = 0 }: { onScore: (score: number) => void; initialScore?: number }) {
  const intervalRef = useRef<number | undefined>(undefined);
  const timeoutRef = useRef<number | undefined>(undefined);
  const [pulseVisible, setPulseVisible] = useState(false);
  const [beats, setBeats] = useState(() => Math.max(0, Math.round((initialScore / 100) * 10)));
  const [successful, setSuccessful] = useState(() => Math.round((initialScore / 100) * 10));
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setBeats((value) => value + 1);
      setPulseVisible(true);
      timeoutRef.current = window.setTimeout(() => setPulseVisible(false), 320);
    }, 1400);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [isRunning]);

  const score = beats === 0 ? 0 : Math.min(100, Math.round((successful / beats) * 100));

  useEffect(() => {
    onScore(score);
  }, [onScore, score]);

  const handleTap = () => {
    if (!pulseVisible || !isRunning) {
      return;
    }

    setSuccessful((value) => value + 1);
    setPulseVisible(false);
  };

  const resetGame = () => {
    setPulseVisible(false);
    setBeats(0);
    setSuccessful(0);
    setIsRunning(true);
    onScore(0);
  };

  return (
    <div className="activity-card">
      <div className="activity-header">
        <div>
          <p className="eyebrow">Activity 3</p>
          <h3>{motorActivities[2].title}</h3>
        </div>
        <span className="activity-score">{score}%</span>
      </div>
      <PhotoCard src={motorActivities[2].photoUrl} alt="Child keeping rhythm with a beat" title="Rhythm matching" description={motorActivities[2].instructions} className="activity-photo" />
      <div className="rhythm-board">
        <div
          className={`pulse-dot ${pulseVisible ? "active" : ""}`}
          role="img"
          aria-label={pulseVisible ? "Beat now" : "Waiting for the next beat"}
          aria-live="polite"
        />
      </div>
      <div className="activity-actions rhythm-actions">
        <Button onClick={handleTap} type="button">
          <Gauge aria-hidden="true" className="size-4" />
          Tap in time
        </Button>
        <Button variant="secondary" onClick={resetGame} type="button">
          <RefreshCcw aria-hidden="true" className="size-4" />
          Reset
        </Button>
        <span className="rhythm-meta">
          {successful}/{beats} successful beats
        </span>
      </div>
      <p className="activity-feedback">Tap when the circle grows. The activity continues at a gentle pace; you can stop whenever you like.</p>
    </div>
  );
}

export function ActivitySuite() {
  const router = useRouter();
  const savedScores = useMemo(() => readStoredScores(), []);
  const [traceScore, setTraceScore] = useState(savedScores.trace);
  const [tapScore, setTapScore] = useState(savedScores.tap);
  const [rhythmScore, setRhythmScore] = useState(savedScores.rhythm);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ trace: traceScore, tap: tapScore, rhythm: rhythmScore }));
    }
  }, [rhythmScore, tapScore, traceScore]);

  const activitySummary = useMemo(
    () => ({ trace: traceScore, tap: tapScore, rhythm: rhythmScore }),
    [rhythmScore, tapScore, traceScore],
  );

  const handleSave = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(activitySummary));
    }
    router.push("/results");
  };

  return (
    <section className="screening-tests-page">
      <div className="page-shell tests-layout">
        <ScreeningProgress currentStep={2} />
        <div className="tests-header">
          <p className="eyebrow">Optional movement check</p>
          <h1>Try a few brief activities.</h1>
          <p>
            These short tasks are designed to help families and educators notice patterns in motor coordination, attention,
            and rhythm in a relaxed, low-pressure setting.
          </p>
        </div>

        <div className="activity-grid">
          <PathTraceGame onScore={setTraceScore} initialScore={savedScores.trace} />
          <TargetTapGame onScore={setTapScore} initialScore={savedScores.tap} />
          <RhythmSyncGame onScore={setRhythmScore} initialScore={savedScores.rhythm} />
        </div>

        <div className="activity-footer">
          <p className="activity-summary-note">
            <Sparkles aria-hidden="true" className="size-4" />
            Your screen is only a snapshot of what is being noticed. It is not a diagnosis.
          </p>
          <Button onClick={handleSave} className="justify-center" type="button">
            View results <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
