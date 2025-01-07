// 選取所有的卡片
const cards = document.querySelectorAll('.card');

// 點擊卡片顯示歌手資訊
cards.forEach(card => {
    card.addEventListener('click', () => {
        const singerName = card.querySelector('h3').textContent;
        alert(`你選擇的是歌手：${singerName}！`);
    });
});

// 滑鼠移過卡片時的動態效果
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'all 0.3s';
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        card.style.transform = 'scale(1)';
    });
});

// 添加返回頂部按鈕
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '⬆️ 回到頂部';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.backgroundColor = '#007aff';
scrollToTopButton.style.color = 'white';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.padding = '10px 20px';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.display = 'none';
document.body.appendChild(scrollToTopButton);

// 滾動時顯示返回頂部按鈕
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// 返回頂部按鈕功能
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
