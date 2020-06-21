import { GoalDistance, GoalType } from '../../../shared/domain/Domain.interface'
import {
  CANCEL_GOAL,
  FETCH_GOAL,
  SET_GOAL,
} from '../SetupTrainingPlan.constants'
import { IGoalAction } from '../SetupTrainingPlan.interface'
import SetupTrainingPlanReducer, {
  defaultGoalState,
} from '../SetupTrainingPlan.reducer'

describe('SetupTrainingPlan', () => {
  describe('reducer', () => {
    it('should cover FETCH_GOAL', () => {
      const action: IGoalAction = {
        type: FETCH_GOAL,
        data: {
          weeklyWorkouts: 5,
          startingMileage: 15,
          target: {
            distance: GoalDistance.marathon,
            goalType: GoalType.first,
          },
          schedule: [],
        },
      }

      const result = SetupTrainingPlanReducer(defaultGoalState, action)

      expect(result).toMatchInlineSnapshot(`
        Object {
          "goal": Object {
            "schedule": Array [],
            "startingMileage": 15,
            "target": Object {
              "distance": "marathon",
              "goalType": "first",
            },
            "weeklyWorkouts": 5,
          },
          "success": true,
        }
      `)
    })
  })
})
