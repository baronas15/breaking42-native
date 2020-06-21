import { WorkoutDescriptor } from '../../domain/Goal.interface'

export const intervalRun: WorkoutDescriptor = {
  type: 'intervalRun',
  name: 'Interval training',
  description:
    'Speed Run session that includes a set of running and rest intervals.',
  iconColor: '#777',
  gradient: ['#fc6076', '#f09819'],
  goalDependencies: [
    {
      condition: {
        goalTypes: ['performance'],
        distances: ['halfMarathon', 'marathon'],
      },
      action: {
        type: 'rotation',
        rotation: {
          category: 'speed',
        },
        maxLength: 60,
      },
    },
    {
      condition: {
        goalTypes: ['performance'],
        distances: ['10k', '5k'],
      },
      action: {
        type: 'rotation',
        rotation: {
          category: 'speed',
        },
        maxLength: 60,
      },
    },
  ],
  laps: [
    {
      resourceKey: 'warmup',
      configuration: {
        time: 480 * 1000,
      },
    },
    {
      resourceKey: 'first_10k_pace',
      configuration: {
        time: 180 * 1000,
      },
    },
    {
      resourceKey: 'recovery',
      configuration: {
        time: 60 * 1000,
      },
    },
    {
      resourceKey: 'mile_pace',
      configuration: {
        time: 60 * 1000,
      },
    },
    {
      resourceKey: 'recovery',
      configuration: {
        time: 60 * 1000,
      },
    },
    {
      resourceKey: '5k_pace',
      configuration: {
        time: 120 * 1000,
      },
    },
    {
      resourceKey: 'recovery',
      configuration: {
        time: 60 * 1000,
      },
    },
    {
      resourceKey: 'mile_pace',
      configuration: {
        time: 60 * 1000,
      },
    },
    {
      resourceKey: 'recovery',
      configuration: {
        time: 60 * 1000,
      },
    },
    {
      resourceKey: '5k_pace',
      configuration: {
        time: 120 * 1000,
      },
    },
    {
      resourceKey: 'recovery',
      configuration: {
        time: 60 * 1000,
      },
    },
    {
      resourceKey: 'mile_pace',
      configuration: {
        time: 60 * 1000,
      },
    },
    {
      resourceKey: 'recovery',
      configuration: {
        time: 60 * 1000,
      },
    },
    {
      resourceKey: '10k_pace',
      configuration: {
        time: 300 * 1000,
      },
    },
    {
      resourceKey: 'best',
      configuration: {
        time: 30 * 1000,
      },
    },
  ],
  workoutHooks: [
    {
      condition: {
        type: 'event',
        hook: ['completedKilometer'],
      },
      action: {},
    },
    {
      condition: {
        type: 'event',
        hook: ['start'],
      },
      action: {
        sounds: [
          {
            file: 'start_interval_run',
          },
        ],
      },
    },
    {
      condition: {
        type: 'interval',
        hook: ['preInterval'],
        resolver: ({ time, resourceKey }: any) =>
          time === 0 && ['recovery'].some(x => x === resourceKey),
      },
      action: {
        sounds: [
          {
            file: 'start_recovery',
          },
        ],
      },
    },
    {
      condition: {
        type: 'interval',
        hook: ['preInterval'],
        resolver: ({ time, resourceKey }: any) =>
          time === -5000 &&
          [
            'first_10k_pace',
            '10k_pace',
            '5k_pace',
            'mile_pace',
            'best',
            'recovery',
          ].some(x => x === resourceKey),
      },
      action: {
        sounds: [
          {
            file: 'number_5',
          },
          {
            file: 'number_4',
          },
          {
            file: 'number_3',
          },
          {
            file: 'number_2',
          },
          {
            file: 'number_1',
          },
        ],
      },
    },

    // Warmup
    {
      condition: {
        type: 'interval',
        hook: ['lapInterval'],
        resolver: ({ time, resourceKey }: any) =>
          time === 10 * 1000 && resourceKey === 'warmup',
      },
      action: {
        sounds: [
          {
            file: 'instructions_warmup',
          },
        ],
      },
    },
    {
      condition: {
        type: 'interval',
        hook: ['lapInterval'],
        resolver: ({ time, resourceKey }: any) =>
          time === 240 * 1000 && resourceKey === 'warmup',
      },
      action: {
        sounds: [
          {
            file: 'halfway_warmup',
          },
        ],
      },
    },
    {
      condition: {
        type: 'interval',
        hook: ['lapInterval'],
        resolver: ({ time, resourceKey }: any) =>
          time === 450 * 1000 && resourceKey === 'warmup',
      },
      action: {
        sounds: [
          {
            file: 'warmup_end',
          },
        ],
      },
    },

    // 10k
    {
      condition: {
        type: 'interval',
        hook: ['lapInterval'],
        resolver: ({ time, resourceKey }: any) =>
          time === 90 * 1000 && ['first_10k_pace'].some(x => x === resourceKey),
      },
      action: {
        sounds: [
          {
            file: 'halfway_10k',
          },
        ],
      },
    },
    {
      condition: {
        type: 'interval',
        hook: ['lapInterval'],
        resolver: ({ time, resourceKey }: any) =>
          time === 150 * 1000 && ['10k_pace'].some(x => x === resourceKey),
      },
      action: {
        sounds: [
          {
            file: 'halfway_10k',
          },
        ],
      },
    },
    {
      condition: {
        type: 'interval',
        hook: ['preInterval'],
        resolver: ({ time, resourceKey }: any) =>
          time === -10 * 1000 && ['10k_pace'].some(x => x === resourceKey),
      },
      action: {
        sounds: [
          {
            file: 'instructions_10k',
          },
        ],
      },
    },

    // 5k
    {
      condition: {
        type: 'interval',
        hook: ['preInterval'],
        resolver: ({ time, resourceKey }: any) =>
          time === -10000 && ['5k_pace'].some(x => x === resourceKey),
      },
      action: {
        sounds: [
          {
            file: 'instructions_5k',
          },
        ],
      },
    },

    // Mile
    {
      condition: {
        type: 'interval',
        hook: ['preInterval'],
        resolver: ({ time, resourceKey }: any) =>
          time === -10000 && ['mile_pace'].some(x => x === resourceKey),
      },
      action: {
        sounds: [
          {
            file: 'instructions_mile',
          },
        ],
      },
    },

    // Celebration
    {
      condition: {
        type: 'interval',
        hook: ['preInterval'],
        resolver: ({ time, resourceKey }: any) =>
          time === -10000 && ['best'].some(x => x === resourceKey),
      },
      action: {
        sounds: [
          {
            file: 'instructions_celebration',
          },
        ],
      },
    },
  ],
}
