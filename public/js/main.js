// Tabs Manipulation
const tabs = document.querySelectorAll('#tab-menu li');
const tabContent = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContent.forEach(content => {
            if(content.getAttribute('id') === target){
                content.classList.remove('is-hidden');
            } else {
                content.classList.add('is-hidden');
            }
        });
    })
})

// Sub Tabs Manipulation
const subTabs = document.querySelectorAll('#subtab-menu li');
const subTabsContent = document.querySelectorAll('#subtab-content > div');

subTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        subTabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const subtarget = tab.dataset.target;
        subTabsContent.forEach(content => {
            if(content.getAttribute('id') === subtarget){
                content.classList.remove('is-hidden');
            } else {
                content.classList.add('is-hidden');
            }
        });
    })
})
