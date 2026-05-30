import { useState, useEffect, useMemo } from 'react'
import { evaluateGate, GATE_MAX_WEIGHT_KG, GATE_MIN_HEIGHT_CM } from '../gateLogic'

export default function Simulator() {
  const [height, setHeight] = useState(120)
  const [weight, setWeight] = useState(35)
  const [isPolling, setIsPolling] = useState(false)

  useEffect(() => {
    if (!isPolling) return

    const id = setInterval(() => {
      setHeight((h) => {
        const delta = (Math.random() - 0.5) * 6
        return Math.round(Math.min(190, Math.max(90, h + delta)))
      })
      setWeight((w) => {
        const delta = (Math.random() - 0.5) * 4
        return Math.round(Math.min(110, Math.max(20, w + delta)))
      })
    }, 300)

    return () => clearInterval(id)
  }, [isPolling])

  const gateStatus = useMemo(() => evaluateGate(height, weight), [height, weight])

  return (
    <section id="systems" className="section-wrap px-6 md:px-10 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Live Demo</p>
        <h2 className="section-title">Hardware Simulator</h2>
        <p className="section-subtitle">
          An interactive replica of the published Arduino gate system — adjust sensor inputs and
          watch the servo logic respond in real time.
        </p>

        <div className="sim-card">
          <div className="sim-card-header flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4">
            <div>
              <p className="text-xs font-medium mb-1 text-muted">
                Microcontroller Simulation · Arduino Mega 2560
              </p>
              <h3 className="text-base font-bold m-0">Automated Playground Gate System</h3>
            </div>
            <button
              type="button"
              className={`btn-coral text-sm shrink-0 px-[18px] py-2 ${isPolling ? 'btn-polling' : ''}`}
              onClick={() => setIsPolling((p) => !p)}
            >
              {isPolling ? 'Stop Polling' : 'Start Polling'}
            </button>
          </div>

          <div className="p-6">
            <p className="text-sm leading-relaxed mb-6 text-secondary">
              Safety gate controller using ultrasonic height sensing and load cell weight
              measurement to automate access control for amusement ride entry — preventing
              accidents by enforcing physical safety constraints.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="sim-panel p-5 rounded-xl">
                <h4 className="text-sm font-semibold mb-5">Sensor Inputs</h4>

                <div className="mb-6">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-secondary">Height (cm)</span>
                    <span className="font-semibold text-coral">{height} cm</span>
                  </div>
                  <input
                    type="range"
                    min={90}
                    max={190}
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    disabled={isPolling}
                  />
                  <div className="flex justify-between text-xs mt-1 text-muted">
                    <span>90 cm</span>
                    <span>190 cm</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-secondary">Weight (kg)</span>
                    <span className="font-semibold text-coral">{weight} kg</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={110}
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    disabled={isPolling}
                  />
                  <div className="flex justify-between text-xs mt-1 text-muted">
                    <span>20 kg</span>
                    <span>110 kg</span>
                  </div>
                </div>

                <p className="text-xs mt-4 text-muted">
                  Limits: min height {GATE_MIN_HEIGHT_CM} cm · max weight {GATE_MAX_WEIGHT_KG} kg
                </p>
              </div>

              <div className="sim-panel p-5 rounded-xl flex flex-col justify-center">
                <h4 className="text-sm font-semibold mb-4">Gate Status</h4>
                <span
                  className={`gate-badge inline-flex self-start items-center gap-2 px-4 py-2 text-sm font-semibold mb-4 ${
                    gateStatus.unlocked ? 'gate-badge--open' : 'gate-badge--closed'
                  }`}
                >
                  <span className="gate-badge-dot inline-block w-2 h-2 rounded-full" />
                  {gateStatus.unlocked ? 'Unlocked' : 'Locked'}
                </span>
                <p className="text-sm leading-relaxed m-0 font-mono text-secondary">
                  {gateStatus.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
