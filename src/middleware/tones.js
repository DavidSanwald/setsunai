import Howler from 'howler'

const spriteFiles = ['audio/longing.mp3', 'audio/loving.mp3', 'audio/hoping.mp3', 'audio/marveling.mp3', 'audio/missing.mp3', 'audio/waiting.mp3']

const spritesMelody = {
  0: [
    0,
    2926.8480725623585
  ],
  1: [
    4000,
    2926.8480725623585
  ],
  2: [
    8000,
    2926.8480725623576
  ],
  3: [
    12000,
    2926.8480725623576
  ],
  4: [
    16000,
    2926.8480725623576
  ],
  5: [
    20000,
    2926.8707482993186
  ],
  6: [
    24000,
    2926.8480725623576
  ],
  7: [
    28000,
    2926.8480725623576
  ],
  8: [
    32000,
    2926.8480725623576
  ]
}

const spritesHarmony =  {
      0: [
        0,
        5454.545454*2
      ],
      1: [
        14000,
        5454.545454*2
      ],
      2: [
        28000,
        5454.545454*2
      ],
      3: [
        42000,
        5454.545454*2
      ],
      4: [
        56000,
        5454.545454*2
      ],
      5: [
        70000,
        5454.545454*2
      ],
      6: [
        84000,
        5454.545454*2
      ],
      7: [
        98000,
        5454.545454*2
      ]
    }





const klangs = spriteFiles.map(file => [
    new Howler.Howl({src: [file], sprite: spritesMelody, volume: 0.7, ctx: true}),
    new Howler.Howl({src: ['audio/harmony.mp3'], sprite: spritesHarmony, volume: 1, ctx: true})

])
const compressor = Howler.Howler.ctx.createDynamicsCompressor();
compressor.threshold.value = -70;
compressor.knee.value = 0;
compressor.ratio.value = 20;
compressor.attack.value = 0.00001;
compressor.release.value = 0.050
Howler.Howler.masterGain.connect(compressor);
compressor.connect(Howler.Howler.ctx.destination)


export default klangs
