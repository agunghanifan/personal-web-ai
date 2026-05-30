export const GATE_MIN_HEIGHT_CM = 110
export const GATE_MAX_WEIGHT_KG = 80

export type GateStatus = {
  unlocked: boolean
  message: string
}

export function evaluateGate(heightCm: number, weightKg: number): GateStatus {
  const heightOk = heightCm >= GATE_MIN_HEIGHT_CM
  const weightOk = weightKg <= GATE_MAX_WEIGHT_KG
  const unlocked = heightOk && weightOk

  if (unlocked) {
    return {
      unlocked: true,
      message: '[OK] HC-SR04 + HX711 pass — digitalWrite(SERVO_PIN, HIGH)',
    }
  }

  if (!heightOk && !weightOk) {
    return {
      unlocked: false,
      message: `[BLOCK] height ${heightCm}cm < ${GATE_MIN_HEIGHT_CM}cm AND weight ${weightKg}kg > ${GATE_MAX_WEIGHT_KG}kg`,
    }
  }

  if (!heightOk) {
    return {
      unlocked: false,
      message: `[BLOCK] height ${heightCm}cm < min ${GATE_MIN_HEIGHT_CM}cm — ultrasonic fail`,
    }
  }

  return {
    unlocked: false,
    message: `[BLOCK] weight ${weightKg}kg > max ${GATE_MAX_WEIGHT_KG}kg — load cell fail`,
  }
}
