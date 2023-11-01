class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

}

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color,text, textColor)
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<svg height="100" width="100">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        <text x="40" y="50" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }

}


class Circle extends Shape {
    constructor(color, text,textColor) {
        super(color,text, textColor)
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<svg height="100" width="100">
            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />
            <text x="40" y="50" fill="${this.textColor}">${this.text}</text>
          </svg>`
    }
}

class Square extends Shape {
    constructor(color, text, textColor) {
        super(color,text, textColor)
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<svg width="100" height="100">
                <rect width="400" height="110" style="fill:${this.color}");stroke-width:3;stroke:rgb(0,0,0)" />
                <text x="40" y="50" fill="${this.textColor}">${this.text}</text>
              </svg>`
    }
}

module.exports = {Triangle, Circle, Square}; 

