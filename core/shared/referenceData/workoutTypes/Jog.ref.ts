import { WorkoutDescriptor } from './../../domain/Goal.interface'

export const jog: WorkoutDescriptor = {
  type: 'jog',
  name: 'Easy jog',
  description:
    'Easy runs should be done 30 seconds to one minute per mile slower than your marathon goal pace.',
  iconColor: '#777',
  gradient: ['#d4fc79', '#96e6a1'],
  goalDependencies: [
    {
      condition: {
        goalTypes: ['first'],
        distances: ['5k', '10k'],
      },
      action: {
        type: 'filler',
      },
    },
  ],
}
