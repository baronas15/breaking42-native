import { WorkoutDescriptor } from './../../domain/Goal.interface'

export const hillsRun: WorkoutDescriptor = {
  type: 'hillsRun',
  name: 'Hills run',
  description:
    'Running up hills is a great way to develop speed and strength with minimal pounding on the legs.',
  iconColor: '#777',
  gradient: ['#c79081', '#dfa579'],
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
