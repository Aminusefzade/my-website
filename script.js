document.addEventListener('DOMContentLoaded', function() {
    // دکمه چرخش پاکت
    document.getElementById('flip-btn').addEventListener('click', function() {
        const envelope = document.querySelector('.envelope');
        envelope.classList.toggle('flipped');
        
        if (!envelope.classList.contains('flipped')) {
            resetEnvelope();
        }
    });

    // دکمه باز کردن فلپ
    document.querySelector('.bbbb').addEventListener('click', function(e) {
        e.stopPropagation();
        const flap = document.querySelector('.flap');
        const bb = document.querySelector('.bb');
        const btn = this;
        
        flap.classList.toggle('open');
        bb.classList.toggle('open');
        
        if (flap.classList.contains('open')) {
            btn.classList.add('hidden');
        } else {
            btn.classList.remove('hidden');
            document.querySelector('.ax').classList.remove('active');
            toggleOverlay(false);
        }
    });

    // فعال کردن ax با کلیک روی back1
    document.querySelector('.back1').addEventListener('click', function(e) {
        e.stopPropagation();
        if (document.querySelector('.flap').classList.contains('open')) {
            const ax = document.querySelector('.ax');
            ax.classList.toggle('active');
            toggleOverlay(ax.classList.contains('active'));
        }
    });

    // کلیک روی ax برای بستن
    document.querySelector('.ax').addEventListener('click', function(e) {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            toggleOverlay(false);
            e.stopPropagation();
        }
    });

    // کلیک خارج برای بستن ax
    document.addEventListener('click', function() {
        const ax = document.querySelector('.ax');
        if (ax.classList.contains('active')) {
            ax.classList.remove('active');
            toggleOverlay(false);
        }
    });

    // توابع کمکی
    function resetEnvelope() {
        const flap = document.querySelector('.flap');
        const bb = document.querySelector('.bb');
        const btn = document.querySelector('.bbbb');
        const ax = document.querySelector('.ax');
        
        flap.classList.remove('open');
        bb.classList.remove('open');
        btn.classList.remove('hidden');
        ax.classList.remove('active');
        toggleOverlay(false);
    }

    function toggleOverlay(show) {
        const overlay = document.querySelector('.overlay');
        if (!overlay) {
            const newOverlay = document.createElement('div');
            newOverlay.className = 'overlay';
            document.body.appendChild(newOverlay);
        }
        document.querySelector('.overlay').style.display = show ? 'block' : 'none';
    }
});