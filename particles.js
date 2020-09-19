function Box(x, y, r) {
    var options = {
        friction: 1,
        restitution: .5
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;

    World.add(engine.world, this.body);

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rectMode(CENTER);
        strokeWeight(0);
        translate(pos.x, pos.y);
        ellipse(0, 0, this.r * 2);
        pop();
    }
}