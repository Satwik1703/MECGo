var params = {
  "detectRetina": true,
  "fpsLimit": 30,
  "interactivity": {
    "detectsOn": "canvas",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "elementId": "repulse-div",
        "enable": false,
        "mode": []
      },
      "onHover": {
        "enable": true,
        "mode": "repulse",
        "parallax": {
          "enable": false,
          "force": 60,
          "smooth": 10
        }
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 40
      },
      "connect": {
        "distance": 80,
        "lineLinked": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "lineLinked": {
          "opacity": 1
        }
      },
      "push": {
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "slow": {
        "factor": 1,
        "radius": 0
      }
    }
  },
  "particles": {
    "color": {
      "value": "#34a832"
    },
    "lineLinked": {
      "blink": false,
      "color": {
        "value": "#e62e40"
      },
      "consent": false,
      "distance": 150,
      "enable": true,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "lime"
        },
        "enable": false
      },
      "width": 1
    },
    "move": {
      "attract": {
        "enable": false,
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "collisions": false,
      "direction": "none",
      "enable": true,
      "outMode": "out",
      "random": false,
      "speed": 2,
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fillColor": {
          "value": "#6afcee"
        }
      }
    },
    "number": {
      "density": {
        "enable": true,
        "area": 800
      },
      "limit": 0,
      "value": 80
    },
    "opacity": {
      "animation": {
        "enable": false,
        "minimumValue": 0.1,
        "speed": 1,
        "sync": false
      },
      "random": {
        "enable": false,
        "minimumValue": 1
      },
      "value": 0.5
    },
    "rotate": {
      "animation": {
        "enable": false,
        "speed": 0,
        "sync": false
      },
      "direction": "clockwise",
      "random": false,
      "value": 0
    },
    "shape": {
      "character": {
        "fill": true,
        "font": "Verdana",
        "style": "",
        "value": "*",
        "weight": "400",
        "close": true
      },
      "image": {
        "height": 100,
        "replaceColor": true,
        "src": "https://cdn.matteobruni.it/images/particles/github.svg",
        "width": 100,
        "fill": true,
        "close": true
      },
      "polygon": {
        "close": true,
        "fill": true,
        "sides": 5
      },
      "type": "circle",
      "custom": {}
    },
    "size": {
      "animation": {
        "enable": false,
        "minimumValue": 0.1,
        "speed": 40,
        "sync": false
      },
      "random": {
        "enable": true,
        "minimumValue": 1
      },
      "value": 5
    },
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "stroke": {
      "color": {
        "value": "#000000"
      },
      "width": 0,
      "opacity": 1
    }
  },
  "polygon": {
    "draw": {
      "enable": false,
      "stroke": {
        "color": {
          "value": "#6afcee"
        },
        "width": 0.5,
        "opacity": 1
      }
    },
    "enable": false,
    "inline": {
      "arrangement": "one-per-point"
    },
    "move": {
      "radius": 10,
      "type": "path"
    },
    "scale": 1,
    "type": "none",
    "url": ""
  },
  "backgroundMask": {
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "pauseOnBlur": true,
  "background": {}
};

export default params;
