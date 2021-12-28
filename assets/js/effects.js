(function () {
  try {
    if (
      location.href.indexOf("fullcpgrid") > -1 ||
      navigator.userAgent.indexOf("Scene.js") > -1
    ) {
      return;
    }
    const startTime = Date.now();
    function ga(t, others) {
      var tid = "UA-128864447-2";
      var cid = (Math.random() * Math.pow(10, 20)) / Math.pow(10, 10);
      var innerWidth = window.innerWidth;
      var innerHeight = window.innerHeight;
      var screen = window.screen || { width: innerWidth, height: innerHeight };
      var collectInfos = [
        "v=1",
        "t=" + t,
        "dl=" + location.href,
        "ul=" + (navigator.language || "en-us").toLowerCase(),
        "de=" +
          (document.charset ||
            document.inputEncoding ||
            document.characterSet ||
            "utf-8"),
        "dt=" + document.title,
        "sr=" + screen.width + "x" + screen.height,
        "vp=" + innerWidth + "x" + innerHeight,
        "cid=" + cid,
        "tid=" + tid,
        "z=" + Math.floor(Math.random() * 10000000),
      ];
      const req = new XMLHttpRequest();
      req.open(
        "GET",
        "https://www.google-analytics.com/collect?" +
          collectInfos.join("&") +
          others
      );
      req.send();
    }



    ga("pageview", "");
  } catch (e) {}
})();

const scene = new Scene(
  {
    ".container": {},
  },
  {
    selector: true,
  }
);

const item = scene.getItem(".container");

function move(startTime, endTime, left, top, rotate, scale) {
  item.set({
    [`${startTime}, ${endTime}`]: Scene.kineticFrame({
      left: `${left}px`,
      top: `${top}px`,
    }).set({
      transform: {
        rotate: `${rotate}deg`,
        scale,
      },
    }),
  });
}

move(0, 0.2, 90, 115, 0, 5);
move(1, 1.2, 90, 115, 0, 2);
move(2, 3, 0, 115, 0, 1);
move(4, 4.5, -100, 0, -90, 2);
move(5.5, 6, -52, -18, -90, 1.6);
move(7, 7.5, 30, 45, 0, 2);
move(8.5, 9, 10, 30, 0, 3);
move(10, 10.5, 28, 0, 0, 1.6);
move(11.5, 12, 50, -35, 0, 1.65);
move(13, 13.5, 35, -70, 0, 2);
move(14.5, 18, 0, 0, 0, 1);
scene.set({
  "[data-typing='i']": Scene.typing({ text: "I ", duration: 1 }),
  "[data-typing='name']": {
    1: Scene.typing({ text: "'m Obaid, ", duration: 1 }),
  },
  "[data-typing='engineer']": {
    1.5: Scene.typing({ text: "A Full-Stack Developer", duration: 1 }),
  },
  "[data-typing='with']": {
    3.3: Scene.typing({ text: "with", duration: 0.5 }),
  },
  "[data-typing='skills-in']": {
    4.5: Scene.typing({ text: "Skills In", duration: 1 }),
  },
  "[data-typing='typescript']": {
    6: Scene.typing({ text: "JavaScript", duration: 1 }),
  },
  "[data-typing='css']": {
    7.5: Scene.typing({ text: "CSS/SCSS", duration: 0.7 }),
  },
  "[data-typing='app-dev']": {
    9: Scene.typing({ text: "Mobile App Development", duration: 1 }),
  },
  "[data-typing='animation']": {
    10.5: Scene.typing({ text: "Database's", duration: 1 }),
  },
  "[data-typing='scenejs']": {
    12: Scene.typing({ text: "And More...", duration: 1 }),
  },
});


scene.setPlaySpeed(0.9);
scene.setEasing("ease-in-out");
scene.setIterationCount(1);







///////////Background Image Effect////////////

