import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

const Space = () => {
  let stars = [];
  let shootingStars = [];

  const setup = (p5, canvasParentRef) => {
    const canvas = p5
      .createCanvas(window.innerWidth, window.innerHeight)
      .parent(canvasParentRef);

    // 星の生成
    for (let i = 0; i < 500; i++) {
      stars[i] = {
        x: p5.random(-p5.width, p5.width),
        y: p5.random(-p5.height, p5.height),
        size: p5.random(1, 3),
      };
    }

    // 流れ星の生成
    for (let i = 0; i < 3; i++) {
      shootingStars[i] = {
        x: p5.random(p5.width),
        y: p5.random(p5.height / 2),
        speed: p5.random(5, 15),
        length: p5.random(50, 150),
      };
    }
  };

  const draw = (p5) => {
    p5.background(0);

    // 星の描画
    p5.fill(255);
    for (let i = 0; i < stars.length; i++) {
      p5.ellipse(stars[i].x, stars[i].y, stars[i].size);
    }

    // 流れ星の描画
    p5.stroke(255);
    for (let i = 0; i < shootingStars.length; i++) {
      p5.line(
        shootingStars[i].x,
        shootingStars[i].y,
        shootingStars[i].x - shootingStars[i].length,
        shootingStars[i].y + shootingStars[i].length
      );
      shootingStars[i].x -= shootingStars[i].speed;
      shootingStars[i].y += shootingStars[i].speed / 2;
      if (
        shootingStars[i].x < -shootingStars[i].length ||
        shootingStars[i].y > p5.height + shootingStars[i].length
      ) {
        shootingStars[i] = {
          x: p5.width,
          y: p5.random(p5.height / 2),
          speed: p5.random(5, 15),
          length: p5.random(50, 150),
        };
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Space;
