var MAX_PARTICLES = 280;
var COLOURS = ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900','#FF4E50', '#F9D423'];
var particles = [];
var pool = [];

var demo = Sketch.create({
    container: document.getElementById('container')
});

demo.spawn = function (x, y) {
    if (particles.length >= MAX_PARTICLES)
        pool.push(particles.shift());
    particle = pool.length ? pool.pop() : new Particle();
    particle.init(x, y, random(5, 40));
    particle.wander = random(0.5, 2.0);
    particle.color = random(COLOURS);
    particle.drag = random(0.9, 0.99);
    theta = random(TWO_PI);
    force = random(3, 10);
    particle.vx = sin(theta) * force;
    particle.vy = cos(theta) * force;
    particles.push(particle);
};

demo.update = function () {
    var i, particle;
    for (i = particles.length - 1; i >= 0; i--) {
        particle = particles[i];
        if (particle.alive)
            particle.move();
        else
            pool.push(particles.splice(i, 1)[0]);
    }
};

demo.draw = function () {
    demo.globalCompositeOperation = 'lighter';
    for (var i = particles.length - 1; i >= 0; i--) {
        particles[i].draw(demo);
    }
};

demo.mousemove = function () {
    var touch, max, i, j, n;
    for (i = 0, n = demo.touches.length; i < n; i++) {
        touch = demo.touches[i], max = random(1, 1);
        for (j = 0; j < max; j++) {
            demo.spawn(touch.x, touch.y);
        }
    }
};

demo.mousedown = function(){
    var touch, max, i, j, n;
    for (i = 0, n = demo.touches.length; i < n; i++) {
        touch = demo.touches[i], max = random(1, 6);
        for (j = 0; j < max; j++) {
            demo.spawn(touch.x, touch.y);
        }
    }
}