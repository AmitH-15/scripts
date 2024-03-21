
initLottieInteractivity();

async function initLottieInteractivity() {
    try {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            // The user has enabled reduced motion
            console.log('Do not load Lottie animation');
            return
        } else {
            // The user has not enabled reduced motion
            const scriptsLoaded = await loadLottieScripts();
            console.log(scriptsLoaded); // true

            // add code here to use the Lottie scripts
            defineLottieInteractivity();
        }

    } catch (error) {
        console.error(error);
    }
}

function defineLottieInteractivity() {
createLottieInteractivity('https://lottie.host/9c8156a3-4bc0-40b3-a2f8-aa0f497aa34c/GPCUTDYoOS.json', [.4, .65], [0, 137], 'pickleball-paddle1');
createLottieInteractivity('https://lottie.host/9c8156a3-4bc0-40b3-a2f8-aa0f497aa34c/GPCUTDYoOS.json', [.5, .65], [0, 137], 'pickleball-paddlem');
}

function loadLottieScripts() {
    return new Promise((resolve, reject) => {

        const lottieInteractivityScript = document.createElement('script');
        lottieInteractivityScript.src = 'https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js';

        lottieInteractivityScript.onload = () => {

            const lottiePlayerScript = document.createElement('script');
            lottiePlayerScript.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';

            lottiePlayerScript.onload = () => {
                resolve(true);
            };

            lottiePlayerScript.onerror = () => {
                reject(new Error('Failed to load Lottie Player script.'));
            };

            document.body.appendChild(lottiePlayerScript);
        };

        lottieInteractivityScript.onerror = () => {
            reject(new Error('Failed to load Lottie Interactivity script.'));
        };

        document.body.appendChild(lottieInteractivityScript);
    });
}

async function createLottieInteractivity(animationUrl, visibility, frames, tagName) {
            console.log('Custom element is loaded!');
            const lottiePlayer = document.createElement('lottie-player');
            lottiePlayer.src = animationUrl;
            lottiePlayer.autoplay = false;
            lottiePlayer.loop = true;
            lottiePlayer.id = `lottie-${tagName}`;
            this.appendChild(lottiePlayer);

            lottiePlayer.addEventListener("ready", () => {
                LottieInteractivity.create({
                    player: `#${lottiePlayer.id}`,
                    mode: "scroll",
                    // container: `#${containerSelector}`,
                    actions: [{
                        visibility,
                        type: "seek",
                        frames,
                    }, ]
                });
            });
    }
}
