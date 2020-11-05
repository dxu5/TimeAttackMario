export default {
  backgrounds: [
    {
      tile: "groundTop",
      type: "ground",
      ranges: [
        [0, 125, 12, 1],
        [130, 18, 10, 1],
        [153, 25, 6, 1],
        // [33, 5, 9, 5],
        [202, 20, 12, 1],
      ],
    },
    {
      tile: "groundSoil",
      type: "ground",
      ranges: [
        [0, 125, 13, 1],
        [130, 18, 11, 3],
        [153, 25, 7, 7],
        // [33, 5, 10, 4],
        [202, 20, 13, 1],
      ],
    },
    {
      tile: "groundTopRightEdge",
      type: "ground",
      ranges: [
        // [37, 1, 9, 1],
        [78, 1, 12, 1],
        [110, 1, 12, 1],
        [135, 1, 10, 1],
        [145, 1, 10, 1],
        [158, 1, 6, 1],
        [222, 1, 12, 1],
        [177, 1, 6, 1],
      ],
    },
    {
      tile: "groundTopLeftEdge",
      type: "ground",
      ranges: [
        // [32, 1, 9, 1],
        [93, 1, 12, 1],
        [130, 1, 10, 1],
        [140, 1, 10, 1],
        [152, 1, 6, 1],
        [162, 1, 6, 1],
        [202, 1, 12, 1],
      ],
    },
    {
      tile: "groundMidRightEdge",
      type: "ground",
      ranges: [
        // [37, 1, 10, 2],
        [78, 1, 13, 1],
        [110, 1, 13, 1],
        [135, 1, 11, 1],
        [145, 1, 11, 3],
        [158, 1, 7, 1],
        [222, 1, 13, 1],
        [177, 1, 7, 7],
      ],
    },
    {
      tile: "groundMidLeftEdge",
      type: "ground",
      ranges: [
        // [32, 1, 10, 2],
        [93, 1, 13, 1],
        [130, 1, 11, 3],
        [140, 1, 11, 1],
        [152, 1, 7, 7],
        [162, 1, 7, 1],
        [202, 1, 13, 1],
      ],
    },
    {
      tile: "groundTopRightPatch",
      type: "ground",
      ranges: [
        // [37, 1, 12, 1],
        [135, 1, 12, 1],
        [158, 1, 8, 1],
      ],
    },
    {
      tile: "groundTopLeftPatch",
      type: "ground",
      ranges: [
        // [32, 1, 12, 1],
        [140, 1, 12, 1],
        [162, 1, 8, 1],
      ],
    },
    {
      tile: "groundTopFloatingLeft",
      type: "floatingPlatform",
      ranges: [[113, 1, 6, 1]],
    },
    {
      tile: "groundTop",
      type: "floatingPlatform",
      ranges: [
        [114, 10, 6, 1],
        [136, 4, 12, 1],
        [159, 3, 8, 1],
      ],
    },
    {
      tile: "groundTopFloatingRight",
      type: "floatingPlatform",
      ranges: [[124, 1, 6, 1]],
    },
    {
      tile: "groundTopFloatingLeftSoil",
      ranges: [[113, 1, 7, 10]],
    },
    {
      tile: "groundSoil",
      ranges: [[114, 10, 7, 10]],
    },
    {
      tile: "groundTopFloatingRightSoil",
      ranges: [[124, 1, 7, 10]],
    },

    {
      tile: "singlePlatform",
      type: "ground",
      ranges: [
        [85, 1, 7, 1],
        [186, 7, 6, 1],
      ],
    },
    {
      tile: "singlePlatform",
      type: "ground",
      ranges: [
        [28, 1, 6, 1],
        [84, 1, 7, 1],
        [148, 1, 8, 1],
        [148, 1, 3, 1],
        [185, 1, 6, 1],
      ],
    },
    {
      tile: "singlePlatform",
      type: "ground",
      ranges: [
        [16, 5, 11, 1],

        [17, 4, 10, 1],
        [18, 3, 9, 1],
        [19, 2, 8, 1],
        [20, 1, 7, 1],

        [32, 1, 9, 1],
        [32, 2, 10, 1],
        [32, 3, 11, 1],

        [29, 1, 6, 1],
        [86, 1, 7, 1],
        [149, 1, 8, 1],
        [149, 1, 3, 1],
        [193, 1, 6, 1],
      ],
    },
    {
      tile: "grass1",
      type: "ground",
      ranges: [
        [45, 1, 9, 1],
        [64, 1, 9, 1],
        [98, 1, 9, 1],
        [169, 1, 3, 1],
      ],
    },
    {
      tile: "grass2",
      type: "ground",
      ranges: [
        [46, 1, 9, 1],
        [65, 1, 9, 1],
        [99, 1, 9, 1],
        [170, 1, 3, 1],
      ],
    },
    {
      tile: "grass3",
      type: "ground",
      ranges: [
        [46, 1, 10, 2],
        [65, 1, 10, 2],
        [99, 1, 10, 2],
        [170, 1, 4, 2],
      ],
    },
    {
      tile: "grass4",
      type: "ground",
      ranges: [
        [45, 1, 10, 2],
        [64, 1, 10, 2],
        [98, 1, 10, 2],
        [169, 1, 4, 2],
      ],
    },
    {
      tile: "singlePlatform",
      type: "ground",
      ranges: [
        [73, 6, 11, 1],
        [74, 5, 10, 1],
        [75, 4, 9, 1],
        [76, 3, 8, 1],
        [77, 2, 7, 1],
        [78, 1, 6, 1],

        [40, 3, 7, 1],
        [103, 8, 11, 1],
        [104, 7, 10, 1],
        [105, 6, 9, 1],
        [106, 5, 8, 1],
        [107, 4, 7, 1],
        [108, 3, 6, 1],
        [109, 2, 5, 1],
        [110, 1, 4, 1],

        [137, 1, 7, 1],
        [160, 1, 3, 1],
        [181, 1, 8, 1],
        [196, 1, 8, 1],
        [199, 1, 10, 1],
      ],
    },
    {
      tile: "transparent",
      ranges: [
        [79, 14, 12, 2],
        [111, 2, 12, 2],
        [125, 5, 12, 2],
        [136, 4, 10, 2],
        [146, 3, 10, 4],
        [159, 3, 6, 2],
      ],
    },
  ],
  enemies: [
    {
      name: "goomba",
      x: 900,
      y: 200,
      x1Limit: 620,
      x2Limit: 1000,
      trigger: 200,
    },
    {
      name: "goomba",
      x: 1900,
      y: 200,
      x1Limit: 1400,
      x2Limit: 1900,
      trigger: 600,
    },
    {
      name: "goomba",
      x: 1200,
      y: 200,
      x1Limit: 1100,
      x2Limit: 1900,
      trigger: 600,
    },
    {
      name: "goomba",
      x: 2900,
      y: 200,
      x1Limit: 2700,
      x2Limit: 3100,
      trigger: 2000,
    },
    {
      name: "goomba",
      x: 4000,
      y: 200,
      x1Limit: 3950,
      x2Limit: 4050,
      trigger: 3500,
    },
    {
      name: "goomba",
      x: 5100,
      y: 0,
      x1Limit: 4985,
      x2Limit: 5120,
      trigger: 4000,
    },
    {
      name: "goomba",
      x: 4700,
      y: 0,
      x1Limit: 4700,
      x2Limit: 5120,
      trigger: 4000,
    },
    {
      name: "bullet",
      x: 1300,
      y: 100,
      trigger: 700,
    },
    {
      name: "bullet",
      x: 3700,
      y: 40,
      trigger: 3300,
    },
    {
      name: "bullet",
      x: 4400,
      y: 150,
      trigger: 4000,
    },
    {
      name: "bullet",
      x: 5100,
      y: 50,
      trigger: 4700,
    },
    {
      name: "bullet",
      x: 4800,
      y: 50,
      trigger: 4400,
    },
    {
      name: "bullet",
      x: 6000,
      y: 100,
      trigger: 5600,
    },
  ],
};
