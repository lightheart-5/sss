console.log('JavaScript文件已加载');

// 确保DOM加载完成
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimation);
} else {
    initAnimation();
}

function initAnimation() {
    console.log('DOM加载完成，准备初始化动画');
    try {
        // 立即添加loaded类
        document.body.classList.add("loaded");
        // 强制重排
        document.body.offsetHeight;
        console.log('动画初始化完成');
    } catch (error) {
        console.error('初始化时发生错误:', error);
    }
}
