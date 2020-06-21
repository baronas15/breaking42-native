import { WorkoutDescriptor } from './../../domain/Goal.interface'

export const longRun: WorkoutDescriptor = {
  type: 'longRun',
  name: 'Long distance run',
  description:
    'Run at an easy pace; you should be able to hold a conversation.',
  iconColor: '#777',
  gradient: ['#84fab0', '#8fd3f4'],
  goalDependencies: [
    {
      condition: {
        goalTypes: ['first', 'performance'],
        distances: ['halfMarathon', 'marathon'],
      },
      action: {
        type: 'weekly',
      },
    },
  ],
}
