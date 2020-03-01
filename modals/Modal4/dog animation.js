(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFCC33",
	opacity: 1.00,
	manifest: [
		{src:"images/dog animation_atlas_.png?1481300223426", id:"dog animation_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"dog animation_atlas_", frames: [[0,0,261,467],[263,0,188,427]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["dog animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["dog animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Tween115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAUASQgUgWgTAQAAUAAQgbgegLAX");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-2.8,6.1,5.7);


(lib.Tween114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABMhVQAFAOABAOQADAzguAuQAgAJAGAZQACALgCAKQgCAIgFAIQgHAHgLADQgLADgQgDQAIgRgIgVAA8BMQAQAJABAKAAwBQQAOARgKAYAAZB5QgRgCgVgJQhCgYgBgzQgCgxAFgWQALguAmgn");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F7FB").s().p("AAZBiQAEgJAAgJQAAgKgEgKQAEAKAAAKQAAAJgEAJQgRgCgVgJQhCgYgBgzQgCgxAFgWQAKAgAeAeQBAgoAMg9QAYAGgSA/QAbgUAKgfQADAzguAuQAgAJAGAZQACALgCAKQgBgKgQgJQAQAJABAKQgCAIgFAIQgHAHgLADQAEgKAAgJQAAgMgIgKQAIAKAAAMQAAAJgEAKIgNABIgOgBgABNBIIAAAAg");
	this.shape_1.setTransform(0,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPAKQALgsAmgnIBoAkQAFAOABAPQgKAcgbAUQASg8gYgHQgMA8hAApQgegggKggg");
	this.shape_2.setTransform(0.2,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-13.2,18.5,26.6);


(lib.Tween113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABMhVQAFAOABAOQADAzguAuQAgAJAGAZQACALgCAKAAZB5QAIgRgIgVAA8BMQAQAJABAKQgCAIgFAIQgFAFgNADAAwBQQAOARgKAWQgGAFgVgDQgRgCgVgJQhCgYgBgzQgCgxAFgWQALguAmgn");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F7FB").s().p("AAZBiQAEgJAAgJQAAgKgEgKQAEAKAAAKQAAAJgEAJQgRgCgVgJQhCgYgBgzQgCgxAFgWQAKAgAeAeQBAgoAMg9QAYAGgSA/QAbgUAKgfQADAzguAuQAgAJAGAZQACALgCAKQgBgKgQgJQAQAJABAKQgCAIgFAIQgFAFgNADQAEgJAAgIQAAgMgIgKQAIAKAAAMQAAAIgEAJQgEADgKAAIgNgBg");
	this.shape_1.setTransform(0,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPAKQALgsAmgnIBoAkQAFAOABAPQgKAcgbAUQASg8gYgHQgMA8hAApQgegggKggg");
	this.shape_2.setTransform(0.2,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-13.2,18.5,26.6);


(lib.Tween112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AA/AwIAQiPQgBgFAAgFAAmBFQAAAAABABQAFAAADABIABAAQAHABAGgBIABgLIABgMAAtBWIAAAAQgCgIgFgIAABB1IABAAQgBAAAAAAIAAAAQANgRgFgQAAhCBQgLAAgTgLQgBAAAAgBAAhCBQANAAACgOIAAgCQAAAAAAgBIAAgCQAAgKgDgOABABhQABgCABgBQABgFAAgEQABgSgFgTAAhCBQAEgYgKgSAhFhBIgIgKIgBgBAgzhMIgRALIgBAAAgzhMQgBAUAGAUIgXgdAhNhLQAAAhACAPQAEBEAyA0QAAAAABABQABACACACQAJAJAJAKAgLiAIgDA3QgXgOgEglQgKAYAAAY");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7DCEF").s().p("AARBaIgBAAIAAgBQAJgMAAgMIgBgIIABAIQAAAMgJAMIgSgTIgDgDIgBgCQgygzgEhFQgCgOAAghQAEA4AZAeIAPAbIAOAYIAEgKIA7AhIABABIABABQACANAAAJQAAgJgDgOQADAOAAAJIAAADIAAABIAAACQgCAOgOAAIACgNQAAgQgIgOQAIAOAAAQIgCANQgLAAgTgMQATAMALAAQAOAAACgOQgCARgMAAQgMAAgUgPgAAvBmIAAAAgAA/BSIAAAAgAg+hmIAAgCIAJALIgBABg");
	this.shape_1.setTransform(-1.5,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0F1F9").s().p("AAAAwIgGAKIgOgYIgQgdQAeAjA3AXIABACIAAAAIABABIAGAPgAg4hFIABgBIAQgKQAAATAGAUg");
	this.shape_2.setTransform(-1.3,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvBnIgCgBQgCgIgFgIIAAgBIAAAAIgBgBQg4gYgdgiQgZgcgEg5QgBAJAAgKIABABIAIAKIAYAdQgHgUABgUQAAgYALgYQADAlAXAOIAEg3IBYAXIAAAAIABAKIgBgKIABAKIgQCPIgBALIgBAMQgGABgHgBIgBAAIgIgCIgBAAIABAAIAIACIABAAQAHABAGgBIABgMIACAGQADAMAAAIIgBAJIgCADgAAtBmIgHgQQAFAIACAIgAAmBWIAAAAg");
	this.shape_3.setTransform(0,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-14.1,17.9,28);


(lib.Tween111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AA/AwIAQiPQgBgFAAgFAAmBFQAAAAABABQAFAAADABIABAAQAHABAGgBIABgLIABgMAAtBWIAAAAQgCgIgFgIAABB1IABAAQgBAAAAAAIAAAAQANgRgFgQAAhCBQgLAAgTgLQgBAAAAgBAAhCBQANAAACgOIAAgCQAAAAAAgBIAAgCQAAgKgDgOABABhQABgCABgBQABgFAAgEQABgSgFgTAAhCBQAEgYgKgSAhFhBIgIgKIgBgBAgzhMIgRALIgBAAAhNhLQAAAhACAPQAEBEAyA0QAAAAABABQABACACACQAJAJAJAKAgzhMQgBAUAGAUIgXgdAgLiAIgDA3QgXgOgEglQgKAYAAAY");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7DCEF").s().p("AARBaIgBAAIAAgBQAJgMAAgMIgBgIIABAIQAAAMgJAMIgSgTIgDgDIgBgCQgygzgEhFQgCgOAAghQAEA4AZAeIAPAbIAOAYIAEgKIA7AhIABABIABABQACANAAAJQAAgJgDgOQADAOAAAJIAAADIAAABIAAACQgCAOgOAAIACgNQAAgQgIgOQAIAOAAAQIgCANQgLAAgTgMQATAMALAAQAOAAACgOQgCARgMAAQgMAAgUgPgAAvBmIAAAAgAA/BSIAAAAgAg+hmIAAgCIAJALIgBABg");
	this.shape_1.setTransform(-1.5,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0F1F9").s().p("AAAAwIgGAKIgOgYIgQgdQAeAjA3AXIABACIAAAAIABABIAGAPgAg4hFIABgBIAQgKQAAATAGAUg");
	this.shape_2.setTransform(-1.3,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvBnIgCgBQgCgIgFgIIAAgBIAAAAIgBgBQg4gYgdgiQgZgcgEg5QgBAJAAgKIABABIAIAKIAYAdQgHgUABgUQAAgYALgYQADAlAXAOIAEg3IBYAXIAAAAIABAKIgBgKIABAKIgQCPIgBALIgBAMQgGABgHgBIgBAAIgIgCIgBAAIABAAIAIACIABAAQAHABAGgBIABgMIACAGQADAMAAAIIgBAJIgCADgAAtBmIgHgQQAFAIACAIgAAmBWIAAAAg");
	this.shape_3.setTransform(0,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-14.1,17.9,28);


(lib.Tween110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEB8DE").s().p("AgtAeQAYgDAVgRQgeACgRgRQATgBAcgnQAWATAaAEQgLAkggAgIgFAAQgfAAgOgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.6,9.8,9.3);


(lib.Tween109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEB8DE").s().p("AgtAeQAYgDAVgSQgeADgRgSQATgBAcgmQAWATAaADQgLAlggAfIgKABQgXAAgRgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.6,9.8,9.4);


(lib.Tween104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AEB8DE").ss(0.1,1,1).p("AAUAbQgCgYAHgSIgygLQASARATALIgaAAQAOAQAUAJg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEB8DE").s().p("AgOACIAaAAQgTgLgRgRIAyALQgIASACAYQgUgJgOgQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.7,7.2,7.5);


(lib.Tween103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AEB8DE").ss(0.1,1,1).p("AAUAbQgCgYAHgSIgygLQASARATALIgaAAQAOAQAUAJg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEB8DE").s().p("AgOACIAaAAQgTgLgRgRIAyALQgIASACAYQgUgJgOgQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.7,7.2,7.5);


(lib.Tween94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.498)").s().p("AjdAwQhbgVgBgbQABgbBbgUQBcgTCBAAQCCAABcATQBbAUABAbQgBAbhbAVQhcATiCAAQiBAAhcgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-6.8,62.8,13.6);


(lib.Tween93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.498)").s().p("AjdAwQhbgVgBgbQABgbBbgUQBcgTCBAAQCCAABcATQBbAUABAbQgBAbhbAVQhcATiCAAQiBAAhcgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-6.8,62.8,13.6);


(lib.Tween90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7DCEF").s().p("AAFg+QA6gygJA/QgUBbhYArg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-8.5,11.2,17.1);


(lib.Tween89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7DCEF").s().p("AhigHICdgVQBJAag7AVQgfAKgeAAQg4AAg2gkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-2.9,20,5.9);


(lib.Tween88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgUAFIAGgBIAjgI");
	this.shape.setTransform(-6.5,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("ABWgCQAAgBgBgBQgDgDgDgCQgMgJgPgEQgGgCgGgBQgDAAgDgBQgLgBghAGQgOADgSADAhVgDIAAAe");
	this.shape_1.setTransform(0,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0F1F9").s().p("AALAXQgZgBgTgCQgXgEgPgEIgGgDIAAgeIAAAAIAGgBIAUAVIACgDIADgFQAQgLBBAEIANABIABABIAdADIgxAZIAFAJIgXAAg");
	this.shape_2.setTransform(-0.8,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhSAAIAkgKIAAgBIAIgCQALgDANgBIATgBQARAAAOACIACAAIAXAFIAPAGIAFAFIACAAIgQAJIgdgDIgCgBIgMgBQhBgEgQALIgDAFIgDADgAgugLIAggGIggAGg");
	this.shape_3.setTransform(0.3,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-4.5,19.4,8);


(lib.Tween87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAPgLIAAgBIACABIABAAQAAABABABQAAABABAAQAAAAAAABIADAHIABACIAAAGIgGACIABgBIAAgDIAAgKIgEgHIAAAAAAAANIAAgCIAAgLIAAgCIgCgGIgBgBIABgBIACABIAAABIACAGIADAKIgBAEIAAABgAgRgHIABABIACAFIAAADIgDAJIgBACIgFAAIABgCIADgGIACgGIAAgEIgBgBIAAAAg");
	this.shape.setTransform(7.3,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgUAFIAGgBIAjgI");
	this.shape_1.setTransform(-7.6,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("ABfAJQgDgGgFgEQgFgFgGgFQgCgCgDgCQgNgJgPgFQgGgBgGgBQgCgBgDAAQgLgCgiAHQgOACgSAEABZAfQADgBACAAAA3AhQAIAAAIAAQABAAACAAAhegJIAAAd");
	this.shape_2.setTransform(-0.2,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AEB8DE").s().p("AgSANIABgCIADgJIAAgEIgCgFIgBAAIAOgCIABAAIACAHIAAACIAAAKIAAADIgDAAIgPAAgAAEAMIABgFIgDgKIgCgGIAAAAIANgDIACAAIAAABIAAAAIAAAAIAEAHIAAAJIAAADIgBACIgEABIgEABIgGAAg");
	this.shape_3.setTransform(7.3,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0057A8").s().p("AAAALIAAgLIAAgCIgCgHIgBAAIABgBIACABIAAAAIACAHIADAJIgBAFIAAABIgEAAgAgXANIABgCIADgGIACgGIAAgEIgBgBIAAgBIABAAIABAAIACAGIAAADIgDAJIgBACgAATAIIAAgCIAAgKIgEgHIAAAAIAAAAIAAgBIACABIABAAIABACIABABIAAABIADAHIABACIAAAFIgGADg");
	this.shape_4.setTransform(7.3,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0F1F9").s().p("AAeAaIgBAAIAAgFIgjgBQgbgBgTgCQgXgEgPgEIgGgDIAAgeIAAAAIAGgBIAUAVIACgDIADgFQAQgLBBAEIANABIABABQAaACAQAEQAIACAGADIgPACIgCgBIgBABIgOACIgBABIAAAAIABABIAAACIgCAIIgDAGIgBACIAFAAIAPABIADgBIAGAAIAGgBIAEgBQgQAKglAAIgEAAgABgAEIgDgGIAAgBQAFADgBAFIAAACg");
	this.shape_5.setTransform(0,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhSAAIAkgKIAAgBIAIgCQALgDANgBIATgBQARAAAOACIABAAIAYAFIAPAGIAFAFQADAAAAAEQAAAEgFAEQgQgEgagCIgBgBIgMgBQhBgEgQALIgEAFIgCADgAgugLIAggGIggAGg");
	this.shape_6.setTransform(-0.7,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-4.7,21.6,8.8);


(lib.Tween85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AAOAVQgJAEgSgBQADgRgJgHAAOAVQATgKgkgjAAOAVQgHgTgNgI");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.5,6.2,7);


(lib.Tween80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5EEF6").s().p("AAjAlIgYgVQgLgHARAeIAVAeQg+gggZgXQgpgkgGgaQgEgNAFgGQAFAHAQAPQAZAWAIAAQAKgBgKghIgEgQQgBgEAFAKQARAdALANQAKALAZARQAfAUAbAJQgHgCAKAUQAIARAHAIQgWgJgpgdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-7.5,19.8,15.1);


(lib.Tween79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5EEF6").s().p("AgxA5Qg1gkgPgkQgHgTAEgMQAHAIAVANQAgAVAIgGQALgHgTgvIgKgYQgCgFAJAMQAZAmAQANQAOAMAeANQAmALAggCQgJABARAaQANAVAJAKQgagBgzgWIgegRQgOgFAbAkIAeAlQhKgMghgVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-9.1,24.6,18.2);


(lib.Tween78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAcAqQgmgNgRgfQAIgJATABQgRgFgGgLQAQgUAWAG");
	this.shape.setTransform(2.7,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AEB8DE").ss(0.1,1,1).p("AAUAbQgCgYAHgSIgygLQASARATALIgaAAQAOAQAUAJg");
	this.shape_1.setTransform(-2.9,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("AgOACIAaAAQgTgLgRgRIAyALQgIASACAYQgUgJgOgQg");
	this.shape_2.setTransform(-2.9,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-6.1,13.1,12.3);


(lib.Tween77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAcAqQgmgNgRgfQAIgJATABQgRgFgGgLQAQgUAWAG");
	this.shape.setTransform(2.7,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AEB8DE").ss(0.1,1,1).p("AAUAbQgCgYAHgSIgygLQASARATALIgaAAQAOAQAUAJg");
	this.shape_1.setTransform(-2.9,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("AgOACIAaAAQgTgLgRgRIAyALQgIASACAYQgUgJgOgQg");
	this.shape_2.setTransform(-2.9,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-6.1,13.1,12.3);


(lib.Tween74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AAQAHIgNAIQgMgMgGgQQAPgFAQAZg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0057A8").s().p("AgPgNQAPgFAQAZIgNAIQgMgMgGgQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-2.5,5.4,5.1);


(lib.Tween72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E5EEF6").ss(1,1,1).p("AgLgaQAXgfgMgyQBFALAlBaIglgOIAHAVQgvAAgogbgAABA9QALAXAVATQhTAZg3hrQA9ACAhgqQAjAXALAvQgOARgUgHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5EEF6").s().p("AhpAVQA9ACAigqQAiAXALAvQgOARgUgHQALAXAVATQgQAFgQAAQg9AAgthXgAgLgaQAXgfgMgyQBFALAlBaIglgOIAHAVQgvAAgogbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-11.8,23.3,23.7);


(lib.Tween71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E5EEF6").ss(1,1,1).p("AgLgaQAXgfgMgyQBFALAlBaIglgOIAHAVQgvAAgogbgAABA9QALAXAVATQhTAZg3hrQA9ACAhgqQAjAXALAvQgOARgUgHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5EEF6").s().p("AhpAVQA9ACAigqQAiAXALAvQgOARgUgHQALAXAVATQgQAFgQAAQg9AAgthXgAgLgaQAXgfgMgyQBFALAlBaIglgOIAHAVQgvAAgogbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-11.8,23.3,23.7);


(lib.Tween70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5EEF6").s().p("Ag/BBQgSgbADgaIAeAQQgJgLABgdQABghALgGQACAHAGAHQAMAOAVAGIgMgmQgIglAWgCQA8gDAQBPQAFAXAAAeIgCAcQAAADgjgYIgjgYQgDAIAHAjIAHAhQgwgbgBgBIAKAdQgZgCgSgcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-9.5,16,19.1);


(lib.Tween69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5EEF6").s().p("Ag/BBQgSgbADgaIAeAQQgJgLABgdQABghALgGQACAHAGAHQAMAOAVAGIgMgmQgIglAWgCQA8gDAQBPQAFAXAAAeIgCAcQAAADgjgYIgjgYQgDAIAHAjIAHAhQgwgbgBgBIAKAdQgZgCgSgcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-9.5,16,19.1);


(lib.Tween68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgWAxQAbAUAlgCIgGgTQARAIAQgJQABgQgKgNIAOADQgIgtgggfIhrgLgAAAAOQA1ANgTg5QgiAGgfgTQAbAYAEAhgAgIAZQBJAFgbhF");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AEB8DE").ss(0.5,1,1).p("AAXggIgDAKAgWAhIAHgL");
	this.shape_1.setTransform(1.4,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC1A37").s().p("AgEAcQgEgigagXQAgASAhgFQAPAugjAAQgHAAgIgCg");
	this.shape_2.setTransform(0.3,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AEB8DE").s().p("AgWAxIgzhzIBrALQAgAfAIAtIgOgDQAKANgBAQQgQAJgRgIIAGATIgIAAQggAAgYgSgAAAAOIgIALQBJAFgbhFIgEAJQgiAGgfgTQAbAYAEAhg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0057A8").s().p("AgaAgIAIgLQA2ANgUg5IAEgJQAZBBg+AAIgJgBg");
	this.shape_4.setTransform(1.8,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-7.8,17,15.6);


(lib.Tween67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgWAxQAbAUAlgCIgGgTQARAIAQgJQABgQgKgNIAOADQgIgtgggfIhrgLgAAAAOQA1ANgTg5QgiAGgfgTQAbAYAEAhgAgIAZQBJAFgbhF");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AEB8DE").ss(0.5,1,1).p("AAXggIgDAKAgWAhIAHgL");
	this.shape_1.setTransform(1.4,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC1A37").s().p("AgEAcQgEgigagXQAgASAhgFQAPAugjAAQgHAAgIgCg");
	this.shape_2.setTransform(0.3,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AEB8DE").s().p("AgWAxIgzhzIBrALQAgAfAIAtIgOgDQAKANgBAQQgQAJgRgIIAGATIgIAAQggAAgYgSgAAAAOIgIALQBJAFgbhFIgEAJQgiAGgfgTQAbAYAEAhg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0057A8").s().p("AgaAgIAIgLQA2ANgUg5IAEgJQAZBBg+AAIgJgBg");
	this.shape_4.setTransform(1.8,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-7.8,17,15.6);


(lib.Tween62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgnArQAJATAVACQgTgzAXgbQAJASAjAFQgdglAKgj");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-7.4,10,14.9);


(lib.Tween61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgnArQAJATAVACQgTgzAXgbQAJASAjAFQgdglAKgj");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-7.4,10,14.9);


(lib.Tween56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AAggVQgCABg+Aq");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-3.2,8.6,6.5);


(lib.Tween55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AAggVQgCABg+Aq");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-3.2,8.6,6.5);


(lib.Tween46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.4,1,1).p("AATALQAAAHgEACQgCABgDAAQgCAAgCgCQgEABgDgBQgBAAgBgBQgIgCgHgEQAAgBABAAQADAAADABQAFABADAAQABAAABAAQABAAADAAQgBgEgCgJQgBgHAAgGQAAAAAAgBQAAgFABgBQADgBADAEQAEAFAEAKQAFAJAAAEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0057A8").s().p("AAGATQgEABgDgBIgCgBQgIgCgHgEIABgBIAGABIAIABIACAAIAEAAIgDgNQgBgHAAgGIAAgBQAAgFABgBQADgBADAEQAEAFAEAKQAFAJAAAEQAAAHgEACIgFABQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-3.2,5.9,6.4);


(lib.Tween45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.4,1,1).p("AATALQAAAHgEACQgCABgDAAQgCAAgCgCQgEABgDgBQgBAAgBgBQgIgCgHgEQAAgBABAAQADAAADABQAFABADAAQABAAABAAQABAAADAAQgBgEgCgJQgBgHAAgGQAAAAAAgBQAAgFABgBQADgBADAEQAEAFAEAKQAFAJAAAEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0057A8").s().p("AAGATQgEABgDgBIgCgBQgIgCgHgEIABgBIAGABIAIABIACAAIAEAAIgDgNQgBgHAAgGIAAgBQAAgFABgBQADgBADAEQAEAFAEAKQAFAJAAAEQAAAHgEACIgFABQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-3.2,5.9,6.4);


(lib.Tween42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AAMgVIAIAgAgBgQIACAjAgTgNIAGAj");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.2,6.1,6.5);


(lib.Tween41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AAMgVIAIAgAgBgQIACAjAgTgNIAGAj");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.2,6.1,6.5);


(lib.Tween36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgnArQAJATAVACQgTgzAXgbQAJASAjAFQgdglAKgj");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-7.4,10,14.9);


(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("Ag0APQgBAVARALQAIgzAigOQgCAVAdAWQgGgvAagZ");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-5.8,12.6,11.6);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0057A8").s().p("AgeAqIgDgLQgCgPACgNQACgOAHgKIADgDIACgEQAEgFAKgEQAUgKAKAMQAHAIACALQACAIgCAHIgIAHQgFABgLgDIgKgEIgGgCIgFgDIABAAIgDgCIgFgFIgDgEQgQAWAIAkIgBABIAAgBg");
	this.shape.setTransform(-0.4,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-5.4,7.2,8.7);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0057A8").s().p("AgaA1IgDgMQgCgOACgOQACgRAMgMIgCgCQgJgIAAgGIADgHQAEgFAJgEQAUgKALAMQAGAIADALQACAIgCAHIgIAJQgGABgKgDQgJgDgIgFQgXAYAJAqIAAAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-5.4,6.3,10.8);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2CDE5").s().p("AglAeQgIgSgCgRIgBgOQAHAOASAIQAJAFAJACQgMgRACgRIADgOQAOARAVAEIARABIABAAQABAQABAKIAFAXIAAABIgFABQgTAEgRAAQgWAAgWgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-3.9,9.8,8);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2CDE5").s().p("AglAeQgIgSgCgRIgBgOQAHAOASAIQAJAFAJACQgMgRACgRIADgOQAOARAVAEIARABIABAAQABAQABAKIAFAXIAAABIgFABQgTAEgRAAQgWAAgWgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-3.9,9.8,8);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AAUAoQgDgCgDgCQgJgJgHgVQAAgCgBgBQgBgBAAgCQAAAAAAAAQgBgCgBgBQgFgQgDgUQgFAIAAAI");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-5,6.1,10);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AAUAoQgDgCgDgCQgJgJgHgVQAAgCgBgBQgBgBAAgCQAAAAAAAAQgBgCgBgBQgFgQgDgUQgFAIAAAI");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-5,6.1,10);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AgWARIACgGIABgIIAAgEIAAgCIAAgBIAAgBQAAAAABABIAAAAIABACIABAFIAAAEIgCALQAJAAAJAAIAAgBIAAgOIAAgIIAAgBIAAgBQgBgBABAAQAAgBAAABIAAABIACAHIABAIIgBAJQABAAAAAAQAIgCAHgEIAAgLIgCgIIgCgHIgBgBIABgBIABAAIAAABIABABIAEAKIADAM");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-2.8,6.6,5.7);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AgWARIACgGIABgIIAAgEIAAgCIAAgBIAAgBQAAAAABABIAAAAIABACIABAFIAAAEIgCALQAJAAAJAAIAAgBIAAgOIAAgIIAAgBIAAgBQgBgBABAAQAAgBAAABIAAABIACAHIABAIIgBAJQABAAAAAAQAIgCAHgEIAAgLIgCgIIgCgHIgBgBIABgBIABAAIAAABIABABIAEAKIADAM");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-2.8,6.6,5.7);


(lib.Tween21copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLBPQgHgaAghPQAhhRAmALQAoALAKAgQAJAhgEASIgEATQgMAsghAhQgbgGgZAAQgZAAgJAIQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgGAAgGgTg");
	this.shape.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-11.3,15.6,19.8);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBnQgdgBgNgDQgOgDgNglQgOgmA6hAQA4hCAWAIQAWAJAJAhQAKAggFASIgDATQgMAsgaAMQgVAlgbAAIAAAAg");
	this.shape.setTransform(-0.5,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-11,16.5,20.6);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AgTACQAKABAJgBAAFABQADgBADAAQAFAAAEgB");
	this.shape.setTransform(0,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAUAPIAAgFIAAgSIgEgLIAAgBIAAgBIACAAIAAABIABABQACADAAADIACAEIACAJIABANIgHAEgAAAAWIAAgEIAAgSIAAgEIgCgMIgBAAIABgCIABABIABABIAAABIACAKIADASIAAAJgAgSgNIABABIAAAAIACAIIAAAIIgDAPIgBADIgGgBIACgDIADgKIACgMIAAgGIgBgBIAAgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("AgTAWIABgDIADgQIAAgHIgCgIIAAAAIgBgBIAPgDIABAAIACAMIAAAEIAAASIAAAEIgJAAIgKAAgAAFANIgDgSIgCgKIAAgBIAQgFIAAABIAAABIAEALIAAARIAAAFIgBADIgJADIgFABg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0057A8").s().p("AAAASIAAgSIAAgEIgCgMIgBAAIABgBIABAAIABABIAAABIACAKIADASIAAAIIgFABgAgZAVIACgEIADgJIACgMIAAgFIgBgCIAAAAIABgCIABABIAAABIACAHIAAAHIgDAQIgBADgAAUAPIAAgGIAAgRIgEgLIAAAAIAAgCIACABIAAAAIABACIACAFIACAFIACAIIABANIgHAEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.2,7.3,6.6);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AAFABQADgBADAAQAFAAAEgBAgTACQAKABAJgB");
	this.shape.setTransform(0,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgSgNIABABIAAAAIACAIIAAAIIgDAPIgBADIgGgBIACgDIADgKIACgMIAAgFIgBgCIAAgBgAAAAWIAAgEIAAgSIAAgEIgCgLIgBgBIABgCIABABIAAAAIABABIAAABIACAKIADASIAAAIgAAUAPIAAgFIAAgSIgEgLIAAAAIAAgCIACABIAAAAIABABQACAEAAACIACAEIACAJIABANIgHAEg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0057A8").s().p("AAAASIAAgSIAAgEIgCgLIgBgBIABgBIABAAIAAABIABAAIAAABIACAKIADASIAAAIIgFABgAgZAVIACgDIADgKIACgMIAAgFIgBgCIAAgBIABgBIABABIAAAAIACAIIAAAHIgDAQIgBADgAAUAOIAAgEIAAgSIgEgLIAAgBIAAgBIACAAIAAABIABACIACAFIACAFIACAIIABANIgHAEg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5EEF6").s().p("AgTAWIABgDIADgQIAAgHIgCgIIAAAAIgBgBIAPgDIABAAIACAMIAAAEIAAASIAAAEIgJAAIgKAAgAAFANIgDgSIgCgKIAAgBIAQgFIAAABIAAABIAEALIAAARIAAAFIgBADIgJADIgFABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.2,7.3,6.6);


(lib.Symbol23copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-49,-111.2,0.521,0.521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.2)").s().p("AjcAvQhdgTAAgcQAAgaBdgVQBbgTCBgBQCCABBcATQBcAVgBAaQABAchcATQhcAViCgBQiBABhbgVg");
	this.shape.setTransform(2,106.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-111.2,98,224.5);


(lib.Symbol23copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-49,-111.2,0.521,0.521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.2)").s().p("AjdAwQhbgVgBgbQABgbBbgUQBcgTCBAAQCCAABcATQBbAUABAbQgBAbhbAVQhcATiCAAQiBAAhcgTg");
	this.shape.setTransform(2,106.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-111.2,98,224.5);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AEB8DE").ss(0.1,1,1).p("AAAAkQgUgjgGgkIAjA1QgEgSAHgSQADAXAMAZQgOgDgNAJg");
	this.shape.setTransform(-0.2,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEB8DE").s().p("AgagjIAjA0QgEgRAGgSQADAXANAYQgOgDgNAJQgUgigGgkg");
	this.shape_1.setTransform(-0.2,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnAlQgHgOgFgNQgNgkADgjQAYgIAeAfIAIAMIABgYQAcASAQAdQAMASAFAZIhYAYQgIgOgGgNgAgCAuQANgJAOADQgMgZgDgWQgHAPAEAUIgjg0QAGAjAUAjg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-6.4,12.6,12.8);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AARAKIABgBIAAgNIgDgHIgBAAIABgBIAAABIABAAQACACABACAAAANIABgDIAAgKIAAgCIgBgHIAAgBIAAABIAAAAIADAHIADAKIgBAEIAAABAgMgHIAAAAIACAFIAAAEIgDAJIgBACIgEAAIAEgIIABgHIAAgDIAAgBIAAgBg");
	this.shape.setTransform(6.2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("ABQAKQAAAAAAgBQgCgGgFgEQgEgGgFgEQgCgDgCgCQgMgJgNgFQgHgCgGgBQgNgCgZAEAhPgKIAAAeQACABADACQANAEASAEQARACAXABQAVABARgBQAOAAAKgBQACgBABAAABDAgQADgBABAAQACAAADgBQABAAACgBAAuAgQAHABAGAA");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("AgDAiIgogDIgfgIIgFgDIAAgeIA/gVQAZgEAMACIAOADQANAFAMAJIAEAFIAJAKQAFAEACAGIAAABIgCgDIgBgBIgBgBIgBABIABAAIADAHIAAAPIAAABIgEABIgEABIgEABIAAgBIABgEIgDgMIgDgGIAAgBIgCgBIAAACIACAGIABADIgBAMIAAACIgDABIgNgBIABgCIADgJIAAgFIgCgFIgBgBIgBABIAAAAIABABIAAAEIgCAIIgDAIIAEAAIANABIgYABIgMAAIgaAAgAAuAgIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-4.4,18.1,9);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgUAwIAphf");
	this.shape.setTransform(-2,-7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AAgBUQAKgOAKgmQALgqgEgbQgFglgIgSQgQgmgdAFAgogdQgOAggEAwQgDAvAHATQABAFACACQAFAHAFgPQAHgUAFAJ");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("AgzB8IgDgHQgHgTADgvQAEgwAOggIAphgQAdgFAQAmQAIASAFAlQAEAbgLAqQgKAmgKAOQgUAzgpgeQgFgJgHAUQgEAKgDAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-13.6,14.1,27.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgUAFIAGgBIAjgI");
	this.shape.setTransform(-7.6,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAPgLIAAgBIACABIABAAQAAABABABQAAABABAAQAAAAAAABIADAHIABACIAAAGIgGACIABgBIAAgDIAAgKIgEgHIAAAAAAAANIAAgCIAAgLIAAgCIgCgGIgBgBIABgBIACABIAAABIACAGIADAKIgBAEIAAABgAgRgHIABABIACAFIAAADIgDAJIgBACIgFAAIABgCIADgGIACgGIAAgEIgBgBIAAAAg");
	this.shape_1.setTransform(7.3,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("ABfAIQgDgGgFgEQgFgFgGgFQgCgCgDgCQgNgJgPgFQgGgBgGgBQgCgBgDAAQgLgCgiAHQgOACgSAEABQAfQADAAACAAQACgBACAAQADgBACAAABHAgQABAAACAAAA3AgQAIAAAIAAAhXAWQAPAEAWAEQATACAbABQATABAQAAQABAAABAAQAXAAAPgCAhegKIAAAd");
	this.shape_2.setTransform(-0.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AEB8DE").s().p("AgSANIABgCIADgJIAAgEIgCgFIgBAAIAOgCIABAAIACAHIAAACIAAAKIAAADIgDAAIgPAAgAAEAMIABgFIgDgKIgCgGIAAAAIANgDIACAAIAAABIAAAAIAAAAIAEAHIAAAJIAAADIgBACIgEABIgEABIgGAAg");
	this.shape_3.setTransform(7.3,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0057A8").s().p("AAAALIAAgLIAAgCIgCgHIgBAAIABgBIACABIAAAAIACAHIADAJIgBAFIAAABIgEAAgAgXANIABgCIADgGIACgGIAAgEIgBgBIAAgBIABAAIABAAIACAGIAAADIgDAJIgBACgAATAIIAAgCIAAgKIgEgHIAAAAIAAAAIAAgBIACABIABAAIABACIABABIAAABIADAHIABACIAAAFIgGADg");
	this.shape_4.setTransform(7.3,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0F1F9").s().p("AAeAaIgBAAIAAgFIABAAIAmgCIADgBIAGAAIAGgBIAEgBQgQAKglAAIgEAAgAAdAVIgjgBQgbgBgTgCQgXgEgPgEIgGgDIAAgeIAAAAIAGgBIAUAVIACgDIADgFQAQgLBBAEIANABIABABQAaACAQAEQAIACAGADIgPACIgCgBIgBABIgOACIgBABIAAAAIABABIAAACIgCAIIgDAGIgBACIAFAAIAPABIgmACIgBAAgABgAEIgDgGIAAgBQAFADgBAFIAAACg");
	this.shape_5.setTransform(0,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhSAAIAkgKIAAgBIAIgCQALgDANgBIATgBQARAAAOACIABAAIAYAFIAPAGIAFAFQADAAAAAEQAAAEgFAEQgQgEgagCIgBgBIgMgBQhBgEgQALIgEAFIgCADgAgugLIAggGIggAGg");
	this.shape_6.setTransform(-0.7,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-4.7,21.6,9);


(lib.Symbol15copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AgIgsIAiArQgaAEgcgXQASArAnAWIgygG");
	this.shape.setTransform(-6.6,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AgLAHQAHADAEACQgEgEgGgEQgHgFgFgJQAVAWASABQgDgHgEgHQgFgOgFgGAAAAMQALAFAMAF");
	this.shape_1.setTransform(-6.6,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AAKgCQgKACgHAAQgFAAgDgDQANAYAOAFQABAAAAgLQgBgPgCgCgAAAgZQAGAKAKAMQgDABgDAA");
	this.shape_2.setTransform(-6.6,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AADgyQgBAOADAQQgJAMgFAJQgDAHgCAEQAGAcAJAJQAFAGADgMQAEgSACAE");
	this.shape_3.setTransform(-6.2,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AAFhNQgQAhgEAuQgEAwAIATQACAFACACQAGAGAEgOQAIgUAGAJ");
	this.shape_4.setTransform(-5.4,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("AAjBOQBKgeimh9");
	this.shape_5.setTransform(6.4,-5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AgxhTQAcANATAWQAQASANAUQAVAbACAaQADAdgZAM");
	this.shape_6.setTransform(5.5,-4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AgqhaQAeAHARAbQAPASAKAaQAQAagDAgQgCAhgUAM");
	this.shape_7.setTransform(4.8,-3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AglhhQAgABARAgQAMATAJAfQAKAagJAmQgHAjgQAN");
	this.shape_8.setTransform(4.2,-2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("AABBpQALgNAMgmQAOgsgFgaQgGgkgJgTQgSglgiAF");
	this.shape_9.setTransform(3.7,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgYAwIAxhf");
	this.shape_10.setTransform(-2.3,-7.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0F1F9").s().p("AgMAaIgCgEQgKghAPgPIAcAfIgHABQgGgHgGASQgEAKgEAAIgEgBg");
	this.shape_11.setTransform(-4.9,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5EEF6").s().p("AAJBFIgMgPIgeghIgHgHQAWAAATgTIAAgBIAAABIAKgMQAZgigBgXQAGAHAAA3QgBAegJAZIAAABIgFANIgBABIgFAKIgDADIAAABIgDADg");
	this.shape_12.setTransform(-2.5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},4).wait(1));

	// Layer 2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhkArIAzAGQgogWgSgrQAeAXAZgGIgkgpIBSguQClB9hKAdQgxATglAAQg8AAgngsg");
	this.shape_13.setTransform(1.4,-4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMBcIgPgEQghgJgcgYIgCgEIABABIAcAMIgDgDQgYgWgJglIAAgBQAWALAWgKIgMgWIgKgVIBHg1IABAAQAdARAWAYQAWAVAMAYQAeAngZAaIgJAHQgVAOgTAHQgRAKgRAAQgHAAgJgDg");
	this.shape_14.setTransform(1,-3.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGBjIgPgHQgegLgbgTQgHgRgDgYIAAgBQAQgDARgPIgEgWIgCgWIA7g7IACgBQAdAKAVAcQARAVAMAbQAUAjgUAgIgIAKQgSASgPAIQgOAQgQAAQgIAAgGgEgAhBBSQgGgHgFgLQAGAJANANIgBACIgBABIgGgHgAhPA9IgBgBIAAAAIACACIACACIgDgDg");
	this.shape_15.setTransform(0.7,-2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCBpIgMgJQgegMgdgSIADADIABAAQgEAMANAYIgBADIABACQgDgCgCgFQgNgTgBgsIAAgBQAJgRANgUQABgLACgMIAFgWIAxhCIAAgBQAhADATAhQAOATAIAgQANAegRAmIgHAMQgNAXgMAJQgLAWgPAAQgHAAgHgGg");
	this.shape_16.setTransform(0.4,-1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgbgNIA3Ab");
	this.shape_17.setTransform(-3.8,7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhBB2QgIgTAEgvQAEgwARggIAxhgQAjgFATAmQAJASAGAlQAFAbgOAqQgMAmgLAOQgMAogYgVIgKgKIg5gdIAGAHQgPAPALAjIACAEIgEgIg");
	this.shape_18.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-14.1,23.7,18.6);


(lib.Symbol15copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AAFhNQgQAhgEAuQgEAwAIATQACAFACACQAGAGAEgOQAIgUAGAJ");
	this.shape.setTransform(-5.4,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AANA1QAAgGgDAQQgDAHAAgBQgDgCgDgFQgMgSgBgqQAKgNAHgOQgBgXADgU");
	this.shape_1.setTransform(-6.3,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AAEAxQgOgUgFggQAPgDAOgLQgGgXgEgUAAEAxQAEgEAEALIAEAFQgEgCgDgEQgDgDgCgDg");
	this.shape_2.setTransform(-6.6,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AgIAsQAIgBAJAHQANADAAAAQgFgDgEgEQgYgUgKgmQAWALATgIQgNgWgJgV");
	this.shape_3.setTransform(-6.6,-1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AgIgsIAiArQgaAEgcgXQASArAnAWIgygG");
	this.shape_4.setTransform(-6.6,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("AABBpQALgNAMgmQAOgsgFgaQgGgkgJgTQgSglgiAF");
	this.shape_5.setTransform(3.7,-2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AglhhQAgABARAgQAMATAJAfQAKAagJAmQgHAjgQAN");
	this.shape_6.setTransform(4.2,-2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AgqhaQAeAHARAbQAPASAKAaQAQAagDAgQgCAhgUAM");
	this.shape_7.setTransform(4.8,-3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AgxhTQAcANATAWQAQASANAUQAVAbACAaQADAdgZAM");
	this.shape_8.setTransform(5.5,-4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("AAjBOQBKgeimh9");
	this.shape_9.setTransform(6.4,-5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgYAwIAxhf");
	this.shape_10.setTransform(-2.3,-7.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0F1F9").s().p("AgMAaIgCgEQgKghAPgPIAcAfIgHABQgGgHgGASQgEAKgEAAIgEgBg");
	this.shape_11.setTransform(-4.9,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5EEF6").s().p("AAJBFIgMgPIgeghIgHgHQAWAAATgTIAAgBIAAABIAKgMQAZgigBgXQAGAHAAA3QgBAegJAZIAAABIgFANIgBABIgFAKIgDADIAAABIgDADg");
	this.shape_12.setTransform(-2.5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[]},1).wait(4));

	// Layer 2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgbgNIA3Ab");
	this.shape_13.setTransform(-3.8,7.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhBB2QgIgTAEgvQAEgwARggIAxhgQAjgFATAmQAJASAGAlQAFAbgOAqQgMAmgLAOQgMAogYgVIgKgKIg5gdIAGAHQgPAPALAjIACAEIgEgIg");
	this.shape_14.setTransform(0,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCBpIgMgJQgegMgdgSIADADIABAAQgEAMANAYIgBADIABACQgDgCgCgFQgNgTgBgsIAAgBQAJgRANgUQABgLACgMIAFgWIAxhCIAAgBQAhADATAhQAOATAIAgQANAegRAmIgHAMQgNAXgMAJQgLAWgPAAQgHAAgHgGg");
	this.shape_15.setTransform(0.4,-1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGBjIgPgHQgegLgbgTQgHgRgDgYIAAgBQAQgDARgPIgEgWIgCgWIA7g7IACgBQAdAKAVAcQARAVAMAbQAUAjgUAgIgIAKQgSASgPAIQgOAQgQAAQgIAAgGgEgAhBBSQgGgHgFgLQAGAJANANIgBACIgBABIgGgHgAhPA9IgBgBIAAAAIACACIACACIgDgDg");
	this.shape_16.setTransform(0.7,-2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMBcIgPgEQghgJgcgYIgCgEIABABIAcAMIgDgDQgYgWgJglIAAgBQAWALAWgKIgMgWIgKgVIBHg1IABAAQAdARAWAYQAWAVAMAYQAeAngZAaIgJAHQgVAOgTAHQgRAKgRAAQgHAAgJgDg");
	this.shape_17.setTransform(1,-3.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhkArIAzAGQgogWgSgrQAeAXAZgGIgkgpIBSguQClB9hKAdQgxATglAAQg8AAgngsg");
	this.shape_18.setTransform(1.4,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-13.6,16.4,27.4);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgYAwIAxhf");
	this.shape.setTransform(-2.3,-7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AAmBUQALgOAMgmQAOgqgFgbQgGglgJgSQgTgmgjAFAgwgdQgRAggEAwQgEAvAIATQACAFACADQAFAFAGgOQAJgUAGAJ");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0F1F9").s().p("AgMAaIgCgEQgKghAPgPIAcAfIgHABQgGgHgGASQgEAKgEAAIgEgBg");
	this.shape_2.setTransform(-4.9,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5EEF6").s().p("AAJBFIgMgPIgeghIgHgHQAWAAATgTIAAgBIAAABIAKgMQAZgigBgXQAGAHAAA3QgBAegJAZIAAABIgFANIgBABIgFAKIgDADIAAABIgDADg");
	this.shape_3.setTransform(-2.5,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYgEIAAgCIAOANQgLgDgDgIgAAEgCIABgBIAIgBQAGAAAGACg");
	this.shape_4.setTransform(-0.4,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgbgNIA3Ab");
	this.shape_5.setTransform(-3.8,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBB2QgIgTAEgvQAEgwARggIAxhgQAjgFATAmQAJASAGAlQAFAbgOAqQgMAmgLAOQgMAogYgVIgKgKIg5gdIAGAHQgPAPALAjIACAEIgEgIg");
	this.shape_6.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-13.6,16.4,27.4);


(lib.Symbol14copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABZgaQgBADATAYQAUAbABADQgRBMhbgDQhZgEgcg7Qgcg6gCgiQgBgjAJgRIAdA8QA1A6AugCQAvgCAhglg");
	this.shape.setTransform(1.5,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5EEF6").s().p("AgPApQgCgCgOABQgOAAgpgSIAAAAIAAAAIgBgBQgMgPAAgQIANANQAUARAcAEQgNgEgCgSIAXAMQAdAIAXgUQgLgCgCgLIAWADQAbgCAdgfQACAHALACIgCAHQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQgLAcgaAQQgNAIgPADQgRAAgJACIgBAAIgIAFQgGAEgDAAIgCgBg");
	this.shape_1.setTransform(5.1,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBHIgOgQQABASALAQIgLgIQgKgJgEgEIgHgNIAAAAIgGAAQgCgKgFgCQgGgCgCgKIgNgbIgJgdQgDgMAQg1QAoBYAfAGIAGACIAmAJIACABQARADARgHIAbgKQAJgCAOgPIAaAfQACAHAIACQgdAegbACIgXgDQACANALACQgYAUgdgIIgWgLQACARANAEQgcgEgTgQg");
	this.shape_2.setTransform(1.3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-8.6,27.7,22.9);


(lib.Symbol14copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABAA+IgBARQAAAFABAGQABALAEALQgEAAgEABQgBgCgBABQggADgagQQgKgJgJgMQgIgPgFgHQgBgBAAAAQgDgDgGgEQgIgFgCgBQgLgJgEgLQgEgMAHgoIAAgBIAAAAIAAAAIABAAQAAgDACgLQADgNACgFQADgHAFgFQAAAAAAgBIAHgHQAEgDAEgDQAIgHAJgEIAWgJQADAAACgBQAEgBADgBQgOATgEAaQgEAdAFAbQAFAWAQATQANAQAQAHQAFAFAHAEg");
	this.shape.setTransform(0.5,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5EEF6").s().p("AA7BUQggADgagPQgKgJgJgMIgNgWIgBgBQgDgDgGgEIgKgGQgLgKgEgIQgEgNAHgqIAAAAIAAAAIAAAAIABAAIAAgBQAIgRAQgJIgIATQgGAZAJAcQgDgOAQgKIAAAaQAFAcAbANQgCgLAKgIIAGAXQAOAXAiAGQABALAEAKIgIABQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(0.5,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQBIIgGgWQgKAIACALQgbgNgGgeIAAgaQgPAKADANQgKgZAHgZIAIgTQgQAIgJASIADgOQACgNADgFIAIgMIAAAAIAHgHIAIgHQAIgGAJgFIAWgIIAFgBIAHgCQgOATgEAaQgEAcAFAbQAFAWAPAUQAOAQAQAHIAMAIIgBARIABALQgjgGgNgXg");
	this.shape_2.setTransform(0.5,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-12.1,15.8,24.6);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABAA+IgBARQAAAFABAGQABALAEALQgEAAgEABQgBgCgBABQggADgagQQgKgJgJgMQgIgPgFgHQgBgBAAAAQgDgDgGgEQgIgFgCgBQgLgJgEgLQgEgMAHgoIAAgBIAAAAIAAAAIABAAQAAgDACgLQADgNACgFQADgHAFgFQAAAAAAgBIAHgHQAEgDAEgDQAIgHAJgEIAWgJQADAAACgBQAEgBADgBQgOATgEAaQgEAdAFAbQAFAWAQATQANAQAQAHQAFAFAHAEg");
	this.shape.setTransform(0.5,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AABhsQgIAUgDAbQgBAdAJAZQADANAJANQAaAZARAEQAFADAGAEQAAAIABAIQAAAGABAFQACAMAEAKQgDACgDAAQgfAHgbgMQgLgHgLgKQgEgHgEgFQgFgFgCgDQgEgEgGgDQgIgFgDgBQgLgJgGgKQgHgNAFgmQAAgBAAAAQAAgEABgLQACgNACgFQADgGAEgGQACgFADgDQADgEAEgDQAHgGAHgFQABgBABAAQAKgGALgGQACAAADgBQADgCABgBg");
	this.shape_1.setTransform(0.9,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AgPhpQgHAVgBAbQADAeAMAYQAHANAJAKQAcAVARABQAGACAGADQAAAHACAKQAAAFACAFQADANAEAKQgCABgDABQgdAMgbgJQgOgFgKgJQgFgFgFgFQgFgEgDgDQgEgEgGgCQgIgFgDgBQgMgIgGgJQgLgOACglQABAAgBgBQAAgEABgLQABgMABgHQACgGADgGQACgEADgEQACgEADgDQAFgHAHgGQAAAAABgBQAJgIAKgGQACgBACgBQADgCADgCg");
	this.shape_2.setTransform(1.2,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AgfhnQgEAWABAcQAHAeAOAXQAJAMAKAJQAgAQASgCQAFACAGABQgBAGAEALQABAFACAGQAEAMAEAKQgBACgCABQgbAQgcgFQgOgDgMgHQgGgFgGgDQgEgEgEgDQgFgDgGgDQgIgDgDgBQgNgIgHgJQgOgNAAglQAAAAAAgBQgCgEABgLQAAgMAAgHQACgGACgGQACgFACgEQACgEACgEQAEgHAFgGQABgBABgBQAHgJAJgHQACgCACgBQADgDADgCg");
	this.shape_3.setTransform(1.4,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AgvhlQgBAXAEAcQAKAfARATQALAOALAHQAkAMASgFQAFAAAGAAQgBAGAFAMQACAFACAFQAFANAFAJQgBADgCABQgYAWgdgCQgPgBgPgGQgFgDgHgEQgFgDgEgCQgFgDgGgCQgIgDgEgCQgNgHgIgIQgRgOgDgkQAAgBAAgBQgCgFAAgIQgBgMgBgIQABgGACgGQABgGABgEQACgEABgEQAEgIAEgHQAAgBABgBQAGgKAIgIQABgCACgCQADgDADgCg");
	this.shape_4.setTransform(1.5,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("Ag+hlQACAZAFAdQAPAfATASQANANANAGQAmAHASgIQAGgBAFgBQAAAFAGANQACAFACAFQAHAOAEAJQABADgBABQgWAageACQgPABgRgEQgIgDgGgCQgFgDgEgCQgGgCgGgCQgIgDgEgBQgOgHgJgIQgUgOgFgiQgBgCAAgBQgCgGgBgIQgCgLgBgIQAAgHABgGQABgFABgFQAAgEACgEQABgJAEgHQAAgBABgBQAEgMAHgJQACgDABgCQADgEADgDg");
	this.shape_5.setTransform(1.6,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AhOhlQAFAbAIAdQATAgAWAQQAPANAOAEQAoACATgKQAGgCAFgCQAAAEAHAOQACAEADAGQAIAOAFAIQABAEgBACQgTAfgfAFQgPADgTgDQgIgBgIgDQgFgCgEgBQgHgCgGgCQgHgCgFgCQgPgFgKgIQgWgOgJghQAAgCgBgBQgCgHgCgIQgCgKgCgJQgBgHAAgGQABgGAAgEQAAgFABgFQAAgJADgIQAAgBAAgBQAEgOAFgJQACgDABgCQACgFADgEg");
	this.shape_6.setTransform(1.7,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AhchlQAIAcAKAdQAXAhAYAPQARALAPADQAsgCAUgOQAFgCAFgCQgBACAJAOQADAFADAGQAJAOAFAIQACAFAAABQgRAkgfAJQgQAFgVgBQgJgBgKgCQgFgBgEgCQgGgBgGgCQgIgBgFgCQgPgFgMgHQgZgOgLggQgBgCAAgCQgEgGgCgJQgDgMgDgHQgBgHAAgGQgBgGAAgFQAAgFAAgEQgBgKABgJQABgBAAgBQACgPAEgLQACgDABgDQACgFADgEg");
	this.shape_7.setTransform(1.7,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AhqhmQALAdAMAdQAbAiAbANQATAMARAAQAugGAUgPQAFgDAFgFQAAADAKAOQADAEAEAGQAKAOAFAIQADAFAAACQgOApghAMQgQAHgWAAQgKABgLgCQgGgBgFAAQgGgBgGgCQgHgBgGgCQgQgEgMgHQgcgOgOgfQgBgCgBgBQgDgIgDgIQgEgLgDgIQgCgHgCgHQAAgGgBgFQgBgFgBgFQgCgLABgJQAAgBAAgBQABgQADgMQABgEABgDQACgGADgEg");
	this.shape_8.setTransform(1.7,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("ABZgaQgBADATAYQAUAbABADQgRBMhbgDQhZgEgcg7Qgcg6gCgiQgBgjAJgRIAdA8QA1A6AugCQAvgCAhglg");
	this.shape_9.setTransform(1.5,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5EEF6").s().p("AA7BUQggADgagPQgKgJgJgMIgNgWIgBgBQgDgDgGgEIgKgGQgLgKgEgIQgEgNAHgqIAAAAIAAAAIAAAAIABAAIAAgBQAIgRAQgJIgIATQgGAZAJAcQgDgOAQgKIAAAaQAFAcAbANQgCgLAKgIIAGAXQAOAXAiAGQABALAEAKIgIABQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAg");
	this.shape_10.setTransform(0.5,2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQBIIgGgWQgKAIACALQgbgNgGgeIAAgaQgPAKADANQgKgZAHgZIAIgTQgQAIgJASIADgOQACgNADgFIAIgMIAAAAIAHgHIAIgHQAIgGAJgFIAWgIIAFgBIAHgCQgOATgEAaQgEAcAFAbQAFAWAPAUQAOAQAQAHIAMAIIgBARIABALQgjgGgNgXg");
	this.shape_11.setTransform(0.5,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5EEF6").s().p("AAGBDQgKgGgKgKIgBgBIgOgUIgJgGIgDgBIgIgEIgKgKIgGgIQgGgJADgjIABgFIABgDIAEgFQAGgLAKgIIgCAFIgEANIAAAAIAAABQgEAXALAXQgCgIAGgIIADgCIADgDIAAABIADAYQAIAZAaAKQgCgGADgGIAFgHIABACIAHATQAPAUAiAIQACAHADAHIgHABQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgJACgKAAQgTAAgRgJg");
	this.shape_12.setTransform(1.2,3.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA6BeIgIgCQgSgEgKgNIgIgTIgBAAIgBABIAAgCIgFAGQgEAHADAGQgagKgJgbIgCgYIAAgBIgDADIgEACQgFAIABAIQgKgXADgVIAAgBIAAAAIAFgNIABgFQgKAIgFALIgEAFIgDACQgBgDABgHIABgEIAAgEIAAgDIABgJIABgDIADgGIADgGIAAAAIAGgIIADgFIADgCQAGgHAHgFIACgBIAWgMIAEgCIAFgDQgIAUgDAaQgCAZAGAVIABACIACAEQADANAHALIABACQAFAHAHAGIAGAFQAIAHAIAEIAKADIALAGIABARIABAKIgIgBg");
	this.shape_13.setTransform(0.8,-1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E5EEF6").s().p("AALA+QgLgEgJgJIgBAAIgQgSIgJgFIgCAAIgIgDIgMgJIgGgHQgHgIgCggIABgGIAAgDIAFgDQADgMAJgJIgCAJIgBAJIAAALQACAQAJAOIAAAEIAAgCIACACQgFgJAIgLIADgDIAAACIAFAVQALAXAaAGQgDgEACgFQABgEADgFIACADIAJAPQAPASAiADQABAHAFAGIgHADQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgOAFgNAAQgOAAgNgFg");
	this.shape_14.setTransform(1.8,4.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA5BZQgRgCgKgKIgKgQIgCABIgCABIgCgDQgDAEgBAEQgCAFADAFQgagGgLgZIgFgVIAAgCIgDADQgIALAFAJIgCgCIAAACIAAgEQgJgPgCgPIAAgLIABgHIACgJQgJAJgDAKIgFADIgCACIAAAAQgCgEAAgGIAAgDIAAgEIAAgDIgBgJIAAgDIADgGIACgHIAAAAIAEgIIADgFIACgDQAFgIAGgFIABgCIAUgQIAEgDIAHgEQgHAWgBAaQABAaAIARIACAEIACADQAGAMAGALIACABQAGAHAHAFIAGAEIASAIQAFABAFAAIALAFIADAQIACALIgGAAIgCAAIgFgBg");
	this.shape_15.setTransform(1.1,-1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E5EEF6").s().p("AARA5QgNgDgIgHIgBAAIgSgPIgIgEIgDAAIgIgCQgFgEgHgEIgHgGQgIgJgGgcIAAgFIABgDIAEgCQABgMAHgKIgBARIAAAAQACAUANARIABADIABAAIAAgBIAAAAIAAgBQgDgHAFgJIACgDIABACIAHATQAOAVAZACQgDgEABgFQAAgEAEgEIACADIAKANQARAOAhgBQABAHAGAFIgHADQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgRAIgSAAQgIAAgIgBg");
	this.shape_16.setTransform(2.4,4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABCBVQgRAAgLgHIgMgNIgCABIgDABIgDgDQgDAFAAADQgCAFADAFQgZgDgNgWIgHgTIgBgCIgCACQgGAJADAIIAAAAIAAAAIAAABIAAACIgCgFQgMgRgCgTIAAgBIABgQQgHAJgBANIgFACIgDABIAAAAQgDgEgBgHIAAgEIgBgFIAAAAIgBgCIgBgIIgBgDIABgHIACgGIAAgBIADgJIACgFIABgCQAEgKAFgGIAAgCIASgTIAEgEIAGgFQgDAXABAZQAFAcAIAPIADAEIADADIAQAUIAAACQAIAGAIAEIAGADIAUAFQAEABAGgBIALACIADAQIAEALIgFABIgDABIgBAAg");
	this.shape_17.setTransform(1.2,-1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E5EEF6").s().p("AAXAyQgNgBgKgFIAAAAIgTgMIgIgDIgCAAIgJgBQgFgEgIgDIgHgFQgKgIgKgZIAAgFIAAgCIAEgCQgBgNAGgLIACARIAAAAQAEATAPAOIABACIABAAIAAgBIAAAAIgBgBQgDgFAEgJIABgDIACACIAJAQQARAUAYgCQgEgEABgFIADgIIADAEIALAKQARALAhgFQABAHAHAEIgGAEQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgUAOgXAAIgGgBg");
	this.shape_18.setTransform(2.9,5.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBAIgKgRIgBgDIgCADQgEAJADAHIACABIgBABIAAAAIgBABIgBgDQgOgPgFgTIAAgBIgBgQQgGALAAANIgEABIgEAAIAAAAQgEgFgBgGIgBgEIgBgGIAAAAIgCgBQAAgHgCgDIgBgDIAAgGIAAgGIABgBIABgJIABgGIABgCQACgLAEgHIAAgCQAHgIAKgPIADgEIAGgHQgBAZAEAZQAHAdALANIADADIADADIATASIABABQAIAGAJADIAHACIAUACQAFABAGgCIALAAIAFAQIAEALIgDACIgCACQgQADgMgFIgOgJIgCABIgFABIgDgDIgDAHQgBAGAEAEIgEAAQgVAAgPgTg");
	this.shape_19.setTransform(1.3,-0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E5EEF6").s().p("AAFAoIgBAAIgTgJIgHgCIgDABQgHABgCgBQgFgEgJgCIgIgEQgKgIgOgWIgBgFIAAgBIAEgBQgDgNAEgNIADAJIABAIQAHATARALIABABIABAAIAAAAIABgBIgCgBQgDgFADgJIAAgDIACADIALANQATASAYgFQgFgEABgGIACgFIAFACIALAIQATAIAggKQABAHAHAEIgFAEQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgVASgZACIgFABQgLAAgJgEg");
	this.shape_20.setTransform(3.4,6.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNBFIgLgPIgCgDIgBADQgDAJAEAHIACABIgBAAIAAABIgBAAIgBgBQgRgNgHgTIgCgJIgCgIQgEANADANIgEAAIgFAAIgBgBQgFgFgBgGIgBgFIgCgFIAAAAIgDgCQgBgHgCgDIgCgDIAAgHIgBgGIAAAAIAAgKIAAgFIABgEIADgTIABgDIAOgZIAEgGIAFgIQACAbAGAYQALAfAMALIADACIAEADIAVAQIACABQAJAFAJACIAIABIAVAAQAFAAAGgDIALgCIAHAQIAEAKIgBADQAAABAAABQAAAAAAABQAAAAAAAAQABABAAAAQgRAGgMgDQgIgBgHgEIgCAAIgGACIgFgEIgCAGQgBAHAFAEIgLABQgTAAgNgOg");
	this.shape_21.setTransform(1.3,-0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E5EEF6").s().p("AALAkIgBAAIgUgGIgIgBIgDABQgGACgDgBQgEgEgLgBIgIgDQgLgHgTgTIgBgFIAAgBIADAAQgFgOAEgNIADAIIADAIQALAUAWAJIgCgBIABgBIgDgBQgFgGACgJIABgCIACADIAOALQAVAQAYgJQgHgEABgGIABgEIAGADIAMAEQAUAGAfgOQABAFAJAEIgEAFQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgSAVgaAGIgOABIgLgBg");
	this.shape_22.setTransform(3.9,7.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJBKIgNgOIgDgDIAAADQgCAKAFAGIADACIgBAAIACACQgWgMgLgTIgDgJIgDgIQgEAOAFAOIgEAAIgFgCIgBgBQgGgGgCgFIgBgFIgDgGIAAAAIgDgBQgCgIgDgDIgCgDIgCgIIgBgHIABgBIgCgIIgBgGIABgDIAAgWIAAgDIAMgdIAEgGIAEgJQAGAcAIAYQAOAeAOALIAEACIAFADIAXAOIACAAQAKAFAKAAIAIAAIAWgCQAGgBAFgDQAGgBAGgDIAIAPIAFALIABAEQAAAEADAAQgRAJgNAAQgIABgJgDIgCABIgHABIgGgEIgBAFQgBAHAGAEQgJADgJAAQgPAAgMgJg");
	this.shape_23.setTransform(1.5,0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E5EEF6").s().p("AgaAfQgDgDgMgBIgIgCQgNgGgWgTIgCgCIAAAAQgFgPADgOIAEAIIAEAIQAOARAYAJIgDgCIACABIgCgBQgHgGABgKIAAgCIADADIAPAKQAYAMAXgMIgDgCQgEgCABgGIAAgEIAIADIALAFQAWACAegUQACAHAJADIgEAFQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQgQAWgaAJQgNAFgNgBIgBAAIgVgEIgIABIgDABQgFADgDAAIgCgBg");
	this.shape_24.setTransform(4.4,8.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgyA5IgFgIIgEgIQgDAOAFAOIAAABIgHgEIgBAAQgHgHgCgEIgCgGIgDgGIgBgBIgEAAQgBgJgEgDIgCgCQgCgEgBgEIgCgIIAAgBIgDgKIgCgFIAAgDIgCgYIAAgCQACgLAJgWIADgIIAEgKQAJAeAKAXQARAgAPAJIAFACIAFACIAbAMIABABQALADALAAIAJgBIAXgFQAFgBAHgEIALgHIAJAQIAGAKIADAEQABAGAEABQgQALgOADQgJACgKAAIgCAAIgIAAIgHgDIgBAEQgBAGAFAEIADABQgZANgWgNIgQgMIgDgCIAAACQgBAMAHAGIADABIgCgBIACABQgXgJgOgSg");
	this.shape_25.setTransform(1.4,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E5EEF6").s().p("AgUAiQgDgDgNAAIgJgCQgOgEgagQIgCgDIgBgCQgHgMABgPIAMAQIAAABIAJAGQANAJASAFQgKgFAAgNIAAgBIAEADIARAIQAaALAXgRIgCAAIABAAIgCAAQgHgDABgIIABgCIAJACIAMADQAWAAAfgZQABAHAKACIgDAHQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAABABQgOAZgaAMQgNAGgOABIgBAAIgXAAIgHABIgDACQgFADgDAAIgCAAg");
	this.shape_26.setTransform(4.7,9.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnBJIgJgIIgBgBIgLgPQgBAOAHAOIABADIgJgGIgBgBQgIgHgDgEIgDgGIgDgGIgBgBIgEAAQgCgJgFgDIgDgDQgCgDgBgFIgEgIIABgBIgFgLIgCgGIgBgCIgFgZIAAgEQABgLAIgZIADgIIAEgLQAMAfAMAXQAUAgARAHIAFACIAGACIAdAKIACAAQAMAEALgCIAJgCIAZgHQAFgCAHgFQAFgDAGgEIALANIAHALIAEAGQACAGAGABQgQAOgOAGQgLAEgKAAIgDABIgIgBIgKgCIAAABQgBAJAHAEIABAAIAAAAIACABQgZAQgagKIgPgLIgFgDIAAACQABAOAKAFQgSgEgNgKg");
	this.shape_27.setTransform(1.4,1.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E5EEF6").s().p("AgPApQgCgCgOABQgOAAgpgSIAAAAIAAAAIgBgBQgMgPAAgQIANANQAUARAcAEQgNgEgCgSIAXAMQAdAIAXgUQgLgCgCgLIAWADQAbgCAdgfQACAHALACIgCAHQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQgLAcgaAQQgNAIgPADQgRAAgJACIgBAAIgIAFQgGAEgDAAIgCgBg");
	this.shape_28.setTransform(5.1,9.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgvBHIgOgQQABASALAQIgLgIQgKgJgEgEIgHgNIAAAAIgGAAQgCgKgFgCQgGgCgCgKIgNgbIgJgdQgDgMAQg1QAoBYAfAGIAGACIAmAJIACABQARADARgHIAbgKQAJgCAOgPIAaAfQACAHAIACQgdAegbACIgXgDQACANALACQgYAUgdgIIgWgLQACARANAEQgcgEgTgQg");
	this.shape_29.setTransform(1.3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-12.1,15.8,24.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAVQgJgJAAgMQAAgLAJgJQAKgJALAAQAMAAAKAJQAJAJAAALQAAAMgJAJQgKAJgMAAQgLAAgKgJgAAHABIAAAKIgBACIgBACQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAIAKAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAIgCgCIgBgCIAAgUIABgCQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAIgKAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIABACIABACIAAAIIgIAAIAAgIIABgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgKAAQAAAAgBAAQgBAAAAABQAAAAgBAAQAAABAAAAIABACIACACIAAAUQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgBACQAAAAAAABQABAAAAAAQAAAAABABQABAAAAAAIAKAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIgBgCIAAgKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0057A8").s().p("AgZAZQgKgKgBgOIAAgBIAAAAQABgOAKgKQALgKAOAAQAPAAALAKQALAKAAAOQAAAOgLALQgLAKgPAAQgOAAgLgKgAgVgUQgJAJAAALQAAAMAJAJQAKAJALAAQAMAAAKgJQAJgJAAgMQAAgLgJgJQgKgJgMAAQgLAAgKAJgAAIARQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIABgCIABgCIAAgKIgIAAIAAAKIABACIAAACQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgKAAQAAAAgBAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIABgCQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgUIgCgCIgBgCQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAKAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBACIAAAIIAIAAIAAgIIgBgCIgBgCQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAKAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgBACIAAAUIABACIACACQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.5,7.5,7.2);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD33A").s().p("AApAeIABgHIACAAIgBAHIgCABIAAgBgAAqAUIAAgHIADAAIgBAIIgCgBgAgtANIAGgNIAEABIgIANIgCgBgAArAKIABgRQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABABIgBASIgCgBgAglgDIADgHIAEACIgEAHIgDgCgAgggNIAIgQQAAAAAAAAQABgBAAAAQAAABAAAAQAAAAAAABIgGARIgDgCg");
	this.shape.setTransform(-1.1,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0057A8").s().p("AAIA0QgOgDgXgHIgCgBQgcgKgNgIQgXgOgIgMIAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgGAEgHIAHgLIAHgMQAEgHAEgDQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAlAcQAWANAVAGQArAKAtgIIAAABIgMACIgLACIABAVIAZgEIABgBIAAABIgBABIgZAFIAAAHIAZgGIACAAIAAABIgBABQgLAEgPADIAAAGIgBABIgBgBIAAgGIgKABIgCgBIAAAAIAAgJQgNAAgOgBIgCAAQgSgCgQgGIgBAAIgBAHQANAEAWAEIADABIAPACIAAABIgQgBIgCAAQgRgCgTgGIgEAQIANAEIALADQAIACADgCQgCABgFAAIgKAAgAgXAoIAKADIADgQIgHgCIgGAPgAhRALQALAIAOAHIACABIAZALIACABIAFgPIgBgBIgYgJIgDgCQgNgHgKgGgABAAbIgBAIIAIgCIAAgHIgHABgAgDAQIABAAQAPAFASACIADABIAaABIACgUIgHAAIgVgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAABAAAAIgbgEIgGgCgABAAEIABAUIAGAAQgBgMABgIIgHAAgAgPARIgBAFIAAAAIAGACIACgHIgGgCIgBACgAhFgIIgBADQAKAGAMAHIADACQALAGAOAFIABgGIABgCIgYgKIgDgCQgMgFgKgHIgCADgAgNAMIAGACIAHgQIgHgCIgGAQgAg/gUIgDAFQAKAIAMAHIADAAQALAGANAFQAEgLAEgFQgagKgVgPQgDADgEAHgAhWAGIABACIABABIAJgMIgDgCgAhegLIgFAFIAIAIIACACIAIgMIgIgKIgFAHgAhMgKIADADIAEgGIgDgCgAhXgWIAJAKIADgGIgJgJIgDAFgAhEgWIgCADIADADIAEgJQADgEADgCIgEgDIgHAMgAhRgeIAIAJIAAAAIAGgKQACgDACgCIgKgJIgIAPgABSA0IAAgBIALgDIAJgDIACgBQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgJAGgKAAIgEAAg");
	this.shape_1.setTransform(0,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED1B37").s().p("AAeAyQgggCgcgKQAXAHAOACQANACAEgCQgDABgIgBIgLgDIgNgEIAEgQQATAGARACIgBAGQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIABgHIAQAAIAAAAIgPgDIAAgHQAOABANgBIAAAJIAAABIACABIAKgBIAAAFIABABIABgBIAAgGQAPgCALgFIACARIgJADIgLADIAAAAIgBAAQgTAEgTAAIgMgBgAgYAjIAGgOIAHACIgDAQIgKgEgAgeAhIgZgKIAHgOIAYAKIABAAIgFAPIgCgBgAA/AWIAHAAIAAAHIgIABIABgIgAgGAVIABgHIABAAQAQAFASACIgBAIQgWgEgNgEgABJAVIAZgFIAAAHIgZAFIAAgHgAhSAGIAIgLQAKAGANAGIgGAPQgOgIgLgIgAAhATIAAgTIAVAAIAHAAIgCAUIgagBgAA/AAIAHAAQgBAHABAMIgGABIgBgUgAgRASIAAAAIABgFIABgDIAGACIgCAIIgGgCgABIAAIALgCIAMgDIADAUIgZAEIgBgTgAgDALIgBAAIAEgRIAFACIAbAEIgCATQgSgCgPgGgAguAFIADgFIAYAJIgBACIgBAFQgOgFgLgGgAgOAIIAGgRIAHACIgHARIgGgCgAgqgDIAHgRQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBABIgIAQQgMgHgKgIIADgGQAEgHADgCQAVAPAaAJQgEAHgEAJQgNgFgLgEgAhWADIgBgBIAIgMIADADIgJALIgBgBgAhHgKIABgDIACgDQAKAIAMAHIgDAFQgMgFgKgJgAhcgBIgIgJIAFgFIAFgIIAIAKIgIANgAhNgOIAEgGIADADIgEAFIgDgCgAhYgaIADgFIAJAJIgDAFIgJgJgAhHgXIACgEIAHgLIAEADQgDABgDAFIgEAIIgDgCgAhSgiIAIgQIAKAKQgCABgCAEIgGAJIAAABIgIgJg");
	this.shape_2.setTransform(0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-5.4,21.2,10.9);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0057A8").s().p("AAAArQgTgegCgfQgBgLACgKIAAgCQAAgBABAAQAAgBAAAAQAAAAAAABQAAAAAAABIAAACQgCAmAXAnIAGgIIAMgJIAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIgBAAIgOARIgCADIgCABIgBABIgCgBg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2CDE5").s().p("AgTgmQAIAhAKAHQgBgCACgHIABgGIAAAFQABAIAIALQAFAHAFAEIAAAAIgMAJIgGAIQgXgnACgmg");
	this.shape_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-4.4,4.6,8.9);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgIAGQABgDABgCQAGgGAHAAQABAAABAA");
	this.shape.setTransform(0.6,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2CDE5").s().p("AAAAoQAEgIAJAAQgJAAgEAIIgDgFQgLgTgBgQQAAgKACgJIAJgWQgDAOAEAVIADALQgBgEABgHIADgJIAAAGQAAARANAXIgBABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIgCACIgNAJIAAgBg");
	this.shape_1.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-4.4,4.2,9.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgTAAIAnAA");
	this.shape.setTransform(-0.6,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AgZAUQAAgCAFgHQADgEAFgHQACgBADgCQAJgMALgCQAFgBAEAAQADgBABAAQgFALgDAIQAAADgBAFQgBACgBAI");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUALIAIgLIAFgDQAJgMALgCIAJgBIAEgBIgIATIgBAIIgCAKIgoACQAAgCAFgHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.1,7.3,6.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AgUA0QATARABAOIAAABQAAgDAAgDQAIgWAFgNQAAgCABgBQAHgZAAgYQABgXgJgUQgEgKgIgKQgFgGgEgF");
	this.shape.setTransform(0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2CDE5").s().p("AgDAsIADgVQAEgsgOgdIAOAZQAOAigPAqQgDgEgDgDg");
	this.shape_1.setTransform(-0.9,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5EEF6").s().p("AAABUIACgHIgCAHgAAABTQAAgOgFgIQAOgqgMgiIgRgZIgCgDIAQgoIAJALQAIAKAEAKQAJAUgBAXQAAAXgHAZIgBADIgNAjIgCAHgAACBNIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-9.4,6.3,18.9);


(lib.Symbol2copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgnA0QAHiUBCgEQAUBigsBng");
	this.shape.setTransform(0.9,-44.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA0QAHiUBCgEQAUBigsBng");
	this.shape_1.setTransform(0.9,-44.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(4));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAGANIgZgMAAVgEIgmgI");
	this.shape_2.setTransform(33.6,-30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgTADQAPAAANAKAgSgMQASgDAUAM");
	this.shape_3.setTransform(32.4,-31.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgTAGQARgGAPAPAgSgLQAQgJAWAS");
	this.shape_4.setTransform(29.6,-32.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgTAJQATgKARARAgSgJQAOgRAYAa");
	this.shape_5.setTransform(32.1,-32.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAUASQgUgWgTAQAAUAAQgbgegLAX");
	this.shape_6.setTransform(34.5,-32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AiKiaQB5CrC8ARQgRBRhwgtIAfA6Qg5ABgwgpIApBDQjAgiAOho");
	this.shape_7.setTransform(19.2,-36);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AiaAnQAEBPCdAdIgqgsQAyAoA2gHQAQgSgLgoQBOAOADgtQiqgXhkiq");
	this.shape_8.setTransform(19.4,-37.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("AgHCFQAGABAEABIgrgVQARAMAQAHgAiLA4QATA2BxAXQAkAQAkgJQAvgHgIg0QAtgQgMgKQiXgdhQio");
	this.shape_9.setTransform(19.7,-39);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0057A8").ss(1,1,1).p("AiDBEQAmAhBZARIguACQA3AlAxgTQBOAFgEhAQANgugbAZQiFgig7io");
	this.shape_10.setTransform(20.6,-39.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0057A8").ss(1,1,1).p("AhMiSQAmCmByAoQAqg8AUBMQABBMhugQQgsAZg8gkIAwgZIhugV");
	this.shape_11.setTransform(23,-40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	// Layer 7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AipARIAfirQB6CrC7ARQgRBRhwgtIAfA6Qg5ABgwgpIApBDQjAgjAOhng");
	this.shape_12.setTransform(19.2,-36);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiaAmIAni3QBlCoCpAXQgDAthOgNQALAogQARQg2AIgygoIApArQicgcgEhQg");
	this.shape_13.setTransform(19.4,-37.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHCFQhxgXgTg2IAujGQBPCoCXAdQAMAKgtAQQAIA0gvAHQgNADgOAAQgXAAgWgKg");
	this.shape_14.setTransform(19.7,-39);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyB4IAugCQhZgRgmghIA1jTQA7CnCEAiQAbgZgNAuQAFBAhOgFQgRAGgRAAQggAAgmgYg");
	this.shape_15.setTransform(20.7,-39.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhLB9IAvgZIhsgVIA7jhQAnCmByAoQApg8AUBMQABBMhtgQQgTALgTAAQgfAAgjgWg");
	this.shape_16.setTransform(23,-40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(1));

	// Layer 4
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E5EEF6").s().p("AgxA5Qg1gkgPgkQgHgTAEgMQAHAIAVANQAgAVAIgGQALgHgTgvIgKgYQgCgFAJAMQAZAmAQANQAOAMAeANQAmALAggCQgJABARAaQANAVAJAKQgagBgzgWIgegRQgOgFAbAkIAeAlQhKgMghgVg");
	this.shape_17.setTransform(14.2,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).to({_off:true},1).wait(4));

	// Layer 6
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYCFQgegBghgEQhAgIgIgLQgUgaAJghIAbjEQAFApAlAnQAkAmAfAZQAfAWAcAKIBIAWQArAMAGABQAcADAAAEQgGAxg2AHQgyAHgSgaIAAAnIgkAAIAAAAQgWAAgMgOg");
	this.shape_18.setTransform(18.8,-39.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-55.6,41.4,36.1);


(lib.Symbol2copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgnA0QAHiUBCgEQAUBigsBng");
	this.shape.setTransform(0.9,-44.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA0QAHiUBCgEQAUBigsBng");
	this.shape_1.setTransform(0.9,-44.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgMBiIAZjD");
	this.shape_2.setTransform(3,-44.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("ACqA9QACgGABgIQABgDgcgDQgGgBgrgNQgrgMgegKQgbgHgfgZQgfgYglgnQgkgngGgoAgYBuQAMANAkAMQAxARACgKIgeg6QATAbAygHQAjgFAOgXIgXgFACjBMQAFgGACgJIgbgEAgYBuIgGgIAiqAaQgJAiAZAhQAZAiAmAPQAmAQAXAEQAXAFASADIgjg8");
	this.shape_3.setTransform(18.9,-37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5EEF6").s().p("AgxA5Qg1gkgPgkQgHgTAEgMQAHAIAVANQAgAVAIgGQALgHgTgvIgKgYQgCgFAJAMQAZAmAQANQAOAMAeANQAmALAggCQgJABARAaQANAVAJAKQgagBgzgWIgegRQgOgFAbAkIAeAlQhKgMghgVg");
	this.shape_4.setTransform(14.2,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYCFQgegBghgEQhAgIgIgLQgUgaAJghIAbjEQAFApAlAnQAkAmAfAZQAfAWAcAKIBIAWQArAMAGABQAcADAAAEQgGAxg2AHQgyAHgSgaIAAAnIgkAAIAAAAQgWAAgMgOg");
	this.shape_5.setTransform(18.8,-39.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-55.6,41.4,36.2);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiOg8IDUhOIBJDHIjUBOg");
	mask.setTransform(14.3,13.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABHBLQgegCgfgIQhagYgog+QgUggAMgPQAqAqAyAAQAIAAABgQQAAgRgLgQQAaAFASAGIAfAGQAaApAoAIIAIAJQAKAOAMAKQgBAkggAOQgCACgJAAIgSgBg");
	this.shape.setTransform(14,14.3);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,6.7,26.8,15.2);


(lib.Tween24copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AgWARIACgGIABgIIAAgEIAAgCIAAgBIAAgBQAAAAABABIAAAAIABACIABAFIAAAEIgCALQAJAAAJAAIAAgBIAAgOIAAgIIAAgBIAAgBQgBgBABAAQAAgBAAABIAAABIACAHIABAIIgBAJQABAAAAAAQAIgCAHgEIAAgLIgCgIIgCgHIgBgBIABgBIABAAIAAABIABABIAEAKIADAM");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-2.8,6.6,5.7);


(lib.Tween24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AgWARIACgGIABgIIAAgEIAAgCIAAgBIAAgBQAAAAABABIAAAAIABACIABAFIAAAEIgCALQAJAAAJAAIAAgBIAAgOIAAgIIAAgBIAAgBQgBgBABAAQAAgBAAABIAAABIACAHIABAIIgBAJQABAAAAAAQAIgCAHgEIAAgLIgCgIIgCgHIgBgBIABgBIABAAIAAABIABABIAEAKIADAM");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-2.8,6.6,5.7);


(lib.Tween23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AgWARIACgGIABgIIAAgEIAAgCIAAgBIAAgBQAAAAABABIAAAAIABACIABAFIAAAEIgCALQAJAAAJAAIAAgBIAAgOIAAgIIAAgBIAAgBQgBgBABAAQAAgBAAABIAAABIACAHIABAIIgBAJQABAAAAAAQAIgCAHgEIAAgLIgCgIIgCgHIgBgBIABgBIABAAIAAABIABABIAEAKIADAM");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-2.8,6.6,5.7);


(lib.body1copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEB8DE").s().p("AgqBZIgQgFIgNgGIgPgJQgJgFgJgCQgKAAgJgFIgKgHQgCgDgPgJIgdgSQgOgIgageQgQgagCggQAXA1BvgGQAAAKAaANQAdAMAoADQBtAKBphPQAcgOAAgMIAAgCIAEgCQgjBJhRA2QhQA4g8gEIgMACQgGAAgGgCg");
	this.shape.setTransform(-17.8,-22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEB8DE").s().p("AgJBiIgPgCIgKgCIgPgFQgIgDgJAAQgIAAgIgDIgKgEIgPgIIgcgMQgQgGgZgYQgRgUgIgYQAcAbBVgWQACAEATAEQAXACAegFIALgEQA/AEBAgyQAcgLAXgPQAOgFAFgFQAFgDAAgCIAAgBIADAAIgIASQgTAvgfAiQgLAOgMANQgYAYgYARQggAWgcADIgEABIgDABQgGABgGAAIgDAAg");
	this.shape_1.setTransform(-11.1,-15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("AgFBqIgPgBIgOgBQgJABgHgBIgJgCIgOgEIgbgHQgSgFgXgRQgRgPgNgWQAfAJBAgmQADgCAOgBQARgFAWgOIAJgIQA1AHA7g7QAcgJAVgKQANgEAEgDIAEAAIgBAAIACACIgGARQgOAvgSAjQgHAMgIANQgQAagTATQgaAagWAIIgCABIgEABIgPADIgNABIgHAAg");
	this.shape_2.setTransform(-5.6,-8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AEB8DE").s().p("AghB3QgFAAgIgBQgOgBgNgDQgSgCgWgNQgTgMgQgSQAigGAwgxQAEgGAKgHQANgMAPgTIAHgLQAuAHA1hCQAegGASgGQANgEAEgCIABAFIAAABIABADIgEAQQgKAvgJAiQgDANgFANQgKAagPAXQgVAcgSALIgCABIgCACIgOAFIgMADIgIABIgOACIgMACIgOABIgJAAg");
	this.shape_3.setTransform(-1.3,-4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AEB8DE").s().p("Ag1CBQgUgCgVgJQgTgJgSgPQAjgRAkg6QAFgJAHgKQAKgRALgXIAFgNQApAIAyhHIAvgJIAQgEIAAAJIAAABIAAAEIgDAPQgGAvgDAiQgBAPgDAMQgFAagNAYQgRAegPANIgBACIgCACIgNAGIgLAFIgHACIgOAEIgNADQgFACgHABIgIABIgNABIgZgBg");
	this.shape_4.setTransform(1.8,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AEB8DE").s().p("AgqCJQgUgBgUgHQgUgIgUgNQAlgYAdg+IAKgWQAJgVAIgaIAEgOQAmAIAwhKIAugGIAQgDIgBAKIAAACIgBAFIgBAPQgFAvACAhQAAAPgBAMQgDAbgLAYQgPAggNAOIgBACIgCACIgMAIIgKAFIgIADIgNAFIgNAEIgNAEIgGABIgMACIgQABIgKAAg");
	this.shape_5.setTransform(3.6,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AEB8DE").s().p("Ah2BxQA6grAiiGQAlAIAwhLQA3gGAGgCIgEAhQgDAvACAhQAEApgQAmQgOAggMAPIgEAEQg3AkgyAAQgtAAgpgbg");
	this.shape_6.setTransform(4.3,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("ABgByQgVAOgrALQgdAIgVgCQgiADgigQQgjgRgggWQghgXgEgDQgbgWgOggQgKgWAFggQAFggAMgRQAMgRAKgKQAJgKANgFQAMgGAZgBQAZgCAZAEQAZAEBPAbQA4AMAtgzQAOAsAkAiQAkAgAjABQgJAfgzAwQgtAtglAYg");
	this.shape_7.setTransform(-17.8,-28.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhWCEQgjgRgggWIglgaQgbgWgOggQgKgWAFggQAFggAMgRQAMgRAKgKQAJgKANgFQAMgGAZgBQAZgCAZAEQAZAEBPAbQA4AMAtgzQAOAsAkAiQAkAgAjABQgJAfgzAwQgtAtglAYQgVAOgrALQgdAIgVgCIgLABQgcAAgdgOg");
	this.shape_8.setTransform(-17.8,-28.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("AjVgjQAGgdAKgQQAOgSAGgHQAIgKALgHQALgIAUgEQAZgGAQAAQAWgJAsALQAMAEAKAFQATAGARAAQAegBAZgTQATAgAfAWQACABADACQApAVAaAAQgDAOgJARQgMAagUAaQgEAIgEAGQgXAkgYAZQgDACgCADQgSASgoAPQgNAFgMADQgNAEgMAAQgfAGgjgNQgSgHgSgJQgRgJgPgKQgdgUgIgHQgVgSgMgYQgDgHgDgHQgKgYAEgdg");
	this.shape_9.setTransform(-12.4,-18.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag/CIQgSgHgSgJQgRgJgPgKQgdgUgIgHQgVgSgMgYIgGgOQgKgYAEgdQAGgdAKgQIAUgZQAIgKALgHQALgIAUgEQAZgGAQAAQAWgJAsALIAWAJQATAGARAAQAegBAZgTQATAgAfAWIAFADQApAVAaAAQgDAOgJARQgMAagUAaIgIAOQgXAkgYAZIgFAFQgSASgoAPQgNAFgMADQgNAEgMAAQgIACgLAAQgXAAgYgJg");
	this.shape_10.setTransform(-12.4,-18.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0057A8").ss(1,1,1).p("AjBgXQAFgbAKgPQAMgRAFgHQAIgKAJgHQAKgKAQgHQAUgKANgEQAYgSAgAEQALAFALAFQAOAHAQADQAbAGAYgJQAYAZAeAMQADABADABQArALATAAQgDAPgGARQgJAdgMAaQgCAIgDAHQgNAmgVAeQgBADgCADQgQAUgmAUQgMAFgMAFQgMAFgMACQgeAIgkgLQgSgFgTgJQgRgIgPgKQgagRgLgKQgUgTgMgZQgDgGgDgHQgKgdAFgYg");
	this.shape_11.setTransform(-7.9,-11.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsCSQgSgFgTgJQgRgIgPgKQgagRgLgKQgUgTgMgZIgGgNQgKgdAFgYQAFgbAKgPIARgYQAIgKAJgHQAKgKAQgHQAUgKANgEQAYgSAgAEIAWAKQAOAHAQADQAbAGAYgJQAYAZAeAMIAGACQArALATAAQgDAPgGARQgJAdgMAaIgFAPQgNAmgVAeIgDAGQgQAUgmAUIgYAKQgMAFgMACQgOADgMAAQgTAAgVgGg");
	this.shape_12.setTransform(-7.9,-11.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0057A8").ss(1,1,1).p("AiygMQAFgZAJgPQALgPAFgHQAHgKAIgJQAJgKAMgJQARgNALgHQAZgaAXgBQAKAGAKAFQAOAIANAFQAZAKAXgBQAbAUAeAGQADAAADAAQAuAEANgBQgDAQgEAQQgGAggGAcQgBAGgCAIQgFApgSAhQgBADgCADQgOAXgkAWQgLAGgMAGQgLAGgMADQggAKgigJQgTgFgTgIQgRgIgPgJQgYgPgNgMQgUgTgMgaQgDgHgCgHQgLgeAGgWg");
	this.shape_13.setTransform(-4.4,-6.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdCcQgTgFgTgIQgRgIgPgJQgYgPgNgMQgUgTgMgaIgFgOQgLgeAGgWQAFgZAJgPIAQgWIAPgTQAJgKAMgJQARgNALgHQAZgaAXgBIAUALQAOAIANAFQAZAKAXgBQAbAUAeAGIAGAAQAuAEANgBIgHAgIgMA8IgDAOQgFApgSAhIgDAGQgOAXgkAWIgXAMQgLAGgMADQgQAFgSAAQgPAAgRgEg");
	this.shape_14.setTransform(-4.4,-6.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0057A8").ss(1,1,1).p("AingFQAFgXAJgOQAJgPAFgHQAHgKAHgJQAIgLAKgLQAPgPAIgJQAagfARgFQAKAGAIAFQAOAJALAHQAYAOAWAEQAeARAeAAQADgBADAAQAwgBAIgBQgCAQgCAQQgEAigDAcQAAAIAAAGQgBAqgPAkQgBADgCADQgNAZgiAYQgLAHgMAHQgLAGgLAEQggALgjgIQgSgDgUgIQgRgIgPgIQgWgOgPgOQgUgTgLgaQgDgHgDgHQgKgfAGgWg");
	this.shape_15.setTransform(-2,-2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTCiQgSgDgUgIQgRgIgPgIQgWgOgPgOQgUgTgLgaIgGgOQgKgfAGgWQAFgXAJgOIAOgWIAOgTIASgWIAXgYQAagfARgFIASALIAZAQQAYAOAWAEQAeARAeAAIAGgBQAwgBAIgBIgEAgIgHA+IAAAOQgBAqgPAkIgDAGQgNAZgiAYIgXAOQgLAGgLAEQgSAHgUAAQgNAAgQgEg");
	this.shape_16.setTransform(-2,-2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0057A8").ss(1,1,1).p("AihAAQAGgXAIgOQAJgOAEgHQAHgKAGgJQAIgMAJgMQANgQAIgKQAagjANgGQAJAFAJAGQAMAJANAIQAVAQAVAHQAgAPAdgDQADgBADAAQAygFAGgBQgCARgBAPQgEAkAAAbQABAJAAAIQACApgNAmQgCADgBADQgMAagiAZQgKAHgMAIQgKAGgMAEQgfAMgjgHQgTgDgVgIQgRgHgOgJQgWgMgPgPQgUgUgLgaQgDgHgCgHQgLggAGgUg");
	this.shape_17.setTransform(-0.5,-0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMCmQgTgDgVgIQgRgHgOgJQgWgMgPgPQgUgUgLgaIgFgOQgLggAGgUQAGgXAIgOIANgVIANgTIARgYIAVgaQAagjANgGIASALIAZARQAVAQAVAHQAgAPAdgDIAGgBIA4gGIgDAgQgEAkAAAbIABARQACApgNAmIgDAGQgMAagiAZIgWAPQgKAGgMAEQgUAIgWAAQgMAAgMgDg");
	this.shape_18.setTransform(-0.5,-0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0057A8").ss(1,1,1).p("ABlhqQA3gGAGgCQgCARgBAQQgEAvADAhQADApgNAmQgOAmg4AjQg4AjhIgdQhKgegZg7QgRgpAHgbQAHgbALgPQAWgiAUgcQAng4APgJIABAAIApAdQA4ApAwgHg");
	this.shape_19.setTransform(0,0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgyCdQhKgegZg7QgRgpAHgbQAHgbALgPQAWgiAUgcQAng4APgJIABAAIApAdQA4ApAwgHQA3gGAGgCIgDAhQgEAvADAhQADApgNAmQgOAmg4AjQgeATgjAAQgdAAgigNg");
	this.shape_20.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.7,-43.9,49.8,31.3);


(lib.body1copy7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0057A8").ss(1,1,1).p("ACohZQAaAegZA7QgZA7hMApQhJAqhHgBQhHgBgYgsQgYgrAig7QAhg9BHgrQBFgqBBARQBBARAaAdg");
	this.shape_21.setTransform(1,-32.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0057A8").ss(1,1,1).p("Ah1hBQATgNASgNQAggXAagSQAWgNARgIQBXAXAfAbQAhAbgLA0QgBAQgHANQgSAsgrAlQgnAigrATQgUAKgWAFQhHgEgegmQgfgmAOg5QAJgqAcgog");
	this.shape_22.setTransform(3.7,-33.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0057A8").ss(1,1,1).p("AiOgrQAVgOATgQQAigbAVgbQASgTAMgTQBVAYAjAYQApAaACAqQAEAPgCAPQgHAwggAqQgcAqgnAdQgTAOgVAKQhCgFglghQgoghgDg0QgIgqAKgsg");
	this.shape_23.setTransform(6.2,-35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0057A8").ss(1,1,1).p("AidgVQAZgPATgSQAigeASglQANgbAGgdQBUAYAnAWQAxAZAPAgQALAPACAPQADA1gUAxQgSAwgjAnQgRASgTAPQhAgGgrgbQgvgdgXgvQgXgpgJgxg");
	this.shape_24.setTransform(7.6,-36.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0057A8").ss(1,1,1).p("ABkC+QASgUAOgWQA9higch4Qgcg9jPg7QACAogKAhQgUBJhLAsQBRCoDAAWg");
	this.shape_25.setTransform(9.3,-37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).wait(1));

	// Layer 1
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkCNQhHgBgXgsQgYgrAhg7QAig9BHgrQA4gjA2AFQA6BUgNCKQgOAKgQAIQhKAphDAAIgEAAg");
	this.shape_26.setTransform(-3,-32.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AEB8DE").s().p("Ag+huQALABAMADQA/ARAaAeQAaAdgZA6QgTAvgyAkQAOiKg6hTg");
	this.shape_27.setTransform(12.8,-35.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhmBnQgfgnAQg4QAKgsAhgrIAZgRQA3glAtgKQBCBQAGB+QgIALgKALQgYAZgYARQgXALgYAGQhTgEgdglg");
	this.shape_28.setTransform(0.1,-32.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AEB8DE").s().p("AALBsQgLiChLhUQAKgEAJgCIAQgFQA1ASAeAYQApAegLAxIgBAIQgLA7gvAvIgDgKg");
	this.shape_29.setTransform(12.8,-36.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhGBtQglghgCgyQgGgrANgwIAZgRQA3gmAigaQBLBMAZBzIgGAYQgJAdgKAYQgUAOgWALQhQgGgjggg");
	this.shape_30.setTransform(2.7,-33.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AEB8DE").s().p("AhahjIAQgRQAGgHAEgIQA/ATAkAYQA4AggBAvIAAAJQgBBEgrA6IgJAGQggiNhfhag");
	this.shape_31.setTransform(13,-37.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdBzQgrgcgVgsQgXgrgHgyIAagSQA1gnAbgrQBSBJArBoQAEANADAOQAGAgADAfQgRASgTAQQhPgJgmgbg");
	this.shape_32.setTransform(4.5,-33.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AEB8DE").s().p("AhrhiQAHgNAFgOIAFgZQBGAVArAWQBKAkAHAqIACAKQAIBQgnBFQgGAKgIAKQgziWh1hig");
	this.shape_33.setTransform(13.5,-38.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AEB8DE").s().p("Ah9hfQAJgigCgnQDPA7AdA8QAbB4g9BiQhHihiKhng");
	this.shape_34.setTransform(14,-40);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiYgkQBLgsAVhJQCKBpBHCgQgOAVgRAVQjBgWhRiog");
	this.shape_35.setTransform(7.2,-34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26}]}).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-47.3,38.5,30.4);


(lib.body1copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ACohZQAaAegZA7QgZA7hMApQhJAqhHgBQhHgBgYgsQgYgrAig7QAhg9BHgrQBFgqBBARQBBARAaAdg");
	this.shape.setTransform(1,-32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AirB1QgGgOABgUQAAgXAJgbQAFgOAKgSQAQgZAXgdQAcgmAYgiQApgVAhgNQAjgNAbgEQArAQAbAeQAKALAHAKQARAZgCAeQgBAUgHAYQgDAKgFALQgJAYgQAUQgRAZgcAXQgHAFgHAGQgVAQgXAMQgWAOgOAFQgbAMgcADQgIABgIAAQgPgBgNgDQgWgGgPgKQgLgJgIgJQgIgKgFgMg");
	this.shape_1.setTransform(0.9,-28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AiqCMQgFgPADgXQACgbALgbQAFgOANgWQAQgaAZgjQAcgtAHgsQAqgUAlgUQAlgUAWgQQAnASAcArQAJAOAHAMQARAfABAdQABAVgFAcQgCAMgEAMQgHAcgOAXQgOAegcAcQgHAHgHAHQgWAUgXARQgbAVgMAEQgaASgfAEQgJACgJAAQgPgBgPgFQgZgIgNgOQgMgMgIgLQgHgKgDgOg");
	this.shape_2.setTransform(0.8,-24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AiqCjQgDgQAFgbQAFgcAMgdQAGgOAOgaQAQgbAbgpQAcg0gJg1QArgTAogcQAngbATgcQAiAUAdA4QAJARAHAOQARAmACAbQADAXgCAfQgBAOgDANQgFAhgMAZQgLAkgcAhQgIAJgHAIQgWAYgYAVQgeAbgJAFQgbAWgiAHQgKACgJAAQgRgBgQgHQgcgLgMgQQgMgPgHgMQgHgNgCgPg");
	this.shape_3.setTransform(0.6,-21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("ACnhaQAHAkgEA2QgDAkgKAcQgJApgcAnQgcAmgiAiQghAigGAFQgcAcglAIQgbAHgegOQgdgNgMgTQgMgTgHgOQgGgOgBgRQgBgQAHgfQAIgfAMgdQANgeA4hZQAehCghhDQAwgGAsgkQAsgkAOgrQAcAbAeBFQAeBGAHAkg");
	this.shape_4.setTransform(0.5,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AEB8DE").s().p("Ag+huQALABAMADQA/ARAaAeQAaAdgZA6QgTAvgyAkQAOiKg6hTg");
	this.shape_5.setTransform(12.8,-35.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AEB8DE").s().p("Ag6CXQAQgcAIg4IAHgRQAFgTADgXQACgWgCgYIAAgBQgEg/gdgrIADgEIgDgDIgCgBIgBgDIAIAEQALAGAIAHIAJAIQANAMANAKQALAJAEAGQAXAbAIAbQAGAMAAAOQABAKgBAHIgEAOIgDALIgGANIgGAPIgFAKIgBADIgGAIIgJANIgQAWQgLAPgVAQQgMAIgNAGIgEgGg");
	this.shape_6.setTransform(12.4,-30.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AEB8DE").s().p("AhPDGQAfgYAQhTQAFgDALgRQALgYAFgeQAIgfABggIgBAAQABhZgkg5IAJgBIgEgDIgCgBIAAgEIAIAHQAMAKAHAMIAJAOQAKATASAQQAQAOgCAIQAVArAEAkQACASgCAPQAAAMgDAKIgGAPIgGANIgIAOQgFAIgEAJQgCAGgDAFIgDAEIgHAKIgMAOIgUAZQgKAPgcATQgPAIgPAEIgLgEg");
	this.shape_7.setTransform(9.7,-26.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AEB8DE").s().p("AhmD0QAugUAZhtQAHAAAQgXQAQgcAMgnQAMgmAEgpIgBABQAHhyguhHIANACQgDgEgCgBIgDgBIAAgFIAKAKQAOAPAJAQQAFAKADAKQAIAaAVAVQATAUgFAMQATA6gCAvQAAATgFAVQgCAOgEALIgJARIgHANIgMAPQgGAJgEAKIgHAOIgDAEIgKAKIgOAQIgWAcQgNAPgiAWQgRAJgSADIgRgEg");
	this.shape_8.setTransform(7.2,-22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AEB8DE").s().p("Ah9EkQA7gQAiiJQAKACAWgcQAVggARgwQASgtAGgyIgCABQANiLg5hUQALABAKADQgDgFgEgBIgCAAIAAgGIALANQAaAfAGAiQAGAiAYAaQAYAagKAOQAYBsgZBHQgDAQgGAMIgLASIgKAOIgOARQgIAKgFALQgFALgHAJQgIAKgDABQgDACgPAQIgZAfQgNAPgoAZQgXAKgZAAIgPgBg");
	this.shape_9.setTransform(4.9,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkCNQhHgBgXgsQgYgrAhg7QAig9BHgrQA4gjA2AFQA6BUgNCKQgOAKgQAIQhKAphDAAIgEAAg");
	this.shape_10.setTransform(-3,-32.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhoCcQgUgRgIgUIAAgCQgFgRgBgSQABglATghIAGgMQAOgXASgXIAigxQAQgQASgPIAMgKQAVgOAUgEQASgEALgKQAKgJALAAIADAAIAEABQAHAKAFAPQApBcgSBzIgDATQgNAOgQALIgHAGQgPAMgMAEQg0Azg1AFIgGAAQglgFgXgRg");
	this.shape_11.setTransform(-2.9,-28.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhuC4QgVgXgEgXIAAgBQgCgUABgUQAFgsAUggIAIgNQAPgaATgaQATgfAJgdIAhgmIALgOQAZgRAVgDQATgDAJgTQAGgQALAAIACAAIAFACQAHAKAFATQApBugcB5IgGAUQgMASgPAOIgHAHQgSASgLACQgtBLg0AMIgIABQgogJgWgWg");
	this.shape_12.setTransform(-2.7,-24.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhzDUQgWgdAAgYIAAgBQABgXACgWQAJg0AWgeIAJgPIAlg6QATgkACgjIAhguIAKgQQAdgVAWgCQAVgCAFgbQAEgYAKAAIACAAQADAAADADQAHAJADAXQApCBgmB+IgIAWQgMAWgOARIgHAJQgTAXgLAAQgmBlg0ARIgIACQgsgMgVgcg");
	this.shape_13.setTransform(-2.6,-21.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah4DwQgWgjAEgaIAHgyQANg8AYgcIAxhRQAVgpgGgpIArhIQAfgZAYAAQAXgBABgkQABgfAJgBIADAAQALADAFAlQApCTgxCEQgRAvgYAgQgWAdgKgCQghCIg6AQQgvgPgWgig");
	this.shape_14.setTransform(-2.6,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-47.3,38.5,30.4);


(lib.body1copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ACohZQAaAegZA7QgZA7hMApQhJAqhHgBQhHgBgYgsQgYgrAig7QAhg9BHgrQBFgqBBARQBBARAaAdg");
	this.shape.setTransform(1,-32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkCNQhHgBgXgsQgYgrAhg7QAig9BHgrQA4gjA2AFQA6BUgNCKQgOAKgQAIQhKAphDAAIgEAAg");
	this.shape_1.setTransform(-3,-32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("Ag+huQALABAMADQA/ARAaAeQAaAdgZA6QgTAvgyAkQAOiKg6hTg");
	this.shape_2.setTransform(12.8,-35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-47.3,38.5,30.4);


(lib.body1copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ACohTQAGAdgEA2QgDAkgKAcQgJApgcAnQgcAmgiAiQghAigGAFQgcAcglAIQgbAHgegOQgegNgLgTQgMgTgHgOQgGgOgBgRQgBgQAHgfQAIgfAMgdQANgeA4hZQAehCghhDQAwgGAsgkQAsgkAOgrQAaATAgBKQAcBBAKAzg");
	this.shape.setTransform(0.5,-17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AiqCjQgDgQAFgbQAFgcAMgdQAGgOAOgaQAQgbAbgpQAcg0gJg1QArgTAogcQAngbATgcQAgAOAeA7QAKASAHARQAQAkAEAjQACATgCAcQgBANgDAOQgFAhgMAZQgLAkgcAhQgIAJgHAIQgWAYgYAVQgeAbgJAFQgbAWgiAHQgKACgJAAQgRgBgQgHQgcgLgMgQQgMgPgHgMQgHgNgCgPg");
	this.shape_1.setTransform(0.6,-21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AiqCMQgFgPADgXQACgbALgbQAFgOANgWQAQgaAZgjQAcgtAHgsQAqgUAlgUQAlgUAWgQQAlANAcAuQALAOAIAPQAQAeABAjQAAASgEAZQgCAMgEAMQgHAcgOAXQgOAegcAcQgHAHgHAHQgWAUgXARQgbAVgMAEQgaASgfAEQgJACgJAAQgPgBgPgFQgZgIgNgOQgMgMgIgLQgHgKgDgOg");
	this.shape_2.setTransform(0.8,-24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AirB1QgGgOABgUQAAgXAJgbQAFgOAKgSQAQgZAXgdQAcgmAYgiQApgVAhgNQAjgNAbgEQApANAbAfQALALAIAMQASAagEAjQgBARgGAVQgDAKgFALQgJAYgQAUQgRAZgcAXQgHAFgHAGQgVAQgXAMQgWAOgOAFQgbAMgcADQgIABgIAAQgPgBgNgDQgWgGgPgKQgLgJgIgJQgIgKgFgMg");
	this.shape_3.setTransform(0.9,-28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("ACohZQAaAegZA7QgZA7hMApQhJAqhHgBQhHgBgYgsQgYgrAig7QAhg9BHgrQBFgqBBARQBBARAaAdg");
	this.shape_4.setTransform(1,-32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah4DwQgWgjAEgaIAHgyQANg8AYgcIAxhRQAVgpgGgpIArhIQAfgZAYAAQAXgBABgkQABgfAJgBIADAAQALADAFAlQApCTgxCEQgRAvgYAgQgWAdgKgCQghCIg6AQQgvgPgWgig");
	this.shape_5.setTransform(-2.6,-17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AEB8DE").s().p("Ah9EkQA7gQAiiJQAKACAWgcQAVggARgwQAyiDgqiTQgEgmgMgDIgCAAIAAgGQA7A9AbBwQAZBvgZBJQgDAQgGAMIgLASIgKAOIgOARQgIAKgFALQgFALgHAJQgIAKgDABQgDACgPAQIgZAfQgNAPgoAZQgXAKgZAAIgPgBg");
	this.shape_6.setTransform(4.9,-17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AEB8DE").s().p("AhIDoIgMgDQANgGALgMQAZgcAOg/IACgHIACgKQAGABALgSQAKgVAIgaQAihwglh5QgEgegKgEIgBAAIAAgEIAEAFQADACADAGQAsA3AUBZQAVBegUBIQgBALgDAHIgGANIgHAJIgIALQgGAHgCAHQgDAIgFAGIgHAHQgCAAgKALIgQATQgFAFgMAIIgTAJQgLAEgLAAIgNgBg");
	this.shape_7.setTransform(7.4,-23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggDyQgfgGgVgQQgXgTgJgRIgDgHQgHgVgEgWQgBgLABgLQAEgrAVgeIAFgKQAKgSAMgPIAXgkQAUgiARg5IAbgnQAcgUAWgBQAUgCAFgaQADgZAKAAIACAAQAJAEAFAeQAlB5gjBwQgIAagKAVQgNASgFgBIgCAKIgCAHQgPA/gZAcQgLAMgMAGIAMADQgPAVgQAIQgNgBgMgCg");
	this.shape_8.setTransform(-2.3,-21.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AEB8DE").s().p("AgqCkQAegWAJhGIABgGQACgCAIgQQAHgUADgbQAJhAgehEIgJgTIgCgFQAhAyAPBKQARBOgQBDQACAHAAADIgCAHIgCAEIgEAGQgCACgBAFQAAADgDADIgDADQAAgBgGAFIgJAIIgHAEIgLACQgNgCgQgJgAgaisQAHACAFAPIgMgRgAgaisIgBAAIgBAAIABgBIABABg");
	this.shape_9.setTransform(10,-29);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrDGQgcgJgSgMIgFgFQgTgOgKgWQgEgKgCgMQgFgpAWgnIAGgKQALgTANgQIAXgfQATgdAXgtIAbgfQAZgQAUgDQATgCAHgSQAGgQAKAAIABAAQAIAFAEAWQAhBfgUBdQgHAfgLAZQgLASgFACQgQBUggAZQgNADgNABIgRABQgWAAgTgFg");
	this.shape_10.setTransform(-2.6,-26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AEB8DE").s().p("AAZCAIgHgBQADgSABgSIAJARQACADAAAEQADACgBADIAAADQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCAAIgBABIgCAAIgBAAIgBAAgAAWBbIgCgEIADgFIgBAJIAAAAgAARAAQgOhHgggxIgFgHIABAAQAHABAGALIAJALQAhAnAHAoQAFAQAAAMIgBANIAAADQACAogMAXQACgqgIgog");
	this.shape_11.setTransform(10.4,-33.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag8CjIgJgDQgegJgQgUQgIgKgFgMQgNgpAYguIAFgLQAMgSAQgTIAVgaIAxg6QAOgMANgLQAVgMASgDQARgCAKgJQAIgJAKABIABAAIAFAGQADAGACAIQAeBFgGBLQgCAWgFAUIgIASQgHA5gSAdIgcAMQgkALgdACIgFAAQgdAAgZgFg");
	this.shape_12.setTransform(-3,-29.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkCNQhHgBgXgsQgYgrAhg7QAig9BHgrQA4gjA2AFQA6BUgNCKQgOAKgQAIQhKAphDAAIgEAAg");
	this.shape_13.setTransform(-3,-32.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AEB8DE").s().p("Ag+huQALABAMADQA/ARAaAeQAaAdgZA6QgTAvgyAkQAOiKg6hTg");
	this.shape_14.setTransform(12.8,-35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-48,36.3,60.8);


(lib.body1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ACohTQAGAdgEA2QgDAkgKAcQgJApgcAnQgcAmgiAiQghAigGAFQgcAcglAIQgbAHgegOQgegNgLgTQgMgTgHgOQgGgOgBgRQgBgQAHgfQAIgfAMgdQANgeA4hZQAehCghhDQAwgGAsgkQAsgkAOgrQAaATAgBKQAcBBAKAzg");
	this.shape.setTransform(0.5,-17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah4DwQgWgjAEgaIAHgyQANg8AYgcIAxhRQAVgpgGgpIArhIQAfgZAYAAQAXgBABgkQABgfAJgBIADAAQALADAFAlQApCTgxCEQgRAvgYAgQgWAdgKgCQghCIg6AQQgvgPgWgig");
	this.shape_1.setTransform(-2.6,-17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("Ah9EkQA7gQAiiJQAKACAWgcQAVggARgwQAyiDgqiTQgEgmgMgDIgCAAIAAgGQA7A9AbBwQAZBvgZBJQgDAQgGAMIgLASIgKAOIgOARQgIAKgFALQgFALgHAJQgIAKgDABQgDACgPAQIgZAfQgNAPgoAZQgXAKgZAAIgPgBg");
	this.shape_2.setTransform(4.9,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-48,36.3,60.8);


(lib.body1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABlhqQA3gGAGgCQgCARgBAQQgEAvADAhQADApgNAmQgOAmg4AjQg4AjhIgdQhKgegZg7QgRgpAHgbQAHgbALgPQAWgiAUgcQAng4APgJIABAAIApAdQA4ApAwgHg");
	this.shape.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2BUQgSgpAIgcQAHgaALgPQAVghAUgdQAng4AQgJIAAAAIAoAdQA5ApAwgHQgvBMgngJQgiCGg5ArQg2gagSgsg");
	this.shape_1.setTransform(-3,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("Ah2BxQA6grAiiGQAlAIAwhLQA3gGAGgCIgEAhQgDAvACAhQAEApgQAmQgOAggMAPIgEAEQg3AkgyAAQgtAAgpgbg");
	this.shape_2.setTransform(4.3,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-17.7,34.5,36.2);


(lib.body1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABlhqQA3gGAGgCQgCARgBAQQgEAvADAhQADApgNAmQgOAmg4AjQg4AjhIgdQhKgegZg7QgRgpAHgbQAHgbALgPQAWgiAUgcQAng4APgJIABAAIApAdQA4ApAwgHg");
	this.shape.setTransform(0,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AieAOQADgRAHgPQAQgdAKgPQALgQALgRQAVgfAPgTQAMgPAHgFQAUAJARAJQAIAFAHAEQAlASAigDQAJgBAIgCQAngHANgGQAHAQABARQgBAUABASQABAYADAVQADAXgDAXQgCASgFASQgEAMgIANQgMAUgWATQgIAIgLAIQgQAMgSAGQggAMgjgFQgMgBgMgEQgKgBgHgEQgcgIgVgPQgSgNgNgSQgFgIgEgIQgGgKgDgJQgFgPgBgMQgCgNADgLg");
	this.shape_1.setTransform(-0.1,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AifAeQADgTAHgPQAPgeAKgQQAKgQANgTQAUgeARgXQALgOAGgHQASAEAOADQAHADAHABQAkAPAkgHQAIgCAIgCQAmgLAOgJQAIARACASQACATACATQACAaADAVQAEAagBAWQgBASgFATQgEANgGAOQgLAWgVAUQgHAJgKAJQgQANgSAJQggAPgiAAQgMAAgMgCQgKABgHgDQgcgEgXgMQgTgKgPgSQgGgHgFgIQgHgKgDgKQgGgPgCgMQgCgNACgMg");
	this.shape_2.setTransform(-0.1,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AihA4QADgSAHgTQAOgdAKgRQAKgQANgVQAUgeASgaQALgPAFgIQARgCALgBQAFAAAEgCQAmAMAlgLQAJgCAIgEQAlgMANgNQAKARAEATQADAUADAUQAEAaAEAWQAFAbAAAYQgBAQgEAVQgDANgGAPQgKAYgTAVQgHAKgJAKQgPAPgSALQgfASgkAFQgLACgLAAQgKACgHgCQgcABgZgJQgUgIgRgRQgHgHgGgIQgHgKgEgKQgHgPgCgNQgDgNABgNg");
	this.shape_3.setTransform(0,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AiiBRQACgSAIgVQANghAKgPQAJgQAOgXQAUgeATgdQAKgPAGgKQAPgHAHgHQAEgCACgEQAoAJAmgPQAJgEAIgEQAkgPAMgRQANATAFATQAEAUAFAVQAFAbAFAXQAGAbAAAZQABAQgEAXQgCANgGAQQgIAagSAWQgGAMgJALQgOAQgSANQgfAWgjAJQgNAEgIABQgMAFgGgBQgcAFgbgHQgVgFgUgQQgHgHgGgIQgJgJgFgLQgHgQgDgNQgEgNABgNg");
	this.shape_4.setTransform(0,-7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("AijBoQABgSAHgXQAOgiAJgSQAJgOAPgZQASgeAVgfQAKgQAFgLQAOgNADgNQADgFAAgFQApAGAogUQAJgEAIgFQAigSAMgUQAPATAHAVQAFATAGAWQAHAcAGAYQAHAcABAaQABASgDAVQgCAPgEAPQgHAdgQAYQgGAMgJAMQgNASgSAPQgeAZgjAOQgNAGgJADQgLAGgFAAQgdAJgdgDQgXgDgVgQQgJgGgGgHQgKgKgFgKQgIgRgEgNQgEgOABgNg");
	this.shape_5.setTransform(0.1,-9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AilB+QABgSAIgZQAMgjAKgTQAIgQAQgZQASgdAWgjQAJgQAFgNQAMgRAAgTQABgHgBgIQAsADAngYQAJgFAIgFQAhgWAMgXQARAUAIAVQAHAUAHAXQAJAcAGAZQAIAdACAaQACASgCAYQgCAOgDARQgGAfgPAZQgFANgIANQgNATgRARQgeAdgjATQgMAIgKAEQgLAIgFABQgdAOgfgBQgXAAgYgPQgJgHgHgHQgLgJgGgLQgJgRgEgNQgFgOAAgOg");
	this.shape_6.setTransform(0.2,-11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AinCTQAAgSAIgaQAMglAJgUQAIgQAQgcQASgcAYglQAJgRAEgOQALgXgEgYQAAgKgEgKQAtAAApgcQAJgGAIgGQAhgYALgbQASAUALAXQAHAUAJAYQAKAdAIAZQAIAeAEAbQACASgBAbQgBANgEARQgEAigNAZQgFAPgIAOQgLAVgRATQgeAggiAYQgNAJgJAGQgNAKgFABQgbATghADQgZABgZgOQgLgGgHgHQgMgJgGgLQgLgSgEgOQgGgNAAgPg");
	this.shape_7.setTransform(0.3,-13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AioCoQAAgSAHgcQALgmAKgVQAHgPARgfQARgbAagpQAIgQAEgQQAJgdgHgdQgCgMgGgNQAvgDAqggQAJgGAIgIQAggaALgfQAUAVAMAYQAJATAKAaQAMAdAIAbQAJAfAFAbQADASgBAcQAAAQgDAQQgDAjgMAbQgEAQgHAPQgLAWgRAVQgdAjgiAeQgNALgJAHQgNAMgEACQgcAXgjAGQgaAEgbgOQgLgGgJgGQgMgKgHgLQgLgSgGgOQgFgNgBgQg");
	this.shape_8.setTransform(0.4,-15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("ACohTQAGAdgEA2QgDAkgKAcQgJApgcAnQgcAmgiAiQghAigGAFQgcAcglAIQgbAHgegOQgegNgLgTQgMgTgHgOQgGgOgBgRQgBgQAHgfQAIgfAMgdQANgeA4hZQAehCghhDQAwgGAsgkQAsgkAOgrQAaATAgBKQAcBBAKAzg");
	this.shape_9.setTransform(0.5,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah2BUQgSgpAIgcQAHgaALgPQAVghAUgdQAng4AQgJIAAAAIAoAdQA5ApAwgHQgvBMgngJQgiCGg5ArQg2gagSgsg");
	this.shape_10.setTransform(-3,-1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AEB8DE").s().p("Ah2BxQA6grAiiGQAlAIAwhLQA3gGAGgCIgEAhQgDAvACAhQAEApgQAmQgOAggMAPIgEAEQg3AkgyAAQgtAAgpgbg");
	this.shape_11.setTransform(4.3,2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhhB7QgKgKgHgMQgIgPgEgOQgHgYAFgTQAEgSAFgMQAEgIAEgGQANgYAOgTIAQgYIAUgdQAXggAKgLIAoASIADABIAkAPQARAHANgBQAKgCALABIACAAIAOABIgGAMQgkBCghACIgHAeIgBADQgHAWgJAVIgMAYQgHAUgJAQQgEAKgHAHQgOAWgQAOQgmgIgWgYg");
	this.shape_12.setTransform(-3.1,-2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AEB8DE").s().p("AhRCVQgSgEgSgKQAdgTAWgsQAJgQAHgUIAMgYQAJgTAHgYIABgDIACgHQAngOAphNQAdgJANgGQAIgDACgBIgDAJIAAATQABAvAFAmIACAWQAAAggKAeQgMAfgLARIgGAJIgFAFIgLAIIgJAFIgNAHIgQAIIgPAHIgJACIgOAFQgOACgNABQgTgBgWgDg");
	this.shape_13.setTransform(4.1,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhaCLQgMgKgHgMQgJgPgGgPQgJgZAFgTQAEgTAFgPQADgJAFgGQANgZAPgUIAQgZIAVggQAXghAHgOIABAAIAoAHIACABQAVAEASAGQARAFAMgFQAJgFALAAIACAAQAHAAAHAEIgGAMQgcBFgdALQgEAWgGATQgGAUgHATQgMAhgQAZIgFAIQgHAKgFAGQgNAYgPAQIgIAAQgfAAgXgRg");
	this.shape_14.setTransform(-3.1,-4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AEB8DE").s().p("Ah1CaQAhgUAZg3IAGgIQAPgZAMghQAHgRAGgWIACgFQAmgaAjhPQAZgMAKgMIAGgEIgCAEIACASQAGAvAHArIACAXQACAigJAhQgKAhgLAUIgGAJIgGAGQgFAFgGAEIgIAGIgOAJIgPAJIgOAIIgKAEQgGACgIAEQgOAEgNADQgSABgYAAQgUgCgUgJg");
	this.shape_15.setTransform(4.1,-1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhTCeQgNgJgIgNQgMgOgGgPQgKgbAEgUQAEgUAFgRQADgJAEgIQANgaAPgUIASgbIAWghQAWgjAGgRIAAgBIAogDIADAAQAWAAATAFQASAEAKgJQAIgJALAAIACAAQAHAAAGAGIgDAOQgWBGgaAWQgEAYgGAWIAAAAQgLAhgNAaQgLASgGAHIgKAcQgHAIgFAEQgLAagPASQgQAFgOAAQgSAAgPgIg");
	this.shape_16.setTransform(-3.2,-5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AEB8DE").s().p("Ah2CtIAAAAQAlgTAbhBIAKgbQAGgHALgSQANgbALggIAAgBQAlgkAdhRQAVgQAGgQIACgCIAAgEQACgEACABQAAACgEAFIADANIAUBeIADAZQAEAngIAgQgJAjgLAXIgGALIgFAGIgLAKIgJAIIgOAKIgPALIgOAJQgFAEgEABQgHACgIAGQgOAGgNAEQgRAEgbADQgVAAgWgJg");
	this.shape_17.setTransform(4.2,-4.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhMC2QgOgJgKgMQgNgOgHgQQgMgcAEgWIAJgmQADgKAEgIQANgdAPgUIASgdIAXgjQAWgkAEgVIABgBIAngOIADgBQAYgEATAEQATAEAJgOQAHgNAKAAIACAAQAIABAGAHIgDAPQgOBJgWAfQgFAegHAbIgBAAQgMAkgPAcQgMAUgIAFIgIAYQgFAGgFADQgMAcgMAUQgYAPgVAAQgKAAgKgDg");
	this.shape_18.setTransform(-3.3,-7.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AEB8DE").s().p("Ah2DAIgBAAQApgTAchKIAIgZQAIgFAMgUQAPgcAKgiIAAgBQAmgvAWhTQARgVADgUIACgCIgDgKQADgCADACQAAAEgDAGIADAHQAPAvALA0IAEAZQAFAqgHAiQgHAlgLAZIgGANIgFAGIgLAMIgJAJIgOALIgOAMQgGAHgIAFQgGAFgEABQgGABgJAIQgNAIgOAGQgQAFgdAHIgKABQgSAAgSgHg");
	this.shape_19.setTransform(4.2,-6.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AEB8DE").s().p("Ah3DUIgBAAQAsgTAehVIAHgVQAHgEAOgWQARgcALglIABgBQAlg6AQhUQAMgZAAgZIACgFIABADQAUAwANA4IAFAaQAHAtgFAkQgGAngMAcIgFANIgFAHIgLANIgJAKIgOAMQgIAHgGAIIgOANIgKAHQgFACgMAJIgZARQgQAHgfALQgJABgKAAQgPAAgPgEgABIjXQAEgCADAGQABAEgCAFIgGgNg");
	this.shape_20.setTransform(4.3,-8.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhFDMQgPgJgLgLQgOgOgIgRQgPgdAEgWIAJgpIAHgUQAMghARgSIATgfIAXglQAWgkACgaIAAAAIAogZIADgCQAZgIAVADQATADAHgSQAGgRAKAAIADAAQAHABAFAKIgBAQQgGBLgTApQgFAjgKAgIgBABQgNAmgRAdQgOAVgHAEIgHAWQgEAEgEABQgMAegMAVQgcAcgcAAIgKgBg");
	this.shape_21.setTransform(-3.4,-9.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AEB8DE").s().p("Ah4DnIgBAAQAwgSAfhhIAFgRQAIgCAQgYQARgdAOgpIAAgBQAkhDAKhWQAIgegDgdIABgKIABACQAYAvAQA9IAGAcQAIAvgEAmQgEApgNAeIgEAPIgFAIIgLAOIgKALIgNANQgJAIgFAIQgGAJgHAHIgLAIQgFABgMALIgZAVQgPAJghAOQgOADgOAAQgMAAgNgDgAA+jpQAFgBADAHIAAAHIgIgNg");
	this.shape_22.setTransform(4.4,-10.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag9DiQgRgJgMgLQgQgOgJgRQgQgeAEgYIAIgrIAHgUQAMgkARgVIAUgeIAYgnQAVglABgeIAAAAIAogkIADgCQAagNAWADQAUABAGgWQAEgVAKAAIADAAQAHACAFALIAAARQACBOgQAyQgGAqgMAlIAAABQgOApgTAdQgQAYgIACIgFARIgGADQgLAggOAXQgdAqgiAAIgCAAg");
	this.shape_23.setTransform(-3.5,-11.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AEB8DE").s().p("Ah5D7IgBAAQA0gSAfhtIADgMQAKgBARgZQATgeAOgsIADgGQAihLADhWQAEgigHghQACgKgBgHIABACQAdAwARBBIAGAdQAKAygCAqQgDApgMAgIgFAQIgEAJIgMAQIgJAMIgOAOQgIAIgGAKQgFAJgHAIQgIAHgDACQgEABgNANIgZAYQgPALgkASQgQAFgRAAQgLAAgLgCgAAzj8QAGABAEAJIABADIgLgNg");
	this.shape_24.setTransform(4.6,-13);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhYDkQgSgNgKgSQgSggAEgZIAIgtQADgMADgJQANgmARgVIAVggIAZgqQAVgmgBghIAAgBIAnguIADgDQAdgRAWACQAVABAEgbQADgZAKAAIADAAQAHACAFANIACATQAIBQgNA8QgEAsgNApIgDAGQgPArgUAeQgSAZgJABIgDAMIgEABQgLAjgNAZQgdA1gmADQgSgIgNgLg");
	this.shape_25.setTransform(-3.3,-13.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AEB8DE").s().p("Ah7EKIgBAAQA4gRAhh7IACgGQAJABAUgbQAUgfAQguIAEgNQAehSgChVQgBgmgJgmQAAgNgCgJIgCgFIAEAGQAiAvATBGIAIAeQALA1gBAsQgBArgNAjIgEARIgFAJIgLARIgKAOIgOAPQgIAJgFAKQgFALgHAIIgLAKQgEACgOAOIgZAcQgOANglAVQgUAHgVAAQgJAAgKgBg");
	this.shape_26.setTransform(4.7,-14.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhXD6QgTgNgLgTQgUghAEgZIAHgwIAGgXQANgoASgVIAVgiIAagsQAVgngEgkIABgBIAng5IADgEQAegVAXABQAWAAACggQADgcAJAAIADAAQAIACAEAQIADATQAQBSgKBGQgEAvgOArIgFANQgQAtgWAfQgTAbgKAAIgBAGIgDAAQgKAlgMAbQgcA/gpAHQgTgHgOgLg");
	this.shape_27.setTransform(-3,-15.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ah4DwQgWgjAEgaIAHgyQANg8AYgcIAxhRQAVgpgGgpIArhIQAfgZAYAAQAXgBABgkQABgfAJgBIADAAQALADAFAlQApCTgxCEQgRAvgYAgQgWAdgKgCQghCIg6AQQgvgPgWgig");
	this.shape_28.setTransform(-2.6,-17.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AEB8DE").s().p("Ah9EkQA7gQAiiJQAKACAWgcQAVggARgwQAyiDgqiTQgEgmgMgDIgCAAIAAgGQA7A9AbBwQAZBvgZBJQgDAQgGAMIgLASIgKAOIgOARQgIAKgFALQgFALgHAJQgIAKgDABQgDACgPAQIgZAfQgNAPgoAZQgXAKgZAAIgPgBg");
	this.shape_29.setTransform(4.9,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-17.7,34.5,36.2);


(lib.Tween108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,0,0.267,0.842,-45,0,0,-0.1,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAMAQQgIgDgJgLQgBgEAGABQgDgDgIgL");
	this.shape.setTransform(3.8,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-5,11.1,10.7);


(lib.Tween107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAAAZQgOgKgCgRQAPgFARAHQgHgHAIgQ");
	this.shape.setTransform(2.1,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-7.4,12.6,15.8);


(lib.Tween48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAHgKIADAJIAAABIABAFIgFACAgEAKIgFAB");
	this.shape.setTransform(7.1,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F1F9").s().p("AgXAKIAXgCIACAAIAFgBIAEAAIAEgBQgMAIgaABgAAXgEIgDgIIAAgCQAFAFgBAFIgBACg");
	this.shape_1.setTransform(5.8,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0057A8").s().p("AAAANIAAgDIAAgKIAAgCIgCgHIAAgBIACABIAAAAIACAHIACAJIAAAFIAAABIgEAAgAgTANIADgIIACgGIAAgEIgBgBIAAgBIABAAIABAAIABAGIAAADIgCAJIgBACgAAQAIIAAgMIgDgHIgBAAIABgBIABABIABABIACADIADAHIAAABIAAAGIgFADg");
	this.shape_2.setTransform(6.1,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-4.2,18,8.3);


(lib.Tween47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAHgKIADAJIAAABIABAFIgFACAgEAKIgFAB");
	this.shape.setTransform(7.1,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F1F9").s().p("AgXAKIAXgCIACAAIAFgBIAEAAIAEgBQgMAIgaABgAAXgEIgDgIIAAgCQAFAFgBAFIgBACg");
	this.shape_1.setTransform(5.8,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0057A8").s().p("AAAANIAAgDIAAgKIAAgCIgCgHIAAgBIACABIAAAAIACAHIACAJIAAAFIAAABIgEAAgAgTANIADgIIACgGIAAgEIgBgBIAAgBIABAAIABAAIABAGIAAADIgCAJIgBACgAAQAIIAAgMIgDgHIgBAAIABgBIABABIABABIACADIADAHIAAABIAAAGIgFADg");
	this.shape_2.setTransform(6.1,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-4.2,18,8.3);


(lib.Tween25copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Tween42("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(12,-52.9,0.512,0.778,-105,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABihdQhEA7g9ABQglABgqgXQAKAnARAcQAUAjAvAfQAuAgA1ggQANgIAPgQQhEgBgMgLQgNgLAhgIQAhgJAQgkQAPgngHgRQgHgRgDACg");
	this.shape.setTransform(2.7,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABYQgrgGgbg1QgcgygLgiQAPAKAQAFQAmAMApgJQAogJAfgcQAYgUAFAEQAJASgFAYQgJAwhEAhQgMAGANADIApAKQAPAEAMgBIANgBQgjAmgsAAQgPAAgQgEg");
	this.shape_1.setTransform(2.7,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-56.1,24.2,20.9);


(lib.Tween25copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Tween41("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(4.3,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AgRjDIAOB6IAAArQADAbABA0QADAVAEASQAFAZAIAKQADACAEACQAFACAFADQAJAFAFAGQANANgIAbQAAAAAAADQAAACgXAFQgCAAgCAAQgHACgFAAQgSACgHgEQgMgGgLgHQgSgJgCgUQgEgfgBglQABgsgCgVQgBgCgCgBQAZgUAHg1QAGg1gEghIAKgC");
	this.shape.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5EEF6").s().p("AAbCpQgSgEgJgGQgRgKgDgUQgEgfAAglQAAgrgCgUQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAhg7gDg2IACgwIAKgCIAEAiIAEAtQgMAOgGASQgIAfAMAjIgGArQgBAuAXAVQgLAeARAUIgCAAg");
	this.shape_1.setTransform(-2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVCoIgFABIgQgBIgBAAQgRgDgKgGIgCgBQgSgJgCgUQgEgfgBgmQABgrgCgUQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAig8gDg2IADgvIAKgCIADAhIAJBSIAEBQQADAUAEATQAFAZAIAKIAHADIAKAGQAJAFAFAGQANANgIAaIAAABIgEACIgHABIAAABIgJACIAAgBIgGAAIAAACIACAAIgMABg");
	this.shape_2.setTransform(1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-20.7,14.1,41.3);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Tween41("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(4.3,17.3);

	this.instance_1 = new lib.Tween42("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(12,-52.9,0.512,0.778,-105,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0.1,regY:0.1,scaleX:0.51,scaleY:0.78,rotation:-105,x:12,y:-52.9},9).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AgRjDIAOB6IAAArQADAbABA0QADAVAEASQAFAZAIAKQADACAEACQAFACAFADQAJAFAFAGQANANgIAbQAAAAAAADQAAACgXAFQgCAAgCAAQgHACgFAAQgSACgHgEQgMgGgLgHQgSgJgCgUQgEgfgBglQABgsgCgVQgBgCgCgBQAZgUAHg1QAGg1gEghIAKgC");
	this.shape.setTransform(1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AgeiyQALA5AKA3QACAYABANQAFAYADAtQAEARAFAQQAGAWAHAIQAMAEAFADQAIAEAFAEQAGAIABACQABAFAAAGQABAIgDAMQgBAFgHADQgGADgJADQgCAAgCABQgHADgGABQgDAAgDAAQgOACgFgCQgJgEgFgGQgGgEgDgFQgHgGgBgJQgBgDgBgEQgHgWgEgdQgCgPgCgMQgCgWgDgOQgBgCgCgBQAQgSAHgkQABgHAAgIQAFgygEggQAEgBAEgC");
	this.shape_1.setTransform(1.5,-5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AgrihQAOA0ANAwQAEAVACAMQAHAUAGAlQAEAPAGANQAGASAIAGQAMADAEACQAIAEAFADQAFAGABADQACAEABAGQABAKgEANQgBAGgHADQgFAFgJADQgDABgBABQgIAEgHABQgDABgCAAQgRADgDgBQgFgDAAgEQgEgDgBgFQgHgEgDgHQgBgCgBgDQgKgRgJgaQgDgNgDgMQgGgVgEgOQgBgCgCgBQAMgTAFghQAAgHABgHQADgvgGgfQAEgCADgC");
	this.shape_2.setTransform(2,-10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("Ag5iRQASAwAQApQAFASAEAKQAJARAJAeQAFAMAGAKQAHAPAIAEQALACAEABQAIADAFACQAEAFACACQABAEACAHQACAKgFAOQgBAIgGAEQgGAFgJAFQgCABgCABQgHAEgIACQgDABgDABQgTADAAABQgDgBAFgEQgBgCABgEQgHgCgEgFQgCgBgBgDQgOgLgMgYQgFgLgFgMQgIgUgGgOQgBgCgCgBQAIgSADgfQAAgGAAgIQABgrgGgeQADgCADgD");
	this.shape_3.setTransform(2.5,-15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AhEiBQAVArATAjQAHAPAFAIQAMANALAXQAFAJAHAHQAIAMAIACQAKABAEAAQAHACAFABQAFAEABACQACADACAIQACAKgEAQQgCAJgGAEQgFAHgJAGQgCABgCABQgIAGgJACQgDABgDABQgEABgDAAQgNAEAAACQAAAAAMgCQAAgBABgDQABgBAAgBQgHABgFgDQgCgBAAgBQgSgGgPgVQgHgKgHgMQgKgTgIgOQgBgCgCgBQAEgSABgdQgBgFAAgHQgBgogGgdQACgDACgE");
	this.shape_4.setTransform(2.8,-20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("AhMhxQAYAnAWAcQAJAMAGAGQAOAJANASQAHAEAIAEQAIAIAJABQAJgBADABQAHAAAFAAQAEACABACQADADACAKQADAKgFARQgCAKgFAFQgGAIgIAGQgDACgCACQgIAGgJADQgEABgDABQgBAAgBAAQAAAAgBAAQgNADgEADQgBABAAABIAAABQAEADASgCQACgCAFgCQgJACgFAAQgDgBgDAAQgEgBgEAAIAAAAQgMgDgOgMQgBgBgCgCQgJgJgJgLQgMgSgJgOQgCgCgCgCQAAgRgCgaQAAgGgBgGQgDgkgGgdQABgEABgEAAGBuQgCABABAB");
	this.shape_5.setTransform(2.8,-25.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AhVhlQAcAjAZAVQALAJAHAEQAPAGARAKQAIAEAIABQAIAFAKgCQAIgBADgBQAHAAAFgBQAEABABACQACACAEAIQADALgFATQgDALgFAFQgFAJgJAIQgCACgCACQgJAHgKAEQgDABgEAAQgaAGAFAGQAHAEAYAAQAEgBAHgCQgJAEgGACQgDAAgEABQgYAEgUgPQgLgHgLgMQgOgRgLgOQgCgCgCgBQgEgSgEgXQgBgFgBgGQgFghgHgcQABgEABgF");
	this.shape_6.setTransform(2.8,-30.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AhdhbQAfAeAcAPQANAGAIACQARADAUACQAIABAJgBQAJABAKgEQAHgCAEgBQAFgCAFgCQAEAAABABQADADAEALQAEALgGASQgEAMgDAGQgGAKgIAJQgCACgDACQgIAIgLAEQgEACgEABQgcAGAIAIQAKAGAdAAQAGgBAJgBQgJAHgHADQgEACgEABQgcAKgXgNQgNgGgNgLQgQgQgNgOQgBgCgCgCQgJgRgGgUQgBgFgCgGQgHgdgHgcQAAgEAAgF");
	this.shape_7.setTransform(2.8,-35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AhlhSQAjAZAfAIQAOADAKABQATgBAWgFQAJgCAKgEQAJgCAKgGQAHgEADgBQAGgDAFgDQADgBABABQADACAFAMQAEAMgGAVQgEANgDAGQgGAKgIAJQgCADgDACQgJAKgLAEQgEACgEABQgfAHAKAKQAOAHAjABQAIAAAKgBQgJAJgIAGQgEACgEACQggAQgdgKQgNgFgOgLQgTgPgOgOQgCgCgCgCQgMgRgIgSQgCgEgCgFQgJgagIgbQAAgFgBgG");
	this.shape_8.setTransform(2.7,-39.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("ABihdQhEA7g9ABQglABgqgXQAKAnARAcQAUAjAvAfQAuAgA1ggQANgIAPgQQhEgBgMgLQgNgLAhgIQAhgJAQgkQAPgngHgRQgHgRgDACg");
	this.shape_9.setTransform(2.7,-45.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 5
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5EEF6").s().p("AAbCpQgSgEgJgGQgRgKgDgUQgEgfAAglQAAgrgCgUQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAhg7gDg2IACgwIAKgCIAEAiIAEAtQgMAOgGASQgIAfAMAjIgGArQgBAuAXAVQgLAeARAUIgCAAg");
	this.shape_10.setTransform(-2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).to({_off:true},1).wait(9));

	// Layer 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVCoIgFABIgQgBIgBAAQgRgDgKgGIgCgBQgSgJgCgUQgEgfgBgmQABgrgCgUQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAig8gDg2IADgvIAKgCIADAhIAJBSIAEBQQADAUAEATQAFAZAIAKIAHADIAKAGQAJAFAFAGQANANgIAaIAAABIgEACIgHABIAAABIgJACIAAgBIgGAAIAAACIACAAIgMABg");
	this.shape_11.setTransform(1,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AABCcIgBgBIgKgCIgKgFIgBgBIgEgDIgGgHQgFgGgBgIQgHgagEggQgCgWgDgQIgDgVQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAPgfAEgiQADgWgCgWIABguIAJgDIAFAfIACAGIAOBEIADAPQAFAVADAgIAHAaIABAGQAHAVAIAJIAHAEIAJAGQAHAGAEAFIABABQALAPgKAaIAAABIgEABIgHACIAAABIgJADIAAgBIgGABIgBACIACAAIgKACIgCAAIAAgBIgFACIgCAAIgFAAIgFAAg");
	this.shape_12.setTransform(1.6,-3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AACCPIgBAAIgFgCIgHgEIgBAAIgCgDIgDgHQgGgEgCgGQgJgUgIgcQgDgSgFgPIgGgUIgDgCQAJgdABgiQACgWgDgVIgBguIAHgEIAIAdIACAFQAKAgALAdIAFANQAHASAFAZIAJAVIACAFQAIAQAHAJIAHAEIAIAHQAHAGADAGIABACQAIAQgKAZIgBABIgEACIgHACIAAABIgJADIAAgBIgGACIgCACIABAAIgKADIgCAAIAAgBIgEACIgBABIgEAAIgDAAg");
	this.shape_13.setTransform(2.2,-8.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAFCCIgDgBIgCgDIAAgBIgBgCQABgDgCgCQgFgDgDgFQgMgOgKgXQgGgQgIgNIgIgSQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAEgagCgjQgBgWgDgUIgEgtIAGgFIALAbIACAFQANAdAPAXIAFALQAKAOAIAUQAFAJAGAHIACADIARATIAGAGIAHAIQAGAGACAHIABABQAHARgNAZIAAABIgEACIgHADIgBABIgJAEIAAgBIgHADIgBABIAAABIgKADIgCAAIAAAAIgEACIAAABIgDABIgBAAg");
	this.shape_14.setTransform(2.6,-13.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANBzIgBgBQAAAAAAAAQAAAAABgBQAAAAABgBQABAAAAgBIAAABIgBACIAAABIAAACIgBgCgAAPBvQABAAAAAAQAAgBAAAAQABgBgBAAQAAgBAAAAQgGgBgDgDQgMgIgOgTQgIgNgKgMIgKgPQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQgBgZgFghQgCgWgEgUQgEgXgCgVIAEgFIANAYIADAEQAQAaASATIAHAIQAMALALAQIAMAJIADABQAMAIAGAHIAGAFIAGAJQAFAHACAIIAAABQAFATgOAYIAAABIgFACIgHAEIAAABIgJAEIgBgBIgHADIgCACIAAABIgKADIgCAAg");
	this.shape_15.setTransform(2.5,-19.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVBnIAAAAIgEgCIgCAAQAAgBAAAAQAAgBAAAAQAAgBABAAQABgBABgBIAAAAIACAAIABAAQgPgDgNgNIgWgVIgMgNIgDgCQgHgXgIgiQgDgVgFgTQgFgXgDgUIACgHQAIALAJAMIACADQAUAXAVANIAJAHQAOAHAOAKQAHADAHACIACABQAOACAGAHIAFAFQAEAFACAEQAEAIABAIIAAABQADAUgPAYIgBABIgEACIgHAFIgBABIgKAEIAAAAIgHAEIgDACIAAAAIgKAEIAEAAQAFACAFAAQABACgFABIgCACIgBAAIgCABIgFgBg");
	this.shape_16.setTransform(2.5,-24.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAlBbIgEAAIAKgCQAFAAAGgCQAAABgGACIgFABIAAAAIgDABIgDgBgAADBTQgKgHgOgJIgOgMIgDgCQgNgUgLgjQgFgUgGgTQgGgXgEgUIABgHIATAUIADADQAXAUAZAJIAKAEIAhAIQAIABAHgBIADAAQAPgDAGAGIAFAIQADAFACAFQADAGAAAJIAAABQABAVgQAXIgBABIgFAEIgHAEIgBABIgJAFIgBABIgHADIgDACIgBABIgLAEIgCABIAAAAQgBABgBABQgBAAAAABQAAAAAAABQAAAAABABIACABIAIACIABAAIAEACIgBAAQgOAAgPgIgAAhBbIAAAAg");
	this.shape_17.setTransform(2.6,-29.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQBSQgPgEgNgIIgRgKIgDgBQgRgTgPgkIgNglQgIgXgFgTIgBgIQALAKAMAIIADADQAaAQAcAFIALABQAUABATgDQAJgBAIgEIADgBQARgHAFAFIAFAIQADAGAAAGQACAIAAAJIABACQgCAUgSAWIgBABIgEAEIgHAFIgBABIgKAGIgBABIgIAEIgDACIgBAAIgLAFIgCABIAAABQgGADAEACIACABIAMADIACAAIAMADIAJABIABAAIAGgBIAIgCIgMAGQgNAGgPAAQgIAAgJgCg");
	this.shape_18.setTransform(2.6,-34.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAdBPQgRgBgQgHQgKgDgJgEIgDgCQgXgQgRglIgQgjQgJgXgGgTIgCgIQAMAJANAGIAEACQAdAOAfgBIALAAQAZgCAVgJQAJgEAJgHIAEgCQASgMAFAEIAFAJQACAGAAAHQACAJgCAJIAAACQgDAXgTAUIgBABIgFAFIgHAFIgBABIgKAGIgBABIgIAFIgEACIgBABIgLAFIgCABIgBABQgFADAEACIADACIAQADIACABIAQADIAMACIABAAQAEABAEgBIALgBQgGAFgHAEQgWAPgYAAIgFgBg");
	this.shape_19.setTransform(2.5,-39.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAABYQgrgGgbg1QgcgygLgiQAPAKAQAFQAmAMApgJQAogJAfgcQAYgUAFAEQAJASgFAYQgJAwhEAhQgMAGANADIApAKQAPAEAMgBIANgBQgjAmgsAAQgPAAgQgEg");
	this.shape_20.setTransform(2.7,-45.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-20.7,14.1,41.3);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween113("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.1,2.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween114("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.5,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true,x:10.5,y:11.1,alpha:1},3).wait(1));

	// Layer 1
	this.instance_2 = new lib.Tween111("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(8,0,1,1,0,0,0,8,0);

	this.instance_3 = new lib.Tween112("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(16.7,9.8,0.623,1,0,0,0,8,0);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:0.62,x:16.7,y:9.8,alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-14.1,17.9,28);


(lib.Symbol16copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("Ag2BEQBZgrAUhc");
	this.shape.setTransform(-1.6,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AhBAyQBigZAhhK");
	this.shape_1.setTransform(-1.2,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AhLAgQBpgHAug4");
	this.shape_2.setTransform(-0.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AhWANQByAKA7gl");
	this.shape_3.setTransform(-0.3,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AhggGQB6AZBHgT");
	this.shape_4.setTransform(0.1,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 3
	this.instance = new lib.Tween85("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.5,-8.2,1,1,-90,0,0,-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:4.9,y:0.5},4).wait(1));

	// Layer 1
	this.instance_1 = new lib.Tween88("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.2,-5.7,1,1,-60);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Tween87("synched",0);
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,rotation:0,x:0,y:0,alpha:1},4).wait(1));

	// Layer 4
	this.instance_3 = new lib.Tween90("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.5,-3.9);

	this.instance_4 = new lib.Tween89("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1.3,-2.6,0.999,0.999,-41.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,scaleX:1,scaleY:1,rotation:-41.3,x:-1.3,y:-2.6},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},1).to({scaleX:1,scaleY:1,rotation:-22.7,x:-1.2,y:-1.5},1).to({rotation:0,x:-0.9,y:0.9},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-14.7,13.2,20.4);


(lib.Symbol16copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AhggGQB6AZBHgT");
	this.shape.setTransform(0.1,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AhWANQByAKA7gl");
	this.shape_1.setTransform(-0.3,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AhLAgQBpgHAug4");
	this.shape_2.setTransform(-0.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AhBAyQBigZAhhK");
	this.shape_3.setTransform(-1.2,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("Ag2BEQBZgrAUhc");
	this.shape_4.setTransform(-1.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 3
	this.instance = new lib.Tween85("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(4.9,0.5,1,1,0,0,0,-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-90,x:1.5,y:-8.2},4).wait(1));

	// Layer 1
	this.instance_1 = new lib.Tween87("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.Tween88("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.4,-4.6,1,1,-60);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,rotation:-60,x:-3.4,y:-4.6,alpha:0},4).wait(1));

	// Layer 4
	this.instance_3 = new lib.Tween89("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.9,0.9);

	this.instance_4 = new lib.Tween90("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1.5,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-22.7,x:-1.2,y:-1.5},2).to({scaleX:1,scaleY:1,rotation:-41.3,x:-1.3,y:-2.6},1).to({_off:true,scaleX:1,scaleY:1,rotation:0,x:-1.5,y:-3.9},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-4.7,21.8,9.1);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.1,12.2,0.943,0.6,0,0,0,0,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgYAwIAxhf");
	this.shape.setTransform(-6.7,-9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AhagpQgRAhgEAuQgEAwAIATQACAFACACQAFAGAGgOQAJgUAGAJIAAAfQACACAEABQAPAEAWAEQAUACAZABQBGADAWgHQALgDgBgKQAAgEgCgEQgCgGgGgGQgFgFgFgFQgCgCgEgCQgTgOgagDQgPgCgdADQAJgNAMgmQAOgqgFgcQgGgkgJgTQgRglgjAF");
	this.shape_1.setTransform(-0.1,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("AALCKQgZgBgUgCQgWgEgPgEIgGgDIAAgfQgGgJgJAUQgGAOgFgGIgEgHQgIgTAEgwQAEguARghIAzhgQAjgFARAlQAJATAGAkQAFAcgOAqQgMAmgJANQAdgDAPACQAaADATAOIAGAEIAKAKQAGAGACAGIACAIQABAKgLADQgQAFgrAAIghgBg");
	this.shape_2.setTransform(-0.1,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0F1F9").s().p("AgDAXIglgFQATACAaABQBGACAWgHQALgDgBgJIgCgGQAGACgBAGQgIAVg2AAQgWAAgdgEgAhtgEQAFAFAGgNQAJgUAGAJIAAAeIAGADQgagHgGgHg");
	this.shape_3.setTransform(0.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-15.2,25.1,29.9);


(lib.Symbol9copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(2.7,-32.4,0.419,1,-60,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleX:1,rotation:-82.2,x:9.6,y:-33.1},6,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.1,-34.3,1.004,1.327,0,-49.1,-62.8,0.3,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,scaleX:1,scaleY:1,rotation:-82.2,skewX:0,skewY:0,x:-3.2,y:-29.6},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-43.5,24.8,28.4);


(lib.Symbol9copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(-10.9,-28.5,0.836,0.808,0,-85.1,-77.8,0.7,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.4,-30.2,0.996,1,-90,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-36.5,17.9,18);


(lib.Symbol9copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(-13.1,-34.3,1.004,1.327,0,-49.1,-62.8,0.3,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.7,scaleX:0.84,scaleY:0.81,skewX:-85.1,skewY:-77.8,x:-10.9,y:-28.5},4).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.7,-32.4,0.419,1,-60,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.3,scaleX:1,rotation:-90,x:1.4,y:-30.2},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-43.5,24.8,28.4);


(lib.Symbol9copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(2.7,-32.4,0.419,1,-60,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.1,-34.3,1.004,1.327,0,-49.1,-62.8,0.3,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-43.5,24.8,28.4);


(lib.Symbol9copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(5.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-7.9,1,1,0,0,0,0,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-7.9,21.2,15.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(5.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,scaleX:0.42,rotation:-60,x:2.7,y:-32.4},9).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-7.9,1,1,0,0,0,0,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.3,scaleX:1,scaleY:1.33,skewX:-49.1,skewY:-62.8,x:-13.1,y:-34.3},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-7.9,21.2,15.8);


(lib.Symbol4copy11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 22
	this.instance = new lib.Tween109("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-6.1,-10.2,0.307,0.307,0,0,0,3.6,3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AgNARQAFgXAWgK");
	this.shape.setTransform(-21.2,-30.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AgMAUQAHgYASgP");
	this.shape_1.setTransform(-20.2,-32.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AgMAYQAJgaAQgV");
	this.shape_2.setTransform(-19.1,-34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AgLAbQAKgbANga");
	this.shape_3.setTransform(-18.1,-36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(1));

	// Layer 27
	this.instance_1 = new lib.Tween107("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.1,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},4).wait(1));

	// Layer 17
	this.instance_2 = new lib.Tween103("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27.3,-24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},4).wait(1));

	// Layer 28
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAcAqQgmgNgRgfQAIgJATABQgRgFgGgLQAQgUAWAG");
	this.shape_4.setTransform(-21.7,-21.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(0.7,1,1).p("AAGgnQgQgFgMAPQALASgFAGQADAeAkAQ");
	this.shape_5.setTransform(-21.2,-24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(0.8,1,1).p("AAAgmQgLgEgIAKQARAVgCAEQgKAcAiAT");
	this.shape_6.setTransform(-20.9,-27.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(0.9,1,1).p("AgGglQgGgDgEAEQAWAYAAACQgVAaAfAX");
	this.shape_7.setTransform(-20.6,-30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// Layer 20
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AgcgWQAtARAMAc");
	this.shape_8.setTransform(-7.3,-32.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("AgZgFQAmACANAJ");
	this.shape_9.setTransform(-9.3,-35.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0057A8").ss(1,1,1).p("AgWAKQAegLAOgI");
	this.shape_10.setTransform(-11.2,-38.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0057A8").ss(1,1,1).p("AgTAbQAXgbAQga");
	this.shape_11.setTransform(-13.1,-40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).wait(1));

	// Layer 19
	this.instance_3 = new lib.Tween62("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10.7,-19.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},4).wait(1));

	// Layer 4
	this.instance_4 = new lib.Tween56("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12.5,-24.4,1,1,60);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},4).wait(1));

	// Layer 10
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0057A8").ss(1,1,1).p("AgighQARAwA0AT");
	this.shape_12.setTransform(-18.3,-13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0057A8").ss(1,1,1).p("AglgbQAeAoAtAO");
	this.shape_13.setTransform(-17.7,-14.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0057A8").ss(1,1,1).p("AgpgUQArAgAoAJ");
	this.shape_14.setTransform(-17.1,-16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0057A8").ss(1,1,1).p("AgsgNQA3AYAiAD");
	this.shape_15.setTransform(-16.5,-17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).wait(1));

	// Layer 9
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0057A8").ss(1,1,1).p("AAOAaQgMglgPgO");
	this.shape_16.setTransform(-2.9,-16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0057A8").ss(1,1,1).p("AgUgZQAXAOASAl");
	this.shape_17.setTransform(-2.4,-23.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0057A8").ss(1,1,1).p("AgcgaQAgAPAZAm");
	this.shape_18.setTransform(-1.9,-30.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0057A8").ss(1,1,1).p("AgjgaQAoAPAfAm");
	this.shape_19.setTransform(-1.4,-37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).wait(1));

	// Layer 11
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0057A8").ss(1,1,1).p("AhqBGQA2BLBTgmIgfgqQASAIAPgRQgGgogbgUQAkAUAmgHQAHgQgSgMIAsASQgVhPhJgn");
	this.shape_20.setTransform(-4.7,-19.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0057A8").ss(1,1,1).p("AhOBTQABABABACQAOANAMADQAfAMAhgEQAHgFAHgGQgOgTgOgQQAHAAAIgCQAIgCAHgFQABgHgBgGQgCgEgCgEQgIgTgQgOQAHADAHABQAUADAaABQAFgQgPgLQANACAOAEQgbhEg7gaQgFgCgGgC");
	this.shape_21.setTransform(-2.6,-25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0057A8").ss(1,1,1).p("AgzBeQADgBAHgCQAfAKAdADQADgHADgGQgNgTgOgOQAHgBAIgBQAIgBAGgDQADgDABgBQgCgFgBgDQgJgTgOgNQACgBADgCQAQgDAaAFQABgPgNgLQAGgDAFgCQgig/g5gNQgGgCgFgB");
	this.shape_22.setTransform(-0.5,-30.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0057A8").ss(1,1,1).p("AgBBlQgCgBgBgCQgKgPACgHQAdAHAbAKQAAgIgBgIQgNgSgQgMQAKgCAHAAQAIAAAGAAQAGAAACADQgBgEgCgEQgJgRgMgNQgCgFgDgFQANgHAbAIQgEgOgKgLQgDgKgEgHQgpg6g2gBQgGAAgFAA");
	this.shape_23.setTransform(-0.5,-35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0057A8").ss(1,1,1).p("AgKAWQgOgLAEgOQACgMAKgEQATgIAGANQAJAQgGAOQgQAKgOgEg");
	this.shape_24.setTransform(-6.7,-21.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0057A8").s().p("AgKAWQgOgLAEgOQACgMAKgEQATgIAGANQAJAQgGAOQgLAHgJAAIgKgBg");
	this.shape_25.setTransform(-6.7,-21.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#0057A8").ss(1,1,1).p("AgTgEQADgMAKgEQAhAUgHANQgRALgOgEQgNgLAFgNg");
	this.shape_26.setTransform(-7.9,-28.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0057A8").s().p("AgLAUQgNgLAFgNQADgMAKgEQAhAUgHANQgMAIgLAAIgIgBg");
	this.shape_27.setTransform(-7.9,-28.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#0057A8").ss(1,1,1).p("AgTgEQAEgMAKgDQAhATgJALQgRAMgPgDQgKgLAEgNg");
	this.shape_28.setTransform(-9,-35.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0057A8").s().p("AgNAUQgKgLAEgNQAEgMAKgDQAhATgJALQgOAJgMAAIgGAAg");
	this.shape_29.setTransform(-9,-35.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#0057A8").ss(1,1,1).p("AgTgEQAFgMAKgDQAhATgLAJQgRANgPgCQgJgMAEgMg");
	this.shape_30.setTransform(-10.1,-43.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0057A8").s().p("AgOAUQgJgMAEgMQAFgMAKgDQAhATgLAJQgPALgMAAIgFAAg");
	this.shape_31.setTransform(-10.1,-43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24}]}).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#0057A8").ss(1,1,1).p("ABABEQhJgTgpg9IAfgHQghgKgMgbQA6gVA+AV");
	this.shape_32.setTransform(-28.3,-23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#0057A8").ss(1,1,1).p("AA+BAQgygNgjgfQgdgWgJgXQAUgDgFgLQgGgEgDgFQgCgEgDgGQA0gMA9AQ");
	this.shape_33.setTransform(-27.8,-23.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#0057A8").ss(1,1,1).p("ABCA9Qg0gPgpgiQgkgcgCgWQAdAHACgJQgHgEgDgFQgCgEgCgGQAtgDA9AK");
	this.shape_34.setTransform(-28,-24.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#0057A8").ss(1,1,1).p("ABHA7Qg4gQgtgmQgsghAEgVQAoAQAIgHQgIgEgDgFQgCgDgBgGQAkAFA/AF");
	this.shape_35.setTransform(-28.3,-25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32}]}).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[]},1).wait(1));

	// Layer 13
	this.instance_5 = new lib.Tween70("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-7.6,-19.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},4).wait(1));

	// Layer 8
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0057A8").ss(1,1,1).p("AgZBAQgphDAFg6QAcgJAiAsIABgYQAwAfANA7");
	this.shape_36.setTransform(-17.2,-39.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#0057A8").ss(1,1,1).p("AgSA1Qgpg1ABg0QAlAFARATQACgIACgJQANAJALALQAXAVAMAe");
	this.shape_37.setTransform(-19.6,-37.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#0057A8").ss(1,1,1).p("AgLAsQgogpgDguQAcAAAPAOQAEgFADgFQAMAHAKAIQAXAQAOAU");
	this.shape_38.setTransform(-22,-36.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#0057A8").ss(1,1,1).p("AgEAjQgogbgHgoQATgGANAIQAGgBAFgBQAKAFAKAFQAWALASAL");
	this.shape_39.setTransform(-24.4,-34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36}]}).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},1).wait(1));

	// Layer 26
	this.instance_6 = new lib.Tween74("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-11.3,-29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:0.65,rotation:-60,x:-14.4,y:-35.1},2).to({_off:true},1).wait(2));

	// Layer 15
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#0057A8").ss(1,1,1).p("AAMANIAFgNQgPgLgRgBQgBAOAcALg");
	this.shape_40.setTransform(-17.3,-21.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0057A8").s().p("AgPgMQARABAPALIgFANQgcgLABgOg");
	this.shape_41.setTransform(-17.3,-21.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#0057A8").ss(1,1,1).p("AgPgEQARAAAOAHQggAFABgMg");
	this.shape_42.setTransform(-17.2,-24.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0057A8").s().p("AgPgEQARAAAOAHIgPACQgRAAABgJg");
	this.shape_43.setTransform(-17.2,-24.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#0057A8").ss(1,1,1).p("AgPgCQAQgBAPAFQgfAGAAgKg");
	this.shape_44.setTransform(-17.1,-27);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0057A8").s().p("AgPgCQAQgBAPAFQgLACgGAAQgOAAAAgGg");
	this.shape_45.setTransform(-17.1,-27);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#0057A8").ss(1,1,1).p("AgPgBQAQgCAOADQgeAHAAgIg");
	this.shape_46.setTransform(-17,-29.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0057A8").s().p("AgPgBQAQgCAPADQgOADgGAAQgLAAAAgEg");
	this.shape_47.setTransform(-17,-29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[]},1).wait(1));

	// Layer 14
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#0057A8").ss(1,1,1).p("AAFgDIgJAJIAHgMg");
	this.shape_48.setTransform(-16.5,-21.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#0057A8").ss(1,1,1).p("AABAAIgBAAIABAAAgDAEIAEgEAABAAIAAAAIAAAAAABAAIAAAAIADgCg");
	this.shape_49.setTransform(-16.4,-23.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#0057A8").ss(1,1,1).p("AgEAGIAJgKIgDgB");
	this.shape_50.setTransform(-16.2,-25.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#0057A8").ss(1,1,1).p("AgGAKIANgPIgDgE");
	this.shape_51.setTransform(-15.9,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48}]}).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[]},1).wait(1));

	// Layer 24
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E5EEF6").s().p("AhpAVQA9ACAigqQAiAXALAvQgOARgUgHQALAXAVATQgQAFgQAAQg9AAgthXgAgLgaQAXgfgMgyQBFALAlBaIglgOIAHAVQgvAAgogbg");
	this.shape_52.setTransform(-4.8,-18.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E8F0F7").s().p("AgZBPQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgXgNgQgYIAAgIQgTgRgKgUIAAAAQAMgBAIgFIBLgMQgPgIgJgLQAIgGAEgJQAagbAIgLIARAKIAEAFQAPAMANAPIABAJQAQAUAEAIQABAEgEAIQACAGAEAIIgDABQgTgGgRgFQgDADACADQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgPgEIgIgDQAMAOAIASQgDADgDAJIABABIgFALQgDAGgGACIgFgDIgCAMQAGANAOAMIgBACIgNAAQgjAAgUgSg");
	this.shape_53.setTransform(-4.7,-23.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#ECF3F9").s().p("AgZA6QADADACgFQgcgQgOgdQADACAGgHQgdgQgIgXIAAgBQANgDAJgIQAQgEAPgBIgGgJQAKgGAHgLQAngZAaARQAJAHAKAKQgJgDgBAGQATASANASQgJgEgGAHQAVAZAFAIQgFgFgPAEQACAKAGAKQABADADADIgCAAIgSgFIgGgCQgFABgFAFIABABIAEAOQAAAIgCAGIgGgEQgGgCgKADQAEAPARAQIAAACQg5gCgRgfg");
	this.shape_54.setTransform(-4,-28.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EFF5FA").s().p("AgbAuQAGAEAIgFQgjgTgNggQAIAFALgGQgmgUgHgaIAAAAQAPgFAJgMIAKgCQAHgGAFgIQAzgXAtAuIAUAWQgSgEgEAGIAGAIIABABIAKAMIgBAAIAHAKIAKANQgPgHgLAEIAKAOQAOASAEAJQgKgMgWgCIAAAAIgFACIAAAAIACAGIAIAMIAEAJIADAEIADADIgFgBIABAFIgGgGIgBAAQgKgHgRgBIAAAAIgDgBQADASATATIACADQhFgIgMgog");
	this.shape_55.setTransform(-3.1,-34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52}]}).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[]},1).wait(1));

	// Layer 21
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhJAvQhOgZglg2IAegHQgfgGgOggQA/gYA7AXIAcgiIBZgYIABAHQAmAHASAgQBUAhAbBKIgsgRQARAKgGATQgnAGgkgVQAZAZAJAlIghAJIAfAqQgdAKgcAAQhRAAg/hag");
	this.shape_56.setTransform(-14.4,-21.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAWBpQgegRgcgeQhPgWgngyIARgKQgcgKgNgfQAggHAgADQAIgDAIAAQAPADAPAGIABgBQAGgQAIgRQALgJAQgIQAYgBAYgDIACAFQAeAGAVARIAGAFQAXABASAGQASANANAQQAQAKAKAOIgVgTIgFgCQAJAFAEAGQACAGAAAIQgXALgVgJQAZAYANAhIgZAPIAUArQgTAMgSAHQgTAEgSAAQgfAAgegOg");
	this.shape_57.setTransform(-17.1,-23.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AArBoQgjgNgcgWQhOgUgpgvIAEgLQgZgOgNgeQAggCAfAGIAGgJIAeAJIABgBQgCgQACgQQADgNAMgLQAXAFAZAAIAEAEQAaAGAZALIAEgBIAggOQAQANAOAPQAOgDALAAIgKgXIAAgCQAJAEAFAFQAEAGABAGQgGARgGADQAYAZARAdIgCAGIgOAOIAJAtQgOAPgPAMQggAPghAAQgPAAgPgDg");
	this.shape_58.setTransform(-17.9,-25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgNBlQhPgTgrgpQgFgIgDgJQgXgSgMgbQAgAFAfAHIgGgOIAfAJIABAAQgLgRgEgPQgEgRAHgOQAXAKAZAEIAEADIA0ALIAEgHIAVgjQARANAOANIAXgcIABgdIAGAAIAQAFIAHAMQAJAVALAPQAYAZATAcIAEAIIgKAPIgCAvIgVAkQgsAfgvACQglgIgfgOg");
	this.shape_59.setTransform(-17.7,-29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56}]}).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[]},1).wait(1));

	// Layer 18
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#0057A8").ss(0.5,1,1).p("AANgdIAFAAIgaA7IgJgJg");
	this.shape_60.setTransform(-15.8,-33.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2F7FB").s().p("AgRAVIAegyIAFAAIgaA7g");
	this.shape_61.setTransform(-15.8,-33.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgRAZQAJgeAPgcQAEAGAHABIgZA8g");
	this.shape_62.setTransform(-16.5,-34.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F2F7FB").s().p("AgRAZQAJgeAPgcQAEAGAHABIgZA8g");
	this.shape_63.setTransform(-16.5,-34.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgRAcQACgiAQgeQAGAKALACIgaA9g");
	this.shape_64.setTransform(-17.2,-35.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F2F7FB").s().p("AgRAcQACgiAQgeQAGAKALACIgZA9g");
	this.shape_65.setTransform(-17.2,-35.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgQAgQgGgoAUggQAFAQAPADIgZA+g");
	this.shape_66.setTransform(-18,-36.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F2F7FB").s().p("AgQAgQgGgoAUggQAFAQAPADIgZA+g");
	this.shape_67.setTransform(-18,-36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60}]}).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[]},1).wait(1));

	// Layer 23
	this.instance_7 = new lib.Tween68("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-5.5,-17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-8.6,y:-24.2},2).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-46.4,42.8,40.3);


(lib.Symbol4copy10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 28
	this.instance = new lib.Tween78("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-24.3,-22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// Layer 27
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAAAZQgOgKgCgRQAOgFASAHQgHgHAIgR");
	this.shape.setTransform(-15,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AEB8DE").ss(0.1,1,1).p("AAAAjQgUgigGgkIAjA0QgEgRAHgSQADAXAMAZQgPgDgMAIg");
	this.shape_1.setTransform(-17.3,-38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("AgagjIAjA0QgEgRAHgSQADAXAMAZQgPgDgNAIQgTgigGgkg");
	this.shape_2.setTransform(-17.3,-38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(1));

	// Layer 20
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AgcgWQAtARAMAc");
	this.shape_3.setTransform(-7.3,-32.6);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

	// Layer 19
	this.instance_1 = new lib.Tween62("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.7,-19.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AgNARQAFgXAWgK");
	this.shape_4.setTransform(-21.2,-30.9);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({_off:false},0).wait(1));

	// Layer 4
	this.instance_2 = new lib.Tween56("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-12.5,-24.4,1,1,60);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1));

	// Layer 10
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("AgighQARAwA0AT");
	this.shape_5.setTransform(-18.3,-13);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(4).to({_off:false},0).wait(1));

	// Layer 11
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AhqBGQA2BLBTgmIgfgqQASAIAPgRQgGgogbgUQAkAUAmgHQAHgQgSgMIAsASQgVhPhJgn");
	this.shape_6.setTransform(-4.7,-19.2);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(4).to({_off:false},0).wait(1));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AgKAWQgOgLAEgOQACgMAKgEQATgIAGANQAJAQgGAOQgQAKgOgEg");
	this.shape_7.setTransform(-6.7,-21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0057A8").s().p("AgKAWQgOgLAEgOQACgMAKgEQATgIAGANQAJAQgGAOQgLAHgJAAIgKgBg");
	this.shape_8.setTransform(-6.7,-21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},4).wait(1));

	// Layer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("ABABEQhJgTgpg9IAfgHQghgKgMgbQA6gVA+AV");
	this.shape_9.setTransform(-28.3,-23.3);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(4).to({_off:false},0).wait(1));

	// Layer 13
	this.instance_3 = new lib.Tween70("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-7.6,-19.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(1));

	// Layer 22
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnAlQgHgOgFgNQgNgkADgjQAYgIAeAfIAIAMIABgYQAcASAQAdQAMASAFAZIhYAYIgOgbg");
	this.shape_10.setTransform(-17.2,-39.1);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(4).to({_off:false},0).wait(1));

	// Layer 8
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0057A8").ss(1,1,1).p("AgZBAQgphDAFg6QAcgJAiAsIABgYQAwAfANA7");
	this.shape_11.setTransform(-17.2,-39.1);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(4).to({_off:false},0).wait(1));

	// Layer 26
	this.instance_4 = new lib.Tween74("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11.3,-29.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1));

	// Layer 15
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0057A8").ss(1,1,1).p("AAMANIAFgNQgQgLgQgBQgBAOAcALg");
	this.shape_12.setTransform(-17.3,-21.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0057A8").s().p("AgPgMQAQABAQALIgFANQgcgLABgOg");
	this.shape_13.setTransform(-17.3,-21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},4).wait(1));

	// Layer 24
	this.instance_5 = new lib.Tween72("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16.1,-28.4,1,1,0,0,0,-11.3,-9.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// Layer 21
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhJAvQhOgZglg2IAegHQgfgGgOggQA/gYA7AXIAcgiIBZgYIABAHQAmAHASAgQBUAhAbBKIgsgRQARAKgGATQgnAGgkgVQAZAZAJAlIghAJIAfAqQgdAKgcAAQhRAAg/hag");
	this.shape_14.setTransform(-14.4,-21.3);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(4).to({_off:false},0).wait(1));

	// Layer 23
	this.instance_6 = new lib.Tween68("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-5.5,-19.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-40,39.2,32.2);


(lib.Symbol4copy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 22
	this.instance = new lib.Tween110("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.4,-25.9,1,1,0,0,0,3.4,2.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AgLAfIAXg9");
	this.shape.setTransform(-17,-38.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:false},0).wait(1));

	// Layer 27
	this.instance_1 = new lib.Tween108("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25,-32.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1));

	// Layer 17
	this.instance_2 = new lib.Tween104("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-25.5,-26.6,1.442,0.764);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1));

	// Layer 28
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AALAnQgdgaADgwQAAgCAAgBAgPgjQADAFAMAKQANAJADAA");
	this.shape_1.setTransform(-20.1,-33.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer 20
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AgPAsIAghX");
	this.shape_2.setTransform(-15.1,-43.7);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer 19
	this.instance_3 = new lib.Tween62("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10.7,-19.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(1));

	// Layer 4
	this.instance_4 = new lib.Tween56("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12.5,-24.4,1,1,60);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1));

	// Layer 10
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AgwgHQBFAQAcgB");
	this.shape_3.setTransform(-15.9,-19.4);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

	// Layer 9
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AAsAbQglgmgygP");
	this.shape_4.setTransform(-0.9,-44.5);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({_off:false},0).wait(1));

	// Layer 11
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("AAuBpQgDgDgDgDQgFgGgEgGQgNgSgCgLQAfAEAYARQgPgggYgOQAKgCAIAAQARABAJAOQgCgEgCgEQgPgagRgSQAIgOAcANQhChwhLARQgFABgFAB");
	this.shape_5.setTransform(-0.5,-40.9);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(4).to({_off:false},0).wait(1));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AgUgDQAFgNALgCQAJgDAMAKQAMAKgNAJQgQANgSgBQgGgNAEgKg");
	this.shape_6.setTransform(-11,-50.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0057A8").s().p("AgSAUQgGgNAEgKQAFgNALgCQAJgDAMAKQAMAKgNAJQgQAMgOAAIgEAAg");
	this.shape_7.setTransform(-11,-50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},4).wait(1));

	// Layer 6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("ABMA7Qg8gRgxgqQgzgnALgTQAoAdAYgJQgKgEgDgFQgBgDgBgGQAdAOA/AA");
	this.shape_8.setTransform(-28.6,-26.2);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4).to({_off:false},0).wait(1));

	// Layer 13
	this.instance_5 = new lib.Tween70("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-7.6,-19.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

	// Layer 8
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("AADAhQgtgQgHgxQAlANAUAGQAVAFAVAD");
	this.shape_9.setTransform(-27,-34.2);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(4).to({_off:false},0).wait(1));

	// Layer 15
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0057A8").ss(1,1,1).p("AAMAGQAOgHgPgDQgNgDgQAEQAAAGAeADg");
	this.shape_10.setTransform(-16.5,-31.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0057A8").s().p("AgSgDQAQgEANADQAPADgOAHQgegDAAgGg");
	this.shape_11.setTransform(-16.5,-31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},4).wait(1));

	// Layer 14
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0057A8").ss(1,1,1).p("AAHgMIADAFIgPAQIgEAEAgFAJIAJgQ");
	this.shape_12.setTransform(-15.6,-30.4);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(4).to({_off:false},0).wait(1));

	// Layer 24
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F7FB").s().p("AghAkQALAGAKgHQgngWgNglQAMAKARgHQgvgVgGgdQAQgHALgPQBMgaBJBrQgbgHgIAHQAXAdANAZQgZgPgSAHQALAIAJAMQAKALAFAPQgRgVglgGQACAWAaAYQhSgOgGgxg");
	this.shape_13.setTransform(-1.8,-41);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(4).to({_off:false},0).wait(1));

	// Layer 21
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ai4AOIA+AUIgPgUIAeAJQgrglAGgeQAuAiA+gEIAMhFIAeAaIAihZIAdADIB0B7IggBwQgoApgwAOQjKgPgvh2g");
	this.shape_14.setTransform(-17.4,-33.4);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(4).to({_off:false},0).wait(1));

	// Layer 18
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0057A8").ss(0.5,1,1).p("AgGgsQAHAVATAEIgZBAIgJgJQgNgtAVgjg");
	this.shape_15.setTransform(-18.9,-37.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F7FB").s().p("AgOAjQgNgsAVgjQAHAVATAEIgZA/g");
	this.shape_16.setTransform(-18.9,-37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-46.4,43,40.3);


(lib.Symbol4copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 28
	this.instance = new lib.Tween78("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-24.3,-22.4);

	this.instance_1 = new lib.Tween77("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24.3,-22.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0},4).wait(1));

	// Layer 27
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAAAZQgOgKgCgRQAOgFASAHQgHgHAIgR");
	this.shape.setTransform(-15,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AEB8DE").ss(0.1,1,1).p("AAAAjQgUgigGgkIAjA0QgEgRAHgSQADAXAMAZQgPgDgMAIg");
	this.shape_1.setTransform(-17.3,-38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("AgagjIAjA0QgEgRAHgSQADAXAMAZQgPgDgNAIQgTgigGgkg");
	this.shape_2.setTransform(-17.3,-38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(4));

	// Layer 20
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AgcgWQAtARAMAc");
	this.shape_3.setTransform(-7.3,-32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AgygBQAvgEA2AI");
	this.shape_4.setTransform(-8.5,-33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("Ag/AFQA2ANBJga");
	this.shape_5.setTransform(-9.9,-33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(2));

	// Layer 19
	this.instance_2 = new lib.Tween62("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.7,-19.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween61("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8.7,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true,x:-8.7,y:-30.9,alpha:1},2).wait(1));

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AgNARQAFgXAWgK");
	this.shape_6.setTransform(-21.2,-30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AgUAUQgBgOAJgLQAIgLAFgDQABAGAUgB");
	this.shape_7.setTransform(-20.4,-31.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AgcAcQgDgTAPgSQAMgRAIgBQgEASAeAC");
	this.shape_8.setTransform(-19.6,-32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("AgkAkQgEgYATgYQARgYALABQgIAeAnAE");
	this.shape_9.setTransform(-18.8,-32.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0057A8").ss(1,1,1).p("AAuAFQgygGANgqQgNgCgWAeQgYAeAGAe");
	this.shape_10.setTransform(-17.9,-33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Layer 4
	this.instance_4 = new lib.Tween56("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12.5,-24.4,1,1,60);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Tween55("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.9,-35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,rotation:0,x:-9.9,y:-35.3,alpha:1},4).wait(1));

	// Layer 10
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0057A8").ss(1,1,1).p("AgighQARAwA0AT");
	this.shape_11.setTransform(-18.3,-13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0057A8").ss(1,1,1).p("AgdgkQACAEACAFQAJATAOASQAJANAOAJQAFAEAEAB");
	this.shape_12.setTransform(-19.4,-13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0057A8").ss(1,1,1).p("AgZgnQADAEADAFQAJAQAKAWQAHAPALALQAFAFADAB");
	this.shape_13.setTransform(-20.6,-13.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0057A8").ss(1,1,1).p("AgUgqQADAEADAFQAJAOAGAaQAFAQAKANQAEAHABAA");
	this.shape_14.setTransform(-21.7,-13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0057A8").ss(1,1,1).p("AgRgtQAFAEADAFQAJALADAfQADARAHAPQAEALABgE");
	this.shape_15.setTransform(-22.9,-13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer 5
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0057A8").ss(1,1,1).p("AhQAWQAkAGAkgFQAhgFA4gq");
	this.shape_16.setTransform(-13,-11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhQAWQBXgpBKgFQg4AqghAFQgQACgQAAQgUAAgUgDg");
	this.shape_17.setTransform(-13,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},3).wait(2));

	// Layer 11
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0057A8").ss(1,1,1).p("AhqBGQA2BLBTgmIgfgqQASAIAPgRQgGgogbgUQAkAUAmgHQAHgQgSgMIAsASQgVhPhJgn");
	this.shape_18.setTransform(-4.7,-19.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0057A8").ss(1,1,1).p("AhZBaQAUAZAggFQATACAZgDQgEgcgHgNQANADAKgQQgDgNgFgMQgCgOgJgJQAaARAaADQAHABAHgDQABgDAAgDQACgMgLgJQAQACAQABQgBgCgBgEQgJgigVgbQgWgbgggR");
	this.shape_19.setTransform(-3.7,-21.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0057A8").ss(1,1,1).p("AhIBpQAGADASgLQAQABAbAEQAEgXgGgMQAHgDAFgPQgDgMgDgLQABgGAAgDQAYAQAWAGQAGACAGgFQABgCAAgDQACgKgIgMQALgDAJgGQAAgCgBgDQgIgggUgbQgUgbgbgO");
	this.shape_20.setTransform(-2.8,-23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0057A8").ss(1,1,1).p("Ag1BvQgHgTADgTQANABAbALQAMgRgEgMQAEgJAAgNQgDgLgGgKQAKABAEACQAYAPASAKQAFAEAEgHQABgCABgDQACgIgEgNQAEgIAEgMQgBgEgBgEQgGgegSgZQgTgcgXgL");
	this.shape_21.setTransform(-2,-24.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0057A8").ss(1,1,1).p("AgZB0QgVgogKgaIAAgBQAJABAbASQATAOABgNQAAgpgRgcQApAVAXAWQAFAGAEgNQAEgOgIgxQgEgbgRgZQgSgcgVgI");
	this.shape_22.setTransform(-2.2,-25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(1));

	// Layer 2
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0057A8").ss(1,1,1).p("AgKAWQgOgLAEgOQACgMAKgEQATgIAGANQAJAQgGAOQgQAKgOgEg");
	this.shape_23.setTransform(-6.7,-21.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0057A8").s().p("AgKAWQgOgLAEgOQACgMAKgEQATgIAGANQAJAQgGAOQgLAHgJAAIgKgBg");
	this.shape_24.setTransform(-6.7,-21.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(0,65,126,0.749)").ss(0.8,1,1).p("AgWAAQABgCAAgBQAKgNACgBQAPgIAIAJQAFAJACAGQACAFgBAGQgFAHgCACQgGADgHAAQgDAAgHgBQgCgBgCgCQgCgBgBgBQgBgBgBgBQgCgDgBgDQgBgCAAgDQgBgCAAgBg");
	this.shape_25.setTransform(-6,-25.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0057A8").s().p("AgIAVIgEgDIgDgCIgCgCIgDgGIgBgFIgBgDIAAAAIABgDIAMgOQAPgIAIAJQAFAJACAGQACAFgBAGQgFAHgCACQgGADgHAAIgCAAIgIgBg");
	this.shape_26.setTransform(-6,-25.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,44,84,0.502)").ss(0.5,1,1).p("AgWAAQAAAAABgBQAKgOABAAQAOgJAJAJQAGAHACAGQADAFgBAGQgEAHgCACQgFACgIABQgEAAgFgBQgDgCgCgBQgCgBgBgBQgCgBAAAAQgDgDgBgCQgBgCgBgCQgBgCAAgDg");
	this.shape_27.setTransform(-5.4,-29.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0057A8").s().p("AgFAUIgFgDIgDgCIgCgBIgEgFIgCgEIgBgFIAAAAIABgBQAKgOABAAQAOgJAJAJQAGAHACAGQADAFgBAGIgGAJQgFACgIABIgJgBg");
	this.shape_28.setTransform(-5.4,-29.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,22,42,0.251)").ss(0.3,1,1).p("AgXACQAAgBABgBQAKgMABgBQAOgKAJAIQAHAHADAGQADAFgBAGQgEAGgCACQgEADgIAAQgGgBgDAAQgDgBgDgCQgBAAgCgBQgBgBgBAAQgCgCgCgCQgCgCgBgCQgBgBAAgCg");
	this.shape_29.setTransform(-4.8,-33.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0057A8").s().p("AgDATIgGgDIgDgBIgCgBIgEgEIgDgEIgBgDIgBgBIABgCIALgNQAOgKAJAIQAHAHADAGQADAFgBAGIgGAIQgEADgIAAIgJgBg");
	this.shape_30.setTransform(-4.8,-33.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0057A8").s().p("AgCASIgFgCIgEgBIAAAAIgCgBIgFgDIgDgDIgDgDIACgDIAAgCQACgEAHgFQANgNALAIQAGAEAFAIQADAEAAAGIgFAJQgEACgJAAIgJgBg");
	this.shape_31.setTransform(-4.2,-37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_31}]},1).wait(1));

	// Layer 6
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#0057A8").ss(1,1,1).p("ABABEQhJgTgpg9IAfgHQghgKgMgbQA6gVA+AV");
	this.shape_32.setTransform(-28.3,-23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#0057A8").ss(1,1,1).p("AAwgXQgIgEgJgCQgRgFgRgEQgdgGgbADQAGAPAXABQgVABgBABQAKAPAMAJQATAQAOAIQADACACABQAAAAABABQABAAABABQACAAACABQAUAIAUAEQADABACgB");
	this.shape_33.setTransform(-28,-24);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#0057A8").ss(1,1,1).p("AgvgRQAHAIAIAHQATALANAHQADABACAAQAAABABAAQABABACAAQABABABAAQAWAGARACQADAAADgBAgxgTQABABABABQgCgBgCAAQgCAAgBgBAgxgTQAEgBAFgDQgOgFgBABQADAEADAEgAgzgSQABAAABgBAAoAQQgHgEgJgDQgOgFgQgHQgWgIgTgG");
	this.shape_34.setTransform(-27.7,-25.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#0057A8").ss(1,1,1).p("AAkAsQgHgFgIgDQgMgFgPgMQgWgPgRgMQgGgKAEgQQAAAAAAAAQgHgLAAACAgvgiQAHAIAJAGQATALANAEQACABACAAQABAAABABQABABABAAQACAAABAAQAXADAOgBQADAAADAA");
	this.shape_35.setTransform(-27.8,-25.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0057A8").ss(1,1,1).p("AA3ggQgCACgEABQgMADgXgDQgBAAgCAAQgCAAgBAAQgBgBAAAAQgCAAgCgBQgMgDgQgGQgCgBgCgBQgPgJgLgRQAFA/AuArQAOAQAIAFQAIAEAHAG");
	this.shape_36.setTransform(-28,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32}]}).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).wait(1));

	// Layer 7
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E5EEF6").s().p("AAtBrQgLgTgMgoQgEgPgRgQIgggbQgvgrgEhBQAOAgAYAbQAsA3AugTQAWBgAPAgIgdAOg");
	this.shape_37.setTransform(-25.3,-20.5);
	this.shape_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(3).to({_off:false},0).wait(2));

	// Layer 13
	this.instance_6 = new lib.Tween70("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-7.6,-19.1);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Tween69("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-4.8,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:-4.8,y:-27.5,alpha:1},4).wait(1));

	// Layer 12
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-3.7,-37.5,1.553,0.888,-15,0,0,0.4,-7.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).wait(1));

	// Layer 22
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgnAlQgHgOgFgNQgNgkADgjQAYgIAeAfIAIAMIABgYQAcASAQAdQAMASAFAZIhYAYIgOgbg");
	this.shape_38.setTransform(-17.2,-39.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgZAdIgLgVQgOgcgCgaQAPgHAQAKIAMAHIAIAIIABgTIAFAEQATAPANAVQAKAPAGAVIgmAPIgZAGIgPgVg");
	this.shape_39.setTransform(-20.2,-36.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJAZIgMgPQgOgTgHgTQALgHALAEQAFAAAEADIAHADIAEgOIACACQAPAOALASQAJALAGAQIgSAPIgXADIgLgPg");
	this.shape_40.setTransform(-23.3,-34.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAQAfIgOgJIgKgJIgZgVQAGgIAHgCIAGgCIAFgBQADgHAEgCIABABIASAaIAPATQAAAIACAHg");
	this.shape_41.setTransform(-26.3,-32.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AghAJIAEgPQAHgRAIAAQAPAdAhASg");
	this.shape_42.setTransform(-28.4,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38}]}).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).wait(1));

	// Layer 8
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#0057A8").ss(1,1,1).p("AgZBAQgphDAFg6QAcgJAiAsIABgYQAwAfANA7");
	this.shape_43.setTransform(-17.2,-39.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#0057A8").ss(1,1,1).p("AgdAzQgKgUgGgTQgLgiAEgcQAZgDAbAiQAoAKAOAv");
	this.shape_44.setTransform(-19.8,-37.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#0057A8").ss(1,1,1).p("AggAnQgGgQgEgQQgFgbAGgTQASACAVAZQAgAMAPAj");
	this.shape_45.setTransform(-22.4,-35.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#0057A8").ss(1,1,1).p("AgjAZQgBgMgBgMQAAgVAHgKQANAGAOASQAYAOARAX");
	this.shape_46.setTransform(-25.2,-33.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#0057A8").ss(1,1,1).p("AAiAYQghgSgPgdQgIAAgHARIgEAP");
	this.shape_47.setTransform(-28.4,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(1));

	// Layer 26
	this.instance_9 = new lib.Tween74("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-11.3,-29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0.1,scaleX:0.8,scaleY:0.8,rotation:-30,x:-11.5,y:-31.5},0).to({_off:true},1).wait(3));

	// Layer 15
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#0057A8").ss(1,1,1).p("AAMANIAFgNQgQgLgQgBQgBAOAcALg");
	this.shape_48.setTransform(-17.3,-21.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0057A8").s().p("AgPgMQAQABAQALIgFANQgcgLABgOg");
	this.shape_49.setTransform(-17.3,-21.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#0057A8").ss(0.9,1,1).p("AgOgHQAGABAJgBQAIAAAEABQACAGAAAFQgCACgDAAQgCABgDgBQgCAAgCgBQgBgBAAgBQgNgEgBgFg");
	this.shape_50.setTransform(-17.7,-23.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0057A8").s().p("AAFAHIgEgBIgBgCQgNgEgBgFIAAgCIAPAAQAIAAAEABIACALQgCACgDAAIgCABIgDgBg");
	this.shape_51.setTransform(-17.7,-23.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#0057A8").ss(0.7,1,1).p("AgOAAQADAAAMgCQAFgGACgCQAGAGABAFQAAAFgBABQgCADgDABQgCAAgCgBQgCAAgCgCQgOgEgBgDg");
	this.shape_52.setTransform(-17.8,-25.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0057A8").s().p("AAFAKIgEgCQgOgEgBgDIAAgBQADAAAMgCIAHgIQAGAGABAFQAAAFgBABQgCADgDABIgEgBg");
	this.shape_53.setTransform(-17.8,-25.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#0057A8").ss(0.6,1,1).p("AgQAIQABAAAPgHQACgJABgFQAJAEACAIQADAGgBADQgBAFgDABQgCABgDgBQgCAAgBgCQgSgCgCgBg");
	this.shape_54.setTransform(-17.9,-27.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0057A8").s().p("AAHAOQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgSgCgCgBIAAgBIAQgHIADgOQAJAEACAIQADAGgBADQgBAFgDABIgCAAIgDAAg");
	this.shape_55.setTransform(-17.9,-27.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgHAJQADAAgDgJIgCgOQAAgFACgBQADgBAEAEQACAFAEAKQAFAJAAAEQAAAHgEACQgCABgDAAQgCAAAAgC");
	this.shape_56.setTransform(-17.1,-30.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0057A8").s().p("AAGATIgXAAIARgKQACAAgCgJIgBgOQAAgFABgBQACgBAEAEQAEAFAEAKQAFAJAAAEQAAAHgEACIgFABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_57.setTransform(-17.9,-30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48}]}).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).wait(1));

	// Layer 16
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAnglIAQAeIhmApQgEACgDAC");
	this.shape_58.setTransform(-11.4,-13.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AAYCHQgSAIgOACQgLACgIgiQgKgtgJgMQgEgHg4hIQgegnAGgLQAEAHABgBQAAgBAAgIQACgTAHABQAHACAcAaQAbAaAWgOQAGg7ArgaQgCBWB1hbIgJDGQgCACgDACQgQATgXAUQgaAWgXAM");
	this.shape_59.setTransform(-19.3,-23.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgcBxQgKgtgJgMIg8hPQgegnAGgLQAEAHABgBIAAgJQACgTAHABQAHACAcAaQAbAaAWgOQAGg7ArgaQgCBWB1hbIgJDGIgFAEQgQATgXAUQgaAWgXAMIgGAEQgSAIgOACIgBAAQgLAAgHgggAAdCDIAAAAgABOBhQAXgUAQgTIAQAeIhoArQAXgMAagWg");
	this.shape_60.setTransform(-19.2,-23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},4).wait(1));

	// Layer 24
	this.instance_10 = new lib.Tween72("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-16.1,-28.4,1,1,0,0,0,-11.3,-9.6);

	this.instance_11 = new lib.Tween71("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-16,-29.1,0.658,0.64,0,0,0,-11.2,-10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,regX:-11.2,regY:-10.3,scaleX:0.66,scaleY:0.64,x:-16,y:-29.1},4).wait(1));

	// Layer 21
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhJAvQhOgZglg2IAegHQgfgGgOggQA/gYA7AXIAcgiIBZgYIABAHQAmAHASAgQBUAhAbBKIgsgRQARAKgGATQgnAGgkgVQAZAZAJAlIghAJIAfAqQgdAKgcAAQhRAAg/hag");
	this.shape_61.setTransform(-14.4,-21.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAZB7QgogMgkgpIgMgOIgDgEIgGgIQhIgbglgyIgBgCIASgDIAGgDQgcgHgLghIAAgBQA6gUA5AVIAFABIAbgiIBNgLIAJgBIACAGIANAEQALAEAKAHIAWAPIAJACQBLAgAUA9IAAAGIgHgCIgCgBIghgOQAKAGgIAKIgHAAQgWANgZgLQAGAKABAFQAOAUgFAMIgLABIgPAJIAcAqIgBACQgPAGgOADQgSAFgRAAQgRAAgPgEg");
	this.shape_62.setTransform(-14.6,-21.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAWB0QgngJgjgqIgMgOIgCgDIgHgGQhDgegmgxIABgBIARgCIABgDQgZgIgIgiIAAgCQA3gRA6AWIAEgBIAaggIBMgCIAIABIAEAFIALAEQALAFAJAGQALAHANgBIAIgBQBOAhANA6IgCAEIgHAAIgCgBIgfgQQACACgJAEIgHgBQgJAVgSgDQADALgFAAQARAVgRgBIgKgBIgHANIAYArIAAABQgOAHgNAFQgXAJgVAAQgLAAgLgCg");
	this.shape_63.setTransform(-14.8,-21);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AATBwQgmgGgjgqIgLgOIgCgCIgHgFQg+ghgngvIACgBIASgBIgEgCQgYgJgEgkIAAgCQA0gNA7AWIADgCIAaggIBJAJIAIACIAFAEIAKAFQALAEAJAFQAJAGAQgIIAHgDQBRAgAGA5IgFACIgGABIgCgBIgegSQgEgDgLgDIgGgDQACAfgKAGQAAALgKgEQATAWgdgOIgJgDIAAARIAVArIAAABIgZAPQgZAOgZAAIgOgCg");
	this.shape_64.setTransform(-14.9,-21.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AARBuQglgDgjgqIgLgPIgDgCQg9gkgpgwIAUAAQgfgGAAguQAxgKA7AXIAcgiIBIASIAWALIATAKQAKAFAXgWQBUAhgBA1IgOAEIgCgCIg5gpQAdBOgkgVQAZAZg1ghIAbBCIgXARQgdASgbAAIgGAAg");
	this.shape_65.setTransform(-15.1,-21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61}]}).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).wait(1));

	// Layer 23
	this.instance_12 = new lib.Tween68("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-1.2,-15.2);

	this.instance_13 = new lib.Tween67("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-4.8,-21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},2).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,x:-4.8,y:-21.7},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-46.4,43,40.3);


(lib.Symbol4copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 28
	this.instance = new lib.Tween78("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-24.3,-22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 27
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAAAZQgOgKgCgRQAOgFASAHQgHgHAIgR");
	this.shape.setTransform(-15,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AEB8DE").ss(0.1,1,1).p("AAAAjQgUgigGgkIAjA0QgEgRAHgSQADAXAMAZQgPgDgMAIg");
	this.shape_1.setTransform(-17.3,-38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("AgagjIAjA0QgEgRAHgSQADAXAMAZQgPgDgNAIQgTgigGgkg");
	this.shape_2.setTransform(-17.3,-38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 20
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AgcgWQAtARAMAc");
	this.shape_3.setTransform(-7.3,-32.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 19
	this.instance_1 = new lib.Tween62("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.7,-19.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AgNARQAFgXAWgK");
	this.shape_4.setTransform(-21.2,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 4
	this.instance_2 = new lib.Tween56("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-12.5,-24.4,1,1,60);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 10
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("AgighQARAwA0AT");
	this.shape_5.setTransform(-18.3,-13);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 11
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AhqBGQA2BLBTgmIgfgqQASAIAPgRQgGgogbgUQAkAUAmgHQAHgQgSgMIAsASQgVhPhJgn");
	this.shape_6.setTransform(-4.7,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AgKAWQgOgLAEgOQACgMAKgEQATgIAGANQAJAQgGAOQgQAKgOgEg");
	this.shape_7.setTransform(-6.7,-21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0057A8").s().p("AgKAWQgOgLAEgOQACgMAKgEQATgIAGANQAJAQgGAOQgLAHgJAAIgKgBg");
	this.shape_8.setTransform(-6.7,-21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Layer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("ABABEQhJgTgpg9IAfgHQghgKgMgbQA6gVA+AV");
	this.shape_9.setTransform(-28.3,-23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer 13
	this.instance_3 = new lib.Tween70("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-7.6,-19.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 22
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnAlQgHgOgFgNQgNgkADgjQAYgIAeAfIAIAMIABgYQAcASAQAdQAMASAFAZIhYAYIgOgbg");
	this.shape_10.setTransform(-17.2,-39.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 8
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0057A8").ss(1,1,1).p("AgZBAQgphDAFg6QAcgJAiAsIABgYQAwAfANA7");
	this.shape_11.setTransform(-17.2,-39.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer 26
	this.instance_4 = new lib.Tween74("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11.3,-29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 15
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0057A8").ss(1,1,1).p("AAMANIAFgNQgQgLgQgBQgBAOAcALg");
	this.shape_12.setTransform(-17.3,-21.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0057A8").s().p("AgPgMQAQABAQALIgFANQgcgLABgOg");
	this.shape_13.setTransform(-17.3,-21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// Layer 24
	this.instance_5 = new lib.Tween72("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16.1,-28.4,1,1,0,0,0,-11.3,-9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 21
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhJAvQhOgZglg2IAegHQgfgGgOggQA/gYA7AXIAcgiIBZgYIABAHQAmAHASAgQBUAhAbBKIgsgRQARAKgGATQgnAGgkgVQAZAZAJAlIghAJIAfAqQgdAKgcAAQhRAAg/hag");
	this.shape_14.setTransform(-14.4,-21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer 23
	this.instance_6 = new lib.Tween68("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.2,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-46.4,43,40.3);


(lib.Symbol4copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 28
	this.instance = new lib.Tween77("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-24.3,-22.4);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween78("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24.3,-22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},4).wait(1));

	// Layer 27
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(0.5,1,1).p("AAAAZQgOgKgCgRQAOgFASAHQgHgHAIgR");
	this.shape.setTransform(-15,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AEB8DE").ss(0.1,1,1).p("AAAAjQgUgigGgkIAjA0QgEgRAHgSQADAXAMAZQgPgDgMAIg");
	this.shape_1.setTransform(-17.3,-38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEB8DE").s().p("AgagjIAjA0QgEgRAHgSQADAXAMAZQgPgDgNAIQgTgigGgkg");
	this.shape_2.setTransform(-17.3,-38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(1));

	// Layer 20
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("Ag/AFQA2ANBJga");
	this.shape_3.setTransform(-9.9,-33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AgygBQAvgEA2AI");
	this.shape_4.setTransform(-8.5,-33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("AgcgWQAtARAMAc");
	this.shape_5.setTransform(-7.3,-32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 19
	this.instance_2 = new lib.Tween61("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.7,-30.9);

	this.instance_3 = new lib.Tween62("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10.7,-19.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},2).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:-10.7,y:-19.5,alpha:0},2).wait(3));

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AAuAFQgygGANgqQgNgCgWAeQgYAeAGAe");
	this.shape_6.setTransform(-17.9,-33.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AgkAkQgEgYATgYQARgYALABQgIAeAnAE");
	this.shape_7.setTransform(-18.8,-32.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AgcAcQgDgTAPgSQAMgRAIgBQgEASAeAC");
	this.shape_8.setTransform(-19.6,-32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("AgUAUQgBgOAJgLQAIgLAFgDQABAGAUgB");
	this.shape_9.setTransform(-20.4,-31.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0057A8").ss(1,1,1).p("AgNARQAFgXAWgK");
	this.shape_10.setTransform(-21.2,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Layer 4
	this.instance_4 = new lib.Tween55("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.9,-35.3);

	this.instance_5 = new lib.Tween56("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-12.5,-24.4,1,1,60);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,rotation:60,x:-12.5,y:-24.4,alpha:0},4).wait(1));

	// Layer 10
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0057A8").ss(1,1,1).p("AgRgtQAFAEADAFQAJALADAfQADARAHAPQAEALABgE");
	this.shape_11.setTransform(-22.9,-13.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0057A8").ss(1,1,1).p("AgUgqQADAEADAFQAJAOAGAaQAFAQAKANQAEAHABAA");
	this.shape_12.setTransform(-21.7,-13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0057A8").ss(1,1,1).p("AgZgnQADAEADAFQAJAQAKAWQAHAPALALQAFAFADAB");
	this.shape_13.setTransform(-20.6,-13.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0057A8").ss(1,1,1).p("AgdgkQACAEACAFQAJATAOASQAJANAOAJQAFAEAEAB");
	this.shape_14.setTransform(-19.4,-13.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0057A8").ss(1,1,1).p("AgighQARAwA0AT");
	this.shape_15.setTransform(-18.3,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// Layer 5
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0057A8").ss(1,1,1).p("AhQAWQAkAGAkgFQAhgFA4gq");
	this.shape_16.setTransform(-13,-11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhQAWQBXgpBKgFQg4AqghAFQgQACgQAAQgUAAgUgDg");
	this.shape_17.setTransform(-13,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).to({state:[]},1).wait(4));

	// Layer 11
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0057A8").ss(1,1,1).p("AgZB0QgVgogKgaIAAgBQAJABAbASQATAOABgNQAAgpgRgcQApAVAXAWQAFAGAEgNQAEgOgIgxQgEgbgRgZQgSgcgVgI");
	this.shape_18.setTransform(-2.2,-25.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0057A8").ss(1,1,1).p("Ag1BvQgHgTADgTQANABAbALQAQAFgBgJQgDgNgDgLQADgJABgOQgEgLgFgKQAKABADACQAYAPASAKQALgFAAgDQACgIgEgNQAFgJADgMQgBgDAAgEQgGgdgSgaQgUgcgYgL");
	this.shape_19.setTransform(-2.1,-24.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0057A8").ss(1,1,1).p("AhIBpQAGADASgLQAQAAAaAFQALgBgDgJQgDgMgGgNQAHgDAFgPQgDgMgDgLQABgGAAgDQAYAQAWAGQANgFAAgDQACgKgIgMQALgDAJgGQAAgCgBgDQgIgggTgaQgVgcgbgO");
	this.shape_20.setTransform(-2.8,-23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0057A8").ss(1,1,1).p("AhZBaQATAZAggFQAUABAYgCQAJgHgEgIQgIgNgHgMQANACAKgQQgDgNgFgMQgCgOgJgJQAaARAaADQAPgFAAgDQACgMgLgJQAQACAQAAQgBgBgBgEQgJghgVgbQgWgcgggR");
	this.shape_21.setTransform(-3.7,-21.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0057A8").ss(1,1,1).p("AhqBGQA2BLBTgmIgfgqQASAIAPgRQgGgogbgUQAkAUAmgHQAHgQgSgMIAsASQgVhPhJgn");
	this.shape_22.setTransform(-4.7,-19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(1));

	// Layer 2
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0057A8").s().p("AgCASIgFgCIgEgBIAAAAIgCgBIgFgDIgDgDIgDgDIACgDIAAgCQACgEAHgFQANgNALAIQAGAEAFAIQADAEAAAGIgFAJQgEACgJAAIgJgBg");
	this.shape_23.setTransform(-4.2,-37.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,22,42,0.251)").ss(0.3,1,1).p("AgXACQAAgBABgBQAKgMABgBQAOgKAJAIQAHAHADAGQADAFgBAGQgEAGgCACQgEADgIAAQgGgBgDAAQgDgBgDgCQgBAAgCgBQgBgBgBAAQgCgCgCgCQgCgCgBgCQgBgBAAgCg");
	this.shape_24.setTransform(-4.8,-33.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0057A8").s().p("AgDATIgGgDIgDgBIgCgBIgEgEIgDgEIgBgDIgBgBIABgCIALgNQAOgKAJAIQAHAHADAGQADAFgBAGIgGAIQgEADgIAAIgJgBg");
	this.shape_25.setTransform(-4.8,-33.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,44,84,0.502)").ss(0.5,1,1).p("AgWAAQAAAAABgBQAKgOABAAQAOgJAJAJQAGAHACAGQADAFgBAGQgEAHgCACQgFACgIABQgEAAgFgBQgDgCgCgBQgCgBgBgBQgCgBAAAAQgDgDgBgCQgBgCgBgCQgBgCAAgDg");
	this.shape_26.setTransform(-5.4,-29.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0057A8").s().p("AgFAUIgFgDIgDgCIgCgBIgEgFIgCgEIgBgFIAAAAIABgBQAKgOABAAQAOgJAJAJQAGAHACAGQADAFgBAGIgGAJQgFACgIABIgJgBg");
	this.shape_27.setTransform(-5.4,-29.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,65,126,0.749)").ss(0.8,1,1).p("AgWAAQABgCAAgBQAKgNACgBQAPgIAIAJQAFAJACAGQACAFgBAGQgFAHgCACQgGADgHAAQgDAAgHgBQgCgBgCgCQgCgBgBgBQgBgBgBgBQgCgDgBgDQgBgCAAgDQgBgCAAgBg");
	this.shape_28.setTransform(-6,-25.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0057A8").s().p("AgIAVIgEgDIgDgCIgCgCIgDgGIgBgFIgBgDIAAAAIABgDIAMgOQAPgIAIAJQAFAJACAGQACAFgBAGQgFAHgCACQgGADgHAAIgCAAIgIgBg");
	this.shape_29.setTransform(-6,-25.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#0057A8").ss(1,1,1).p("AgKAWQgOgLAEgOQACgMAKgEQATgIAGANQAJAQgGAOQgQAKgOgEg");
	this.shape_30.setTransform(-6.7,-21.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0057A8").s().p("AgKAWQgOgLAEgOQACgMAKgEQATgIAGANQAJAQgGAOQgLAHgJAAIgKgBg");
	this.shape_31.setTransform(-6.7,-21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23}]}).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).wait(1));

	// Layer 6
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#0057A8").ss(1,1,1).p("AA3ggQgCACgEABQgMADgXgDQgBAAgCAAQgCAAgBAAQgBgBAAAAQgCAAgCgBQgMgDgQgGQgCgBgCgBQgPgJgLgRQAFA/AuArQAOAQAIAFQAIAEAHAG");
	this.shape_32.setTransform(-28,-25.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#0057A8").ss(1,1,1).p("AAqBDQgHgFgIgEQgMgFgPgPQgYgVgPgYQgNgjgEgYQAMALAQAGQACABACABQAQAEAMACQACAAACAAQABAAABABQABAAABAAQACAAABAAQAWADANgBQAEAAADgC");
	this.shape_33.setTransform(-28.2,-24.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#0057A8").ss(1,1,1).p("AAzBCQgIgEgJgEQgPgGgSgPQgZgUgRgbQgJgdgHgaQANAGARADQABAAADABQAPACANACQACAAACAAQABAAAAABQABAAACAAQABAAACAAQAUACAPACQAEAAADgB");
	this.shape_34.setTransform(-28.4,-24.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#0057A8").ss(1,1,1).p("AA8BAQgJgDgJgDQgTgIgTgNQgcgVgUgeQgGgXgJgaQAPAAARAAQACAAACAAQAQAAANACQACAAACAAQAAAAABAAQABAAABAAQACAAABAAQATADAQADQAEABADAA");
	this.shape_35.setTransform(-28.5,-23.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0057A8").ss(1,1,1).p("ABABEQhJgTgpg9IAfgHQghgKgMgbQA6gVA+AV");
	this.shape_36.setTransform(-28.3,-23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32}]}).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).wait(1));

	// Layer 7
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E5EEF6").s().p("AAtBrQgLgTgMgoQgEgPgRgQIgggbQgvgrgEhBQAOAgAYAbQAsA3AugTQAWBgAPAgIgdAOg");
	this.shape_37.setTransform(-25.3,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).to({_off:true},1).wait(4));

	// Layer 13
	this.instance_6 = new lib.Tween69("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-4.8,-27.5);

	this.instance_7 = new lib.Tween70("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-7.6,-19.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:-7.6,y:-19.1,alpha:0},4).wait(1));

	// Layer 12
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-3.7,-37.5,1.553,0.888,-15,0,0,0.4,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(4));

	// Layer 22
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AghAJIAEgPQAHgRAIAAQAPAdAhASg");
	this.shape_38.setTransform(-28.4,-30.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEARQAAgJgCgIIgBgCIAIANIANANIAIAIIgEABIgWgQgAgVggQACgCAFANIAAADIACAEIAFAMQgJgOgFgQg");
	this.shape_39.setTransform(-26,-33);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AANAnIgIgKIgKgTQgQgYgEgbQAKgFAMATIADAHIAAgKIAFAIQAJAKAFAMQAFAKACAPIgOASIABgEg");
	this.shape_40.setTransform(-24,-35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgIAuIgIgNQgHgMgFgLQgPgfAAgeQARgGAVAYIAFAKIAAgRIALAJQANANAJAQQAIAOADAUIgxAVIgDgHg");
	this.shape_41.setTransform(-20.6,-37);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgnAlQgHgOgFgNQgNgkADgjQAYgIAeAfIAIAMIABgYQAcASAQAdQAMASAFAZIhYAYIgOgbg");
	this.shape_42.setTransform(-17.2,-39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38}]}).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).wait(1));

	// Layer 8
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#0057A8").ss(1,1,1).p("AAiAYQghgSgPgdQgIAAgHARIgEAP");
	this.shape_43.setTransform(-28.4,-30.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#0057A8").ss(1,1,1).p("AgjAZQgBgMgBgMQAAgVAHgKQANAGAOASQAYAOARAX");
	this.shape_44.setTransform(-25.2,-33.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#0057A8").ss(1,1,1).p("AggAnQgGgQgEgQQgFgbAGgTQASACAVAZQAgAMAPAj");
	this.shape_45.setTransform(-22.4,-35.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#0057A8").ss(1,1,1).p("AgdAzQgKgUgGgTQgLgiAEgcQAZgDAbAiQAoAKAOAv");
	this.shape_46.setTransform(-19.8,-37.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#0057A8").ss(1,1,1).p("AgZBAQgphDAFg6QAcgJAiAsIABgYQAwAfANA7");
	this.shape_47.setTransform(-17.2,-39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(1));

	// Layer 26
	this.instance_9 = new lib.Tween74("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-11.5,-31.5,0.8,0.8,-30,0,0,0.1,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).wait(1).to({regX:0,scaleX:1,scaleY:1,rotation:0,x:-11.3,y:-29.4},0).wait(1));

	// Layer 15
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgHAJQADAAgDgJIgCgOQAAgFACgBQADgBAEAEQACAFAEAKQAFAJAAAEQAAAHgEACQgCABgDAAQgCAAAAgC");
	this.shape_48.setTransform(-17.1,-30.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0057A8").s().p("AAGATIgXAAIARgKQACAAgCgJIgBgOQAAgFABgBQACgBAEAEQAEAFAEAKQAFAJAAAEQAAAHgEACIgFABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_49.setTransform(-17.9,-30.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#0057A8").ss(0.6,1,1).p("AgHASQAFgBAKgCQAHgLgFgHQgEgIgEgEQgCgDgDABQgCACAAAEQACAHACAFQABAHAAABQgOAJAEAAQAAAAADAAg");
	this.shape_50.setTransform(-17.7,-28.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0057A8").s().p("AgKASQgEAAAOgJQAAgBgBgHIgEgMQAAgEACgCQADgBACADQAEAEAEAIQAFAHgHALIgPADIgDAAg");
	this.shape_51.setTransform(-17.7,-28.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#0057A8").ss(0.7,1,1).p("AgBARQACgEAJgDQABgKgFgFQgEgGgDgDQgEgCgDAAQgBADAAAEQACAGADAFQADAFAAABQgHAHAFACQABAAABAAg");
	this.shape_52.setTransform(-17.5,-26);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0057A8").s().p("AgDARQgFgCAHgHIgDgGQgDgFgCgGQAAgEABgDQADAAAEACQADADAEAGQAFAFgBAKQgJADgCAEIgCAAg");
	this.shape_53.setTransform(-17.5,-26);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#0057A8").ss(0.9,1,1).p("AAFAPQADgFAFgEQgFgJgFgEQgDgEgFgCQgDgBgEAAQAAADABAEQABAFAEAEQADADACACQgBAFAFADQABAAABAAg");
	this.shape_54.setTransform(-17.4,-23.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0057A8").s().p("AADAPQgFgDABgFIgFgFQgEgEgBgFIgBgHQAEAAADABQAFACADAEQAFAEAFAJQgFAEgDAFIgCAAg");
	this.shape_55.setTransform(-17.4,-23.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#0057A8").ss(1,1,1).p("AAMANIAFgNQgQgLgQgBQgBAOAcALg");
	this.shape_56.setTransform(-17.3,-21.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0057A8").s().p("AgPgMQAQABAQALIgFANQgcgLABgOg");
	this.shape_57.setTransform(-17.3,-21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48}]}).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).wait(1));

	// Layer 16
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAnglIAQAeIhmApQgEACgDAC");
	this.shape_58.setTransform(-11.4,-13.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AAYCHQgSAIgOACQgLACgIgiQgKgtgJgMQgEgHg4hIQgegnAGgLQAEAHABgBQAAgBAAgIQACgTAHABQAHACAcAaQAbAaAWgOQAGg7ArgaQgCBWB1hbIgJDGQgCACgDACQgQATgXAUQgaAWgXAM");
	this.shape_59.setTransform(-19.3,-23.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgcBxQgKgtgJgMIg8hPQgegnAGgLQAEAHABgBIAAgJQACgTAHABQAHACAcAaQAbAaAWgOQAGg7ArgaQgCBWB1hbIgJDGIgFAEQgQATgXAUQgaAWgXAMIgGAEQgSAIgOACIgBAAQgLAAgHgggAAdCDIAAAAgABOBhQAXgUAQgTIAQAeIhoArQAXgMAagWg");
	this.shape_60.setTransform(-19.2,-23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]}).to({state:[]},1).wait(4));

	// Layer 24
	this.instance_10 = new lib.Tween71("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-16,-29.1,0.658,0.64,0,0,0,-11.2,-10.3);

	this.instance_11 = new lib.Tween72("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-16.1,-28.4,1,1,0,0,0,-11.3,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,regX:-11.3,regY:-9.6,scaleX:1,scaleY:1,x:-16.1,y:-28.4},4).wait(1));

	// Layer 21
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AARBuQglgDgjgqIgLgPIgDgCQg9gkgpgwIAUAAQgfgGAAguQAxgKA7AXIAcgiIBIASIAWALIATAKQAKAFAXgWQBUAhgBA1IgOAEIgCgCIg5gpQAdBOgkgVQAZAZg1ghIAbBCIgXARQgdASgbAAIgGAAg");
	this.shape_61.setTransform(-15.1,-21.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AATBwQgmgGgjgqIgLgOIgCgCIgHgFQg+ghgngvIACgBIASgBIgEgCQgYgJgEgkIAAgCQA0gNA7AWIADgCIAaggIBJAJIAIACIAFAEIAKAFQALAEAJAFQAJAGAQgIIAHgDQBRAgAGA5IgFACIgGABIgCgBIgegSQgEgDgLgDIgGgDQACAfgKAGQAAALgKgEQATAWgdgOIgJgDIAAARIAVArIAAABIgZAPQgZAOgZAAIgOgCg");
	this.shape_62.setTransform(-14.9,-21.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAWB0QgngJgjgqIgMgOIgCgDIgHgGQhDgegmgxIABgBIARgCIABgDQgZgIgIgiIAAgCQA3gRA6AWIAEgBIAaggIBMgCIAIABIAEAFIALAEQALAFAJAGQALAHANgBIAIgBQBOAhANA6IgCAEIgHAAIgCgBIgfgQQACACgJAEIgHgBQgJAVgSgDQADALgFAAQARAVgRgBIgKgBIgHANIAYArIAAABQgOAHgNAFQgXAJgVAAQgLAAgLgCg");
	this.shape_63.setTransform(-14.8,-21);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAZB7QgogMgkgpIgMgOIgDgEIgGgIQhIgbglgyIgBgCIASgDIAGgDQgcgHgLghIAAgBQA6gUA5AVIAFABIAbgiIBNgLIAJgBIACAGIANAEQALAEAKAHIAWAPIAJACQBLAgAUA9IAAAGIgHgCIgCgBIghgOQAKAGgIAKIgHAAQgWANgZgLQAGAKABAFQAOAUgFAMIgLABIgPAJIAcAqIgBACQgPAGgOADQgSAFgRAAQgRAAgPgEg");
	this.shape_64.setTransform(-14.6,-21.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhJAvQhOgZglg2IAegHQgfgGgOggQA/gYA7AXIAcgiIBZgYIABAHQAmAHASAgQBUAhAbBKIgsgRQARAKgGATQgnAGgkgVQAZAZAJAlIghAJIAfAqQgdAKgcAAQhRAAg/hag");
	this.shape_65.setTransform(-14.4,-21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61}]}).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).wait(1));

	// Layer 23
	this.instance_12 = new lib.Tween67("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-4.8,-21.7);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween68("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-1.2,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({_off:false},0).to({_off:true,x:-1.2,y:-15.2},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-40,39.2,32.2);


(lib.Symbol4copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 20
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(-25,-26.6,1,1,-60,0,0,-0.1,-0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 19
	this.instance_1 = new lib.Tween36("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.7,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABPgmQgCAAhAArQgygGAPgqQgPgCgWAeQgYAeAGAe");
	this.shape.setTransform(-14.6,-33.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AhxhiQgSgHgMgUQAFA/AuAtQAQAQAIADQAOAHAIAMQAJAMAFAgQADASAHAPQAEAKAFAGQADADACgCQACgCAzAKQA0ALAogoQAJgSgDgT");
	this.shape_1.setTransform(-19.2,-19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAgQg1gLgCACQgCADgDgEQBJgxBTgGQADAUgJAPQgfAggoAAQgIAAgLgCg");
	this.shape_2.setTransform(-12.7,-10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 11
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AgZB0QgVgogKgaIAAgBQAJABAbASQATAOABgNQAAgpgRgcQApAVAXAWQAFAGAEgNQAEgOgIgxQgEgbgRgZQgSgcgVgI");
	this.shape_3.setTransform(-2.2,-25.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 2
	this.instance_2 = new lib.Tween32("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.7,-35.4,0.809,0.809,-15,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 6
	this.instance_3 = new lib.Tween28("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26.9,-29.1,1,1,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5EEF6").s().p("AAtBrQgLgTgMgoQgEgPgRgQIgggbQgvgrgEhBQAOAgAYAbQAsA3AugTQAWBgAPAgIgdAOg");
	this.shape_4.setTransform(-25.3,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 9
	this.instance_4 = new lib.Tween30("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.4,-17.8,0.702,0.702,-30,0,0,4.7,3.6);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 13
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5EEF6").s().p("Ag/BBQgSgbADgaIAeAQQgJgLABgdQABghALgGQACAHAGAHQAMAOAVAGIgMgmQgIglAWgCQA8gDAQBPQAFAXAAAeIgCAcQAAADgjgYIgjgYQgDAIAHAjIAHAhQgwgbgBgBIAKAdQgZgCgSgcg");
	this.shape_5.setTransform(-4.9,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 12
	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-3.7,-37.5,1.553,0.888,-15,0,0,0.4,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 8
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AAjAYQgigSgPgdQgIAAgHARIgFAP");
	this.shape_6.setTransform(-28.3,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 15
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgHAJQADAAgDgJIgCgOQAAgFACgBQADgBAEAEQACAFAEAKQAFAJAAAEQAAAHgEACQgCABgDAAQgCAAAAgC");
	this.shape_7.setTransform(-17.1,-30.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0057A8").s().p("AAGATIgXAAIARgKQACAAgCgJIgBgOQAAgFABgBQACgBAEAEQAEAFAEAKQAFAJAAAEQAAAHgEACIgFABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_8.setTransform(-17.9,-30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Layer 16
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAnglIAQAeIhmApQgEACgDAC");
	this.shape_9.setTransform(-11.4,-13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AAYCHQgSAIgOACQgLACgIgiQgKgtgJgMQgEgHg4hIQgegnAGgLQAEAHABgBQAAgBAAgIQACgTAHABQAHACAcAaQAbAaAWgOQAGg7ArgaQgCBWB1hbIgJDGQgCACgDACQgQATgXAUQgaAWgXAM");
	this.shape_10.setTransform(-19.3,-23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcBxQgKgtgJgMIg8hPQgegnAGgLQAEAHABgBIAAgJQACgTAHABQAHACAcAaQAbAaAWgOQAGg7ArgaQgCBWB1hbIgJDGIgFAEQgQATgXAUQgaAWgXAMIgGAEQgSAIgOACIgBAAQgLAAgHgggAAdCDIAAAAgABOBhQAXgUAQgTIAQAeIhoArQAXgMAagWg");
	this.shape_11.setTransform(-19.2,-23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer 18
	this.instance_6 = new lib.Symbol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-18.6,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-40,39.2,33.9);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.Tween45("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-6.2,-1);

	this.instance_1 = new lib.Tween46("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.6,0.6,1,0.295,0,42.2,0,0,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({startPosition:0},0).to({_off:true,regY:0.5,scaleY:0.3,skewX:42.2,x:-5.6,y:0.6},4).to({_off:false,regY:0,scaleY:1,skewX:0,x:-6.2,y:-1},5).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},4).to({_off:true,regY:0,scaleY:1,skewX:0,x:-6.2,y:-1},5).wait(11));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0057A8").s().p("ABJCxQAAABAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQACgYgIgYIgJATQgHAOgCALQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAgIQABgWAQgWQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABgBABAAQABAAAAAAQABABAAAAQABAAAAABQAKAZgGAcQANgUAFgfQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIACgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIABABIAAABQAKATgCAVQAOgTAIgWIAHgTIADgOIACgMQADgfgIgdIgFgKIAAgBIABAAIAAAAIACADQARAegGAtIgEAVIAAABQAEACAEAEQAGAIAAAPIAAAAIAQgsQAHgZAAgZQABgXgJgTQgEgJgHgKIgMgMQgFACgLgDQgLgEgHgFQgYAbAKAnQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBAAAAIgDgLQgDgNACgNQADgUAMgLIgDgCQgJgJAAgGIAAAAIgIACIgSACIgkAHQguAIgXADIgBgBIABgBIgBAAQgFgTABgMQgnAbgDAfIgCABIgBgBQgBgVAPgTQAGgHAHgGQgWgbgCgwIAAgLQABgJgGABQgHACgIAMQgNARgDAeIAAAAIAGATIAKATIAJANIADAEIAPgLQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAABIgQANQAAAAgBABQAAAAAAAAQgBAAAAAAQAAgBgBAAIAAAAIgBAAQgMgHgLgbQgIgSgEgcQgFAHAAAJQgBAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAgBIgBgCIgDgGQgIgQAAgPQAAgOgBgEQgCgKgIAKQgIALgGAZQgGAYgBAbQgBAvAPAzQAMAtAZAlIABACQAAADgDACQgEADgDgEQgWgagMgqQgOgvgDgqQgDgwAMgpQAIgVAGgIQAJgMAHACQAIADgBARQgCAYAIATQgBgKAJgKQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAEAVQgBgSAMgUQAQgbANAGQAHADAAAJQgBARADAOQAEAUASAgIAMgJIADgBIACABQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAKQAFgHALgFQAQgIAOADIABABIAAACIgEAVIAAAHIAAADIAXgFIAkgGIAcgFQAEgEAKgEQAWgLAKANQAHAIACAKQACAJgCAGQAOALAKAYQAJASAAAZQgBA1ggAzIAAAAIAAAAIgCABIgBgBQgCgSgKgJIgBgCIAAAAQgKAggVAXQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAgBQgCgQgEgMQgGAWgTAUIAAAAIgBgBgAAOhXQgbAGgQAWIgBABIgCANIAAAAIAmgJIAAgEIACgIIAHgVIAAgBIgBABgAiGgUQgdgoAHguQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAACQgCAmAZAqIAGgIIAMgKIAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAgBABIgOAQIgCADIgCACIgBAAIgCgBg");
	this.shape.setTransform(0.1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2CDE5").s().p("AguCIQgIgSgCgTIAAgOQAGAPATAJQAJAFAIACQgMgTACgRIAEgOQAPARATAFIARABIABAAQABARABAKIAGAYIgBAAIgFABQgSAFgQAAQgYAAgWgKgACNBaIAAAAIAEgWQAGgtgRgcIAQAYQAOAjgPArQgEgFgEgCgACDgIIAAAAIABAAgAich1QAIAiAKAJQgBgEACgIIADgFQgBANAKANQAFAHAFAEIAAAAIgMAJIgGAIQgZgpACgngAhchAIgBgDQgRgdAGgbIAJgVQgDARAIAeQgBgEACgJIADgIQgBAUAOAbIAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgPAKIgDgDg");
	this.shape_1.setTransform(0.2,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5EEF6").s().p("AgiA5QAAgBAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAIgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQgPAWgCAXIgEgNIAAAAIgFgYQgCgJAAgSIgBAAQABgjAXgKIABAHQADAGAEAEQgBgNACgRQAEgiATgNIABAFQABAIAGAMIgBgKIADAMQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgJgqAVgaQAIAFALADQAKADAGgBIALALQAIAKAEAKQAJAUgBAXQAAAYgHAYIgQAtIAAAAQAAgPgHgIQAQgqgOgiIgRgZIgCgDIAAgBIAAAAIAAAAIgBABIAFALQAJAcgDAeIgCALIgEAOIgBAAIgFAUQgJAVgNAUQACgVgIgUIgBAAIgBgCQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBABIgCABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQgFAegMAUQAGgbgLgZg");
	this.shape_2.setTransform(10.7,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAECkQg7gEg8gyIgBgCQgZglgMgtQgOgzAAgvQABgbAGgYQAHgZAHgLQAIgKACAKQABAEAAAOQABAPAHARIADAGIAAAAIABABQAAABAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAgJAFgHQAFAcAHASQAMAbAMAHIABAAIAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAQgNIAAAAIABgBQgPgbACgVIgDAIQgDAKABAEQgIgeAEgSIgJAWQgGAbAQAdIACACIgKgNIgKgTIgGgTIAAAAQAEgeAMgRQAIgMAHgCQAGgBgBAJIABALQACAwAVAbQgHAGgFAHQgPATABAVIABABIABgBQAEgfAngaQgCAMAGASIAAAAIAAABIABABQAVgDAvgIIAkgHIATgCIAIgCIAAAAQAAAGAJAJIACACQgMAMgCATQgCALACAPIABAJQgGgMgBgHIgBgFQgTAMgEAjQgCARABAOQgEgEgDgIIgBgHQgXANgBAiIgRgBQgVgEgOgRIgEAOQgBARALATQgIgCgJgFQgSgKgHgOIABAOQACATAIASQAiAQAugLIgFABQgOAEgQAAIgIgBgAiRhkQgGAuAdAoQAAABAAAAQABAAAAABQAAAAABgBQAAAAABAAIABgBIACgEIAOgQQABAAAAgBQABAAAAAAQgBAAAAAAQgBgBAAAAQgGgEgEgGQgKgOABgNIgDAGQgDAHABAFQgKgJgHgiIAAgCIgBgBIgBABgACnCQIABAAIgBABgACTBpIABABIgGAUgACXB0IAAgBIACACIgCgBgAgUgnIABgMIABgCQARgWAbgGIABAAIgIAVIgBAIIAAAFIgmAJg");
	this.shape_3.setTransform(-1.1,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(25));

	// Layer 21
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.9,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25));

	// Layer 20
	this.instance_3 = new lib.Symbol8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-13.5,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("ABbgKQgEABgEABQgHABgMABIgkAGQgRACgMACQgZAEgOACQgCAAAAgBAgrAGQgIgOAFgTIgNAIQgbAVgEAa");
	this.shape_4.setTransform(0.8,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(0.4,1,1).p("AAAABQAAgBAAAA");
	this.shape_5.setTransform(-3.6,-4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).wait(1));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AB0CcQhQAchfhLQgegjgOgxQgPgvAEgkQAFglAEgUQAJgqAGgGQgBAGAEARQAEAQAQAV");
	this.shape_6.setTransform(-6.8,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(25));

	// Layer 11
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AAlhTQADAFACAGQAJAcgDAfQgBAGgBAGQgCAFgCAHIgGAUQgJAVgNAUQACgWgKgTQAAAAgBgBQAAAAgBgBQgBgBgCAAQgBAAAAABQgBACABADQgFAegMAUQAGgcgLgZQgBgDgDACQgBAAAAABQgCgBgCACQgKAOgEAPQgCAIgBAI");
	this.shape_7.setTransform(9.5,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(25));

	// Layer 2
	this.instance_4 = new lib.Tween31("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(12.7,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	// Layer 6
	this.instance_5 = new lib.Tween27("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-11.3,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

	// Layer 7
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5EEF6").s().p("AgBBfQgUghgLgoQgJggACguQACgqAJgVIACA8QAMBDAuAnIgBAQQAAAUAKAUIgaARQgIgIgIgRg");
	this.shape_8.setTransform(-14.4,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(25));

	// Layer 9
	this.instance_6 = new lib.Tween29("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.7,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	// Layer 13
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E5EEF6").s().p("AgOBuQAHgbgLgZQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIgBABQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgNATgDATIgBAHIgDgJIgCgEIABAAIgGgYQgBgJAAgSIgBAAQAAgjAXgKIACAGQACAHAFAEQgBgNABgRQAFgiATgNIAAAFQAAAIAGAMIgBgKIADAMQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQgJgqATgdQALAIAMADQAKADAGgBIgQAoIAAgBIAAABIgBAAIACADIADAIQAIAcgCAeIgCALIgEAPIgCgBIgFAUQgIAVgOAUQACgVgKgTIAAgBIgBgBQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAABABQgDAegMAUIgBABg");
	this.shape_9.setTransform(9.1,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(25));

	// Layer 12
	this.instance_7 = new lib.Symbol5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(15.8,-3.1,1,1,0,0,0,0.1,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25));

	// Layer 8
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0057A8").ss(1,1,1).p("AAeAvQgOgPgEgSQgCgIABgSQAAgbgGgGQgFgGgMAUQgOATgDAh");
	this.shape_10.setTransform(-8.8,-12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(25));

	// Layer 16
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiSihQAGA2AjAPIAjhDQADBEAtA1ICFgRIA7AhIhuC0QhOARhhg8QhaiZA7h7g");
	this.shape_11.setTransform(-1.2,-0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhzBzQhaiZA7h7QAGA2AjAPIAjhDQADBEAtA1ICFgRIA7AhIhuC0QgRAEgSAAQhAAAhMgvg");
	this.shape_12.setTransform(-1.2,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

	// Layer 18
	this.instance_8 = new lib.Symbol6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-18.1,38.4,36.6);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 21
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(-8.9,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,x:-17.8,y:-20.1,alpha:0},5).to({_off:true},4).wait(1));

	// Layer 20
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.5,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:-0.1,rotation:-60,x:-25,y:-26.6,alpha:0},9).wait(1));

	// Layer 19
	this.instance_2 = new lib.Tween35("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.1,-15.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween36("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8.7,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({_off:true,x:-8.7,y:-30.9,alpha:1},4).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABbgKQgEABgEABQgHABgMABIgkAGQgRACgMACQgZAEgOACQgCAAAAgBAgrAGQgIgOAFgTIgNAIQgbAVgEAa");
	this.shape.setTransform(0.8,-5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(0.4,1,1).p("AAAABQAAgBAAAA");
	this.shape_1.setTransform(-3.6,-4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AhYAeQABgVARgRQAUgRAGgEQgGAWANANQARABAUgEQAOgDAQgBQARgEARgEQAMgBAGgCQAEgBADAA");
	this.shape_2.setTransform(-0.9,-8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AhXAfQAAgWATgSQAVgTAGgDQgHAZASAMQAQgBATgEQANgBAPgDQAQgFAQgDQALgDAFgBQAEgBADAA");
	this.shape_3.setTransform(-2.6,-11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AhVAhQgBgXATgUQAWgUAHgCQgIAbAWALQAQgCARgEQAMgCAOgDQAQgFAOgEQAKgDAGgBQADgBADAA");
	this.shape_4.setTransform(-4.3,-14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("AhUAjQgCgYAUgWQAXgVAHgCQgJAeAcAKQAPgDAPgDQAMgEAMgDQAPgGANgEQAKgDAFgBQADgBACAA");
	this.shape_5.setTransform(-6,-17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AhTAlQgDgaAVgXQAZgXAHgBQgLAgAhAJQAMgEAQgDQALgEAMgEQAOgFAMgEQAJgDAEgCQADgBACgB");
	this.shape_6.setTransform(-7.7,-21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AhRAnQgEgaAWgaQAZgYAIgBQgMAjAmAIQAMgFAOgEQAKgEAKgEQAOgGAKgEQAJgDAEgDQACgBACAA");
	this.shape_7.setTransform(-9.5,-24.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AhQApQgEgcAWgbQAbgaAIAAQgNAmAoAHQAOgFAMgFQAJgFAKgEQAMgHAKgEQAHgEAEgCQACgBACAA");
	this.shape_8.setTransform(-11.2,-27.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("AhOArQgGgdAYgcQAbgcAJAAQgOApAtAGQANgGAKgGQAJgFAIgEQAMgHAIgFQAIgEADgCQACgBABAA");
	this.shape_9.setTransform(-12.9,-30.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0057A8").ss(1,1,1).p("ABPgmQgCAAhAArQgygGAPgqQgPgCgWAeQgYAeAGAe");
	this.shape_10.setTransform(-14.6,-33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Layer 5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0057A8").ss(1,1,1).p("AB0CcQhQAchfhLQgegjgOgxQgPgvAEgkQAFglAEgUQAJgqAGgGQgBAGAEARQAEAQAQAV");
	this.shape_11.setTransform(-6.8,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0057A8").ss(1,1,1).p("AhKhrQgPgUgEgPQgJgNgHAnQgDAVgCAjQgBAMACAOQADARAEARQADAIAEALQACAFACAFQAIAWAKAUQAIAQALANQAJAKAHAEQAbARAaAHQA4ARAwgT");
	this.shape_12.setTransform(-8,-2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0057A8").ss(1,1,1).p("AhPhnQgPgSgFgOQgJgLgFAlQgBAWAAAhQAAAMADAOQAEAQAFAOQAEAJAFALQABAFADAEQAHAVAKAWQAIAPAKAOQAJALAHADQAZAPAbADQA4ALAtgW");
	this.shape_13.setTransform(-9.4,-4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0057A8").ss(1,1,1).p("AhThjQgPgQgGgOQgIgHgEAiQAAAWADAgQABAMAEAMQAGARAGAMQAEAJAFAKQACAEACAFQAIATAJAXQAHARAKANQAJAMAHADQAXAMAdgBQA3AEArgX");
	this.shape_14.setTransform(-10.8,-7.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0057A8").ss(1,1,1).p("AhXhhQgOgOgHgOQgIgEgCAgQACAXAFAeQACALAFAMQAHARAGAKQAGAIAFAKQACAEADAFQAIARAIAZQAGARAJAOQAKAMAGACQAVAKAfgFQA3gCAogZ");
	this.shape_15.setTransform(-12.3,-9.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0057A8").ss(1,1,1).p("AhbhgQgOgNgHgNQgIgBAAAeQAEAXAHAcQADALAFAMQAKAQAGAJQAGAHAGAJQACAFADAEQAIARAIAaQAGARAIAOQAJANAGACQAUAHAhgJQA1gIAmgb");
	this.shape_16.setTransform(-13.8,-11.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0057A8").ss(1,1,1).p("AhfhgQgNgLgIgMQgHACACAbQAEAYAKAbQAEAKAGALQALAQAHAIQAHAGAGAJQADAEADAEQAIAQAHAcQAFAQAIAPQAJAOAFABQASAFAjgOQA1gOAjgd");
	this.shape_17.setTransform(-15.4,-13.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0057A8").ss(1,1,1).p("AhihgQgNgIgIgNQgHAGADAZQAGAYAMAZQAFAKAIAKQAMARAIAGQAHAFAGAIQAEAEACAFQAJANAGAeQAEARAIAPQAJAOAFABQAPACAmgRQA1gVAfgf");
	this.shape_18.setTransform(-16.9,-15.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0057A8").ss(1,1,1).p("AhlhhQgNgGgJgMQgGAIAFAXQAHAZAPAXQAGAKAIAKQAOAQAIAEQAJAFAGAIQAEAEADAEQAIAMAGAfQADASAHAOQAJAQAFAAQANAAAogWQA0gaAdgi");
	this.shape_19.setTransform(-18.5,-17.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0057A8").ss(1,1,1).p("AhmhcQgSgHgMgUQAFA/AuAtQAQAOAIAFQAOAHAIAMQAJAMAFAgQADASAHAPQAHAQAEgBQAOgCApgaQA0ghAagj");
	this.shape_20.setTransform(-20.3,-20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Layer 11
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0057A8").ss(1,1,1).p("AAlhTQADAFACAGQAJAcgDAfQgBAGgBAGQgCAFgCAHIgGAUQgJAVgNAUQACgWgKgTQAAAAgBgBQAAAAgBgBQgBgBgCAAQgBAAAAABQgBACABADQgFAegMAUQAGgcgLgZQgBgDgDACQgBAAAAABQgCgBgCACQgKAOgEAPQgCAIgBAI");
	this.shape_21.setTransform(9.5,8.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0057A8").ss(1,1,1).p("AgvBRQAAgIACgJQAHgSAHgIQAEAAABgBQADgBABADQACADABAEQAGAMAAAJQAAAJgCAIQALgVADgeQgBgCACgBQACgBACABQABABAAABQAAAAABABQALASAAAVQADgDACgDQAEgEAEgIQAFgKAEgMQACgKADgKQABgEAAgDQABgEABgCQAAgHABgFQAAgOgBgMQgCgSgHgQQgCgGgDgE");
	this.shape_22.setTransform(8.1,4.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0057A8").ss(1,1,1).p("AgvBUQABgHAAgJQAGgSAJgFQAEAAABgBQADAAABACQACADABADQAHANABAHQAAAFgCAHQAJgWABgcQAAgCADgBQACAAABABQABABAAAAQABABAAAAQANASACAUQADgCACgDQAEgDAEgIQAFgKADgOQACgKACgKQABgEAAgCQABgGAAgCQABgGAAgGQgBgOgCgMQgEgSgHgPQgDgGgEgE");
	this.shape_23.setTransform(6.8,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0057A8").ss(1,1,1).p("AgJBLQAFgVgBgXQAAgBADAAQADAAACABQAAABABAAQAAABAAAAQAPASAFATQACgCACgBQAFgDADgIQAFgKACgPQACgLABgLQABgDAAgDQAAgDABgEQAAgGAAgGQgCgOgDgNQgFgSgIgOQgEgGgEgEAgJBLQAAADgCADAgvBWQABgGgBgLQAGgQAJgDQAFAAAAAAQADgBACADQACACABADQAJANABAEQAAAAAAAB");
	this.shape_24.setTransform(5.5,-3.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0057A8").ss(1,1,1).p("AgIBLQAEgWgDgYQABAAADAAQADAAACACQABAAAAABQAAAAABABQAQARAHASQACgBACgBQAFgBAEgJQAEgKABgQQACgLABgLQAAgDAAgEQAAgCAAgFQAAgGgBgHQgCgNgEgNQgGgTgJgNQgFgGgEgEAgvBYQABgFgBgMQAFgPAKgBQAEAAABAAQADAAACACQABADACACQAIAKADADQAAABAAABQAAABgBABQAAgCABgC");
	this.shape_25.setTransform(4.2,-7.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#0057A8").ss(1,1,1).p("AguBaQAAgFgCgMQAEgOALAAQAFABABABQADAAABACQACACACADQAMAMABgBQAAgBgCgBQAFgYgGgZQACgBADABQAEABABACQABAAAAABQABAAAAABQATAQAIARQACAAADAAQAEAAAEgKQAEgKABgRQAAgLABgMQAAgDAAgDQAAgDAAgFQgBgHgBgGQgCgOgGgOQgHgSgLgMQgEgFgFgF");
	this.shape_26.setTransform(2.9,-11.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#0057A8").ss(1,1,1).p("AgvBbQABgDgDgNQADgOAMADQAFABABABQADAAACACQABACACACQAOANABgDQAAgEgBgDQACgagHgYQACABAEAAQAFACAAACQABAAAAABQABAAAAABQAVAPAKARQACAAADABQAFACADgMQAEgJAAgTQAAgKAAgNQAAgDAAgCQAAgFgBgEQgBgHgCgHQgDgOgGgNQgJgTgLgMQgFgFgGgD");
	this.shape_27.setTransform(1.7,-15.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#0057A8").ss(1,1,1).p("AgvBdQAAgDgEgOQAEgMAMAEQAFACABACQADAAACACQACABABACQARANAAgGQAAgGgBgGQABgagJgXQACABAEABQAFACACACQAAABAAAAQAAAAABABQAWAPAMAQQADABACABQAFADAEgMQADgJgBgUQAAgLgBgNQAAgCAAgDQgBgFAAgFQgCgHgBgGQgEgOgHgOQgKgTgNgLQgGgFgGgD");
	this.shape_28.setTransform(0.4,-19.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#0057A8").ss(1,1,1).p("AgwBfQABgCgFgPQACgLAOAGQAFADABABQACABADABQABACACABQASAOABgJQAAgJgBgIQgBgbgLgWQADACAEABQAGADACACQABAAAAABQAAAAAAABQAXAOAOAPQADACACACQAFAEAEgNQADgJgCgVQAAgLgBgOQgBgBAAgEQgBgFgBgFQgBgHgDgHQgEgOgIgOQgMgTgNgKQgHgFgEgD");
	this.shape_29.setTransform(-0.8,-23.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#0057A8").ss(1,1,1).p("AguBhQAAgCgKgaIAAAAQAJABAbASQATANABgMQAAgqgRgcQApAVAXAXQAFAFAEgNQAEgOgIgwQgEgcgRgYQgSgdgVgI");
	this.shape_30.setTransform(-2.2,-27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).wait(1));

	// Layer 2
	this.instance_4 = new lib.Tween31("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(12.7,-3.1);

	this.instance_5 = new lib.Tween32("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-3.7,-35.4,0.809,0.809,-15,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,regX:0.1,regY:-0.1,scaleX:0.81,scaleY:0.81,rotation:-15,x:-3.7,y:-35.4},9).wait(1));

	// Layer 6
	this.instance_6 = new lib.Tween27("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-11.3,-8.5);

	this.instance_7 = new lib.Tween28("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-26.9,-29.1,1,1,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,rotation:-60,x:-26.9,y:-29.1},9).wait(1));

	// Layer 7
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E5EEF6").s().p("AgBBfQgUghgLgoQgJggACguQACgqAJgVIACA8QAMBDAuAnIgBAQQAAAUAKAUIgaARQgIgIgIgRg");
	this.shape_31.setTransform(-14.4,-1.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E5EEF6").s().p("AAMBxQgGgIgGgLQgHgQgIgRIgNghIgCgIQgFgOgDgOQgEgWgBgaQAAgoAIgXIAFA7IADANQASA5AqAcIgBATQADAZAJAVIgYAQIgCABIgGgHg");
	this.shape_32.setTransform(-15.5,-3.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E5EEF6").s().p("AAVB3IgGgHQgGgHgGgMQgHgPgHgTIgOggIgDgIQgGgNgEgOQgHgWgCgYQgCgoAHgZQADAeAFAcIAEAMQAVA5AqAXIABAVQAEAeAKAVIgZAQIgCAAg");
	this.shape_33.setTransform(-16.6,-5.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E5EEF6").s().p("AAZB3IgGgHQgGgIgGgLQgHgQgGgTQgGgQgJgQIgEgIIgNgaQgIgVgDgYQgFgmAGgbQAFAdAGAcIAEALQAZA5ArAQIACAYQAFAjALAWIgaAPIgCAAg");
	this.shape_34.setTransform(-17.8,-7.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E5EEF6").s().p("AAeB3IgHgIQgGgIgFgLQgJgQgFgUQgFgPgLgRIgEgHIgPgZQgKgVgFgYQgGglAEgcQAGAcAIAbIAFAMQAdA3AqALIADAaQAIApAKAWIgaAPIgBAAg");
	this.shape_35.setTransform(-19,-9.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E5EEF6").s().p("AAiB2IgHgIIgLgTQgHgQgHgUQgEgQgLgRIgGgHIgRgYQgMgUgGgXQgJgkADgeQAHAcALAaIAFALQAgA3ArAFIAEAdQAJAtALAXIgaAPIgCgBg");
	this.shape_36.setTransform(-20.3,-12);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E5EEF6").s().p("AAnB2IgHgIIgLgVQgHgPgHgVQgFgQgLgQIgHgHIgTgYQgOgSgHgYQgLgiABggQAJAcAMAZIAGAKQAkA3ArAAIAFAeQALAzALAXIgbAPIgBgBg");
	this.shape_37.setTransform(-21.5,-14.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E5EEF6").s().p("AArB2IgHgJIgLgUQgGgQgHgWQgFgPgNgQIgGgHIgWgXQgQgSgIgWQgNgigBgiQALAbAOAZIAGAKQAoA4ArgHIAHAgQAMA3ALAYIgbAPIgCgBg");
	this.shape_38.setTransform(-22.7,-16.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E5EEF6").s().p("AAxB1IgIgJQgFgIgFgMQgHgQgHgWQgEgQgOgQIgIgHIgXgVQgSgSgLgWQgOgggCgkQALAbAQAXIAHALQArA3AsgNIAIAiQAOA9AMAZIgcAOIgBgCg");
	this.shape_39.setTransform(-24,-18.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E5EEF6").s().p("AAtBrQgLgTgMgoQgEgPgRgQIgggbQgvgrgEhBQAOAgAYAbQAsA3AugTQAWBgAPAgIgdAOg");
	this.shape_40.setTransform(-25.3,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31}]}).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).wait(1));

	// Layer 9
	this.instance_8 = new lib.Tween29("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.7,11.9);

	this.instance_9 = new lib.Tween30("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-9.4,-17.8,0.702,0.702,-30,0,0,4.7,3.6);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,regX:4.7,regY:3.6,scaleX:0.7,scaleY:0.7,rotation:-30,x:-9.4,y:-17.8,alpha:0},9).wait(1));

	// Layer 13
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E5EEF6").s().p("AgOBuQAHgbgLgZQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIgBABQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgNATgDATIgBAHIgDgJIgCgEIABAAIgGgYQgBgJAAgSIgBAAQAAgjAXgKIACAGQACAHAFAEQgBgNABgRQAFgiATgNIAAAFQAAAIAGAMIgBgKIADAMQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQgJgqATgdQALAIAMADQAKADAGgBIgQAoIAAgBIAAABIgBAAIACADIADAIQAIAcgCAeIgCALIgEAPIgCgBIgFAUQgIAVgOAUQACgVgKgTIAAgBIgBgBQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAABABQgDAegMAUIgBABg");
	this.shape_41.setTransform(9.1,6.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E5EEF6").s().p("AgIBtQAAgbgJgXIAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAAAABIgGAKQgIAMgDALIgCAFIgDgJIgCgCIAAgBIABgBIgHgXQgBgKgBgSIgBAAQACgTALgKQAEgHAHgEIACAEQACAHAEACIgBgJQAAgIABgMQACgNAFgKQADgGAEgEQAEgGAGgCIABAEQAAAIAGAKIABgBIgBgIIACAJIABAAQgDgKAAgJQgDgeAQgUIACABQAKAGAKADQAKADAGgBIgLAnIAAgBIAAABIABAEIAEAIQAEANABANQACAQgBAPIgCAMIgBAHIgCAHIgBgBIgFAVQgGAQgOANIgEAEQgBgPgGgPIgEgGIAAgBIgBgBQAAAAAAAAQgBgBAAAAQAAAAgBABQAAAAAAAAIgCABQgCACABADIgDAPQgCAVgGANIgBABIgBAAg");
	this.shape_42.setTransform(7.3,2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E5EEF6").s().p("AgFBqQgFgagIgTIAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABIgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIgEALQgJAKgFAJIgCAEIgEgJIgCgDIAAgBIABgBIgHgXQgCgKAAgSIgBAAQAEgPAKgJQAEgHAGgDIABACQACAFADACIAAgIQgBgKACgMQACgNAFgJQADgEAEgDQAFgEAGgCIABAFIAHAQIAAgBIAAgIIABAHIABAAIgEgUQgDgeAQgSIACABQALAFAKADQAJADAGgBIgFAmIgBAAIAAABIACADIADAIQAEANACANQACAQgBAQIgCAMIgBAHIgBAHIgCAAIgEAUQgFAOgRAIIgEAEQgCgPgIgPIgDgEIAAAAIgBgBQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAIgCACQgBABABAEIgCAPQgCAWgEALIgCAAIgBABIAAgBg");
	this.shape_43.setTransform(5.8,-1.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E5EEF6").s().p("AgCBpIgSgrIAAgBIgCACIgBABIgBADIgDALIgQAOIgCAEIgEgJIgDgEIAAgBIABgBIgIgXQgCgKAAgRIgBgBQAFgLAMgHQACgGAFgGIABACQABADADABIAAgHQAAgLABgLQACgOAFgHQADgDAFgCQAEgCAGgBIACADIAIAQIABgBIgBgFIABACIAAgBIgEgTQgCgfAPgQIACAAIAVAIQAJACAGAAQABARgCAUIAAAAIAAABIACAEIADAIQAEAMACAOQACAQgBAPIgBANIgBAHIgBAHIgBgBIgEAVQgFAMgTAEIgEADQgFgPgIgOIgDgCIAAAAIgBgBIgBACIgBACQgCACABADIgBAQQgBAXgEAKIgBAAIgBAAg");
	this.shape_44.setTransform(4.3,-5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E5EEF6").s().p("AAABnIAAAAQgQgagGgOIgBACIAAACIgBAEIgCAKIgRALIgDABIgFgJIgCgDIAAgBIAAgBIgIgXQgDgLAAgQIAAgBQAHgJALgEQACgGADgHIABABQAAABABAAQAAABAAAAQABAAABAAQAAAAABAAIgBgIQAAgLACgKQACgOAFgHQADgCAFAAIAKgBIACAEIAJAOIACgBIgCgHIAAABIABAAIgDgTQgEghAPgNIACAAIAVAHIAPADQAEAPAAAVIAAAAIACAEIAEAJQADAMACANQADAQgBAQIAAANIgBAGIgCAIIAAAAIgEATQgEAMgVgBIgFABQgGgOgKgNIgCAAIgBAAIgBACIgBACQgBADABADIgBAPQABAZgFAIIgCAAg");
	this.shape_45.setTransform(2.7,-8.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E5EEF6").s().p("AADBkIgBABIgBgBQgTgZgFgMIgBAEIAAACIAAAEIgBALQgLAFgIAAIgEABIgFgJIgDgEIAAAAIABgBQgHgOgCgJQgDgMAAgQIAAgBQAIgFANgBQAAgHADgHIACgBIAAgIQAAgLACgKQACgOAGgHIAIACIAKABIADAEIAKAMIABAAIgBgIIAAAAIAAgBIgEgTQgFghAQgLIACAAIAVAGIAPADQAGAOADAUIAAAAIAAABIACAEIADAIQAEAMADAOQACAQAAAQIgBAMIAAAHIgBAIIgBAAIgDAUQgDAJgZgFIgFAAQgHgNgLgMQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAIAAABIgBAAIAAADIgBADQgBACABADIAAAPQACAbgDAGIgDgBg");
	this.shape_46.setTransform(1.2,-12.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E5EEF6").s().p("AAFBiIAAAAIgBAAQgZgZgEgJIAAABIABAEIAAACIAAAFIABALQgNAEgJgDIgEgBIgGgIIgDgEIAAgBIgJgYQgEgMACgPIgBgBQALgCAMABQAAgHABgIIgBgBIADgDIAAgJQAAgLABgKQADgOAGgFIAIAEIAKAEIADADQAFAFAIAFIAAAAIAAgGIgCgEIAAgBIgEgTQgGgiAQgJIABABIAWAFIAOADQAKAMAFAWIABAAIABAEIAEAJQAEAMACANQACAQABARIAAAMIgBAHIgBAIIgBAAIgCATQgDAJgagLIgGAAQgJgNgLgMQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIAAABIgBABIAAADIAAADIAAAGIABAPQADAcgDAEIgEgBg");
	this.shape_47.setTransform(-0.3,-16.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E5EEF6").s().p("AAJBhIgBAAIgBAAQgfgZgDgHIAAAAIACAHIAAACIABAFIACALQgOACgKgFIgEgCIgGgJIgDgEIAAgBQgHgNgDgKQgEgNABgPIAAgCIAZAGQgCgGAAgJIAAgDIABgGIAAgIIACgVQACgOAHgFQACADAFAEIALAGIADADQAGAFAIAEIACABIgCgHIgCgGIAAgBIgGgTQgGgjARgHIACABQALABAKACIAOAEQANAMAHAVIAAABIACAEIAEAIIAGAZQADARABARIAAAMIgBAHIgBAIIAAAAIgCATQgCAGgdgOIgGgCIgYgXIgBAGIAAABIAAABIAAAEIAAADIABAGIABAPQAEAegCADIgDgBg");
	this.shape_48.setTransform(-1.8,-20.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E5EEF6").s().p("AALBeIAAAAIgBAAQglgYgBgFIAAABIACAHIABACIABAGIADALQgOABgMgIIgFgEIgGgIIgEgEIAAgBQgHgNgDgKQgFgNACgPIAAgCIAbALQgDgGgBgJIgBgEIABgHIAAgKIACgVQADgOAGgFQACAGAGAFQAFAEAGAEIADADQAHAEAIAEIACAAIgBgHIgDgIIgBgBIgGgTQgGgjATgFIAAAAQALABAKACIAOAEQAPAKAKAWIAAABIACAEIAEAIIAGAZQADARABARIAAAMIAAAHIAAAIIgBABIgBASQgBAFghgUIgFgCIgbgVIgBAHIAAABIAAACIAAAFIABAEIABAFIACAPQAGAfgBACIgFgCg");
	this.shape_49.setTransform(-3.3,-23.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E5EEF6").s().p("Ag/BBQgSgbADgaIAeAQQgJgLABgdQABghALgGQACAHAGAHQAMAOAVAGIgMgmQgIglAWgCQA8gDAQBPQAFAXAAAeIgCAcQAAADgjgYIgjgYQgDAIAHAjIAHAhQgwgbgBgBIAKAdQgZgCgSgcg");
	this.shape_50.setTransform(-4.9,-27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41}]}).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).wait(1));

	// Layer 12
	this.instance_10 = new lib.Symbol5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(15.8,-3.1,1,1,0,0,0,0.1,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:0.4,regY:-7.2,scaleX:1.55,scaleY:0.89,rotation:-15,x:-3.7,y:-37.5},9).wait(1));

	// Layer 8
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#0057A8").ss(1,1,1).p("AAeAvQgOgPgEgSQgCgIABgSQAAgbgGgGQgFgGgMAUQgOATgDAh");
	this.shape_51.setTransform(-8.8,-12.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#0057A8").ss(1,1,1).p("AgeAUQACgPADgJQAPggAEgDQAGgHADAEQAGAHABAYQAAARACAIQAEARAOAN");
	this.shape_52.setTransform(-10.9,-14.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#0057A8").ss(1,1,1).p("AgeASQACgNACgKQAQgdADgDQAHgFACAEQAFAGACAXQABAPADAHQAFAQANAM");
	this.shape_53.setTransform(-13.1,-16.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#0057A8").ss(1,1,1).p("AgeARQABgNADgJQAOgcAEgCQAHgEABAEQAGAHACAUQACANAEAIQAFAOANAM");
	this.shape_54.setTransform(-15.3,-18.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#0057A8").ss(1,1,1).p("AgfAPQACgNACgIQAPgaADgCQAGgCADAEQAEAHADASQACAMAFAHQAGANAMAL");
	this.shape_55.setTransform(-17.5,-20.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#0057A8").ss(1,1,1).p("AggANQACgLADgIQANgYAEgCQAFgBADAEQADAIAFAQQADAKAFAHQAGAMAMAJ");
	this.shape_56.setTransform(-19.6,-22.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#0057A8").ss(1,1,1).p("AggAMQACgLACgHQAOgXADgBQAEABADAEQAEAHAFAOQAEAJAFAHQAIAKALAJ");
	this.shape_57.setTransform(-21.8,-24.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#0057A8").ss(1,1,1).p("AggALQACgKACgHQANgVADAAQAEABADAEQAFAIAEAMQAEAHAHAHQAIAJAKAI");
	this.shape_58.setTransform(-24,-26.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#0057A8").ss(1,1,1).p("AghAKQACgJACgHQANgTADAAQADADADAEQAFAIAFAKQAFAGAHAGQAJAIAKAG");
	this.shape_59.setTransform(-26.2,-28.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#0057A8").ss(1,1,1).p("AAjAYQgigSgPgdQgIAAgHARIgFAP");
	this.shape_60.setTransform(-28.3,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51}]}).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).wait(1));

	// Layer 15
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#0057A8").ss(0.4,1,1).p("AATALQAAAHgEACQgCABgDAAQgCAAgCgCQgEABgDgBQgBAAgBgBQgIgCgHgEQAAgBABAAQADAAADABQAFABADAAQABAAABAAQABAAADAAQgBgEgCgJQgBgHAAgGQAAAAAAgBQAAgFABgBQADgBADAEQAEAFAEAKQAFAJAAAEg");
	this.shape_61.setTransform(-6.3,-1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0057A8").s().p("AAGATQgEABgDgBIgCgBQgIgCgHgEIABgBIAGABIAIABIACAAIAEAAIgDgNQgBgHAAgGIAAgBQAAgFABgBQADgBADAEQAEAFAEAKQAFAJAAAEQAAAHgEACIgFABQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_62.setTransform(-6.3,-1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgSANQAAgBABAAQAPABABgBQAEAAAAAAQAAgCgBgDQgBgDgBgEQAAgEAAgFQgBgCAAgCQABgGAAgBQABAAABAAQACAAADAEQADADACAHQABACABACQAEAHABAEQAAABAAABQAAAGgCACQgBABgBAAQgBABgCAAQgBAAgBAAQgBAAgCgBQAAgBgBAAQgEAAgDAAQgBgBgBAAQgIgBgHgEg");
	this.shape_63.setTransform(-7.6,-4.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0057A8").s().p("AAKAVIgDgBIgBgBIgHAAIgCgBQgIgBgHgEIABgBIAQAAIAEAAIgBgFIgCgHIAAgJIgBgEQABgGAAgBIACAAQACAAADAEIAFAKIACAEIAFALIAAACQAAAGgCACIgCABIgDABIgCAAg");
	this.shape_64.setTransform(-7.6,-4.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgSAOQAAgBABgBQAPAAABAAQADAAABgBQgBgCgBgEQgBgDAAgCQAAgFAAgEQgBgDAAgCQABgFABgBQABAAABABQACAAADADQACAEADAGQABACABADQADAGABAEQAAABAAABQAAAGgCACQgBABgBAAQgCABgCAAQAAAAgBAAQgBAAgCgBQAAgBgBAAQgEAAgDAAQgBgBgBAAQgJgBgGgDg");
	this.shape_65.setTransform(-8.8,-7.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0057A8").s().p("AAKAVIgDgBIgBgBIgHAAIgCgBQgJgCgGgDIABgBIAPAAIAFgBIgCgGIgBgFIgBgKIAAgEQABgFABgBIABAAIAGAEIAEAKIACAEIAFALIAAACQAAAGgCACIgDABIgDABIgBAAg");
	this.shape_66.setTransform(-8.8,-7.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgSAOQAAAAAAAAQAQgCABgBQADAAAAgBQAAgBgBgEQgBgDAAgCQAAgFgBgFQAAgDAAgBQABgGABAAQABABABAAQACAAACAEQADADACAHQABABABADQAEAGABAEQAAABAAABQAAAGgDACQgBABgBAAQgBABgCAAQgBAAgBAAQgBAAgCgBQAAgBgBAAQgEAAgCAAQgBAAgBAAQgKgCgFgDg");
	this.shape_67.setTransform(-10.1,-10.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0057A8").s().p("AAJAVIgDgBIgBgBIgGAAIgCAAQgKgCgFgDIAAgBIARgBQADAAAAgBIgBgGIgBgFIgBgKIAAgEQABgGABAAIACABQACABACADIAFAKIACAEQAEAGABAEIAAADQAAAFgDACIgCACIgDAAIgCAAg");
	this.shape_68.setTransform(-10.1,-10.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgSAPQAAAAAAAAQAQgEABAAQADAAAAgBQgBgCgBgEQAAgDAAgBQAAgGgBgEQAAgDAAgCQABgFABAAQABAAABABQACABADAEQACADADAGQABACABADQADAGABAEQAAABAAABQAAAFgDADQgBAAgBAAQgBABgCAAQgBAAgBAAQgBAAgCgBQAAgBgBAAQgEAAgCAAQgBAAgBAAQgKgBgFgDg");
	this.shape_69.setTransform(-11.4,-14);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0057A8").s().p("AAJAVIgDgBIgBgBIgGAAIgCAAQgKgCgFgCIAAgBIARgCQADgBAAgBIgCgGIAAgFIgBgKIAAgEQABgFABAAIACABQACABADAEIAFAJIACAEIAEALIAAACQAAAFgDADIgCABIgDAAIgCAAg");
	this.shape_70.setTransform(-11.4,-14);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgSAQQAAgBABAAQAPgEABAAQACgBABgBQgBgCgBgEQAAgDAAgBQAAgGgBgFQAAgCAAgCQABgEACAAQABABABAAQACACACADQACAEADAGQABACABACQADAGABADQAAACAAABQgBAFgCACQgBABgBAAQgCABgCAAQAAAAgBAAQgBAAgCgCQAAAAgBAAQgEAAgCAAQgBgBgBAAQgLgBgEgBg");
	this.shape_71.setTransform(-12.7,-17.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0057A8").s().p("AAJAVIgDgCIgBAAIgGAAIgCgBQgLgBgEgBIABgBIAQgEQACgBABgBIgCgGIAAgEIgBgLIAAgEQABgEACAAIACABIAEAFIAFAKIACAEIAEAJIAAADQgBAFgCACIgCABIgEABIgBAAg");
	this.shape_72.setTransform(-12.7,-17.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgSARQAAgBABAAQAPgFABAAQACgBAAgCQAAgCgBgEQAAgCAAgCQAAgFgBgFQAAgDAAgBQABgEADAAQABABABABQABABADADQACAEACAGQABACABACQADAGABAEQAAABAAABQgBAFgDADQAAAAgBAAQgCABgCAAQAAAAgBAAQgBAAgCgCQAAAAgBAAQgEAAgCAAQgBgBgBAAQgLAAgEgBg");
	this.shape_73.setTransform(-14,-20.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0057A8").s().p("AAJAVIgDgCIgBAAIgGAAIgCgBIgPgBIABgBIAQgFQACgBAAgCIgBgGIAAgEIgBgKIAAgEQABgEADAAIACACIAEAEIAEAKIACAEIAEAKIAAACQgBAFgDADIgBAAIgEABIgBAAg");
	this.shape_74.setTransform(-14,-20.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgRARQAPgGABgBQACAAAAgDQAAgCgBgDQAAgCAAgDQAAgFgBgFQAAgCABgCQAAgEADABQABABABABQACACACADQACAEACAGQABACABABQAEAHAAADQAAACAAABQgBAFgDACQAAAAgBABQgCAAgCAAQAAAAgBAAQgCAAgBgCQgBAAAAAAQgFAAgBAAQgBAAgCAAQgLgBgCgBg");
	this.shape_75.setTransform(-15.3,-23.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0057A8").s().p("AAIAVIgCgCIgBAAIgGAAIgDAAIgNgCIAQgHQABAAAAAAQAAgBAAAAQAAAAAAgBQABAAgBgBIAAgFIAAgFIgBgKIABgEQAAgEADABIACACIADAFQADAEACAGIACADQADAHAAADIAAADQAAAFgDACIgBABIgEAAIgCAAg");
	this.shape_76.setTransform(-15.3,-23.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgRASQAQgIAAAAQACgBAAgDQgBgCAAgEQAAgBAAgDQAAgFgBgFQAAgCABgCQABgDADABQABABABABQABACACADQACAEADAGQABACABABQADAHAAADQAAABAAABQgBAFgDADQgBAAgBAAQgBABgCAAQgBAAAAAAQgCgBgBgCQgBAAAAAAQgFAAgBAAQgBAAgCAAQgLAAgCAAg");
	this.shape_77.setTransform(-16.6,-26.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0057A8").s().p("AAJAVIgEgDIgBAAIgGAAIgCAAIgOAAIARgIQACgBAAgDIgBgGIAAgEIgCgKIABgEQACgDACABIACACIAEAFIAEAKIACADQAEAHAAADIAAACQgBAFgEADIgBAAIgDABIgBAAg");
	this.shape_78.setTransform(-16.6,-26.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgHAJQADAAgDgJIgCgOQAAgFACgBQADgBAEAEQACAFAEAKQAFAJAAAEQAAAHgEACQgCABgDAAQgCAAAAgC");
	this.shape_79.setTransform(-17.1,-30.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0057A8").s().p("AAGATIgXAAIARgKQACAAgCgJIgBgOQAAgFABgBQACgBAEAEQAEAFAEAKQAFAJAAAEQAAAHgEACIgFABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_80.setTransform(-17.9,-30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61}]}).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).wait(1));

	// Layer 16
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiSihQAGA2AjAPIAjhDQADBEAtA1ICFgRIA7AhIhuC0QhOARhhg8QhaiZA7h7g");
	this.shape_81.setTransform(-1.2,-0.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AhzBzQhaiZA7h7QAGA2AjAPIAjhDQADBEAtA1ICFgRIA7AhIhuC0QgRAEgSAAQhAAAhMgvg");
	this.shape_82.setTransform(-1.2,-0.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiSiYQACAPAEALQAFAQAKAJQAegTAOgbQAFAHAFAOQAGATAIAOQAMAVAZAWQA6ACBIgSQAFACAEACQAWAQAWAPQgqBNgrBOQgHAMgIALQgUAGgWAAQg3ADg9ggQgGgDgFgEQgJgOgGgOQgRglgJgfQgQg0ABg4QABgjAPgeg");
	this.shape_83.setTransform(-3,-3.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AhfB8IgLgHQgJgOgGgOQgRglgJgfQgQg0ABg4QABgjAPgeQACAPAEALQAFAQAKAJQAegTAOgbQAFAHAFAOQAGATAIAOQAMAVAZAWQA6ACBIgSIAJAEIAsAfIhVCbIgPAXQgUAGgWAAIgJAAQgyAAg5gdg");
	this.shape_84.setTransform(-3,-3.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiSiRQADAOADAJQAFAOAJAHQAagTANgXQAGAHAIAPQAIAUAKAKQALALAcAQQAyAMBNgaQAEACAEABQAUARATAQQgmBMglBPQgIALgIALQgTAGgVADQg2AHg6gbQgGgDgGgEQgIgNgGgPQgQglgJgdQgOgugGg7QgDgkANgbg");
	this.shape_85.setTransform(-4.9,-5.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AhVB8QgGgDgGgEQgIgNgGgPQgQglgJgdQgOgugGg7QgDgkANgbQADAOADAJQAFAOAJAHQAagTANgXQAGAHAIAPQAIAUAKAKQALALAcAQQAyAMBNgaIAIADIAnAhIhLCbIgQAWQgTAGgVADQgMACgMAAQgrAAgtgWg");
	this.shape_86.setTransform(-4.9,-5.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiQiJQADANADAIQAEAMAIAFQAWgTANgUQAGAGAKARQALAUAMAHQAKABAeAKQArAXBSgjQAEABAEABQAQASAQARQggBMghBOQgIALgIALQgSAHgUAEQg1AMg4gWQgFgDgGgEQgHgMgHgQQgPgmgJgbQgNgogNg9QgGgkAMgZg");
	this.shape_87.setTransform(-6.9,-7.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhLB9IgLgHQgHgMgHgQIgYhBQgNgogNg9QgGgkAMgZQADANADAIQAEAMAIAFQAWgTANgUQAGAGAKARQALAUAMAHQAKABAeAKQArAXBSgjIAIACIAgAjIhBCaIgQAWQgSAHgUAEQgUAEgSAAQgjAAgkgOg");
	this.shape_88.setTransform(-6.9,-7.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiOiBQADAMACAGQAEAKAGADQAUgTALgRQAHAGAMASQAOAVANAEQAKgJAhAEQAiAhBXgrQAEAAAEABQANASAOATQgcBLgcBPQgIAKgIAKQgRAIgTAFQg1ATg0gTQgGgCgFgEQgHgMgGgQQgOgngJgZQgMgigUg/QgKglALgWg");
	this.shape_89.setTransform(-8.9,-10.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AhAB9QgGgCgFgEQgHgMgGgQIgXhAIgghhQgKgkALgXIAFATQAEAJAGADQAUgTALgRQAHAHAMARQAOAWANADQAKgJAhAEQAiAhBXgrIAIABIAbAlIg4CZIgQAWQgRAHgTAFQgbAKgZAAQgbAAgagKg");
	this.shape_90.setTransform(-8.9,-10.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiMh5QADALADAEQADAIAFAAQAQgTAKgMQAIAGAPASQAQAXAPAAQAJgTAjgDQAbArBcgzQADAAAEAAQALAUAKATQgXBMgXBNQgHAKgIAKQgRAJgTAHQgzAXgygOQgFgBgFgEQgHgLgGgRQgNgpgJgVQgKgegbhAQgPglAKgUg");
	this.shape_91.setTransform(-11,-12.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("Ag1B9QgFgBgFgEQgHgLgGgRQgNgpgJgVQgKgegbhAQgPglAKgUQADALADAEQADAIAFAAIAagfQAIAGAPASQAQAXAPAAQAJgTAjgDQAbArBcgzIAHAAIAVAnIguCZIgPAUQgRAJgTAHQghAOgeAAQgTAAgTgFg");
	this.shape_92.setTransform(-11,-12.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiKhzQAEAKACADQACAGAEgCQANgTAJgJQAJAGARATQATAYAQgEQAJgdAjgIQAVA1Bhg7QADgBAEgBQAIAVAHAVQgSBNgSBLQgIAKgIAKQgPAJgSAJQg1AcgtgJQgFgBgFgFQgHgKgFgSQgMgpgJgTQgJgZgihCQgSglAIgSg");
	this.shape_93.setTransform(-13.1,-14.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgqB9QgFgBgFgFQgHgKgFgSQgMgpgJgTQgJgZgihCQgSglAIgSQAEAKACADQACAGAEgCQANgTAJgJQAJAGARATQATAYAQgEQAJgdAjgIQAVA1Bhg7IAHgCIAPAqIgkCYIgQAUQgPAJgSAJQgoAVgiAAQgMAAgMgCg");
	this.shape_94.setTransform(-13.1,-14.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiHhlQAEAJACACQABADADgDQAJgTAIgGQAKAFATAVQAWAYASgHQAIgnAlgOQAOBABmhEQADgBADgCQAFAWAFAWQgNBNgOBKQgIAKgIAJQgOALgRAKQg0AhgqgEQgFgBgFgFQgGgJgGgSQgLgrgJgRQgHgTgqhDQgWgmAIgQg");
	this.shape_95.setTransform(-15.2,-17.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgeCEQgFgBgFgFQgGgJgGgSQgLgrgJgRQgHgTgqhDQgWgmAIgQQAEAJACACQAAABAAABQABAAAAAAQABAAAAgBQABAAABgBQAJgTAIgGQAKAFATAVQAWAYASgHQAIgnAlgOQAOBABmhEIAGgDIAKAsIgbCXIgQATQgOALgRAKQguAegmAAIgKgBg");
	this.shape_96.setTransform(-15.2,-17.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiEhWQAEAIABAAQABABABgGQAGgTAHgCQALAFAVAWQAZAZAUgKQAHgyAogUQAGBKBqhMQADgCADgCQACAXACAXQgIBMgJBLQgHAJgJAJQgNAMgQALQg0AngnAAQgFAAgEgFQgGgJgFgTQgLgrgJgPQgFgNgxhGQgagnAHgMg");
	this.shape_97.setTransform(-17.3,-20.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgcCGQgGgJgFgTQgLgrgJgPQgFgNgxhGQgagnAHgMQAEAIABAAQABAAAAAAQAAAAAAgBQAAAAABgBQAAgBAAgCQAGgTAHgCQALAFAVAWQAZAZAUgKQAHgyAogUQAGBKBqhMIAGgEIAEAuIgRCXIgQASQgNAMgQALQg0AngnAAQgFAAgEgFg");
	this.shape_98.setTransform(-17.3,-20.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiChJQAEAHABgBQAAgBAAgIQACgTAHABQAHACAcAaQAbAaAWgOQAGg7ArgaQgCBWB1hbIgJDGQgSAVgaAWQgzAsgkAEQgLACgIgiQgKgtgJgMQgEgHg4hIQgegnAGgLg");
	this.shape_99.setTransform(-19.3,-23.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgbBxQgKgtgJgMIg8hPQgegnAGgLQAEAHABgBIAAgJQACgTAHABQAHACAcAaQAbAaAWgOQAGg7ArgaQgCBWB1hbIgJDGQgSAVgaAWQgzAsgkAEIgBAAQgLAAgHggg");
	this.shape_100.setTransform(-19.3,-23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81}]}).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_100},{t:this.shape_99}]},1).wait(1));

	// Layer 18
	this.instance_11 = new lib.Symbol6();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-1,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:-18.6,y:-31.1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-18.1,37.9,36.5);


(lib.Symbol2copy14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34.5,-30.5,1,0.71,-30,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-45,x:38.1,y:-40.7},4).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("Agqh8QAjCBB5AyQAcATgEAdQgNAqg4glQgpAGgzg6Qg5gHgYg3IghgP");
	this.shape.setTransform(22.5,-40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AiFgdQAPAIAQAIQATAjAaAUQANAKAQAFQAhApAiAIQBFAjAUgcQADgFACgGQAGgegegQQgOgFgQgFQgtgggggpQgdgpgYg5");
	this.shape_1.setTransform(23.8,-43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AiBgmQAPAJAOAKQAVAiAWAXQALANAOAIQAgAoAkAHQBBAlAXgfQADgFABgFQAJgggggNQgOgFgRgDQgpglghgrQgcgmggg4");
	this.shape_2.setTransform(25.1,-45.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("Ah9gvQAOALAMALQAZAgAQAbQAKAPALALQAfApAmAGQA9AmAagiQADgFABgEQALgighgKQgOgEgTgBQglgqgfgtQgcglgpg3");
	this.shape_3.setTransform(26.5,-48.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AhPiBQAyA1AaAkIBBBeQBQgGgbA7QgnAwgwgzQg4gGgfhHQgQgpgugt");
	this.shape_4.setTransform(27.8,-50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5EEF6").s().p("AAjAlIgYgVQgLgHARAeIAVAeQg+gggZgXQgpgkgGgaQgEgNAFgGQAFAHAQAPQAZAWAIAAQAKgBgKghIgEgQQgBgEAFAKQARAdALANQAKALAZARQAfAUAbAJQgHgCAKAUQAIARAHAIQgWgJgpgdg");
	this.shape_5.setTransform(21.2,-38.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5EEF6").s().p("AAgAkIgSgVIgEgDQgEACAIARIAIASIAFAIQgggVgSgUQgPgJgJgIQgjgjgFgcIAAgBQgBgIAFgDQAGAHAPANQAVAUAJADQAKACgFgWIAAgBIgCgJQAAgDAFAJQAPAaAKAOQAKAMAWAQQARANAQAKIAMAJQgGAAAIARIADAHQACAIADACQgXgMghgdg");
	this.shape_6.setTransform(22.3,-41.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5EEF6").s().p("AAeAmIgPgVIgCgGQgHACAFAPIAEARIAAACQgbgXgLgWQgOgIgJgKQgegggBgeIAAAAQABgEAFAAIAUAUQASAQAKAGQAJAFAAgMIAAAAIABgEIAEAHQANAXALAPQALALASARQAOAOAPALQgBADADAGQgFACAFAPIADAHQAAABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQgWgPgYgeg");
	this.shape_7.setTransform(23.5,-45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5EEF6").s().p("AA9BYQgWgSgRgdQgGgLgDgMIgCgHQgJABAAAMQgBAHACALIgDgEQgZgagDgXQgNgJgIgKQgagdACghIAJAEIATASIAaAXQAJAHAEgBIAEADIADAGIAZAjQAKAOAOAQIAYAbQgGACgBAHQgEAEAEAOIABAGQgEgBgDgEg");
	this.shape_8.setTransform(25.1,-48.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E5EEF6").s().p("AAGALQgRABABAaQgeghAEgeQgrgiAIguIBHBGIBJBtQgXABAGAfQgugjgEg8g");
	this.shape_9.setTransform(26.9,-52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 6
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABFBsQgpAGgzg6Qg5gHgYg3IghgPIBfhnQAjCBB5AyQAcATgEAdQgHAWgTAAQgRAAgagRg");
	this.shape_10.setTransform(22.5,-40.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABBBsQgOgBgOgHQghgIgfgnQgTgFgPgNQgXgTgSghIgfgRIA3hDIAjgUQAOAmATAfQAfA0AyAkIAnAPQAdAQgGAeQgCAGgDAFQgJAOgQAAQgQAAgWgOg");
	this.shape_11.setTransform(23.8,-42.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA8BrQgMgCgOgJQgigIgfglQgQgJgNgQQgUgWgUggIgdgVIAzhDIAhgCQATAkASAcQAfAzAtAnQAVAFARAGQAeANgIAfIgEAKQgNASgSAAQgOAAgTgMg");
	this.shape_12.setTransform(25.2,-44.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA4BzQgMgEgNgLQgkgGgdglQgOgNgLgSQgPgagYgeQgMgMgPgMIAvhFIAhARIAoA6QAfAwAnAtQAWABAQAFQAeALgJAgIgFAKQgPAUgUAAQgNAAgPgJg");
	this.shape_13.setTransform(26.5,-47.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcBoQg4gGgfhHQgQgqgugsIArhGQAxA1AaAkIBBBeQBQgGgbA7QgTAXgVAAQgWAAgZgag");
	this.shape_14.setTransform(27.8,-50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.6,-54.4,29.8,27.3);


(lib.Symbol2copy13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween115("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34.5,-32.6);

	this.instance_1 = new lib.Tween24("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.4,-27.3,1.179,0.71,-45,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0.5,regY:0.1,scaleX:1.18,scaleY:0.71,rotation:-45,x:41.4,y:-27.3},4).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,87,168,0)").ss(1,1,1).p("AgdBxIA7jh");
	this.shape.setTransform(12.2,-43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AhNiSQAnCmByAoQAqg8ATBMQABBMhtgQQgsAZg8gkIAvgZIhtgV");
	this.shape_1.setTransform(23,-40.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AB4BOQADALADASQgMBHhggUQguADgpggQARgOAPgPQgsgTgsgSQAchaAMiHQA3C+BfAuQALgDAFgDQAagTANAdg");
	this.shape_2.setTransform(25.5,-41.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("ABzBtQAAALgBAPQgYBBhUgYQgmgMgfgiQAIgRAJgQQgigbgigbQAahFgHicQBIDZBPAzQAOgCAHgBQAcgJAKAjg");
	this.shape_3.setTransform(28.1,-42.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("ABrCLQgEALgEAMQgkA8hFgcQgggdgWgjQABgSABgTQgYgjgYgjQAZgwgZixQBZD0A/A3QAPgBAJABQAeABAHApg");
	this.shape_4.setTransform(30.9,-43.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("AhsjeQBrEOAvA9QAPgCAMAEQAhALADAvQgHALgJAKQgzA7hAgtIhBjJQAXgbgsjGg");
	this.shape_5.setTransform(32.7,-44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhLB9IAvgZIhsgVIA7jhQAnCmByAoQApg8AUBMQABBMhtgQQgTALgTAAQgfAAgjgWg");
	this.shape_6.setTransform(23,-40.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhGCEIAhgdIhZglQAchmAKh/QAzC4BjAyQAIgFAHgCQAKgHAJAAQAWACAJAtQgBAegbAQQgaASg2gJQgLAEgJABQgfgCgmgeg");
	this.shape_7.setTransform(25.8,-41.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAJCzQgJACgKgBQgZgMgdgfIAQghIhFg1QAdhdgMiMQBCDJBRA8IAQADQALgFAKACQAbAEAHAuQgEAXgdATQgRAMgbAAQgOAAgSgEg");
	this.shape_8.setTransform(28.5,-42.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AABDHQgIAAgKgDQgSgXgVgfIABgmIgzhFQAchUgfiZQBPDbBBBGIAQANQANgDALADQAeAIAFAuQgGARgfAVQgRALgXAAQgPAAgRgEg");
	this.shape_9.setTransform(31,-43.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQDUIhFjBQAbhLg0imQBuEYAwA8QAPgBAMAEQAhAKADAwQgIAKghAWQgRAMgWAAQgWAAgZgLg");
	this.shape_10.setTransform(32.7,-44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.2,-56.2,29.6,31.4);


(lib.Symbol2copy11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34.5,-30.5,1,0.71,-30,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("Agqh8QAjCBB5AyQAcATgEAdQgNAqg4glQgpAGgzg6Qg5gHgYg3IghgP");
	this.shape.setTransform(22.5,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance_1 = new lib.Tween80("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.2,-38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABFBsQgpAGgzg6Qg5gHgYg3IghgPIBfhnQAjCBB5AyQAcATgEAdQgHAWgTAAQgRAAgagRg");
	this.shape_1.setTransform(22.5,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.6,-54.4,29.8,27.3);


(lib.Symbol2copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34.5,-30.5,1,0.71,-30,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,rotation:-60,x:33.8,y:-31.1},4).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("Agqh8QAjCBB5AyQAcATgEAdQgNAqg4glQgpAGgzg6Qg5gHgYg3IghgP");
	this.shape.setTransform(22.5,-40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AiMgHQALAJARAPQASAhAXAPQAWANAWAEQASAIAIAFQABAAAAAAQAEABADgBQAPAMAVAHQAPAEALAAQAHACAEABQAIAAAFgGQAWAKARgSQARgWgOgXQgCgCgCgEQgFgEgMgEQgLgGgVgKQgdgOgWgRQgWgNgQgXQgWgbgRgiQgGgLgEgN");
	this.shape_1.setTransform(21,-40.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AiVAAQAEAPASAUQAVAjAcAPQAaAOAWAFQAVAGAJAEQAAgDAAgEQgCgGgCgHQAMAMAaAJQARAGALABQAJACADgBQABgKgBgPQATAPAagJQAggOgBgbQAAgEgBgEQgCgGgRgEQgIgFgegLQgjgOgZgOQgZgMgVgYQgagagYglQgIgMgGgN");
	this.shape_2.setTransform(20.3,-38.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AhmiBQAGANAKAMQAfAnAeAbQAaAYAcAMQAdAKAoANQAnANAFAEQAWAFgBAGQgGArguAFQgqAFgTgYQAIAYAHASQgEAHgogOQgdgLgNgNQAIANAHANQADAHADAIQgRgEgUgEQgVgFgfgPQgggPgUgeQgXgfACgY");
	this.shape_3.setTransform(19.9,-37.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AgYBSQAMAOAkAMQAxAQACgJIgeg6QATAaAygHQA1gHAGgxQABgEgcgDQgGgBgrgMQgrgLgegJQgbgKgfgYQgfgZglgmQgLgNgIgMAgYBSIgGgIAiqAAQgJAgAZAiQAZAhAmAQQAmAQAXAEQAXAEASAEIgjg9");
	this.shape_4.setTransform(18.9,-34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 4
	this.instance_1 = new lib.Tween80("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.2,-38.2);

	this.instance_2 = new lib.Tween79("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.6,-36.7,1,0.665,8.7,0,0,0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,regX:0.1,regY:-0.1,scaleY:0.67,rotation:8.7,x:19.6,y:-36.7},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},1).to({regX:0,regY:0,scaleY:0.81,rotation:0,x:17.7,y:-35.1},1).to({scaleY:1,x:14.2,y:-29.5},2).wait(1));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABFBsQgpAGgzg6Qg5gHgYg3IghgPIBfhnQAjCBB5AyQAcATgEAdQgHAWgTAAQgRAAgagRg");
	this.shape_5.setTransform(22.5,-40.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABNByQguACgxgzQgmAEgMgjQg+gQgJgdIBVhuQAzCBCKArQAOAkgcAJQgFAagRAAQgJAAgNgIg");
	this.shape_6.setTransform(20.9,-39.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABOB4Qg0gDgvgrQgRANgCgLQhrgZgBg1IBMh2QBCCCCbAjQAAA3g0gMQgBAhgNAAIgFgBg");
	this.shape_7.setTransform(20.1,-38.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZBPQACAYAKALQiYghAGhPIBCh7QBSCCCrAcQgNBIhMggIAFAtQg4gHgtgkg");
	this.shape_8.setTransform(19.5,-37.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiqgEIA4iFQBjCFC7ASQgbBahkg0QAKAhAUAZQg9gLgsgdIApBEQjDgqAOhkg");
	this.shape_9.setTransform(18.9,-34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.6,-54.4,29.8,27.3);


(lib.Symbol2copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(33.8,-31.1,1,0.71,-60,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,rotation:-30,x:34.5,y:-30.5},4).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AgYBSQAMAOAkAMQAxAQACgJIgeg6QATAaAygHQA1gHAGgxQABgEgcgDQgGgBgrgMQgrgLgegJQgbgKgfgYQgfgZglgmQgLgNgIgMAiqAAQgJAgAZAiQAZAhAmAQQAmAQAXAEQAXAEASAEIgjg9IgGgI");
	this.shape.setTransform(18.9,-34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AhmiBQAGANAKAMQAfAnAeAbQAaAYAcAMQAdAKAoANQAnANAFAEQAWAFgBAGQgGArguAFQgqAFgTgYQAIAYAHASQgEAHgogOQgdgLgNgNQAIANAHANQADAHADAIQgRgEgUgEQgVgFgfgPQgggPgUgeQgXgfACgY");
	this.shape_1.setTransform(19.9,-37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AiVAAQAEAPASAUQAVAjAcAPQAaAOAWAFQAVAGAJAEQAAgDAAgEQgCgGgCgHQAMAMAaAJQARAGALABQAJACADgBQABgKgBgPQATAPAagJQAggOgBgbQAAgEgBgEQgCgGgRgEQgIgFgegLQgjgOgZgOQgZgMgVgYQgagagYglQgIgMgGgM");
	this.shape_2.setTransform(20.3,-38.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AiMgHQALAJARAPQASAhAXAOQAWAOAWAEQASAIAIAFQABAAAAAAQAEABADgBQAPAMAVAHQAPAEALAAQAHACAEABQAIAAAFgHQAWAKARgSQARgWgOgWQgCgDgCgDQgFgEgMgEQgLgGgVgKQgdgOgWgRQgWgOgQgWQgWgbgRgiQgGgMgEgM");
	this.shape_3.setTransform(21,-40.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("Agqh8QAjCBB5AyQAcATgEAdQgNAqg4glQgpAGgzg6Qg5gHgYg3IghgP");
	this.shape_4.setTransform(22.5,-40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 4
	this.instance_1 = new lib.Tween79("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.2,-29.5);

	this.instance_2 = new lib.Tween80("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.2,-38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.81,x:17.7,y:-35.1},2).to({regX:0.1,regY:-0.1,scaleY:0.67,rotation:8.7,x:19.6,y:-36.7},1).to({_off:true,regX:0,regY:0,scaleY:1,rotation:0,x:21.2,y:-38.2},1).wait(1));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiqgEIA4iFQBjCFC7ASQgbBahkg0QAKAhAUAZQg9gLgsgdIApBEQjDgqAOhkg");
	this.shape_5.setTransform(18.9,-34.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUBuQhcgYgZg1QgNgUgCgUIA6h1QAUAQAWANQBKBZCDAXQgHAzgfAAQgOABgXgIIAIAYQAFARAGAMQglgDgjgTQgOgEgLgIIATAtQgUgHgTgIg");
	this.shape_6.setTransform(18.8,-36);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA1BgQgMgDgNgGQAAAOgCAHQgTgIgPgKQhQgSgZg3QgOgPgGgQIA8hlQASAGAUADQA5BbBvAgQAEAogJAFQgDAFgOAAIAFAWIADAaIgCABQgeAAgigUg");
	this.shape_7.setTransform(18.7,-37.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABCBkQgMgBgMgEQgLAEgNgHQgQgJgNgMQhFgMgYg5QgPgJgMgMIA+hVIAjgNQAoBdBcAqQAQAeALAIQAIAJgFAIQADAKABALQgCAQgFAHIgIABQgWAAgdgSg");
	this.shape_8.setTransform(20.1,-38.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABFBsQgpAGgzg6Qg5gHgYg3IghgPIBfhnQAjCBB5AyQAcATgEAdQgHAWgTAAQgRAAgagRg");
	this.shape_9.setTransform(22.5,-40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,-50.1,36.8,30.7);


(lib.Symbol2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgnA0QAHiUBCgEQAUBigsBng");
	this.shape.setTransform(0.9,-44.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA0QAHiUBCgEQAUBigsBng");
	this.shape_1.setTransform(0.9,-44.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Tween24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(33.8,-31.1,1,0.71,-60,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgMBiIAZjD");
	this.shape_2.setTransform(3,-44.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AgYBuQAMANAkAMQAxARACgKIgeg6QATAbAygHQA1gIAGgxQABgDgcgDQgGgBgrgNQgrgMgegKQgbgHgfgZQgfgYglgnQgkgngGgoAiqAaQgJAiAZAhQAZAiAmAPQAmAQAXAEQAXAFASADIgjg8IgGgI");
	this.shape_3.setTransform(18.9,-37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5EEF6").s().p("AgxA5Qg1gkgPgkQgHgTAEgMQAHAIAVANQAgAVAIgGQALgHgTgvIgKgYQgCgFAJAMQAZAmAQANQAOAMAeANQAmALAggCQgJABARAaQANAVAJAKQgagBgzgWIgegRQgOgFAbAkIAeAlQhKgMghgVg");
	this.shape_4.setTransform(14.2,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYCFQgegBghgEQhAgIgIgLQgUgaAJghIAbjEQAFApAlAnQAkAmAfAZQAfAWAcAKIBIAWQArAMAGABQAcADAAAEQgGAxg2AHQgyAHgSgaIAAAnIgkAAIAAAAQgWAAgMgOg");
	this.shape_5.setTransform(18.8,-39.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-55.6,41.4,36.2);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag3AfIBvgnIg2gWg");
	this.shape.setTransform(-2.1,-15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AACgfIA2AYIhvAmg");
	this.shape_1.setTransform(-2.1,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Tween23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.2,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgoAMIBRgX");
	this.shape_2.setTransform(-0.6,-15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AgviJQAWAtgWBJQgIAYgCAIQgEAVABAPQACAQAHAPQACAEAFAJQADAEADADQABADABABQgBAkAgAQQAfAQAbgXQAGgFACgJQACgMgJgNQgIgNgWgLQAAgBAGgoQAHgoACgiQADgjgIhi");
	this.shape_3.setTransform(0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5EEF6").s().p("AgMA/IAUgnQgNgFgNANQgGAGgDAIQgDgeANgaIAOgWQgSgaAWgqIAaghIABA9IAAA+QgBAsgKBPIAAADIABAAIABABQgTABgNAQQgRgbASgsg");
	this.shape_4.setTransform(0.8,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFCcQgggQABgkIgCgEIgGgHIgHgNQgHgPgCgQQgBgPAEgVIAKggQAWhJgWgtIBRgZQAIBigDAjQgCAigHAoIgGApQAWALAIANQAJANgCAMQgCAJgGAFQgQAOgSAAQgMAAgMgHg");
	this.shape_5.setTransform(0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-19.9,16,37);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag3AfIBvgnIg2gWg");
	this.shape.setTransform(-2.1,-15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AACgfIA2AYIhvAmg");
	this.shape_1.setTransform(-2.1,-15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag1AiQAbgjAaggQAaAFAcAKQgjAXgpAZQgPACgQACg");
	this.shape_2.setTransform(-1.8,-18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAghQAaAFAcALQgjAWgpAZIgfAEQAbgiAaghg");
	this.shape_3.setTransform(-1.8,-18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgzAjQAYgmAagiQAXgBAeAJQgdAggoAjQgRgCgRgBg");
	this.shape_4.setTransform(-1.5,-22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzAjQAYgmAagiQAXgBAeAJQgdAggoAjIgigDg");
	this.shape_5.setTransform(-1.5,-22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgxAkQAWgrAYgiQAXgHAeAHQgVApgqAtQgSgEgSgFg");
	this.shape_6.setTransform(-1.2,-25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxAkQAWgrAYgiQAWgHAeAHQgUApgqAtIgkgJg");
	this.shape_7.setTransform(-1.2,-25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgvAmQASgvAYgiQAWgOAfAGQgPAzgpA2QgTgIgUgIg");
	this.shape_8.setTransform(-0.9,-28.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguAmQARgvAYgiQAWgOAeAGQgOAzgpA2IgmgQg");
	this.shape_9.setTransform(-0.9,-28.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgsAoQAOgyAWgkQAVgTAgAEQgHA9gpA/QgVgLgUgMg");
	this.shape_10.setTransform(-0.6,-31.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsAoQAOgyAWgkQAVgTAgAEQgHA9gpA/IgpgXg");
	this.shape_11.setTransform(-0.6,-31.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgqArQALg3AVgkQAUgaAhADQgBBGgqBKQgUgPgWgPg");
	this.shape_12.setTransform(-0.3,-34.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqArQALg3AVgkQAUgaAhADQgBBGgqBKIgqgeg");
	this.shape_13.setTransform(-0.3,-34.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgoAuQAJg7ATglQATggAiABQAGBPgrBUQgVgSgXgSg");
	this.shape_14.setTransform(0,-37.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoAuQAJg7ATglQATggAiABQAGBPgrBUIgsgkg");
	this.shape_15.setTransform(0,-37.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgoAxQAGg/ASglQASgnAjAAQANBYgrBeQgWgVgZgWg");
	this.shape_16.setTransform(0.5,-41.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoAxQAGg/ASgmQASgmAjgBQANBZgrBdIgvgqg");
	this.shape_17.setTransform(0.5,-41.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgnA0QAHiUBCgEQAUBigsBng");
	this.shape_18.setTransform(0.9,-44.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgnA0QAHiUBCgEQAUBigsBng");
	this.shape_19.setTransform(0.9,-44.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

	// Layer 2
	this.instance = new lib.Tween23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.2,14);

	this.instance_1 = new lib.Tween24("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.8,-31.1,1,0.71,-60,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0.2,regY:0.1,scaleY:0.71,rotation:-60,x:33.8,y:-31.1},9).wait(1));

	// Layer 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgoAMIBRgX");
	this.shape_20.setTransform(-0.6,-15.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0057A8").ss(1,1,1).p("AgviJQAWAtgWBJQgIAYgCAIQgEAVABAPQACAQAHAPQACAEAFAJQADAEADADQABADABABQgBAkAgAQQAfAQAbgXQAGgFACgJQACgMgJgNQgIgNgWgLQAAgBAGgoQAHgoACgiQADgjgIhi");
	this.shape_21.setTransform(0.1,-0.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0057A8").ss(1,1,1).p("AAVhOQgBgJgCgKQgDgOgBgPAAVhOQgBgIgBgKQgDgOgCgQIgEggQgkAWgnAWIALAqQABADAAAEQAEAZgDAdQgDAegBAIQAAAFAAADQgBAJABAIQAAABABAAQgBAGgBAGQAAAAAAAAQAAABAAAAIAAAFQABAHADAHQAAABABACQABACACADQACADAEAFQADAEADADQABACACACQAAAEABAEQAIATAMALQAFAEAHACQAIAEAJgBQAAAAABAAQASADAUgNQADgCACgEQABgBAAAAQACgDABgDQAEgMgGgMQgDgKgLgJQgFgEgIgDQgBgBABgCQgBgHgBgXQAAgDAAgDQgBgVgBgTQAAgBAAAAIAAgKQgBgJgBgKQAAgFgBgHQgBgDAAgDgAAfgEQgBgJgBgKQAAgGgBgHQgBgDAAgCAAjBTQAAgBAAAAQAAgIgCgXQAAgCAAgCQgBgVgBgTABACIQAFgMgHgNQgDgJgJgIQgBgBgBAAAgxBdQACAEADADQAEAFADADQABACABACQABAGACAFQAIATAOAKQAEADAFACQAIADAKgBQAAAAABAAQASACASgMQAEgDACgDQADgDABgEAg2hIQABADAAADQAEAagCAcQgEAdAAAJQgBAGAAADQAAAIABAJQgBAAAAAAQgBAHAAAGAg5BHQABAIADAIQACADACAD");
	this.shape_22.setTransform(2.6,-4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0057A8").ss(1,1,1).p("AAJhJQgCgJgDgKQgEgOgBgQIgFgiQgkAggjAgQABABAAABIAKAqQABADAAAEQAHAaADAYQACAeACAIQAAAGABACQACAIACAIIAAAAQgCAEgBAEQgBAGABAGQAAAAAAABQAAABABABQACACABADQADAEAEAFQADADADADAAJhJQgCgJgDgJQgEgPgBgQAAYgSQgBgFgCgIQgCgHgDgJAAYgSQgCgFgBgHQgCgIgDgJIgHgaAAjAYQgCgHgCgHQgDgMgEgQAAjAYQgCgHgCgGQgDgNgEgQAA/BaQgEgDgJgDQgBAAAAgCQgBgGgGgWQAAgCgBgDQAAAAAAgBQgBgCgBgDAA/BaQgEgDgIgDQgBAAgBgDQAAgHgHgWQAAgBgBgCQAAAAAAAAQgBgDgBgDIgEgTAAWCaQASAFAVgLQAEgCADgDQADgDACgEQAHgLgEgNQgCgKgIgKQgBgBgCgBAAWCaQAAgBAAAAQASAFAVgKQAEgDAEgEQACgCABgDQAHgLgEgNQgBgKgJgLQgBgBgBAAAgfByQAAAAAAABQACACACABQABAEACAEQAMATALAIQACACAFABQAIABAGgEQABAAABABAgfByQABADACABQABAGADAFQAOASAKAIQACABAFABQAIABAHgEAgtBjQADAEADAEQAEAEADADQABAAAAAAAhCgwQABAEAAADQAHAbACAYQADAeABAIQABAEAAADQACAJADAHQAAABAAAAQgCAEgBAEQgBAFABAGQABACAAABQABACACAD");
	this.shape_23.setTransform(4.5,-9.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0057A8").ss(1,1,1).p("ABRBXQgFgDgKgDQgBAAAAgCQgCgGgMgUQgBgDgBgCQgKgTgHgQQgGgNgHgOQgCgGgDgHQgKgXgMgmQgBgEgCgEABRBXQgFgDgJgDQgBAAgBgDQgCgHgMgUQgBgBgBgCQgKgTgHgRQgGgMgHgOQgCgGgDgHQgKgYgMgmQgBgDgCgEIgBgCQgJgbgEgeQggAqggApIAJAnQACAHACAHQAJAZAIAZQAJAcADAHQACAFACADQADAHAEAHQAAAAAAAAQgDACgCABQgDADAAADQAAABAAAAQABABAAAAIAAAAQABABABACQADAFAFAFQAEAEAEADQACACACACQACAFAEAFQAQASALAFQACgBACgBQAGgCAFgFQAAAAAAgBQARAIAYgKQAFgCAEgEQACgCACgCQAJgKgBgOQAAgKgHgMQgBgBAAAAgAhQghQACAHACAHQAJAaAIAZQAIAcAEAHQABAEACACQADAIAFAHQAAAAAAABQgCACgCABQgDAEAAADQABABABACQAEAEAFAGQAEAEAEADQACADACABQACAEACADQAQATAKAFQACAAAEgBQAFgCAEgFQABABABAAQASAHAYgKQAEgCADgCQAEgDACgDQAJgLgCgNQAAgKgGgMQgBgBgBAA");
	this.shape_24.setTransform(6.4,-13.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0057A8").ss(1,1,1).p("AgchjIgPg4QgdAzgdAzQACAbALAbIAMAbQAGAMAHAMQAPAbAFAGQADAEADADQAFAGAGAGQgBAAgBAAQgDgBgCAAQgEAAgCgBIgBAAQABABABABQABABABACQAEAFAGAFQAEAEAFADQACACACABQACAEADADQAWASAIADQABgCACgDQADgEACgHQAAAAABAAQASAKAbgJQAEgBADgDQAFgCADgDQALgKAAgOQACgKgFgNQgBgBgBgBQgFgCgLgDQgBAAgBgCQgCgFgRgTQgCgCgCgCQgOgSgKgPQgJgMgJgOQgDgFgEgHQgMgXgRgnQgEgGgCgHgABhBSQgEgDgLgCQgBAAgCgDQgCgFgRgTQgBgBgCgCQgPgSgKgQQgJgMgJgNQgDgGgEgHQgMgYgRglQgEgGgCgHAhMAcQAGANAHAMQAOAaAGAHQACADACACQAGAHAFAGQABAAABABQgEAAgCgBQgEAAgCAAIgBAAQACABABACQAEAFAEAEQAEAEAFADQACACACACQAEAEAEAFQAWASAJACQAAgCACgDQACgEADgIQAAAAAAAAQARAKAagJQAFgCAFgDQADgCACgCQAMgJABgOQACgLgGgNQAAgBgBgB");
	this.shape_25.setTransform(8.4,-17.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#0057A8").ss(1,1,1).p("AgHgiIgTgeQgGgKgGgKQgKgRgHgSIgIgkQgaA9gaA8QAAABAAABQAAABAAABIAIAmQADAHADAHQAOAdASAXQAVAYAIAGQACACACACQAAAAABAAQAAAAAAABQAIAGAIAGQgDgCgEgDQgFgEgEgDQAAgBgBAAQABABACACQAFAEAGAGQAEADAFADQACABACACQABAAAAABQAEADADADQAaASAIAAQgBgEAAgFQABgHAAgJQABAAAAABQAAgBAAAAQARANAcgHQAGgCAFgCQADgCADgCQAOgIAEgPQADgLgEgPQAAgBAAAAQgDgDgNgCQgCgBgCgCQgDgEgXgSQgCgCgCgBQAAAAAAAAAgahAQgGgKgGgKQgLgRgGgSAAeAPQgLgLgMgOQgEgFgDgHQgDgFgEgHAAeAPQgLgLgMgOQgEgFgDgHQgDgGgEgGABxBOQgEgDgOgCQgBgBgBgBQgDgEgXgSQgCgCgCgCQgTgQgOgOAhrAIQADAGADAHQAOAeASAWQAWAYAHAGQACACACACQAAAAABABQAAABAAAAQABABABABQAEAEAEAEQAFAEAFAEQADABADACQADAFAFAEQAbARAIAAQgBgEAAgEQABgHAAgKQASAMAdgHQAEgBAFgCQAEgDAEgCQANgJADgOQADgLgDgPQgBgBAAAAAgiBsQAAAAABABQAHAGAHAFQgEgCgEgEQgEgDgDgDQgBgBgBgBQgBAAgBgBQABABABABQABAAABABg");
	this.shape_26.setTransform(10.5,-22);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#0057A8").ss(1,1,1).p("AhAhjIgSgzQAAAAAAgBQAAAAAAgBQgBgCAAgBQgWBGgXBGQgDAbARAfIASAcQAKANAMAKQAbAXAKAFQADACAEACQAKAGAKAFQgBgBgBgBQABAAABABQgFgFgFgFQgGgGgEgGQABACACABQAEAEAGAEQAEADAGADQABABACABQABABABAAQACADAEADQAiARAGgCQgCgGgCgHQgBgJgCgLQAAAAAAABIAAgBQARAPAegFQAGgCAGgCQAEgBADgCQARgIAGgOQAAgBAAAAAgog/QgHgJgHgKQgGgIgEgJAgog/QgHgJgGgKQgGgIgFgJAAWAKQgKgIgLgKQgDgFgGgHQgFgGgFgGAAWAKQgKgIgLgKQgDgFgGgHQgFgFgFgHIgWgfACABJQgEgCgOgDQgCAAgCgBQgDgDgcgRQgDgCgDgCQgXgOgRgNIgHgGACABJQgDgCgOgDQgCAAgDgCQgDgDgcgQQgCgCgDgBQgYgQgRgMAgMCHQgEgEgDgDQgIgIgGgIQABABACABQgCgCgBgBQgBgCgBgBAgbB1QADADADADQAFAEAGADQADACADABQAEAFAEADQAjARAGgCQgCgFgBgGQgCgKgDgMQASAPAggGQAEgBAFgCQAFgCAFgDQAPgIAFgOIACgGQACgKgBgMQgBAAAAAAAghBvQADADADADAhgBHQALAMALALQAcAWAJAGQAEADAFABQAIAFAIAEACABgQADgKgCgLQAAgBgBAAIAAgB");
	this.shape_27.setTransform(12.5,-26.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#0057A8").ss(1,1,1).p("ACPBFQgDgDgPgCQgCgBgDgBQgFgDgggPQgDgBgDgBQgdgPgUgLIgRgKQgJgGgGgGQgGgFgGgHQgZgYgcgnQgdgkgFgnQgTBQgUBNQgEAfATAgQAAAAABABIAbAiQAJAIAKAHQAiAVALAEQAGADAFABQALAEAKAEQgCgDgCgDQgDgDgCgDQgKgMgIgMQABABAAAAQAAAAgBgBQgBgCgBgCQAEAFADAEQAEAEAEACQAFAEAGADQADACADABQAAABAAAAQABABABAAQAEACAFADQAnAQAFgEQgEgIgDgJQgEgMgEgMQAAAAAAABQAAgBAAAAQAQARAhgEQAHgBAGgCQAFgBADgCQAPgFAIgKQADgDACgFQACgEACgFQACgJAAgLQgBAAAAAAQgEgDgQgCQgBgBgCgBQgFgCgggPQgEgCgEgCQgcgNgTgMAALAGQgIgGgGgGQgHgGgGgGAgMCLQgBgBgBgBQgIgKgHgLQACACACACQAGAEAGAEQAFADAGADQABABABABQAAAAAAAAQAAABAAAAQAFAEAGACQAnARAFgFQgDgHgDgHQgEgNgFgNQARARAjgFQAFgBAFgCQAGgBAFgCQANgGAHgJQACgDACgDQADgFACgGQACgJAAgKQAAgBgBAAAhjBjQAJAJAKAHQAiAUALAFQAEACAFABQAMAFAMAEQgBAAAAgBQAAAAABAAQgDgDgCgD");
	this.shape_28.setTransform(14.6,-30.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#0057A8").ss(1,1,1).p("ACEA1QgFgCgmgNQgBgBgCgBQgCgBgDgBQgLgEgLgEABWAkQgBAAgDgBQgMgFgLgEIgNgFQgLgFgJgEIgTgKQgIgDgKgIQgHgGgHgGQgHgGgHgHIgrgtQgBgCgCgCQAAAAgBgBQggglgGgoQgQBZgQBXQgHAgAWAhIAZAdQAOAMAQAJQAUAJANAGIAUAIIAEABQAEAAADABQAAAAABAAQABAAAAABQANADAKADQgEgIgFgIQgBgCgBgBQgBgDgCgCIgKgOQgDgFgDgFQAAAAABABQgBgBAAAAQgCgDgBgCQAFAHAFAEQADADADACQAFADAHAEQABAAABAAQAAABAAAAQADABACABACeA8QAAgDgTgDQgDAAgEgBACbBOIADgPQAAgCAAgBQAAgDgVgDQgCAAgDgBACLBmQAGgFAEgGQAEgGACgHACLBmQAGgFADgFQAFgHACgHAAHACQgIgDgKgIQgHgGgHgGQgHgGgHgHAAACEQABABADACQABAAAAAAIABABQABAAAAAAQAFACAFADQAsAQAEgHIgEgIQgDgHgDgGQgGgOgHgPAgUB4QAFAEAFADQAFACAFADAAHCIQAFADAFACQAtAQADgHAgaBzQADADADACAgVB8QgDgFgCgEAgVCbQAOAEAKAEQAAgBAAAAIAAAAQgEgJgHgKAgdCaQAEABAEAAAh0BtQAOAMAQAJQAUAJANAGABHB1QAKABANAAQAGgBAIgCQAEAAAEgCQACAAACgBQACgBABAAQABgBABAAQAAAAABAAQABgBAAAAIAMgHABHB1QAMACAOgBQAFgBAGgBQAGgCAGgCAA9COQgCgFgCgEQgHgQgIgRQAFAGAGAEIASAH");
	this.shape_29.setTransform(16.8,-34.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgMBiIAZjD");
	this.shape_30.setTransform(3,-44.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#0057A8").ss(1,1,1).p("AgYBuQAMANAkAMQAxARACgKIgeg6QATAbAygHQA1gIAGgxQABgDgcgDQgGgBgrgNQgrgMgegKQgbgHgfgZQgfgYglgnQgkgngGgoAgYBuIgGgIAiqAaQgJAiAZAhQAZAiAmAPQAmAQAXAEQAXAFASADIgjg8");
	this.shape_31.setTransform(18.9,-37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).wait(1));

	// Layer 4
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E5EEF6").s().p("AgMA/IAUgnQgNgFgNANQgGAGgDAIQgDgeANgaIAOgWQgSgaAWgqIAaghIABA9IAAA+QgBAsgKBPIAAADIABAAIABABQgTABgNAQQgRgbASgsg");
	this.shape_32.setTransform(0.8,-3.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E5EEF6").s().p("AgEBSIAEgRIAWghQgMgDgMACIgJACQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAABIgCAHIgBAMQgKgUABgUQAAgJABgIIAFgQQABgGADgGQgFgHACgJIAIgWIAIgVIAGgOIAJgOQACgEADgCIAEA6IACAkIABAWQABAWgBAgIgBA6IAAACIABABIABAAQgSACgIAOQgMgSAIgYg");
	this.shape_33.setTransform(2.2,-6.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E5EEF6").s().p("AAHBRIAGgOIAMgPQACAVABAYIABACIABABIAAAAQgNACgIAMQgJgQAHgRgAgcAaQgEgLAAgKQgBgIABgKQABgIACgFQgDgGAEgGQAGgFAGgMQAFgJADgOIAGgQIAEgOQABgFAEAAIAGA3IAEAiIADAUIAEArIgWgCIgKgBQAAABgBAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAEABAFIADAPQgTgTgCgTgAAYAtIAAgGIAKACIgJALIgBgHg");
	this.shape_34.setTransform(3.7,-9.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E5EEF6").s().p("AATBPIAHgKIADgDIgFgUIAWAEQgIAJgJAHIAEAXIABACIABABIAAAAQgKACgEAKQgMgNAKgMgAggAkQgGgMgDgLQgDgLAAgJQgBgKADgHQgCgEAGgDQAKgBAHgLQAEgIACgQIAEgQIAEgRQABgEAEACQADAUAEAfIAGAgIAEATIAJArIAAADIgRgDIgMgDQgBAAAAABQgBAAAAAAQgBABAAABQAAAAABABQAAAFACAGIAFATQgZgSgHgUg");
	this.shape_35.setTransform(5.3,-13.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E5EEF6").s().p("AAhBOIADgDIADAHIABACIAAAAIABAAQgHACgCAIQgLgLAMgFgAgjAuQgJgMgFgMQgGgNgCgLQgBgLADgIQgBgCAJAAQAOADAGgLQAGgHAAgSQABgIAAgJIACgSQABgEAFADQAGAVAFAbIAGAeQACAJADAGIANApIAFALIgPgDIgOgGQgEAAABAFQABAFADAIIAJAVQghgQgLgVgAAkBLIgIgWQASAEAMACQgJAHgKAFIgDAEIAAAAg");
	this.shape_36.setTransform(6.8,-16.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E5EEF6").s().p("AgmA0QgMgMgIgOQgIgOgDgMQgDgNADgIIANACQARAGAHgJQAGgHgCgTIAAgTIgBgTQAAgFAGAFQAIAVAGAZIAJAbIAGANIARAkIAMAUIgPgEIgUgIQgDgBADAGQAAAGAFAKIAOAYQgpgQgQgVgAAtBJQgBACAAAFQgKgIALABgAAtBJIABgBIgBAAIAAAAIgBgBIgJgPQAWAGAOACQgJAEgKACIgGADIgBAAgAAtBJIAAAAg");
	this.shape_37.setTransform(8.3,-19.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E5EEF6").s().p("AgpA1QgPgNgKgPQgLgPgEgOQgEgOADgKQADACAOAGQAVAJAHgIQAGgHgDgVIgCgUIgDgUQgBgEAHAGQAJAVAHAWIAMAZQADAHADAGIAVAdIAbAdIACABIAAAAIACADIgbgJIgWgLQgEgBABAHQACAGAHAMIATAbQgygPgUgVgABCA/IgHAAIgEgCIgCgDQATAFAMAAIgIABIgKgBgAA3A9IABAAQgIgFAHAFg");
	this.shape_38.setTransform(9.8,-22.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E5EEF6").s().p("AgrA3QgTgPgMgPQgNgRgGgPQgFgQAEgLQAEAEAQAIQAZAOAHgIQAHgGgFgWQgBgKgDgLQgCgKgDgMQgBgFAHAJIATAnIANAXQAEAGAGAGIAYAYQAQAMAQAKIACABIAAAAIALAFQgKgEAPANQADADADABQAKAGAIABQgXgBgqgQIgYgNQgHgCAEAJQACAHAJAMIAXAfQg6gOgYgVg");
	this.shape_39.setTransform(11.2,-24.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E5EEF6").s().p("AguA4QgVgQgOgQQgRgSgHgRQgFgSADgLQAFAGATALQAdARAHgHQAIgFgGgZIgHgWIgHgWQgCgFAIAKIAWAkQAIANAHAHQAEAGAHAFQAKAJASAKQATAKATAGIACABIAQACQgHAAAPATIAGAHQAJAJAIAFQgZgBgugTIgbgQQgHgCAEAKQADAHAKAOIAbAiQhDgNgcgVg");
	this.shape_40.setTransform(12.7,-27.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E5EEF6").s().p("AgxA5Qg1gkgPgkQgHgTAEgMQAHAIAVANQAgAVAIgGQALgHgTgvIgKgYQgCgFAJAMQAZAmAQANQAOAMAeANQAmALAggCQgJABARAaQANAVAJAKQgagBgzgWIgegRQgOgFAbAkIAeAlQhKgMghgVg");
	this.shape_41.setTransform(14.2,-29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32}]}).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).wait(1));

	// Layer 6
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFCcQgggQABgkIgCgEIgGgHIgHgNQgHgPgCgQQgBgPAEgVIAKggQAWhJgWgtIBRgZQAIBigDAjQgCAigHAoIgGApQAWALAIANQAJANgCAMQgCAJgGAFQgQAOgSAAQgMAAgMgHg");
	this.shape_42.setTransform(0.1,-0.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgGCcQgMgGgIgIQgOgNgBgVIgBgDIgGgHIgHgLQgIgOgCgOQgDgOADgSIACgMIAEgRQAJgzgJglQgCgLgFgJIAOgJIA8goQAEAoAFAeIAIA/IAAAFIACAxIgBARQgCAgADAFIAAABQAWALAJAKIABACQAIAIABAJIgBAIQgCAKgJAGIgHAFQgSAJgOgDIgNACIgKgEg");
	this.shape_43.setTransform(2.8,-4.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgBCbQgMgFgJgHQgPgLgCgUIgBgDIgGgGIgIgKQgHgMgDgNQgEgMABgQIABgLIACgRQABgsgJghQgDgKgEgJQAEgGAIgIIA6g8QADAoAIAgIAOA/IABAFIAJAuIADAQQAAAcAGAHIAAAAQAZALAIAJIACACQAKAIAAAHIgBALQgDALgKAGIgKAFQgVAIgPgGIgMAIIgJgEg");
	this.shape_44.setTransform(4.8,-9.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AACCaQgKgEgJgGQgQgKgEgTIgCgDIgFgFIgIgIQgIgLgEgLQgEgKgBgOIgBgJIAAgPQgGgngJgeQgDgJgEgJQACgIAHgKIA2hQQAEAoANAhQAMAoAHAWIACAFIAQAsIAGAPQADAZAJAHIABAAQAbALAIAIIACACQAMAHAAAHQAAAGgCAGQgEAMgLAHIgMAFQgZAIgQgJIgKAMIgLgDg");
	this.shape_45.setTransform(6.9,-13.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAHCZQgKgEgKgFQgRgIgGgSIgBgCIgFgEIgIgIQgIgIgFgKQgGgJgCgMQgCgCAAgFIgDgNQgNgjgJgYIgHgSQAAgKAHgNIAxhjQAFAoARAiQAQAnALAWIABAFQAMAXAMATIAIAOQAHAWAMAHIABAAQAdAMAIAGIACACQAOAGAAAGQAAAIgDAGQgEAOgOAHIgNAFQgeAIgQgMIgIAQIgLgCg");
	this.shape_46.setTransform(8.9,-17.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAMCXIgUgHQgTgGgGgRIgBgBIgGgEIgIgGIgOgOQgHgIgEgKIgDgHQgDgEgCgGQgVgegIgXIgIgOQgBgNAHgPIAsh3QAFApAVAiQATAnAPAWIAEAFQAOAXAOARIAMAMQAJAUAQAHIABABQAfAKAIAHIACAAQAQAGAAAGQAAAIgDAHQgGAOgOAIQgHAEgJACQghAHgRgPIgHAVIgLgCg");
	this.shape_47.setTransform(10.9,-22.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AARCWIgUgFQgUgFgIgQIgBgBIgGgCIgHgGIgQgLQgIgFgGgJQgCgBgCgDQgEgEgDgFQgdgXgIgUIgHgQQgEgPAHgPIAoiLQAFAoAZAlQAWAlATAXIAEAEQASAXASAQIAOAKQANAQATAIIABAAQAiAMAHAEIADABQASAFAAAFQgBAJgDAIQgHAQgQAIQgIADgKADQglAHgRgSIgFAaIgMgCg");
	this.shape_48.setTransform(12.9,-26.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAXCVIgXgDQgTgDgKgPIgBgBIgFgCIgIgEIgRgIIgQgKIgGgDIgJgGQglgSgHgRIgIgPQgFgRAGgUIAkicQAFAoAdAlQAaAlAWAXIAFAEQAVAXAWAOIARAJQAQANAVAIIACAAQAkAMAHAEIADAAQAUAEAAAFQgBAKgEAIQgHASgSAIQgJADgKACQgqAIgSgUIgDAdIgLgBg");
	this.shape_49.setTransform(14.9,-31.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAcCUIgXgBQgUgCgLgOIgBgBIgGgBIgHgCIgSgFIgUgGIgGgCIgMgEQgsgNgHgNIgIgOQgHgTAGgWIAfixQAGApAgAmQAeAkAZAXIAGAFQAaAWAYAMIAUAIQATAKAZAJIACAAIAtANIADAAQAWAFAAADQgBAMgEAIQgJATgTAIQgKAFgMABQgtAIgSgYIgCAiIgMAAg");
	this.shape_50.setTransform(16.9,-35.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgYCFQgegBghgEQhAgIgIgLQgUgaAJghIAbjEQAFApAlAnQAkAmAfAZQAfAWAcAKIBIAWQArAMAGABQAcADAAAEQgGAxg2AHQgyAHgSgaIAAAnIgkAAIAAAAQgWAAgMgOg");
	this.shape_51.setTransform(18.8,-39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42}]}).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-19.9,16,37);


(lib.legcopy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABCCIQALgDgBgJQAAgKgKgKQgYgbglgFQgNgCgfAEQALgOAMgmQAOgqgFgbQgGglgJgSQgTgmgjAF");
	this.shape.setTransform(18.2,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AAqB8QAJgDAAgIQgNgdgNgJQgMgJgNgDQgNgFgZADQAKgNALgfQAKgaACgWQAAgGAAgFQgDgegFgRQgMghgZgB");
	this.shape_1.setTransform(15,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AAbBxQAGgDACgGQgGgagLgKQgJgIgJgFQgNgGgVABQAKgMALgZQAJgVADgUQABgEAAgFQAAgZgCgQQgGgcgSgG");
	this.shape_2.setTransform(12,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AATBpQAGgDACgEQAAgYgJgLQgIgJgJgFQgJgIgSAAQAKgLAKgUQAGgRAFgSQACgEAAgEQADgVAAgPQgCgagKgJ");
	this.shape_3.setTransform(9.2,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AANBkQAEgDADgEQAEgVgIgMQgGgJgHgFQgJgKgPgBQAKgLAJgRQAGgOAGgRQABgDABgDQAFgTACgOQABgYgIgM");
	this.shape_4.setTransform(7.3,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("AAGBgQAEgDADgDQAHgUgIgMQgFgJgGgGQgJgKgNgBQAKgLAIgPQAGgMAHgQQACgDABgEQAGgRACgNQADgWgGgO");
	this.shape_5.setTransform(6.4,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("AADBfQAVgOgOgYQgMgYgUgCQATgXAMgeQAUgugJga");
	this.shape_6.setTransform(6.2,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// Layer 4
	this.instance = new lib.Tween14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(23.7,11.4,0.943,0.6,0,0,0,0,0.1);

	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.9,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regY:0,scaleX:1,scaleY:1,x:3.9,y:11.5},6,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AhVhaQgRAigEAwQgEAtAIATQAHATAIgUQAJgUAGAJIAAAgQAUAMBEACQBGACAWgH");
	this.shape_7.setTransform(14,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AhDhiQgMASgJAfQgKA6ACAWQABAFABAEQAFAQAFgLQAGgLAFAJQABAQACAOQATARA8AGQAPACAPABQAnAAATgG");
	this.shape_8.setTransform(9.5,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("AgzhoQgNANgMAfQgNA4ABAVQAAAFABAEQADAOAEgDQAEgEADAJQACAPADANQATAXA1AIQAOADAPABQAjABAVgI");
	this.shape_9.setTransform(5.7,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0057A8").ss(1,1,1).p("AgohtQgMAJgOAgQgPA0gBAXQAAAFAAAEQACAMACACQADACADAJQACAPAEAMQATAbAvAKQAOADAOACQAgABAXgI");
	this.shape_10.setTransform(2.8,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0057A8").ss(1,1,1).p("AgehxQgOAHgPAhQgRAxgCAYQAAAEAAAEQABAMABAGQABAGADAJQACAOAGAMQASAdAtAMQALAEAPACQAeABAYgJ");
	this.shape_11.setTransform(0.7,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0057A8").ss(1,1,1).p("AgZhzQgNAFgQAhQgSAwgCAaQgBADAAADQAAALABAJQAAAIACAJQADAOAGALQASAgAqAMQALAEAPADQAdABAYgJ");
	this.shape_12.setTransform(-0.6,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0057A8").ss(1,1,1).p("AgXh0QgNAFgQAhQgSAkgDAmQgKBnBpASIABAAQAcABAYgJ");
	this.shape_13.setTransform(-1,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// Layer 6
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E5EEF6").s().p("AgoAOQAcAAAXggQAZghgBgXQAGAHAAA3QgBA1gaAig");
	this.shape_14.setTransform(7.7,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E5EEF6").s().p("AACA2IgughQARgCAWgUQAHgKAHgKQAKgPAFgNQAKgGAAgDIAAACQABAIgCAOQAIAHADAHIABADIAAAEQAAAMgCAMQgDAVgLASIgGAJQgKgEgLgBg");
	this.shape_15.setTransform(6,2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E5EEF6").s().p("AgxAcQAQgDAYgaQAJgLAHgLQALgRADgOQAOACgDAIIAAACQgBALgEAMQANACAGgIIADgDIABgFQABAMgBARQgCAUgNAVIgGAKQgKADgMAFg");
	this.shape_16.setTransform(4.7,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E5EEF6").s().p("Ag2AjQAPgDAbggQALgLAGgMQALgSACgPQAQAIgFARIAAACQgCAMgFAMQAQgEAJgSIAEgIIABgLQACALAAATQAAAVgOAXIgHALIgXATg");
	this.shape_17.setTransform(3.8,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E5EEF6").s().p("Ag5AoQAOgFAdgiQALgMAGgMQALgUACgQQARAOgGAXIAAACQgDANgGAJQATgEALgbIAEgLIADgRQACALABAWQAAAXgPAXIgHALIgYAag");
	this.shape_18.setTransform(3.1,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E5EEF6").s().p("Ag7AtQAOgFAegkIAQgZQAMgVACgQQASARgHAaIAAACQgDANgIAKQAVgKAMgcIAEgNIAEgUQACAKABAXQABAYgPAYIgHAMIgYAeg");
	this.shape_19.setTransform(2.7,0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E5EEF6").s().p("Ag7AvQANgFAeglQAcgkADgaQASASgHAdQgEAMgHALQAagMAMgqIADgVQADALABAXQABAXgPAZQgLARgVAag");
	this.shape_20.setTransform(2.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Layer 7
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F0F1F9").s().p("AAAA1QhmgMgGgUQgMgjATgPIASgMQALgHAFgIQgFAlACAMIAQAgQADgUBTAGQBVAGgEATQgIAVg1AAQgXAAgdgEg");
	this.shape_21.setTransform(14.8,7.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F0F1F9").s().p("AAtBLQgYgBgegIIgYgGQhBgWgBgdIAAAAQgHgiARgTQACgEAPgKQAIgHAGgIIABgBIAAABIgBAAQgIAhgBAPQgCAHALAaIA1AHIAaACQBTAKgCAXIgCAFQgLAUgqAAIgCAAg");
	this.shape_22.setTransform(10.2,6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F0F1F9").s().p("AAmBZQgYgBgfgLIgYgIQg0gfABgmIAAAAQgDghARgXQADgGAMgKIAPgRIgBABQgLAggEARQgEAMAHAYQABALAtAMIAbADQBSANgBAZIgBAGQgLAXgmAAIgFgBg");
	this.shape_23.setTransform(6.5,4.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F0F1F9").s().p("AAhBlQgZgCgegNIgZgKQgrglAEgsIAAgBQAAghAQgaQAEgHAKgKIAOgQIAAgBIABgBIgBACQgOAdgGAUQgFAPAEAVQAAAWApAPIAaAEQBSAQABAaIgBAGQgLAZgkAAIgGAAg");
	this.shape_24.setTransform(3.6,3.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F0F1F9").s().p("AAeBtQgZgDgfgOIgZgMQgkgqAGgxIAAgBQACghAQgbQAFgJAHgJIAPgSIgBABQgQAdgGAVQgHASACASQAAAeAlARIAbAFQBRARABAcIAAAGQgLAbgjAAIgGAAg");
	this.shape_25.setTransform(1.4,2.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F0F1F9").s().p("AAdByQgagCgfgQIgZgNQgggsAHg1IAAgBQAEggAPgcIAMgTIAPgUIgCADQgQAcgIAWQgHATAAARQAAAiAjATIAdAGQBPASACAdIAAAGQgLAcghAAIgHgBg");
	this.shape_26.setTransform(0.1,2.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F0F1F9").s().p("AAcB0QghgDgxgcQgeguAHg2QAHg3AngtQhEBsBEAkQB2AVgIAnQgLAbghAAIgHAAg");
	this.shape_27.setTransform(-0.3,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(1));

	// Layer 8
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag2AQQgXgHAAgJQAAgIAXgHQAXgHAfAAQAgAAAXAHQAXAHAAAIQAAAJgXAHQgXAHggAAQgfAAgXgHg");
	this.shape_28.setTransform(16.2,8.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag1AQQgWgHABgJQgBgIAWgHQAXgHAeAAQAfAAAWAHQAXAHAAAIQAAAJgXAHQgWAHgfAAQgeAAgXgHg");
	this.shape_29.setTransform(11.1,8.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgzAQQgWgHAAgJQAAgIAWgHQAWgHAdAAQAeAAAWAHQAWAHAAAIQAAAJgWAHQgWAHgeAAQgdAAgWgHg");
	this.shape_30.setTransform(6.9,9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgyAQQgVgHAAgJQAAgIAVgHQAVgHAdAAQAeAAAVAHQAVAHAAAIQAAAJgVAHQgVAHgeAAQgdAAgVgHg");
	this.shape_31.setTransform(3.7,9.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgyAQQgUgHgBgJQABgIAUgHQAWgHAcAAQAeAAAUAHQAWAHAAAIQAAAJgWAHQgUAHgeAAQgcAAgWgHg");
	this.shape_32.setTransform(1.4,9.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgxAQQgVgHAAgJQAAgIAVgHQAVgHAcAAQAdAAAVAHQAVAHAAAIQAAAJgVAHQgVAHgdAAQgcAAgVgHg");
	this.shape_33.setTransform(0,9.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgxAQQgUgHAAgJQAAgIAUgHQAVgHAcAAQAdAAAVAHQAVAHgBAIQABAJgVAHQgVAHgdAAQgcAAgVgHg");
	this.shape_34.setTransform(-0.5,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.Tween21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(10.8,-1.4,1,1.161);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:1.1,y:-4.3},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,-15.9,25.1,29.9);


(lib.legcopy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(19.6,-2.8,0.842,1,0,0,0,-0.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.6,-17.2,20,28.9);


(lib.legcopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABCCIQALgDgBgJQAAgKgKgKQgYgbglgFQgNgCgfAEQALgOAMgmQAOgqgFgbQgGglgJgSQgTgmgjAF");
	this.shape.setTransform(18.2,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance = new lib.Tween14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(23.7,11.4,0.943,0.6,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AhVhaQgRAigEAwQgEAtAIATQAHATAIgUQAJgUAGAJIAAAgQAUAMBEACQBGACAWgH");
	this.shape_1.setTransform(14,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5EEF6").s().p("AgoAOQAcAAAXggQAZghgBgXQAGAHAAA3QgBA1gaAig");
	this.shape_2.setTransform(7.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0F1F9").s().p("AAAA1QhmgMgGgUQgMgjATgPIASgMQALgHAFgIQgFAlACAMIAQAgQADgUBTAGQBVAGgEATQgIAVg1AAQgXAAgdgEg");
	this.shape_3.setTransform(14.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2AQQgXgHAAgJQAAgIAXgHQAXgHAfAAQAgAAAXAHQAXAHAAAIQAAAJgXAHQgXAHggAAQgfAAgXgHg");
	this.shape_4.setTransform(16.2,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 5
	this.instance_1 = new lib.Tween21copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.5,-1.6,0.874,1.161,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,-15.9,25.1,29.9);


(lib.legcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(5.7,-4,1,1,0,0,0,-0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-18.4,23.9,28.9);


(lib.legcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AADBfQAVgOgOgYQgMgYgUgCQATgXAMgeQAUgugJga");
	this.shape.setTransform(6.2,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance = new lib.Tween13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.9,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AgXh0QgNAFgQAhQgSAkgDAmQgKBnBpASIABAAQAcABAYgJ");
	this.shape_1.setTransform(-1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5EEF6").s().p("Ag7AvQANgFAeglQAcgkADgaQASASgHAdQgEAMgHALQAagMAMgqIADgVQADALABAXQABAXgPAZQgLARgVAag");
	this.shape_2.setTransform(2.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0F1F9").s().p("AAcB0QghgDgxgcQgeguAHg2QAHg3AngtQhEBsBEAkQB2AVgIAnQgLAbghAAIgHAAg");
	this.shape_3.setTransform(-0.3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxAQQgUgHAAgJQAAgIAUgHQAVgHAcAAQAdAAAVAHQAVAHgBAIQABAJgVAHQgVAHgdAAQgcAAgVgHg");
	this.shape_4.setTransform(-0.5,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 5
	this.instance_1 = new lib.Tween21("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.1,-4.3,1,1.161);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-17.1,19.2,32);


(lib.legcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(5.7,-4,1,1,0,0,0,-0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:19.7,y:-2.8},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-18.4,23.9,28.9);


(lib.leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("AADBfQAVgOgOgYQgMgYgUgCQATgXAMgeQAUgugJga");
	this.shape.setTransform(6.2,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AALhjQAIANgBAYQgCAPgFASQgIAWgGAOQgJAQgKAMQAQACAJAKQAGAFAFAIQAJAMgBAKQAAAGgEAGQgDADgDAD");
	this.shape_1.setTransform(7.4,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AAAhnQAKALABAZQgBAPgDAVQgHAXgGARQgJASgKANQASABAJAJQAHAFAGAHQAKAMABALQABAHgEAGQgBAEgFAC");
	this.shape_2.setTransform(8.9,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AgNhsQANAJAEAbQABAQgDAXQgDAZgJATQgJAVgKAMQATABAKAIQAIAFAHAGQALALAEAMQACAIgDAHQgCAEgFAD");
	this.shape_3.setTransform(10.4,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AgahwQASAGAGAdQACAQgBAZQgEAbgJAWQgJAXgLAMQAWABAMAHQAHAEAIAHQAMAKAGANQADAIgCAHQgCAGgGAC");
	this.shape_4.setTransform(12,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("Agnh1QAWAEAIAfQAEAQABAcQgDAcgKAYQgKAagKANQAXABANAGQAIADAJAGQAOAKAHAOQAEAIgCAIQAAAGgIAD");
	this.shape_5.setTransform(13.5,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(1,1,1).p("Agwh5QAZABALAhQAFARACAeQgCAdgJAbQgLAcgKANQAZABAMAFQAKADAKAGQAPAJAJAOQAGAJgBAIQgBAIgIAC");
	this.shape_6.setTransform(14.7,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("Ag5h+QAcAAAOAiQAGASAEAgQgBAfgKAeQgKAegLANQAaAAAMAEQANADAKAFQARAJALAPQAHAKgBAJQAAAHgJAD");
	this.shape_7.setTransform(15.8,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AhCiCQAfgDAQAkQAIASAFAiQABAhgLAgQgKAhgLANQAcAAAMADQAOADAMAFQARAIANAQQAJAKgBAJQABAJgKAD");
	this.shape_8.setTransform(17,-0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("ABCCIQALgDgBgJQAAgKgKgKQgYgbglgFQgNgCgfAEQALgOAMgmQAOgqgFgbQgGglgJgSQgTgmgjAF");
	this.shape_9.setTransform(18.2,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 4
	this.instance = new lib.Tween13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.9,11.5);

	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.7,11.4,0.943,0.6,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regY:0.1,scaleX:0.94,scaleY:0.6,x:23.7,y:11.4},9).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0057A8").ss(1,1,1).p("AgXh0QgNAFgQAhQgSAkgDAmQgKBnBpASIABAAQAcABAYgJ");
	this.shape_10.setTransform(-1,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0057A8").ss(1,1,1).p("AgehxQgOAHgPAhQgRAxgCAYQAAAEAAAEQABAMABAGQABAGADAJQACAOAGAMQASAdAtAMQALAEAPACQAeABAYgJ");
	this.shape_11.setTransform(0.7,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0057A8").ss(1,1,1).p("AgmhuQgMAJgOAgQgQA0gBAWQAAAFAAAEQACAMACADQACADADAJQACAOAFAMQASAcAvAKQANAEAOACQAgABAXgJ");
	this.shape_12.setTransform(2.4,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0057A8").ss(1,1,1).p("AgthrQgMALgNAgQgPA1AAAWQAAAFABAEQACANADAAQADAAADAJQACAOAEANQATAZAxAJQAOADAPACQAhABAXgI");
	this.shape_13.setTransform(4.1,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0057A8").ss(1,1,1).p("AgzhoQgNANgMAfQgNA4ABAVQAAAFABAEQADAOAEgDQAEgEADAJQACAPADANQATAXA1AIQAOADAPABQAjABAVgI");
	this.shape_14.setTransform(5.7,2.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0057A8").ss(1,1,1).p("Ag6hlQgNAPgKAfQgMA4ACAWQAAAFABAEQAEAPAEgGQAFgHAFAJQABAPADANQASAVA4AHQAPACAOABQAmABAUgH");
	this.shape_15.setTransform(7.4,3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0057A8").ss(1,1,1).p("AhBhiQgNARgJAfQgKA6ACAVQAAAFABAEQAFAQAGgKQAFgKAFAJQABAPACAOQATATA7AGQAPABAPABQAnABATgH");
	this.shape_16.setTransform(9.1,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0057A8").ss(1,1,1).p("AhIhfQgMATgIAeQgKA8ADAVQABAGABAEQAGAQAGgNQAHgNAFAJQABAPABAPQATAQA+AFQAQABAPAAQAoABATgG");
	this.shape_17.setTransform(10.7,3.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0057A8").ss(1,1,1).p("AhPhdQgMAVgHAfQgIA+AEAUQABAFABAEQAHASAHgRQAIgQAFAJQABAPAAAPQAUAOBBAEQAQABAPAAQAqABASgG");
	this.shape_18.setTransform(12.4,3.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0057A8").ss(1,1,1).p("AhVhaQgRAigEAwQgEAtAIATQAHATAIgUQAJgUAGAJIAAAgQAUAMBEACQBGACAWgH");
	this.shape_19.setTransform(14,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	// Layer 6
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E5EEF6").s().p("Ag7AvQANgFAeglQAcgkADgaQASASgHAdQgEAMgHALQAagMAMgqIADgVQADALABAXQABAXgPAZQgLARgVAag");
	this.shape_20.setTransform(2.6,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E5EEF6").s().p("AAOBBIhHgWQANgEAcgiQAaggAEgZQAHAHADAJQAEALgDANQgDAMgGAHQAYgKALgpIADgUQACALACAYQAAALgCALQgEAMgHAPQgKATgVAag");
	this.shape_21.setTransform(3.2,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E5EEF6").s().p("Ag3AnQANgDAagfQAYgcAFgYQAHAGADAIQADAIgCALQgCAKgFAFQAWgKAKgmIADgSQACAKACAZQAAALgCAMQgDAMgHAPQgKAUgUAZIAAABIhFgbg");
	this.shape_22.setTransform(3.7,0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E5EEF6").s().p("Ag1AkQANgDAYgbQAWgaAGgWQAHAFACAGQAEAGgCAJQgBAIgEAFQAUgNAJghIACgRQAEAJABAaQAAALgCAMQgCANgHAPQgJAWgTAZIgBAAIhDgfg");
	this.shape_23.setTransform(4.3,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E5EEF6").s().p("AgzAhQANgEAWgXQAUgWAHgUQAGADACAEQAEAFgBAHQAAAFgDAEQASgOAIgeIACgQQADAJABAbQABALgCANQgCANgGAPQgJAYgSAYIgBABIhBgkg");
	this.shape_24.setTransform(4.9,1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E5EEF6").s().p("AgwAcQAMgCAUgTQASgTAIgTQAFACADACQAEADAAAEQAAAEgCABQARgNAGgbIACgOQADAHABAdQABALgCAMQgBAPgGAQQgIAYgSAZIgBAAIg+gqg");
	this.shape_25.setTransform(5.4,1.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E5EEF6").s().p("AguAZQAMgCASgQQAQgPAJgSIAHACQAEABABABIABABQAOgNAFgYIABgMQAEAHABAdIgBAYQgBAPgFAQQgIAagRAYIgBAAIg8gug");
	this.shape_26.setTransform(6,1.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E5EEF6").s().p("AgsAWQAMgBAQgOQAQgLAIgRIAHgBIAFgBIADgDQAMgPAEgTIABgMQAEAHABAeIAAAYQgCAQgEAQQgHAcgRAXIgBAAIg6gyg");
	this.shape_27.setTransform(6.6,2.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E5EEF6").s().p("AgqASQANgBANgJQAPgJAIgPIAGgEIAGgFQADgEACgDQAKgPADgQIABgKQAEAGABAfIAAAZQgBAPgEARQgGAegRAWIAAABIg5g4g");
	this.shape_28.setTransform(7.1,2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E5EEF6").s().p("AgoAOQAcAAAXggQAZghgBgXQAGAHAAA3QgBA1gaAig");
	this.shape_29.setTransform(7.7,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	// Layer 7
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F0F1F9").s().p("AAcB0QghgDgxgcQgeguAHg2QAHg3AngtQhEBsBEAkQB2AVgIAnQgLAbghAAIgHAAg");
	this.shape_30.setTransform(-0.3,1.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F0F1F9").s().p("AAeBtQgZgDgfgOIgZgMQgkgqAGgxIAAgBQACghAQgbQAFgJAHgJIAPgSIgBABQgQAdgGAVQgHASACASQAAAeAlARIAbAFQBRARABAcIAAAGQgLAbgjAAIgGAAg");
	this.shape_31.setTransform(1.4,2.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F0F1F9").s().p("AAhBnQgZgCgfgOQgMgEgNgHQgpgmAEgtIAAAAQABgiAQgZQAEgIAJgKIAPgSIgBACQgOAdgGAUQgFAQADAUQAAAYAoAPIAbAFQBRAQABAaIgBAHQgLAZgkAAIgFAAg");
	this.shape_32.setTransform(3.1,3.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F0F1F9").s().p("AAjBgQgYgCgfgMIgZgJQgugjADgoIAAgBQgCgiARgYQADgHALgKIAOgQIAAAAIABgBIgBABQgNAfgFASQgEAOAFAWQAAASArANIAaAEQBSAOAAAaIgBAGQgLAYgkAAIgGAAg");
	this.shape_33.setTransform(4.8,3.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F0F1F9").s().p("AAmBZQgYgBgfgLIgYgIQg0gfABgmIAAAAQgDghARgXQADgGAMgKIAPgRIgBABQgLAggEARQgEAMAHAYQABALAtAMIAbADQBSANgBAZIgBAGQgLAXgmAAIgFgBg");
	this.shape_34.setTransform(6.5,4.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F0F1F9").s().p("AApBTQgYgBgfgKIgYgHQg5gbAAgiIAAgBQgFghARgVQADgEAMgLIAPgPIAAgBIABAAIgBABQgKAggCARQgDAJAIAYQABAHAwAJIAaAEQBTALgBAYIgCAGQgLAVgnAAIgEAAg");
	this.shape_35.setTransform(8.2,5.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F0F1F9").s().p("AAsBMQgYgBgegIIgYgGQg/gXgCgeQgGgiARgUQADgDANgLQAJgHAHgIQgJAhgBAQQgDAHAKAaIA1AIIAaADQBTAKgCAXIgCAFQgLAUgqAAIgCAAg");
	this.shape_36.setTransform(9.8,5.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F0F1F9").s().p("AAvBGQgYgBgegGIgYgFQhEgUgDgZIAAgBQgIgiASgSQABgDAQgKQAIgHAGgIIABgBIAAABIgBAAQgHAjAAANQgBAFAMAcQACgFA1AFIAaADQBUAIgDAWIgCAFQgMATgqAAIgCAAg");
	this.shape_37.setTransform(11.5,6.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F0F1F9").s().p("AgEA6IgXgEQhKgQgEgVQgKgjASgRIASgMQAJgHAGgHIAAgBQgGAjABANQAAADANAeQADgLA1ADIAcACQBVAHgEAVIgCAFQgMARgtAAQgYAAgegFg");
	this.shape_38.setTransform(13.1,7.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F0F1F9").s().p("AAAA1QhmgMgGgUQgMgjATgPIASgMQALgHAFgIQgFAlACAMIAQAgQADgUBTAGQBVAGgEATQgIAVg1AAQgXAAgdgEg");
	this.shape_39.setTransform(14.8,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(1));

	// Layer 8
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgxAQQgUgHAAgJQAAgIAUgHQAVgHAcAAQAdAAAVAHQAVAHgBAIQABAJgVAHQgVAHgdAAQgcAAgVgHg");
	this.shape_40.setTransform(-0.5,9.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgyAQQgUgHgBgJQABgIAUgHQAWgHAcAAQAeAAAUAHQAWAHAAAIQAAAJgWAHQgUAHgeAAQgcAAgWgHg");
	this.shape_41.setTransform(1.4,9.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgyAQQgVgHAAgJQAAgIAVgHQAVgHAdAAQAeAAAVAHQAVAHAAAIQAAAJgVAHQgVAHgeAAQgdAAgVgHg");
	this.shape_42.setTransform(3.2,9.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgzAQQgVgHAAgJQAAgIAVgHQAWgHAdAAQAeAAAWAHQAVAHAAAIQAAAJgVAHQgWAHgeAAQgdAAgWgHg");
	this.shape_43.setTransform(5.1,9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgzAQQgWgHAAgJQAAgIAWgHQAWgHAdAAQAeAAAWAHQAWAHAAAIQAAAJgWAHQgWAHgeAAQgdAAgWgHg");
	this.shape_44.setTransform(6.9,9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag0AQQgWgHAAgJQAAgIAWgHQAWgHAeAAQAfAAAWAHQAWAHAAAIQAAAJgWAHQgWAHgfAAQgeAAgWgHg");
	this.shape_45.setTransform(8.8,9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ag1AQQgWgHABgJQgBgIAWgHQAXgHAeAAQAfAAAWAHQAWAHABAIQgBAJgWAHQgWAHgfAAQgeAAgXgHg");
	this.shape_46.setTransform(10.7,8.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag1AQQgWgHAAgJQAAgIAWgHQAXgHAeAAQAfAAAXAHQAWAHAAAIQAAAJgWAHQgXAHgfAAQgeAAgXgHg");
	this.shape_47.setTransform(12.5,8.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ag2AQQgWgHAAgJQAAgIAWgHQAYgHAeAAQAgAAAXAHQAWAHAAAIQAAAJgWAHQgXAHggAAQgeAAgYgHg");
	this.shape_48.setTransform(14.4,8.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag2AQQgXgHAAgJQAAgIAXgHQAXgHAfAAQAgAAAXAHQAXAHAAAIQAAAJgXAHQgXAHggAAQgfAAgXgHg");
	this.shape_49.setTransform(16.2,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).wait(1));

	// Layer 5
	this.instance_2 = new lib.Tween21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.1,-4.3,1,1.161);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:10.8,y:-1.4},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-17.1,19.2,32);


(lib.head_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 20
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(-25,-26.6,1,1,-60,0,0,-0.1,-0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},5).wait(1).to({_off:false,rotation:-30,x:-28.4,y:-27.3,alpha:1},0).wait(1));

	// Layer 19
	this.instance_1 = new lib.Tween36("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.7,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},5).wait(2));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0057A8").ss(1,1,1).p("ABPgmQgCAAhAArQgygGAPgqQgPgCgWAeQgYAeAGAe");
	this.shape.setTransform(-14.6,-33.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0057A8").ss(1,1,1).p("AhJAwQgIgbATgdQAXgWAMAEQAAAGAAABQABAQAXACQAGABAJgBQAHgEAGgFQASgNANgKQAKgHAFgDQAEgDABgB");
	this.shape_1.setTransform(-14.8,-33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0057A8").ss(1,1,1).p("AhGA1QgJgaARgeQASgNAMAGQACAFABABQAFAGAWgDQAFgBAJgDQAGgEAGgFQARgNANgKQAKgHAFgEQAEgDABgB");
	this.shape_2.setTransform(-14.9,-33);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0057A8").ss(1,1,1).p("AhEA5QgJgZAPggQAQgFALAGQADAEACABQAIABAVgHQAFgDAIgEQAGgFAFgEQAQgNAOgLQAJgHAGgEQADgDACgC");
	this.shape_3.setTransform(-15.1,-32.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0057A8").ss(1,1,1).p("AhCA8QgKgYAOghQANgCALAJQAFAEABABQALgEAUgLQAFgFAHgFQAGgEAFgFQAPgLAOgMQAJgIAGgEQADgCACgD");
	this.shape_4.setTransform(-15.1,-32.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0057A8").ss(1,1,1).p("ABHg9QgDACgDADQgFAFgKAHIgcAYQgNALgJAJQgUANgLAJQgBABgBgBAgjAUQgPgKgFgRIgHAMQgNAhAKAY");
	this.shape_5.setTransform(-15.2,-32.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0057A8").ss(0.4,1,1).p("AABAAQgBAAAAAA");
	this.shape_6.setTransform(-18.8,-30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0057A8").ss(1,1,1).p("AhmhcQgSgHgMgUQAFA/AuAtQAQAOAIAFQAOAHAIAMQAJAMAFAgQADASAHAPQAHAQAEgBQAOgCApgaQA0ghAagj");
	this.shape_7.setTransform(-20.3,-20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0057A8").ss(1,1,1).p("AhthXQgUgJgMgRQAAAYAKAZQAJAWARAZQADADADAEQAOAOAJAJQANAIAKAMQAMARAJAYQAHAPAJAMQAFAHAEADQAEADADAAQATAAAmgTQA4gZAdgl");
	this.shape_8.setTransform(-19.6,-21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0057A8").ss(1,1,1).p("AhyhUQgWgKgLgPQgHAMAMAfQAIAVAQAcQACAEADAEQAMAOALALQALAKAMANQAPARAMATQAJANAMALQAFAFAGADQAFACADAAQAZACAigNQA7gTAggn");
	this.shape_9.setTransform(-19.1,-22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0057A8").ss(1,1,1).p("Ah1hRQgXgLgMgNQgKACAMAjQAHAVAPAfQADAEADAEQAKAOALANQALALAMAMQASASAOARQAMALANAJQAHAEAGADQAFACADAAQAeACAggIQA+gOAigo");
	this.shape_10.setTransform(-18.8,-22.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0057A8").ss(1,1,1).p("Ah3hQQgYgKgMgNQgNgEAMAmQAHAUAPAhQACAEADAFQAJANAMAPQAKAMANAMQATATAQAOQANAKAPAIQAHADAHADQAFABADAAQAiAEAegGQBAgKAjgo");
	this.shape_11.setTransform(-18.6,-22.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0057A8").ss(1,1,1).p("ACqA+Qg4A/h3gRQgrgPglgjQglgjgPgfQgOgjgGgTQgNgpACgIQACAGAMAMQALAMAZAL");
	this.shape_12.setTransform(-18.7,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape_12}]},1).wait(1));

	// Layer 11
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0057A8").ss(1,1,1).p("AguBhQAAgCgKgaIAAAAQAJABAbASQATANABgMQAAgqgRgcQApAVAXAXQAFAFAEgNQAEgOgIgwQgEgcgRgYQgSgdgVgI");
	this.shape_13.setTransform(-2.2,-27.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0057A8").ss(1,1,1).p("AgOheQAGACAFAEQAOALAOAVQAJASADAFQAGAXACAIQAEAZAAATQgBAGgDACQgEAIgGgFQgCgDgDgCQgCgBAAAAQAAgBgBAAQgCgBgBAAQgBgBAAAAQgDgBgBAAQgKgCgSgDQAJAMgGAZQAAACgDAAQgCABgFgBQgBAAgBAAQgDgCgCgBQgBAAAAgBQgSgHgGAEQABADABACQAGARABAD");
	this.shape_14.setTransform(-1.2,-27);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0057A8").ss(1,1,1).p("AgThcQAFACAGAEQAOAMAMAVQAKASACAGQAGAXACAHQAEAZgBAVQgCAAgEgBQgFADgFgFQgDgCgDgDQgBAAAAAAQgBgBAAAAQgCgBgBAAQgBAAgBABIgBAAQgDAKgLAGQADgBgKAKQgBABgCAAQgDgBgEABQAAAAgBAAQgDAAgCgBQAAAAAAAAQgMABgDAHQABACABADQAFANABAF");
	this.shape_15.setTransform(-0.3,-26.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0057A8").ss(1,1,1).p("AgXhcQAGADAFAEQAOAOAMAUQAJASACAGQAHAYACAHQADAYgBAWQgDgDgGgFQgEAAgFgEQgDgDgDgCQgBAAAAgBQgBAAgBgBQgCAAgBAAQgBAAAAABQgCACACABQADASgIANQAAgLgOgBQgBAAgCgBQgCgCgEACQAAABgBAAQgCAAgBAAIgBAAQgHAIAAAJQAAADABACQAEALACAG");
	this.shape_16.setTransform(0.3,-26);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0057A8").ss(1,1,1).p("AgZhbQAFADAFAEQAPAOALAVQAJASACAGQAGAYACAIQADAXgBAXQgEgHgGgGQgEgDgFgEQgDgCgEgDQgBAAAAgBQgBAAAAAAQgCgBgBABQgBAAAAACQAAACAAABQAIAYgEATQgEgTgQgJQgBAAgCgCQgDgCgDADQAAABgBAAQgBABgBAAQgBAAAAABQgEALACAMQAAACABACQADAJADAH");
	this.shape_17.setTransform(0.8,-25.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0057A8").ss(1,1,1).p("AgbhaQAFACAFAFQAUATANAdQACAFACAGQACAHACAIIAEASQADAWgBAYQgKgTgRgMQgBAAAAAAQgBgBgBAAQAAAAgBABQgBAAAAACQgCACADACQAJAdAAAXQgIgbgVgQQgCgCgDADQAAABAAAAQgCABgBACQgCARAFAPQACAIADAH");
	this.shape_18.setTransform(1.1,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).to({state:[{t:this.shape_18}]},1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Tween32("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.7,-35.4,0.809,0.809,-15,0,0,0.1,-0.1);

	this.instance_3 = new lib.Tween31("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-4,-37.5,1,1,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[]},5).to({state:[{t:this.instance_3}]},1).wait(1));

	// Layer 6
	this.instance_4 = new lib.Tween28("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-26.9,-29.1,1,1,-60);

	this.instance_5 = new lib.Tween27("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-27.4,-30.2,1,1,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[]},5).to({state:[{t:this.instance_5}]},1).wait(1));

	// Layer 7
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E5EEF6").s().p("AAtBrQgLgTgMgoQgEgPgRgQIgggbQgvgrgEhBQAOAgAYAbQAsA3AugTQAWBgAPAgIgdAOg");
	this.shape_19.setTransform(-25.3,-20.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E5EEF6").s().p("AAiA+QgNgRgVgTQgOgOgWgZQgngpgEg0QAQAeAUAbQAtA0AygJQAQBFAMAZIgLATIgLAAQgLgPgNgeg");
	this.shape_20.setTransform(-26.1,-21.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E5EEF6").s().p("AApBEQgVgRgWgXQgSgSgWgeQgggogDgpQAPAcAUAbQArA0A2gEQAMAwAIATQAAAMADAKIgLALQgLgLgPgXg");
	this.shape_21.setTransform(-26.6,-21.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E5EEF6").s().p("AAqBKQgagSgZgaQgVgVgWgiQgagngDghQAQAbASAaQAtA0A3ACQAIAeAGAOQAFAOAKAMIgNASQgLgIgQgQg");
	this.shape_22.setTransform(-26.5,-21.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E5EEF6").s().p("AArBNQgegSgagcQgYgXgVglQgWgmgEgbIAiA0QAsAzA6AGIAJAdQAJAPAOAMIgNAYQgLgGgRgMg");
	this.shape_23.setTransform(-26.5,-21.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E5EEF6").s().p("AAsBQQgigSgbgeQgZgZgVgnQgUglgCgXIAgAzQAtAzA7AKIAGAPQALARASANIgOAcQgLgEgRgJg");
	this.shape_24.setTransform(-26.5,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).to({state:[{t:this.shape_24}]},1).wait(1));

	// Layer 9
	this.instance_6 = new lib.Tween29("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-13.2,-18.6,1,1,-30);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},5).wait(1).to({_off:false,x:-8.1,y:-17.8,alpha:1},0).wait(1));

	// Layer 13
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E5EEF6").s().p("Ag/BBQgSgbADgaIAeAQQgJgLABgdQABghALgGQACAHAGAHQAMAOAVAGIgMgmQgIglAWgCQA8gDAQBPQAFAXAAAeIgCAcQAAADgjgYIgjgYQgDAIAHAjIAHAhQgwgbgBgBIAKAdQgZgCgSgcg");
	this.shape_25.setTransform(-4.9,-27.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E5EEF6").s().p("AADBeIgEgFIgBgBQgUgRgDgLIgBAAIgDgBIAAAGIABACQgMgIgFgLIgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgFgHIgBgCIAAAAIAAgBQgSgbACgZIAWAMQgFgIACgWQACgWAIgFQACAFAFAFQAJAKAPADIgCgHIgFgTQgEgXALgEIAFgCIAAAAQAKAGAKAJIAAAAIABAAIABABIACACIAFADQASAMALAXIAEAIIAEAKIAAACIAEAPIACAJIACAWIgHAJIAAABIAAACIgBACIgBACIABAFIACAbQAAAEgGgCIgBAAQgIgLgSgNIgDgCQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgBAAIgCgBIgNADIgCgCQABAEAIAJQgHAIAAAJIgBACIAAACIAAAAQgCAEAAADIgBACIgBAAg");
	this.shape_26.setTransform(-3.8,-28.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E5EEF6").s().p("AAABgIgFgCQgCABgDgEIgGgHIgBAAQgTgWADgPIgBgDIgBgDQgKgNgBgNIABABQAAACAEACIgFgHIAAgBIADACIAAgBQgWgaADgeIAQAIQgCgFACgOQACgPAHgDIAEAGQAHAGALACIgBgEIgCgNQgCgOAIgEIAGgCIAAAAQAGALAIAOIAAAAIAAABIADABIAGAEQATAPAMAZIAEAJIAEAMIgBABIAFAPIACAOQABAMAAAMQgEgFgKAAIgBAAIAAABIgCABIgBADQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAIAFAfQAAAFgEACIAAAAQgIgQgSgOIgEgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBABIgBAAIgCAAQgGAJgBAHQADADAOAEQgOAHgDAGIgCAAIgBAAgAguAPIAAAAIAAAAg");
	this.shape_27.setTransform(-2.8,-28.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E5EEF6").s().p("AgBBmIgCgBIAAAAIgMgJIgGgIIgGgIIgBAAQgSgaAIgSIADAEQACADAEABIAAgBQgFgGgEgJIgDgHQgIgRADgOIABADQADAEAHAEIgFgIIAAAAIAFAFIABgBQgZgdACggIALAEIADgLQADgIAFgCIADAEQAFADAHABIAAgDIAAgIQABgIAFgCIAGgDIAAAAIAKAgIAAABIACACIAHAEQAUARANAbIADAKIAEALIAAAAIAFATIABAQQABAMAAANQgHgLgNgFIgBAAIgBAAIgCABIgBACQgBADACACQAFAUACAOQABAGgDAEIAAAAQgIgUgRgOIgFgDQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABIgBAAIgDACQgCAPABAMIACAAQAFACARAAQgTAGgFADIAAAAIgBAAg");
	this.shape_28.setTransform(-2,-28.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E5EEF6").s().p("AgEBqIgDgCIABAAIgPgPIgHgKIgHgJIgBAAQgRgcAMgUIADAEQAFAEAFACIgBgBQgHgJgFgNIgDgJQgIgTAGgQIACADQAEAFAJAGIgFgIIABABIAGAGQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQgbgfACghIAIACIAFgGQADgDAEgBIACACIAJAAIgBAAIADgFQACgEADgBIAGgEIAAABIAIAmQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAABABIABABIAGAFQAVASAOAcIADALIAFALIgCAAIAGAUIABARQABAOgBANQgIgPgPgJIgBAAIgCAAQAAgBgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgBACQgCADADACQAGAUACAPQABAIgBAFQgIgWgSgOIgEgFQgDgBgBACIAAABIgCACQgDAUAFAPQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQAGABAUgCIgbAGIgEgBg");
	this.shape_29.setTransform(-1.5,-28);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E5EEF6").s().p("AgGBtIgEgDIABAAIgRgSIgPgXIgBABQgRgfAOgWIAFAFQAGAGAGABQgJgMgHgNQgNggALgVIACAEQAFAGALAIIgFgIIAIAIQABABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgcggACgiQANAAAMgCQALgDADgEIAHArIgBgBIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIADABIAFAGQAVATAOAdIADALIAFANIgCgBIAGAVQADAWgCAYQgJgTgSgMIgBAAIgBgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgBACQgBABAAAAQAAABAAAAQAAABABAAQAAABABAAQAKAdAAAXIAAAAQgJgbgUgQQgCgCgCADIgBABIgCADQgCAWAHATQABADAegGQgWAFgHAAQgFAAgBgCg");
	this.shape_30.setTransform(-1.1,-27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).to({state:[{t:this.shape_30}]},1).wait(1));

	// Layer 12
	this.instance_7 = new lib.Symbol5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-3.7,-37.5,1.553,0.888,-15,0,0,0.4,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},5).wait(1).to({_off:false,regX:0.3,regY:-8,scaleX:1,scaleY:1,rotation:-30,x:-1.2,y:-39.1},0).wait(1));

	// Layer 8
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#0057A8").ss(1,1,1).p("AAjAYQgigSgPgdQgIAAgHARIgFAP");
	this.shape_31.setTransform(-28.3,-30.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#0057A8").ss(1,1,1).p("AghARQAAgKAAgIQACgMADgHQAIgGADAEQAHAGAIANQAGAIAHAGQAKAJANAF");
	this.shape_32.setTransform(-27.4,-32.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#0057A8").ss(1,1,1).p("AgfAaQgCgLgBgKQgBgMADgKQAGgMAFADQAHAFAKAQQAGALAHAGQAKALAQAF");
	this.shape_33.setTransform(-26.9,-33.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#0057A8").ss(1,1,1).p("AgdAgQgDgMgCgLQgDgNACgMQAGgQAFACQAHAEALATQAHANAHAGQALAMARAF");
	this.shape_34.setTransform(-26.5,-34.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#0057A8").ss(1,1,1).p("AgaAjQgFgMgDgLQgEgOACgOQAFgUAFACQAIADAMAVQAIAPAGAGQALANATAF");
	this.shape_35.setTransform(-26.3,-34.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0057A8").ss(1,1,1).p("AAnAeQgUgGgMgNQgGgHgIgPQgNgXgHgDQgIgCgDAYQgCAWAPAf");
	this.shape_36.setTransform(-26.1,-35.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31}]}).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[]},1).to({state:[{t:this.shape_36}]},1).wait(1));

	// Layer 15
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgHAJQADAAgDgJIgCgOQAAgFACgBQADgBAEAEQACAFAEAKQAFAJAAAEQAAAHgEACQgCABgDAAQgCAAAAgC");
	this.shape_37.setTransform(-17.1,-30.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0057A8").s().p("AAGATIgXAAIARgKQACAAgCgJIgBgOQAAgFABgBQACgBAEAEQAEAFAEAKQAFAJAAAEQAAAHgEACIgFABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_38.setTransform(-17.9,-30.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgNAEQAAgBAHgCIALgBQADgEAAAAQABgCgCgDQgBgDABgCQABABABADQABABAAABQAAABAAABQAAADAAADQAAACAAACQAAABABABQACACAAABQAAABABAAQABADgCABQAAABgBAAQAAgBgBAAQgBAAAAgBQgBgBAAgBQgFAAgEgCQgGgCgDgBQgBAAAAAAQgCgBgBgBg");
	this.shape_39.setTransform(-18.6,-28.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0057A8").s().p("AALAOIgBgBIgBgCIgJgCIgJgDIgBAAIgDgCIAAAAQAAgCAHgCIALAAIADgEQABgDgCgDIAAgDQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABIABACIAAACIAAAGIAAAEIABACIACACIABACQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgBABIgBgBg");
	this.shape_40.setTransform(-18.6,-28.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#0057A8").ss(0.4,1,1).p("AAKgGQACgBABAAQABABgCAAQgBAAgBAAQgBgBAAAAQAAAAAAABQAAAAABAAgAADAEQgCgBgBgBQgGgCgDgCQgBgBAAAAQgCgCAAgBIAAgBQABgBAGgBQAMACAAABQABAAABAAQAAABgBABQAAABAAABQAAAAAAABQgCABgCACQAAABgBABQgBABAAAAQgBABABAAQACABACAAQAAABAAAAIACACIAAgBIABAAQAAgBAAgBQgBgBAAAAQgDgBgCgBg");
	this.shape_41.setTransform(-18.8,-27.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0057A8").s().p("AAGAIIAAgBIgEgBQgBAAABgBIABgBIgDgCIgJgEIgBgBIgCgDIAAgBQABgBAGgBIAMADIACgBIgBADIAAACIAAABIgEADIgBACIAFACIABABIAAACIgBAAIAAABgAAKgHIADAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgCgBgAAJgHIAAAAIABAAIgBABIAAgBgAAKgHIAAAAg");
	this.shape_42.setTransform(-18.8,-27.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#0057A8").ss(0.4,1,1).p("AAEAHQgDgCgCgDQgIgDgDgEQAAAAAAAAQgCgDAAgBIAAgCQACgBAGAAQAMAGAAAAQAHADABABQACACgCABQgEABgBAAQAAAAAAgBQgCACgBACQgBABAAAAQgBABAAAAIAAAAQgDACgBACQgCABgDAAQADABACgBQAAABAAgBQACABABgBQAAAAABAAQAAgBABgBQABAAABgBQgBgBgBgBQgBAAAAAAg");
	this.shape_43.setTransform(-18.7,-26.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0057A8").s().p("AAAAMIAAAAIgFAAIAFgBIAEgEIAAAAIgFgFQgIgDgDgEIAAAAIgCgEIAAgCQACgBAGAAIAMAGIAIAEQACACgCABIgFABIAAgBIgDAEIgBABIgBABIABAAIACACIgCABIgBACIgBAAIgCABIgBgBg");
	this.shape_44.setTransform(-18.7,-26.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#0057A8").ss(0.4,1,1).p("AgPgOQACgCAGABQAMAIAAAAQAJAGABABQADADgDADQgEADgCAAIgBgBQgCACgCACQgBAAgBABQgBAAgBABQgBABgEABQgDABgDAAIAAgBQACAAADgBQAAAAAAAAQAEgBACgBQAAAAAAgBQABgBABAAQABgBABgBQAAAAgBgBQgDgDgDgEQgIgEgCgEQgBAAAAgBQgBgCgBgCg");
	this.shape_45.setTransform(-18.7,-26.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0057A8").s().p("AgLAQIAFgBIAAAAIAGgCIAAgBIACgBIACgCIgBgBIgGgHQgIgEgCgEIgBgBIgCgEIABgCQACgCAGABIAMAIIAKAHQADADgDADQgEADgCAAIgBgBIgEAEIgCABIgCABIgFACIgGABg");
	this.shape_46.setTransform(-18.7,-26.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#0057A8").ss(0.4,1,1).p("AAQAAQADAGgCAEQgCACgCABQgCABgDgBQgEACgEADQAAAAAAAAQgIACgIAAQgBAAABgBQADgBADgCQAFgBACgCQABAAABgBQABgCADgBQgDgDgEgGQgIgFgCgEQgBgBAAAAQgCgFABgCQACgDAGACQAFACAHAHQAKAHACACg");
	this.shape_47.setTransform(-18.7,-26.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0057A8").s().p("AgQAUQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAGgDIAHgDIACgBIAEgDIgHgJQgIgFgCgEIgBgBQgCgFABgCQACgDAGACQAFACAHAHQAKAHACACQADAGgCAEIgEADQgBAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAIgIAFIAAAAQgGACgHAAIgDAAg");
	this.shape_48.setTransform(-18.7,-26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).wait(1));

	// Layer 16
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiChJQAEAHABgBQAAgBAAgIQACgTAHABQAHACAcAaQAbAaAWgOQAGg7ArgaQgCBWB1hbIgJDGQgSAVgaAWQgzAsgkAEQgLACgIgiQgKgtgJgMQgEgHg4hIQgegnAGgLg");
	this.shape_49.setTransform(-19.3,-23.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgbBxQgKgtgJgMIg8hPQgegnAGgLQAEAHABgBIAAgJQACgTAHABQAHACAcAaQAbAaAWgOQAGg7ArgaQgCBWB1hbIgJDGQgSAVgaAWQgzAsgkAEIgBAAQgLAAgHggg");
	this.shape_50.setTransform(-19.3,-23.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiPhPQAFAGABAAQAHgNAJADQAJADAUANQAXAJAOgSQAQgZAvgLQABADABADQATAhBNg2QAOgGAOgHIAKATIgICzQgCAFgDAFQgRARgXAQQgyAlguADQgCAAgDAAQgLgGgKgXQgQglgNgQQgRgSgshBQgZglADgSg");
	this.shape_51.setTransform(-19.1,-24.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgKCNQgLgGgKgXQgQglgNgQQgRgSgshBQgZglADgSQAFAGABAAQAHgNAJADQAJADAUANQAXAJAOgSQAQgZAvgLIACAGQATAhBNg2IAcgNIAKATIgICzIgFAKQgRARgXAQQgyAlguADIgCAAIgDAAg");
	this.shape_52.setTransform(-19.1,-24.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AiZhUQAEAGACABQALgBAKAEQAMAFATAHQAOgKAIgXQAXADAzACQACADACACQAgAGBEgyQAQgDAPgFIASANIgGC5QgCAGgCAFQgSASgZAPQgyAfg1ABQgDABgDgBQgOgHgLgTQgWgfgRgTQgagbgkg7QgUgjABgYg");
	this.shape_53.setTransform(-18.9,-24.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgICJQgOgHgLgTQgWgfgRgTQgagbgkg7QgUgjABgYQAEAGACABQALgBAKAEIAfAMQAOgKAIgXQAXADAzACIAEAFQAgAGBEgyIAfgIIASANIgGC5IgEALQgSASgZAPQgyAfg1ABIgDABIgDgBg");
	this.shape_54.setTransform(-18.9,-24.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AihhXQAEAFACACQAOAIALAFQAOAGASADQAHgZAEgbQAcAaA4AMQADACABACQApgPA+guQARgCAQgDIAZAHIgGC/QgBAGgBAGQgTASgaAOQgyAbg7AAQgEAAgDAAQgQgJgNgPQgagbgUgVQghgigdg2QgQgigBgcg");
	this.shape_55.setTransform(-18.7,-25.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgHCHQgQgJgNgPIgugwQghgigdg2QgQgigBgcIAGAHIAZANQAOAGASADQAHgZAEgbQAcAaA4AMIAEAEQApgPA+guIAhgFIAZAHIgGC/IgCAMQgTASgaAOQgyAbg7AAIgEAAIgDAAg");
	this.shape_56.setTransform(-18.7,-25.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AimhaQADAEADADQAQAPAMAGQAPAHASAAQABgjABgeQAgApA6ATQADACAEACQAugeA6gsQARAAASgCIAcADIgFDDQAAAGAAAHQgVASgbANQgxAXhBAAQgDAAgDAAQgRgJgOgNQgdgYgWgXQgngngYgzQgOgggBggg");
	this.shape_57.setTransform(-18.6,-25.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgGCFQgRgJgOgNQgdgYgWgXQgngngYgzQgOgggBggIAGAHQAQAPAMAGQAPAHASAAIAChBQAgApA6ATIAHAEQAugeA6gsIAjgCIAcADIgFDDIAAANQgVASgbANQgxAXhBAAIgGAAg");
	this.shape_58.setTransform(-18.6,-25.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AirhcQAgAsAmgFIgEhMQAlA6BCAYIBphTIBFgBIgFDTQg9A2hwgDQiahZgLiGg");
	this.shape_59.setTransform(-18.5,-25.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgGCDQiahZgLiGQAgAsAmgFIgEhMQAlA6BCAYIBphTIBFgBIgFDTQg6A0hpAAIgKgBg");
	this.shape_60.setTransform(-18.5,-25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).wait(1));

	// Layer 18
	this.instance_8 = new lib.Symbol6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-18.6,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},5).wait(1).to({_off:false,regX:-0.1,regY:-0.1,rotation:-30,x:-17.7,y:-33.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-40,39.2,32.7);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiOCLIAAkVIEdAAIAAEVg");
	mask.setTransform(14.3,13.9);

	// Layer 3
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(14.3,13.9,1,1,0,0,0,14.3,13.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.6,27.9);


(lib.Symbol2copy13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_2 = new lib.Tween24copy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.9,-20.1,1,0.71,-30,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.4,scaleX:1.18,rotation:-60,x:27.3,y:-21.5},6,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0057A8").ss(1,1,1).p("Agqh8QAjCBB5AyQAcATgEAdQgNAqg4glQgpAGgzg6Qg5gHgYg3IghgPg");
	this.shape_11.setTransform(13.9,-30.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0057A8").ss(1,1,1).p("AhIh1QgKBJghAxQAPAJAOAIQAaA0AyAQQA3ApAggRQAPACAFgBQATAAAAgWQgDgKgGgEQgGgLgPgLQhkgvg6h/g");
	this.shape_12.setTransform(15.4,-31.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0057A8").ss(1,1,1).p("Ahih5QAVBbgWAwQANAKANAKQAcAuArAYQA3AcAbgbQAMgFAFgEQAHgKgIgOQgGgGgIgBQgHgJgOgKQhSguhNh9g");
	this.shape_13.setTransform(16.9,-30.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0057A8").ss(1,1,1).p("Ahrh9QAtBngOAxQAMALAMAKQAeAqAkAeQA4ASAYgiQAKgLAEgGQgDgSgNgIQgKgEgIACQgJgHgNgKQhEgqhbh9g");
	this.shape_14.setTransform(16.9,-30.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0057A8").ss(1,1,1).p("AhyiBQA+BxgHAxQAKALALALQAgAoAgAhQA5ALAVgoQAIgOADgIQgJgYgSgEQgLgBgJAEQgJgGgNgKQg7gphlh8g");
	this.shape_15.setTransform(17,-30);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0057A8").ss(1,1,1).p("Ah2iEQBHB3gDAwQAKAMAKALQAeAmAhAkQA5AHAUgrQAHgRACgJQgNgbgVgBQgMAAgKAEQgJgFgNgKQg1gnhqh8g");
	this.shape_16.setTransform(17.1,-29.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0057A8").ss(1,1,1).p("Ah4iJQCGCXAxAbQAJgFAJAAQAYgDAPAfQgCAJgDAJQgSA1g2ADIhahpQACgxhLh5g");
	this.shape_17.setTransform(17.1,-29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(1));

	// Layer 6
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABFBsQgpAGgzg6Qg5gHgYg3IghgPIBfhnQAjCBB5AyQAcATgEAdQgHAWgTAAQgRAAgagRg");
	this.shape_18.setTransform(13.9,-30.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABBB0QgUAGgbgLQgSgPgUgYQgxgOgagzIgdgOIAAgHIAthqIAIgCQA+CABaAsIAOACIADACQAZALACAdQgEALgGAHQgJALgPAAQgLAAgPgHg");
	this.shape_19.setTransform(15.8,-30.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AATB6QgSgQgRgWQgqgVgbgtIgZgSIgEgGIANh2IAJACQBVCFBJAlQAIgBAHABIACABQAaAHAGAdQgDAKgFAIQgNAWgegEQgKAEgMAAQgLAAgMgDg");
	this.shape_20.setTransform(17.1,-30);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAaCCIgigmQgkgbgcgoIgXgUIgFgHIgNh/IAJAGQBoCIA9AhQAIgDAIAAIACABQAZADAKAdQgDAKgEAIQgMAZgaAEQgOAHgRAAIgMAAg");
	this.shape_21.setTransform(17.6,-29.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAkCGIgjgmQgfgegcgkIgVgWIgIgIIgdiGIAJAJQBzCLA2AdQAIgEAIAAIACAAQAYAAAOAeQgDAKgDAIQgLAcgXAJQgRALgXAAIgCgBg");
	this.shape_22.setTransform(17.5,-29.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAIBjIg6hDIgTgWIgJgKIgpiIIAKAKQB7CNAwAbQAJgFAIgBIACAAQAYgBAPAeIgFASQgLAdgWANQgRALgYABIghgmg");
	this.shape_23.setTransform(17.4,-29);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhLAAIgtiJQCGCXAxAbQAJgFAJgBQAYgBAPAeIgEARQgTA1g2AEg");
	this.shape_24.setTransform(17.4,-28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-44,29.8,27.3);


(lib.Symbol2copy12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhQAAQBthlA0AuQg4BRhnAsg");
	this.shape.setTransform(-6.6,-19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhPAAQBshlA0AuQg3BRhoAsg");
	this.shape_1.setTransform(-6.6,-19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhAAMQBUhOAtAWQgeA7g/Aig");
	this.shape_2.setTransform(-6,-18.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhAAMQBUhOAtAWQgeA7g/Aig");
	this.shape_3.setTransform(-6,-18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgzAZQBAg9AnADQgKApggAag");
	this.shape_4.setTransform(-5.6,-18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzAZQBAg9AnADQgKApggAag");
	this.shape_5.setTransform(-5.6,-18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgqAeQAwgvAigNQAHAegGARg");
	this.shape_6.setTransform(-5.1,-17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAogeQAHAegGASIhTAMQAwgvAigNg");
	this.shape_7.setTransform(-5.1,-17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgxAfQAnglAdgYQASAUANANg");
	this.shape_8.setTransform(-3.5,-16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATgeIAfAhIhjAcQAngmAdgXg");
	this.shape_9.setTransform(-3.5,-16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag1AgQAgghAbgeQAZAOAXANg");
	this.shape_10.setTransform(-2.4,-15.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAGgeIAwAaIhrAkIA7g+g");
	this.shape_11.setTransform(-2.4,-15.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag3AfIBvgnIg2gWg");
	this.shape_12.setTransform(-2.1,-15.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AACgfIA2AYIhvAmg");
	this.shape_13.setTransform(-2.1,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

	// Layer 2
	this.instance = new lib.Tween24_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.7,12.1,1,0.71,-15,0,0,0.2,0);

	this.instance_1 = new lib.Tween23_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.2,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,scaleY:1,rotation:0,x:3.2,y:14},6,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhOA8ICdh3");
	this.shape_14.setTransform(-6.4,-19.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0057A8").ss(1,1,1).p("AhfhLQgeASgGApQgGAnAQAmQAPAmAOATQANAUAMARIAQhFQAAARARAkQAYAuAIgFIASg+QgGAgApAeQArAgAngeQACgCgRgWQgEgFgWgnQgVgngOgcQgOgcgEglQgFgnABg1QACg2AZggAgzBWIACgK");
	this.shape_15.setTransform(-4.7,-5.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0057A8").ss(1,1,1).p("ABWCwIARgIQAAgBABAAQADgDgEgJQgFgMgDgGQgEgMgMgUQgMgVgNgSQgFgIgCgMQgFgNgDgQQgCgPgBgPQgCgeABgkQAAgJAAgKQACgtAQgjQgUAIgUAHQgsAdguAdQgIAJgDAGQgMAQgDAbIgBAiQABAPAFARQAJAbAHATQAKAWAIAOQAAgBAAAAIAAAAQABgEACgGQABgGABgGQACgHACgIQABgCABgDQgCAMACAHQAAAEACAEIACAJQADAIAFAJQADAGADAGQAAACABABQAEAHAEAFQACADACACQAFAFACgBQABgCABgCQACgCABgDQAFgMAFgMIAAAAQAAAaAdAXQABAAAAABQABAAAAAAQABABAAAAIABAAQAbAUAagJgAAgClQAdATAZgIAhogNQACAPAFARQAJAdAHASQAJAUAIAOQABgDABgEQABgHACgIQACgHACgHQAAAHACAJQABACABADAgaCKQABACABABQAGAHAEAAQACgEABgDQAGgNAFgOAgxBeQADAHAFAJQADAJAEAH");
	this.shape_16.setTransform(-3.1,-3.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0057A8").ss(1,1,1).p("ABBCmIAPgHQAEgDgBgIQAAgLgCgFQgCgMgKgSQgLgSgRgPQgDgGgBgOQgCgLgBgQQgBgOAAgNQABgdABgfQAAgIAAgKQABgmAKglQgNgEgOgGQgrAYgsAXQgDAKgCAGQAAAAgBABIgEAQQgCAKgBAKQgCAdAEAdQAFAWADARQAEAUAFANQAAgBAAgCQABgDACgFQAAAEABAFQAAABABABQACANAHARQADAGACAFQAFAIAFAIQAFAGADABQACgCABgBQAEgCAGgFQAAAAABAAQAAAJAEAHAAOCcQACABABABQAZAPAXgHAhOhYQgCAKgBAKQgCAdAFAdQAFAWADASQAEASAEAMIAAgCQABgEACgEQABgBAAgBQgBAIABAEAg5A+QAAABAAABQACAMAHAPQADAHADAHQAFAIAGAIQADAEACAAQABgBABgBQACAAABgCQADgCAGgEQAAABAAAAQABAJAEAHIALAQQAEAEAGAEQAbARAYgH");
	this.shape_17.setTransform(-1.8,-1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0057A8").ss(1,1,1).p("AAtCkIANgGQAFgDACgGQADgLAAgFQgBgMgJgPQgKgQgTgNQgCgEABgPQgBgLABgPQAAgNABgOQACgaABgcQAAgIABgJQAAggAFgoQgIgLgJgQQgpATgrASQAAALgBAGIgBAPQgBAIAAAKQgBAYABAbQABATAAAPQAAATACAKQAAABAAAAIgBACQAAABgBAAQAAADABACQAAAAABABQgBADAAADQAAADABACQACAMAFAPQACAEACADQAAABABABQAAABAAAAQACADACAEIABABQACADADAEQABABAAABAhBhgQgBAIAAAKQgBAYABAbQACAUgBAPQABARABAKQAAABAAAAQgBACAAAAQAAABgBABQAAAFABABQAAADAAADQABADAAADQACALAFAMQACAGACAEAgnBwQABABABAAQABAAABAAQABABACAAQABAFAGADQAAAAAAABQACAHAEAHAguBmQACADACADQABACABABQABABAAAAQACACACABQABAAABAAQACAFAGADIABAAQABAHAEAHIAUATQAAABABAAQAAAAABABQAWAMAUgGAACCdQAXANAUgG");
	this.shape_18.setTransform(-0.5,-1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0057A8").ss(1,1,1).p("AADCgQAZAKAUgMQAGgDAEgFQAFgLAAgEQABgNgJgNQgJgPgUgMQgBgCABgQQABgKACgOQABgNABgNQADgZABgaQABgHAAgJQAAgcABgqQgEgSgGgWQgoAQgqAPQADALAAAFIABAOQAAAIAAAJQABAVgCAYQgBARgDARQgDAQAAAJQgBAFgBABQAAACAAACQgCAHAAAFQABACAAACQAAACAAADIAAABQAAABAAABIAAAAQACALAEALQACAFACAFQAAABAAABQABABABABQADAEAEAHQAAABABAAAgzhmQABAIAAAJQAAAVgCAYQgBARgDARQgCAOgBAJQAAABAAABQgBAEgBACQAAACAAACQgCAIAAAGQAAADABAEAg+AzQAAABAAABQACAMAEANQACADACAEQAAAAAAABQABABABACQACAEAEAHQABAAABABQABACABABQAAAAAAAAQABABAAAAQABABAAABQACACABAAQABAKAFAIQABAAAAAAIAAABQABAEADAEIAWAVIABAAQABAAAAABQABABACABAgnBpQABABABABQABABABABQAAAAAAAAQABALAGAHQABAFADAEAgBCdQABACADAB");
	this.shape_19.setTransform(-0.1,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0057A8").ss(1,1,1).p("AAVCjIAWgGQAGgDAFgFQAHgKAAgEQACgMgJgNQgIgNgVgMQgBgBACgQQACgKACgPQACgMABgMQAEgZABgZQABgHAAgIQAAgagBgqQgDgWgDgaQgoANgpANQAEAMACAFIACAOQABAHAAAIQABATgEAXQgBAIgBAIAgphpQABAHAAAIQABATgDAXQgBAIgCAIIgEAQQgEAQgCAGQAAACgBACQgBAEgBACQgDANAAAKQAAABAAABQAAABAAABQAAAEABADIAAAFQACAIACAIQACAFADAGQACAEAFAJQACADACACQABABABABIAAABQABACABAAIAAABQAAANAGAKIAAABQABACABACIAYAWQAMAHANAAAgxgQQgFAQgBAIQAAABgBABAg8A3QACAKADAJQACAEACAEAgsBfQADAEADADAgmBnQABACABABAgECcQABABABAAQALAGAMAA");
	this.shape_20.setTransform(0.1,-0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgoAMIBRgX");
	this.shape_21.setTransform(-0.6,-15.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0057A8").ss(1,1,1).p("AgviJQAWAtgWBJQgIAYgCAIQgEAVABAPQACAQAHAPQACAEAFAJQADAEADADQABADABABQgBAkAgAQQAfAQAbgXQAGgFACgJQACgMgJgNQgIgNgWgLQAAgBAGgoQAHgoACgiQADgjgIhi");
	this.shape_22.setTransform(0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

	// Layer 4
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E5EEF6").s().p("AANA3IgJgiQgFgOgGAsIgFAxQgug/gHglQgNg+ARgmQAIgSALgGQAAALAGAYQAIAmAJACQAMACATgvIAKgYQACgFgCAOQgJAuABAUQACASAOAeQARAkAYAWQgHgGgHAeQgFAYgBAOQgSgTgUgzg");
	this.shape_23.setTransform(-10.2,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E5EEF6").s().p("AAZBkIgBgCIAAgBIgQgTIgHgMIgCgKQgGgNgEAZIgBAVQgJgXgGgUQgMgOgHgHIgHgJQgIgoAJgfIAHgSIAHgMQADgIADgEQgBAEAFANQAGARAIAAIACAAQAMgDARglIAHgKQABgDgBAMQgEAWgBARIAAAVQABATAKAaIADAKQALAZAOAUQgGgBgFAZQgEAVgBAOQgIgEgJgLgAgMBaIAAgBIABACg");
	this.shape_24.setTransform(-6.9,-1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E5EEF6").s().p("AAXBuIgBAAIAAgBIgSgJIgGgFIgEgJQgDgHgDAAIABAGIAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQABgFABAAQgBgTAAgRQgNgLgJAAQgFgBgDAAQgGgjAKgeIAIgQIAGgLQAAgHACgFQAAAAAAgBQgBAAABAAQAAAAABABQAAAAACABQAFAHAIgGIACgBQAKgHAQgeIAEABQACAAgBAJIgDAlIAAATQABAUAGAXIACAIQAHAWAIAXQgEADgDATIgFAhQgEACgEAAIgEAAg");
	this.shape_25.setTransform(-4.2,-2.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E5EEF6").s().p("AAVB1IgBgBIABABgAABByIgIACIgDgIIgHgOQAAgGAGgJIABgBQADgUAEgUQgNgHgLAFQgGACgDAEQgEgjALgaIAIgQIAGgJQgCgHABgFQgDgHAEgFQAEgCAJgKIABgBQALgLAOgYIACAJQABACAAAIIgBAiIAAATQAAAUAEAUIABAHIAHAsQgCAHgDAQIgEAfQgEAIgEAGIgBABIAAAAQgKgCgJAAg");
	this.shape_26.setTransform(-2,-3.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E5EEF6").s().p("AgNB3QgGgOABgIQAAgMAHgPIABgBIANgmQgMgHgMAKQgGAEgDAGQgEgfANgbIAHgOIAGgKQgDgFgBgGQgDgKAEgKQAEgJAHgNIABgBQAMgOANgTIABAPIABAKIAAAgIAAATIACAmIAAAIIACArIgDAVIgEAeIgGAXIAAACIABAAIABABQgMAAgJADQgFACgFAEIgDgHgAAVB1IAAAAIAAAAg");
	this.shape_27.setTransform(-0.5,-3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E5EEF6").s().p("AgQB8QgFgMABgOQABgPAIgSIABgCIARgmQgMgEgNALQgGAGgDAHQgEgeAOgaIAHgNIAGgKQgDgFgCgHQgEgLAEgNQAEgNAGgPIACgBIAYggIABATIAAAJIABAgIAAARIAAAmIAAAIIgBAqIgCAWIgEAdIgEAcIAAADIABAAIABABQgMAAgIAGQgHADgFAGIgEgIg");
	this.shape_28.setTransform(0.4,-3.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E5EEF6").s().p("AgMA/IAUgnQgNgFgNANQgGAGgDAIQgDgeANgaIAOgWQgSgaAWgqIAaghIABA9IAAA+QgBAsgKBPIAAADIABAAIABABQgTABgNAQQgRgbASgsg");
	this.shape_29.setTransform(0.8,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23}]}).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	// Layer 6
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAxC0QgogeAGggIgaAbIgZgZQgRgRABgRQgVgYgUgaQgogxACgNQAFgfAegSICch5QgZAggBA2QgCA1AFAnQAEAlAPAcIAjBDIAZAsQASAWgDACQgSAPgUAAQgVAAgXgRg");
	this.shape_30.setTransform(-4.6,-5.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABFCqQgHAAgJgHIgIgFQgIgHgDgHQgCgEAAgFIgBABQgNANgNAJQgIgEgQgOIgJgJQgIgIgBgKQgUgVgNgaIgBgBIgCgEIgGgHIgKgOQgQgZABgLIAAAAQACgTAOgSIAKgKIATgUQA1g5AlgxIABgBQgIAUAJAiIAFASQABAgADAaQAEAlAKAXQAHAVAJAWIAHAUQAPAhACAKQAGALACAHQACAEgBACQgQAVgQAAIgEgBg");
	this.shape_31.setTransform(-3.6,-4.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgECTIgKgHQgIgHgDgIQgTgTgIgbIgBAAIgCgEIgGgHIgJgOQgNgVAAgMIAAgBQABgTALgRIAHgLIAPgVQApg+AQgwIABAAQAGAJAQASIALAJQABAeADAYQADAiAGAZIALAmIAEAUQAJAcAAANQADAKABAIIAAAFQgOAcgLgBQAAAAAAABQAAAAAAAAQgBAAAAAAQgBAAgBgBIgBAAIgFABIgEgBIgBABQgMALgNAHQgKgCgNgKg");
	this.shape_32.setTransform(-2.8,-3.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAFCTIgIgFQgIgGgEgHQgTgSgEgaIgBAAIgCgEIgFgIIgJgNQgKgSgBgOIAAgBQAAgRAIgSIAFgLIAMgWQAhhDAAguIABAAQAPABAXAGIAOACIAEAzQADAgAEAXIAFAmIACASQAEAYgBAQQABAKAAAIIAAAEQgLAggGAAIAIAGIADAFQADAFgDAGQgBADgEACIgBABQgMAKgMAGIgCAAQgLAAgNgIg");
	this.shape_33.setTransform(-2.2,-1.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAFCZIgIgFQgHgFgGgFQgSgRgCgbIgCgEIgGgIIgIgMQgIgRgBgOIAAgBQgBgRAGgUIAEgJIAIgWQAbhHgMgtIABAAQAZgFAZgDIASgCIAEAwIAEA1IACAlIAAASQABAUgCASIgBASIgBAFQgIAigCABQAJAFAGAFQAEADACAFQAGAJgCAJQgCAGgEAEIgBABQgMAKgMAEIgFAAQgKAAgLgEg");
	this.shape_34.setTransform(-1,-0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAECfIgIgFQgIgEgGgFQgSgQAAgbIgCgEIgGgIIgHgMQgIgQgBgOIAAgBQgBgQAEgUIAEgLIAHgWQAXhIgUgtIABAAIA6gQIATgFIAEAuIADA0IAAAkIgBATQgBARgDAUIgCASIgBAEIgGAlQALAGAIAHQAFAEADAFQAIAMgCAMQgBAHgGAFIgBABQgLAKgMADIgJAAQgIAAgJgCg");
	this.shape_35.setTransform(-0.2,-0.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFCcQgggQABgkIgCgEIgGgHIgHgNQgHgPgCgQQgBgPAEgVIAKggQAWhJgWgtIBRgZQAIBigDAjQgCAigHAoIgGApQAWALAIANQAJANgCAMQgCAJgGAFQgQAOgSAAQgMAAgMgHg");
	this.shape_36.setTransform(0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-27.7,28.8,42.9);


(lib.still_god = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 9 copy
	this.instance = new lib.Symbol9copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(7.5,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({startPosition:0},0).wait(1));

	// Symbol 2 copy
	this.instance_1 = new lib.Symbol2copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({startPosition:0},0).wait(1));

	// leg copy 2
	this.instance_2 = new lib.legcopy2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9.9,20.8,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({startPosition:0},0).wait(1));

	// Symbol 4 copy
	this.instance_3 = new lib.Symbol4copy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.9,-18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({startPosition:24},0).wait(1));

	// Tween 25 copy
	this.instance_4 = new lib.Tween25copy("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(17.9,16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({startPosition:0},0).wait(1));

	// body1 copy
	this.instance_5 = new lib.body1copy("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.4,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({startPosition:0},0).wait(1));

	// Symbol 14 copy
	this.instance_6 = new lib.Symbol14copy("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-12.2,27.4,1,1,-30,0,0,7.4,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:0,x:-14.8},7,cjs.Ease.get(0.99)).to({rotation:-30,x:-12.2},7,cjs.Ease.get(1)).to({rotation:-15,y:27.5},6,cjs.Ease.get(1)).to({rotation:-30,y:27.4},4,cjs.Ease.get(1)).wait(1));

	// leg copy
	this.instance_7 = new lib.legcopy3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9.9,20.8,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-37,64.9,75.2);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(14.3,13.9,1,1,0,0,0,14.3,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.6,27.9);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehj/A+gMAAAh8/MDH+AAAMAAAB8/g");
	mask.setTransform(640,400);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0057A7").s().p("AgDALQADgNABgIQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABAAIABABQgCAIgEAMIAAAAIgBAAg");
	this.shape.setTransform(466.5,542.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0057A7").s().p("AgMgCQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAMACAMAIIgBABIgYgIg");
	this.shape_1.setTransform(475.6,539);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0057A7").s().p("AAIAOIgTgZIAAgCIACgBQAIAHANASQAAABAAAAQABAAgBABQAAAAAAABQAAAAgBAAIgBABIgCgBg");
	this.shape_2.setTransform(477.3,532);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0057A7").s().p("AgLASQgmgCgpgdQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAkAbAlAEQAuAGA8ggQgXAPgbAJQgXAGgUAAIgKAAg");
	this.shape_3.setTransform(474.1,562.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0057A7").s().p("AgIAQQgrgJgUgYQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAXAYAoAJQARAEAUgBQARgBAWgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgUAJgZAAQgRAAgSgFg");
	this.shape_4.setTransform(472.1,561);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0057A7").s().p("AgMAGIAMgGQAIgDADgDQABAAAAgBQABAAAAAAQAAABAAAAQAAAAAAABQgEADgHACIgNAHIAAABIgBgCg");
	this.shape_5.setTransform(481.7,561);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0057A7").s().p("AABAWIAAAAQgCgOAAgJQgDgQACgEIABgBIABABIAAAAIgBAAQABAOAEAbQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgBAAIgBgBg");
	this.shape_6.setTransform(468.7,562.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0057A7").s().p("AABAVQgEgUAAgVQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQAFAdABAMQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCgBg");
	this.shape_7.setTransform(469.5,562.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0057A7").s().p("AACAWQgEgTgBgYIAAgBIABABQAFAaACAQQAAAAgBAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_8.setTransform(473.6,563.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0057A7").s().p("AADAWQgEgRgDgbIABAAQAGAYACAUIgBABIAAAAIgBgBg");
	this.shape_9.setTransform(474.4,563.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0057A7").s().p("AADANQgEgMgEgOIABAAQAGANAEAMIgBACIgBAAIgBgBg");
	this.shape_10.setTransform(478.9,563.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0057A7").s().p("AACAKQgCgEgDgPIABgBIABABIABAJIAEAKIAAABIgCgBg");
	this.shape_11.setTransform(479.6,562.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0057A7").s().p("AghApQgigHgRgVQgJgLAAgPQgBgIAEgWIABAAIABAcQACAPAIAJQASAWAjAGQAeAFAcgIQAWgFAlgYQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIgBACQgZAXgjAJQgSAEgRAAQgPAAgQgDg");
	this.shape_12.setTransform(474.2,561.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0057A7").s().p("AgGAOQgfgNgLgVQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABAAQAaAWAOAGQAJAFAQABIAcAEQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABIgOABQgUAAgSgJg");
	this.shape_13.setTransform(470,559.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0057A7").s().p("AAAADIgRgOIAAgBIABAAIATAMIAIAEQAFADACADIAAACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAQgGAAgKgKg");
	this.shape_14.setTransform(465.9,579);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0057A7").s().p("AgIAOQgXgSgKgcQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAABgBQADgBACADQANAdAUASQAMAPAfAKIAAABQgcgCgWgWg");
	this.shape_15.setTransform(471.3,583.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0057A7").s().p("AAKAkQgYgkACgkIABAAQAGAeADAGQACAMANAVQAAABAAAAQABABgBAAQAAAAAAABQAAAAAAAAIgBABIgCgBg");
	this.shape_16.setTransform(464.2,553.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0057A7").s().p("AABARQgDgLAAgHQAAgKACgEQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQgDADAAAJQAAAFACAMIgBAAIAAAAg");
	this.shape_17.setTransform(472.2,532.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0057A7").s().p("AAOALQgGgHgHgEIgOgHIAAgCIACgBQAIACAGAGQAIAFADAIIAAAAIAAAAg");
	this.shape_18.setTransform(473.7,531.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0057A7").s().p("AgFALQAAgLAIgKQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgEAEgBADIgEALIgBABIAAgBg");
	this.shape_19.setTransform(475.7,531.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0057A7").s().p("AAOAkQgOgOgHgSQgIgSACgTQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQACAmAVAeIAAABIAAAAg");
	this.shape_20.setTransform(461,540.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0057A7").s().p("AAOAEIgOgEQgEAAgJAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIABgBQAIgEAHACQAJACAFAEIAAABIAAAAIgBAAg");
	this.shape_21.setTransform(461.2,537);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0057A7").s().p("AgGgJQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQACAIAGAMQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgJgMgDgJg");
	this.shape_22.setTransform(462,536.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0057A7").s().p("AAUAHQgJgHgLgBQgFgCgOABIgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAQAKgDALAEQAMADAHAHIAAABIgBAAg");
	this.shape_23.setTransform(463.5,535.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0057A7").s().p("AAbB1QgUgFgRgMQghgWgRg0QgOgnAHgnQAIgrAhgXQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgeAZgGAjQgIAoANAkQAPAvAbAWQAPANAXAGQATAEAWgGQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgKAHgOAAQgIAAgKgCg");
	this.shape_24.setTransform(443.3,543);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0057A7").s().p("AgFAUQgDgTANgWQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQgMAXAEARQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_25.setTransform(440.1,533.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0057A7").s().p("Ag1ASQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAHgNAQgHQANgIAQgDQAOgDAQAEQARAEAKALQAAAAgBAAQgcgQgaAFQgcAFgWAYIgBABIgCgBg");
	this.shape_26.setTransform(445.1,533.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0057A7").s().p("AgJBAQgagagJgnQgJgsAQgYQAIgMAPgFQAOgGANAEQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgOgCgPAIQgOAIgHAOQgLAaAMAlQALAfAUAWQAWAZAeADQAAABAAAAQABAAAAAAQAAABAAAAQABAAAAABQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDAAQgZAAgbgag");
	this.shape_27.setTransform(449.4,542.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0057A7").s().p("AgtBRQgIgLgHgbQgFgUAAgTQABgsAUgTQAXgVAegCQAigBAXATQAAABgBAAQgZgPgfADQgeACgUAVQgUAUAFAqQABAQAGAVIAFAQQAEAJABAHQAAABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIgBABQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_28.setTransform(455.4,558.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0057A7").s().p("AAUAZQgPgBgMgRQgLgMgFgSQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAABQAIARAOALQAEAFASAIQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_29.setTransform(448.8,564.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0057A7").s().p("AAIAtQgIgIgIgiQgFgWABgZIABAAQAAAVAHAYIAGAWIALATQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgCABIgCgBg");
	this.shape_30.setTransform(447.8,566.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0057A7").s().p("AAVAVQgWgDgWgmQAAAAAAAAQAAAAAAAAQAAgBABABQAAAAAAAAQAKANANAJQAHAGAPAJQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAIAAgBg");
	this.shape_31.setTransform(446.7,569.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0057A7").s().p("AA1BcQgjgHgdgcQgbgYgTghQgagugIgrQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIACABQARAzAQAeQAXAqAfAYQAxAmAagOQAPgHgIgUQgFgOgNgNQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABgBQAAAAABAAQAAAAABAAQABAAAAAAQALAFAIAOQAHAOgBAMQAAAPgNAHQgHAEgKAAIgJAAg");
	this.shape_32.setTransform(453.7,577);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0057A7").s().p("AgWBcQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAoANABgwQABghgOgmQgIgcgOgZQgKgPgCgIIABAAQAAADAHAJIANAXQATAkAHAhQAMAvgLAXQgGANgPADIgHABQgIAAgIgEg");
	this.shape_33.setTransform(461.8,570.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0057A7").s().p("AgtgfQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBIACABQAVAaAPALQAUAQAcACQAEAAAAAFQAAAFgFAAIgFABQgpAAgohBg");
	this.shape_34.setTransform(480.1,590.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0057A7").s().p("AAgCNQgSgHgOgSQAAgDAAgCQADgCADACIATAOQAMAIAJACQANAEALgKQALgJAAgOQAAgSgXgTQgfgUgPgMQgzgrgVgkQgbgugDg3QAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIABABQAJA8AZAnQAMATAVAVQAMAKAYAWQAOANAbARQATANAKASQAHAOgEAPQgEAQgOAIQgJAFgKAAQgJAAgLgFg");
	this.shape_35.setTransform(484,582.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0057A7").s().p("AAFAOQAAgDgFgLIgGgMQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACABQADAEAFAMQAEAIgDAEIAAAAIgBgBg");
	this.shape_36.setTransform(483.1,560.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0057A7").s().p("AgZBTQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAQgNAHgIQAGgKAHgOQAFgMACgJQAIgkgWg8IABgBIABABQAbA6gIAoQgCANgGALQgRAlgVAIIgBABQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_37.setTransform(481.9,571.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0057A7").s().p("AgTAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQAQAAAZADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgOAAQgTAAgIgDg");
	this.shape_38.setTransform(485.6,575.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0057A7").s().p("AgPAHQAUgIAKgGQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgMALgUACQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBABAAg");
	this.shape_39.setTransform(486.2,576.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0057A7").s().p("AgrAAIgBgBIABgBQAUAEAXgBQAJAAANgBIAUgHQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgPAKgdAAIgCAAQgTAAgWgIg");
	this.shape_40.setTransform(489,577.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0057A7").s().p("AgNAVQghgWgWgqQgBAAAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAiAsAYAPQAOANAWAEQAHACAhACQADABAAADQgBABAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgNABQgkAAgegYg");
	this.shape_41.setTransform(490.6,566.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0057A7").s().p("AgyAoQgBAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAIAXgBQAOgBAJgCQAXgIAOgQQAKgKABgKQACgNgMgIQgMgIgOAGQgHAEgIALQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQACgMANgHQAOgFAMADQAMAEAGALQAHALgDAMQgIAYgjAPQgTAJgRAAQgMAAgKgEg");
	this.shape_42.setTransform(498.4,572.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0057A7").s().p("AgFAJQgQgQgDgRQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAIAWAMAKIARAMQAHAEABADIgBAAIgEABQgJAAgQgSg");
	this.shape_43.setTransform(474.5,559.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0057A7").s().p("AgBAIIAAgJIABgHIABAAQACACgBAFQAAAGgCADIAAABIgBgBg");
	this.shape_44.setTransform(477,561.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0057A7").s().p("AAOAJQgVgEgHgLIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAFAGAGADIAPAGIAAACIgBAAIAAAAg");
	this.shape_45.setTransform(478.6,561.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0057A7").s().p("AgEAQQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAHgOABgPIABgBIACABQABAUgJALIAAABIgCgBg");
	this.shape_46.setTransform(480.4,560.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0057A7").s().p("AAEAHQgBgEgHgHIgBgCQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAHAEABAKIgBABIgBgBg");
	this.shape_47.setTransform(481.5,559.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0057A7").s().p("AgEApQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAGgRgBgWQAAgNgEgYQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAIARgBAWQAAAWgIASIgBABIgBAAg");
	this.shape_48.setTransform(482.6,556.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0057A7").s().p("AADAaQgFgLgBgOQgCgNAFgMQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAABABQAAAAgBABQgFAYAGAXIAAACIgBgBg");
	this.shape_49.setTransform(472.4,557.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0057A7").s().p("AgCAEQgLgEgDgGIABgCQAFACAKAGIAHACIAJABIABADQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAIgFABQgGAAgHgFg");
	this.shape_50.setTransform(474.1,555.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0057A7").s().p("AgEAmQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQABgFADgLQACgKAAgGQADgRgDgWIAAgBIAAAAQAIAVgCARQgBAbgGAJIgCACIgBgBg");
	this.shape_51.setTransform(475.9,552.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0057A7").s().p("AAaAZQgMgCgTgSQgPgKgIgSIABgBQANASANAJIAPALIAOAHQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIgCABIgBAAg");
	this.shape_52.setTransform(478.8,551.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0057A7").s().p("AgDAMIADgMIAAgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAEALgJANIgBAAIAAgBg");
	this.shape_53.setTransform(482,552.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0057A7").s().p("AAOATQgWgQgFgTIAAgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIALASQAHALAIAHIgBABIAAAAg");
	this.shape_54.setTransform(483.6,552.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0057A7").s().p("AATBLQACgbAAgNQAAgVgGgRQgFgUgKgQQgFgKgVgTQgCgCACgDQABgDAEABQAQAHAMAWQAKARAGAWQAMAogOAqIgBABIgBgBg");
	this.shape_55.setTransform(483.1,547.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0057A7").s().p("AAPAxQgRgWgHgbQgEgPgBgJQgDgRADgFQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQADAFAAAOIAFAaQAFAaALAXIAAABIAAAAIgBAAg");
	this.shape_56.setTransform(460.4,547.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0057A7").s().p("AgFANQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAGgLQACgIADgEIABAAIABABIgEALQgDAKgDADIgCAAIAAAAg");
	this.shape_57.setTransform(476.7,522.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0057A7").s().p("AAMAoIgCgTQgCgMgCgIQgFgOgPgVQgCgCADgDQADgCACACQAOAPAGAXQAHAUgFAVIgBABIgBgBg");
	this.shape_58.setTransform(479,536);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0057A7").s().p("AAZBCQgdgTgPgwQgNgpACgYQAJArALAYQAOAjAaAWQADADgCADQgBABAAAAQAAABgBAAQAAAAgBAAQAAABAAAAIgDgBg");
	this.shape_59.setTransform(456.3,536.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0057A7").s().p("AgBAFQgJgDgFgGQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIABAAQAHAFAHABIAOABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgFABQgFAAgFgCg");
	this.shape_60.setTransform(454.7,530.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0057A7").s().p("AA1AiQgGgFgKgKIgPgPQgRgMgQgIQgNgGgHgBQgPgEAAAKQABAUAQAQQABAAAAABQAAAAAAABQABAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgUgOgCgZQgBgMAHgEQAHgEALADQAXAEAXATQAbASANAXQABAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgBAAIgBAAg");
	this.shape_61.setTransform(459,528.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0057A7").s().p("AgYAIQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAMgMAkAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQgSACgaALIgCAAIgCgBg");
	this.shape_62.setTransform(466.9,531.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0057A7").s().p("AgiBBQgKg2Adg8QAFgLAIgEQAHgFAIAIQAYAbABAiQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQgBABgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgIgegNgSQgGgIgDAAQgCAAgFALIgIATQgSAsABAvQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgBgCg");
	this.shape_63.setTransform(472.6,523.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0057A7").s().p("AgFA3QgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEAEgIIADgNQAEgOgBgNQgBgTgNghQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIACAAQASASACAlQABAQgEANQgFAWgFAEIgCABIgCgBg");
	this.shape_64.setTransform(478.5,526.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0057A7").s().p("AAJAJIgDgEIgGgFIgLgIIgBAAIgBAAIAAgCIABAAIAAAAIACAAIAJAFIACACIAIAFIAEAEIACABIgEAEg");
	this.shape_65.setTransform(500.9,572.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0057A7").s().p("AAGAFIgGgGIgLgIIgBAAIgBAAIgBgBIACgBIAAAAIAHADIAEACIAKAHIAGAGIgEAFg");
	this.shape_66.setTransform(501.9,571.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0057A7").s().p("AAAAPIAAgOIAAgHIgBgGIgBgBIAAgBIAAgBIABAAIABABIAAACIACAKIACAHIAAAKIgEABg");
	this.shape_67.setTransform(458.2,584.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0057A7").s().p("AAAANIAAgFIAAgIIgBgIIgDgGIgBgBIAAgBIACAAIAAAAIACACIABAFIACAJIAEAPIgGACg");
	this.shape_68.setTransform(459.8,583.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0057A7").s().p("AACALIgCgKIgDgKIgDgFIgBgCIAAgBIABAAIAAAAIACABIAEAFIAEALIAEANIgFAGg");
	this.shape_69.setTransform(461.1,583.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0057A7").s().p("AADAOIgBgEIgCgMIgGgIIgBgBIAAgBIAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIABAAIABABIAEAFIADAHIAEAIIABAFIgFACg");
	this.shape_70.setTransform(488.6,595);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0057A7").s().p("AADAHIgEgLIgGgIIgCgBIAAAAIAAAAIAAgCIABAAIABAAIAGAGIADAHIAFAHIADAHIgFAEg");
	this.shape_71.setTransform(490.2,593.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0057A7").s().p("AAHAIIgFgIIgEgFIgDgDIgGgFIAAAAIgBgBIACgBIAAAAIAHAFIAIAJIAGAHIACADIgDAHg");
	this.shape_72.setTransform(491.1,592.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0057A7").s().p("AglADQAIACAHgCIACgDQAJALAKAFQAIAFAIgDQAIgEACgNQACgKgEgQIANAIIABgCQADANgGALQgGAOgNAEQgIADgHAAQgUAAgRgXg");
	this.shape_73.setTransform(477.9,555.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0057A7").s().p("AgaABQAAgOAVgIQASgHAKAMQALAOgYAbQgjgGgBgSg");
	this.shape_74.setTransform(474.9,546.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0057A7").s().p("AgKASIABgCIAAgCIgHgRQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAIgEQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIgBACQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIACAHIAHgDIgDgHQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBgCQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIAIgDQABAAAAgBQABAAAAAAQAAAAABABQAAAAAAAAIAAACIgBACIAHASQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgJADQgBABAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIAAgCIAAgCIgDgIIgHACIADAJIABABIABABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgHADIgBABQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_75.setTransform(479.9,567.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0057A7").s().p("AgMAeQgNgGgFgNQgEgLAGgMQAFgNANgFQALgFANAHQALAFAGAMIAAABIAAABQAEALgFAMQgGAMgNAFQgFACgGAAQgFAAgHgDgAgIgYQgKAEgFAKQgEAKADAJQAEALAKAEQAKAFAJgEQALgDAEgLQAFgKgEgJQgEgKgKgFQgGgDgFAAQgDAAgFACg");
	this.shape_76.setTransform(480,567.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgLAbQgMgFgEgMQgEgKAFgLQAFgMAMgEQAKgEALAFQAMAGAEALQAEAKgFAMQgFALgMAEQgFACgFAAQgFAAgGgDg");
	this.shape_77.setTransform(480,567.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0057A7").s().p("AgvAdQgGgKgCgKQgBgJADAAQADgCAHAEQAGAHAGALIACAEQgFAFgDAHQgGAAgEgHgAAmAAIgBgEQgCgMABgJQABgJADgBQAEgBAFAIQAFAJACAMQABAGgDACIgQgBg");
	this.shape_78.setTransform(470.4,538.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFD23A").s().p("AABAVQgCgQgCgaQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAFAeABALQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgCgBg");
	this.shape_79.setTransform(466.8,561.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFD23A").s().p("AABAUIgBgTQgDgNAAgHQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFARACAXIgCABIgCgBg");
	this.shape_80.setTransform(471.7,563.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFD23A").s().p("AACANQgFgPgCgLIACAAQADAHAFASQABAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIAAAAIgCgBg");
	this.shape_81.setTransform(476.6,563.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFD23A").s().p("AAFANQgDgCgCgKIgFgNIAAAAQADAAACAKIAEAGQACAFAAADIAAABIgBAAg");
	this.shape_82.setTransform(481.5,561.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EC1A37").s().p("AgTAqQhWgQAOhEIAYAWQAgAUAjgCQAEgBAIAEQAIAFAFAAQACgBAAgHQAAgJABACQAHAKATAFQAEAAADgKIAFgVQAAgBAEAFIAGALQAAAAAAAAQAAAAAAgBQABgBAAgBQAAgBABgBIADgHIANAZQgQAMgXALQgjARgZAAIgOgBg");
	this.shape_83.setTransform(474.4,561.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E0E3F2").s().p("AgyAwQATgFANgMQgSACgagHQAPgegKgwQAeArAuAIQgJABgKADQgSADgLgDIAYAKQAhAJAjgQIgFAKQgHALgLAIQgWASgfAAQgRAAgUgFg");
	this.shape_84.setTransform(489.9,572.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E0E3F2").s().p("Ag7AaQgRgagNgiIgKgcQAJATAUAKQAKAGAIABQgOgQgIgmIgGgjQAPAcASAIQAJAEAGgBIAKAWQgHgQADgTIAEgQQABAfAVAjQAJARALALQgSgaACgjIAFgdQAEAwAdAoQAbAiARgGQAKgEgBgSQgBgLgEgNQAXBEgeAOQgPAHgVgJQAZAQAEAaQAEAYgMABIgBAAQhIAAg2hag");
	this.shape_85.setTransform(454.5,574.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E0E3F2").s().p("AAWBJIgWgeQgrgIgagsIgRgsQAKAQAZALQgOgNgJgnIgEgWQAFAPANAVQAKAQAKAMQgEgLABgRIACgQQAHAjAeArQAOATANAOQgCgLACgQIADgMQAHAeARAfQAQAcAVAUIgEAAQgfAAgegcg");
	this.shape_86.setTransform(475.7,583);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E0E3F2").s().p("AgygBQgFgWgCgaQAAgXABAAIAPAIQASAKATABQANACAMgEQAHAMAbAEIADAZQABAagJARQgFABgGgBQgNgBgHgJQgFAQAKAmQg3gFgThFg");
	this.shape_87.setTransform(470.4,553);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E0E3F2").s().p("AAPAlIgBAJQgBALgFAFQgogWgOgZQAYgZgJgOIARgTQAJgNABgRIAJAIQAMALAJAPQAdAtgLBEQgYgVgFgQg");
	this.shape_88.setTransform(480.7,547.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AEB8DE").s().p("AgXgDIAIADQAJAEAGACQgOgXgFgTIAOAKQAPAOAOAOIgKAJQgKAKAAANIgFADQgQgSgGgWg");
	this.shape_89.setTransform(459.9,533.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#AEB8DE").s().p("AABAkQgIgGgLADQgBgMACgOQAEgdALgTIABAbQABAaAAAJQADgQARgOIgGAUQgFAYAAAHQgCgDgGgDg");
	this.shape_90.setTransform(474,526.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E0E3F2").s().p("AAMBzQglgJgbgwQgmhBAWg6QAHgSAMgPIARgSQgIAOgCALQgBAGABAQQACATADALQADgEAGgEQAMgHANADIgJAUQgKAZAAATQABBFBiARQgFAEgDAFQgXAJgTAAQgIAAgHgCg");
	this.shape_91.setTransform(444.1,542.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#AEB8DE").s().p("AgkADIgJgmQAKAWAWACQANAKAOgHQALgDAGgMQAFgMgEgLQgDgJgJgGQgHgGgKABQATgJAGgFQASAyAAAfQAAA5gxAXQgTgggOgug");
	this.shape_92.setTransform(479.7,571.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#AEB8DE").s().p("AAAAWIAGAXQgYgOgJgIQAKgYgRgwQAIATAVARQAIAIAJAFQAKAmANAMQgagLgJgRg");
	this.shape_93.setTransform(467,575.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#AEB8DE").s().p("AgDAdIgCAFIgBANQgHgCgJgIQgSgNgLgVIAAgbQAGAIAKADQAXAdAegLQAMgFAGgMQAGgMgDgNQADgCACgJQAQAygRAbQgEgLgIgCIgBANQgCAPgFAEQgQgDgKgQg");
	this.shape_94.setTransform(477.7,557.5);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(465.5,588.1,1,1,0,0,0,14.3,13.9);
	this.instance.alpha = 0.148;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("Ag4AUQAAgUAJgYIAJgUQgNgEgKAHQgGAEgCAEQgFgOgCgSQAfgsArAIQATADAPANQgfgJgRAbQgWAfAUA1QAOAlAdATQAXANAcADIgQAFQgJADgIAGQhigPgBhEg");
	this.shape_95.setTransform(447.4,542.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAABIQAOgJAJgNIAGgMQgeASgngLIgegOQAPAGAqgJQgvgHgfgpQgEgUgIgZIAGgEQAEgBABgCQArA2APAMQAlAdAvgRQAKgEANgHQALgFANAMQATASgeAcQgaAZgqAAIgSgBg");
	this.shape_96.setTransform(492.9,569.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("ACmDcQgMgGgTgSQgVgTgQgdQgRgegHghIgDAOQgCARACALQgOgOgPgWQgegqgIgkIgBAQQgBASAEAKQgegmgIgbIAGAYQgJgFgKgIQgVgPgIgTQAGARABANQABASgKAEQgRAGgbgiQgdgogEgwIgFAdQgCAjASAaQgLgLgKgRQgWgjgBgfIgEAQQgDATAHAQIgKgWQgRguAAgiQAAg0AogOQA1gTArAfQAIARAMAUIAAAUQABAVAFAMQAGARAhANQAmAOAtgNQgHAGgDAJQgDAJAEAKQADAIAHAGQgXgCgJgWIAKA2QAUA9AzAtQAHAHAlAaQAeAVAKANIAJAWQADAYgYAJQgFABgFAAQgIAAgJgEg");
	this.shape_97.setTransform(470.9,573.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAhDWQgegJgTgaQg2hDgChPQgNgLgPgVQgdgogGgzIALAEQAMADAIgBQgGgEgGgJQgMgRACgTIAgAHQAnAPAhAmQAWgMAXgEQAAghACgOQAHguAagjIAQASQAQAXgBAWQAMgFADgSIAMAgQAJAngSAjIAQAVQAPAbgDAZQgCARgKAPQgEAGgOAPQgEgHgJgCQgJgBgKADQgMAEgFAKQgHAKAHAIQgMAEgPgCQgTgCgQgJIgPgIQgBAAABAVQABAZAGAWQAPBFA2AJIgBgZQALATAUAOIgSABQgTAAgPgEg");
	this.shape_98.setTransform(466.9,539.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EC1A37").s().p("AgDAnQgKgFgJgMQAHgRgCgYIgDgXQALATAeAVQAEAPgCAMQgCANgIADIgHACQgFAAgEgEg");
	this.shape_99.setTransform(478.1,553.2);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.instance.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.instance},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(436.2,517,67.4,85.1);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 15
	this.instance = new lib.Symbol23copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(350.1,543.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},114).wait(112));

	// color
	this.instance_1 = new lib.Symbol9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(117.7,630.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol9copy2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(108.4,629.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol9copy3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(469.1,587.6,0.987,0.989,0,-79.9,100.2,-12.8,-28.1);

	this.instance_4 = new lib.Symbol9copy6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(447.2,626.5,1.148,1.148,0,-75,105);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},3).to({state:[]},1).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},6).to({state:[]},1).to({state:[{t:this.instance_1}]},65).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},2).to({state:[]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({x:107.3,y:630.1,startPosition:9},9).to({_off:true},1).wait(151).to({_off:false,skewY:180,x:415.1,y:622.1,startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1.15,skewX:-45.2,skewY:134.8,x:403.1,y:628.7,startPosition:9},6).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({scaleY:1.05,x:107.7,y:613.4},5).wait(1).to({startPosition:0},0).to({scaleY:1,x:108.4,y:629.8},5).wait(1).to({startPosition:0},0).to({scaleY:1.05,x:107.7,y:612.8},5).wait(1).to({startPosition:0},0).to({scaleY:1,y:630.5},5).wait(1).to({regX:-3.3,regY:-26.2,x:104.4,y:604.3},0).to({regX:-3.1,scaleX:1,scaleY:1,rotation:32.8,x:125.9,y:602.8},1).to({scaleX:1,scaleY:1,rotation:58.6,x:162.3,y:606.9},2).to({regX:-3.5,regY:-24.8,scaleX:1,scaleY:1,rotation:71.4,x:175.5,y:608.9},1).to({regX:0,regY:0,rotation:86.4,x:209.5,y:629.4},4).wait(6).to({rotation:49.9,x:238.6,y:621.1},0).to({scaleX:0.97,scaleY:0.97,x:266.4,y:614.3},4).to({regX:0.2,regY:-0.1,scaleX:0.85,scaleY:0.85,rotation:75.9,x:322.6,y:608},4).to({regX:0.3,rotation:90.9,x:353.1,y:600.9},3).to({regY:-0.2,scaleX:1.23,scaleY:0.8,rotation:0,skewX:60.9,skewY:65.9,x:381,y:606},3).to({regX:0.2,regY:-0.1,scaleX:0.85,scaleY:0.85,rotation:41.6,skewX:0,skewY:0,x:391.6,y:600.1},3).to({regX:0.3,rotation:45,x:412.4,y:588},3).to({regX:0.4,rotation:75,x:439.6,y:586.3},3).to({_off:true},1).wait(10).to({_off:false,regX:-5.7,regY:-29.1,scaleX:1.11,scaleY:1.11,rotation:0,skewX:-91.5,skewY:88.5,x:444,y:595.4},0).to({regX:-5.5,scaleX:1.13,scaleY:1.13,skewX:-90,skewY:90,x:426.8,y:609.3},3).to({regY:-29.2,scaleX:1.15,scaleY:1.15,skewX:-105,skewY:75,x:418.6,y:609},3).to({_off:true},1).wait(79).to({_off:false,regY:-28.9,scaleX:1.26,scaleY:1.26,skewX:-51.5,skewY:128.5,x:380,y:603.6},0).to({scaleX:1.17,scaleY:1.17,skewX:-85.8,skewY:94.2,x:351.1,y:621.1},3).to({scaleX:1.18,scaleY:1.18,skewX:-66,skewY:114,x:330.5,y:623.3},3).to({regX:-5.4,regY:-29,scaleX:1.17,scaleY:1.17,skewX:-59.3,skewY:120.7,x:279.7,y:609},3).to({regX:-5.5,regY:-28.9,scaleX:1.1,scaleY:1.1,skewX:-104.3,skewY:75.7,x:230.1,y:618.1},3).to({regX:-5.4,scaleX:1.1,scaleY:1.1,skewX:-74.3,skewY:105.7,x:210,y:609.9},2).to({_off:true},1).wait(4).to({_off:false,regX:-5.5,scaleX:1.22,scaleY:1.22,skewX:-59.3,skewY:120.7,x:196.8,y:617.3},0).to({scaleX:1.16,scaleY:1.16,x:135.8,y:622.8},2).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(113).to({_off:false},0).to({scaleX:1.23,scaleY:1,x:442.6,y:625.4,startPosition:6},6,cjs.Ease.get(1)).to({_off:true},1).wait(106));

	// Layer 6
	this.instance_5 = new lib.Symbol2copy2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(361.4,629.2,0.846,0.846,30.9,0,0,36.3,-32.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80).to({_off:false},0).to({regX:36.2,regY:-32.6,scaleY:0.49,rotation:90.9,x:361.3},3).to({_off:true},1).wait(142));

	// front_leg
	this.instance_6 = new lib.Symbol15copy("synched",4);
	this.instance_6.parent = this;
	this.instance_6.setTransform(408.4,591.3,0.848,0.847,0,79.7,79.6,1.7,13.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol21("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(89.8,642.6,1,1,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},95).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},4).to({state:[]},1).to({state:[{t:this.instance_6}]},113).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7,p:{startPosition:0}}]},1).to({state:[{t:this.instance_7,p:{startPosition:4}}]},4).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95).to({_off:false},0).wait(1).to({regX:1.6,skewX:43.9,skewY:43.9,x:418.1,y:599,alpha:1,startPosition:0},0).to({regX:2.6,regY:14,scaleX:0.99,scaleY:0.99,skewX:44,skewY:43.8,x:450.2,y:596.5,startPosition:4},4).to({_off:true},1).wait(113).to({_off:false,regX:1.6,regY:13.8,scaleX:0.85,scaleY:0.85,skewX:-43.9,skewY:136.1,x:171.5,y:654.1,startPosition:0},0).to({regX:2.6,regY:14,scaleX:0.99,scaleY:0.99,skewX:-44,skewY:136.2,x:149.1,y:651.6,startPosition:4},4).to({_off:true},1).wait(7));

	// front_leg_paw
	this.instance_8 = new lib.Symbol16();
	this.instance_8.parent = this;
	this.instance_8.setTransform(96.8,661.4,1,1,0,0,0,-9.8,0);
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol16copy("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(422.3,592.4,1.036,1.036,118.6,0,0,-8.7,-0.1);
	this.instance_9._off = true;

	this.instance_10 = new lib.legcopy6("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(463.5,624.9,1,1,0,-30,150,0,0.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(58).to({_off:false},0).to({regX:-9.7,scaleX:1.06,scaleY:1.06,rotation:27.3,x:101.7,y:650.7},1).to({regX:-9.5,scaleX:1.22,scaleY:1.22,rotation:109.1,x:124,y:624.6},3).to({regX:-9.4,rotation:124.1,x:180.7,y:623.1},4).wait(6).to({regX:-9.3,regY:0.1,rotation:57.7,x:207.7,y:633.6},0).to({scaleX:1.19,scaleY:1.19,rotation:87.7,x:240.3,y:626.1},4).to({regY:-0.1,scaleX:1.04,scaleY:1.04,rotation:128.7,x:297.6,y:607.1},4).to({regX:-9.1,rotation:53.7,x:336.4,y:599.8},3).to({regX:-9,rotation:23.7,x:353.1,y:606},3).to({regX:-8.9,rotation:4.9,x:372,y:613},3).to({regX:-8.7,rotation:88.6,x:399.9,y:604.4},3).to({rotation:154.4,x:414.4,y:587.5},3).to({_off:true},1).wait(13).to({_off:false,regY:0,scaleX:1.14,scaleY:1.32,rotation:0,skewX:-109.9,skewY:70.1,x:482.9,y:604.9},0).to({regY:0.1,scaleX:1.15,scaleY:1.27,skewX:-95,skewY:85.2,x:484.3,y:601.3},1).to({regX:-8.3,regY:1.6,scaleX:1.16,scaleY:1.18,skewX:-65.2,skewY:115.3,x:471.5,y:610.7},2).to({_off:true},1).wait(79).to({_off:false,regX:-8.9,regY:0.7,scaleX:1.07,scaleY:1.18,skewX:-64.9,skewY:115.1,x:428.4,y:642.8},0).to({regX:-8.8,skewX:-151.4,skewY:28.6,x:403.8,y:621.6},3).to({regX:-8.9,regY:0.6,skewX:-34.9,skewY:145.1,x:371.8,y:644.5},3).to({skewX:-79.9,skewY:100.1,x:319.1,y:639},3).to({regX:-8.8,skewX:-139.9,skewY:40.1,x:279.9,y:607},3).to({skewX:-109.9,skewY:70.1,x:258.7,y:625.1},2).to({_off:true},1).wait(4).to({_off:false,regX:-8.9,skewX:-79.9,skewY:100.1,x:236.5,y:648},0).to({regX:-8.8,regY:0.7,scaleX:1.05,scaleY:1.08,skewX:-105.6,skewY:74.4,x:176.2,y:651.9},2).to({_off:true,regX:-8.7,regY:-0.1,scaleX:1.04,scaleY:1.04,skewX:-118.6,skewY:61.4,x:167.4,y:647.5,mode:"synched",startPosition:0},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(96).to({_off:false},0).to({regX:-8.3,regY:-1,scaleX:1.21,scaleY:1.21,rotation:0,skewX:118.6,skewY:118.7,x:458.4,y:580.7,startPosition:4},4).to({_off:true},1).wait(112).to({_off:false,regX:-8.7,regY:-0.1,scaleX:1.04,scaleY:1.04,skewX:241.4,skewY:61.4,x:167.4,y:647.5,startPosition:0},1).to({regX:-8.3,regY:-1,scaleX:1.21,scaleY:1.21,skewY:61.3,x:140.8,y:635.8,startPosition:4},4).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(113).to({_off:false},0).to({skewX:0,skewY:180,x:432.2,y:645.2,startPosition:6},6,cjs.Ease.get(1)).to({_off:true},1).wait(106));

	// front_paw
	this.instance_11 = new lib.Symbol2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(115.7,652.3);
	this.instance_11._off = true;

	this.instance_12 = new lib.Symbol2copy2("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(102.6,614.7,1,1,0,0,0,-3.1,-37.6);
	this.instance_12._off = true;

	this.instance_13 = new lib.Symbol2copy4("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(458.1,585.1,0.884,0.882,20.5,0,0,5.6,-41.4);
	this.instance_13._off = true;

	this.instance_14 = new lib.head_left("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(407.1,602.2,1,1,0,-60,120,-15.7,-23.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.Symbol2copy14("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(94.1,645.6,1.033,1.029,0,40.3,40.2,6.5,-41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},24).to({state:[{t:this.instance_11}]},9).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_12}]},6).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_12}]},4).to({state:[]},1).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},4).to({state:[]},1).to({state:[{t:this.instance_14}]},11).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_14}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},65).to({state:[{t:this.instance_11}]},6).to({state:[]},1).to({state:[{t:this.instance_13}]},22).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_15,p:{startPosition:0}}]},1).to({state:[{t:this.instance_15,p:{startPosition:4}}]},4).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({x:104.9,startPosition:9},9).to({_off:true},1).wait(151).to({_off:false,skewY:180,x:417.1,y:643.9,startPosition:0},0).to({skewX:-45.2,skewY:134.8,x:420.6,y:641.3,startPosition:9},6).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(34).to({_off:false},0).to({rotation:-15,y:596.8},5).wait(1).to({startPosition:0},0).to({rotation:0,y:614.7},5).wait(1).to({startPosition:0},0).to({rotation:-15,y:596.2},5).wait(1).to({startPosition:0},0).to({rotation:0,y:614.7},5).wait(1).to({startPosition:0},0).to({rotation:71.4,x:166.7,y:613.5},4).to({rotation:86.4,x:224.9,y:623.3},4).wait(6).to({regX:-3,rotation:49.9,x:244.3,y:615.1},0).to({scaleX:0.97,scaleY:0.97,rotation:4.9,x:279.7,y:608.5},4).to({regX:-2.9,regY:-37.5,scaleX:0.85,scaleY:0.85,rotation:30.9,x:335.1},4).to({_off:true},1).wait(2).to({_off:false,regX:5,regY:-42.1,scaleY:0.53,rotation:90.9,x:367,y:602.8},0).to({regX:5.3,regY:-41.8,scaleX:0.68,scaleY:0.68,rotation:45.9,x:391.9,y:601},3).to({regX:5.5,regY:-41.6,rotation:-12.9,x:406.5,y:589},3).to({regX:5.7,regY:-41.4,scaleX:0.88,scaleY:0.88,rotation:-9.5,x:428,y:577.9},3).to({regX:5.6,rotation:20.5,x:458.1,y:585.4},3).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(96).to({_off:false},0).to({regX:6.5,regY:-41,scaleX:1.03,scaleY:1.03,rotation:0,skewX:40.3,skewY:40.2,x:463.9,y:589.4,startPosition:4},4).to({_off:true},1).wait(113).to({_off:false,regX:5.6,regY:-41.4,scaleX:0.88,scaleY:0.88,skewX:-20.5,skewY:159.5,x:131.6,y:640.2,startPosition:0},0).to({regX:6.5,regY:-41,scaleX:1.03,scaleY:1.03,skewX:-40.3,skewY:139.8,x:135.4,y:644.5,startPosition:4},4).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(112).to({_off:false},0).to({regX:-14.3,regY:-9.2,scaleX:1.07,scaleY:1.07,skewX:-53.9,skewY:126.1,x:420,y:611.3,alpha:1},1).to({scaleX:1,scaleY:1,skewX:-30.6,skewY:149.4,x:420.5,y:620.2,startPosition:6},5,cjs.Ease.get(1)).to({regX:-13.2,regY:-12.1,scaleX:1.02,scaleY:1.02,skewX:-30,skewY:150,x:417.8,y:619.5},1).to({_off:true},1).wait(106));

	// front_leg
	this.instance_16 = new lib.leg("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(100.3,652,1,1,0,0,0,0,0.3);
	this.instance_16._off = true;

	this.instance_17 = new lib.legcopy4("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(90.3,652,1,1,0,0,0,0,0.3);
	this.instance_17._off = true;

	this.instance_18 = new lib.Symbol15();
	this.instance_18.parent = this;
	this.instance_18.setTransform(100.5,662.1,1,1,0,0,0,0,12.7);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(24).to({_off:false},0).to({x:89.5,startPosition:9},9).to({_off:true},1).wait(151).to({_off:false,skewY:180,x:432.5,y:643.7,startPosition:0},0).to({regX:-0.1,skewX:-45.2,skewY:134.8,x:431.3,y:630.1,startPosition:9},6).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(34).to({_off:false},0).to({regY:0.4,scaleY:0.95,rotation:15,x:90.2,y:636},5).wait(1).to({startPosition:0},0).to({regY:0.3,scaleY:1,rotation:0,x:90.3,y:652},5).wait(1).to({startPosition:0},0).to({regY:0.4,scaleY:0.95,rotation:15,x:90.2,y:635.4},5).wait(1).to({startPosition:0},0).to({regY:0.3,scaleY:1,rotation:0,x:90.3,y:652},5).to({_off:true},1).wait(168));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(58).to({_off:false},0).to({regX:0.9,regY:13.5,scaleX:0.82,scaleY:0.82,rotation:49.4,x:121.2,y:630.3},4).to({regX:1,regY:13.6,rotation:64.4,x:176.6,y:627.8},4).wait(6).to({regX:1.1,regY:13.5,rotation:27.9,x:211.2,y:639.4},0).to({regX:1.2,scaleX:0.8,scaleY:0.8,x:240,y:632},4).to({regX:1.4,scaleX:0.7,scaleY:0.7,rotation:53.9,x:294.9,y:611.8},4).to({regY:13.6,scaleX:0.83,scaleY:0.83,rotation:8.9,x:338.6,y:605.7},3).to({regX:1.5,regY:13.9,scaleX:0.79,scaleY:0.79,rotation:38.9,x:355.8,y:608.8},3).to({regX:1.3,regY:13.5,scaleX:0.85,scaleY:0.85,rotation:0,skewX:20.2,skewY:20.2,x:376.2,y:618.1},3).to({regX:1.5,regY:13.7,skewX:13.9,skewY:13.9,x:399.7,y:609.6},3).to({regX:1.6,regY:13.8,skewX:79.7,skewY:79.6,x:408.3,y:590.8},3).to({_off:true},1).wait(13).to({_off:false,regX:2.4,regY:-12,scaleX:0.92,scaleY:0.92,skewX:-23.9,skewY:156.1,x:465.7,y:595.5,alpha:0},0).wait(1).to({regX:2.8,regY:-11.6,scaleX:1.01,scaleY:0.9,skewX:-53.9,skewY:126.1,x:463.3,y:597.4,alpha:1},0).to({regX:3.1,regY:-10.7,scaleX:0.92,scaleY:0.94,skewX:-61.5,skewY:118.6,x:449.6,y:604.2},2).to({_off:true},1).wait(79).to({_off:false,regX:2.1,regY:-11.4,scaleX:0.94,scaleY:1.17,skewX:-36.4,skewY:143.6,x:409.5,y:624.2},0).to({regX:2.3,skewX:-97.7,skewY:82.3,x:380,y:628},3).to({regX:2.2,scaleY:0.97,skewX:-21.4,skewY:158.6,x:356.1,y:625.3},3).to({regY:-11.5,scaleY:1.17,skewX:-21.4,x:307,y:618.2},3).to({regX:2.3,regY:-11.4,scaleY:1.17,skewX:-81.4,skewY:98.6,x:255.8,y:605.6},3).to({skewX:-51.5,skewY:128.6,x:238.5,y:611.8},2).to({_off:true},1).wait(4).to({_off:false,regX:2.2,regY:-11.5,scaleY:1.17,skewX:-21.4,skewY:158.6,x:224.3,y:627.2},0).to({x:162.9,y:632},2).to({_off:true},1).wait(12));

	// head
	this.instance_19 = new lib.Symbol4("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(123.1,612.4);
	this.instance_19._off = true;

	this.instance_20 = new lib.Symbol4copy2("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(113.1,612.4);
	this.instance_20._off = true;

	this.instance_21 = new lib.Symbol4copy4("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(463.3,587.2,0.846,0.846,49.1,0,0,1.1,0.4);
	this.instance_21._off = true;

	this.instance_22 = new lib.Symbol4copy6("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(494,591.8,0.943,0.943,0,-41.6,138.6,2,0.5);
	this.instance_22._off = true;

	this.instance_23 = new lib.Symbol4copy8("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(483.7,594.6,0.877,0.877,0,-34.1,146,0.8,0.5);
	this.instance_23._off = true;

	this.instance_24 = new lib.Symbol4copy10("synched",4);
	this.instance_24.parent = this;
	this.instance_24.setTransform(126.6,642.5,0.987,0.988,0,-58.6,121.6,2.1,0.4);

	this.instance_25 = new lib.Symbol4copy11("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(100.3,643.3,0.987,0.988,0,58.6,58.4,2.1,0.4);

	this.instance_26 = new lib.Symbol4copy9("synched",4);
	this.instance_26.parent = this;
	this.instance_26.setTransform(100.3,643.3,0.987,0.988,0,58.6,58.4,2.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},24).to({state:[{t:this.instance_19}]},9).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},5).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},5).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},5).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},5).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},4).to({state:[{t:this.instance_20}]},6).to({state:[{t:this.instance_20}]},4).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[]},1).to({state:[{t:this.instance_19}]},72).to({state:[{t:this.instance_19}]},6).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_20}]},2).to({state:[]},1).to({state:[{t:this.instance_20}]},4).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},4).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(24).to({_off:false},0).to({x:112.3,startPosition:9},9).to({_off:true},1).wait(151).to({_off:false,skewY:180,x:409.7,y:604,startPosition:0},0).to({regX:-0.1,regY:0.1,scaleX:1.19,scaleY:1.19,skewX:-30.2,skewY:149.8,x:382.3,y:622.9,startPosition:9},6).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(34).to({_off:false},0).to({regX:0.1,regY:0.1,scaleY:1.05,rotation:-9,x:114.4,y:592.6},5).wait(1).to({startPosition:0},0).to({regX:0,regY:0,scaleY:1,rotation:0,x:113.1,y:612.4},5).wait(1).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleY:1.05,rotation:-9,x:114.4,y:592},5).wait(1).to({startPosition:0},0).to({regX:0,regY:0,scaleY:1,rotation:-15,x:115.8,y:609.9},5).wait(1).to({regX:-13.7,regY:-8.6,x:100.3,y:605.2},0).to({regY:-8.5,rotation:17.8,x:122.1,y:601.1},1).to({scaleX:1,scaleY:1,rotation:43.6,x:159.6,y:603.8},2).to({regX:-15.2,regY:-7,scaleX:1,scaleY:1,rotation:56.4,x:173.5,y:605},1).to({regX:0.1,regY:0.1,rotation:71.4,x:230.5,y:636.4},4).wait(6).to({regX:0.2,rotation:34.9,x:259.6,y:614.3},0).to({regX:0.3,scaleX:0.97,scaleY:0.97,x:286.9,y:607.8},4).to({scaleX:0.89,scaleY:0.89,rotation:52.9,x:313.2,y:609.4},2).to({regX:0.5,regY:0.2,scaleX:0.85,scaleY:0.85,rotation:65,x:339.5,y:610.5},2).to({rotation:80,x:368.8,y:607.6},3).to({scaleX:0.85,scaleY:0.85,rotation:65,x:379.4,y:606.8},1).to({regX:0.7,regY:0.1,scaleX:0.85,scaleY:0.85,rotation:20,x:406.7,y:597.8},2).to({regX:0.8,regY:0.3,rotation:0.6,x:415.3,y:587.1},3).to({regX:0.9,rotation:4.1,x:436.8,y:576.4},3).to({regX:1.1,regY:0.4,rotation:49.1,x:463.3,y:587.2},3).to({_off:true},1).wait(12).to({_off:false,regX:-12,regY:-9.6,scaleX:1,scaleY:1,rotation:0,skewX:-80,skewY:100,x:426.5,y:607.3},1).to({regX:-11.9,scaleX:1.04,scaleY:1.04,x:415.6,y:606.2},3).to({_off:true},1).wait(79).to({_off:false,regX:-12.1,regY:-9,scaleX:1.19,scaleY:1.19,skewX:-32.5,skewY:147.5,x:380.2,y:601.5},0).to({regX:-12.2,regY:-9.2,scaleX:1.11,scaleY:1.11,skewX:-60.7,skewY:119.3,x:349.5,y:618.6},3).to({regX:-12,regY:-9.5,scaleX:1.2,scaleY:1.2,skewX:-26,skewY:154,x:329.8,y:622.8},3).to({regX:-12.2,regY:-9.4,scaleX:1.13,scaleY:1.13,skewX:-25.3,skewY:154.7,x:279.4,y:608.5},3).to({regX:-12.1,regY:-9.3,scaleX:0.95,scaleY:0.95,skewX:-70.3,skewY:109.7,x:229.5,y:618.3},3).to({skewX:-40.3,skewY:139.7,x:209.4,y:609.7},2).to({_off:true},1).wait(4).to({_off:false,regX:-12.2,scaleX:1.13,scaleY:1.13,skewX:-25.3,skewY:154.7,x:196.8,y:617.6},0).to({scaleX:1.06,scaleY:1.06,skewX:-41.1,skewY:138.9,x:136.4,y:619.6},2).to({_off:true,regX:1.1,regY:0.4,scaleX:0.97,scaleY:0.97,skewX:-49.1,skewY:130.9,x:126.3,y:642.4},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(96).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,x:468.2,y:588.4,startPosition:1},1).to({regX:2.1,scaleX:0.99,scaleY:0.99,rotation:0,skewX:58.6,skewY:58.4,x:470.1,y:587.1,startPosition:4},3).to({_off:true},1).wait(112).to({_off:false,regX:1.1,scaleX:0.97,scaleY:0.97,skewX:-49.1,skewY:130.9,x:126.3,y:642.4,startPosition:0},1).to({regX:1.2,scaleX:1,scaleY:1,x:123.1,y:644.1},1).to({_off:true,regX:2.1,scaleX:0.99,scaleY:0.99,skewX:-58.6,skewY:121.6,x:126.6,y:642.5,startPosition:4},3).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(101).to({_off:false},0).to({_off:true,regX:0.8,scaleX:0.88,scaleY:0.88,skewX:-34.1,skewY:146,x:483.7,y:594.6},3).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(101).to({_off:false},3).wait(1).to({regX:0.7,regY:0.8,scaleX:1.01,scaleY:1.01,x:460.9,y:607.4,startPosition:1},0).wait(1).to({regX:0.8,scaleX:1.08,scaleY:1.08,skewX:-42.3,skewY:137.8,x:441.2,y:612.2,startPosition:2},0).to({regX:0.7,scaleX:1.01,scaleY:1.01,skewX:-69.1,skewY:110.9,x:438.5,y:620.3,startPosition:4},2).to({_off:true,regX:-12,regY:-9.6,scaleX:1,scaleY:1,skewX:-80,skewY:100,x:426.5,y:607.3,startPosition:0},1).wait(117));

	// color
	this.instance_27 = new lib.Symbol9copy3("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(439.6,586.3,0.846,0.846,75,0,0,0.4,-0.1);
	this.instance_27._off = true;

	this.instance_28 = new lib.Symbol9copy5("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(492.6,580.2,0.987,0.989,0,-75.1,105,-10.7,-25.9);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(96).to({_off:false},0).to({regX:1.3,regY:-0.5,scaleX:0.99,scaleY:0.99,rotation:0,skewX:75.1,skewY:75,x:457.4,y:593,startPosition:4},4).to({_off:true},1).to({_off:false,regX:-12.7,regY:-28.1,skewX:-94.9,skewY:85.2,x:484.5,y:578.9},3).to({_off:true},1).wait(109).to({_off:false,regX:0.5,regY:0.1,scaleX:1.1,scaleY:1.1,skewX:-75,skewY:105,x:157.3,y:643.9,startPosition:0},0).to({regX:1.3,regY:-0.5,scaleX:0.99,scaleY:0.99,skewX:-75.1,x:141.8,y:648.1,startPosition:4},4).wait(1).to({skewX:75.1,skewY:75,x:87.6,y:649.2},0).to({regY:-0.6,scaleX:1.15,scaleY:1.15,x:89,y:644.6,startPosition:3},4).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(101).to({_off:false},0).to({_off:true,regX:-12.7,regY:-28.1,skewX:-94.9,skewY:85.2,x:484.5,y:578.9,startPosition:4},3).wait(122));

	// Layer 9
	this.instance_29 = new lib.Symbol2copy2("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(494,591.1,0.692,0.912,0,-38.9,141.1,4.9,-44);
	this.instance_29._off = true;

	this.instance_30 = new lib.Symbol2copy12("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(421.7,622.5,0.888,0.888,0,-18.5,161.5,-4.9,-21.9);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(101).to({_off:false},0).to({regX:0.1,regY:-43.9,scaleX:0.91,scaleY:0.84,skewX:-15.9,skewY:164.1,x:489.3,y:598.6},3).to({regY:-43.8,skewX:-17.4,skewY:162.6,x:462.1,y:604.5},2).to({regX:-0.1,regY:-43.6,scaleX:1.02,scaleY:0.94,skewX:-42.4,skewY:137.6,x:441.8,y:615.5},3).to({regX:0.1,scaleX:1,scaleY:0.93,skewX:-66.1,skewY:113.9,x:431.9,y:614.3},3).to({_off:true},1).wait(79).to({_off:false,regX:-0.1,regY:-43.1,scaleX:0.91,scaleY:0.84,skewX:-31.1,skewY:148.9,x:381,y:613.5},0).to({regX:0,regY:-43.4,skewX:-50.3,skewY:129.6,x:359.1,y:632.3},3).to({regX:0.1,regY:-43.6,skewX:-75.9,skewY:104.1,x:342.5,y:627.2},3).to({regX:0,regY:-43.3,skewX:-8.9,skewY:171.1,x:282.2,y:622.6},3).to({regX:0.1,regY:-43.2,skewX:-53.9,skewY:126.1,x:241.3,y:626.2},3).to({regX:-0.1,skewX:-23.9,skewY:156.1,x:215.8,y:622.3},2).to({_off:true},1).wait(4).to({_off:false,regX:0,regY:-43.3,skewX:-8.9,skewY:171.1,x:199.5,y:631.6},0).to({x:138.1,y:636.4},2).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(113).to({_off:false},0).to({scaleX:1.01,scaleY:1.01,skewX:-0.3,skewY:179.7,x:421.2,y:622.7,startPosition:6},6,cjs.Ease.get(1)).to({_off:true},1).wait(106));

	// Layer 10
	this.instance_31 = new lib.Symbol15copy4("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(504.3,583.4,0.679,0.724,0,-44,136.2,-3.1,-8.1);
	this.instance_31._off = true;

	this.instance_32 = new lib.Symbol15();
	this.instance_32.parent = this;
	this.instance_32.setTransform(485.3,590.3,0.936,0.885,0,-73.9,106.1,-3.4,-5.8);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(101).to({_off:false},0).to({regX:-3.3,regY:-8.4,scaleY:0.99,skewX:-59,skewY:121.2,x:500.1,y:586.1,startPosition:1},3).to({regX:-3.1,regY:-8.2,scaleX:0.82,scaleY:1.17,skewX:-83,skewY:97.2,x:482.1,y:593,startPosition:3},2).to({_off:true,regX:-3.4,regY:-5.8,scaleX:0.94,scaleY:0.89,skewX:-73.9,skewY:106.1,x:485.3,y:590.3,mode:"independent"},1).wait(1).to({_off:false,regX:-3.1,regY:-7.9,scaleX:1.04,scaleY:0.72,skewX:-56,skewY:124.2,x:472,y:596,mode:"synched",startPosition:4},1).to({_off:true},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(106).to({_off:false},1).to({regY:-5.7,scaleX:1,scaleY:0.89,skewX:-50,skewY:130.1,x:481.5,y:592.3},1).to({_off:true,regX:-3.1,regY:-7.9,scaleX:1.04,scaleY:0.72,skewX:-56,skewY:124.2,x:472,y:596,mode:"synched",startPosition:4},1).wait(117));

	// Layer 11
	this.instance_33 = new lib.Symbol16copy3("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(506.4,586.2,1.036,1.036,0,-127.6,52.4,-8.3,-0.1);
	this.instance_33._off = true;

	this.instance_34 = new lib.Symbol2copy13_1("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(411,623,1.215,0.919,0,-45,135.1,12.9,-47.3);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(101).to({_off:false},0).to({regX:-8.2,scaleX:1.03,scaleY:1.03,skewX:-148.6,skewY:31.4,x:506.8,y:591.9,startPosition:1},3).to({regX:-8.1,scaleX:1.22,scaleY:1.22,skewX:-157.5,skewY:22.5,x:496.7,y:595.8,startPosition:3},2).to({regY:0,scaleX:1.16,scaleY:1.16,skewX:-142.4,skewY:37.6,x:494.5,y:594.8,startPosition:4},1).to({regX:-8,scaleX:1.17,scaleY:1.17,skewX:-106.8,skewY:73.2,x:489.7,y:601.4},1).to({_off:true},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(113).to({_off:false},0).to({x:395,y:627,startPosition:6},6,cjs.Ease.get(1)).to({_off:true},1).wait(106));

	// Layer 13
	this.instance_35 = new lib.body1copy2("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(418.2,611.1,0.994,0.994,0,-100.5,79.5,1.6,-47.8);
	this.instance_35._off = true;

	this.instance_36 = new lib.body1copy7("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(415.7,647.1,1,1,0,0,180);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(110).to({_off:false},0).to({regX:0.1,regY:-48.4,scaleY:0.86,x:413,y:610.5},2).to({_off:true},1).wait(79).to({_off:false,regX:0.3,regY:-48.1,scaleX:0.99,scaleY:0.93,skewX:-47.1,skewY:132.9,x:375.7,y:599.7},0).to({regX:0.4,regY:-48,scaleX:0.99,scaleY:0.84,skewX:-81.3,skewY:98.7,x:344.9,y:620.5},3).to({regX:0.3,regY:-48.3,scaleY:0.79,skewX:-61.6,skewY:118.4,x:325,y:617.1},3).to({regY:-48.1,skewX:-54.8,skewY:125.2,x:274.7,y:605.6},3).to({scaleY:0.79,skewX:-99.8,skewY:80.2,x:224,y:619.4},3).to({skewX:-69.8,skewY:110.2,x:204,y:607.9},2).to({_off:true},1).wait(4).to({_off:false,scaleY:0.79,skewX:-54.8,skewY:125.2,x:192.1,y:614.6},0).to({x:130.6,y:619.4},2).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(113).to({_off:false},0).to({x:420.3,y:636,startPosition:6},6,cjs.Ease.get(1)).to({_off:true},1).wait(106));

	// Layer 12
	this.instance_37 = new lib.body1copy6("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(475.3,590.7,0.987,0.989,0,-75.1,105,1.8,-48.2);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(104).to({_off:false},0).to({regX:1.9,regY:-48.1,scaleY:1.15,skewX:-89.8,skewY:90.3,x:438.7,y:597.8,startPosition:2},2).to({regX:1.8,scaleY:0.99,skewX:-99.8,skewY:80.3,x:420.2,y:611.4,startPosition:4},3).to({_off:true},1).wait(116));

	// body
	this.instance_38 = new lib.body1("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(111.6,643.9);
	this.instance_38._off = true;

	this.instance_39 = new lib.body1copy2("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(101.6,643.9);
	this.instance_39._off = true;

	this.instance_40 = new lib.body1copy3("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(465.7,574.5,0.846,0.846,75,0,0,0.7,-47.6);
	this.instance_40._off = true;

	this.instance_41 = new lib.body1copy5("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(487.2,602.4,0.985,0.987,0,135.1,134.9,18.4,-41.1);
	this.instance_41._off = true;

	this.instance_42 = new lib.Symbol2copy2("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(379.9,609.2,0.906,0.84,0,-11.7,168.3,-0.3,-43.4);
	this.instance_42._off = true;

	this.instance_43 = new lib.body1copy7_1("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(119.4,634,0.987,0.989,0,75.1,75,1.8,-48.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_38}]},24).to({state:[{t:this.instance_38}]},9).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},5).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},5).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},5).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},5).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},4).to({state:[{t:this.instance_39}]},4).to({state:[{t:this.instance_39}]},6).to({state:[{t:this.instance_39}]},4).to({state:[{t:this.instance_39}]},4).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},4).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_41}]},2).to({state:[]},1).to({state:[{t:this.instance_38}]},81).to({state:[{t:this.instance_38}]},6).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_42}]},2).to({state:[]},1).to({state:[{t:this.instance_42}]},4).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},4).to({state:[{t:this.instance_43,p:{startPosition:0}}]},1).to({state:[{t:this.instance_43,p:{startPosition:4}}]},4).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(24).to({_off:false},0).to({x:100.9,startPosition:9},9).to({_off:true},1).wait(151).to({_off:false,skewY:180,x:421.1,y:635.5,startPosition:0},0).to({regX:-0.1,regY:0.1,skewX:-45.2,skewY:134.8,x:417.5,y:632.5,startPosition:9},6).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(34).to({_off:false},0).to({regY:0.1,scaleY:1.01,y:625.8},5).wait(1).to({startPosition:0},0).to({regY:0,scaleY:1,y:643.9},5).wait(1).to({startPosition:0},0).to({regY:0.1,scaleY:1.01,y:625.2},5).wait(1).to({startPosition:0},0).to({regY:0,scaleY:1,y:643.9},5).wait(1).to({startPosition:0},0).to({rotation:71.4,x:138.8,y:621.9},4).to({rotation:86.4,x:195.8,y:624.2},4).wait(6).to({regX:0.1,regY:-0.1,rotation:49.9,x:224.5,y:625.1},0).to({scaleX:0.97,scaleY:0.97,x:252.8,y:618.1},4).to({scaleX:0.85,scaleY:0.85,rotation:75.9,x:310.3,y:605.7},4).to({regX:0.3,regY:-0.2,scaleY:0.77,rotation:90.9,x:344.9,y:595.6},3).to({regY:-0.1,scaleY:0.85,rotation:75.9,x:363.7,y:595.9},3).to({regX:0.4,rotation:41.6,x:380.3,y:605.2},3).to({rotation:45,x:400.7,y:592.4},3).to({regX:0.5,rotation:75,x:427.3,y:584.3},3).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(96).to({_off:false},0).to({regX:1.8,regY:-48.2,scaleX:0.99,scaleY:0.99,rotation:0,skewX:75.1,skewY:75,x:489.2,y:577.8,startPosition:4},4).to({_off:true},1).wait(112).to({_off:false,regX:0.7,regY:-47.6,scaleX:0.85,scaleY:0.85,skewX:-75,skewY:105,x:123.9,y:629.7,startPosition:0},1).to({regX:1.8,regY:-48.2,scaleX:0.99,scaleY:0.99,skewX:-75.1,x:110.1,y:633,startPosition:4},4).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(101).to({_off:false},0).to({regY:-41.2,skewX:154.8,skewY:154.6,x:480.3,y:603.5},2).to({_off:true},1).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(192).to({_off:false},0).to({regX:-0.1,scaleX:0.91,scaleY:0.84,skewX:-32.6,skewY:147.4,x:355.3,y:631.1},3).to({regX:0.1,regY:-43.6,scaleX:0.91,scaleY:0.84,skewX:-75.9,skewY:104.1,x:334.6,y:622.8},3).to({regX:-0.1,regY:-43.4,skewX:10.6,skewY:190.6,x:279.2,y:616.9},3).to({skewX:-34.4,skewY:145.6,x:235.1,y:624.2},3).to({skewX:-4.4,skewY:175.6,x:211.3,y:617.6},2).to({_off:true},1).wait(4).to({_off:false,skewX:10.6,skewY:190.6,x:196.5,y:625.9},0).to({scaleX:0.87,scaleY:0.84,skewX:-16.4,skewY:163.6,x:135.8,y:630.4},2).to({_off:true,regX:0.7,regY:-47.6,scaleX:0.85,scaleY:0.85,skewX:-75,skewY:105,x:123.9,y:629.7},1).wait(12));

	// Layer 5
	this.instance_44 = new lib.Symbol2copy11("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(488.9,585.2,1.275,0.964,0,-25.5,154.6,13,-47.6);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(101).to({_off:false},0).to({regX:12.9,regY:-47.9,scaleX:1.32,scaleY:1,skewX:-2.3,skewY:177.8,x:485.8,y:591.8},3).to({regX:13,regY:-47.6,scaleX:1.03,scaleY:0.78,skewX:-3.7,skewY:176.4,x:445.6,y:606.3},2).to({scaleX:1.21,scaleY:0.91,skewX:-13.7,skewY:166.4,x:433.6,y:616.8},3).to({regX:12.9,scaleX:1.22,scaleY:0.92,skewX:-28.7,skewY:151.4,x:424.2,y:617.6},3).to({_off:true},1).wait(113));

	// front_paw
	this.instance_45 = new lib.Symbol2copy8("synched",4);
	this.instance_45.parent = this;
	this.instance_45.setTransform(463.9,589.4,1.033,1.029,0,40.3,40.2,6.5,-41);
	this.instance_45.alpha = 0;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(100).to({_off:false},0).to({_off:true},1).wait(115).to({_off:false,skewX:-40.3,skewY:139.8,x:135.4,y:644.5},0).wait(1).to({skewX:40.3,skewY:40.2,x:94.1,y:645.6},0).wait(6).to({startPosition:0},0).to({_off:true},1).wait(2));

	// Layer 7
	this.instance_46 = new lib.Symbol2copy3("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(387.4,621.7,0.742,0.55,37.1,0,0,36.1,-31.3);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(83).to({_off:false},0).to({regY:-31.4,scaleY:0.74,rotation:82.1,x:387.5},3).to({_off:true},1).wait(139));

	// back_paw
	this.instance_47 = new lib.Tween25("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(128.1,647.6);
	this.instance_47._off = true;

	this.instance_48 = new lib.Tween25copy2("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(112.1,602.6,1,1,0,0,0,-6,-45);
	this.instance_48._off = true;

	this.instance_49 = new lib.Symbol2copy3("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(246.5,610.9,0.962,0.962,49.9,0,0,-2.9,-37.5);
	this.instance_49._off = true;

	this.instance_50 = new lib.Symbol2copy5("synched",0);
	this.instance_50.parent = this;
	this.instance_50.setTransform(459,583.4,0.742,0.594,5.9,0,0,-1,-36.3);
	this.instance_50._off = true;

	this.instance_51 = new lib.Symbol2copy13("synched",0);
	this.instance_51.parent = this;
	this.instance_51.setTransform(101.9,647.1,0.867,0.693,20.9,0,0,-0.1,-35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_47}]},24).to({state:[{t:this.instance_47}]},9).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},5).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},5).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},5).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},5).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},4).to({state:[{t:this.instance_48}]},4).to({state:[{t:this.instance_49}]},6).to({state:[{t:this.instance_49}]},4).to({state:[{t:this.instance_49}]},4).to({state:[{t:this.instance_49}]},3).to({state:[]},1).to({state:[{t:this.instance_49}]},2).to({state:[{t:this.instance_49}]},3).to({state:[{t:this.instance_49}]},3).to({state:[{t:this.instance_49}]},3).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_50}]},3).to({state:[{t:this.instance_50}]},1).to({state:[]},1).to({state:[{t:this.instance_47}]},84).to({state:[{t:this.instance_47}]},6).to({state:[]},1).to({state:[{t:this.instance_50}]},22).to({state:[{t:this.instance_50}]},3).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51,p:{startPosition:0}}]},1).to({state:[{t:this.instance_51,p:{startPosition:4}}]},4).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(24).to({_off:false},0).to({x:117.4,startPosition:9},9).to({_off:true},1).wait(151).to({_off:false,skewY:180,x:404.6,y:639.2,startPosition:0},0).to({skewX:-45.2,skewY:134.8,x:409,y:650.8,startPosition:9},6).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(34).to({_off:false},0).to({regY:-45.1,rotation:15,x:110.6,y:587.1},5).wait(1).to({startPosition:0},0).to({regX:-5.9,regY:-45,rotation:30,x:112.2,y:606.8},5).wait(1).to({startPosition:0},0).to({regX:-6,regY:-45.1,rotation:15,x:110.6,y:586.5},5).wait(1).to({startPosition:0},0).to({regY:-45,rotation:0,x:112.1,y:602.6},5).wait(1).to({startPosition:0},0).to({regY:-45.1,rotation:71.4,x:181.4,y:618.6},4).to({regX:-5.9,rotation:86.4,x:237.8,y:632.1},4).to({_off:true},6).wait(154));
	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(72).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,rotation:-10.1,x:278.9,y:604.4},4).to({regX:-2.8,regY:-37.4,scaleX:0.78,scaleY:0.78,rotation:15.9,x:336.1,y:605},4).to({regX:-2.5,scaleX:0.74,scaleY:0.59,rotation:37.1,x:366.3,y:600.6},3).to({_off:true},1).wait(2).to({_off:false,regX:-1.3,regY:-36.6,scaleY:0.74,rotation:82.1,x:387.5,y:593.7},0).to({regX:-1.2,regY:-36.5,scaleY:0.59,rotation:-12.6,x:400.9,y:592},3).to({regX:-1.1,regY:-36.4,rotation:-9.1,x:422.1,y:580.4},3).to({regX:-1,regY:-36.3,rotation:5.9,x:459,y:583.4},3).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(96).to({_off:false},0).to({regX:-0.8,rotation:20.8,x:470.8,y:593.8,startPosition:3},3).to({regX:-0.1,regY:-35.5,scaleX:0.87,scaleY:0.69,rotation:20.9,x:471.7,y:590.9,startPosition:4},1).to({_off:true},1).wait(113).to({_off:false,regX:-1,regY:-36.3,scaleX:0.74,scaleY:0.59,rotation:0,skewX:-5.9,skewY:174.1,x:130.7,y:638.5,startPosition:0},0).to({regX:-0.8,skewX:-20.8,skewY:159.2,x:126.6,y:649,startPosition:3},3).to({regX:-0.1,regY:-35.5,scaleX:0.87,scaleY:0.69,skewX:-20.9,x:127.6,y:646.1,startPosition:4},1).to({_off:true},1).wait(7));

	// tail
	this.instance_52 = new lib.Symbol14("synched",0);
	this.instance_52.parent = this;
	this.instance_52.setTransform(102.1,644.4,0.999,0.999,-29.9,0,0,15.1,3);
	this.instance_52._off = true;

	this.instance_53 = new lib.Symbol14copy2("synched",0);
	this.instance_53.parent = this;
	this.instance_53.setTransform(90.5,643.3,0.999,0.999,-29.9,0,0,15.1,3);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(24).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-29.8,x:90.4,y:643.7,startPosition:9},9).to({_off:true},1).wait(151).to({_off:false,scaleX:1,scaleY:1,rotation:0,skewX:29.9,skewY:-150.1,x:430.7,y:636.1,startPosition:0},0).to({regY:3.1,scaleX:1,scaleY:1,skewX:-15.4,skewY:-195.4,x:424.8,y:625.1,startPosition:9},6).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(34).to({_off:false},0).to({rotation:-38.1,y:625.4},5).wait(1).to({startPosition:0},0).to({rotation:-29.9,y:643.3},5).wait(1).to({startPosition:0},0).to({rotation:-38.1,y:624.8},5).wait(1).to({startPosition:0},0).to({rotation:-29.9,y:643.3},5).wait(1).to({startPosition:0},0).to({regX:15.2,rotation:41.5,x:135.8,y:611.2},4).to({regX:15.3,rotation:56.5,x:195.8,y:613.2},4).wait(6).to({rotation:20.1,x:217.8,y:616.3},0).to({regX:15.4,scaleX:0.97,scaleY:0.97,rotation:-24.9,x:246.4,y:609.7},4).to({regX:15.5,scaleX:0.85,scaleY:0.85,rotation:46.1,x:308.5,y:596.6},4).to({regX:15.6,regY:2.9,rotation:61.1,x:345.6,y:586.3},3).to({regX:15.7,regY:3,rotation:31.1,x:362,y:586.8},3).to({regY:3.1,rotation:-3.3,x:373.7,y:598.7},3).to({regX:15.8,regY:3,rotation:15.1,x:394.6,y:585.4},3).to({rotation:45.1,x:425.5,y:575.1},3).wait(1).to({startPosition:0},0).to({regX:16.8,regY:2.6,scaleX:0.99,scaleY:0.99,rotation:0,skewX:60.2,skewY:60.1,x:469.4,y:573.9},4).wait(1).to({regX:17,regY:2.9,scaleX:0.82,scaleY:0.75,skewX:-60.2,skewY:119.9,x:497.6,y:579.6},0).to({regX:16.8,regY:2.8,scaleX:0.84,scaleY:0.85,skewX:-22.7,skewY:157.4,x:493.7,y:582.4},3).to({regX:16.9,scaleX:0.99,scaleY:0.99,skewX:-31.9,skewY:148.2,x:478.1,y:586.2},2).to({skewX:-68.7,skewY:111.5,x:465.2,y:594.5},3).to({regY:2.9,skewX:-113.7,skewY:66.5,x:455.7,y:592.4},3).wait(1).to({regY:3,scaleX:0.98,scaleY:0.99,skewX:-60.7,skewY:119.3,x:449.4,y:618.7},0).to({regY:3.1,scaleX:0.99,scaleY:0.99,skewX:-38.7,skewY:141.5,x:431.7,y:648.2},6,cjs.Ease.get(1)).to({_off:true},1).wait(72).to({_off:false,regY:2.9,skewX:-8.7,skewY:171.5,x:404.2,y:620},0).to({regY:3,skewX:-50.1,skewY:130,x:382.8,y:617},3).to({regY:2.9,skewX:6.3,skewY:186.5,x:361.5,y:624.8},3).to({skewX:-8.7,skewY:171.5,x:307.2,y:617.4},3).to({regY:3,skewX:-98.7,skewY:81.5,x:255.4,y:604.8},3).to({skewX:-68.7,skewY:111.5,x:238.5,y:611},2).to({_off:true},1).wait(4).to({_off:false,regY:2.9,skewX:-8.7,skewY:171.5,x:224.6,y:626.4},0).to({regY:3,scaleX:0.89,scaleY:0.89,skewX:-32.9,skewY:147.1,x:161.8,y:633.8},2).to({regX:15.8,scaleX:0.85,scaleY:0.85,skewX:-45.1,skewY:134.9,x:164.2,y:630.3},1).to({regX:16.8,regY:2.6,scaleX:0.99,scaleY:0.99,skewX:-60.2,skewY:119.9,x:129.8,y:629},4).wait(1).to({skewX:60.2,skewY:60.1,x:99.6,y:630.1},0).to({regX:16.9,scaleX:0.84,scaleY:0.84,skewX:45.2,skewY:45.1,x:99.4,y:656.9},4).to({_off:true},1).wait(2));

	// back_leg
	this.instance_54 = new lib.legcopy("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(100.3,652,1,1,0,0,0,0,0.3);
	this.instance_54._off = true;

	this.instance_55 = new lib.legcopy5("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(90.3,652,1,1,0,0,0,0,0.3);
	this.instance_55._off = true;

	this.instance_56 = new lib.Symbol17();
	this.instance_56.parent = this;
	this.instance_56.setTransform(106.4,647.6);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(24).to({_off:false},0).to({x:89.5,startPosition:9},9).to({_off:true},1).wait(151).to({_off:false,skewY:180,x:432.5,y:643.7,startPosition:0},0).to({regX:-0.1,skewX:-45.2,skewY:134.8,x:431.3,y:630.1,startPosition:9},6).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(34).to({_off:false},0).to({regX:0.1,regY:0.4,scaleY:0.93,rotation:15,y:636.9},5).wait(1).to({startPosition:0},0).to({regX:0,regY:0.3,scaleY:1,rotation:0,y:652},5).wait(1).to({startPosition:0},0).to({regX:0.1,regY:0.4,scaleY:0.93,rotation:15,y:636.3},5).wait(1).to({startPosition:0},0).to({regX:0,regY:0.3,scaleY:1,rotation:0,y:652},5).to({_off:true},1).wait(168));
	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(58).to({_off:false},0).to({regX:0.1,rotation:71.4,x:136.8,y:627.7},4).to({regY:-0.1,rotation:86.4,x:192.4,y:629.2},4).wait(6).to({regX:0.2,rotation:49.9,x:224.8,y:631.2},0).to({scaleX:0.97,scaleY:0.97,x:253,y:624.1},4).to({regX:0.4,scaleX:0.85,scaleY:0.85,rotation:75.9,x:308.2,y:610.6},4).to({regX:0.5,rotation:60.9,x:346.5,y:597.2},3).to({rotation:-18.6,x:366.1,y:602.3},3).to({regY:0,rotation:30.9,x:374.8,y:610.8},3).to({regX:0.7,regY:0.1,scaleY:0.86,rotation:9.6,x:396.8,y:594.8},3).to({rotation:75.4,x:420.7,y:582},3).wait(1).to({rotation:39.6,x:422.7,y:584.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:0,skewX:-39.6,skewY:140.4,x:494.4,y:588.8},0).to({regY:0.3,scaleX:1,scaleY:1.02,skewX:-64.4,skewY:115.6,x:482.9,y:596.5},2).to({regX:0.8,scaleX:0.85,scaleY:0.86,skewX:-19.4,skewY:160.6,x:472.3,y:603.9},3).to({skewX:-34.4,skewY:145.6,x:453.4,y:599.6},3).to({_off:true},1).wait(79).to({_off:false,regY:0.4,skewX:-49.4,skewY:130.6,x:403.4,y:627.3},0).to({regY:0.3,skewX:-60.9,skewY:119.1,x:396.1,y:625.9},3).to({skewX:-34.4,skewY:145.6,x:358.7,y:634.3},3).to({x:317.3,y:628.6},3).to({regY:0.4,skewX:-79.4,skewY:100.6,x:250.3,y:617.3},3).to({regY:0.5,skewX:-49.4,skewY:130.6,x:227.9,y:619.3},2).to({_off:true},1).wait(4).to({_off:false,regY:0.3,skewX:-34.4,skewY:145.6,x:234.7,y:637.6},0).to({regX:0.7,regY:0.1,skewX:-39.6,skewY:140.4,x:166.9,y:639.5},3).to({_off:true},1).wait(11));

	// back_leg_paw
	this.instance_57 = new lib.Tween47("synched",0);
	this.instance_57.parent = this;
	this.instance_57.setTransform(103.2,659.6,1,1,0,0,0,-8.3,0);
	this.instance_57._off = true;

	this.instance_58 = new lib.Tween48("synched",0);
	this.instance_58.parent = this;
	this.instance_58.setTransform(126.5,626,1.124,1,101.4,0,0,-7.9,0.1);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(58).to({_off:false},0).to({_off:true,regX:-7.9,regY:0.1,scaleX:1.12,rotation:101.4,x:126.5,y:626},4).wait(164));
	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(58).to({_off:false},4).to({regY:-0.1,rotation:116.4,x:183,y:625.1},4).wait(6).to({regX:-7.8,rotation:49.9,x:210.5,y:632.2},0).to({scaleX:1.09,scaleY:0.97,rotation:79.9,x:243.2,y:626.3},4).to({regX:-7.7,regY:-0.3,scaleX:0.95,scaleY:0.85,rotation:120.9,x:301.7,y:608.9},4).to({regY:-0.4,rotation:60.9,x:339.7,y:605.1},3).to({regX:-7.3,regY:-0.3,scaleX:1.13,rotation:47.1,x:364.7,y:606.2},3).to({regX:-7.2,regY:-0.4,scaleX:1.03,scaleY:0.92,rotation:15.9,x:366.3,y:617.3},3).to({regX:-7,regY:-0.5,scaleX:1.1,scaleY:0.98,rotation:84.6,x:393.6,y:602.1},3).to({regY:-0.6,rotation:150.4,x:412.7,y:582.2},3).wait(1).to({regY:-0.5,rotation:114.6,x:416.3,y:589.1},0).to({_off:true},1).wait(7).to({_off:false,regY:-0.4,scaleX:0.93,scaleY:0.83,rotation:0,skewX:-69.6,skewY:110.4,x:503,y:591.3},0).to({regX:-6.8,regY:-0.5,scaleX:1.1,scaleY:0.98,skewX:-154.3,skewY:25.7,x:493.4,y:600.7},2).to({regX:-6.6,regY:-0.4,scaleX:1.3,scaleY:1.16,skewX:-109.4,skewY:70.6,x:474.4,y:605.7},3).to({regY:-0.3,scaleX:1.17,scaleY:1.05,skewX:-109.3,skewY:70.7,x:469.5,y:605.2},1).to({regX:-6.7,scaleX:0.93,scaleY:0.83,skewX:-109.4,skewY:70.6,x:461,y:609.1},2).to({_off:true},1).wait(79).to({_off:false,regX:-6.5,regY:-0.1,scaleX:1.35,scaleY:1.2,skewX:-57.3,skewY:122.7,x:421.2,y:635.5},0).to({skewX:-151.3,skewY:28.7,x:400.6,y:625.9},3).to({skewX:-34.4,skewY:145.6,x:366.9,y:641},3).to({regX:-6.6,skewX:-42.3,skewY:137.7,x:325,y:634.4},3).to({regX:-6.5,skewX:-132.3,skewY:47.7,x:270.3,y:608.4},3).to({skewX:-42.3,skewY:137.7,x:246.9,y:627},2).to({_off:true},1).wait(4).to({_off:false,regX:-6.6,x:242.4,y:643.4},0).to({regX:-6.5,scaleX:1.18,scaleY:1.06,skewX:-90.5,skewY:89.5,x:196.4,y:646.3},2).to({_off:true},1).wait(12));

	// Layer 2
	this.instance_59 = new lib.still_god("synched",0);
	this.instance_59.parent = this;
	this.instance_59.setTransform(109.9,631.6,1,1,0,0,0,-0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_59).to({_off:true},24).wait(96).to({_off:false,skewY:180,x:422.7,y:623.9},0).to({_off:true},65).wait(39).to({_off:false,skewY:0,x:109.9,y:631.6},0).wait(2));

	// Layer 3
	this.instance_60 = new lib.ClipGroup_6();
	this.instance_60.parent = this;
	this.instance_60.setTransform(475.6,583.6,0.828,0.828,15,0,0,469.2,574.1);
	this.instance_60.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).to({_off:true},101).wait(125));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.2)").s().p("AjdAwQhbgVgBgbQABgbBbgUQBcgTCBAAQCCAABcATQBbAUABAbQgBAbhbAVQhcATiCAAQiBAAhcgTg");
	this.shape.setTransform(110.7,661.6);

	this.instance_61 = new lib.Tween93("synched",0);
	this.instance_61.parent = this;
	this.instance_61.setTransform(110.7,661.6);
	this.instance_61.alpha = 0.199;
	this.instance_61._off = true;

	this.instance_62 = new lib.Tween94("synched",0);
	this.instance_62.parent = this;
	this.instance_62.setTransform(110.2,660.9,0.796,0.794,0,0,0,-0.1,-0.2);
	this.instance_62.alpha = 0.199;
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_61}]},24).to({state:[{t:this.instance_62}]},9).to({state:[{t:this.instance_62}]},6).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_62}]},6).to({state:[{t:this.instance_62}]},5).to({state:[{t:this.instance_61}]},7).to({state:[{t:this.instance_61}]},4).to({state:[{t:this.instance_61}]},4).to({state:[{t:this.instance_61}]},6).to({state:[{t:this.instance_61}]},4).to({state:[{t:this.instance_61}]},4).to({state:[{t:this.instance_61}]},3).to({state:[{t:this.instance_61}]},3).to({state:[{t:this.instance_61}]},3).to({state:[{t:this.instance_61}]},3).to({state:[{t:this.instance_61}]},4).to({state:[{t:this.instance_61}]},4).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},3).to({state:[{t:this.instance_61}]},2).to({state:[{t:this.instance_61}]},3).to({state:[{t:this.instance_61}]},5).to({state:[{t:this.instance_61}]},71).to({state:[{t:this.instance_61}]},7).to({state:[{t:this.instance_61}]},3).to({state:[{t:this.instance_61}]},6).to({state:[{t:this.instance_61}]},8).to({state:[{t:this.instance_61}]},5).to({state:[{t:this.instance_61}]},7).to({state:[{t:this.instance_61}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(24).to({_off:false},0).to({_off:true,regX:-0.1,regY:-0.2,scaleX:0.8,scaleY:0.79,x:110.2,y:660.9},9).wait(18).to({_off:false,regX:0,regY:0,scaleX:1,scaleY:1,x:110.7,y:661.6},7).to({regX:0.4,regY:0.1,scaleX:1.06,scaleY:0.83,x:143,y:662.1},4).to({x:203},4).wait(6).to({regX:0.5,regY:0,scaleX:0.89,scaleY:0.7,x:248.6,y:648.7,alpha:1},0).to({x:278.2,y:648.9,alpha:0.199},4).to({regY:-0.4,scaleX:0.96,scaleY:0.74,x:331.3,y:628.5},4).to({x:367.3,y:626.1},3).to({regX:0.6,regY:-0.6,scaleX:0.84,scaleY:0.65,x:382.1,y:624.5},3).to({scaleX:1.08,x:403.7,y:622.1},3).to({x:421.7,y:619.7},3).to({x:445.7,y:610.1},4).to({regY:-0.5,scaleX:0.62,scaleY:1.4,x:480.7,y:609.2},4).wait(1).to({x:497.4,y:613.1},0).to({regY:-0.4,scaleX:0.77,scaleY:1.88,x:498.1,y:626.1},3).to({regX:0.7,regY:-0.3,scaleX:1.07,scaleY:1.38,x:474.1,y:632},2).to({regX:0.1,regY:0,scaleX:1.15,x:453.6,y:653.4},3).to({scaleX:1.02,x:421.2,y:654.3},5).wait(71).to({startPosition:0},0).to({scaleX:1.39,x:391.7,y:656.1},7).to({regY:0.1,scaleX:1.31,x:363.7,y:662.8},3).to({regX:0.3,scaleX:1.26,x:293.3,y:658.3},6).to({scaleX:1.24,x:202},8).to({x:143.6,y:660.2},5).to({scaleX:0.79,x:106.5,y:659.4},7).to({regX:0.4,regY:0.4,scaleX:0.96,scaleY:0.97,x:111.5,y:662.4},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(24).to({_off:false},9).to({regX:0.3,regY:-0.5,scaleX:0.46,scaleY:0.46,x:109.9,y:659.9},6).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.2,scaleX:0.8,scaleY:0.79,x:110.2,y:660.9},6).to({regX:0.1,regY:-0.1,scaleX:0.57,scaleY:0.57,x:110,y:660.5},5).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,x:110.7,y:661.6},7).wait(168));

	// Layer 16
	this.instance_63 = new lib.Symbol23copy2("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(350.1,543.5);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(114).to({_off:false},0).wait(71).to({startPosition:0},0).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.7,23.6,1195.9,914.7);


// stage content:



(lib.doganimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(86,64,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.mc2 = new lib.ClipGroup_7();
	this.mc2.parent = this;
	this.mc2.setTransform(578.1,49.9,1,1,0,0,0,640,400);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(264.8,-126.5,1195.9,914.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;