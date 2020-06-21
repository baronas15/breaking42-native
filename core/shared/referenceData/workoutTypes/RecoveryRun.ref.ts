import { WorkoutDescriptor } from '../../domain/Goal.interface'

export const recoveryRun: WorkoutDescriptor = {
  type: 'recoveryRun',
  name: 'Recovery run',
  description:
    'Run easy and based on how you feel to help you recover at the highest quality possible after intense training.',
  iconColor: '#777',
  gradient: ['#96deda', '#50c9c3'],
  goalDependencies: [
    {
      condition: {
        goalTypes: ['first', 'performance'],
        distances: ['halfMarathon', 'marathon'],
      },
      action: {
        type: 'filler',
        maxLength: 60,
      },
    },
    {
      condition: {
        goalTypes: ['performance'],
        distances: ['10k', '5k'],
      },
      action: {
        type: 'filler',
        maxLength: 60,
      },
    },
  ],
}
