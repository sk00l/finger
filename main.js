document.getElementById('check-platform').addEventListener('click', function() {
    document.getElementById('platform-result').textContent = `Platform: ${navigator.platform}`;
});
