// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// スクロール時のナビゲーション効果
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.backdropFilter = 'blur(30px)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.9)';
        nav.style.backdropFilter = 'blur(20px)';
    }
});

// インターセクションオブザーバーでスクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素を設定
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.vintage-card, .project-card, .stat, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// パーティクル効果（マトリックス風）
class MatrixEffect {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-3';
        this.canvas.style.opacity = '0.1';
        
        document.body.appendChild(this.canvas);
        
        this.resize();
        this.chars = 'HIGHLAND01010101アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        this.matrix = [];
        this.fontSize = 14;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        
        for (let i = 0; i < this.columns; i++) {
            this.matrix[i] = 1;
        }
        
        this.draw();
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.matrix = [];
        for (let i = 0; i < this.columns; i++) {
            this.matrix[i] = 1;
        }
    }
    
    draw() {
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ffff';
        this.ctx.font = this.fontSize + 'px monospace';
        
        for (let i = 0; i < this.matrix.length; i++) {
            const text = this.chars.charAt(Math.floor(Math.random() * this.chars.length));
            this.ctx.fillText(text, i * this.fontSize, this.matrix[i] * this.fontSize);
            
            if (this.matrix[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.matrix[i] = 0;
            }
            this.matrix[i]++;
        }
        
        setTimeout(() => this.draw(), 100);
    }
}

// 3Dキューブアニメーション
class CubeAnimation {
    constructor() {
        this.cubes = document.querySelectorAll('.cube');
        this.mouseX = 0;
        this.mouseY = 0;

        // マウス座標を追跡
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        this.animate();
    }

    // マウス位置をもとにすべてのキューブを更新
    animate() {
        this.cubes.forEach((cube, index) => {
            const rect = cube.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (this.mouseX - centerX) * 0.02;
            const deltaY = (this.mouseY - centerY) * 0.02;

            cube.style.transform = `translateY(${Math.sin(Date.now() * 0.001 + index * 2) * 20}px)
                                  rotateX(${deltaY}deg)
                                  rotateY(${deltaX}deg)
                                  rotateZ(${Math.cos(Date.now() * 0.001 + index * 1.5) * 10}deg)`;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// フォームアニメーション
class FormAnimation {
    constructor() {
        this.setupFormEvents();
    }
    
    setupFormEvents() {
        const form = document.querySelector('.contact-form form');
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.style.borderColor = '#00ffff';
                input.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3)';
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.style.borderColor = 'rgba(0, 255, 255, 0.3)';
                    input.style.boxShadow = 'none';
                }
            });
        });
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.showSuccessMessage();
        });
    }
    
    showSuccessMessage() {
        const message = document.createElement('div');
        message.textContent = 'メッセージが送信されました！';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #00ffff, #0080ff);
            color: #0a0a0a;
            padding: 2rem 3rem;
            border-radius: 10px;
            font-weight: 600;
            z-index: 10000;
            box-shadow: 0 0 50px rgba(0, 255, 255, 0.5);
            animation: messageSlide 3s ease forwards;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
}

// Glitch効果の強化
class GlitchEffect {
    constructor() {
        this.setupGlitch();
    }
    
    setupGlitch() {
        const glitchElement = document.querySelector('.glitch');
        
        setInterval(() => {
            if (Math.random() > 0.95) {
                glitchElement.style.textShadow = `
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff0080,
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00ffff,
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #8000ff
                `;
                
                setTimeout(() => {
                    glitchElement.style.textShadow = 'none';
                }, 100);
            }
        }, 1000);
    }
}

// カードホバー効果
class CardEffects {
    constructor() {
        this.setupCardHovers();
    }
    
    setupCardHovers() {
        const cards = document.querySelectorAll('.vintage-card, .project-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) scale(1.02)';
                card.style.boxShadow = '0 25px 50px rgba(0, 255, 255, 0.3)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = 'none';
            });
        });
    }
}

// Tron Light Cycle Game
class TronGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.cellSize = 10;
        this.cols = this.canvas.width / this.cellSize;
        this.rows = this.canvas.height / this.cellSize;
        this.reset();
        this.bindEvents();
        this.loop();
    }

    reset() {
        this.players = [
            { x: 5, y: 5, dx: 1, dy: 0, color: '#00ffff', trail: [] },
            { x: this.cols - 6, y: this.rows - 6, dx: -1, dy: 0, color: '#ff0080', trail: [] }
        ];
        this.isGameOver = false;
    }

    bindEvents() {
        document.addEventListener('keydown', (e) => {
            const p1 = this.players[0];
            const p2 = this.players[1];
            switch (e.key) {
                case 'ArrowUp':
                    if (p2.dy !== 1) { p2.dx = 0; p2.dy = -1; }
                    break;
                case 'ArrowDown':
                    if (p2.dy !== -1) { p2.dx = 0; p2.dy = 1; }
                    break;
                case 'ArrowLeft':
                    if (p2.dx !== 1) { p2.dx = -1; p2.dy = 0; }
                    break;
                case 'ArrowRight':
                    if (p2.dx !== -1) { p2.dx = 1; p2.dy = 0; }
                    break;
                case 'w':
                case 'W':
                    if (p1.dy !== 1) { p1.dx = 0; p1.dy = -1; }
                    break;
                case 's':
                case 'S':
                    if (p1.dy !== -1) { p1.dx = 0; p1.dy = 1; }
                    break;
                case 'a':
                case 'A':
                    if (p1.dx !== 1) { p1.dx = -1; p1.dy = 0; }
                    break;
                case 'd':
                case 'D':
                    if (p1.dx !== -1) { p1.dx = 1; p1.dy = 0; }
                    break;
            }
        });
    }

    loop() {
        if (this.isGameOver) return;
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 100);
    }

    update() {
        for (const p of this.players) {
            p.x += p.dx;
            p.y += p.dy;
            p.trail.push({ x: p.x, y: p.y });
        }

        const occupied = {};
        for (const p of this.players) {
            if (p.x < 0 || p.y < 0 || p.x >= this.cols || p.y >= this.rows) {
                this.gameOver();
                return;
            }
            const key = p.x + ',' + p.y;
            if (occupied[key]) {
                this.gameOver();
                return;
            }
            occupied[key] = true;
        }

        const trails = [];
        for (const p of this.players) {
            trails.push(...p.trail.slice(0, -1));
        }
        for (const p of this.players) {
            for (const t of trails) {
                if (p.x === t.x && p.y === t.y) {
                    this.gameOver();
                    return;
                }
            }
        }
    }

    draw() {
        this.ctx.fillStyle = '#0a0a0a';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (const p of this.players) {
            this.ctx.fillStyle = p.color;
            for (const t of p.trail) {
                this.ctx.fillRect(t.x * this.cellSize, t.y * this.cellSize, this.cellSize, this.cellSize);
            }
        }
    }

    gameOver() {
        this.isGameOver = true;
        setTimeout(() => this.reset(), 1000);
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    // 少し遅延させてから初期化（パフォーマンス向上）
    setTimeout(() => {
        new MatrixEffect();
        new CubeAnimation();
        new FormAnimation();
        new GlitchEffect();
        new CardEffects();
        new TronGame();
    }, 500);
});

// パフォーマンス最適化
let ticking = false;

function updateAnimations() {
    // アニメーション更新処理
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

// ページローディング効果
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 1s ease;
    `;
    
    const loaderText = document.createElement('div');
    loaderText.textContent = 'INITIALIZING HIGHLAND...';
    loaderText.style.cssText = `
        font-family: 'Orbitron', monospace;
        font-size: 1.5rem;
        color: #00ffff;
        text-shadow: 0 0 20px #00ffff;
        animation: glitch 2s infinite;
    `;
    
    loader.appendChild(loaderText);
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 1000);
    }, 2000);
});

// CSS アニメーションの追加
const style = document.createElement('style');
style.textContent = `
    @keyframes messageSlide {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        80% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
    }
`;
document.head.appendChild(style); 
