// عندما يمرر المستخدم الصفحة لأسفل 20 بكسل يظهر الزر
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// عند الضغط على الزر يعيد الصفحة للأعلى بسلاسة
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
