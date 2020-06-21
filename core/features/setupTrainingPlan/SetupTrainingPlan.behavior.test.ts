import { GoalDistance, GoalType } from '../../shared/domain/Domain.interface'
import { generateSchedule } from './SetupTrainingPlan.behavior'

const sort = (data: any) =>
  data
    .map((x: any) => ({ distance: x.distance, type: x.type }))
    .sort((a: any, b: any) =>
      a.distance - b.distance !== 0
        ? a.distance - b.distance
        : a.type > b.type
        ? 1
        : -1,
    )

describe('Generate', () => {
  it('should throw more workouts', () => {
    try {
      generateSchedule({
        startingMileage: 20,
        target: {
          distance: GoalDistance.marathon,
          goalType: GoalType.first,
        },
        weeklyWorkouts: 3,
        schedule: [],
      })
      // eslint-disable-next-line no-undef
      fail('it should have failed')
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        `[Error: We recommend having more workouts for marathon distance]`,
      )
    }
  })

  it('should throw more workouts 2', () => {
    try {
      generateSchedule({
        startingMileage: 20,
        target: {
          distance: GoalDistance.marathon,
          goalType: GoalType.performance,
        },
        weeklyWorkouts: 3,
        schedule: [],
      })
      // eslint-disable-next-line no-undef
      fail('it should have failed')
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        `[Error: We recommend having more workouts for marathon distance]`,
      )
    }
  })

  it('should throw more mileage', () => {
    try {
      generateSchedule({
        startingMileage: 10,
        target: {
          distance: GoalDistance.marathon,
          goalType: GoalType.performance,
        },
        weeklyWorkouts: 6,
        schedule: [],
      })
      // eslint-disable-next-line no-undef
      fail('it should have failed')
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        `[Error: Mileage is too low for marathon plan]`,
      )
    }
  })

  it('should throw too many miles', () => {
    try {
      generateSchedule({
        startingMileage: 100,
        target: {
          distance: GoalDistance.marathon,
          goalType: GoalType.performance,
        },
        weeklyWorkouts: 6,
        schedule: [],
      })
      // eslint-disable-next-line no-undef
      fail('it should have failed')
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        `[Error: DO LATER: At the moment this mileage is not configured for a marathon plan]`,
      )
    }
  })

  it('should generate 5k', () => {
    const schedule = generateSchedule({
      startingMileage: 30,
      target: {
        distance: GoalDistance._5k,
        goalType: GoalType.performance,
      },
      weeklyWorkouts: 5,
      schedule: [],
    })

    expect(sort(schedule)).toMatchInlineSnapshot(`
      Array [
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 6.48,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.48,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.48,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.48,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.48,
          "type": "tempoRun",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "hillsRun",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "intervalRun",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "recoveryRun",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "recoveryRun",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "recoveryRun",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "tempoRun",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "hillsRun",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "intervalRun",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 10.282945612677121,
          "type": "recoveryRun",
        },
        Object {
          "distance": 10.282945612677121,
          "type": "recoveryRun",
        },
        Object {
          "distance": 10.282945612677121,
          "type": "recoveryRun",
        },
        Object {
          "distance": 10.282945612677121,
          "type": "recoveryRun",
        },
        Object {
          "distance": 10.282945612677121,
          "type": "tempoRun",
        },
        Object {
          "distance": 11.105581261691292,
          "type": "hillsRun",
        },
        Object {
          "distance": 11.105581261691292,
          "type": "recoveryRun",
        },
        Object {
          "distance": 11.105581261691292,
          "type": "recoveryRun",
        },
        Object {
          "distance": 11.105581261691292,
          "type": "recoveryRun",
        },
        Object {
          "distance": 11.105581261691292,
          "type": "recoveryRun",
        },
      ]
    `)
  })

  it('should generate 10k', () => {
    const schedule = generateSchedule({
      startingMileage: 30,
      target: {
        distance: GoalDistance._10k,
        goalType: GoalType.first,
      },
      weeklyWorkouts: 5,
      schedule: [],
    })

    expect(sort(schedule)).toMatchInlineSnapshot(`
      Array [
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 6.48,
          "type": "jog",
        },
        Object {
          "distance": 6.48,
          "type": "jog",
        },
        Object {
          "distance": 6.48,
          "type": "jog",
        },
        Object {
          "distance": 6.48,
          "type": "jog",
        },
        Object {
          "distance": 6.48,
          "type": "jog",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "jog",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "jog",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "jog",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "jog",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "jog",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "jog",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "jog",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "jog",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "jog",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "jog",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "jog",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "jog",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "jog",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "jog",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "jog",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "jog",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "jog",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "jog",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "jog",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "jog",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "jog",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "jog",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "jog",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "jog",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "jog",
        },
        Object {
          "distance": 10.282945612677121,
          "type": "jog",
        },
        Object {
          "distance": 10.282945612677121,
          "type": "jog",
        },
        Object {
          "distance": 10.282945612677121,
          "type": "jog",
        },
        Object {
          "distance": 10.282945612677121,
          "type": "jog",
        },
        Object {
          "distance": 10.282945612677121,
          "type": "jog",
        },
        Object {
          "distance": 11.105581261691292,
          "type": "jog",
        },
        Object {
          "distance": 11.105581261691292,
          "type": "jog",
        },
        Object {
          "distance": 11.105581261691292,
          "type": "jog",
        },
        Object {
          "distance": 11.105581261691292,
          "type": "jog",
        },
        Object {
          "distance": 11.105581261691292,
          "type": "jog",
        },
        Object {
          "distance": 11.994027762626594,
          "type": "jog",
        },
        Object {
          "distance": 11.994027762626594,
          "type": "jog",
        },
        Object {
          "distance": 11.994027762626594,
          "type": "jog",
        },
        Object {
          "distance": 11.994027762626594,
          "type": "jog",
        },
        Object {
          "distance": 11.994027762626594,
          "type": "jog",
        },
        Object {
          "distance": 12.953549983636721,
          "type": "jog",
        },
        Object {
          "distance": 12.953549983636721,
          "type": "jog",
        },
        Object {
          "distance": 12.953549983636721,
          "type": "jog",
        },
        Object {
          "distance": 12.953549983636721,
          "type": "jog",
        },
        Object {
          "distance": 12.953549983636721,
          "type": "jog",
        },
        Object {
          "distance": 13.989833982327662,
          "type": "jog",
        },
        Object {
          "distance": 13.989833982327662,
          "type": "jog",
        },
        Object {
          "distance": 13.989833982327662,
          "type": "jog",
        },
        Object {
          "distance": 13.989833982327662,
          "type": "jog",
        },
        Object {
          "distance": 13.989833982327662,
          "type": "jog",
        },
        Object {
          "distance": 15.109020700913876,
          "type": "jog",
        },
        Object {
          "distance": 15.109020700913876,
          "type": "jog",
        },
        Object {
          "distance": 15.109020700913876,
          "type": "jog",
        },
        Object {
          "distance": 15.109020700913876,
          "type": "jog",
        },
        Object {
          "distance": 15.109020700913876,
          "type": "jog",
        },
      ]
    `)
  })

  it('should generate halfMarathon', () => {
    const schedule = generateSchedule({
      startingMileage: 30,
      target: {
        distance: GoalDistance.halfMarathon,
        goalType: GoalType.first,
      },
      weeklyWorkouts: 5,
      schedule: [],
    })

    expect(sort(schedule)).toMatchInlineSnapshot(`
      Array [
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 6.48,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.48,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.48,
          "type": "tempoRun",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "hillsRun",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "recoveryRun",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "recoveryRun",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "tempoRun",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "hillsRun",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "tempoRun",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "hillsRun",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 10.282945612677125,
          "type": "recoveryRun",
        },
        Object {
          "distance": 10.282945612677125,
          "type": "recoveryRun",
        },
        Object {
          "distance": 10.282945612677125,
          "type": "tempoRun",
        },
        Object {
          "distance": 11.105581261691295,
          "type": "hillsRun",
        },
        Object {
          "distance": 11.105581261691295,
          "type": "recoveryRun",
        },
        Object {
          "distance": 11.105581261691295,
          "type": "recoveryRun",
        },
        Object {
          "distance": 11.994027762626601,
          "type": "recoveryRun",
        },
        Object {
          "distance": 11.994027762626601,
          "type": "recoveryRun",
        },
        Object {
          "distance": 11.994027762626601,
          "type": "tempoRun",
        },
        Object {
          "distance": 12.953549983636728,
          "type": "hillsRun",
        },
        Object {
          "distance": 12.953549983636728,
          "type": "recoveryRun",
        },
        Object {
          "distance": 12.953549983636728,
          "type": "recoveryRun",
        },
        Object {
          "distance": 12.96,
          "type": "longRun",
        },
        Object {
          "distance": 13.989833982327665,
          "type": "recoveryRun",
        },
        Object {
          "distance": 13.989833982327665,
          "type": "recoveryRun",
        },
        Object {
          "distance": 13.989833982327665,
          "type": "tempoRun",
        },
        Object {
          "distance": 13.9968,
          "type": "longRun",
        },
        Object {
          "distance": 15.109020700913879,
          "type": "hillsRun",
        },
        Object {
          "distance": 15.109020700913879,
          "type": "recoveryRun",
        },
        Object {
          "distance": 15.109020700913879,
          "type": "recoveryRun",
        },
        Object {
          "distance": 15.116544000000001,
          "type": "longRun",
        },
        Object {
          "distance": 16.31774235698699,
          "type": "recoveryRun",
        },
        Object {
          "distance": 16.31774235698699,
          "type": "recoveryRun",
        },
        Object {
          "distance": 16.31774235698699,
          "type": "tempoRun",
        },
        Object {
          "distance": 16.325867520000003,
          "type": "longRun",
        },
        Object {
          "distance": 17.623161745545943,
          "type": "hillsRun",
        },
        Object {
          "distance": 17.623161745545943,
          "type": "recoveryRun",
        },
        Object {
          "distance": 17.623161745545943,
          "type": "recoveryRun",
        },
        Object {
          "distance": 17.631936921600005,
          "type": "longRun",
        },
        Object {
          "distance": 19.03301468518962,
          "type": "recoveryRun",
        },
        Object {
          "distance": 19.03301468518962,
          "type": "recoveryRun",
        },
        Object {
          "distance": 19.03301468518962,
          "type": "tempoRun",
        },
        Object {
          "distance": 19.042491875328004,
          "type": "longRun",
        },
        Object {
          "distance": 20.555655860004787,
          "type": "hillsRun",
        },
        Object {
          "distance": 20.555655860004787,
          "type": "recoveryRun",
        },
        Object {
          "distance": 20.555655860004787,
          "type": "recoveryRun",
        },
        Object {
          "distance": 20.565891225354243,
          "type": "longRun",
        },
        Object {
          "distance": 22.211162523382583,
          "type": "longRun",
        },
        Object {
          "distance": 23.988055525253188,
          "type": "longRun",
        },
        Object {
          "distance": 25.907099967273442,
          "type": "longRun",
        },
        Object {
          "distance": 27.97966796465532,
          "type": "longRun",
        },
        Object {
          "distance": 30.218041401827744,
          "type": "longRun",
        },
        Object {
          "distance": 32.635484713973966,
          "type": "longRun",
        },
        Object {
          "distance": 35.246323491091886,
          "type": "longRun",
        },
        Object {
          "distance": 38.06602937037924,
          "type": "longRun",
        },
        Object {
          "distance": 41.11131172000958,
          "type": "longRun",
        },
      ]
    `)
  })

  it('should generate marathon', () => {
    const schedule = generateSchedule({
      startingMileage: 30,
      target: {
        distance: GoalDistance.marathon,
        goalType: GoalType.first,
      },
      weeklyWorkouts: 5,
      schedule: [],
    })

    expect(sort(schedule)).toMatchInlineSnapshot(`
      Array [
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "crossTraining",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 0,
          "type": "rest",
        },
        Object {
          "distance": 6.48,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.48,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.48,
          "type": "tempoRun",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "hillsRun",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 6.998400000000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "recoveryRun",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "recoveryRun",
        },
        Object {
          "distance": 7.5582720000000005,
          "type": "tempoRun",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "hillsRun",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.162933760000001,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 8.815968460800002,
          "type": "tempoRun",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "hillsRun",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 9.521245937664002,
          "type": "recoveryRun",
        },
        Object {
          "distance": 10.282945612677125,
          "type": "recoveryRun",
        },
        Object {
          "distance": 10.282945612677125,
          "type": "recoveryRun",
        },
        Object {
          "distance": 10.282945612677125,
          "type": "tempoRun",
        },
        Object {
          "distance": 11.105581261691295,
          "type": "hillsRun",
        },
        Object {
          "distance": 11.105581261691295,
          "type": "recoveryRun",
        },
        Object {
          "distance": 11.105581261691295,
          "type": "recoveryRun",
        },
        Object {
          "distance": 11.994027762626601,
          "type": "recoveryRun",
        },
        Object {
          "distance": 11.994027762626601,
          "type": "recoveryRun",
        },
        Object {
          "distance": 11.994027762626601,
          "type": "tempoRun",
        },
        Object {
          "distance": 12.953549983636728,
          "type": "hillsRun",
        },
        Object {
          "distance": 12.953549983636728,
          "type": "recoveryRun",
        },
        Object {
          "distance": 12.953549983636728,
          "type": "recoveryRun",
        },
        Object {
          "distance": 12.96,
          "type": "longRun",
        },
        Object {
          "distance": 13.989833982327665,
          "type": "recoveryRun",
        },
        Object {
          "distance": 13.989833982327665,
          "type": "recoveryRun",
        },
        Object {
          "distance": 13.989833982327665,
          "type": "tempoRun",
        },
        Object {
          "distance": 13.9968,
          "type": "longRun",
        },
        Object {
          "distance": 15.109020700913879,
          "type": "hillsRun",
        },
        Object {
          "distance": 15.109020700913879,
          "type": "recoveryRun",
        },
        Object {
          "distance": 15.109020700913879,
          "type": "recoveryRun",
        },
        Object {
          "distance": 15.116544000000001,
          "type": "longRun",
        },
        Object {
          "distance": 16.31774235698699,
          "type": "recoveryRun",
        },
        Object {
          "distance": 16.31774235698699,
          "type": "recoveryRun",
        },
        Object {
          "distance": 16.31774235698699,
          "type": "tempoRun",
        },
        Object {
          "distance": 16.325867520000003,
          "type": "longRun",
        },
        Object {
          "distance": 17.623161745545943,
          "type": "hillsRun",
        },
        Object {
          "distance": 17.623161745545943,
          "type": "recoveryRun",
        },
        Object {
          "distance": 17.623161745545943,
          "type": "recoveryRun",
        },
        Object {
          "distance": 17.631936921600005,
          "type": "longRun",
        },
        Object {
          "distance": 19.03301468518962,
          "type": "recoveryRun",
        },
        Object {
          "distance": 19.03301468518962,
          "type": "recoveryRun",
        },
        Object {
          "distance": 19.03301468518962,
          "type": "tempoRun",
        },
        Object {
          "distance": 19.042491875328004,
          "type": "longRun",
        },
        Object {
          "distance": 20.555655860004787,
          "type": "hillsRun",
        },
        Object {
          "distance": 20.555655860004787,
          "type": "recoveryRun",
        },
        Object {
          "distance": 20.555655860004787,
          "type": "recoveryRun",
        },
        Object {
          "distance": 20.565891225354243,
          "type": "longRun",
        },
        Object {
          "distance": 22.20010832880517,
          "type": "recoveryRun",
        },
        Object {
          "distance": 22.20010832880517,
          "type": "recoveryRun",
        },
        Object {
          "distance": 22.20010832880517,
          "type": "tempoRun",
        },
        Object {
          "distance": 22.211162523382583,
          "type": "longRun",
        },
        Object {
          "distance": 23.97611699510959,
          "type": "hillsRun",
        },
        Object {
          "distance": 23.97611699510959,
          "type": "recoveryRun",
        },
        Object {
          "distance": 23.97611699510959,
          "type": "recoveryRun",
        },
        Object {
          "distance": 23.988055525253188,
          "type": "longRun",
        },
        Object {
          "distance": 25.894206354718357,
          "type": "recoveryRun",
        },
        Object {
          "distance": 25.894206354718357,
          "type": "recoveryRun",
        },
        Object {
          "distance": 25.894206354718357,
          "type": "tempoRun",
        },
        Object {
          "distance": 25.907099967273442,
          "type": "longRun",
        },
        Object {
          "distance": 27.96574286309583,
          "type": "hillsRun",
        },
        Object {
          "distance": 27.96574286309583,
          "type": "recoveryRun",
        },
        Object {
          "distance": 27.96574286309583,
          "type": "recoveryRun",
        },
        Object {
          "distance": 27.97966796465532,
          "type": "longRun",
        },
        Object {
          "distance": 30.203002292143495,
          "type": "recoveryRun",
        },
        Object {
          "distance": 30.203002292143495,
          "type": "recoveryRun",
        },
        Object {
          "distance": 30.203002292143495,
          "type": "tempoRun",
        },
        Object {
          "distance": 30.218041401827744,
          "type": "longRun",
        },
        Object {
          "distance": 32.61924247551497,
          "type": "hillsRun",
        },
        Object {
          "distance": 32.61924247551497,
          "type": "recoveryRun",
        },
        Object {
          "distance": 32.61924247551497,
          "type": "recoveryRun",
        },
        Object {
          "distance": 32.635484713973966,
          "type": "longRun",
        },
        Object {
          "distance": 35.22878187355617,
          "type": "recoveryRun",
        },
        Object {
          "distance": 35.22878187355617,
          "type": "recoveryRun",
        },
        Object {
          "distance": 35.22878187355617,
          "type": "tempoRun",
        },
        Object {
          "distance": 35.246323491091886,
          "type": "longRun",
        },
        Object {
          "distance": 38.04708442344066,
          "type": "hillsRun",
        },
        Object {
          "distance": 38.04708442344066,
          "type": "recoveryRun",
        },
        Object {
          "distance": 38.04708442344066,
          "type": "recoveryRun",
        },
        Object {
          "distance": 38.06602937037924,
          "type": "longRun",
        },
        Object {
          "distance": 41.11131172000958,
          "type": "longRun",
        },
        Object {
          "distance": 44.40021665761034,
          "type": "longRun",
        },
        Object {
          "distance": 47.95223399021918,
          "type": "longRun",
        },
        Object {
          "distance": 51.78841270943671,
          "type": "longRun",
        },
        Object {
          "distance": 55.93148572619165,
          "type": "longRun",
        },
        Object {
          "distance": 60.40600458428698,
          "type": "longRun",
        },
        Object {
          "distance": 65.23848495102995,
          "type": "longRun",
        },
        Object {
          "distance": 70.45756374711235,
          "type": "longRun",
        },
        Object {
          "distance": 76.09416884688133,
          "type": "longRun",
        },
      ]
    `)
  })
})
