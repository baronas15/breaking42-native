import { WorkoutHook } from '../domain/Goal.interface'

export const defaultWorkoutHooks: WorkoutHook[] = [
  {
    condition: {
      type: 'event',
      hook: ['start'],
    },
    action: {
      sounds: [{ file: 'start_default' }],
    },
  },
  {
    condition: {
      type: 'event',
      hook: ['pause'],
    },
    action: {
      sounds: [{ file: 'pause' }],
    },
  },
  {
    condition: {
      type: 'event',
      hook: ['resume'],
    },
    action: {
      sounds: [{ file: 'resume' }],
    },
  },
  {
    condition: {
      type: 'event',
      hook: ['complete'],
    },
    action: {
      sounds: [{ file: 'complete' }],
    },
  },
  {
    condition: {
      type: 'event',
      hook: ['completedKilometer'],
    },
    action: {
      sounds: [
        {
          resolver: ({ distanceInKilometers }: any) =>
            `number_${Math.trunc(distanceInKilometers)}`,
        },
        {
          resolver: ({ distanceInKilometers }: any) =>
            distanceInKilometers === 1 ? 'kilometer' : 'kilometers',
        },
        { file: 'lap_completed' },
        {
          resolver: ({ durationHours }: any) =>
            durationHours ? `number_${Math.trunc(durationHours)}` : '',
        },
        {
          resolver: ({ durationHours }: any) =>
            durationHours ? (durationHours === 1 ? 'hour' : 'hours') : '',
        },
        {
          resolver: ({ durationMinutes }: any) =>
            durationMinutes ? `number_${Math.trunc(durationMinutes)}` : '',
        },
        {
          resolver: ({ durationMinutes }: any) =>
            durationMinutes
              ? durationMinutes === 1
                ? 'minute'
                : 'minutes'
              : '',
        },
        {
          resolver: ({ durationSeconds }: any) =>
            `number_${Math.trunc(durationSeconds)}`,
        },
        {
          resolver: ({ durationSeconds }: any) =>
            durationSeconds
              ? durationSeconds === 1
                ? 'second'
                : 'seconds'
              : '',
        },
        {
          file: 'avg_pace',
        },
        {
          resolver: ({ averageMinutes }: any) =>
            `number_${Math.trunc(averageMinutes)}`,
        },
        {
          resolver: ({ averageSeconds }: any) =>
            `number_${Math.trunc(averageSeconds)}`,
        },
        {
          file: 'per_kilometer',
        },
      ],
    },
  },
]
