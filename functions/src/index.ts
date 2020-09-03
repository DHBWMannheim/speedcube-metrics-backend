import * as functions from "firebase-functions";
import * as Cube from "cubejs";

export const generateScramble = functions.https.onRequest(
  (request, response) => {
    const generateScrambleString = (turns = 20) => {
      const moves = [
        ["U", "U'", "U2"],
        ["D", "D'", "D2"],
        ["R", "R'", "R2"],
        ["L", "L'", "L2"],
        ["F", "F'", "F2"],
        ["B", "B'", "B2"],
      ];

      let scramble = "";
      let lastMoveType = null;

      for (let i = 0; i < turns; i++) {
        let moveType = Math.floor(Math.random() * 6);
        moveType = moveType === lastMoveType ? (moveType + 1) % 6 : moveType;
        const move = Math.floor(Math.random() * 3);
        scramble += ` ${moves[moveType][move]}`;
        lastMoveType = moveType;
      }

      return scramble.trim();
    };

    const determine_color = (char: string) => {
      switch (char) {
        case "L":
          return "#feb63b";
        case "F":
          return "#4f4";
        case "R":
          return "#ff4a4a";
        case "B":
          return "#4576fe";
        case "D":
          return "#fff020";
        case "U":
          return "#f1f1f1";
      }
      return null;
    };

    const generate_svg = (cube_state: Array<string>) => {
      return `
    <svg xmlns="http://www.w3.org/2000/svg" width="278" height="209" viewBox="0 0 278 209">
      <g id="cube" transform="translate(-411 -229)">
        <g id="L">
          <g id="Rechteck_1" data-name="Rechteck 1" transform="translate(411 298)" fill="${determine_color(
            cube_state[36]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-2" data-name="Rechteck 1" transform="translate(434 298)" fill="${determine_color(
            cube_state[37]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-3" data-name="Rechteck 1" transform="translate(457 298)" fill="${determine_color(
            cube_state[38]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-4" data-name="Rechteck 1" transform="translate(411 321)" fill="${determine_color(
            cube_state[39]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-5" data-name="Rechteck 1" transform="translate(434 321)" fill="${determine_color(
            cube_state[40]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-6" data-name="Rechteck 1" transform="translate(457 321)" fill="${determine_color(
            cube_state[41]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-7" data-name="Rechteck 1" transform="translate(411 344)" fill="${determine_color(
            cube_state[42]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-8" data-name="Rechteck 1" transform="translate(434 344)" fill="${determine_color(
            cube_state[43]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-9" data-name="Rechteck 1" transform="translate(457 344)" fill="${determine_color(
            cube_state[44]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
        </g>
        <g id="F">
          <g id="Rechteck_1-10" data-name="Rechteck 1" transform="translate(480 298)" fill="${determine_color(
            cube_state[18]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-11" data-name="Rechteck 1" transform="translate(503 298)" fill="${determine_color(
            cube_state[19]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-12" data-name="Rechteck 1" transform="translate(526 298)" fill="${determine_color(
            cube_state[20]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-13" data-name="Rechteck 1" transform="translate(480 321)" fill="${determine_color(
            cube_state[21]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-14" data-name="Rechteck 1" transform="translate(503 321)" fill="${determine_color(
            cube_state[22]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-15" data-name="Rechteck 1" transform="translate(526 321)" fill="${determine_color(
            cube_state[23]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-16" data-name="Rechteck 1" transform="translate(480 344)" fill="${determine_color(
            cube_state[24]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-17" data-name="Rechteck 1" transform="translate(503 344)" fill="${determine_color(
            cube_state[25]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-18" data-name="Rechteck 1" transform="translate(526 344)" fill="${determine_color(
            cube_state[26]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
        </g>
        <g id="R">
          <g id="Rechteck_1-19" data-name="Rechteck 1" transform="translate(549 298)" fill="${determine_color(
            cube_state[9]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-20" data-name="Rechteck 1" transform="translate(572 298)" fill="${determine_color(
            cube_state[10]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-21" data-name="Rechteck 1" transform="translate(595 298)" fill="${determine_color(
            cube_state[11]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-22" data-name="Rechteck 1" transform="translate(549 321)" fill="${determine_color(
            cube_state[12]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-23" data-name="Rechteck 1" transform="translate(572 321)" fill="${determine_color(
            cube_state[13]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-24" data-name="Rechteck 1" transform="translate(595 321)" fill="${determine_color(
            cube_state[14]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-25" data-name="Rechteck 1" transform="translate(549 344)" fill="${determine_color(
            cube_state[15]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-26" data-name="Rechteck 1" transform="translate(572 344)" fill="${determine_color(
            cube_state[16]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-27" data-name="Rechteck 1" transform="translate(595 344)" fill="${determine_color(
            cube_state[17]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
        </g>
        <g id="B">
          <g id="Rechteck_1-28" data-name="Rechteck 1" transform="translate(618 298)" fill="${determine_color(
            cube_state[45]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-29" data-name="Rechteck 1" transform="translate(641 298)" fill="${determine_color(
            cube_state[46]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-30" data-name="Rechteck 1" transform="translate(664 298)" fill="${determine_color(
            cube_state[47]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-31" data-name="Rechteck 1" transform="translate(618 321)" fill="${determine_color(
            cube_state[48]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-32" data-name="Rechteck 1" transform="translate(641 321)" fill="${determine_color(
            cube_state[49]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-33" data-name="Rechteck 1" transform="translate(664 321)" fill="${determine_color(
            cube_state[50]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-34" data-name="Rechteck 1" transform="translate(618 344)" fill="${determine_color(
            cube_state[51]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-35" data-name="Rechteck 1" transform="translate(641 344)" fill="${determine_color(
            cube_state[52]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_1-36" data-name="Rechteck 1" transform="translate(664 344)" fill="${determine_color(
            cube_state[53]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
        </g>
        <g id="D">
          <g id="Rechteck_2" data-name="Rechteck 2" transform="translate(480 367)" fill="${determine_color(
            cube_state[27]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-2" data-name="Rechteck 2" transform="translate(503 367)" fill="${determine_color(
            cube_state[28]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-3" data-name="Rechteck 2" transform="translate(526 367)" fill="${determine_color(
            cube_state[29]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-4" data-name="Rechteck 2" transform="translate(480 390)" fill="${determine_color(
            cube_state[30]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-5" data-name="Rechteck 2" transform="translate(503 390)" fill="${determine_color(
            cube_state[31]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-6" data-name="Rechteck 2" transform="translate(526 390)" fill="${determine_color(
            cube_state[32]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-7" data-name="Rechteck 2" transform="translate(480 413)" fill="${determine_color(
            cube_state[33]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-8" data-name="Rechteck 2" transform="translate(503 413)" fill="${determine_color(
            cube_state[34]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-9" data-name="Rechteck 2" transform="translate(526 413)" fill="${determine_color(
            cube_state[35]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
        </g>
        <g id="U">
          <g id="Rechteck_2-10" data-name="Rechteck 2" transform="translate(480 229)" fill="${determine_color(
            cube_state[0]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-11" data-name="Rechteck 2" transform="translate(503 229)" fill="${determine_color(
            cube_state[1]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-12" data-name="Rechteck 2" transform="translate(526 229)" fill="${determine_color(
            cube_state[2]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-13" data-name="Rechteck 2" transform="translate(480 252)" fill="${determine_color(
            cube_state[3]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-14" data-name="Rechteck 2" transform="translate(503 252)" fill="${determine_color(
            cube_state[4]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-15" data-name="Rechteck 2" transform="translate(526 252)" fill="${determine_color(
            cube_state[5]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-16" data-name="Rechteck 2" transform="translate(480 275)" fill="${determine_color(
            cube_state[6]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-17" data-name="Rechteck 2" transform="translate(503 275)" fill="${determine_color(
            cube_state[7]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
          <g id="Rechteck_2-18" data-name="Rechteck 2" transform="translate(526 275)" fill="${determine_color(
            cube_state[8]
          )}" stroke="rgba(0,0,0)" stroke-width="2">
            <rect width="25" height="25" stroke="none"/>
            <rect x="1" y="1" width="23" height="23" fill="none"/>
          </g>
        </g>
      </g>
    </svg>
    `;
    };

    const scramble = generateScrambleString();

    const cube = new Cube();
    cube.move(scramble);

    response.send({
      scramble,
      svg: generate_svg(cube.asString()),
    });
  }
);
