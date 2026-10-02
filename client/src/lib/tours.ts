import type { TourLog } from '@utpost/shared'

export const elevationGain = (logs: TourLog[]): number => {
  let gain = 0
  let previous: number | null = null
  for (const log of logs) {
    if (log.elevation_m === null) continue
    if (previous !== null && log.elevation_m > previous) gain += log.elevation_m - previous
    previous = log.elevation_m
  }
  return gain
}
