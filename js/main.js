document.addEventListener('DOMContentLoaded', () => {
  // 모든 Learn‑More 버튼에 이벤트 연결
  document.querySelectorAll('.learn-more').forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      const targetUrl = btn.dataset.href;
      if (targetUrl) {
        // 페이지 이동 (새 탭 대신 같은 탭, 필요하면 window.open 사용)
        window.location.href = targetUrl;
      } else {
        console.warn('data-href 속성이 없습니다: ', btn);
      }
    });
  });
});
