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

// Tron-style grid animation at the bottom
class TronGrid {
    constructor() {
        this.canvas = document.getElementById('tronCanvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.offset = 0;
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    draw() {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 1;
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 6;

        const spacing = 20;
        this.offset = (this.offset + 1) % spacing;

        for (let y = h; y > 0; y -= spacing) {
            const pos = y + this.offset;
            const perspective = pos / h;
            const xOffset = (w / 2) * (1 - perspective);
            ctx.beginPath();
            ctx.moveTo(xOffset, pos);
            ctx.lineTo(w - xOffset, pos);
            ctx.stroke();
        }

        const cols = 20;
        for (let i = 0; i <= cols; i++) {
            const x = (i / cols) * w;
            ctx.beginPath();
            ctx.moveTo(x, h);
            ctx.lineTo(w / 2, 0);
            ctx.stroke();
        }
    }
}

// Simple Pong Game
class PongGame {
    constructor() {
        this.canvas = document.getElementById('pongCanvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.w = this.canvas.width;
        this.h = this.canvas.height;
        this.paddleW = 60;
        this.paddleH = 10;
        this.reset();
        this.bindEvents();
        this.loop();
    }

    reset() {
        this.playerX = (this.w - this.paddleW) / 2;
        this.cpuX = (this.w - this.paddleW) / 2;
        this.ball = { x: this.w / 2, y: this.h / 2, dx: 2, dy: 2, r: 5 };
        this.playerDir = 0;
    }

    bindEvents() {
        document.addEventListener('keydown', e => {
            if (['ArrowLeft', 'a', 'A'].includes(e.key)) this.playerDir = -1;
            if (['ArrowRight', 'd', 'D'].includes(e.key)) this.playerDir = 1;
        });
        document.addEventListener('keyup', e => {
            if (['ArrowLeft', 'ArrowRight', 'a', 'd', 'A', 'D'].includes(e.key)) this.playerDir = 0;
        });
        document.querySelectorAll('.control-btn').forEach(btn => {
            const dir = btn.dataset.dir === 'left' ? -1 : 1;
            btn.addEventListener('touchstart', () => { this.playerDir = dir; });
            btn.addEventListener('touchend', () => { this.playerDir = 0; });
            btn.addEventListener('mousedown', () => { this.playerDir = dir; });
            btn.addEventListener('mouseup', () => { this.playerDir = 0; });
        });
    }

    loop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.loop());
    }

    update() {
        this.playerX += this.playerDir * 4;
        if (this.playerX < 0) this.playerX = 0;
        if (this.playerX + this.paddleW > this.w) this.playerX = this.w - this.paddleW;

        const target = this.ball.x - this.paddleW / 2;
        if (this.cpuX < target) this.cpuX += 2;
        else if (this.cpuX > target) this.cpuX -= 2;
        this.cpuX = Math.max(0, Math.min(this.w - this.paddleW, this.cpuX));

        this.ball.x += this.ball.dx;
        this.ball.y += this.ball.dy;

        if (this.ball.x < this.ball.r || this.ball.x > this.w - this.ball.r) {
            this.ball.dx *= -1;
        }

        if (this.ball.y < this.ball.r + this.paddleH) {
            if (this.ball.x > this.cpuX && this.ball.x < this.cpuX + this.paddleW) {
                this.ball.dy *= -1;
                this.ball.y = this.ball.r + this.paddleH;
            } else {
                this.reset();
            }
        }

        if (this.ball.y > this.h - this.ball.r - this.paddleH) {
            if (this.ball.x > this.playerX && this.ball.x < this.playerX + this.paddleW) {
                this.ball.dy *= -1;
                this.ball.y = this.h - this.ball.r - this.paddleH;
            } else {
                this.reset();
            }
        }
    }

    draw() {
        this.ctx.fillStyle = '#0a0a0a';
        this.ctx.fillRect(0, 0, this.w, this.h);

        this.ctx.fillStyle = '#00ffff';
        this.ctx.fillRect(this.playerX, this.h - this.paddleH, this.paddleW, this.paddleH);

        this.ctx.fillStyle = '#ff0080';
        this.ctx.fillRect(this.cpuX, 0, this.paddleW, this.paddleH);

        this.ctx.fillStyle = '#ffffff';
        this.ctx.beginPath();
        this.ctx.arc(this.ball.x, this.ball.y, this.ball.r, 0, Math.PI * 2);
        this.ctx.fill();
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
        new TronGrid();
        new PongGame();
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
