import { WeeklyWorkout } from './Goal.interface'

export enum GoalDistance {
  marathon = 'marathon',
  halfMarathon = 'halfMarathon',
  _10k = '10k',
  _5k = '5k',
}

export enum GoalType {
  first = 'first',
  performance = 'performance',
}

export interface Goal {
  _id?: string
  target: {
    distance: GoalDistance
    goalType: GoalType
    month?: number
    day?: number
  }
  weeklyWorkouts: number
  startingMileage: number
  schedule: WeeklyWorkout[]
}

export type Activity = { _id: string; userId: string } & Workout

export type Geo = GpsPoint

export interface Workout {
  _id: string
  general: Partial<WorkoutGeneral>
  gps: GpsPoint[]
  laps: Lap[]
  altitude?: Altitude
  achievements?: Achievements
  external?: External
  heart?: Heart
  privacy?: Privacy
  weather?: Weather
}

interface Altitude {
  max: number
  min: number
  ascent: number
  descent: number
}

interface Heart {
  avg: number | null | undefined
  max: number | null | undefined
  zones: HeartRateZones | null | undefined
}

interface HeartRateZones {
  max: number
  rest: number
  zone1_start: number
  zone2_start: number
  zone3_start: number
  zone4_start: number
  zone5_start: number
  rest_duration: number
  zone1_duration: number
  zone2_duration: number
  zone3_duration: number
  zone4_duration: number
  zone5_duration: number
}

export interface WorkoutGeneral {
  workoutType: string
  cadence: number
  calories: number
  distance: number
  duration: number
  hydration?: number
  local_start_time: string
  start_time: string
  sport: number
  speed_avg: number
  speed_max: number
}

interface Lap {
  small_encoded_polyline: undefined
  average_pace: number
  average_heart_rate?: number | null | undefined
  distance: number
  duration: number
  begin_latitude: number
  begin_longitude: number
  end_latitude: number
  end_longitude: number
}

interface Privacy {
  show_workout: number
  show_map: number
}

interface External {
  endomondo_id: number
}

interface Weather {
  temperature: number
  humidity: number
  wind_speed: number
  wind_direction: number
  type: number
}

interface GpsPoint {
  time: string
  instruction?: number | null
  latitude: number
  longitude: number
  altitude?: number
  distance: number
  duration?: number
  sensor_data: SensorData
  speed?: number | null
}

interface SensorData {
  heart_rate?: number | null
  cadence?: number | null
  speed?: number | null
}

interface Record {
  type: number
  value: number
  start_distance: number
  end_distance: number
  distance_based: boolean
  encoded_polyline?: string | null
}

interface Achievements {
  personal_bests?: null[]
  records?: Record[]
}
