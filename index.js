function createGalaxy() {
    const galaxy = document.getElementById('galaxy');
    const starCount = 1500; // Increased star density
    const layers = 3; // Star depth layers

    // Create star layers with depth effect
    for (let layer = 0; layer < layers; layer++) {
        const layerElement = document.createElement('div');
        layerElement.className = `star-layer layer-${layer + 1}`;
        
        for (let i = 0; i < starCount/layers; i++) {
            const star = createStar(layer);
            layerElement.appendChild(star);
        }
        galaxy.appendChild(layerElement);
    }

    // Enhanced shooting stars with parabolic paths
    setInterval(() => {
        createShootingStar();
    }, 2500); // More frequent shooting stars
}

function createStar(layer) {
    const star = document.createElement('div');
    const sizeBase = 0.5 + (layer * 0.3);
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const hue = Math.random() * 360;
    const animationDuration = 3 + (layer * 2) + Math.random() * 5;

    star.style.cssText = `
        position: absolute;
        border-radius: 50%;
        animation: 
            twinkle ${animationDuration}s infinite,
            colorShift ${30 + Math.random() * 30}s infinite;
        left: ${x}%;
        top: ${y}%;
        width: ${Math.random() ** 4 * 3 * sizeBase}px;
        height: ${Math.random() ** 4 * 3 * sizeBase}px;
        background: hsl(${hue}, ${70 - (layer * 10)}%, ${70 - (layer * 5)}%);
        opacity: ${0.6 + (layer * 0.1)};
        filter: blur(${layer}px);
    `;

    return star;
}

function createShootingStar() {
    const shootingStar = document.createElement('div');
    const startY = Math.random() * 100;
    const curve = Math.random() * 50 - 25;
    const hue = Math.random() * 360;

    shootingStar.style.cssText = `
        position: fixed;
        width: ${200 + Math.random() * 100}px;
        height: 2px;
        background: linear-gradient(
            90deg, 
            transparent, 
            hsl(${hue}, 80%, 70%), 
            transparent
        );
        filter: blur(1px);
        animation: shoot ${0.8 + Math.random() * 0.4}s linear;
        z-index: 999;
        top: ${startY}%;
        opacity: ${0.8 + Math.random() * 0.2};
        transform: translateY(${curve}px);
    `;

    document.body.appendChild(shootingStar);
    setTimeout(() => shootingStar.remove(), 1500);
}

createGalaxy();