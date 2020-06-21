import { WorkoutDescriptor } from '../../domain/Goal.interface'

export const crossTraining: WorkoutDescriptor = {
  disableStart: true,
  type: 'crossTraining',
  name: 'Cross-training',
  description: '',
  iconColor: '#777',
  gradient: ['#275009', '#c4da3d'],
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
