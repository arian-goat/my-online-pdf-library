document.addEventListener('DOMContentLoaded', () => {
    // این کد مطمئن می‌شود که جاوااسکریپت بعد از بارگذاری کامل HTML اجرا شود.

    // 1. عملکرد جستجوی ساده (فیلتر کردن کارت‌های دسته‌بندی)
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const categoryCards = document.querySelectorAll('.category-card');

    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase(); // متن جستجو شده را به حروف کوچک تبدیل می‌کند.

        categoryCards.forEach(card => {
            const cardTitle = card.querySelector('h3').textContent.toLowerCase(); // عنوان کارت را به حروف کوچک تبدیل می‌کند.
            const cardDescription = card.querySelector('p').textContent.toLowerCase(); // توضیحات کارت را به حروف کوچک تبدیل می‌کند.

            // اگر متن جستجو در عنوان یا توضیحات کارت پیدا شد، کارت را نمایش می‌دهد.
            if (cardTitle.includes(searchTerm) || cardDescription.includes(searchTerm)) {
                card.style.display = 'flex'; // کارت را به صورت فلکس (نمایش می‌دهد)
            } else {
                card.style.display = 'none'; // کارت را پنهان می‌کند.
            }
        });
    });

    // 2. یک پیام ساده در کنسول (برای تست که جاوااسکریپت کار می‌کند)
    console.log('کتابخانه رابین آماده ارائه دانش است!');

    // 3. (اختیاری) می‌توانید در آینده اینجا کد برای دکمه "جستجو" بنویسید
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', () => {
        // مثلاً اینجا می‌توانید جستجو را از طریق API انجام دهید یا پیام بدهید
        // alert('فعلاً جستجوی پیشرفته فعال نیست. از فیلتر مستقیم استفاده کنید.');
        // یا حتی می‌توانید بدون نیاز به این کلیک، همان فیلتر بالا را فعال کنید که همین الان فعال است.
        console.log('دکمه جستجو کلیک شد. متن ورودی:', searchInput.value);
    });

    // می‌توانید در آینده هر نوع تعامل کاربری دیگر را اینجا اضافه کنید.
    // مثلاً: نمایش تعداد کتاب‌ها در هر دسته، بارگذاری پویا، انیمیشن‌های بیشتر.

});