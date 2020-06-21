export const voices = [
  // Numbers
  ...Array.from(Array(100)).map((_, i) => {
    return { text: `${i}`, file: `number_${i}` }
  }),
  { text: 'point', file: 'point' },

  // Distance
  { text: 'kilometer', file: 'kilometer' },
  { text: 'kilometers', file: 'kilometers' },

  // Time
  { text: 'hour', file: 'hour' },
  { text: 'hours', file: 'hours' },
  { text: 'minute', file: 'minute' },
  { text: 'minutes', file: 'minutes' },
  { text: 'second', file: 'second' },
  { text: 'seconds', file: 'seconds' },

  // Start
  { text: 'Beginning workout', file: 'start_default' },
  { text: 'Starting long run', file: 'start_distance_run' },
  { text: 'Beginning tempo workout', file: 'start_tempo_run' },
  { text: 'Going for an easy jog', file: 'start_jog' },
  { text: 'Starting recovery run', file: 'start_recovery_run' },
  { text: 'Starting hills session', file: 'start_hills_run' },

  // Controls
  { text: 'Pausing workout', file: 'pause' },
  { text: 'Resuming workout', file: 'resume' },
  { text: 'Workout completed. Well done!', file: 'complete' },

  {
    text: 'in 5' /* ..4..3..2..1 */,
    file: 'start_count_down',
  },

  // Easy jog, recovery, long distance
  // 1 kilometer completed in xx:xx. Average pace xx:xx per kilometer
  // x.xx kilometers completed in xx:xx. Average pace xx:xx per kilometer
  { text: 'completed in', file: 'lap_completed' },
  { text: 'Average pace', file: 'avg_pace' },
  { text: 'per kilometer', file: 'per_kilometer' },

  // Fast workouts
  {
    text:
      'Pick up your pace, it should feel like seven or eight out of ten effort',
    file: 'too_slow',
  },
  {
    text: 'You are way above the recommended pace, turn it down a little',
    file: 'too_fast',
  },

  // Interval
  { text: 'Beginning interval training', file: 'start_interval_run' },
  {
    text: '30 seconds more',
    file: 'interval_near_end',
  },
  {
    text: 'Good job, you get 60 seconds of recovery',
    file: 'start_recovery',
  },

  {
    text:
      'We will start by warming up which will take 8 minutes. Todays workout will have easy and hard intervals. Between each interval there will be a 60 second recovery period. For easy intervals we will start slow, at 10k pace which should be 6 out of 10 effort, then we will go a bit faster at 5k pace which should be around 7 or 8 effort, and for the finish we will go back to 10k pace. Between easy intervals there wil be a hard interval of mile pace which should be between 8 and 9 out of 10 effort',
    file: 'instructions_warmup',
  },
  {
    text: 'Halfway done into warmup',
    file: 'halfway_warmup',
  },
  {
    text:
      'Warmup is coming to an end. We will soon start an easy interval of 10k pace. You should feel relaxed, around 6 out of 10 effort',
    file: 'warmup_end',
  },

  {
    text:
      'Half way into the interval. If you are going too fast, slow down a little',
    file: 'halfway_10k',
  },
  {
    text:
      'Upcoming are 60 seconds at mile pace, it should be hard, but still enjoyable at 8 to 9 effort',
    file: 'instructions_mile',
  },
  {
    text: 'Next up 2 minutes at 5k pace, you should feel strong and in control',
    file: 'instructions_5k',
  },
  {
    text: 'Next up 5 minutes at 10k pace',
    file: 'instructions_10k',
  },
  {
    text: 'This is it, the last interval. 30 seconds at your celebration pace.',
    file: 'instructions_celebration',
  },
]
