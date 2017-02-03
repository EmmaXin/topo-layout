var layout = layout || require('../src/layout');
var role = role || require('../src/role');

describe("layout specs", function () {

  describe("justify alignment", function () {
    it("shall be be able to align justified", function () {
      var topo = [
        [
          {
            'role': 'spine',
            x: 0,
            y: 0
          },
          {
            'role': 'spine',
            x: 0,
            y: 0
          }
        ],
        [
          {
            'role': 'tor',
            x: 0,
            y: 0
          },
          {
            'role': 'tor',
            x: 0,
            y: 0
          },
          {
            'role': 'tor',
            x: 0,
            y: 0
          },
          {
            'role': 'tor',
            x: 0,
            y: 0
          }
        ],
        [
          {
            'role': 'host'
          },
          {
            'role': 'host'
          },
          {
            'role': 'host'
          },
          {
            'role': 'host'
          },
          {
            'role': 'host'
          }
        ]
      ];

      layout.justifyLayout(topo, {left: 10, top: 20, width: 100, height: 100});

      expect(topo[0][0].x).toEqual(25.0 + 10);
      expect(topo[0][1].x).toEqual(75.0 + 10);

      expect(topo[0][0].y).toEqual(12.5 + 20);
      expect(topo[0][1].y).toEqual(12.5 + 20);

      expect(topo[1][0].x).toEqual(12.5 + 10);
      expect(topo[1][1].x).toEqual(37.5 + 10);
      expect(topo[1][2].x).toEqual(62.5 + 10);
      expect(topo[1][3].x).toEqual(87.5 + 10);

      expect(topo[1][0].y).toEqual(37.5 + 20);
      expect(topo[1][1].y).toEqual(37.5 + 20);
      expect(topo[1][2].y).toEqual(37.5 + 20);
      expect(topo[1][3].y).toEqual(37.5 + 20);

      expect(topo[2][0].x).toEqual(10.0 + 10);
      expect(topo[2][1].x).toEqual(30.0 + 10);
      expect(topo[2][2].x).toEqual(50.0 + 10);
      expect(topo[2][3].x).toEqual(70.0 + 10);
      expect(topo[2][4].x).toEqual(90.0 + 10);

      expect(topo[2][0].y).toEqual(75.0 + 20);
      expect(topo[2][1].y).toEqual(75.0 + 20);
      expect(topo[2][2].y).toEqual(75.0 + 20);
      expect(topo[2][3].y).toEqual(75.0 + 20);
      expect(topo[2][4].y).toEqual(75.0 + 20);
    });

    it("shall be able to align justified per group", function () {
      var topo = [
        [role.makeSpine('spine1'), role.makeSpine('spine2')],
        [role.makeTor('tor1'), role.makeTor('tor2'), role.makeTor('tor3'), role.makeTor('tor4')],
        [role.makeHost('host1', 'tor1'), role.makeHost('host2', 'tor1'),
          role.makeHost('host3', 'tor2'),
          role.makeHost('host4', 'tor3'), role.makeHost('host5', 'tor3'), role.makeHost('host6', 'tor3'), role.makeHost('host7', 'tor3')]
      ];

      layout.justifyGroupLayout(topo, {left: 10, top: 20, width: 100, height: 100});

      // spine
      expect(topo[0][0].x).toEqual(25.0 + 10);
      expect(topo[0][1].x).toEqual(75.0 + 10);

      expect(topo[0][0].y).toEqual(12.5 + 20);
      expect(topo[0][1].y).toEqual(12.5 + 20);

      // tor
      expect(topo[1][0].x).toEqual(12.5 + 10);
      expect(topo[1][1].x).toEqual(37.5 + 10);
      expect(topo[1][2].x).toEqual(62.5 + 10);
      expect(topo[1][3].x).toEqual(87.5 + 10);

      expect(topo[1][0].y).toEqual(37.5 + 20);
      expect(topo[1][1].y).toEqual(37.5 + 20);
      expect(topo[1][2].y).toEqual(37.5 + 20);
      expect(topo[1][3].y).toEqual(37.5 + 20);

      // hosts
      // on tor1
      expect(topo[2][0].x).toEqual( 6.25 + 10);
      expect(topo[2][1].x).toEqual(18.75 + 10);

      // on tor2
      expect(topo[2][2].x).toEqual(37.5 + 10);

      // on tor3
      expect(topo[2][3].x).toEqual(53.125 + 10);
      expect(topo[2][4].x).toEqual(59.375 + 10);
      expect(topo[2][5].x).toEqual(65.625 + 10);
      expect(topo[2][6].x).toEqual(71.875 + 10);

      expect(topo[2][0].y).toEqual(75.0 + 20);
      expect(topo[2][1].y).toEqual(75.0 + 20);
      expect(topo[2][2].y).toEqual(75.0 + 20);
      expect(topo[2][3].y).toEqual(75.0 + 20);
      expect(topo[2][4].y).toEqual(75.0 + 20);
      expect(topo[2][5].y).toEqual(75.0 + 20);
      expect(topo[2][6].y).toEqual(75.0 + 20);
    });

    it("shall be able to align justified per group weight", function () {
      var topo = [
        [role.makeSpine('spine1'), role.makeSpine('spine2')],
        [role.makeTor('tor1'), role.makeTor('tor2'), role.makeTor('tor3'), role.makeTor('tor4')],
        [role.makeHost('host1', 'tor1'), role.makeHost('host2', 'tor1'),
          role.makeHost('host3', 'tor2'),
          role.makeHost('host4', 'tor3'), role.makeHost('host5', 'tor3'), role.makeHost('host6', 'tor3')]
      ];

      layout.justifyGroupWeightLayout(topo, {left: 10, top: 20, width: 100, height: 100});

      // spine
      expect(topo[0][0].x).toEqual(25.0 + 10);
      expect(topo[0][1].x).toEqual(75.0 + 10);

      expect(topo[0][0].y).toEqual(12.5 + 20);
      expect(topo[0][1].y).toEqual(12.5 + 20);

      // tor
      expect(topo[1][0].x).toEqual(15.0 + 10);
      expect(topo[1][1].x).toEqual(40.0 + 10);
      expect(topo[1][2].x).toEqual(70.0 + 10);
      expect(topo[1][3].x).toEqual(95.0 + 10);

      expect(topo[1][0].y).toEqual(37.5 + 20);
      expect(topo[1][1].y).toEqual(37.5 + 20);
      expect(topo[1][2].y).toEqual(37.5 + 20);
      expect(topo[1][3].y).toEqual(37.5 + 20);

      // hosts
      // on tor1
      expect(topo[2][0].x).toEqual( 7.5 + 10);
      expect(topo[2][1].x).toEqual(22.5 + 10);

      // on tor2
      expect(topo[2][2].x).toEqual(40.0 + 10);

      // on tor3
      expect(Math.round(topo[2][3].x * 10) / 10).toEqual(56.7 + 10);
      expect(Math.round(topo[2][4].x * 10) / 10).toEqual(70.0 + 10);
      expect(Math.round(topo[2][5].x * 10) / 10).toEqual(83.3 + 10);

      expect(topo[2][0].y).toEqual(75.0 + 20);
      expect(topo[2][1].y).toEqual(75.0 + 20);
      expect(topo[2][2].y).toEqual(75.0 + 20);
      expect(topo[2][3].y).toEqual(75.0 + 20);
      expect(topo[2][4].y).toEqual(75.0 + 20);
      expect(topo[2][5].y).toEqual(75.0 + 20);
    });
  });
});