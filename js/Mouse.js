class Mouse {
    x = 0;
    y = 0;
    leftBtn = false;
    rightBtn = false;
    mouseTimeout = null;

    constructor() {
        canvas.addEventListener("mousemove", e => {
            this.onMouseMove(e);
        });
        canvas.addEventListener("touchstart", e => {
            this.onMouseMove(e);
        });
        canvas.addEventListener("mouseup", e => {
            this.onMouseUp(e);
        });
        canvas.addEventListener("touchend", e => {
            this.onMouseUp(e);
        });
        canvas.addEventListener("mousedown", e => {
            this.onMouseDown(e);
        });
        canvas.addEventListener("touchstart", e => {
            this.onMouseDown(e);
        });
        canvas.addEventListener("contextmenu", ev => ev.preventDefault());
    }

    onMouseMove(event) {
        event.preventDefault();
        this.x = event.touches ? event.touches[0].clientX : event.clientX;
        this.y = event.touches ? event.touches[0].clientY : event.clientY;
    }

    onMouseDown(event) {
        event.preventDefault();
        if (!event.touches) {
            if (event.which === 1)
                this.leftBtn = true;
            if (event.which === 3)
                this.rightBtn = true;
        } else {
            this.leftBtn = true;
        }
        clearTimeout(this.mouseTimeout);
        this.mouseTimeout = setTimeout(() => {
            this.onMouseUp(event);
        }, 15);
    }

    onMouseUp(event) {
        event.preventDefault();
        if (!event.touches) {
            if (event.which === 1)
                this.leftBtn = false;
            if (event.which === 3)
                this.rightBtn = false;
        } else {
            this.leftBtn = false;
            this.rightBtn = false;
        }
    }

}
