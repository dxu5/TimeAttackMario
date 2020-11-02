import Behavior from "./behavior";
//Need for this to be a extension of the behavior class
export default class Jump extends Behavior {
  constructor() {
    super("jump");
    this.maxDuration = 0.25;
    this.vel = 300;
    this.duration = 0;
    this.isGrounded = true;
  }

  start() {
    if (this.isGrounded) this.duration = this.maxDuration;
  }
  cancel() {
    this.isGrounded = false;
    this.duration = 0;
  }

  update(mario, deltaTime) {
    if (this.duration > 0) {
      mario.vel.y = -this.vel;
      this.duration -= deltaTime;
    }
    if (mario.isGrounded) {
      this.isGrounded = true;
    }
  }
}
