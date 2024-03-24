init()

function init() {
    console.log('lottieInteractivityTry')

    document.addEventListener("load", function() {
        console.log('load')
        LottieInteractivity.create({
        player: '#lottie-amit',
        mode: 'scroll',
        actions: [
          {
            visibility: [0,1],
            type: 'seek',
            frames: [0, 300],
          },
        ]
      });
    });
}
