import { WorkoutDescriptor } from './../../domain/Goal.interface'

export const tempoRun: WorkoutDescriptor = {
  type: 'tempoRun',
  name: 'Tempo run',
  description:
    'Tempo runs should feel challenging; on a scale of one to 10, your effort will feel like a seven or eight.',
  iconColor: '#777',
  gradient: ['#f6d365', '#fda085'],
  goalDependencies: [
    {
      condition: {
        goalTypes: ['first', 'performance'],
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
}
