/* --- Masukkan semua kode CSS dasar, warna, dan card di sini (Sama seperti sebelumnya) --- */
:root {
    --primary-color: #1e3a8a; 
    --secondary-color: #e74c3c;
    --success-color: #2ecc71;
    --bg-color: linear-gradient(to bottom, #ffffff, #c3d6f0);
    --card-bg: rgba(255, 255, 255, 0.95);
    --item-bg: #ffffff;
    --text-color: #333333;
    --border-color: #dddddd;
    --main-font: 'Original Surfer', cursive, sans-serif;
}
[data-theme="dark"] {
    --primary-color: #3b82f6;
    --bg-color: linear-gradient(to bottom, #121212, #0a1930);
    --card-bg: rgba(30, 30, 30, 0.95);
    --item-bg: #1e1e1e;
    --text-color: #f4f4f4;
    --border-color: #333333;
}
* { margin: 0; padding: 0; box-sizing: border-box; font-family: var(--main-font); }
body { background: var(--bg-color); background-attachment: fixed; color: var(--text-color); min-height: 100vh; }
.container { max-width: 800px; margin: 2rem auto; padding: 0 1rem 6rem 1rem; }
header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
header h1 { color: var(--primary-color); text-shadow: 1px 1px 2px rgba(0,0,0,0.1); }
.theme-btn { background: var(--card-bg); color: var(--text-color); border: 1px solid var(--border-color); padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; font-size: 1.2rem; transition: transform 0.2s; }
.theme-btn:hover { transform: scale(1.1); }
.input-section, .list-section { background: var(--card-bg); padding: 2rem; border-radius: 10px; box-shadow: 0 8px 16px rgba(0,0,0,0.05); margin-bottom: 2rem; backdrop-filter: blur(5px); }
.form-group { margin-bottom: 1rem; }
.form-group-row { display: flex; gap: 1rem; }
.w-50 { width: 50%; }
label { display: block; margin-bottom: 0.5rem; font-weight: 600; font-size: 1.1rem; }
input, select { width: 100%; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 5px; background-color: var(--item-bg); color: var(--text-color); font-size: 1rem; }
.submit-btn { width: 100%; padding: 1rem; background-color: var(--primary-color); color: white; border: none; border-radius: 5px; font-size: 1.1rem; font-weight: bold; cursor: pointer; margin-top: 1rem; transition: transform 0.2s, opacity 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.submit-btn:hover { opacity: 0.9; transform: scale(1.02); }
.list-section h2 { margin-bottom: 1rem; }
.filters { display: flex; gap: 0.5rem; margin: 1rem 0 1.5rem 0; }
.filter-btn { padding: 0.5rem 1rem; border: 1px solid var(--primary-color); background: transparent; color: var(--primary-color); border-radius: 5px; cursor: pointer; transition: background 0.2s, color 0.2s; }
.filter-btn.active, .filter-btn:hover { background: var(--primary-color); color: white; }
.task-card { display: flex; justify-content: space-between; align-items: center; padding: 1rem; border: 1px solid var(--border-color); border-radius: 5px; margin-bottom: 1rem; background: var(--item-bg); transition: transform 0.2s; }
.task-card:hover { transform: translateY(-3px); box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
.task-card.completed { opacity: 0.6; text-decoration: line-through; background: rgba(0, 0, 0, 0.05); }
.task-info h3 { margin-bottom: 0.3rem; font-weight: 400; }
.task-meta { font-size: 0.85rem; color: var(--primary-color); }
.task-actions button { padding: 0.5rem; border: none; border-radius: 3px; cursor: pointer; margin-left: 0.5rem; color: white; transition: opacity 0.2s; }
.task-actions button:hover { opacity: 0.8; }
.btn-complete { background-color: var(--success-color); }
.btn-delete { background-color: var(--secondary-color); }
.empty-state { text-align: center; padding: 3rem 1rem; color: var(--text-color); opacity: 0.8; }
.mascot { font-size: 4rem; margin-bottom: 1rem; display: inline-block; animation: bounce 2s infinite; }

/* =========================================
   CSS EKSPRESI & DRAG MASKOT KODOK
========================================= */
.mascot-container {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 70px;
    height: 80px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: grab; /* Kursor tangan untuk ditarik */
    touch-action: none; /* Mencegah layar ikut scroll saat kodok digeser di HP */
}
.mascot-container:active {
    cursor: grabbing;
}

/* Balon Obrolan */
.speech-bubble {
    position: absolute;
    top: -50px;
    background: #fff;
    color: #333;
    padding: 8px 12px;
    border-radius: 12px;
    font-size: 0.85rem;
    font-family: sans-serif;
    font-weight: bold;
    white-space: nowrap;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    pointer-events: none;
    z-index: 20;
    border: 2px solid #68c96f;
}
.speech-bubble::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px 6px 0;
    border-style: solid;
    border-color: #68c96f transparent transparent transparent;
}
.speech-bubble.show {
    opacity: 1;
    transform: scale(1);
    top: -60px;
}

.pet-body {
    width: 55px;
    height: 45px;
    background-color: #68c96f; 
    border-radius: 40% 40% 50% 50% / 50% 50% 40% 40%;
    position: relative;
    box-shadow: inset -5px -5px 10px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.2);
    animation: floatPet 3s ease-in-out infinite;
    z-index: 10;
    transition: background-color 0.2s;
}

.pet-eye {
    position: absolute;
    top: -12px;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #68c96f;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    animation: blink 4s infinite; /* Mata berkedip */
}
.left-eye { left: 2px; }
.right-eye { right: 2px; }

.pet-pupil {
    width: 8px;
    height: 8px;
    background-color: #111;
    border-radius: 50%;
    transition: transform 0.05s linear;
}

.pet-mouth {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 8px;
    border-bottom: 3px solid #2d5a31;
    border-radius: 0 0 10px 10px;
    transition: all 0.2s;
}

.pet-blush {
    position: absolute;
    bottom: 12px;
    width: 10px;
    height: 6px;
    background-color: rgba(255, 100, 100, 0.6);
    border-radius: 50%;
    transition: all 0.2s;
}
.left-blush { left: 5px; }
.right-blush { right: 5px; }

/* === EKSPRESI: HOVER (SENANG / ^ ^) === */
.pet-body:hover .pet-eye {
    animation: none;
    border-top: 4px solid #111;
    border-bottom: none; border-left: none; border-right: none;
    background: transparent;
    border-radius: 50% 50% 0 0;
    height: 12px;
    margin-top: 8px;
    box-shadow: none;
}
.pet-body:hover .pet-pupil { display: none; }
.pet-body:hover .pet-mouth {
    border-bottom: 4px solid #2d5a31;
    height: 12px; width: 20px;
}
.pet-body:hover .pet-blush {
    background-color: rgba(255, 100, 100, 0.9);
    width: 14px; height: 8px;
}

/* === EKSPRESI: DRAGGING (PANIK / > O <) === */
.pet-body.is-dragging {
    background-color: #5ab560;
    animation: none; /* Berhenti melayang saat ditarik */
}
.pet-body.is-dragging .pet-eye {
    animation: none;
    background: white;
    border: 3px solid #68c96f;
    border-radius: 50%;
    height: 24px;
    margin-top: 0;
    box-shadow: none;
}
.pet-body.is-dragging .pet-pupil {
    display: block !important;
    width: 12px; height: 3px;
    background: #111;
    border-radius: 0;
}
.pet-body.is-dragging .left-eye .pet-pupil { transform: rotate(45deg) !important; }
.pet-body.is-dragging .right-eye .pet-pupil { transform: rotate(-45deg) !important; }
.pet-body.is-dragging .pet-mouth {
    width: 14px; height: 14px;
    border: none;
    background: #2d5a31;
    border-radius: 50%;
    bottom: 6px;
}

.pet-shadow {
    width: 35px; height: 8px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    margin-top: 15px;
    animation: shadowScale 3s ease-in-out infinite;
}

/* Animasi */
@keyframes blink {
    0%, 96%, 98%, 100% { transform: scaleY(1); }
    97%, 99% { transform: scaleY(0.1); }
}
@keyframes floatPet {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}
@keyframes shadowScale {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(0.7); opacity: 0.2; }
}
.pet-body.jump-spin { animation: jumpSpinAnim 0.6s ease; }
@keyframes jumpSpinAnim {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-50px) rotate(180deg) scale(1.1); }
    100% { transform: translateY(0) rotate(360deg) scale(1); }
}
