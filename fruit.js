function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function() {
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
      }
    
      this.draw = function() {

        ctx.fillStyle = "#0f9da5";
        ctx.fillRect(this.x, this.y, scale, scale);
      }
}