import { describe, it, expect } from 'vitest'
import type { TourLog } from '@utpost/shared'
import { elevationGain } from './tours'

const log = (elevation_m: number | null, id = 0): TourLog => ({
  id,
  tour_id: 1,
  recorded_at: '2026-09-01T08:00:00.000Z',
  lat: 67.9,
  lon: 18.5,
  elevation_m,
  heart_rate: null,
  note: null,
})

describe('elevationGain', () => {
  it('hoppar över mätpunkter utan höjd i stället för att räkna dem som noll', () => {
    expect(elevationGain([log(100), log(null), log(150)])).toBe(50)
  })
})
